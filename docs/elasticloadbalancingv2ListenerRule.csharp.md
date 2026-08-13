# `elasticloadbalancingv2ListenerRule` Submodule <a name="`elasticloadbalancingv2ListenerRule` Submodule" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Elasticloadbalancingv2ListenerRule <a name="Elasticloadbalancingv2ListenerRule" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener_rule awscc_elasticloadbalancingv2_listener_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Elasticloadbalancingv2ListenerRule(Construct Scope, string Id, Elasticloadbalancingv2ListenerRuleConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConfig">Elasticloadbalancingv2ListenerRuleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConfig">Elasticloadbalancingv2ListenerRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.putActions">PutActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.putConditions">PutConditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.putTransforms">PutTransforms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.resetListenerArn">ResetListenerArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.resetTransforms">ResetTransforms</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutActions` <a name="PutActions" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.putActions"></a>

```csharp
private void PutActions(IResolvable|Elasticloadbalancingv2ListenerRuleActions[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.putActions.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActions">Elasticloadbalancingv2ListenerRuleActions</a>[]

---

##### `PutConditions` <a name="PutConditions" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.putConditions"></a>

```csharp
private void PutConditions(IResolvable|Elasticloadbalancingv2ListenerRuleConditions[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.putConditions.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditions">Elasticloadbalancingv2ListenerRuleConditions</a>[]

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.putTags"></a>

```csharp
private void PutTags(IResolvable|Elasticloadbalancingv2ListenerRuleTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTags">Elasticloadbalancingv2ListenerRuleTags</a>[]

---

##### `PutTransforms` <a name="PutTransforms" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.putTransforms"></a>

```csharp
private void PutTransforms(IResolvable|Elasticloadbalancingv2ListenerRuleTransforms[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.putTransforms.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransforms">Elasticloadbalancingv2ListenerRuleTransforms</a>[]

---

##### `ResetListenerArn` <a name="ResetListenerArn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.resetListenerArn"></a>

```csharp
private void ResetListenerArn()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTransforms` <a name="ResetTransforms" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.resetTransforms"></a>

```csharp
private void ResetTransforms()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a Elasticloadbalancingv2ListenerRule resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Elasticloadbalancingv2ListenerRule.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Elasticloadbalancingv2ListenerRule.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Elasticloadbalancingv2ListenerRule.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Elasticloadbalancingv2ListenerRule.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a Elasticloadbalancingv2ListenerRule resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Elasticloadbalancingv2ListenerRule to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Elasticloadbalancingv2ListenerRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener_rule#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the Elasticloadbalancingv2ListenerRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.property.actions">Actions</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsList">Elasticloadbalancingv2ListenerRuleActionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.property.conditions">Conditions</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsList">Elasticloadbalancingv2ListenerRuleConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.property.isDefault">IsDefault</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.property.ruleArn">RuleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsList">Elasticloadbalancingv2ListenerRuleTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.property.transforms">Transforms</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsList">Elasticloadbalancingv2ListenerRuleTransformsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.property.actionsInput">ActionsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActions">Elasticloadbalancingv2ListenerRuleActions</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.property.conditionsInput">ConditionsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditions">Elasticloadbalancingv2ListenerRuleConditions</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.property.listenerArnInput">ListenerArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.property.priorityInput">PriorityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTags">Elasticloadbalancingv2ListenerRuleTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.property.transformsInput">TransformsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransforms">Elasticloadbalancingv2ListenerRuleTransforms</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.property.listenerArn">ListenerArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.property.priority">Priority</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Actions`<sup>Required</sup> <a name="Actions" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.property.actions"></a>

```csharp
public Elasticloadbalancingv2ListenerRuleActionsList Actions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsList">Elasticloadbalancingv2ListenerRuleActionsList</a>

---

##### `Conditions`<sup>Required</sup> <a name="Conditions" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.property.conditions"></a>

```csharp
public Elasticloadbalancingv2ListenerRuleConditionsList Conditions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsList">Elasticloadbalancingv2ListenerRuleConditionsList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsDefault`<sup>Required</sup> <a name="IsDefault" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.property.isDefault"></a>

```csharp
public IResolvable IsDefault { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `RuleArn`<sup>Required</sup> <a name="RuleArn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.property.ruleArn"></a>

```csharp
public string RuleArn { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.property.tags"></a>

```csharp
public Elasticloadbalancingv2ListenerRuleTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsList">Elasticloadbalancingv2ListenerRuleTagsList</a>

---

##### `Transforms`<sup>Required</sup> <a name="Transforms" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.property.transforms"></a>

```csharp
public Elasticloadbalancingv2ListenerRuleTransformsList Transforms { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsList">Elasticloadbalancingv2ListenerRuleTransformsList</a>

---

##### `ActionsInput`<sup>Optional</sup> <a name="ActionsInput" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.property.actionsInput"></a>

```csharp
public IResolvable|Elasticloadbalancingv2ListenerRuleActions[] ActionsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActions">Elasticloadbalancingv2ListenerRuleActions</a>[]

---

##### `ConditionsInput`<sup>Optional</sup> <a name="ConditionsInput" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.property.conditionsInput"></a>

```csharp
public IResolvable|Elasticloadbalancingv2ListenerRuleConditions[] ConditionsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditions">Elasticloadbalancingv2ListenerRuleConditions</a>[]

---

##### `ListenerArnInput`<sup>Optional</sup> <a name="ListenerArnInput" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.property.listenerArnInput"></a>

```csharp
public string ListenerArnInput { get; }
```

- *Type:* string

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.property.priorityInput"></a>

```csharp
public double PriorityInput { get; }
```

- *Type:* double

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.property.tagsInput"></a>

```csharp
public IResolvable|Elasticloadbalancingv2ListenerRuleTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTags">Elasticloadbalancingv2ListenerRuleTags</a>[]

---

##### `TransformsInput`<sup>Optional</sup> <a name="TransformsInput" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.property.transformsInput"></a>

```csharp
public IResolvable|Elasticloadbalancingv2ListenerRuleTransforms[] TransformsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransforms">Elasticloadbalancingv2ListenerRuleTransforms</a>[]

---

##### `ListenerArn`<sup>Required</sup> <a name="ListenerArn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.property.listenerArn"></a>

```csharp
public string ListenerArn { get; }
```

- *Type:* string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.property.priority"></a>

```csharp
public double Priority { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Elasticloadbalancingv2ListenerRuleActions <a name="Elasticloadbalancingv2ListenerRuleActions" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Elasticloadbalancingv2ListenerRuleActions {
    string Type,
    Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfig AuthenticateCognitoConfig = null,
    Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfig AuthenticateOidcConfig = null,
    Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfig FixedResponseConfig = null,
    Elasticloadbalancingv2ListenerRuleActionsForwardConfig ForwardConfig = null,
    Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfig JwtValidationConfig = null,
    double Order = null,
    Elasticloadbalancingv2ListenerRuleActionsRedirectConfig RedirectConfig = null,
    string TargetGroupArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActions.property.type">Type</a></code> | <code>string</code> | The type of action. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActions.property.authenticateCognitoConfig">AuthenticateCognitoConfig</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfig">Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfig</a></code> | [HTTPS listeners] Information for using Amazon Cognito to authenticate users. Specify only when ``Type`` is ``authenticate-cognito``. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActions.property.authenticateOidcConfig">AuthenticateOidcConfig</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfig">Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfig</a></code> | [HTTPS listeners] Information about an identity provider that is compliant with OpenID Connect (OIDC). |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActions.property.fixedResponseConfig">FixedResponseConfig</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfig">Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfig</a></code> | [Application Load Balancer] Information for creating an action that returns a custom HTTP response. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActions.property.forwardConfig">ForwardConfig</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfig">Elasticloadbalancingv2ListenerRuleActionsForwardConfig</a></code> | Information for creating an action that distributes requests among multiple target groups. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActions.property.jwtValidationConfig">JwtValidationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfig">Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfig</a></code> | [HTTPS listeners] Information for validating JWT access tokens in client requests. Specify only when ``Type`` is ``jwt-validation``. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActions.property.order">Order</a></code> | <code>double</code> | The order for the action. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActions.property.redirectConfig">RedirectConfig</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfig">Elasticloadbalancingv2ListenerRuleActionsRedirectConfig</a></code> | [Application Load Balancer] Information for creating a redirect action. Specify only when ``Type`` is ``redirect``. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActions.property.targetGroupArn">TargetGroupArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the target group. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActions.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The type of action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener_rule#type Elasticloadbalancingv2ListenerRule#type}

---

##### `AuthenticateCognitoConfig`<sup>Optional</sup> <a name="AuthenticateCognitoConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActions.property.authenticateCognitoConfig"></a>

```csharp
public Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfig AuthenticateCognitoConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfig">Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfig</a>

[HTTPS listeners] Information for using Amazon Cognito to authenticate users. Specify only when ``Type`` is ``authenticate-cognito``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener_rule#authenticate_cognito_config Elasticloadbalancingv2ListenerRule#authenticate_cognito_config}

---

##### `AuthenticateOidcConfig`<sup>Optional</sup> <a name="AuthenticateOidcConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActions.property.authenticateOidcConfig"></a>

```csharp
public Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfig AuthenticateOidcConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfig">Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfig</a>

[HTTPS listeners] Information about an identity provider that is compliant with OpenID Connect (OIDC).

Specify only when `Type` is `authenticate-oidc`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener_rule#authenticate_oidc_config Elasticloadbalancingv2ListenerRule#authenticate_oidc_config}

---

##### `FixedResponseConfig`<sup>Optional</sup> <a name="FixedResponseConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActions.property.fixedResponseConfig"></a>

```csharp
public Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfig FixedResponseConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfig">Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfig</a>

[Application Load Balancer] Information for creating an action that returns a custom HTTP response.

Specify only when `Type` is `fixed-response`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener_rule#fixed_response_config Elasticloadbalancingv2ListenerRule#fixed_response_config}

---

##### `ForwardConfig`<sup>Optional</sup> <a name="ForwardConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActions.property.forwardConfig"></a>

```csharp
public Elasticloadbalancingv2ListenerRuleActionsForwardConfig ForwardConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfig">Elasticloadbalancingv2ListenerRuleActionsForwardConfig</a>

Information for creating an action that distributes requests among multiple target groups.

Specify only when `Type` is `forward`.
If you specify both `ForwardConfig` and `TargetGroupArn`, you can specify only one target group using `ForwardConfig` and it must be the same target group specified in `TargetGroupArn`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener_rule#forward_config Elasticloadbalancingv2ListenerRule#forward_config}

---

##### `JwtValidationConfig`<sup>Optional</sup> <a name="JwtValidationConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActions.property.jwtValidationConfig"></a>

```csharp
public Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfig JwtValidationConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfig">Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfig</a>

[HTTPS listeners] Information for validating JWT access tokens in client requests. Specify only when ``Type`` is ``jwt-validation``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener_rule#jwt_validation_config Elasticloadbalancingv2ListenerRule#jwt_validation_config}

---

##### `Order`<sup>Optional</sup> <a name="Order" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActions.property.order"></a>

```csharp
public double Order { get; set; }
```

- *Type:* double

The order for the action.

This value is required for rules with multiple actions. The action with the lowest value for order is performed first.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener_rule#order Elasticloadbalancingv2ListenerRule#order}

---

##### `RedirectConfig`<sup>Optional</sup> <a name="RedirectConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActions.property.redirectConfig"></a>

```csharp
public Elasticloadbalancingv2ListenerRuleActionsRedirectConfig RedirectConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfig">Elasticloadbalancingv2ListenerRuleActionsRedirectConfig</a>

[Application Load Balancer] Information for creating a redirect action. Specify only when ``Type`` is ``redirect``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener_rule#redirect_config Elasticloadbalancingv2ListenerRule#redirect_config}

---

##### `TargetGroupArn`<sup>Optional</sup> <a name="TargetGroupArn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActions.property.targetGroupArn"></a>

```csharp
public string TargetGroupArn { get; set; }
```

- *Type:* string

The Amazon Resource Name (ARN) of the target group.

Specify only when `Type` is `forward` and you want to route to a single target group. To route to multiple target groups, you must use `ForwardConfig` instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener_rule#target_group_arn Elasticloadbalancingv2ListenerRule#target_group_arn}

---

### Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfig <a name="Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfig {
    System.Collections.Generic.IDictionary<string, string> AuthenticationRequestExtraParams = null,
    string OnUnauthenticatedRequest = null,
    string Scope = null,
    string SessionCookieName = null,
    double SessionTimeout = null,
    string UserPoolArn = null,
    string UserPoolClientId = null,
    string UserPoolDomain = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfig.property.authenticationRequestExtraParams">AuthenticationRequestExtraParams</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | The query parameters (up to 10) to include in the redirect request to the authorization endpoint. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfig.property.onUnauthenticatedRequest">OnUnauthenticatedRequest</a></code> | <code>string</code> | The behavior if the user is not authenticated. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfig.property.scope">Scope</a></code> | <code>string</code> | The set of user claims to be requested from the IdP. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfig.property.sessionCookieName">SessionCookieName</a></code> | <code>string</code> | The name of the cookie used to maintain session information. The default is AWSELBAuthSessionCookie. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfig.property.sessionTimeout">SessionTimeout</a></code> | <code>double</code> | The maximum duration of the authentication session, in seconds. The default is 604800 seconds (7 days). |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfig.property.userPoolArn">UserPoolArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the Amazon Cognito user pool. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfig.property.userPoolClientId">UserPoolClientId</a></code> | <code>string</code> | The ID of the Amazon Cognito user pool client. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfig.property.userPoolDomain">UserPoolDomain</a></code> | <code>string</code> | The domain prefix or fully-qualified domain name of the Amazon Cognito user pool. |

---

##### `AuthenticationRequestExtraParams`<sup>Optional</sup> <a name="AuthenticationRequestExtraParams" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfig.property.authenticationRequestExtraParams"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AuthenticationRequestExtraParams { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

The query parameters (up to 10) to include in the redirect request to the authorization endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener_rule#authentication_request_extra_params Elasticloadbalancingv2ListenerRule#authentication_request_extra_params}

---

##### `OnUnauthenticatedRequest`<sup>Optional</sup> <a name="OnUnauthenticatedRequest" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfig.property.onUnauthenticatedRequest"></a>

```csharp
public string OnUnauthenticatedRequest { get; set; }
```

- *Type:* string

The behavior if the user is not authenticated.

The following are possible values:

* deny```` - Return an HTTP 401 Unauthorized error.
* allow```` - Allow the request to be forwarded to the target.
* authenticate```` - Redirect the request to the IdP authorization endpoint. This is the default value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener_rule#on_unauthenticated_request Elasticloadbalancingv2ListenerRule#on_unauthenticated_request}

---

##### `Scope`<sup>Optional</sup> <a name="Scope" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfig.property.scope"></a>

```csharp
public string Scope { get; set; }
```

- *Type:* string

The set of user claims to be requested from the IdP.

The default is `openid`.
To verify which scope values your IdP supports and how to separate multiple values, see the documentation for your IdP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener_rule#scope Elasticloadbalancingv2ListenerRule#scope}

---

##### `SessionCookieName`<sup>Optional</sup> <a name="SessionCookieName" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfig.property.sessionCookieName"></a>

```csharp
public string SessionCookieName { get; set; }
```

- *Type:* string

The name of the cookie used to maintain session information. The default is AWSELBAuthSessionCookie.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener_rule#session_cookie_name Elasticloadbalancingv2ListenerRule#session_cookie_name}

---

##### `SessionTimeout`<sup>Optional</sup> <a name="SessionTimeout" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfig.property.sessionTimeout"></a>

```csharp
public double SessionTimeout { get; set; }
```

- *Type:* double

The maximum duration of the authentication session, in seconds. The default is 604800 seconds (7 days).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener_rule#session_timeout Elasticloadbalancingv2ListenerRule#session_timeout}

---

##### `UserPoolArn`<sup>Optional</sup> <a name="UserPoolArn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfig.property.userPoolArn"></a>

```csharp
public string UserPoolArn { get; set; }
```

- *Type:* string

The Amazon Resource Name (ARN) of the Amazon Cognito user pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener_rule#user_pool_arn Elasticloadbalancingv2ListenerRule#user_pool_arn}

---

##### `UserPoolClientId`<sup>Optional</sup> <a name="UserPoolClientId" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfig.property.userPoolClientId"></a>

```csharp
public string UserPoolClientId { get; set; }
```

- *Type:* string

The ID of the Amazon Cognito user pool client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener_rule#user_pool_client_id Elasticloadbalancingv2ListenerRule#user_pool_client_id}

---

##### `UserPoolDomain`<sup>Optional</sup> <a name="UserPoolDomain" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfig.property.userPoolDomain"></a>

```csharp
public string UserPoolDomain { get; set; }
```

- *Type:* string

The domain prefix or fully-qualified domain name of the Amazon Cognito user pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener_rule#user_pool_domain Elasticloadbalancingv2ListenerRule#user_pool_domain}

---

### Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfig <a name="Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfig {
    System.Collections.Generic.IDictionary<string, string> AuthenticationRequestExtraParams = null,
    string AuthorizationEndpoint = null,
    string ClientId = null,
    string ClientSecret = null,
    string Issuer = null,
    string OnUnauthenticatedRequest = null,
    string Scope = null,
    string SessionCookieName = null,
    double SessionTimeout = null,
    string TokenEndpoint = null,
    bool|IResolvable UseExistingClientSecret = null,
    string UserInfoEndpoint = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfig.property.authenticationRequestExtraParams">AuthenticationRequestExtraParams</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | The query parameters (up to 10) to include in the redirect request to the authorization endpoint. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfig.property.authorizationEndpoint">AuthorizationEndpoint</a></code> | <code>string</code> | The authorization endpoint of the IdP. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfig.property.clientId">ClientId</a></code> | <code>string</code> | The OAuth 2.0 client identifier. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfig.property.clientSecret">ClientSecret</a></code> | <code>string</code> | The OAuth 2.0 client secret. This parameter is required if you are creating a rule. If you are modifying a rule, you can omit this parameter if you set ``UseExistingClientSecret`` to true. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfig.property.issuer">Issuer</a></code> | <code>string</code> | The OIDC issuer identifier of the IdP. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfig.property.onUnauthenticatedRequest">OnUnauthenticatedRequest</a></code> | <code>string</code> | The behavior if the user is not authenticated. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfig.property.scope">Scope</a></code> | <code>string</code> | The set of user claims to be requested from the IdP. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfig.property.sessionCookieName">SessionCookieName</a></code> | <code>string</code> | The name of the cookie used to maintain session information. The default is AWSELBAuthSessionCookie. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfig.property.sessionTimeout">SessionTimeout</a></code> | <code>double</code> | The maximum duration of the authentication session, in seconds. The default is 604800 seconds (7 days). |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfig.property.tokenEndpoint">TokenEndpoint</a></code> | <code>string</code> | The token endpoint of the IdP. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfig.property.useExistingClientSecret">UseExistingClientSecret</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Indicates whether to use the existing client secret when modifying a rule. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfig.property.userInfoEndpoint">UserInfoEndpoint</a></code> | <code>string</code> | The user info endpoint of the IdP. |

---

##### `AuthenticationRequestExtraParams`<sup>Optional</sup> <a name="AuthenticationRequestExtraParams" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfig.property.authenticationRequestExtraParams"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AuthenticationRequestExtraParams { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

The query parameters (up to 10) to include in the redirect request to the authorization endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener_rule#authentication_request_extra_params Elasticloadbalancingv2ListenerRule#authentication_request_extra_params}

---

##### `AuthorizationEndpoint`<sup>Optional</sup> <a name="AuthorizationEndpoint" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfig.property.authorizationEndpoint"></a>

```csharp
public string AuthorizationEndpoint { get; set; }
```

- *Type:* string

The authorization endpoint of the IdP.

This must be a full URL, including the HTTPS protocol, the domain, and the path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener_rule#authorization_endpoint Elasticloadbalancingv2ListenerRule#authorization_endpoint}

---

##### `ClientId`<sup>Optional</sup> <a name="ClientId" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfig.property.clientId"></a>

```csharp
public string ClientId { get; set; }
```

- *Type:* string

The OAuth 2.0 client identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener_rule#client_id Elasticloadbalancingv2ListenerRule#client_id}

---

##### `ClientSecret`<sup>Optional</sup> <a name="ClientSecret" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfig.property.clientSecret"></a>

```csharp
public string ClientSecret { get; set; }
```

- *Type:* string

The OAuth 2.0 client secret. This parameter is required if you are creating a rule. If you are modifying a rule, you can omit this parameter if you set ``UseExistingClientSecret`` to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener_rule#client_secret Elasticloadbalancingv2ListenerRule#client_secret}

---

##### `Issuer`<sup>Optional</sup> <a name="Issuer" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfig.property.issuer"></a>

```csharp
public string Issuer { get; set; }
```

- *Type:* string

The OIDC issuer identifier of the IdP.

This must be a full URL, including the HTTPS protocol, the domain, and the path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener_rule#issuer Elasticloadbalancingv2ListenerRule#issuer}

---

##### `OnUnauthenticatedRequest`<sup>Optional</sup> <a name="OnUnauthenticatedRequest" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfig.property.onUnauthenticatedRequest"></a>

```csharp
public string OnUnauthenticatedRequest { get; set; }
```

- *Type:* string

The behavior if the user is not authenticated.

The following are possible values:

* deny```` - Return an HTTP 401 Unauthorized error.
* allow```` - Allow the request to be forwarded to the target.
* authenticate```` - Redirect the request to the IdP authorization endpoint. This is the default value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener_rule#on_unauthenticated_request Elasticloadbalancingv2ListenerRule#on_unauthenticated_request}

---

##### `Scope`<sup>Optional</sup> <a name="Scope" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfig.property.scope"></a>

```csharp
public string Scope { get; set; }
```

- *Type:* string

The set of user claims to be requested from the IdP.

The default is `openid`.
To verify which scope values your IdP supports and how to separate multiple values, see the documentation for your IdP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener_rule#scope Elasticloadbalancingv2ListenerRule#scope}

---

##### `SessionCookieName`<sup>Optional</sup> <a name="SessionCookieName" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfig.property.sessionCookieName"></a>

```csharp
public string SessionCookieName { get; set; }
```

- *Type:* string

The name of the cookie used to maintain session information. The default is AWSELBAuthSessionCookie.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener_rule#session_cookie_name Elasticloadbalancingv2ListenerRule#session_cookie_name}

---

##### `SessionTimeout`<sup>Optional</sup> <a name="SessionTimeout" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfig.property.sessionTimeout"></a>

```csharp
public double SessionTimeout { get; set; }
```

- *Type:* double

The maximum duration of the authentication session, in seconds. The default is 604800 seconds (7 days).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener_rule#session_timeout Elasticloadbalancingv2ListenerRule#session_timeout}

---

##### `TokenEndpoint`<sup>Optional</sup> <a name="TokenEndpoint" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfig.property.tokenEndpoint"></a>

```csharp
public string TokenEndpoint { get; set; }
```

- *Type:* string

The token endpoint of the IdP.

This must be a full URL, including the HTTPS protocol, the domain, and the path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener_rule#token_endpoint Elasticloadbalancingv2ListenerRule#token_endpoint}

---

##### `UseExistingClientSecret`<sup>Optional</sup> <a name="UseExistingClientSecret" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfig.property.useExistingClientSecret"></a>

```csharp
public bool|IResolvable UseExistingClientSecret { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Indicates whether to use the existing client secret when modifying a rule.

If you are creating a rule, you can omit this parameter or set it to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener_rule#use_existing_client_secret Elasticloadbalancingv2ListenerRule#use_existing_client_secret}

---

##### `UserInfoEndpoint`<sup>Optional</sup> <a name="UserInfoEndpoint" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfig.property.userInfoEndpoint"></a>

```csharp
public string UserInfoEndpoint { get; set; }
```

- *Type:* string

The user info endpoint of the IdP.

This must be a full URL, including the HTTPS protocol, the domain, and the path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener_rule#user_info_endpoint Elasticloadbalancingv2ListenerRule#user_info_endpoint}

---

### Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfig <a name="Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfig {
    string ContentType = null,
    string MessageBody = null,
    string StatusCode = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfig.property.contentType">ContentType</a></code> | <code>string</code> | The content type.  Valid Values: text/plain \| text/css \| text/html \| application/javascript \| application/json. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfig.property.messageBody">MessageBody</a></code> | <code>string</code> | The message. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfig.property.statusCode">StatusCode</a></code> | <code>string</code> | The HTTP response code (2XX, 4XX, or 5XX). |

---

##### `ContentType`<sup>Optional</sup> <a name="ContentType" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfig.property.contentType"></a>

```csharp
public string ContentType { get; set; }
```

- *Type:* string

The content type.  Valid Values: text/plain | text/css | text/html | application/javascript | application/json.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener_rule#content_type Elasticloadbalancingv2ListenerRule#content_type}

---

##### `MessageBody`<sup>Optional</sup> <a name="MessageBody" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfig.property.messageBody"></a>

```csharp
public string MessageBody { get; set; }
```

- *Type:* string

The message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener_rule#message_body Elasticloadbalancingv2ListenerRule#message_body}

---

##### `StatusCode`<sup>Optional</sup> <a name="StatusCode" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfig.property.statusCode"></a>

```csharp
public string StatusCode { get; set; }
```

- *Type:* string

The HTTP response code (2XX, 4XX, or 5XX).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener_rule#status_code Elasticloadbalancingv2ListenerRule#status_code}

---

### Elasticloadbalancingv2ListenerRuleActionsForwardConfig <a name="Elasticloadbalancingv2ListenerRuleActionsForwardConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Elasticloadbalancingv2ListenerRuleActionsForwardConfig {
    IResolvable|Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroups[] TargetGroups = null,
    Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfig TargetGroupStickinessConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfig.property.targetGroups">TargetGroups</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroups">Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroups</a>[]</code> | Information about how traffic will be distributed between multiple target groups in a forward rule. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfig.property.targetGroupStickinessConfig">TargetGroupStickinessConfig</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfig">Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfig</a></code> | Information about the target group stickiness for a rule. |

---

##### `TargetGroups`<sup>Optional</sup> <a name="TargetGroups" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfig.property.targetGroups"></a>

```csharp
public IResolvable|Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroups[] TargetGroups { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroups">Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroups</a>[]

Information about how traffic will be distributed between multiple target groups in a forward rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener_rule#target_groups Elasticloadbalancingv2ListenerRule#target_groups}

---

##### `TargetGroupStickinessConfig`<sup>Optional</sup> <a name="TargetGroupStickinessConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfig.property.targetGroupStickinessConfig"></a>

```csharp
public Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfig TargetGroupStickinessConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfig">Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfig</a>

Information about the target group stickiness for a rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener_rule#target_group_stickiness_config Elasticloadbalancingv2ListenerRule#target_group_stickiness_config}

---

### Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroups <a name="Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroups" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroups"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroups.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroups {
    string TargetGroupArn = null,
    double Weight = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroups.property.targetGroupArn">TargetGroupArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the target group. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroups.property.weight">Weight</a></code> | <code>double</code> | The weight. The range is 0 to 999. |

---

##### `TargetGroupArn`<sup>Optional</sup> <a name="TargetGroupArn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroups.property.targetGroupArn"></a>

```csharp
public string TargetGroupArn { get; set; }
```

- *Type:* string

The Amazon Resource Name (ARN) of the target group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener_rule#target_group_arn Elasticloadbalancingv2ListenerRule#target_group_arn}

---

##### `Weight`<sup>Optional</sup> <a name="Weight" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroups.property.weight"></a>

```csharp
public double Weight { get; set; }
```

- *Type:* double

The weight. The range is 0 to 999.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener_rule#weight Elasticloadbalancingv2ListenerRule#weight}

---

### Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfig <a name="Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfig {
    double DurationSeconds = null,
    bool|IResolvable Enabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfig.property.durationSeconds">DurationSeconds</a></code> | <code>double</code> | [Application Load Balancers] The time period, in seconds, during which requests from a client should be routed to the same target group. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfig.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Indicates whether target group stickiness is enabled. |

---

##### `DurationSeconds`<sup>Optional</sup> <a name="DurationSeconds" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfig.property.durationSeconds"></a>

```csharp
public double DurationSeconds { get; set; }
```

- *Type:* double

[Application Load Balancers] The time period, in seconds, during which requests from a client should be routed to the same target group.

The range is 1-604800 seconds (7 days). You must specify this value when enabling target group stickiness.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener_rule#duration_seconds Elasticloadbalancingv2ListenerRule#duration_seconds}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfig.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Indicates whether target group stickiness is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener_rule#enabled Elasticloadbalancingv2ListenerRule#enabled}

---

### Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfig <a name="Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfig {
    IResolvable|Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaims[] AdditionalClaims = null,
    string Issuer = null,
    string JwksEndpoint = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfig.property.additionalClaims">AdditionalClaims</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaims">Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaims</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener_rule#additional_claims Elasticloadbalancingv2ListenerRule#additional_claims}. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfig.property.issuer">Issuer</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener_rule#issuer Elasticloadbalancingv2ListenerRule#issuer}. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfig.property.jwksEndpoint">JwksEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener_rule#jwks_endpoint Elasticloadbalancingv2ListenerRule#jwks_endpoint}. |

---

##### `AdditionalClaims`<sup>Optional</sup> <a name="AdditionalClaims" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfig.property.additionalClaims"></a>

```csharp
public IResolvable|Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaims[] AdditionalClaims { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaims">Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaims</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener_rule#additional_claims Elasticloadbalancingv2ListenerRule#additional_claims}.

---

##### `Issuer`<sup>Optional</sup> <a name="Issuer" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfig.property.issuer"></a>

```csharp
public string Issuer { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener_rule#issuer Elasticloadbalancingv2ListenerRule#issuer}.

---

##### `JwksEndpoint`<sup>Optional</sup> <a name="JwksEndpoint" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfig.property.jwksEndpoint"></a>

```csharp
public string JwksEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener_rule#jwks_endpoint Elasticloadbalancingv2ListenerRule#jwks_endpoint}.

---

### Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaims <a name="Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaims" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaims"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaims.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaims {
    string Format = null,
    string Name = null,
    string[] Values = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaims.property.format">Format</a></code> | <code>string</code> | The format of the claim value. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaims.property.name">Name</a></code> | <code>string</code> | The name of the claim. You can't specify ``exp``, ``iss``, ``nbf``, or ``iat`` because we validate them by default. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaims.property.values">Values</a></code> | <code>string[]</code> | The claim value. |

---

##### `Format`<sup>Optional</sup> <a name="Format" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaims.property.format"></a>

```csharp
public string Format { get; set; }
```

- *Type:* string

The format of the claim value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener_rule#format Elasticloadbalancingv2ListenerRule#format}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaims.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the claim. You can't specify ``exp``, ``iss``, ``nbf``, or ``iat`` because we validate them by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener_rule#name Elasticloadbalancingv2ListenerRule#name}

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaims.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

The claim value.

The maximum size of the list is 10. Each value can be up to 256 characters in length. If the format is `space-separated-values`, the values can't include spaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener_rule#values Elasticloadbalancingv2ListenerRule#values}

---

### Elasticloadbalancingv2ListenerRuleActionsRedirectConfig <a name="Elasticloadbalancingv2ListenerRuleActionsRedirectConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Elasticloadbalancingv2ListenerRuleActionsRedirectConfig {
    string Host = null,
    string Path = null,
    string Port = null,
    string Protocol = null,
    string Query = null,
    string StatusCode = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfig.property.host">Host</a></code> | <code>string</code> | The hostname. This component is not percent-encoded. The hostname can contain #{host}. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfig.property.path">Path</a></code> | <code>string</code> | The absolute path, starting with the leading "/". |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfig.property.port">Port</a></code> | <code>string</code> | The port. You can specify a value from 1 to 65535 or #{port}. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfig.property.protocol">Protocol</a></code> | <code>string</code> | The protocol. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfig.property.query">Query</a></code> | <code>string</code> | The query parameters, URL-encoded when necessary, but not percent-encoded. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfig.property.statusCode">StatusCode</a></code> | <code>string</code> | The HTTP redirect code. The redirect is either permanent (HTTP 301) or temporary (HTTP 302). |

---

##### `Host`<sup>Optional</sup> <a name="Host" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfig.property.host"></a>

```csharp
public string Host { get; set; }
```

- *Type:* string

The hostname. This component is not percent-encoded. The hostname can contain #{host}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener_rule#host Elasticloadbalancingv2ListenerRule#host}

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfig.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

The absolute path, starting with the leading "/".

This component is not percent-encoded. The path can contain #{host}, #{path}, and #{port}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener_rule#path Elasticloadbalancingv2ListenerRule#path}

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfig.property.port"></a>

```csharp
public string Port { get; set; }
```

- *Type:* string

The port. You can specify a value from 1 to 65535 or #{port}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener_rule#port Elasticloadbalancingv2ListenerRule#port}

---

##### `Protocol`<sup>Optional</sup> <a name="Protocol" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfig.property.protocol"></a>

```csharp
public string Protocol { get; set; }
```

- *Type:* string

The protocol.

You can specify HTTP, HTTPS, or #{protocol}. You can redirect HTTP to HTTP, HTTP to HTTPS, and HTTPS to HTTPS. You can't redirect HTTPS to HTTP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener_rule#protocol Elasticloadbalancingv2ListenerRule#protocol}

---

##### `Query`<sup>Optional</sup> <a name="Query" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfig.property.query"></a>

```csharp
public string Query { get; set; }
```

- *Type:* string

The query parameters, URL-encoded when necessary, but not percent-encoded.

Do not include the leading "?", as it is automatically added. You can specify any of the reserved keywords.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener_rule#query Elasticloadbalancingv2ListenerRule#query}

---

##### `StatusCode`<sup>Optional</sup> <a name="StatusCode" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfig.property.statusCode"></a>

```csharp
public string StatusCode { get; set; }
```

- *Type:* string

The HTTP redirect code. The redirect is either permanent (HTTP 301) or temporary (HTTP 302).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener_rule#status_code Elasticloadbalancingv2ListenerRule#status_code}

---

### Elasticloadbalancingv2ListenerRuleConditions <a name="Elasticloadbalancingv2ListenerRuleConditions" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Elasticloadbalancingv2ListenerRuleConditions {
    string Field = null,
    Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfig HostHeaderConfig = null,
    Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfig HttpHeaderConfig = null,
    Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfig HttpRequestMethodConfig = null,
    Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfig PathPatternConfig = null,
    Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfig QueryStringConfig = null,
    string[] RegexValues = null,
    Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfig SourceIpConfig = null,
    string[] Values = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditions.property.field">Field</a></code> | <code>string</code> | The name of the field. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditions.property.hostHeaderConfig">HostHeaderConfig</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfig">Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfig</a></code> | Information for a host header condition. Specify only when ``Field`` is ``host-header``. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditions.property.httpHeaderConfig">HttpHeaderConfig</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfig">Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfig</a></code> | Information for an HTTP header condition. Specify only when ``Field`` is ``http-header``. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditions.property.httpRequestMethodConfig">HttpRequestMethodConfig</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfig">Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfig</a></code> | Information for an HTTP method condition. Specify only when ``Field`` is ``http-request-method``. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditions.property.pathPatternConfig">PathPatternConfig</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfig">Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfig</a></code> | Information for a path pattern condition. Specify only when ``Field`` is ``path-pattern``. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditions.property.queryStringConfig">QueryStringConfig</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfig">Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfig</a></code> | Information for a query string condition. Specify only when ``Field`` is ``query-string``. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditions.property.regexValues">RegexValues</a></code> | <code>string[]</code> | The regular expressions to match against the condition field. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditions.property.sourceIpConfig">SourceIpConfig</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfig">Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfig</a></code> | Information for a source IP condition. Specify only when ``Field`` is ``source-ip``. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditions.property.values">Values</a></code> | <code>string[]</code> | The condition value. |

---

##### `Field`<sup>Optional</sup> <a name="Field" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditions.property.field"></a>

```csharp
public string Field { get; set; }
```

- *Type:* string

The name of the field.

The possible values are:

* `http-header` ? [ALB] Matches on an HTTP header field.
* `http-request-method` ? [ALB] Matches on the HTTP request method.
* `host-header` ? [ALB] Matches on the host header.
* `path-pattern` ? [ALB] Matches on the URL path of the request.
* `query-string` ? [ALB] Matches on a query string parameter.
* `source-ip` ? [ALB, NLB] Matches on the source IP address. For ALB, use `SourceIpConfig` with `Values` to specify CIDR ranges. For NLB, use `SourceIpConfig` with `IpAddressType` to match the IP address type (`ipv4` or `ipv6`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener_rule#field Elasticloadbalancingv2ListenerRule#field}

---

##### `HostHeaderConfig`<sup>Optional</sup> <a name="HostHeaderConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditions.property.hostHeaderConfig"></a>

```csharp
public Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfig HostHeaderConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfig">Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfig</a>

Information for a host header condition. Specify only when ``Field`` is ``host-header``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener_rule#host_header_config Elasticloadbalancingv2ListenerRule#host_header_config}

---

##### `HttpHeaderConfig`<sup>Optional</sup> <a name="HttpHeaderConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditions.property.httpHeaderConfig"></a>

```csharp
public Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfig HttpHeaderConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfig">Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfig</a>

Information for an HTTP header condition. Specify only when ``Field`` is ``http-header``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener_rule#http_header_config Elasticloadbalancingv2ListenerRule#http_header_config}

---

##### `HttpRequestMethodConfig`<sup>Optional</sup> <a name="HttpRequestMethodConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditions.property.httpRequestMethodConfig"></a>

```csharp
public Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfig HttpRequestMethodConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfig">Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfig</a>

Information for an HTTP method condition. Specify only when ``Field`` is ``http-request-method``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener_rule#http_request_method_config Elasticloadbalancingv2ListenerRule#http_request_method_config}

---

##### `PathPatternConfig`<sup>Optional</sup> <a name="PathPatternConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditions.property.pathPatternConfig"></a>

```csharp
public Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfig PathPatternConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfig">Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfig</a>

Information for a path pattern condition. Specify only when ``Field`` is ``path-pattern``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener_rule#path_pattern_config Elasticloadbalancingv2ListenerRule#path_pattern_config}

---

##### `QueryStringConfig`<sup>Optional</sup> <a name="QueryStringConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditions.property.queryStringConfig"></a>

```csharp
public Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfig QueryStringConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfig">Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfig</a>

Information for a query string condition. Specify only when ``Field`` is ``query-string``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener_rule#query_string_config Elasticloadbalancingv2ListenerRule#query_string_config}

---

##### `RegexValues`<sup>Optional</sup> <a name="RegexValues" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditions.property.regexValues"></a>

```csharp
public string[] RegexValues { get; set; }
```

- *Type:* string[]

The regular expressions to match against the condition field.

The maximum length of each string is 128 characters. Specify only when `Field` is `http-header`, `host-header`, or `path-pattern`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener_rule#regex_values Elasticloadbalancingv2ListenerRule#regex_values}

---

##### `SourceIpConfig`<sup>Optional</sup> <a name="SourceIpConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditions.property.sourceIpConfig"></a>

```csharp
public Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfig SourceIpConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfig">Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfig</a>

Information for a source IP condition. Specify only when ``Field`` is ``source-ip``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener_rule#source_ip_config Elasticloadbalancingv2ListenerRule#source_ip_config}

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditions.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

The condition value.

Specify only when `Field` is `host-header` or `path-pattern`. Alternatively, to specify multiple host names or multiple path patterns, use `HostHeaderConfig` or `PathPatternConfig`.
If `Field` is `host-header` and you're not using `HostHeaderConfig`, you can specify a single host name (for example, my.example.com). A host name is case insensitive, can be up to 128 characters in length, and can contain any of the following characters.

* A-Z, a-z, 0-9
* * .
* * (matches 0 or more characters)
* ? (matches exactly 1 character)

If `Field` is `path-pattern` and you're not using `PathPatternConfig`, you can specify a single path pattern (for example, /img/*). A path pattern is case-sensitive, can be up to 128 characters in length, and can contain any of the following characters.

* A-Z, a-z, 0-9
* _ - . $ / ~ " ' @ : +
* & (using &)
* * (matches 0 or more characters)
* ? (matches exactly 1 character)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener_rule#values Elasticloadbalancingv2ListenerRule#values}

---

### Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfig <a name="Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfig {
    string[] RegexValues = null,
    string[] Values = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfig.property.regexValues">RegexValues</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener_rule#regex_values Elasticloadbalancingv2ListenerRule#regex_values}. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfig.property.values">Values</a></code> | <code>string[]</code> | The host names. |

---

##### `RegexValues`<sup>Optional</sup> <a name="RegexValues" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfig.property.regexValues"></a>

```csharp
public string[] RegexValues { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener_rule#regex_values Elasticloadbalancingv2ListenerRule#regex_values}.

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfig.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

The host names.

The maximum length of each string is 128 characters. The comparison is case insensitive. The following wildcard characters are supported: * (matches 0 or more characters) and ? (matches exactly 1 character). You must include at least one "." character. You can include only alphabetical characters after the final "." character.
If you specify multiple strings, the condition is satisfied if one of the strings matches the host name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener_rule#values Elasticloadbalancingv2ListenerRule#values}

---

### Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfig <a name="Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfig {
    string HttpHeaderName = null,
    string[] RegexValues = null,
    string[] Values = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfig.property.httpHeaderName">HttpHeaderName</a></code> | <code>string</code> | The name of the HTTP header field. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfig.property.regexValues">RegexValues</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener_rule#regex_values Elasticloadbalancingv2ListenerRule#regex_values}. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfig.property.values">Values</a></code> | <code>string[]</code> | The strings to compare against the value of the HTTP header. |

---

##### `HttpHeaderName`<sup>Optional</sup> <a name="HttpHeaderName" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfig.property.httpHeaderName"></a>

```csharp
public string HttpHeaderName { get; set; }
```

- *Type:* string

The name of the HTTP header field.

The maximum size is 40 characters. The header name is case insensitive. The allowed characters are specified by RFC 7230. Wildcards are not supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener_rule#http_header_name Elasticloadbalancingv2ListenerRule#http_header_name}

---

##### `RegexValues`<sup>Optional</sup> <a name="RegexValues" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfig.property.regexValues"></a>

```csharp
public string[] RegexValues { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener_rule#regex_values Elasticloadbalancingv2ListenerRule#regex_values}.

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfig.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

The strings to compare against the value of the HTTP header.

The maximum length of each string is 128 characters. The comparison strings are case insensitive. The following wildcard characters are supported: * (matches 0 or more characters) and ? (matches exactly 1 character).
If the same header appears multiple times in the request, we search them in order until a match is found.
If you specify multiple strings, the condition is satisfied if one of the strings matches the value of the HTTP header. To require that all of the strings are a match, create one condition per string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener_rule#values Elasticloadbalancingv2ListenerRule#values}

---

### Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfig <a name="Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfig {
    string[] Values = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfig.property.values">Values</a></code> | <code>string[]</code> | The name of the request method. |

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfig.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

The name of the request method.

The maximum length is 40 characters. The allowed characters are A-Z, hyphen (-), and underscore (_). The comparison is case sensitive. Wildcards are not supported; therefore, the method name must be an exact match.
If you specify multiple strings, the condition is satisfied if one of the strings matches the HTTP request method. We recommend that you route GET and HEAD requests in the same way, because the response to a HEAD request may be cached.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener_rule#values Elasticloadbalancingv2ListenerRule#values}

---

### Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfig <a name="Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfig {
    string[] RegexValues = null,
    string[] Values = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfig.property.regexValues">RegexValues</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener_rule#regex_values Elasticloadbalancingv2ListenerRule#regex_values}. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfig.property.values">Values</a></code> | <code>string[]</code> | The path patterns to compare against the request URL. |

---

##### `RegexValues`<sup>Optional</sup> <a name="RegexValues" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfig.property.regexValues"></a>

```csharp
public string[] RegexValues { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener_rule#regex_values Elasticloadbalancingv2ListenerRule#regex_values}.

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfig.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

The path patterns to compare against the request URL.

The maximum size of each string is 128 characters. The comparison is case sensitive. The following wildcard characters are supported: * (matches 0 or more characters) and ? (matches exactly 1 character).
If you specify multiple strings, the condition is satisfied if one of them matches the request URL. The path pattern is compared only to the path of the URL, not to its query string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener_rule#values Elasticloadbalancingv2ListenerRule#values}

---

### Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfig <a name="Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfig {
    IResolvable|Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValues[] Values = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfig.property.values">Values</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValues">Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValues</a>[]</code> | The key/value pairs or values to find in the query string. |

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfig.property.values"></a>

```csharp
public IResolvable|Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValues[] Values { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValues">Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValues</a>[]

The key/value pairs or values to find in the query string.

The maximum length of each string is 128 characters. The comparison is case insensitive. The following wildcard characters are supported: * (matches 0 or more characters) and ? (matches exactly 1 character). To search for a literal '*' or '?' character in a query string, you must escape these characters in `Values` using a '' character.
If you specify multiple key/value pairs or values, the condition is satisfied if one of them is found in the query string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener_rule#values Elasticloadbalancingv2ListenerRule#values}

---

### Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValues <a name="Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValues" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValues"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValues.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValues {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValues.property.key">Key</a></code> | <code>string</code> | The key. You can omit the key. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValues.property.value">Value</a></code> | <code>string</code> | The value. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValues.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key. You can omit the key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener_rule#key Elasticloadbalancingv2ListenerRule#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValues.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener_rule#value Elasticloadbalancingv2ListenerRule#value}

---

### Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfig <a name="Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfig {
    string IpAddressType = null,
    string[] Values = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfig.property.ipAddressType">IpAddressType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener_rule#ip_address_type Elasticloadbalancingv2ListenerRule#ip_address_type}. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfig.property.values">Values</a></code> | <code>string[]</code> | The source IP addresses, in CIDR format. |

---

##### `IpAddressType`<sup>Optional</sup> <a name="IpAddressType" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfig.property.ipAddressType"></a>

```csharp
public string IpAddressType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener_rule#ip_address_type Elasticloadbalancingv2ListenerRule#ip_address_type}.

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfig.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

The source IP addresses, in CIDR format.

You can use both IPv4 and IPv6 addresses. Wildcards are not supported.
If you specify multiple addresses, the condition is satisfied if the source IP address of the request matches one of the CIDR blocks. This condition is not satisfied by the addresses in the X-Forwarded-For header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener_rule#values Elasticloadbalancingv2ListenerRule#values}

---

### Elasticloadbalancingv2ListenerRuleConfig <a name="Elasticloadbalancingv2ListenerRuleConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Elasticloadbalancingv2ListenerRuleConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    IResolvable|Elasticloadbalancingv2ListenerRuleActions[] Actions,
    IResolvable|Elasticloadbalancingv2ListenerRuleConditions[] Conditions,
    double Priority,
    string ListenerArn = null,
    IResolvable|Elasticloadbalancingv2ListenerRuleTags[] Tags = null,
    IResolvable|Elasticloadbalancingv2ListenerRuleTransforms[] Transforms = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConfig.property.actions">Actions</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActions">Elasticloadbalancingv2ListenerRuleActions</a>[]</code> | The actions. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConfig.property.conditions">Conditions</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditions">Elasticloadbalancingv2ListenerRuleConditions</a>[]</code> | The conditions. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConfig.property.priority">Priority</a></code> | <code>double</code> | The rule priority. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConfig.property.listenerArn">ListenerArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the listener. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTags">Elasticloadbalancingv2ListenerRuleTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener_rule#tags Elasticloadbalancingv2ListenerRule#tags}. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConfig.property.transforms">Transforms</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransforms">Elasticloadbalancingv2ListenerRuleTransforms</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener_rule#transforms Elasticloadbalancingv2ListenerRule#transforms}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Actions`<sup>Required</sup> <a name="Actions" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConfig.property.actions"></a>

```csharp
public IResolvable|Elasticloadbalancingv2ListenerRuleActions[] Actions { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActions">Elasticloadbalancingv2ListenerRuleActions</a>[]

The actions.

The rule must include exactly one of the following types of actions: `forward`, `fixed-response`, or `redirect`, and it must be the last action to be performed. If the rule is for an HTTPS listener, it can also optionally include an authentication action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener_rule#actions Elasticloadbalancingv2ListenerRule#actions}

---

##### `Conditions`<sup>Required</sup> <a name="Conditions" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConfig.property.conditions"></a>

```csharp
public IResolvable|Elasticloadbalancingv2ListenerRuleConditions[] Conditions { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditions">Elasticloadbalancingv2ListenerRuleConditions</a>[]

The conditions.

The rule can optionally include up to one of each of the following conditions: `http-request-method`, `host-header`, `path-pattern`, and `source-ip`. A rule can also optionally include one or more of each of the following conditions: `http-header` and `query-string`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener_rule#conditions Elasticloadbalancingv2ListenerRule#conditions}

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConfig.property.priority"></a>

```csharp
public double Priority { get; set; }
```

- *Type:* double

The rule priority.

A listener can't have multiple rules with the same priority.
If you try to reorder rules by updating their priorities, do not specify a new priority if an existing rule already uses this priority, as this can cause an error. If you need to reuse a priority with a different rule, you must remove it as a priority first, and then specify it in a subsequent update.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener_rule#priority Elasticloadbalancingv2ListenerRule#priority}

---

##### `ListenerArn`<sup>Optional</sup> <a name="ListenerArn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConfig.property.listenerArn"></a>

```csharp
public string ListenerArn { get; set; }
```

- *Type:* string

The Amazon Resource Name (ARN) of the listener.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener_rule#listener_arn Elasticloadbalancingv2ListenerRule#listener_arn}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConfig.property.tags"></a>

```csharp
public IResolvable|Elasticloadbalancingv2ListenerRuleTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTags">Elasticloadbalancingv2ListenerRuleTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener_rule#tags Elasticloadbalancingv2ListenerRule#tags}.

---

##### `Transforms`<sup>Optional</sup> <a name="Transforms" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConfig.property.transforms"></a>

```csharp
public IResolvable|Elasticloadbalancingv2ListenerRuleTransforms[] Transforms { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransforms">Elasticloadbalancingv2ListenerRuleTransforms</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener_rule#transforms Elasticloadbalancingv2ListenerRule#transforms}.

---

### Elasticloadbalancingv2ListenerRuleTags <a name="Elasticloadbalancingv2ListenerRuleTags" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Elasticloadbalancingv2ListenerRuleTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTags.property.key">Key</a></code> | <code>string</code> | The key of the tag. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTags.property.value">Value</a></code> | <code>string</code> | The value of the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener_rule#key Elasticloadbalancingv2ListenerRule#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener_rule#value Elasticloadbalancingv2ListenerRule#value}

---

### Elasticloadbalancingv2ListenerRuleTransforms <a name="Elasticloadbalancingv2ListenerRuleTransforms" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransforms"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransforms.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Elasticloadbalancingv2ListenerRuleTransforms {
    Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfig HostHeaderRewriteConfig = null,
    string Type = null,
    Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfig UrlRewriteConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransforms.property.hostHeaderRewriteConfig">HostHeaderRewriteConfig</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfig">Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener_rule#host_header_rewrite_config Elasticloadbalancingv2ListenerRule#host_header_rewrite_config}. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransforms.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener_rule#type Elasticloadbalancingv2ListenerRule#type}. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransforms.property.urlRewriteConfig">UrlRewriteConfig</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfig">Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener_rule#url_rewrite_config Elasticloadbalancingv2ListenerRule#url_rewrite_config}. |

---

##### `HostHeaderRewriteConfig`<sup>Optional</sup> <a name="HostHeaderRewriteConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransforms.property.hostHeaderRewriteConfig"></a>

```csharp
public Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfig HostHeaderRewriteConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfig">Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener_rule#host_header_rewrite_config Elasticloadbalancingv2ListenerRule#host_header_rewrite_config}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransforms.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener_rule#type Elasticloadbalancingv2ListenerRule#type}.

---

##### `UrlRewriteConfig`<sup>Optional</sup> <a name="UrlRewriteConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransforms.property.urlRewriteConfig"></a>

```csharp
public Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfig UrlRewriteConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfig">Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener_rule#url_rewrite_config Elasticloadbalancingv2ListenerRule#url_rewrite_config}.

---

### Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfig <a name="Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfig {
    IResolvable|Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewrites[] Rewrites = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfig.property.rewrites">Rewrites</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewrites">Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewrites</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener_rule#rewrites Elasticloadbalancingv2ListenerRule#rewrites}. |

---

##### `Rewrites`<sup>Optional</sup> <a name="Rewrites" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfig.property.rewrites"></a>

```csharp
public IResolvable|Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewrites[] Rewrites { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewrites">Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewrites</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener_rule#rewrites Elasticloadbalancingv2ListenerRule#rewrites}.

---

### Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewrites <a name="Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewrites" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewrites"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewrites.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewrites {
    string Regex = null,
    string Replace = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewrites.property.regex">Regex</a></code> | <code>string</code> | The regular expression to match in the input string. The maximum length of the string is 1,024 characters. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewrites.property.replace">Replace</a></code> | <code>string</code> | The replacement string to use when rewriting the matched input. |

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewrites.property.regex"></a>

```csharp
public string Regex { get; set; }
```

- *Type:* string

The regular expression to match in the input string. The maximum length of the string is 1,024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener_rule#regex Elasticloadbalancingv2ListenerRule#regex}

---

##### `Replace`<sup>Optional</sup> <a name="Replace" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewrites.property.replace"></a>

```csharp
public string Replace { get; set; }
```

- *Type:* string

The replacement string to use when rewriting the matched input.

The maximum length of the string is 1,024 characters. You can specify capture groups in the regular expression (for example, $1 and $2).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener_rule#replace Elasticloadbalancingv2ListenerRule#replace}

---

### Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfig <a name="Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfig {
    IResolvable|Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewrites[] Rewrites = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfig.property.rewrites">Rewrites</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewrites">Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewrites</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener_rule#rewrites Elasticloadbalancingv2ListenerRule#rewrites}. |

---

##### `Rewrites`<sup>Optional</sup> <a name="Rewrites" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfig.property.rewrites"></a>

```csharp
public IResolvable|Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewrites[] Rewrites { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewrites">Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewrites</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener_rule#rewrites Elasticloadbalancingv2ListenerRule#rewrites}.

---

### Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewrites <a name="Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewrites" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewrites"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewrites.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewrites {
    string Regex = null,
    string Replace = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewrites.property.regex">Regex</a></code> | <code>string</code> | The regular expression to match in the input string. The maximum length of the string is 1,024 characters. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewrites.property.replace">Replace</a></code> | <code>string</code> | The replacement string to use when rewriting the matched input. |

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewrites.property.regex"></a>

```csharp
public string Regex { get; set; }
```

- *Type:* string

The regular expression to match in the input string. The maximum length of the string is 1,024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener_rule#regex Elasticloadbalancingv2ListenerRule#regex}

---

##### `Replace`<sup>Optional</sup> <a name="Replace" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewrites.property.replace"></a>

```csharp
public string Replace { get; set; }
```

- *Type:* string

The replacement string to use when rewriting the matched input.

The maximum length of the string is 1,024 characters. You can specify capture groups in the regular expression (for example, $1 and $2).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener_rule#replace Elasticloadbalancingv2ListenerRule#replace}

---

## Classes <a name="Classes" id="Classes"></a>

### Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference <a name="Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.resetAuthenticationRequestExtraParams">ResetAuthenticationRequestExtraParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.resetOnUnauthenticatedRequest">ResetOnUnauthenticatedRequest</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.resetScope">ResetScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.resetSessionCookieName">ResetSessionCookieName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.resetSessionTimeout">ResetSessionTimeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.resetUserPoolArn">ResetUserPoolArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.resetUserPoolClientId">ResetUserPoolClientId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.resetUserPoolDomain">ResetUserPoolDomain</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAuthenticationRequestExtraParams` <a name="ResetAuthenticationRequestExtraParams" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.resetAuthenticationRequestExtraParams"></a>

```csharp
private void ResetAuthenticationRequestExtraParams()
```

##### `ResetOnUnauthenticatedRequest` <a name="ResetOnUnauthenticatedRequest" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.resetOnUnauthenticatedRequest"></a>

```csharp
private void ResetOnUnauthenticatedRequest()
```

##### `ResetScope` <a name="ResetScope" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.resetScope"></a>

```csharp
private void ResetScope()
```

##### `ResetSessionCookieName` <a name="ResetSessionCookieName" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.resetSessionCookieName"></a>

```csharp
private void ResetSessionCookieName()
```

##### `ResetSessionTimeout` <a name="ResetSessionTimeout" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.resetSessionTimeout"></a>

```csharp
private void ResetSessionTimeout()
```

##### `ResetUserPoolArn` <a name="ResetUserPoolArn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.resetUserPoolArn"></a>

```csharp
private void ResetUserPoolArn()
```

##### `ResetUserPoolClientId` <a name="ResetUserPoolClientId" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.resetUserPoolClientId"></a>

```csharp
private void ResetUserPoolClientId()
```

##### `ResetUserPoolDomain` <a name="ResetUserPoolDomain" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.resetUserPoolDomain"></a>

```csharp
private void ResetUserPoolDomain()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.property.authenticationRequestExtraParamsInput">AuthenticationRequestExtraParamsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.property.onUnauthenticatedRequestInput">OnUnauthenticatedRequestInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.property.scopeInput">ScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.property.sessionCookieNameInput">SessionCookieNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.property.sessionTimeoutInput">SessionTimeoutInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.property.userPoolArnInput">UserPoolArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.property.userPoolClientIdInput">UserPoolClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.property.userPoolDomainInput">UserPoolDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.property.authenticationRequestExtraParams">AuthenticationRequestExtraParams</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.property.onUnauthenticatedRequest">OnUnauthenticatedRequest</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.property.scope">Scope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.property.sessionCookieName">SessionCookieName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.property.sessionTimeout">SessionTimeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.property.userPoolArn">UserPoolArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.property.userPoolClientId">UserPoolClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.property.userPoolDomain">UserPoolDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfig">Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuthenticationRequestExtraParamsInput`<sup>Optional</sup> <a name="AuthenticationRequestExtraParamsInput" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.property.authenticationRequestExtraParamsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AuthenticationRequestExtraParamsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `OnUnauthenticatedRequestInput`<sup>Optional</sup> <a name="OnUnauthenticatedRequestInput" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.property.onUnauthenticatedRequestInput"></a>

```csharp
public string OnUnauthenticatedRequestInput { get; }
```

- *Type:* string

---

##### `ScopeInput`<sup>Optional</sup> <a name="ScopeInput" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.property.scopeInput"></a>

```csharp
public string ScopeInput { get; }
```

- *Type:* string

---

##### `SessionCookieNameInput`<sup>Optional</sup> <a name="SessionCookieNameInput" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.property.sessionCookieNameInput"></a>

```csharp
public string SessionCookieNameInput { get; }
```

- *Type:* string

---

##### `SessionTimeoutInput`<sup>Optional</sup> <a name="SessionTimeoutInput" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.property.sessionTimeoutInput"></a>

```csharp
public double SessionTimeoutInput { get; }
```

- *Type:* double

---

##### `UserPoolArnInput`<sup>Optional</sup> <a name="UserPoolArnInput" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.property.userPoolArnInput"></a>

```csharp
public string UserPoolArnInput { get; }
```

- *Type:* string

---

##### `UserPoolClientIdInput`<sup>Optional</sup> <a name="UserPoolClientIdInput" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.property.userPoolClientIdInput"></a>

```csharp
public string UserPoolClientIdInput { get; }
```

- *Type:* string

---

##### `UserPoolDomainInput`<sup>Optional</sup> <a name="UserPoolDomainInput" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.property.userPoolDomainInput"></a>

```csharp
public string UserPoolDomainInput { get; }
```

- *Type:* string

---

##### `AuthenticationRequestExtraParams`<sup>Required</sup> <a name="AuthenticationRequestExtraParams" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.property.authenticationRequestExtraParams"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AuthenticationRequestExtraParams { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `OnUnauthenticatedRequest`<sup>Required</sup> <a name="OnUnauthenticatedRequest" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.property.onUnauthenticatedRequest"></a>

```csharp
public string OnUnauthenticatedRequest { get; }
```

- *Type:* string

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.property.scope"></a>

```csharp
public string Scope { get; }
```

- *Type:* string

---

##### `SessionCookieName`<sup>Required</sup> <a name="SessionCookieName" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.property.sessionCookieName"></a>

```csharp
public string SessionCookieName { get; }
```

- *Type:* string

---

##### `SessionTimeout`<sup>Required</sup> <a name="SessionTimeout" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.property.sessionTimeout"></a>

```csharp
public double SessionTimeout { get; }
```

- *Type:* double

---

##### `UserPoolArn`<sup>Required</sup> <a name="UserPoolArn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.property.userPoolArn"></a>

```csharp
public string UserPoolArn { get; }
```

- *Type:* string

---

##### `UserPoolClientId`<sup>Required</sup> <a name="UserPoolClientId" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.property.userPoolClientId"></a>

```csharp
public string UserPoolClientId { get; }
```

- *Type:* string

---

##### `UserPoolDomain`<sup>Required</sup> <a name="UserPoolDomain" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.property.userPoolDomain"></a>

```csharp
public string UserPoolDomain { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfig">Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfig</a>

---


### Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference <a name="Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.resetAuthenticationRequestExtraParams">ResetAuthenticationRequestExtraParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.resetAuthorizationEndpoint">ResetAuthorizationEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.resetClientId">ResetClientId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.resetClientSecret">ResetClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.resetIssuer">ResetIssuer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.resetOnUnauthenticatedRequest">ResetOnUnauthenticatedRequest</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.resetScope">ResetScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.resetSessionCookieName">ResetSessionCookieName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.resetSessionTimeout">ResetSessionTimeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.resetTokenEndpoint">ResetTokenEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.resetUseExistingClientSecret">ResetUseExistingClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.resetUserInfoEndpoint">ResetUserInfoEndpoint</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAuthenticationRequestExtraParams` <a name="ResetAuthenticationRequestExtraParams" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.resetAuthenticationRequestExtraParams"></a>

```csharp
private void ResetAuthenticationRequestExtraParams()
```

##### `ResetAuthorizationEndpoint` <a name="ResetAuthorizationEndpoint" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.resetAuthorizationEndpoint"></a>

```csharp
private void ResetAuthorizationEndpoint()
```

##### `ResetClientId` <a name="ResetClientId" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.resetClientId"></a>

```csharp
private void ResetClientId()
```

##### `ResetClientSecret` <a name="ResetClientSecret" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.resetClientSecret"></a>

```csharp
private void ResetClientSecret()
```

##### `ResetIssuer` <a name="ResetIssuer" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.resetIssuer"></a>

```csharp
private void ResetIssuer()
```

##### `ResetOnUnauthenticatedRequest` <a name="ResetOnUnauthenticatedRequest" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.resetOnUnauthenticatedRequest"></a>

```csharp
private void ResetOnUnauthenticatedRequest()
```

##### `ResetScope` <a name="ResetScope" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.resetScope"></a>

```csharp
private void ResetScope()
```

##### `ResetSessionCookieName` <a name="ResetSessionCookieName" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.resetSessionCookieName"></a>

```csharp
private void ResetSessionCookieName()
```

##### `ResetSessionTimeout` <a name="ResetSessionTimeout" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.resetSessionTimeout"></a>

```csharp
private void ResetSessionTimeout()
```

##### `ResetTokenEndpoint` <a name="ResetTokenEndpoint" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.resetTokenEndpoint"></a>

```csharp
private void ResetTokenEndpoint()
```

##### `ResetUseExistingClientSecret` <a name="ResetUseExistingClientSecret" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.resetUseExistingClientSecret"></a>

```csharp
private void ResetUseExistingClientSecret()
```

##### `ResetUserInfoEndpoint` <a name="ResetUserInfoEndpoint" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.resetUserInfoEndpoint"></a>

```csharp
private void ResetUserInfoEndpoint()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.property.authenticationRequestExtraParamsInput">AuthenticationRequestExtraParamsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.property.authorizationEndpointInput">AuthorizationEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.property.clientIdInput">ClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.property.clientSecretInput">ClientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.property.issuerInput">IssuerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.property.onUnauthenticatedRequestInput">OnUnauthenticatedRequestInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.property.scopeInput">ScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.property.sessionCookieNameInput">SessionCookieNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.property.sessionTimeoutInput">SessionTimeoutInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.property.tokenEndpointInput">TokenEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.property.useExistingClientSecretInput">UseExistingClientSecretInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.property.userInfoEndpointInput">UserInfoEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.property.authenticationRequestExtraParams">AuthenticationRequestExtraParams</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.property.authorizationEndpoint">AuthorizationEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.property.clientId">ClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.property.clientSecret">ClientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.property.issuer">Issuer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.property.onUnauthenticatedRequest">OnUnauthenticatedRequest</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.property.scope">Scope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.property.sessionCookieName">SessionCookieName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.property.sessionTimeout">SessionTimeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.property.tokenEndpoint">TokenEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.property.useExistingClientSecret">UseExistingClientSecret</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.property.userInfoEndpoint">UserInfoEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfig">Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuthenticationRequestExtraParamsInput`<sup>Optional</sup> <a name="AuthenticationRequestExtraParamsInput" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.property.authenticationRequestExtraParamsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AuthenticationRequestExtraParamsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `AuthorizationEndpointInput`<sup>Optional</sup> <a name="AuthorizationEndpointInput" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.property.authorizationEndpointInput"></a>

```csharp
public string AuthorizationEndpointInput { get; }
```

- *Type:* string

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.property.clientIdInput"></a>

```csharp
public string ClientIdInput { get; }
```

- *Type:* string

---

##### `ClientSecretInput`<sup>Optional</sup> <a name="ClientSecretInput" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.property.clientSecretInput"></a>

```csharp
public string ClientSecretInput { get; }
```

- *Type:* string

---

##### `IssuerInput`<sup>Optional</sup> <a name="IssuerInput" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.property.issuerInput"></a>

```csharp
public string IssuerInput { get; }
```

- *Type:* string

---

##### `OnUnauthenticatedRequestInput`<sup>Optional</sup> <a name="OnUnauthenticatedRequestInput" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.property.onUnauthenticatedRequestInput"></a>

```csharp
public string OnUnauthenticatedRequestInput { get; }
```

- *Type:* string

---

##### `ScopeInput`<sup>Optional</sup> <a name="ScopeInput" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.property.scopeInput"></a>

```csharp
public string ScopeInput { get; }
```

- *Type:* string

---

##### `SessionCookieNameInput`<sup>Optional</sup> <a name="SessionCookieNameInput" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.property.sessionCookieNameInput"></a>

```csharp
public string SessionCookieNameInput { get; }
```

- *Type:* string

---

##### `SessionTimeoutInput`<sup>Optional</sup> <a name="SessionTimeoutInput" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.property.sessionTimeoutInput"></a>

```csharp
public double SessionTimeoutInput { get; }
```

- *Type:* double

---

##### `TokenEndpointInput`<sup>Optional</sup> <a name="TokenEndpointInput" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.property.tokenEndpointInput"></a>

```csharp
public string TokenEndpointInput { get; }
```

- *Type:* string

---

##### `UseExistingClientSecretInput`<sup>Optional</sup> <a name="UseExistingClientSecretInput" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.property.useExistingClientSecretInput"></a>

```csharp
public bool|IResolvable UseExistingClientSecretInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `UserInfoEndpointInput`<sup>Optional</sup> <a name="UserInfoEndpointInput" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.property.userInfoEndpointInput"></a>

```csharp
public string UserInfoEndpointInput { get; }
```

- *Type:* string

---

##### `AuthenticationRequestExtraParams`<sup>Required</sup> <a name="AuthenticationRequestExtraParams" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.property.authenticationRequestExtraParams"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AuthenticationRequestExtraParams { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `AuthorizationEndpoint`<sup>Required</sup> <a name="AuthorizationEndpoint" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.property.authorizationEndpoint"></a>

```csharp
public string AuthorizationEndpoint { get; }
```

- *Type:* string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.property.clientId"></a>

```csharp
public string ClientId { get; }
```

- *Type:* string

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.property.clientSecret"></a>

```csharp
public string ClientSecret { get; }
```

- *Type:* string

---

##### `Issuer`<sup>Required</sup> <a name="Issuer" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.property.issuer"></a>

```csharp
public string Issuer { get; }
```

- *Type:* string

---

##### `OnUnauthenticatedRequest`<sup>Required</sup> <a name="OnUnauthenticatedRequest" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.property.onUnauthenticatedRequest"></a>

```csharp
public string OnUnauthenticatedRequest { get; }
```

- *Type:* string

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.property.scope"></a>

```csharp
public string Scope { get; }
```

- *Type:* string

---

##### `SessionCookieName`<sup>Required</sup> <a name="SessionCookieName" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.property.sessionCookieName"></a>

```csharp
public string SessionCookieName { get; }
```

- *Type:* string

---

##### `SessionTimeout`<sup>Required</sup> <a name="SessionTimeout" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.property.sessionTimeout"></a>

```csharp
public double SessionTimeout { get; }
```

- *Type:* double

---

##### `TokenEndpoint`<sup>Required</sup> <a name="TokenEndpoint" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.property.tokenEndpoint"></a>

```csharp
public string TokenEndpoint { get; }
```

- *Type:* string

---

##### `UseExistingClientSecret`<sup>Required</sup> <a name="UseExistingClientSecret" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.property.useExistingClientSecret"></a>

```csharp
public bool|IResolvable UseExistingClientSecret { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `UserInfoEndpoint`<sup>Required</sup> <a name="UserInfoEndpoint" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.property.userInfoEndpoint"></a>

```csharp
public string UserInfoEndpoint { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfig">Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfig</a>

---


### Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference <a name="Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.resetContentType">ResetContentType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.resetMessageBody">ResetMessageBody</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.resetStatusCode">ResetStatusCode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetContentType` <a name="ResetContentType" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.resetContentType"></a>

```csharp
private void ResetContentType()
```

##### `ResetMessageBody` <a name="ResetMessageBody" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.resetMessageBody"></a>

```csharp
private void ResetMessageBody()
```

##### `ResetStatusCode` <a name="ResetStatusCode" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.resetStatusCode"></a>

```csharp
private void ResetStatusCode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.property.contentTypeInput">ContentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.property.messageBodyInput">MessageBodyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.property.statusCodeInput">StatusCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.property.contentType">ContentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.property.messageBody">MessageBody</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.property.statusCode">StatusCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfig">Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ContentTypeInput`<sup>Optional</sup> <a name="ContentTypeInput" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.property.contentTypeInput"></a>

```csharp
public string ContentTypeInput { get; }
```

- *Type:* string

---

##### `MessageBodyInput`<sup>Optional</sup> <a name="MessageBodyInput" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.property.messageBodyInput"></a>

```csharp
public string MessageBodyInput { get; }
```

- *Type:* string

---

##### `StatusCodeInput`<sup>Optional</sup> <a name="StatusCodeInput" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.property.statusCodeInput"></a>

```csharp
public string StatusCodeInput { get; }
```

- *Type:* string

---

##### `ContentType`<sup>Required</sup> <a name="ContentType" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.property.contentType"></a>

```csharp
public string ContentType { get; }
```

- *Type:* string

---

##### `MessageBody`<sup>Required</sup> <a name="MessageBody" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.property.messageBody"></a>

```csharp
public string MessageBody { get; }
```

- *Type:* string

---

##### `StatusCode`<sup>Required</sup> <a name="StatusCode" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.property.statusCode"></a>

```csharp
public string StatusCode { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfig">Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfig</a>

---


### Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference <a name="Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.putTargetGroups">PutTargetGroups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.putTargetGroupStickinessConfig">PutTargetGroupStickinessConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.resetTargetGroups">ResetTargetGroups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.resetTargetGroupStickinessConfig">ResetTargetGroupStickinessConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTargetGroups` <a name="PutTargetGroups" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.putTargetGroups"></a>

```csharp
private void PutTargetGroups(IResolvable|Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroups[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.putTargetGroups.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroups">Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroups</a>[]

---

##### `PutTargetGroupStickinessConfig` <a name="PutTargetGroupStickinessConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.putTargetGroupStickinessConfig"></a>

```csharp
private void PutTargetGroupStickinessConfig(Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.putTargetGroupStickinessConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfig">Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfig</a>

---

##### `ResetTargetGroups` <a name="ResetTargetGroups" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.resetTargetGroups"></a>

```csharp
private void ResetTargetGroups()
```

##### `ResetTargetGroupStickinessConfig` <a name="ResetTargetGroupStickinessConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.resetTargetGroupStickinessConfig"></a>

```csharp
private void ResetTargetGroupStickinessConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.property.targetGroups">TargetGroups</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsList">Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.property.targetGroupStickinessConfig">TargetGroupStickinessConfig</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference">Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.property.targetGroupsInput">TargetGroupsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroups">Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroups</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.property.targetGroupStickinessConfigInput">TargetGroupStickinessConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfig">Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfig">Elasticloadbalancingv2ListenerRuleActionsForwardConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TargetGroups`<sup>Required</sup> <a name="TargetGroups" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.property.targetGroups"></a>

```csharp
public Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsList TargetGroups { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsList">Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsList</a>

---

##### `TargetGroupStickinessConfig`<sup>Required</sup> <a name="TargetGroupStickinessConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.property.targetGroupStickinessConfig"></a>

```csharp
public Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference TargetGroupStickinessConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference">Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference</a>

---

##### `TargetGroupsInput`<sup>Optional</sup> <a name="TargetGroupsInput" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.property.targetGroupsInput"></a>

```csharp
public IResolvable|Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroups[] TargetGroupsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroups">Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroups</a>[]

---

##### `TargetGroupStickinessConfigInput`<sup>Optional</sup> <a name="TargetGroupStickinessConfigInput" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.property.targetGroupStickinessConfigInput"></a>

```csharp
public IResolvable|Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfig TargetGroupStickinessConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfig">Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfig</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Elasticloadbalancingv2ListenerRuleActionsForwardConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfig">Elasticloadbalancingv2ListenerRuleActionsForwardConfig</a>

---


### Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsList <a name="Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsList" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsList.get"></a>

```csharp
private Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroups">Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroups</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsList.property.internalValue"></a>

```csharp
public IResolvable|Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroups[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroups">Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroups</a>[]

---


### Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference <a name="Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.resetTargetGroupArn">ResetTargetGroupArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.resetWeight">ResetWeight</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTargetGroupArn` <a name="ResetTargetGroupArn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.resetTargetGroupArn"></a>

```csharp
private void ResetTargetGroupArn()
```

##### `ResetWeight` <a name="ResetWeight" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.resetWeight"></a>

```csharp
private void ResetWeight()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.property.targetGroupArnInput">TargetGroupArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.property.weightInput">WeightInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.property.targetGroupArn">TargetGroupArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.property.weight">Weight</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroups">Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroups</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TargetGroupArnInput`<sup>Optional</sup> <a name="TargetGroupArnInput" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.property.targetGroupArnInput"></a>

```csharp
public string TargetGroupArnInput { get; }
```

- *Type:* string

---

##### `WeightInput`<sup>Optional</sup> <a name="WeightInput" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.property.weightInput"></a>

```csharp
public double WeightInput { get; }
```

- *Type:* double

---

##### `TargetGroupArn`<sup>Required</sup> <a name="TargetGroupArn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.property.targetGroupArn"></a>

```csharp
public string TargetGroupArn { get; }
```

- *Type:* string

---

##### `Weight`<sup>Required</sup> <a name="Weight" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.property.weight"></a>

```csharp
public double Weight { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroups InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroups">Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroups</a>

---


### Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference <a name="Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.resetDurationSeconds">ResetDurationSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDurationSeconds` <a name="ResetDurationSeconds" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.resetDurationSeconds"></a>

```csharp
private void ResetDurationSeconds()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.property.durationSecondsInput">DurationSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.property.durationSeconds">DurationSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfig">Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DurationSecondsInput`<sup>Optional</sup> <a name="DurationSecondsInput" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.property.durationSecondsInput"></a>

```csharp
public double DurationSecondsInput { get; }
```

- *Type:* double

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DurationSeconds`<sup>Required</sup> <a name="DurationSeconds" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.property.durationSeconds"></a>

```csharp
public double DurationSeconds { get; }
```

- *Type:* double

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfig">Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfig</a>

---


### Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsList <a name="Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsList" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsList.get"></a>

```csharp
private Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaims">Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaims</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsList.property.internalValue"></a>

```csharp
public IResolvable|Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaims[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaims">Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaims</a>[]

---


### Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference <a name="Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.resetFormat">ResetFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFormat` <a name="ResetFormat" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.resetFormat"></a>

```csharp
private void ResetFormat()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetValues` <a name="ResetValues" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.resetValues"></a>

```csharp
private void ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.property.formatInput">FormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.property.format">Format</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaims">Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaims</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FormatInput`<sup>Optional</sup> <a name="FormatInput" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.property.formatInput"></a>

```csharp
public string FormatInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Format`<sup>Required</sup> <a name="Format" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.property.format"></a>

```csharp
public string Format { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaims InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaims">Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaims</a>

---


### Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference <a name="Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.putAdditionalClaims">PutAdditionalClaims</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.resetAdditionalClaims">ResetAdditionalClaims</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.resetIssuer">ResetIssuer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.resetJwksEndpoint">ResetJwksEndpoint</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAdditionalClaims` <a name="PutAdditionalClaims" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.putAdditionalClaims"></a>

```csharp
private void PutAdditionalClaims(IResolvable|Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaims[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.putAdditionalClaims.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaims">Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaims</a>[]

---

##### `ResetAdditionalClaims` <a name="ResetAdditionalClaims" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.resetAdditionalClaims"></a>

```csharp
private void ResetAdditionalClaims()
```

##### `ResetIssuer` <a name="ResetIssuer" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.resetIssuer"></a>

```csharp
private void ResetIssuer()
```

##### `ResetJwksEndpoint` <a name="ResetJwksEndpoint" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.resetJwksEndpoint"></a>

```csharp
private void ResetJwksEndpoint()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.property.additionalClaims">AdditionalClaims</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsList">Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.property.additionalClaimsInput">AdditionalClaimsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaims">Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaims</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.property.issuerInput">IssuerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.property.jwksEndpointInput">JwksEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.property.issuer">Issuer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.property.jwksEndpoint">JwksEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfig">Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AdditionalClaims`<sup>Required</sup> <a name="AdditionalClaims" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.property.additionalClaims"></a>

```csharp
public Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsList AdditionalClaims { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsList">Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsList</a>

---

##### `AdditionalClaimsInput`<sup>Optional</sup> <a name="AdditionalClaimsInput" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.property.additionalClaimsInput"></a>

```csharp
public IResolvable|Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaims[] AdditionalClaimsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaims">Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaims</a>[]

---

##### `IssuerInput`<sup>Optional</sup> <a name="IssuerInput" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.property.issuerInput"></a>

```csharp
public string IssuerInput { get; }
```

- *Type:* string

---

##### `JwksEndpointInput`<sup>Optional</sup> <a name="JwksEndpointInput" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.property.jwksEndpointInput"></a>

```csharp
public string JwksEndpointInput { get; }
```

- *Type:* string

---

##### `Issuer`<sup>Required</sup> <a name="Issuer" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.property.issuer"></a>

```csharp
public string Issuer { get; }
```

- *Type:* string

---

##### `JwksEndpoint`<sup>Required</sup> <a name="JwksEndpoint" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.property.jwksEndpoint"></a>

```csharp
public string JwksEndpoint { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfig">Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfig</a>

---


### Elasticloadbalancingv2ListenerRuleActionsList <a name="Elasticloadbalancingv2ListenerRuleActionsList" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Elasticloadbalancingv2ListenerRuleActionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsList.get"></a>

```csharp
private Elasticloadbalancingv2ListenerRuleActionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActions">Elasticloadbalancingv2ListenerRuleActions</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsList.property.internalValue"></a>

```csharp
public IResolvable|Elasticloadbalancingv2ListenerRuleActions[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActions">Elasticloadbalancingv2ListenerRuleActions</a>[]

---


### Elasticloadbalancingv2ListenerRuleActionsOutputReference <a name="Elasticloadbalancingv2ListenerRuleActionsOutputReference" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Elasticloadbalancingv2ListenerRuleActionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.putAuthenticateCognitoConfig">PutAuthenticateCognitoConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.putAuthenticateOidcConfig">PutAuthenticateOidcConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.putFixedResponseConfig">PutFixedResponseConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.putForwardConfig">PutForwardConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.putJwtValidationConfig">PutJwtValidationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.putRedirectConfig">PutRedirectConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.resetAuthenticateCognitoConfig">ResetAuthenticateCognitoConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.resetAuthenticateOidcConfig">ResetAuthenticateOidcConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.resetFixedResponseConfig">ResetFixedResponseConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.resetForwardConfig">ResetForwardConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.resetJwtValidationConfig">ResetJwtValidationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.resetOrder">ResetOrder</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.resetRedirectConfig">ResetRedirectConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.resetTargetGroupArn">ResetTargetGroupArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAuthenticateCognitoConfig` <a name="PutAuthenticateCognitoConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.putAuthenticateCognitoConfig"></a>

```csharp
private void PutAuthenticateCognitoConfig(Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.putAuthenticateCognitoConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfig">Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfig</a>

---

##### `PutAuthenticateOidcConfig` <a name="PutAuthenticateOidcConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.putAuthenticateOidcConfig"></a>

```csharp
private void PutAuthenticateOidcConfig(Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.putAuthenticateOidcConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfig">Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfig</a>

---

##### `PutFixedResponseConfig` <a name="PutFixedResponseConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.putFixedResponseConfig"></a>

```csharp
private void PutFixedResponseConfig(Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.putFixedResponseConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfig">Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfig</a>

---

##### `PutForwardConfig` <a name="PutForwardConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.putForwardConfig"></a>

```csharp
private void PutForwardConfig(Elasticloadbalancingv2ListenerRuleActionsForwardConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.putForwardConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfig">Elasticloadbalancingv2ListenerRuleActionsForwardConfig</a>

---

##### `PutJwtValidationConfig` <a name="PutJwtValidationConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.putJwtValidationConfig"></a>

```csharp
private void PutJwtValidationConfig(Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.putJwtValidationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfig">Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfig</a>

---

##### `PutRedirectConfig` <a name="PutRedirectConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.putRedirectConfig"></a>

```csharp
private void PutRedirectConfig(Elasticloadbalancingv2ListenerRuleActionsRedirectConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.putRedirectConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfig">Elasticloadbalancingv2ListenerRuleActionsRedirectConfig</a>

---

##### `ResetAuthenticateCognitoConfig` <a name="ResetAuthenticateCognitoConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.resetAuthenticateCognitoConfig"></a>

```csharp
private void ResetAuthenticateCognitoConfig()
```

##### `ResetAuthenticateOidcConfig` <a name="ResetAuthenticateOidcConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.resetAuthenticateOidcConfig"></a>

```csharp
private void ResetAuthenticateOidcConfig()
```

##### `ResetFixedResponseConfig` <a name="ResetFixedResponseConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.resetFixedResponseConfig"></a>

```csharp
private void ResetFixedResponseConfig()
```

##### `ResetForwardConfig` <a name="ResetForwardConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.resetForwardConfig"></a>

```csharp
private void ResetForwardConfig()
```

##### `ResetJwtValidationConfig` <a name="ResetJwtValidationConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.resetJwtValidationConfig"></a>

```csharp
private void ResetJwtValidationConfig()
```

##### `ResetOrder` <a name="ResetOrder" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.resetOrder"></a>

```csharp
private void ResetOrder()
```

##### `ResetRedirectConfig` <a name="ResetRedirectConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.resetRedirectConfig"></a>

```csharp
private void ResetRedirectConfig()
```

##### `ResetTargetGroupArn` <a name="ResetTargetGroupArn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.resetTargetGroupArn"></a>

```csharp
private void ResetTargetGroupArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.property.authenticateCognitoConfig">AuthenticateCognitoConfig</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference">Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.property.authenticateOidcConfig">AuthenticateOidcConfig</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference">Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.property.fixedResponseConfig">FixedResponseConfig</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference">Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.property.forwardConfig">ForwardConfig</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference">Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.property.jwtValidationConfig">JwtValidationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference">Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.property.redirectConfig">RedirectConfig</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference">Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.property.authenticateCognitoConfigInput">AuthenticateCognitoConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfig">Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.property.authenticateOidcConfigInput">AuthenticateOidcConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfig">Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.property.fixedResponseConfigInput">FixedResponseConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfig">Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.property.forwardConfigInput">ForwardConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfig">Elasticloadbalancingv2ListenerRuleActionsForwardConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.property.jwtValidationConfigInput">JwtValidationConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfig">Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.property.orderInput">OrderInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.property.redirectConfigInput">RedirectConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfig">Elasticloadbalancingv2ListenerRuleActionsRedirectConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.property.targetGroupArnInput">TargetGroupArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.property.order">Order</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.property.targetGroupArn">TargetGroupArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActions">Elasticloadbalancingv2ListenerRuleActions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuthenticateCognitoConfig`<sup>Required</sup> <a name="AuthenticateCognitoConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.property.authenticateCognitoConfig"></a>

```csharp
public Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference AuthenticateCognitoConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference">Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference</a>

---

##### `AuthenticateOidcConfig`<sup>Required</sup> <a name="AuthenticateOidcConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.property.authenticateOidcConfig"></a>

```csharp
public Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference AuthenticateOidcConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference">Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference</a>

---

##### `FixedResponseConfig`<sup>Required</sup> <a name="FixedResponseConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.property.fixedResponseConfig"></a>

```csharp
public Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference FixedResponseConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference">Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference</a>

---

##### `ForwardConfig`<sup>Required</sup> <a name="ForwardConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.property.forwardConfig"></a>

```csharp
public Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference ForwardConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference">Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference</a>

---

##### `JwtValidationConfig`<sup>Required</sup> <a name="JwtValidationConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.property.jwtValidationConfig"></a>

```csharp
public Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference JwtValidationConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference">Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference</a>

---

##### `RedirectConfig`<sup>Required</sup> <a name="RedirectConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.property.redirectConfig"></a>

```csharp
public Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference RedirectConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference">Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference</a>

---

##### `AuthenticateCognitoConfigInput`<sup>Optional</sup> <a name="AuthenticateCognitoConfigInput" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.property.authenticateCognitoConfigInput"></a>

```csharp
public IResolvable|Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfig AuthenticateCognitoConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfig">Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfig</a>

---

##### `AuthenticateOidcConfigInput`<sup>Optional</sup> <a name="AuthenticateOidcConfigInput" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.property.authenticateOidcConfigInput"></a>

```csharp
public IResolvable|Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfig AuthenticateOidcConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfig">Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfig</a>

---

##### `FixedResponseConfigInput`<sup>Optional</sup> <a name="FixedResponseConfigInput" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.property.fixedResponseConfigInput"></a>

```csharp
public IResolvable|Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfig FixedResponseConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfig">Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfig</a>

---

##### `ForwardConfigInput`<sup>Optional</sup> <a name="ForwardConfigInput" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.property.forwardConfigInput"></a>

```csharp
public IResolvable|Elasticloadbalancingv2ListenerRuleActionsForwardConfig ForwardConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfig">Elasticloadbalancingv2ListenerRuleActionsForwardConfig</a>

---

##### `JwtValidationConfigInput`<sup>Optional</sup> <a name="JwtValidationConfigInput" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.property.jwtValidationConfigInput"></a>

```csharp
public IResolvable|Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfig JwtValidationConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfig">Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfig</a>

---

##### `OrderInput`<sup>Optional</sup> <a name="OrderInput" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.property.orderInput"></a>

```csharp
public double OrderInput { get; }
```

- *Type:* double

---

##### `RedirectConfigInput`<sup>Optional</sup> <a name="RedirectConfigInput" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.property.redirectConfigInput"></a>

```csharp
public IResolvable|Elasticloadbalancingv2ListenerRuleActionsRedirectConfig RedirectConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfig">Elasticloadbalancingv2ListenerRuleActionsRedirectConfig</a>

---

##### `TargetGroupArnInput`<sup>Optional</sup> <a name="TargetGroupArnInput" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.property.targetGroupArnInput"></a>

```csharp
public string TargetGroupArnInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Order`<sup>Required</sup> <a name="Order" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.property.order"></a>

```csharp
public double Order { get; }
```

- *Type:* double

---

##### `TargetGroupArn`<sup>Required</sup> <a name="TargetGroupArn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.property.targetGroupArn"></a>

```csharp
public string TargetGroupArn { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Elasticloadbalancingv2ListenerRuleActions InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActions">Elasticloadbalancingv2ListenerRuleActions</a>

---


### Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference <a name="Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.resetHost">ResetHost</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.resetPath">ResetPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.resetProtocol">ResetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.resetQuery">ResetQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.resetStatusCode">ResetStatusCode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHost` <a name="ResetHost" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.resetHost"></a>

```csharp
private void ResetHost()
```

##### `ResetPath` <a name="ResetPath" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.resetPath"></a>

```csharp
private void ResetPath()
```

##### `ResetPort` <a name="ResetPort" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.resetPort"></a>

```csharp
private void ResetPort()
```

##### `ResetProtocol` <a name="ResetProtocol" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.resetProtocol"></a>

```csharp
private void ResetProtocol()
```

##### `ResetQuery` <a name="ResetQuery" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.resetQuery"></a>

```csharp
private void ResetQuery()
```

##### `ResetStatusCode` <a name="ResetStatusCode" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.resetStatusCode"></a>

```csharp
private void ResetStatusCode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.property.hostInput">HostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.property.portInput">PortInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.property.protocolInput">ProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.property.queryInput">QueryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.property.statusCodeInput">StatusCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.property.host">Host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.property.port">Port</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.property.protocol">Protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.property.query">Query</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.property.statusCode">StatusCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfig">Elasticloadbalancingv2ListenerRuleActionsRedirectConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HostInput`<sup>Optional</sup> <a name="HostInput" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.property.hostInput"></a>

```csharp
public string HostInput { get; }
```

- *Type:* string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.property.portInput"></a>

```csharp
public string PortInput { get; }
```

- *Type:* string

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.property.protocolInput"></a>

```csharp
public string ProtocolInput { get; }
```

- *Type:* string

---

##### `QueryInput`<sup>Optional</sup> <a name="QueryInput" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.property.queryInput"></a>

```csharp
public string QueryInput { get; }
```

- *Type:* string

---

##### `StatusCodeInput`<sup>Optional</sup> <a name="StatusCodeInput" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.property.statusCodeInput"></a>

```csharp
public string StatusCodeInput { get; }
```

- *Type:* string

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.property.host"></a>

```csharp
public string Host { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.property.port"></a>

```csharp
public string Port { get; }
```

- *Type:* string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.property.protocol"></a>

```csharp
public string Protocol { get; }
```

- *Type:* string

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.property.query"></a>

```csharp
public string Query { get; }
```

- *Type:* string

---

##### `StatusCode`<sup>Required</sup> <a name="StatusCode" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.property.statusCode"></a>

```csharp
public string StatusCode { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Elasticloadbalancingv2ListenerRuleActionsRedirectConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfig">Elasticloadbalancingv2ListenerRuleActionsRedirectConfig</a>

---


### Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference <a name="Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.resetRegexValues">ResetRegexValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegexValues` <a name="ResetRegexValues" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.resetRegexValues"></a>

```csharp
private void ResetRegexValues()
```

##### `ResetValues` <a name="ResetValues" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.resetValues"></a>

```csharp
private void ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.property.regexValuesInput">RegexValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.property.regexValues">RegexValues</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfig">Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RegexValuesInput`<sup>Optional</sup> <a name="RegexValuesInput" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.property.regexValuesInput"></a>

```csharp
public string[] RegexValuesInput { get; }
```

- *Type:* string[]

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `RegexValues`<sup>Required</sup> <a name="RegexValues" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.property.regexValues"></a>

```csharp
public string[] RegexValues { get; }
```

- *Type:* string[]

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfig">Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfig</a>

---


### Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference <a name="Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.resetHttpHeaderName">ResetHttpHeaderName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.resetRegexValues">ResetRegexValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHttpHeaderName` <a name="ResetHttpHeaderName" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.resetHttpHeaderName"></a>

```csharp
private void ResetHttpHeaderName()
```

##### `ResetRegexValues` <a name="ResetRegexValues" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.resetRegexValues"></a>

```csharp
private void ResetRegexValues()
```

##### `ResetValues` <a name="ResetValues" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.resetValues"></a>

```csharp
private void ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.property.httpHeaderNameInput">HttpHeaderNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.property.regexValuesInput">RegexValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.property.httpHeaderName">HttpHeaderName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.property.regexValues">RegexValues</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfig">Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HttpHeaderNameInput`<sup>Optional</sup> <a name="HttpHeaderNameInput" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.property.httpHeaderNameInput"></a>

```csharp
public string HttpHeaderNameInput { get; }
```

- *Type:* string

---

##### `RegexValuesInput`<sup>Optional</sup> <a name="RegexValuesInput" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.property.regexValuesInput"></a>

```csharp
public string[] RegexValuesInput { get; }
```

- *Type:* string[]

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `HttpHeaderName`<sup>Required</sup> <a name="HttpHeaderName" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.property.httpHeaderName"></a>

```csharp
public string HttpHeaderName { get; }
```

- *Type:* string

---

##### `RegexValues`<sup>Required</sup> <a name="RegexValues" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.property.regexValues"></a>

```csharp
public string[] RegexValues { get; }
```

- *Type:* string[]

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfig">Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfig</a>

---


### Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference <a name="Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetValues` <a name="ResetValues" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.resetValues"></a>

```csharp
private void ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfig">Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfig">Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfig</a>

---


### Elasticloadbalancingv2ListenerRuleConditionsList <a name="Elasticloadbalancingv2ListenerRuleConditionsList" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Elasticloadbalancingv2ListenerRuleConditionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsList.get"></a>

```csharp
private Elasticloadbalancingv2ListenerRuleConditionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditions">Elasticloadbalancingv2ListenerRuleConditions</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsList.property.internalValue"></a>

```csharp
public IResolvable|Elasticloadbalancingv2ListenerRuleConditions[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditions">Elasticloadbalancingv2ListenerRuleConditions</a>[]

---


### Elasticloadbalancingv2ListenerRuleConditionsOutputReference <a name="Elasticloadbalancingv2ListenerRuleConditionsOutputReference" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Elasticloadbalancingv2ListenerRuleConditionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.putHostHeaderConfig">PutHostHeaderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.putHttpHeaderConfig">PutHttpHeaderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.putHttpRequestMethodConfig">PutHttpRequestMethodConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.putPathPatternConfig">PutPathPatternConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.putQueryStringConfig">PutQueryStringConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.putSourceIpConfig">PutSourceIpConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.resetField">ResetField</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.resetHostHeaderConfig">ResetHostHeaderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.resetHttpHeaderConfig">ResetHttpHeaderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.resetHttpRequestMethodConfig">ResetHttpRequestMethodConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.resetPathPatternConfig">ResetPathPatternConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.resetQueryStringConfig">ResetQueryStringConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.resetRegexValues">ResetRegexValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.resetSourceIpConfig">ResetSourceIpConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHostHeaderConfig` <a name="PutHostHeaderConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.putHostHeaderConfig"></a>

```csharp
private void PutHostHeaderConfig(Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.putHostHeaderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfig">Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfig</a>

---

##### `PutHttpHeaderConfig` <a name="PutHttpHeaderConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.putHttpHeaderConfig"></a>

```csharp
private void PutHttpHeaderConfig(Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.putHttpHeaderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfig">Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfig</a>

---

##### `PutHttpRequestMethodConfig` <a name="PutHttpRequestMethodConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.putHttpRequestMethodConfig"></a>

```csharp
private void PutHttpRequestMethodConfig(Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.putHttpRequestMethodConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfig">Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfig</a>

---

##### `PutPathPatternConfig` <a name="PutPathPatternConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.putPathPatternConfig"></a>

```csharp
private void PutPathPatternConfig(Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.putPathPatternConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfig">Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfig</a>

---

##### `PutQueryStringConfig` <a name="PutQueryStringConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.putQueryStringConfig"></a>

```csharp
private void PutQueryStringConfig(Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.putQueryStringConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfig">Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfig</a>

---

##### `PutSourceIpConfig` <a name="PutSourceIpConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.putSourceIpConfig"></a>

```csharp
private void PutSourceIpConfig(Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.putSourceIpConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfig">Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfig</a>

---

##### `ResetField` <a name="ResetField" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.resetField"></a>

```csharp
private void ResetField()
```

##### `ResetHostHeaderConfig` <a name="ResetHostHeaderConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.resetHostHeaderConfig"></a>

```csharp
private void ResetHostHeaderConfig()
```

##### `ResetHttpHeaderConfig` <a name="ResetHttpHeaderConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.resetHttpHeaderConfig"></a>

```csharp
private void ResetHttpHeaderConfig()
```

##### `ResetHttpRequestMethodConfig` <a name="ResetHttpRequestMethodConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.resetHttpRequestMethodConfig"></a>

```csharp
private void ResetHttpRequestMethodConfig()
```

##### `ResetPathPatternConfig` <a name="ResetPathPatternConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.resetPathPatternConfig"></a>

```csharp
private void ResetPathPatternConfig()
```

##### `ResetQueryStringConfig` <a name="ResetQueryStringConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.resetQueryStringConfig"></a>

```csharp
private void ResetQueryStringConfig()
```

##### `ResetRegexValues` <a name="ResetRegexValues" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.resetRegexValues"></a>

```csharp
private void ResetRegexValues()
```

##### `ResetSourceIpConfig` <a name="ResetSourceIpConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.resetSourceIpConfig"></a>

```csharp
private void ResetSourceIpConfig()
```

##### `ResetValues` <a name="ResetValues" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.resetValues"></a>

```csharp
private void ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.property.hostHeaderConfig">HostHeaderConfig</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference">Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.property.httpHeaderConfig">HttpHeaderConfig</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference">Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.property.httpRequestMethodConfig">HttpRequestMethodConfig</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference">Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.property.pathPatternConfig">PathPatternConfig</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference">Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.property.queryStringConfig">QueryStringConfig</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference">Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.property.sourceIpConfig">SourceIpConfig</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference">Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.property.fieldInput">FieldInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.property.hostHeaderConfigInput">HostHeaderConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfig">Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.property.httpHeaderConfigInput">HttpHeaderConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfig">Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.property.httpRequestMethodConfigInput">HttpRequestMethodConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfig">Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.property.pathPatternConfigInput">PathPatternConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfig">Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.property.queryStringConfigInput">QueryStringConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfig">Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.property.regexValuesInput">RegexValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.property.sourceIpConfigInput">SourceIpConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfig">Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.property.field">Field</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.property.regexValues">RegexValues</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditions">Elasticloadbalancingv2ListenerRuleConditions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HostHeaderConfig`<sup>Required</sup> <a name="HostHeaderConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.property.hostHeaderConfig"></a>

```csharp
public Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference HostHeaderConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference">Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference</a>

---

##### `HttpHeaderConfig`<sup>Required</sup> <a name="HttpHeaderConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.property.httpHeaderConfig"></a>

```csharp
public Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference HttpHeaderConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference">Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference</a>

---

##### `HttpRequestMethodConfig`<sup>Required</sup> <a name="HttpRequestMethodConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.property.httpRequestMethodConfig"></a>

```csharp
public Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference HttpRequestMethodConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference">Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference</a>

---

##### `PathPatternConfig`<sup>Required</sup> <a name="PathPatternConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.property.pathPatternConfig"></a>

```csharp
public Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference PathPatternConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference">Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference</a>

---

##### `QueryStringConfig`<sup>Required</sup> <a name="QueryStringConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.property.queryStringConfig"></a>

```csharp
public Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference QueryStringConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference">Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference</a>

---

##### `SourceIpConfig`<sup>Required</sup> <a name="SourceIpConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.property.sourceIpConfig"></a>

```csharp
public Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference SourceIpConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference">Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference</a>

---

##### `FieldInput`<sup>Optional</sup> <a name="FieldInput" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.property.fieldInput"></a>

```csharp
public string FieldInput { get; }
```

- *Type:* string

---

##### `HostHeaderConfigInput`<sup>Optional</sup> <a name="HostHeaderConfigInput" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.property.hostHeaderConfigInput"></a>

```csharp
public IResolvable|Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfig HostHeaderConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfig">Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfig</a>

---

##### `HttpHeaderConfigInput`<sup>Optional</sup> <a name="HttpHeaderConfigInput" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.property.httpHeaderConfigInput"></a>

```csharp
public IResolvable|Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfig HttpHeaderConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfig">Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfig</a>

---

##### `HttpRequestMethodConfigInput`<sup>Optional</sup> <a name="HttpRequestMethodConfigInput" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.property.httpRequestMethodConfigInput"></a>

```csharp
public IResolvable|Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfig HttpRequestMethodConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfig">Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfig</a>

---

##### `PathPatternConfigInput`<sup>Optional</sup> <a name="PathPatternConfigInput" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.property.pathPatternConfigInput"></a>

```csharp
public IResolvable|Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfig PathPatternConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfig">Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfig</a>

---

##### `QueryStringConfigInput`<sup>Optional</sup> <a name="QueryStringConfigInput" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.property.queryStringConfigInput"></a>

```csharp
public IResolvable|Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfig QueryStringConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfig">Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfig</a>

---

##### `RegexValuesInput`<sup>Optional</sup> <a name="RegexValuesInput" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.property.regexValuesInput"></a>

```csharp
public string[] RegexValuesInput { get; }
```

- *Type:* string[]

---

##### `SourceIpConfigInput`<sup>Optional</sup> <a name="SourceIpConfigInput" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.property.sourceIpConfigInput"></a>

```csharp
public IResolvable|Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfig SourceIpConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfig">Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfig</a>

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Field`<sup>Required</sup> <a name="Field" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.property.field"></a>

```csharp
public string Field { get; }
```

- *Type:* string

---

##### `RegexValues`<sup>Required</sup> <a name="RegexValues" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.property.regexValues"></a>

```csharp
public string[] RegexValues { get; }
```

- *Type:* string[]

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Elasticloadbalancingv2ListenerRuleConditions InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditions">Elasticloadbalancingv2ListenerRuleConditions</a>

---


### Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference <a name="Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.resetRegexValues">ResetRegexValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegexValues` <a name="ResetRegexValues" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.resetRegexValues"></a>

```csharp
private void ResetRegexValues()
```

##### `ResetValues` <a name="ResetValues" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.resetValues"></a>

```csharp
private void ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.property.regexValuesInput">RegexValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.property.regexValues">RegexValues</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfig">Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RegexValuesInput`<sup>Optional</sup> <a name="RegexValuesInput" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.property.regexValuesInput"></a>

```csharp
public string[] RegexValuesInput { get; }
```

- *Type:* string[]

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `RegexValues`<sup>Required</sup> <a name="RegexValues" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.property.regexValues"></a>

```csharp
public string[] RegexValues { get; }
```

- *Type:* string[]

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfig">Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfig</a>

---


### Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference <a name="Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.putValues">PutValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutValues` <a name="PutValues" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.putValues"></a>

```csharp
private void PutValues(IResolvable|Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValues[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.putValues.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValues">Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValues</a>[]

---

##### `ResetValues` <a name="ResetValues" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.resetValues"></a>

```csharp
private void ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.property.values">Values</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesList">Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.property.valuesInput">ValuesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValues">Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValues</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfig">Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.property.values"></a>

```csharp
public Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesList Values { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesList">Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesList</a>

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.property.valuesInput"></a>

```csharp
public IResolvable|Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValues[] ValuesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValues">Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValues</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfig">Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfig</a>

---


### Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesList <a name="Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesList" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesList.get"></a>

```csharp
private Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValues">Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValues</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesList.property.internalValue"></a>

```csharp
public IResolvable|Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValues[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValues">Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValues</a>[]

---


### Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference <a name="Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValues">Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValues</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValues InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValues">Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValues</a>

---


### Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference <a name="Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.resetIpAddressType">ResetIpAddressType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIpAddressType` <a name="ResetIpAddressType" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.resetIpAddressType"></a>

```csharp
private void ResetIpAddressType()
```

##### `ResetValues` <a name="ResetValues" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.resetValues"></a>

```csharp
private void ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.property.ipAddressTypeInput">IpAddressTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.property.ipAddressType">IpAddressType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfig">Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IpAddressTypeInput`<sup>Optional</sup> <a name="IpAddressTypeInput" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.property.ipAddressTypeInput"></a>

```csharp
public string IpAddressTypeInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `IpAddressType`<sup>Required</sup> <a name="IpAddressType" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.property.ipAddressType"></a>

```csharp
public string IpAddressType { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfig">Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfig</a>

---


### Elasticloadbalancingv2ListenerRuleTagsList <a name="Elasticloadbalancingv2ListenerRuleTagsList" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Elasticloadbalancingv2ListenerRuleTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsList.get"></a>

```csharp
private Elasticloadbalancingv2ListenerRuleTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTags">Elasticloadbalancingv2ListenerRuleTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsList.property.internalValue"></a>

```csharp
public IResolvable|Elasticloadbalancingv2ListenerRuleTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTags">Elasticloadbalancingv2ListenerRuleTags</a>[]

---


### Elasticloadbalancingv2ListenerRuleTagsOutputReference <a name="Elasticloadbalancingv2ListenerRuleTagsOutputReference" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Elasticloadbalancingv2ListenerRuleTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTags">Elasticloadbalancingv2ListenerRuleTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Elasticloadbalancingv2ListenerRuleTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTags">Elasticloadbalancingv2ListenerRuleTags</a>

---


### Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference <a name="Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.putRewrites">PutRewrites</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.resetRewrites">ResetRewrites</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRewrites` <a name="PutRewrites" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.putRewrites"></a>

```csharp
private void PutRewrites(IResolvable|Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewrites[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.putRewrites.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewrites">Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewrites</a>[]

---

##### `ResetRewrites` <a name="ResetRewrites" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.resetRewrites"></a>

```csharp
private void ResetRewrites()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.property.rewrites">Rewrites</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesList">Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.property.rewritesInput">RewritesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewrites">Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewrites</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfig">Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Rewrites`<sup>Required</sup> <a name="Rewrites" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.property.rewrites"></a>

```csharp
public Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesList Rewrites { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesList">Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesList</a>

---

##### `RewritesInput`<sup>Optional</sup> <a name="RewritesInput" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.property.rewritesInput"></a>

```csharp
public IResolvable|Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewrites[] RewritesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewrites">Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewrites</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfig">Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfig</a>

---


### Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesList <a name="Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesList" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesList.get"></a>

```csharp
private Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewrites">Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewrites</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesList.property.internalValue"></a>

```csharp
public IResolvable|Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewrites[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewrites">Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewrites</a>[]

---


### Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference <a name="Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.resetReplace">ResetReplace</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```

##### `ResetReplace` <a name="ResetReplace" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.resetReplace"></a>

```csharp
private void ResetReplace()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.property.regexInput">RegexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.property.replaceInput">ReplaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.property.regex">Regex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.property.replace">Replace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewrites">Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewrites</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.property.regexInput"></a>

```csharp
public string RegexInput { get; }
```

- *Type:* string

---

##### `ReplaceInput`<sup>Optional</sup> <a name="ReplaceInput" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.property.replaceInput"></a>

```csharp
public string ReplaceInput { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.property.regex"></a>

```csharp
public string Regex { get; }
```

- *Type:* string

---

##### `Replace`<sup>Required</sup> <a name="Replace" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.property.replace"></a>

```csharp
public string Replace { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewrites InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewrites">Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewrites</a>

---


### Elasticloadbalancingv2ListenerRuleTransformsList <a name="Elasticloadbalancingv2ListenerRuleTransformsList" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Elasticloadbalancingv2ListenerRuleTransformsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsList.get"></a>

```csharp
private Elasticloadbalancingv2ListenerRuleTransformsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransforms">Elasticloadbalancingv2ListenerRuleTransforms</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsList.property.internalValue"></a>

```csharp
public IResolvable|Elasticloadbalancingv2ListenerRuleTransforms[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransforms">Elasticloadbalancingv2ListenerRuleTransforms</a>[]

---


### Elasticloadbalancingv2ListenerRuleTransformsOutputReference <a name="Elasticloadbalancingv2ListenerRuleTransformsOutputReference" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Elasticloadbalancingv2ListenerRuleTransformsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.putHostHeaderRewriteConfig">PutHostHeaderRewriteConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.putUrlRewriteConfig">PutUrlRewriteConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.resetHostHeaderRewriteConfig">ResetHostHeaderRewriteConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.resetType">ResetType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.resetUrlRewriteConfig">ResetUrlRewriteConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHostHeaderRewriteConfig` <a name="PutHostHeaderRewriteConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.putHostHeaderRewriteConfig"></a>

```csharp
private void PutHostHeaderRewriteConfig(Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.putHostHeaderRewriteConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfig">Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfig</a>

---

##### `PutUrlRewriteConfig` <a name="PutUrlRewriteConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.putUrlRewriteConfig"></a>

```csharp
private void PutUrlRewriteConfig(Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.putUrlRewriteConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfig">Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfig</a>

---

##### `ResetHostHeaderRewriteConfig` <a name="ResetHostHeaderRewriteConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.resetHostHeaderRewriteConfig"></a>

```csharp
private void ResetHostHeaderRewriteConfig()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.resetType"></a>

```csharp
private void ResetType()
```

##### `ResetUrlRewriteConfig` <a name="ResetUrlRewriteConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.resetUrlRewriteConfig"></a>

```csharp
private void ResetUrlRewriteConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.property.hostHeaderRewriteConfig">HostHeaderRewriteConfig</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference">Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.property.urlRewriteConfig">UrlRewriteConfig</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference">Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.property.hostHeaderRewriteConfigInput">HostHeaderRewriteConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfig">Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.property.urlRewriteConfigInput">UrlRewriteConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfig">Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransforms">Elasticloadbalancingv2ListenerRuleTransforms</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HostHeaderRewriteConfig`<sup>Required</sup> <a name="HostHeaderRewriteConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.property.hostHeaderRewriteConfig"></a>

```csharp
public Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference HostHeaderRewriteConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference">Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference</a>

---

##### `UrlRewriteConfig`<sup>Required</sup> <a name="UrlRewriteConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.property.urlRewriteConfig"></a>

```csharp
public Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference UrlRewriteConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference">Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference</a>

---

##### `HostHeaderRewriteConfigInput`<sup>Optional</sup> <a name="HostHeaderRewriteConfigInput" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.property.hostHeaderRewriteConfigInput"></a>

```csharp
public IResolvable|Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfig HostHeaderRewriteConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfig">Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfig</a>

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `UrlRewriteConfigInput`<sup>Optional</sup> <a name="UrlRewriteConfigInput" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.property.urlRewriteConfigInput"></a>

```csharp
public IResolvable|Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfig UrlRewriteConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfig">Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfig</a>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Elasticloadbalancingv2ListenerRuleTransforms InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransforms">Elasticloadbalancingv2ListenerRuleTransforms</a>

---


### Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference <a name="Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.putRewrites">PutRewrites</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.resetRewrites">ResetRewrites</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRewrites` <a name="PutRewrites" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.putRewrites"></a>

```csharp
private void PutRewrites(IResolvable|Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewrites[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.putRewrites.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewrites">Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewrites</a>[]

---

##### `ResetRewrites` <a name="ResetRewrites" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.resetRewrites"></a>

```csharp
private void ResetRewrites()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.property.rewrites">Rewrites</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesList">Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.property.rewritesInput">RewritesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewrites">Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewrites</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfig">Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Rewrites`<sup>Required</sup> <a name="Rewrites" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.property.rewrites"></a>

```csharp
public Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesList Rewrites { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesList">Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesList</a>

---

##### `RewritesInput`<sup>Optional</sup> <a name="RewritesInput" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.property.rewritesInput"></a>

```csharp
public IResolvable|Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewrites[] RewritesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewrites">Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewrites</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfig">Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfig</a>

---


### Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesList <a name="Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesList" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesList.get"></a>

```csharp
private Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewrites">Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewrites</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesList.property.internalValue"></a>

```csharp
public IResolvable|Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewrites[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewrites">Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewrites</a>[]

---


### Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference <a name="Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.resetReplace">ResetReplace</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```

##### `ResetReplace` <a name="ResetReplace" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.resetReplace"></a>

```csharp
private void ResetReplace()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.property.regexInput">RegexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.property.replaceInput">ReplaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.property.regex">Regex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.property.replace">Replace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewrites">Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewrites</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.property.regexInput"></a>

```csharp
public string RegexInput { get; }
```

- *Type:* string

---

##### `ReplaceInput`<sup>Optional</sup> <a name="ReplaceInput" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.property.replaceInput"></a>

```csharp
public string ReplaceInput { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.property.regex"></a>

```csharp
public string Regex { get; }
```

- *Type:* string

---

##### `Replace`<sup>Required</sup> <a name="Replace" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.property.replace"></a>

```csharp
public string Replace { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewrites InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewrites">Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewrites</a>

---



