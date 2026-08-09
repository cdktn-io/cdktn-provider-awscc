# `route53RecoverycontrolSafetyRule` Submodule <a name="`route53RecoverycontrolSafetyRule` Submodule" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Route53RecoverycontrolSafetyRule <a name="Route53RecoverycontrolSafetyRule" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53recoverycontrol_safety_rule awscc_route53recoverycontrol_safety_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Route53RecoverycontrolSafetyRule(Construct Scope, string Id, Route53RecoverycontrolSafetyRuleConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleConfig">Route53RecoverycontrolSafetyRuleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleConfig">Route53RecoverycontrolSafetyRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.putAssertionRule">PutAssertionRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.putGatingRule">PutGatingRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.putRuleConfig">PutRuleConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.resetAssertionRule">ResetAssertionRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.resetControlPanelArn">ResetControlPanelArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.resetGatingRule">ResetGatingRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.resetRuleConfig">ResetRuleConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAssertionRule` <a name="PutAssertionRule" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.putAssertionRule"></a>

```csharp
private void PutAssertionRule(Route53RecoverycontrolSafetyRuleAssertionRule Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.putAssertionRule.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRule">Route53RecoverycontrolSafetyRuleAssertionRule</a>

---

##### `PutGatingRule` <a name="PutGatingRule" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.putGatingRule"></a>

```csharp
private void PutGatingRule(Route53RecoverycontrolSafetyRuleGatingRule Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.putGatingRule.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRule">Route53RecoverycontrolSafetyRuleGatingRule</a>

---

##### `PutRuleConfig` <a name="PutRuleConfig" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.putRuleConfig"></a>

```csharp
private void PutRuleConfig(Route53RecoverycontrolSafetyRuleRuleConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.putRuleConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfig">Route53RecoverycontrolSafetyRuleRuleConfig</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.putTags"></a>

```csharp
private void PutTags(IResolvable|Route53RecoverycontrolSafetyRuleTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTags">Route53RecoverycontrolSafetyRuleTags</a>[]

---

##### `ResetAssertionRule` <a name="ResetAssertionRule" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.resetAssertionRule"></a>

```csharp
private void ResetAssertionRule()
```

##### `ResetControlPanelArn` <a name="ResetControlPanelArn" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.resetControlPanelArn"></a>

```csharp
private void ResetControlPanelArn()
```

##### `ResetGatingRule` <a name="ResetGatingRule" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.resetGatingRule"></a>

```csharp
private void ResetGatingRule()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetRuleConfig` <a name="ResetRuleConfig" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.resetRuleConfig"></a>

```csharp
private void ResetRuleConfig()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a Route53RecoverycontrolSafetyRule resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Route53RecoverycontrolSafetyRule.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Route53RecoverycontrolSafetyRule.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Route53RecoverycontrolSafetyRule.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Route53RecoverycontrolSafetyRule.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a Route53RecoverycontrolSafetyRule resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Route53RecoverycontrolSafetyRule to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Route53RecoverycontrolSafetyRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53recoverycontrol_safety_rule#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the Route53RecoverycontrolSafetyRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.assertionRule">AssertionRule</a></code> | <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference">Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.gatingRule">GatingRule</a></code> | <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference">Route53RecoverycontrolSafetyRuleGatingRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.ruleConfig">RuleConfig</a></code> | <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference">Route53RecoverycontrolSafetyRuleRuleConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.safetyRuleArn">SafetyRuleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsList">Route53RecoverycontrolSafetyRuleTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.assertionRuleInput">AssertionRuleInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRule">Route53RecoverycontrolSafetyRuleAssertionRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.controlPanelArnInput">ControlPanelArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.gatingRuleInput">GatingRuleInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRule">Route53RecoverycontrolSafetyRuleGatingRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.ruleConfigInput">RuleConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfig">Route53RecoverycontrolSafetyRuleRuleConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTags">Route53RecoverycontrolSafetyRuleTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.controlPanelArn">ControlPanelArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AssertionRule`<sup>Required</sup> <a name="AssertionRule" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.assertionRule"></a>

```csharp
public Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference AssertionRule { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference">Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference</a>

---

##### `GatingRule`<sup>Required</sup> <a name="GatingRule" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.gatingRule"></a>

```csharp
public Route53RecoverycontrolSafetyRuleGatingRuleOutputReference GatingRule { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference">Route53RecoverycontrolSafetyRuleGatingRuleOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `RuleConfig`<sup>Required</sup> <a name="RuleConfig" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.ruleConfig"></a>

```csharp
public Route53RecoverycontrolSafetyRuleRuleConfigOutputReference RuleConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference">Route53RecoverycontrolSafetyRuleRuleConfigOutputReference</a>

---

##### `SafetyRuleArn`<sup>Required</sup> <a name="SafetyRuleArn" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.safetyRuleArn"></a>

```csharp
public string SafetyRuleArn { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.tags"></a>

```csharp
public Route53RecoverycontrolSafetyRuleTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsList">Route53RecoverycontrolSafetyRuleTagsList</a>

---

##### `AssertionRuleInput`<sup>Optional</sup> <a name="AssertionRuleInput" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.assertionRuleInput"></a>

```csharp
public IResolvable|Route53RecoverycontrolSafetyRuleAssertionRule AssertionRuleInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRule">Route53RecoverycontrolSafetyRuleAssertionRule</a>

---

##### `ControlPanelArnInput`<sup>Optional</sup> <a name="ControlPanelArnInput" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.controlPanelArnInput"></a>

```csharp
public string ControlPanelArnInput { get; }
```

- *Type:* string

---

##### `GatingRuleInput`<sup>Optional</sup> <a name="GatingRuleInput" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.gatingRuleInput"></a>

```csharp
public IResolvable|Route53RecoverycontrolSafetyRuleGatingRule GatingRuleInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRule">Route53RecoverycontrolSafetyRuleGatingRule</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RuleConfigInput`<sup>Optional</sup> <a name="RuleConfigInput" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.ruleConfigInput"></a>

```csharp
public IResolvable|Route53RecoverycontrolSafetyRuleRuleConfig RuleConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfig">Route53RecoverycontrolSafetyRuleRuleConfig</a>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.tagsInput"></a>

```csharp
public IResolvable|Route53RecoverycontrolSafetyRuleTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTags">Route53RecoverycontrolSafetyRuleTags</a>[]

---

##### `ControlPanelArn`<sup>Required</sup> <a name="ControlPanelArn" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.controlPanelArn"></a>

```csharp
public string ControlPanelArn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Route53RecoverycontrolSafetyRuleAssertionRule <a name="Route53RecoverycontrolSafetyRuleAssertionRule" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRule.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Route53RecoverycontrolSafetyRuleAssertionRule {
    string[] AssertedControls = null,
    double WaitPeriodMs = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRule.property.assertedControls">AssertedControls</a></code> | <code>string[]</code> | The routing controls that are part of transactions that are evaluated to determine if a request to change a routing control state is allowed. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRule.property.waitPeriodMs">WaitPeriodMs</a></code> | <code>double</code> | An evaluation period, in milliseconds (ms), during which any request against the target routing controls will fail. |

---

##### `AssertedControls`<sup>Optional</sup> <a name="AssertedControls" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRule.property.assertedControls"></a>

```csharp
public string[] AssertedControls { get; set; }
```

- *Type:* string[]

The routing controls that are part of transactions that are evaluated to determine if a request to change a routing control state is allowed.

For example, you might include three routing controls, one for each of three AWS Regions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53recoverycontrol_safety_rule#asserted_controls Route53RecoverycontrolSafetyRule#asserted_controls}

---

##### `WaitPeriodMs`<sup>Optional</sup> <a name="WaitPeriodMs" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRule.property.waitPeriodMs"></a>

```csharp
public double WaitPeriodMs { get; set; }
```

- *Type:* double

An evaluation period, in milliseconds (ms), during which any request against the target routing controls will fail.

This helps prevent "flapping" of state. The wait period is 5000 ms by default, but you can choose a custom value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53recoverycontrol_safety_rule#wait_period_ms Route53RecoverycontrolSafetyRule#wait_period_ms}

---

### Route53RecoverycontrolSafetyRuleConfig <a name="Route53RecoverycontrolSafetyRuleConfig" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Route53RecoverycontrolSafetyRuleConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    Route53RecoverycontrolSafetyRuleAssertionRule AssertionRule = null,
    string ControlPanelArn = null,
    Route53RecoverycontrolSafetyRuleGatingRule GatingRule = null,
    string Name = null,
    Route53RecoverycontrolSafetyRuleRuleConfig RuleConfig = null,
    IResolvable|Route53RecoverycontrolSafetyRuleTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleConfig.property.assertionRule">AssertionRule</a></code> | <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRule">Route53RecoverycontrolSafetyRuleAssertionRule</a></code> | An assertion rule enforces that, when a routing control state is changed, that the criteria set by the rule configuration is met. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleConfig.property.controlPanelArn">ControlPanelArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the control panel. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleConfig.property.gatingRule">GatingRule</a></code> | <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRule">Route53RecoverycontrolSafetyRuleGatingRule</a></code> | A gating rule verifies that a set of gating controls evaluates as true, based on a rule configuration that you specify. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleConfig.property.name">Name</a></code> | <code>string</code> | The name for the safety rule. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleConfig.property.ruleConfig">RuleConfig</a></code> | <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfig">Route53RecoverycontrolSafetyRuleRuleConfig</a></code> | The rule configuration for an assertion rule or gating rule. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTags">Route53RecoverycontrolSafetyRuleTags</a>[]</code> | A collection of tags associated with a resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AssertionRule`<sup>Optional</sup> <a name="AssertionRule" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleConfig.property.assertionRule"></a>

```csharp
public Route53RecoverycontrolSafetyRuleAssertionRule AssertionRule { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRule">Route53RecoverycontrolSafetyRuleAssertionRule</a>

An assertion rule enforces that, when a routing control state is changed, that the criteria set by the rule configuration is met.

Otherwise, the change to the routing control is not accepted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53recoverycontrol_safety_rule#assertion_rule Route53RecoverycontrolSafetyRule#assertion_rule}

---

##### `ControlPanelArn`<sup>Optional</sup> <a name="ControlPanelArn" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleConfig.property.controlPanelArn"></a>

```csharp
public string ControlPanelArn { get; set; }
```

- *Type:* string

The Amazon Resource Name (ARN) of the control panel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53recoverycontrol_safety_rule#control_panel_arn Route53RecoverycontrolSafetyRule#control_panel_arn}

---

##### `GatingRule`<sup>Optional</sup> <a name="GatingRule" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleConfig.property.gatingRule"></a>

```csharp
public Route53RecoverycontrolSafetyRuleGatingRule GatingRule { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRule">Route53RecoverycontrolSafetyRuleGatingRule</a>

A gating rule verifies that a set of gating controls evaluates as true, based on a rule configuration that you specify.

If the gating rule evaluates to true, Amazon Route 53 Application Recovery Controller allows a set of routing control state changes to run and complete against the set of target controls.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53recoverycontrol_safety_rule#gating_rule Route53RecoverycontrolSafetyRule#gating_rule}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name for the safety rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53recoverycontrol_safety_rule#name Route53RecoverycontrolSafetyRule#name}

---

##### `RuleConfig`<sup>Optional</sup> <a name="RuleConfig" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleConfig.property.ruleConfig"></a>

```csharp
public Route53RecoverycontrolSafetyRuleRuleConfig RuleConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfig">Route53RecoverycontrolSafetyRuleRuleConfig</a>

The rule configuration for an assertion rule or gating rule.

This is the criteria that you set for specific assertion controls (routing controls) or gating controls. This configuration specifies how many controls must be enabled after a transaction completes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53recoverycontrol_safety_rule#rule_config Route53RecoverycontrolSafetyRule#rule_config}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleConfig.property.tags"></a>

```csharp
public IResolvable|Route53RecoverycontrolSafetyRuleTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTags">Route53RecoverycontrolSafetyRuleTags</a>[]

A collection of tags associated with a resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53recoverycontrol_safety_rule#tags Route53RecoverycontrolSafetyRule#tags}

---

### Route53RecoverycontrolSafetyRuleGatingRule <a name="Route53RecoverycontrolSafetyRuleGatingRule" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRule.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Route53RecoverycontrolSafetyRuleGatingRule {
    string[] GatingControls = null,
    string[] TargetControls = null,
    double WaitPeriodMs = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRule.property.gatingControls">GatingControls</a></code> | <code>string[]</code> | The gating controls for the gating rule. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRule.property.targetControls">TargetControls</a></code> | <code>string[]</code> | Routing controls that can only be set or unset if the specified RuleConfig evaluates to true for the specified GatingControls. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRule.property.waitPeriodMs">WaitPeriodMs</a></code> | <code>double</code> | An evaluation period, in milliseconds (ms), during which any request against the target routing controls will fail. |

---

##### `GatingControls`<sup>Optional</sup> <a name="GatingControls" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRule.property.gatingControls"></a>

```csharp
public string[] GatingControls { get; set; }
```

- *Type:* string[]

The gating controls for the gating rule.

That is, routing controls that are evaluated by the rule configuration that you specify.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53recoverycontrol_safety_rule#gating_controls Route53RecoverycontrolSafetyRule#gating_controls}

---

##### `TargetControls`<sup>Optional</sup> <a name="TargetControls" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRule.property.targetControls"></a>

```csharp
public string[] TargetControls { get; set; }
```

- *Type:* string[]

Routing controls that can only be set or unset if the specified RuleConfig evaluates to true for the specified GatingControls.

For example, say you have three gating controls, one for each of three AWS Regions. Now you specify AtLeast 2 as your RuleConfig. With these settings, you can only change (set or unset) the routing controls that you have specified as TargetControls if that rule evaluates to true.
In other words, your ability to change the routing controls that you have specified as TargetControls is gated by the rule that you set for the routing controls in GatingControls.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53recoverycontrol_safety_rule#target_controls Route53RecoverycontrolSafetyRule#target_controls}

---

##### `WaitPeriodMs`<sup>Optional</sup> <a name="WaitPeriodMs" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRule.property.waitPeriodMs"></a>

```csharp
public double WaitPeriodMs { get; set; }
```

- *Type:* double

An evaluation period, in milliseconds (ms), during which any request against the target routing controls will fail.

This helps prevent "flapping" of state. The wait period is 5000 ms by default, but you can choose a custom value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53recoverycontrol_safety_rule#wait_period_ms Route53RecoverycontrolSafetyRule#wait_period_ms}

---

### Route53RecoverycontrolSafetyRuleRuleConfig <a name="Route53RecoverycontrolSafetyRuleRuleConfig" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Route53RecoverycontrolSafetyRuleRuleConfig {
    bool|IResolvable Inverted = null,
    double Threshold = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfig.property.inverted">Inverted</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Logical negation of the rule. If the rule would usually evaluate true, it's evaluated as false, and vice versa. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfig.property.threshold">Threshold</a></code> | <code>double</code> | The value of N, when you specify an ATLEAST rule type. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfig.property.type">Type</a></code> | <code>string</code> | A rule can be one of the following: ATLEAST, AND, or OR. |

---

##### `Inverted`<sup>Optional</sup> <a name="Inverted" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfig.property.inverted"></a>

```csharp
public bool|IResolvable Inverted { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Logical negation of the rule. If the rule would usually evaluate true, it's evaluated as false, and vice versa.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53recoverycontrol_safety_rule#inverted Route53RecoverycontrolSafetyRule#inverted}

---

##### `Threshold`<sup>Optional</sup> <a name="Threshold" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfig.property.threshold"></a>

```csharp
public double Threshold { get; set; }
```

- *Type:* double

The value of N, when you specify an ATLEAST rule type.

That is, Threshold is the number of controls that must be set when you specify an ATLEAST type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53recoverycontrol_safety_rule#threshold Route53RecoverycontrolSafetyRule#threshold}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

A rule can be one of the following: ATLEAST, AND, or OR.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53recoverycontrol_safety_rule#type Route53RecoverycontrolSafetyRule#type}

---

### Route53RecoverycontrolSafetyRuleTags <a name="Route53RecoverycontrolSafetyRuleTags" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Route53RecoverycontrolSafetyRuleTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTags.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53recoverycontrol_safety_rule#key Route53RecoverycontrolSafetyRule#key}. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTags.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53recoverycontrol_safety_rule#value Route53RecoverycontrolSafetyRule#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53recoverycontrol_safety_rule#key Route53RecoverycontrolSafetyRule#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53recoverycontrol_safety_rule#value Route53RecoverycontrolSafetyRule#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference <a name="Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.resetAssertedControls">ResetAssertedControls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.resetWaitPeriodMs">ResetWaitPeriodMs</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAssertedControls` <a name="ResetAssertedControls" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.resetAssertedControls"></a>

```csharp
private void ResetAssertedControls()
```

##### `ResetWaitPeriodMs` <a name="ResetWaitPeriodMs" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.resetWaitPeriodMs"></a>

```csharp
private void ResetWaitPeriodMs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.property.assertedControlsInput">AssertedControlsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.property.waitPeriodMsInput">WaitPeriodMsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.property.assertedControls">AssertedControls</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.property.waitPeriodMs">WaitPeriodMs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRule">Route53RecoverycontrolSafetyRuleAssertionRule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AssertedControlsInput`<sup>Optional</sup> <a name="AssertedControlsInput" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.property.assertedControlsInput"></a>

```csharp
public string[] AssertedControlsInput { get; }
```

- *Type:* string[]

---

##### `WaitPeriodMsInput`<sup>Optional</sup> <a name="WaitPeriodMsInput" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.property.waitPeriodMsInput"></a>

```csharp
public double WaitPeriodMsInput { get; }
```

- *Type:* double

---

##### `AssertedControls`<sup>Required</sup> <a name="AssertedControls" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.property.assertedControls"></a>

```csharp
public string[] AssertedControls { get; }
```

- *Type:* string[]

---

##### `WaitPeriodMs`<sup>Required</sup> <a name="WaitPeriodMs" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.property.waitPeriodMs"></a>

```csharp
public double WaitPeriodMs { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Route53RecoverycontrolSafetyRuleAssertionRule InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRule">Route53RecoverycontrolSafetyRuleAssertionRule</a>

---


### Route53RecoverycontrolSafetyRuleGatingRuleOutputReference <a name="Route53RecoverycontrolSafetyRuleGatingRuleOutputReference" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Route53RecoverycontrolSafetyRuleGatingRuleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.resetGatingControls">ResetGatingControls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.resetTargetControls">ResetTargetControls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.resetWaitPeriodMs">ResetWaitPeriodMs</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetGatingControls` <a name="ResetGatingControls" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.resetGatingControls"></a>

```csharp
private void ResetGatingControls()
```

##### `ResetTargetControls` <a name="ResetTargetControls" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.resetTargetControls"></a>

```csharp
private void ResetTargetControls()
```

##### `ResetWaitPeriodMs` <a name="ResetWaitPeriodMs" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.resetWaitPeriodMs"></a>

```csharp
private void ResetWaitPeriodMs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.property.gatingControlsInput">GatingControlsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.property.targetControlsInput">TargetControlsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.property.waitPeriodMsInput">WaitPeriodMsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.property.gatingControls">GatingControls</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.property.targetControls">TargetControls</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.property.waitPeriodMs">WaitPeriodMs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRule">Route53RecoverycontrolSafetyRuleGatingRule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GatingControlsInput`<sup>Optional</sup> <a name="GatingControlsInput" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.property.gatingControlsInput"></a>

```csharp
public string[] GatingControlsInput { get; }
```

- *Type:* string[]

---

##### `TargetControlsInput`<sup>Optional</sup> <a name="TargetControlsInput" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.property.targetControlsInput"></a>

```csharp
public string[] TargetControlsInput { get; }
```

- *Type:* string[]

---

##### `WaitPeriodMsInput`<sup>Optional</sup> <a name="WaitPeriodMsInput" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.property.waitPeriodMsInput"></a>

```csharp
public double WaitPeriodMsInput { get; }
```

- *Type:* double

---

##### `GatingControls`<sup>Required</sup> <a name="GatingControls" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.property.gatingControls"></a>

```csharp
public string[] GatingControls { get; }
```

- *Type:* string[]

---

##### `TargetControls`<sup>Required</sup> <a name="TargetControls" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.property.targetControls"></a>

```csharp
public string[] TargetControls { get; }
```

- *Type:* string[]

---

##### `WaitPeriodMs`<sup>Required</sup> <a name="WaitPeriodMs" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.property.waitPeriodMs"></a>

```csharp
public double WaitPeriodMs { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Route53RecoverycontrolSafetyRuleGatingRule InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRule">Route53RecoverycontrolSafetyRuleGatingRule</a>

---


### Route53RecoverycontrolSafetyRuleRuleConfigOutputReference <a name="Route53RecoverycontrolSafetyRuleRuleConfigOutputReference" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Route53RecoverycontrolSafetyRuleRuleConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.resetInverted">ResetInverted</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.resetThreshold">ResetThreshold</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetInverted` <a name="ResetInverted" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.resetInverted"></a>

```csharp
private void ResetInverted()
```

##### `ResetThreshold` <a name="ResetThreshold" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.resetThreshold"></a>

```csharp
private void ResetThreshold()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.resetType"></a>

```csharp
private void ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.property.invertedInput">InvertedInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.property.thresholdInput">ThresholdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.property.inverted">Inverted</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.property.threshold">Threshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfig">Route53RecoverycontrolSafetyRuleRuleConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InvertedInput`<sup>Optional</sup> <a name="InvertedInput" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.property.invertedInput"></a>

```csharp
public bool|IResolvable InvertedInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ThresholdInput`<sup>Optional</sup> <a name="ThresholdInput" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.property.thresholdInput"></a>

```csharp
public double ThresholdInput { get; }
```

- *Type:* double

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Inverted`<sup>Required</sup> <a name="Inverted" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.property.inverted"></a>

```csharp
public bool|IResolvable Inverted { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Threshold`<sup>Required</sup> <a name="Threshold" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.property.threshold"></a>

```csharp
public double Threshold { get; }
```

- *Type:* double

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Route53RecoverycontrolSafetyRuleRuleConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfig">Route53RecoverycontrolSafetyRuleRuleConfig</a>

---


### Route53RecoverycontrolSafetyRuleTagsList <a name="Route53RecoverycontrolSafetyRuleTagsList" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Route53RecoverycontrolSafetyRuleTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsList.get"></a>

```csharp
private Route53RecoverycontrolSafetyRuleTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTags">Route53RecoverycontrolSafetyRuleTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsList.property.internalValue"></a>

```csharp
public IResolvable|Route53RecoverycontrolSafetyRuleTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTags">Route53RecoverycontrolSafetyRuleTags</a>[]

---


### Route53RecoverycontrolSafetyRuleTagsOutputReference <a name="Route53RecoverycontrolSafetyRuleTagsOutputReference" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Route53RecoverycontrolSafetyRuleTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTags">Route53RecoverycontrolSafetyRuleTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Route53RecoverycontrolSafetyRuleTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTags">Route53RecoverycontrolSafetyRuleTags</a>

---



