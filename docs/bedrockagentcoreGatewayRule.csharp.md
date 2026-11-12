# `bedrockagentcoreGatewayRule` Submodule <a name="`bedrockagentcoreGatewayRule` Submodule" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BedrockagentcoreGatewayRule <a name="BedrockagentcoreGatewayRule" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/bedrockagentcore_gateway_rule awscc_bedrockagentcore_gateway_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreGatewayRule(Construct Scope, string Id, BedrockagentcoreGatewayRuleConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConfig">BedrockagentcoreGatewayRuleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConfig">BedrockagentcoreGatewayRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.putActions">PutActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.putConditions">PutConditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.resetConditions">ResetConditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.resetGatewayIdentifier">ResetGatewayIdentifier</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutActions` <a name="PutActions" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.putActions"></a>

```csharp
private void PutActions(IResolvable|BedrockagentcoreGatewayRuleActions[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.putActions.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActions">BedrockagentcoreGatewayRuleActions</a>[]

---

##### `PutConditions` <a name="PutConditions" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.putConditions"></a>

```csharp
private void PutConditions(IResolvable|BedrockagentcoreGatewayRuleConditions[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.putConditions.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditions">BedrockagentcoreGatewayRuleConditions</a>[]

---

##### `ResetConditions` <a name="ResetConditions" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.resetConditions"></a>

```csharp
private void ResetConditions()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetGatewayIdentifier` <a name="ResetGatewayIdentifier" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.resetGatewayIdentifier"></a>

```csharp
private void ResetGatewayIdentifier()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a BedrockagentcoreGatewayRule resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

BedrockagentcoreGatewayRule.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

BedrockagentcoreGatewayRule.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

BedrockagentcoreGatewayRule.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

BedrockagentcoreGatewayRule.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a BedrockagentcoreGatewayRule resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BedrockagentcoreGatewayRule to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BedrockagentcoreGatewayRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/bedrockagentcore_gateway_rule#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the BedrockagentcoreGatewayRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.actions">Actions</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsList">BedrockagentcoreGatewayRuleActionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.conditions">Conditions</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsList">BedrockagentcoreGatewayRuleConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.gatewayArn">GatewayArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.ruleId">RuleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.systemAttribute">SystemAttribute</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemOutputReference">BedrockagentcoreGatewayRuleSystemOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.actionsInput">ActionsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActions">BedrockagentcoreGatewayRuleActions</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.conditionsInput">ConditionsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditions">BedrockagentcoreGatewayRuleConditions</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.gatewayIdentifierInput">GatewayIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.priorityInput">PriorityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.gatewayIdentifier">GatewayIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.priority">Priority</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Actions`<sup>Required</sup> <a name="Actions" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.actions"></a>

```csharp
public BedrockagentcoreGatewayRuleActionsList Actions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsList">BedrockagentcoreGatewayRuleActionsList</a>

---

##### `Conditions`<sup>Required</sup> <a name="Conditions" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.conditions"></a>

```csharp
public BedrockagentcoreGatewayRuleConditionsList Conditions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsList">BedrockagentcoreGatewayRuleConditionsList</a>

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `GatewayArn`<sup>Required</sup> <a name="GatewayArn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.gatewayArn"></a>

```csharp
public string GatewayArn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `RuleId`<sup>Required</sup> <a name="RuleId" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.ruleId"></a>

```csharp
public string RuleId { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `SystemAttribute`<sup>Required</sup> <a name="SystemAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.systemAttribute"></a>

```csharp
public BedrockagentcoreGatewayRuleSystemOutputReference SystemAttribute { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemOutputReference">BedrockagentcoreGatewayRuleSystemOutputReference</a>

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `ActionsInput`<sup>Optional</sup> <a name="ActionsInput" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.actionsInput"></a>

```csharp
public IResolvable|BedrockagentcoreGatewayRuleActions[] ActionsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActions">BedrockagentcoreGatewayRuleActions</a>[]

---

##### `ConditionsInput`<sup>Optional</sup> <a name="ConditionsInput" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.conditionsInput"></a>

```csharp
public IResolvable|BedrockagentcoreGatewayRuleConditions[] ConditionsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditions">BedrockagentcoreGatewayRuleConditions</a>[]

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `GatewayIdentifierInput`<sup>Optional</sup> <a name="GatewayIdentifierInput" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.gatewayIdentifierInput"></a>

```csharp
public string GatewayIdentifierInput { get; }
```

- *Type:* string

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.priorityInput"></a>

```csharp
public double PriorityInput { get; }
```

- *Type:* double

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `GatewayIdentifier`<sup>Required</sup> <a name="GatewayIdentifier" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.gatewayIdentifier"></a>

```csharp
public string GatewayIdentifier { get; }
```

- *Type:* string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.priority"></a>

```csharp
public double Priority { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BedrockagentcoreGatewayRuleActions <a name="BedrockagentcoreGatewayRuleActions" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreGatewayRuleActions {
    BedrockagentcoreGatewayRuleActionsConfigurationBundle ConfigurationBundle = null,
    BedrockagentcoreGatewayRuleActionsRouteToTarget RouteToTarget = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActions.property.configurationBundle">ConfigurationBundle</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundle">BedrockagentcoreGatewayRuleActionsConfigurationBundle</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/bedrockagentcore_gateway_rule#configuration_bundle BedrockagentcoreGatewayRule#configuration_bundle}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActions.property.routeToTarget">RouteToTarget</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTarget">BedrockagentcoreGatewayRuleActionsRouteToTarget</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/bedrockagentcore_gateway_rule#route_to_target BedrockagentcoreGatewayRule#route_to_target}. |

---

##### `ConfigurationBundle`<sup>Optional</sup> <a name="ConfigurationBundle" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActions.property.configurationBundle"></a>

```csharp
public BedrockagentcoreGatewayRuleActionsConfigurationBundle ConfigurationBundle { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundle">BedrockagentcoreGatewayRuleActionsConfigurationBundle</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/bedrockagentcore_gateway_rule#configuration_bundle BedrockagentcoreGatewayRule#configuration_bundle}.

---

##### `RouteToTarget`<sup>Optional</sup> <a name="RouteToTarget" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActions.property.routeToTarget"></a>

```csharp
public BedrockagentcoreGatewayRuleActionsRouteToTarget RouteToTarget { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTarget">BedrockagentcoreGatewayRuleActionsRouteToTarget</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/bedrockagentcore_gateway_rule#route_to_target BedrockagentcoreGatewayRule#route_to_target}.

---

### BedrockagentcoreGatewayRuleActionsConfigurationBundle <a name="BedrockagentcoreGatewayRuleActionsConfigurationBundle" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundle"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundle.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreGatewayRuleActionsConfigurationBundle {
    BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverride StaticOverride = null,
    BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverride WeightedOverride = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundle.property.staticOverride">StaticOverride</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverride">BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverride</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/bedrockagentcore_gateway_rule#static_override BedrockagentcoreGatewayRule#static_override}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundle.property.weightedOverride">WeightedOverride</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverride">BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverride</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/bedrockagentcore_gateway_rule#weighted_override BedrockagentcoreGatewayRule#weighted_override}. |

---

##### `StaticOverride`<sup>Optional</sup> <a name="StaticOverride" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundle.property.staticOverride"></a>

```csharp
public BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverride StaticOverride { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverride">BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverride</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/bedrockagentcore_gateway_rule#static_override BedrockagentcoreGatewayRule#static_override}.

---

##### `WeightedOverride`<sup>Optional</sup> <a name="WeightedOverride" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundle.property.weightedOverride"></a>

```csharp
public BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverride WeightedOverride { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverride">BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverride</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/bedrockagentcore_gateway_rule#weighted_override BedrockagentcoreGatewayRule#weighted_override}.

---

### BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverride <a name="BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverride" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverride"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverride.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverride {
    string BundleArn = null,
    string BundleVersion = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverride.property.bundleArn">BundleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/bedrockagentcore_gateway_rule#bundle_arn BedrockagentcoreGatewayRule#bundle_arn}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverride.property.bundleVersion">BundleVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/bedrockagentcore_gateway_rule#bundle_version BedrockagentcoreGatewayRule#bundle_version}. |

---

##### `BundleArn`<sup>Optional</sup> <a name="BundleArn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverride.property.bundleArn"></a>

```csharp
public string BundleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/bedrockagentcore_gateway_rule#bundle_arn BedrockagentcoreGatewayRule#bundle_arn}.

---

##### `BundleVersion`<sup>Optional</sup> <a name="BundleVersion" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverride.property.bundleVersion"></a>

```csharp
public string BundleVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/bedrockagentcore_gateway_rule#bundle_version BedrockagentcoreGatewayRule#bundle_version}.

---

### BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverride <a name="BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverride" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverride"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverride.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverride {
    IResolvable|BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplit[] TrafficSplit = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverride.property.trafficSplit">TrafficSplit</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplit">BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplit</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/bedrockagentcore_gateway_rule#traffic_split BedrockagentcoreGatewayRule#traffic_split}. |

---

##### `TrafficSplit`<sup>Optional</sup> <a name="TrafficSplit" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverride.property.trafficSplit"></a>

```csharp
public IResolvable|BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplit[] TrafficSplit { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplit">BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplit</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/bedrockagentcore_gateway_rule#traffic_split BedrockagentcoreGatewayRule#traffic_split}.

---

### BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplit <a name="BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplit" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplit"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplit.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplit {
    BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundle ConfigurationBundle = null,
    string Description = null,
    System.Collections.Generic.IDictionary<string, string> Metadata = null,
    string Name = null,
    double Weight = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplit.property.configurationBundle">ConfigurationBundle</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundle">BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundle</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/bedrockagentcore_gateway_rule#configuration_bundle BedrockagentcoreGatewayRule#configuration_bundle}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplit.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/bedrockagentcore_gateway_rule#description BedrockagentcoreGatewayRule#description}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplit.property.metadata">Metadata</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/bedrockagentcore_gateway_rule#metadata BedrockagentcoreGatewayRule#metadata}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplit.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/bedrockagentcore_gateway_rule#name BedrockagentcoreGatewayRule#name}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplit.property.weight">Weight</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/bedrockagentcore_gateway_rule#weight BedrockagentcoreGatewayRule#weight}. |

---

##### `ConfigurationBundle`<sup>Optional</sup> <a name="ConfigurationBundle" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplit.property.configurationBundle"></a>

```csharp
public BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundle ConfigurationBundle { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundle">BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundle</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/bedrockagentcore_gateway_rule#configuration_bundle BedrockagentcoreGatewayRule#configuration_bundle}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplit.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/bedrockagentcore_gateway_rule#description BedrockagentcoreGatewayRule#description}.

---

##### `Metadata`<sup>Optional</sup> <a name="Metadata" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplit.property.metadata"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Metadata { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/bedrockagentcore_gateway_rule#metadata BedrockagentcoreGatewayRule#metadata}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplit.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/bedrockagentcore_gateway_rule#name BedrockagentcoreGatewayRule#name}.

---

##### `Weight`<sup>Optional</sup> <a name="Weight" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplit.property.weight"></a>

```csharp
public double Weight { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/bedrockagentcore_gateway_rule#weight BedrockagentcoreGatewayRule#weight}.

---

### BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundle <a name="BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundle" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundle"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundle.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundle {
    string BundleArn = null,
    string BundleVersion = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundle.property.bundleArn">BundleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/bedrockagentcore_gateway_rule#bundle_arn BedrockagentcoreGatewayRule#bundle_arn}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundle.property.bundleVersion">BundleVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/bedrockagentcore_gateway_rule#bundle_version BedrockagentcoreGatewayRule#bundle_version}. |

---

##### `BundleArn`<sup>Optional</sup> <a name="BundleArn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundle.property.bundleArn"></a>

```csharp
public string BundleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/bedrockagentcore_gateway_rule#bundle_arn BedrockagentcoreGatewayRule#bundle_arn}.

---

##### `BundleVersion`<sup>Optional</sup> <a name="BundleVersion" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundle.property.bundleVersion"></a>

```csharp
public string BundleVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/bedrockagentcore_gateway_rule#bundle_version BedrockagentcoreGatewayRule#bundle_version}.

---

### BedrockagentcoreGatewayRuleActionsRouteToTarget <a name="BedrockagentcoreGatewayRuleActionsRouteToTarget" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTarget"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTarget.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreGatewayRuleActionsRouteToTarget {
    BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRoute StaticRoute = null,
    BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRoute WeightedRoute = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTarget.property.staticRoute">StaticRoute</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRoute">BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRoute</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/bedrockagentcore_gateway_rule#static_route BedrockagentcoreGatewayRule#static_route}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTarget.property.weightedRoute">WeightedRoute</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRoute">BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRoute</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/bedrockagentcore_gateway_rule#weighted_route BedrockagentcoreGatewayRule#weighted_route}. |

---

##### `StaticRoute`<sup>Optional</sup> <a name="StaticRoute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTarget.property.staticRoute"></a>

```csharp
public BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRoute StaticRoute { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRoute">BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRoute</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/bedrockagentcore_gateway_rule#static_route BedrockagentcoreGatewayRule#static_route}.

---

##### `WeightedRoute`<sup>Optional</sup> <a name="WeightedRoute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTarget.property.weightedRoute"></a>

```csharp
public BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRoute WeightedRoute { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRoute">BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRoute</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/bedrockagentcore_gateway_rule#weighted_route BedrockagentcoreGatewayRule#weighted_route}.

---

### BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRoute <a name="BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRoute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRoute"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRoute.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRoute {
    BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallback Fallback = null,
    string Model = null,
    string TargetName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRoute.property.fallback">Fallback</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallback">BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallback</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/bedrockagentcore_gateway_rule#fallback BedrockagentcoreGatewayRule#fallback}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRoute.property.model">Model</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/bedrockagentcore_gateway_rule#model BedrockagentcoreGatewayRule#model}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRoute.property.targetName">TargetName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/bedrockagentcore_gateway_rule#target_name BedrockagentcoreGatewayRule#target_name}. |

---

##### `Fallback`<sup>Optional</sup> <a name="Fallback" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRoute.property.fallback"></a>

```csharp
public BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallback Fallback { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallback">BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallback</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/bedrockagentcore_gateway_rule#fallback BedrockagentcoreGatewayRule#fallback}.

---

##### `Model`<sup>Optional</sup> <a name="Model" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRoute.property.model"></a>

```csharp
public string Model { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/bedrockagentcore_gateway_rule#model BedrockagentcoreGatewayRule#model}.

---

##### `TargetName`<sup>Optional</sup> <a name="TargetName" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRoute.property.targetName"></a>

```csharp
public string TargetName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/bedrockagentcore_gateway_rule#target_name BedrockagentcoreGatewayRule#target_name}.

---

### BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallback <a name="BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallback" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallback"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallback.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallback {
    BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackCircuitBreaker CircuitBreaker = null,
    double FirstByteTimeoutMilliseconds = null,
    IResolvable|BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallback[] TargetFallback = null,
    BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTriggerOn TriggerOn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallback.property.circuitBreaker">CircuitBreaker</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackCircuitBreaker">BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackCircuitBreaker</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/bedrockagentcore_gateway_rule#circuit_breaker BedrockagentcoreGatewayRule#circuit_breaker}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallback.property.firstByteTimeoutMilliseconds">FirstByteTimeoutMilliseconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/bedrockagentcore_gateway_rule#first_byte_timeout_milliseconds BedrockagentcoreGatewayRule#first_byte_timeout_milliseconds}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallback.property.targetFallback">TargetFallback</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallback">BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallback</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/bedrockagentcore_gateway_rule#target_fallback BedrockagentcoreGatewayRule#target_fallback}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallback.property.triggerOn">TriggerOn</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTriggerOn">BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTriggerOn</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/bedrockagentcore_gateway_rule#trigger_on BedrockagentcoreGatewayRule#trigger_on}. |

---

##### `CircuitBreaker`<sup>Optional</sup> <a name="CircuitBreaker" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallback.property.circuitBreaker"></a>

```csharp
public BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackCircuitBreaker CircuitBreaker { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackCircuitBreaker">BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackCircuitBreaker</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/bedrockagentcore_gateway_rule#circuit_breaker BedrockagentcoreGatewayRule#circuit_breaker}.

---

##### `FirstByteTimeoutMilliseconds`<sup>Optional</sup> <a name="FirstByteTimeoutMilliseconds" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallback.property.firstByteTimeoutMilliseconds"></a>

```csharp
public double FirstByteTimeoutMilliseconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/bedrockagentcore_gateway_rule#first_byte_timeout_milliseconds BedrockagentcoreGatewayRule#first_byte_timeout_milliseconds}.

---

##### `TargetFallback`<sup>Optional</sup> <a name="TargetFallback" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallback.property.targetFallback"></a>

```csharp
public IResolvable|BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallback[] TargetFallback { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallback">BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallback</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/bedrockagentcore_gateway_rule#target_fallback BedrockagentcoreGatewayRule#target_fallback}.

---

##### `TriggerOn`<sup>Optional</sup> <a name="TriggerOn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallback.property.triggerOn"></a>

```csharp
public BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTriggerOn TriggerOn { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTriggerOn">BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTriggerOn</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/bedrockagentcore_gateway_rule#trigger_on BedrockagentcoreGatewayRule#trigger_on}.

---

### BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackCircuitBreaker <a name="BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackCircuitBreaker" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackCircuitBreaker"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackCircuitBreaker.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackCircuitBreaker {
    string Mode = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackCircuitBreaker.property.mode">Mode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/bedrockagentcore_gateway_rule#mode BedrockagentcoreGatewayRule#mode}. |

---

##### `Mode`<sup>Optional</sup> <a name="Mode" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackCircuitBreaker.property.mode"></a>

```csharp
public string Mode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/bedrockagentcore_gateway_rule#mode BedrockagentcoreGatewayRule#mode}.

---

### BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallback <a name="BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallback" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallback"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallback.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallback {
    double FirstByteTimeoutMilliseconds = null,
    string Model = null,
    string TargetName = null,
    BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackTriggerOn TriggerOn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallback.property.firstByteTimeoutMilliseconds">FirstByteTimeoutMilliseconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/bedrockagentcore_gateway_rule#first_byte_timeout_milliseconds BedrockagentcoreGatewayRule#first_byte_timeout_milliseconds}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallback.property.model">Model</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/bedrockagentcore_gateway_rule#model BedrockagentcoreGatewayRule#model}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallback.property.targetName">TargetName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/bedrockagentcore_gateway_rule#target_name BedrockagentcoreGatewayRule#target_name}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallback.property.triggerOn">TriggerOn</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackTriggerOn">BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackTriggerOn</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/bedrockagentcore_gateway_rule#trigger_on BedrockagentcoreGatewayRule#trigger_on}. |

---

##### `FirstByteTimeoutMilliseconds`<sup>Optional</sup> <a name="FirstByteTimeoutMilliseconds" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallback.property.firstByteTimeoutMilliseconds"></a>

```csharp
public double FirstByteTimeoutMilliseconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/bedrockagentcore_gateway_rule#first_byte_timeout_milliseconds BedrockagentcoreGatewayRule#first_byte_timeout_milliseconds}.

---

##### `Model`<sup>Optional</sup> <a name="Model" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallback.property.model"></a>

```csharp
public string Model { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/bedrockagentcore_gateway_rule#model BedrockagentcoreGatewayRule#model}.

---

##### `TargetName`<sup>Optional</sup> <a name="TargetName" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallback.property.targetName"></a>

```csharp
public string TargetName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/bedrockagentcore_gateway_rule#target_name BedrockagentcoreGatewayRule#target_name}.

---

##### `TriggerOn`<sup>Optional</sup> <a name="TriggerOn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallback.property.triggerOn"></a>

```csharp
public BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackTriggerOn TriggerOn { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackTriggerOn">BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackTriggerOn</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/bedrockagentcore_gateway_rule#trigger_on BedrockagentcoreGatewayRule#trigger_on}.

---

### BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackTriggerOn <a name="BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackTriggerOn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackTriggerOn"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackTriggerOn.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackTriggerOn {
    string[] Errors = null,
    string[] StatusCodes = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackTriggerOn.property.errors">Errors</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/bedrockagentcore_gateway_rule#errors BedrockagentcoreGatewayRule#errors}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackTriggerOn.property.statusCodes">StatusCodes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/bedrockagentcore_gateway_rule#status_codes BedrockagentcoreGatewayRule#status_codes}. |

---

##### `Errors`<sup>Optional</sup> <a name="Errors" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackTriggerOn.property.errors"></a>

```csharp
public string[] Errors { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/bedrockagentcore_gateway_rule#errors BedrockagentcoreGatewayRule#errors}.

---

##### `StatusCodes`<sup>Optional</sup> <a name="StatusCodes" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackTriggerOn.property.statusCodes"></a>

```csharp
public string[] StatusCodes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/bedrockagentcore_gateway_rule#status_codes BedrockagentcoreGatewayRule#status_codes}.

---

### BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTriggerOn <a name="BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTriggerOn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTriggerOn"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTriggerOn.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTriggerOn {
    string[] Errors = null,
    string[] StatusCodes = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTriggerOn.property.errors">Errors</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/bedrockagentcore_gateway_rule#errors BedrockagentcoreGatewayRule#errors}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTriggerOn.property.statusCodes">StatusCodes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/bedrockagentcore_gateway_rule#status_codes BedrockagentcoreGatewayRule#status_codes}. |

---

##### `Errors`<sup>Optional</sup> <a name="Errors" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTriggerOn.property.errors"></a>

```csharp
public string[] Errors { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/bedrockagentcore_gateway_rule#errors BedrockagentcoreGatewayRule#errors}.

---

##### `StatusCodes`<sup>Optional</sup> <a name="StatusCodes" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTriggerOn.property.statusCodes"></a>

```csharp
public string[] StatusCodes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/bedrockagentcore_gateway_rule#status_codes BedrockagentcoreGatewayRule#status_codes}.

---

### BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRoute <a name="BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRoute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRoute"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRoute.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRoute {
    IResolvable|BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplit[] TrafficSplit = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRoute.property.trafficSplit">TrafficSplit</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplit">BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplit</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/bedrockagentcore_gateway_rule#traffic_split BedrockagentcoreGatewayRule#traffic_split}. |

---

##### `TrafficSplit`<sup>Optional</sup> <a name="TrafficSplit" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRoute.property.trafficSplit"></a>

```csharp
public IResolvable|BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplit[] TrafficSplit { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplit">BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplit</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/bedrockagentcore_gateway_rule#traffic_split BedrockagentcoreGatewayRule#traffic_split}.

---

### BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplit <a name="BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplit" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplit"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplit.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplit {
    string Description = null,
    BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallback Fallback = null,
    System.Collections.Generic.IDictionary<string, string> Metadata = null,
    string Model = null,
    string Name = null,
    string TargetName = null,
    double Weight = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplit.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/bedrockagentcore_gateway_rule#description BedrockagentcoreGatewayRule#description}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplit.property.fallback">Fallback</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallback">BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallback</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/bedrockagentcore_gateway_rule#fallback BedrockagentcoreGatewayRule#fallback}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplit.property.metadata">Metadata</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/bedrockagentcore_gateway_rule#metadata BedrockagentcoreGatewayRule#metadata}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplit.property.model">Model</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/bedrockagentcore_gateway_rule#model BedrockagentcoreGatewayRule#model}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplit.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/bedrockagentcore_gateway_rule#name BedrockagentcoreGatewayRule#name}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplit.property.targetName">TargetName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/bedrockagentcore_gateway_rule#target_name BedrockagentcoreGatewayRule#target_name}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplit.property.weight">Weight</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/bedrockagentcore_gateway_rule#weight BedrockagentcoreGatewayRule#weight}. |

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplit.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/bedrockagentcore_gateway_rule#description BedrockagentcoreGatewayRule#description}.

---

##### `Fallback`<sup>Optional</sup> <a name="Fallback" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplit.property.fallback"></a>

```csharp
public BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallback Fallback { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallback">BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallback</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/bedrockagentcore_gateway_rule#fallback BedrockagentcoreGatewayRule#fallback}.

---

##### `Metadata`<sup>Optional</sup> <a name="Metadata" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplit.property.metadata"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Metadata { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/bedrockagentcore_gateway_rule#metadata BedrockagentcoreGatewayRule#metadata}.

---

##### `Model`<sup>Optional</sup> <a name="Model" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplit.property.model"></a>

```csharp
public string Model { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/bedrockagentcore_gateway_rule#model BedrockagentcoreGatewayRule#model}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplit.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/bedrockagentcore_gateway_rule#name BedrockagentcoreGatewayRule#name}.

---

##### `TargetName`<sup>Optional</sup> <a name="TargetName" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplit.property.targetName"></a>

```csharp
public string TargetName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/bedrockagentcore_gateway_rule#target_name BedrockagentcoreGatewayRule#target_name}.

---

##### `Weight`<sup>Optional</sup> <a name="Weight" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplit.property.weight"></a>

```csharp
public double Weight { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/bedrockagentcore_gateway_rule#weight BedrockagentcoreGatewayRule#weight}.

---

### BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallback <a name="BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallback" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallback"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallback.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallback {
    BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackCircuitBreaker CircuitBreaker = null,
    double FirstByteTimeoutMilliseconds = null,
    IResolvable|BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallback[] TargetFallback = null,
    BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTriggerOn TriggerOn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallback.property.circuitBreaker">CircuitBreaker</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackCircuitBreaker">BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackCircuitBreaker</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/bedrockagentcore_gateway_rule#circuit_breaker BedrockagentcoreGatewayRule#circuit_breaker}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallback.property.firstByteTimeoutMilliseconds">FirstByteTimeoutMilliseconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/bedrockagentcore_gateway_rule#first_byte_timeout_milliseconds BedrockagentcoreGatewayRule#first_byte_timeout_milliseconds}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallback.property.targetFallback">TargetFallback</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallback">BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallback</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/bedrockagentcore_gateway_rule#target_fallback BedrockagentcoreGatewayRule#target_fallback}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallback.property.triggerOn">TriggerOn</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTriggerOn">BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTriggerOn</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/bedrockagentcore_gateway_rule#trigger_on BedrockagentcoreGatewayRule#trigger_on}. |

---

##### `CircuitBreaker`<sup>Optional</sup> <a name="CircuitBreaker" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallback.property.circuitBreaker"></a>

```csharp
public BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackCircuitBreaker CircuitBreaker { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackCircuitBreaker">BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackCircuitBreaker</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/bedrockagentcore_gateway_rule#circuit_breaker BedrockagentcoreGatewayRule#circuit_breaker}.

---

##### `FirstByteTimeoutMilliseconds`<sup>Optional</sup> <a name="FirstByteTimeoutMilliseconds" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallback.property.firstByteTimeoutMilliseconds"></a>

```csharp
public double FirstByteTimeoutMilliseconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/bedrockagentcore_gateway_rule#first_byte_timeout_milliseconds BedrockagentcoreGatewayRule#first_byte_timeout_milliseconds}.

---

##### `TargetFallback`<sup>Optional</sup> <a name="TargetFallback" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallback.property.targetFallback"></a>

```csharp
public IResolvable|BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallback[] TargetFallback { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallback">BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallback</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/bedrockagentcore_gateway_rule#target_fallback BedrockagentcoreGatewayRule#target_fallback}.

---

##### `TriggerOn`<sup>Optional</sup> <a name="TriggerOn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallback.property.triggerOn"></a>

```csharp
public BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTriggerOn TriggerOn { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTriggerOn">BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTriggerOn</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/bedrockagentcore_gateway_rule#trigger_on BedrockagentcoreGatewayRule#trigger_on}.

---

### BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackCircuitBreaker <a name="BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackCircuitBreaker" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackCircuitBreaker"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackCircuitBreaker.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackCircuitBreaker {
    string Mode = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackCircuitBreaker.property.mode">Mode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/bedrockagentcore_gateway_rule#mode BedrockagentcoreGatewayRule#mode}. |

---

##### `Mode`<sup>Optional</sup> <a name="Mode" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackCircuitBreaker.property.mode"></a>

```csharp
public string Mode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/bedrockagentcore_gateway_rule#mode BedrockagentcoreGatewayRule#mode}.

---

### BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallback <a name="BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallback" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallback"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallback.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallback {
    double FirstByteTimeoutMilliseconds = null,
    string Model = null,
    string TargetName = null,
    BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackTriggerOn TriggerOn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallback.property.firstByteTimeoutMilliseconds">FirstByteTimeoutMilliseconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/bedrockagentcore_gateway_rule#first_byte_timeout_milliseconds BedrockagentcoreGatewayRule#first_byte_timeout_milliseconds}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallback.property.model">Model</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/bedrockagentcore_gateway_rule#model BedrockagentcoreGatewayRule#model}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallback.property.targetName">TargetName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/bedrockagentcore_gateway_rule#target_name BedrockagentcoreGatewayRule#target_name}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallback.property.triggerOn">TriggerOn</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackTriggerOn">BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackTriggerOn</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/bedrockagentcore_gateway_rule#trigger_on BedrockagentcoreGatewayRule#trigger_on}. |

---

##### `FirstByteTimeoutMilliseconds`<sup>Optional</sup> <a name="FirstByteTimeoutMilliseconds" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallback.property.firstByteTimeoutMilliseconds"></a>

```csharp
public double FirstByteTimeoutMilliseconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/bedrockagentcore_gateway_rule#first_byte_timeout_milliseconds BedrockagentcoreGatewayRule#first_byte_timeout_milliseconds}.

---

##### `Model`<sup>Optional</sup> <a name="Model" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallback.property.model"></a>

```csharp
public string Model { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/bedrockagentcore_gateway_rule#model BedrockagentcoreGatewayRule#model}.

---

##### `TargetName`<sup>Optional</sup> <a name="TargetName" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallback.property.targetName"></a>

```csharp
public string TargetName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/bedrockagentcore_gateway_rule#target_name BedrockagentcoreGatewayRule#target_name}.

---

##### `TriggerOn`<sup>Optional</sup> <a name="TriggerOn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallback.property.triggerOn"></a>

```csharp
public BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackTriggerOn TriggerOn { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackTriggerOn">BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackTriggerOn</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/bedrockagentcore_gateway_rule#trigger_on BedrockagentcoreGatewayRule#trigger_on}.

---

### BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackTriggerOn <a name="BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackTriggerOn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackTriggerOn"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackTriggerOn.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackTriggerOn {
    string[] Errors = null,
    string[] StatusCodes = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackTriggerOn.property.errors">Errors</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/bedrockagentcore_gateway_rule#errors BedrockagentcoreGatewayRule#errors}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackTriggerOn.property.statusCodes">StatusCodes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/bedrockagentcore_gateway_rule#status_codes BedrockagentcoreGatewayRule#status_codes}. |

---

##### `Errors`<sup>Optional</sup> <a name="Errors" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackTriggerOn.property.errors"></a>

```csharp
public string[] Errors { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/bedrockagentcore_gateway_rule#errors BedrockagentcoreGatewayRule#errors}.

---

##### `StatusCodes`<sup>Optional</sup> <a name="StatusCodes" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackTriggerOn.property.statusCodes"></a>

```csharp
public string[] StatusCodes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/bedrockagentcore_gateway_rule#status_codes BedrockagentcoreGatewayRule#status_codes}.

---

### BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTriggerOn <a name="BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTriggerOn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTriggerOn"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTriggerOn.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTriggerOn {
    string[] Errors = null,
    string[] StatusCodes = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTriggerOn.property.errors">Errors</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/bedrockagentcore_gateway_rule#errors BedrockagentcoreGatewayRule#errors}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTriggerOn.property.statusCodes">StatusCodes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/bedrockagentcore_gateway_rule#status_codes BedrockagentcoreGatewayRule#status_codes}. |

---

##### `Errors`<sup>Optional</sup> <a name="Errors" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTriggerOn.property.errors"></a>

```csharp
public string[] Errors { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/bedrockagentcore_gateway_rule#errors BedrockagentcoreGatewayRule#errors}.

---

##### `StatusCodes`<sup>Optional</sup> <a name="StatusCodes" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTriggerOn.property.statusCodes"></a>

```csharp
public string[] StatusCodes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/bedrockagentcore_gateway_rule#status_codes BedrockagentcoreGatewayRule#status_codes}.

---

### BedrockagentcoreGatewayRuleConditions <a name="BedrockagentcoreGatewayRuleConditions" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreGatewayRuleConditions {
    BedrockagentcoreGatewayRuleConditionsMatchModels MatchModels = null,
    BedrockagentcoreGatewayRuleConditionsMatchPaths MatchPaths = null,
    BedrockagentcoreGatewayRuleConditionsMatchPrincipals MatchPrincipals = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditions.property.matchModels">MatchModels</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchModels">BedrockagentcoreGatewayRuleConditionsMatchModels</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/bedrockagentcore_gateway_rule#match_models BedrockagentcoreGatewayRule#match_models}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditions.property.matchPaths">MatchPaths</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPaths">BedrockagentcoreGatewayRuleConditionsMatchPaths</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/bedrockagentcore_gateway_rule#match_paths BedrockagentcoreGatewayRule#match_paths}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditions.property.matchPrincipals">MatchPrincipals</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipals">BedrockagentcoreGatewayRuleConditionsMatchPrincipals</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/bedrockagentcore_gateway_rule#match_principals BedrockagentcoreGatewayRule#match_principals}. |

---

##### `MatchModels`<sup>Optional</sup> <a name="MatchModels" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditions.property.matchModels"></a>

```csharp
public BedrockagentcoreGatewayRuleConditionsMatchModels MatchModels { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchModels">BedrockagentcoreGatewayRuleConditionsMatchModels</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/bedrockagentcore_gateway_rule#match_models BedrockagentcoreGatewayRule#match_models}.

---

##### `MatchPaths`<sup>Optional</sup> <a name="MatchPaths" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditions.property.matchPaths"></a>

```csharp
public BedrockagentcoreGatewayRuleConditionsMatchPaths MatchPaths { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPaths">BedrockagentcoreGatewayRuleConditionsMatchPaths</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/bedrockagentcore_gateway_rule#match_paths BedrockagentcoreGatewayRule#match_paths}.

---

##### `MatchPrincipals`<sup>Optional</sup> <a name="MatchPrincipals" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditions.property.matchPrincipals"></a>

```csharp
public BedrockagentcoreGatewayRuleConditionsMatchPrincipals MatchPrincipals { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipals">BedrockagentcoreGatewayRuleConditionsMatchPrincipals</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/bedrockagentcore_gateway_rule#match_principals BedrockagentcoreGatewayRule#match_principals}.

---

### BedrockagentcoreGatewayRuleConditionsMatchModels <a name="BedrockagentcoreGatewayRuleConditionsMatchModels" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchModels"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchModels.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreGatewayRuleConditionsMatchModels {
    IResolvable|BedrockagentcoreGatewayRuleConditionsMatchModelsAnyOf[] AnyOf = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchModels.property.anyOf">AnyOf</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchModelsAnyOf">BedrockagentcoreGatewayRuleConditionsMatchModelsAnyOf</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/bedrockagentcore_gateway_rule#any_of BedrockagentcoreGatewayRule#any_of}. |

---

##### `AnyOf`<sup>Optional</sup> <a name="AnyOf" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchModels.property.anyOf"></a>

```csharp
public IResolvable|BedrockagentcoreGatewayRuleConditionsMatchModelsAnyOf[] AnyOf { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchModelsAnyOf">BedrockagentcoreGatewayRuleConditionsMatchModelsAnyOf</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/bedrockagentcore_gateway_rule#any_of BedrockagentcoreGatewayRule#any_of}.

---

### BedrockagentcoreGatewayRuleConditionsMatchModelsAnyOf <a name="BedrockagentcoreGatewayRuleConditionsMatchModelsAnyOf" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchModelsAnyOf"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchModelsAnyOf.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreGatewayRuleConditionsMatchModelsAnyOf {
    string Operator = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchModelsAnyOf.property.operator">Operator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/bedrockagentcore_gateway_rule#operator BedrockagentcoreGatewayRule#operator}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchModelsAnyOf.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/bedrockagentcore_gateway_rule#value BedrockagentcoreGatewayRule#value}. |

---

##### `Operator`<sup>Optional</sup> <a name="Operator" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchModelsAnyOf.property.operator"></a>

```csharp
public string Operator { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/bedrockagentcore_gateway_rule#operator BedrockagentcoreGatewayRule#operator}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchModelsAnyOf.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/bedrockagentcore_gateway_rule#value BedrockagentcoreGatewayRule#value}.

---

### BedrockagentcoreGatewayRuleConditionsMatchPaths <a name="BedrockagentcoreGatewayRuleConditionsMatchPaths" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPaths"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPaths.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreGatewayRuleConditionsMatchPaths {
    string[] AnyOf = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPaths.property.anyOf">AnyOf</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/bedrockagentcore_gateway_rule#any_of BedrockagentcoreGatewayRule#any_of}. |

---

##### `AnyOf`<sup>Optional</sup> <a name="AnyOf" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPaths.property.anyOf"></a>

```csharp
public string[] AnyOf { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/bedrockagentcore_gateway_rule#any_of BedrockagentcoreGatewayRule#any_of}.

---

### BedrockagentcoreGatewayRuleConditionsMatchPrincipals <a name="BedrockagentcoreGatewayRuleConditionsMatchPrincipals" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipals"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipals.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreGatewayRuleConditionsMatchPrincipals {
    IResolvable|BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOf[] AnyOf = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipals.property.anyOf">AnyOf</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOf">BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOf</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/bedrockagentcore_gateway_rule#any_of BedrockagentcoreGatewayRule#any_of}. |

---

##### `AnyOf`<sup>Optional</sup> <a name="AnyOf" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipals.property.anyOf"></a>

```csharp
public IResolvable|BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOf[] AnyOf { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOf">BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOf</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/bedrockagentcore_gateway_rule#any_of BedrockagentcoreGatewayRule#any_of}.

---

### BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOf <a name="BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOf" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOf"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOf.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOf {
    BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipal IamPrincipal = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOf.property.iamPrincipal">IamPrincipal</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipal">BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipal</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/bedrockagentcore_gateway_rule#iam_principal BedrockagentcoreGatewayRule#iam_principal}. |

---

##### `IamPrincipal`<sup>Optional</sup> <a name="IamPrincipal" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOf.property.iamPrincipal"></a>

```csharp
public BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipal IamPrincipal { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipal">BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipal</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/bedrockagentcore_gateway_rule#iam_principal BedrockagentcoreGatewayRule#iam_principal}.

---

### BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipal <a name="BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipal" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipal"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipal.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipal {
    string Arn = null,
    string Operator = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipal.property.arn">Arn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/bedrockagentcore_gateway_rule#arn BedrockagentcoreGatewayRule#arn}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipal.property.operator">Operator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/bedrockagentcore_gateway_rule#operator BedrockagentcoreGatewayRule#operator}. |

---

##### `Arn`<sup>Optional</sup> <a name="Arn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipal.property.arn"></a>

```csharp
public string Arn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/bedrockagentcore_gateway_rule#arn BedrockagentcoreGatewayRule#arn}.

---

##### `Operator`<sup>Optional</sup> <a name="Operator" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipal.property.operator"></a>

```csharp
public string Operator { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/bedrockagentcore_gateway_rule#operator BedrockagentcoreGatewayRule#operator}.

---

### BedrockagentcoreGatewayRuleConfig <a name="BedrockagentcoreGatewayRuleConfig" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreGatewayRuleConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    IResolvable|BedrockagentcoreGatewayRuleActions[] Actions,
    double Priority,
    IResolvable|BedrockagentcoreGatewayRuleConditions[] Conditions = null,
    string Description = null,
    string GatewayIdentifier = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConfig.property.actions">Actions</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActions">BedrockagentcoreGatewayRuleActions</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/bedrockagentcore_gateway_rule#actions BedrockagentcoreGatewayRule#actions}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConfig.property.priority">Priority</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/bedrockagentcore_gateway_rule#priority BedrockagentcoreGatewayRule#priority}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConfig.property.conditions">Conditions</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditions">BedrockagentcoreGatewayRuleConditions</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/bedrockagentcore_gateway_rule#conditions BedrockagentcoreGatewayRule#conditions}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/bedrockagentcore_gateway_rule#description BedrockagentcoreGatewayRule#description}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConfig.property.gatewayIdentifier">GatewayIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/bedrockagentcore_gateway_rule#gateway_identifier BedrockagentcoreGatewayRule#gateway_identifier}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Actions`<sup>Required</sup> <a name="Actions" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConfig.property.actions"></a>

```csharp
public IResolvable|BedrockagentcoreGatewayRuleActions[] Actions { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActions">BedrockagentcoreGatewayRuleActions</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/bedrockagentcore_gateway_rule#actions BedrockagentcoreGatewayRule#actions}.

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConfig.property.priority"></a>

```csharp
public double Priority { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/bedrockagentcore_gateway_rule#priority BedrockagentcoreGatewayRule#priority}.

---

##### `Conditions`<sup>Optional</sup> <a name="Conditions" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConfig.property.conditions"></a>

```csharp
public IResolvable|BedrockagentcoreGatewayRuleConditions[] Conditions { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditions">BedrockagentcoreGatewayRuleConditions</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/bedrockagentcore_gateway_rule#conditions BedrockagentcoreGatewayRule#conditions}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/bedrockagentcore_gateway_rule#description BedrockagentcoreGatewayRule#description}.

---

##### `GatewayIdentifier`<sup>Optional</sup> <a name="GatewayIdentifier" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConfig.property.gatewayIdentifier"></a>

```csharp
public string GatewayIdentifier { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/bedrockagentcore_gateway_rule#gateway_identifier BedrockagentcoreGatewayRule#gateway_identifier}.

---

### BedrockagentcoreGatewayRuleSystem <a name="BedrockagentcoreGatewayRuleSystem" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystem"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystem.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreGatewayRuleSystem {

};
```


## Classes <a name="Classes" id="Classes"></a>

### BedrockagentcoreGatewayRuleActionsConfigurationBundleOutputReference <a name="BedrockagentcoreGatewayRuleActionsConfigurationBundleOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreGatewayRuleActionsConfigurationBundleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleOutputReference.putStaticOverride">PutStaticOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleOutputReference.putWeightedOverride">PutWeightedOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleOutputReference.resetStaticOverride">ResetStaticOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleOutputReference.resetWeightedOverride">ResetWeightedOverride</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutStaticOverride` <a name="PutStaticOverride" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleOutputReference.putStaticOverride"></a>

```csharp
private void PutStaticOverride(BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverride Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleOutputReference.putStaticOverride.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverride">BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverride</a>

---

##### `PutWeightedOverride` <a name="PutWeightedOverride" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleOutputReference.putWeightedOverride"></a>

```csharp
private void PutWeightedOverride(BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverride Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleOutputReference.putWeightedOverride.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverride">BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverride</a>

---

##### `ResetStaticOverride` <a name="ResetStaticOverride" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleOutputReference.resetStaticOverride"></a>

```csharp
private void ResetStaticOverride()
```

##### `ResetWeightedOverride` <a name="ResetWeightedOverride" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleOutputReference.resetWeightedOverride"></a>

```csharp
private void ResetWeightedOverride()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleOutputReference.property.staticOverride">StaticOverride</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverrideOutputReference">BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverrideOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleOutputReference.property.weightedOverride">WeightedOverride</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideOutputReference">BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleOutputReference.property.staticOverrideInput">StaticOverrideInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverride">BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleOutputReference.property.weightedOverrideInput">WeightedOverrideInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverride">BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundle">BedrockagentcoreGatewayRuleActionsConfigurationBundle</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `StaticOverride`<sup>Required</sup> <a name="StaticOverride" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleOutputReference.property.staticOverride"></a>

```csharp
public BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverrideOutputReference StaticOverride { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverrideOutputReference">BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverrideOutputReference</a>

---

##### `WeightedOverride`<sup>Required</sup> <a name="WeightedOverride" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleOutputReference.property.weightedOverride"></a>

```csharp
public BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideOutputReference WeightedOverride { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideOutputReference">BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideOutputReference</a>

---

##### `StaticOverrideInput`<sup>Optional</sup> <a name="StaticOverrideInput" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleOutputReference.property.staticOverrideInput"></a>

```csharp
public IResolvable|BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverride StaticOverrideInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverride">BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverride</a>

---

##### `WeightedOverrideInput`<sup>Optional</sup> <a name="WeightedOverrideInput" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleOutputReference.property.weightedOverrideInput"></a>

```csharp
public IResolvable|BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverride WeightedOverrideInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverride">BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverride</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreGatewayRuleActionsConfigurationBundle InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundle">BedrockagentcoreGatewayRuleActionsConfigurationBundle</a>

---


### BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverrideOutputReference <a name="BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverrideOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverrideOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverrideOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverrideOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverrideOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverrideOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverrideOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverrideOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverrideOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverrideOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverrideOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverrideOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverrideOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverrideOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverrideOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverrideOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverrideOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverrideOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverrideOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverrideOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverrideOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverrideOutputReference.resetBundleArn">ResetBundleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverrideOutputReference.resetBundleVersion">ResetBundleVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverrideOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverrideOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverrideOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverrideOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverrideOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverrideOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverrideOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverrideOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverrideOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverrideOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverrideOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverrideOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverrideOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverrideOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverrideOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverrideOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverrideOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverrideOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverrideOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverrideOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverrideOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverrideOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverrideOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverrideOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBundleArn` <a name="ResetBundleArn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverrideOutputReference.resetBundleArn"></a>

```csharp
private void ResetBundleArn()
```

##### `ResetBundleVersion` <a name="ResetBundleVersion" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverrideOutputReference.resetBundleVersion"></a>

```csharp
private void ResetBundleVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverrideOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverrideOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverrideOutputReference.property.bundleArnInput">BundleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverrideOutputReference.property.bundleVersionInput">BundleVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverrideOutputReference.property.bundleArn">BundleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverrideOutputReference.property.bundleVersion">BundleVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverrideOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverride">BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverride</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverrideOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverrideOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BundleArnInput`<sup>Optional</sup> <a name="BundleArnInput" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverrideOutputReference.property.bundleArnInput"></a>

```csharp
public string BundleArnInput { get; }
```

- *Type:* string

---

##### `BundleVersionInput`<sup>Optional</sup> <a name="BundleVersionInput" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverrideOutputReference.property.bundleVersionInput"></a>

```csharp
public string BundleVersionInput { get; }
```

- *Type:* string

---

##### `BundleArn`<sup>Required</sup> <a name="BundleArn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverrideOutputReference.property.bundleArn"></a>

```csharp
public string BundleArn { get; }
```

- *Type:* string

---

##### `BundleVersion`<sup>Required</sup> <a name="BundleVersion" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverrideOutputReference.property.bundleVersion"></a>

```csharp
public string BundleVersion { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverrideOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverride InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverride">BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverride</a>

---


### BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideOutputReference <a name="BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideOutputReference.putTrafficSplit">PutTrafficSplit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideOutputReference.resetTrafficSplit">ResetTrafficSplit</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTrafficSplit` <a name="PutTrafficSplit" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideOutputReference.putTrafficSplit"></a>

```csharp
private void PutTrafficSplit(IResolvable|BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplit[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideOutputReference.putTrafficSplit.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplit">BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplit</a>[]

---

##### `ResetTrafficSplit` <a name="ResetTrafficSplit" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideOutputReference.resetTrafficSplit"></a>

```csharp
private void ResetTrafficSplit()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideOutputReference.property.trafficSplit">TrafficSplit</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitList">BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideOutputReference.property.trafficSplitInput">TrafficSplitInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplit">BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplit</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverride">BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverride</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TrafficSplit`<sup>Required</sup> <a name="TrafficSplit" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideOutputReference.property.trafficSplit"></a>

```csharp
public BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitList TrafficSplit { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitList">BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitList</a>

---

##### `TrafficSplitInput`<sup>Optional</sup> <a name="TrafficSplitInput" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideOutputReference.property.trafficSplitInput"></a>

```csharp
public IResolvable|BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplit[] TrafficSplitInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplit">BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplit</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverride InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverride">BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverride</a>

---


### BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference <a name="BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.resetBundleArn">ResetBundleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.resetBundleVersion">ResetBundleVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBundleArn` <a name="ResetBundleArn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.resetBundleArn"></a>

```csharp
private void ResetBundleArn()
```

##### `ResetBundleVersion` <a name="ResetBundleVersion" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.resetBundleVersion"></a>

```csharp
private void ResetBundleVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.property.bundleArnInput">BundleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.property.bundleVersionInput">BundleVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.property.bundleArn">BundleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.property.bundleVersion">BundleVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundle">BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundle</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BundleArnInput`<sup>Optional</sup> <a name="BundleArnInput" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.property.bundleArnInput"></a>

```csharp
public string BundleArnInput { get; }
```

- *Type:* string

---

##### `BundleVersionInput`<sup>Optional</sup> <a name="BundleVersionInput" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.property.bundleVersionInput"></a>

```csharp
public string BundleVersionInput { get; }
```

- *Type:* string

---

##### `BundleArn`<sup>Required</sup> <a name="BundleArn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.property.bundleArn"></a>

```csharp
public string BundleArn { get; }
```

- *Type:* string

---

##### `BundleVersion`<sup>Required</sup> <a name="BundleVersion" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.property.bundleVersion"></a>

```csharp
public string BundleVersion { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundle InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundle">BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundle</a>

---


### BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitList <a name="BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitList" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitList.get"></a>

```csharp
private BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplit">BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplit</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitList.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplit[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplit">BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplit</a>[]

---


### BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitOutputReference <a name="BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitOutputReference.putConfigurationBundle">PutConfigurationBundle</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitOutputReference.resetConfigurationBundle">ResetConfigurationBundle</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitOutputReference.resetMetadata">ResetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitOutputReference.resetWeight">ResetWeight</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutConfigurationBundle` <a name="PutConfigurationBundle" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitOutputReference.putConfigurationBundle"></a>

```csharp
private void PutConfigurationBundle(BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundle Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitOutputReference.putConfigurationBundle.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundle">BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundle</a>

---

##### `ResetConfigurationBundle` <a name="ResetConfigurationBundle" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitOutputReference.resetConfigurationBundle"></a>

```csharp
private void ResetConfigurationBundle()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetMetadata` <a name="ResetMetadata" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitOutputReference.resetMetadata"></a>

```csharp
private void ResetMetadata()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetWeight` <a name="ResetWeight" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitOutputReference.resetWeight"></a>

```csharp
private void ResetWeight()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitOutputReference.property.configurationBundle">ConfigurationBundle</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference">BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitOutputReference.property.configurationBundleInput">ConfigurationBundleInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundle">BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundle</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitOutputReference.property.metadataInput">MetadataInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitOutputReference.property.weightInput">WeightInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitOutputReference.property.metadata">Metadata</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitOutputReference.property.weight">Weight</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplit">BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplit</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConfigurationBundle`<sup>Required</sup> <a name="ConfigurationBundle" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitOutputReference.property.configurationBundle"></a>

```csharp
public BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference ConfigurationBundle { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference">BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference</a>

---

##### `ConfigurationBundleInput`<sup>Optional</sup> <a name="ConfigurationBundleInput" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitOutputReference.property.configurationBundleInput"></a>

```csharp
public IResolvable|BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundle ConfigurationBundleInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundle">BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundle</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `MetadataInput`<sup>Optional</sup> <a name="MetadataInput" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitOutputReference.property.metadataInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> MetadataInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `WeightInput`<sup>Optional</sup> <a name="WeightInput" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitOutputReference.property.weightInput"></a>

```csharp
public double WeightInput { get; }
```

- *Type:* double

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitOutputReference.property.metadata"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Metadata { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Weight`<sup>Required</sup> <a name="Weight" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitOutputReference.property.weight"></a>

```csharp
public double Weight { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplit InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplit">BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplit</a>

---


### BedrockagentcoreGatewayRuleActionsList <a name="BedrockagentcoreGatewayRuleActionsList" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreGatewayRuleActionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsList.get"></a>

```csharp
private BedrockagentcoreGatewayRuleActionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActions">BedrockagentcoreGatewayRuleActions</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsList.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreGatewayRuleActions[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActions">BedrockagentcoreGatewayRuleActions</a>[]

---


### BedrockagentcoreGatewayRuleActionsOutputReference <a name="BedrockagentcoreGatewayRuleActionsOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreGatewayRuleActionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsOutputReference.putConfigurationBundle">PutConfigurationBundle</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsOutputReference.putRouteToTarget">PutRouteToTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsOutputReference.resetConfigurationBundle">ResetConfigurationBundle</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsOutputReference.resetRouteToTarget">ResetRouteToTarget</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutConfigurationBundle` <a name="PutConfigurationBundle" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsOutputReference.putConfigurationBundle"></a>

```csharp
private void PutConfigurationBundle(BedrockagentcoreGatewayRuleActionsConfigurationBundle Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsOutputReference.putConfigurationBundle.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundle">BedrockagentcoreGatewayRuleActionsConfigurationBundle</a>

---

##### `PutRouteToTarget` <a name="PutRouteToTarget" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsOutputReference.putRouteToTarget"></a>

```csharp
private void PutRouteToTarget(BedrockagentcoreGatewayRuleActionsRouteToTarget Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsOutputReference.putRouteToTarget.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTarget">BedrockagentcoreGatewayRuleActionsRouteToTarget</a>

---

##### `ResetConfigurationBundle` <a name="ResetConfigurationBundle" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsOutputReference.resetConfigurationBundle"></a>

```csharp
private void ResetConfigurationBundle()
```

##### `ResetRouteToTarget` <a name="ResetRouteToTarget" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsOutputReference.resetRouteToTarget"></a>

```csharp
private void ResetRouteToTarget()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsOutputReference.property.configurationBundle">ConfigurationBundle</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleOutputReference">BedrockagentcoreGatewayRuleActionsConfigurationBundleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsOutputReference.property.routeToTarget">RouteToTarget</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetOutputReference">BedrockagentcoreGatewayRuleActionsRouteToTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsOutputReference.property.configurationBundleInput">ConfigurationBundleInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundle">BedrockagentcoreGatewayRuleActionsConfigurationBundle</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsOutputReference.property.routeToTargetInput">RouteToTargetInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTarget">BedrockagentcoreGatewayRuleActionsRouteToTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActions">BedrockagentcoreGatewayRuleActions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConfigurationBundle`<sup>Required</sup> <a name="ConfigurationBundle" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsOutputReference.property.configurationBundle"></a>

```csharp
public BedrockagentcoreGatewayRuleActionsConfigurationBundleOutputReference ConfigurationBundle { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleOutputReference">BedrockagentcoreGatewayRuleActionsConfigurationBundleOutputReference</a>

---

##### `RouteToTarget`<sup>Required</sup> <a name="RouteToTarget" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsOutputReference.property.routeToTarget"></a>

```csharp
public BedrockagentcoreGatewayRuleActionsRouteToTargetOutputReference RouteToTarget { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetOutputReference">BedrockagentcoreGatewayRuleActionsRouteToTargetOutputReference</a>

---

##### `ConfigurationBundleInput`<sup>Optional</sup> <a name="ConfigurationBundleInput" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsOutputReference.property.configurationBundleInput"></a>

```csharp
public IResolvable|BedrockagentcoreGatewayRuleActionsConfigurationBundle ConfigurationBundleInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundle">BedrockagentcoreGatewayRuleActionsConfigurationBundle</a>

---

##### `RouteToTargetInput`<sup>Optional</sup> <a name="RouteToTargetInput" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsOutputReference.property.routeToTargetInput"></a>

```csharp
public IResolvable|BedrockagentcoreGatewayRuleActionsRouteToTarget RouteToTargetInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTarget">BedrockagentcoreGatewayRuleActionsRouteToTarget</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreGatewayRuleActions InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActions">BedrockagentcoreGatewayRuleActions</a>

---


### BedrockagentcoreGatewayRuleActionsRouteToTargetOutputReference <a name="BedrockagentcoreGatewayRuleActionsRouteToTargetOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreGatewayRuleActionsRouteToTargetOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetOutputReference.putStaticRoute">PutStaticRoute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetOutputReference.putWeightedRoute">PutWeightedRoute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetOutputReference.resetStaticRoute">ResetStaticRoute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetOutputReference.resetWeightedRoute">ResetWeightedRoute</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutStaticRoute` <a name="PutStaticRoute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetOutputReference.putStaticRoute"></a>

```csharp
private void PutStaticRoute(BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRoute Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetOutputReference.putStaticRoute.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRoute">BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRoute</a>

---

##### `PutWeightedRoute` <a name="PutWeightedRoute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetOutputReference.putWeightedRoute"></a>

```csharp
private void PutWeightedRoute(BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRoute Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetOutputReference.putWeightedRoute.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRoute">BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRoute</a>

---

##### `ResetStaticRoute` <a name="ResetStaticRoute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetOutputReference.resetStaticRoute"></a>

```csharp
private void ResetStaticRoute()
```

##### `ResetWeightedRoute` <a name="ResetWeightedRoute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetOutputReference.resetWeightedRoute"></a>

```csharp
private void ResetWeightedRoute()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetOutputReference.property.staticRoute">StaticRoute</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteOutputReference">BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetOutputReference.property.weightedRoute">WeightedRoute</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteOutputReference">BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetOutputReference.property.staticRouteInput">StaticRouteInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRoute">BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRoute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetOutputReference.property.weightedRouteInput">WeightedRouteInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRoute">BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRoute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTarget">BedrockagentcoreGatewayRuleActionsRouteToTarget</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `StaticRoute`<sup>Required</sup> <a name="StaticRoute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetOutputReference.property.staticRoute"></a>

```csharp
public BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteOutputReference StaticRoute { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteOutputReference">BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteOutputReference</a>

---

##### `WeightedRoute`<sup>Required</sup> <a name="WeightedRoute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetOutputReference.property.weightedRoute"></a>

```csharp
public BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteOutputReference WeightedRoute { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteOutputReference">BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteOutputReference</a>

---

##### `StaticRouteInput`<sup>Optional</sup> <a name="StaticRouteInput" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetOutputReference.property.staticRouteInput"></a>

```csharp
public IResolvable|BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRoute StaticRouteInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRoute">BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRoute</a>

---

##### `WeightedRouteInput`<sup>Optional</sup> <a name="WeightedRouteInput" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetOutputReference.property.weightedRouteInput"></a>

```csharp
public IResolvable|BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRoute WeightedRouteInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRoute">BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRoute</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreGatewayRuleActionsRouteToTarget InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTarget">BedrockagentcoreGatewayRuleActionsRouteToTarget</a>

---


### BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackCircuitBreakerOutputReference <a name="BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackCircuitBreakerOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackCircuitBreakerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackCircuitBreakerOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackCircuitBreakerOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackCircuitBreakerOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackCircuitBreakerOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackCircuitBreakerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackCircuitBreakerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackCircuitBreakerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackCircuitBreakerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackCircuitBreakerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackCircuitBreakerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackCircuitBreakerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackCircuitBreakerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackCircuitBreakerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackCircuitBreakerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackCircuitBreakerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackCircuitBreakerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackCircuitBreakerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackCircuitBreakerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackCircuitBreakerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackCircuitBreakerOutputReference.resetMode">ResetMode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackCircuitBreakerOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackCircuitBreakerOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackCircuitBreakerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackCircuitBreakerOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackCircuitBreakerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackCircuitBreakerOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackCircuitBreakerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackCircuitBreakerOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackCircuitBreakerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackCircuitBreakerOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackCircuitBreakerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackCircuitBreakerOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackCircuitBreakerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackCircuitBreakerOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackCircuitBreakerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackCircuitBreakerOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackCircuitBreakerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackCircuitBreakerOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackCircuitBreakerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackCircuitBreakerOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackCircuitBreakerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackCircuitBreakerOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackCircuitBreakerOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackCircuitBreakerOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMode` <a name="ResetMode" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackCircuitBreakerOutputReference.resetMode"></a>

```csharp
private void ResetMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackCircuitBreakerOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackCircuitBreakerOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackCircuitBreakerOutputReference.property.modeInput">ModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackCircuitBreakerOutputReference.property.mode">Mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackCircuitBreakerOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackCircuitBreaker">BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackCircuitBreaker</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackCircuitBreakerOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackCircuitBreakerOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackCircuitBreakerOutputReference.property.modeInput"></a>

```csharp
public string ModeInput { get; }
```

- *Type:* string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackCircuitBreakerOutputReference.property.mode"></a>

```csharp
public string Mode { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackCircuitBreakerOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackCircuitBreaker InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackCircuitBreaker">BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackCircuitBreaker</a>

---


### BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackOutputReference <a name="BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackOutputReference.putCircuitBreaker">PutCircuitBreaker</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackOutputReference.putTargetFallback">PutTargetFallback</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackOutputReference.putTriggerOn">PutTriggerOn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackOutputReference.resetCircuitBreaker">ResetCircuitBreaker</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackOutputReference.resetFirstByteTimeoutMilliseconds">ResetFirstByteTimeoutMilliseconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackOutputReference.resetTargetFallback">ResetTargetFallback</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackOutputReference.resetTriggerOn">ResetTriggerOn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCircuitBreaker` <a name="PutCircuitBreaker" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackOutputReference.putCircuitBreaker"></a>

```csharp
private void PutCircuitBreaker(BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackCircuitBreaker Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackOutputReference.putCircuitBreaker.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackCircuitBreaker">BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackCircuitBreaker</a>

---

##### `PutTargetFallback` <a name="PutTargetFallback" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackOutputReference.putTargetFallback"></a>

```csharp
private void PutTargetFallback(IResolvable|BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallback[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackOutputReference.putTargetFallback.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallback">BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallback</a>[]

---

##### `PutTriggerOn` <a name="PutTriggerOn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackOutputReference.putTriggerOn"></a>

```csharp
private void PutTriggerOn(BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTriggerOn Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackOutputReference.putTriggerOn.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTriggerOn">BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTriggerOn</a>

---

##### `ResetCircuitBreaker` <a name="ResetCircuitBreaker" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackOutputReference.resetCircuitBreaker"></a>

```csharp
private void ResetCircuitBreaker()
```

##### `ResetFirstByteTimeoutMilliseconds` <a name="ResetFirstByteTimeoutMilliseconds" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackOutputReference.resetFirstByteTimeoutMilliseconds"></a>

```csharp
private void ResetFirstByteTimeoutMilliseconds()
```

##### `ResetTargetFallback` <a name="ResetTargetFallback" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackOutputReference.resetTargetFallback"></a>

```csharp
private void ResetTargetFallback()
```

##### `ResetTriggerOn` <a name="ResetTriggerOn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackOutputReference.resetTriggerOn"></a>

```csharp
private void ResetTriggerOn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackOutputReference.property.circuitBreaker">CircuitBreaker</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackCircuitBreakerOutputReference">BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackCircuitBreakerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackOutputReference.property.targetFallback">TargetFallback</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackList">BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackOutputReference.property.triggerOn">TriggerOn</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTriggerOnOutputReference">BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTriggerOnOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackOutputReference.property.circuitBreakerInput">CircuitBreakerInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackCircuitBreaker">BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackCircuitBreaker</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackOutputReference.property.firstByteTimeoutMillisecondsInput">FirstByteTimeoutMillisecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackOutputReference.property.targetFallbackInput">TargetFallbackInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallback">BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallback</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackOutputReference.property.triggerOnInput">TriggerOnInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTriggerOn">BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTriggerOn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackOutputReference.property.firstByteTimeoutMilliseconds">FirstByteTimeoutMilliseconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallback">BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallback</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CircuitBreaker`<sup>Required</sup> <a name="CircuitBreaker" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackOutputReference.property.circuitBreaker"></a>

```csharp
public BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackCircuitBreakerOutputReference CircuitBreaker { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackCircuitBreakerOutputReference">BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackCircuitBreakerOutputReference</a>

---

##### `TargetFallback`<sup>Required</sup> <a name="TargetFallback" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackOutputReference.property.targetFallback"></a>

```csharp
public BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackList TargetFallback { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackList">BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackList</a>

---

##### `TriggerOn`<sup>Required</sup> <a name="TriggerOn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackOutputReference.property.triggerOn"></a>

```csharp
public BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTriggerOnOutputReference TriggerOn { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTriggerOnOutputReference">BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTriggerOnOutputReference</a>

---

##### `CircuitBreakerInput`<sup>Optional</sup> <a name="CircuitBreakerInput" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackOutputReference.property.circuitBreakerInput"></a>

```csharp
public IResolvable|BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackCircuitBreaker CircuitBreakerInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackCircuitBreaker">BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackCircuitBreaker</a>

---

##### `FirstByteTimeoutMillisecondsInput`<sup>Optional</sup> <a name="FirstByteTimeoutMillisecondsInput" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackOutputReference.property.firstByteTimeoutMillisecondsInput"></a>

```csharp
public double FirstByteTimeoutMillisecondsInput { get; }
```

- *Type:* double

---

##### `TargetFallbackInput`<sup>Optional</sup> <a name="TargetFallbackInput" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackOutputReference.property.targetFallbackInput"></a>

```csharp
public IResolvable|BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallback[] TargetFallbackInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallback">BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallback</a>[]

---

##### `TriggerOnInput`<sup>Optional</sup> <a name="TriggerOnInput" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackOutputReference.property.triggerOnInput"></a>

```csharp
public IResolvable|BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTriggerOn TriggerOnInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTriggerOn">BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTriggerOn</a>

---

##### `FirstByteTimeoutMilliseconds`<sup>Required</sup> <a name="FirstByteTimeoutMilliseconds" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackOutputReference.property.firstByteTimeoutMilliseconds"></a>

```csharp
public double FirstByteTimeoutMilliseconds { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallback InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallback">BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallback</a>

---


### BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackList <a name="BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackList" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackList.get"></a>

```csharp
private BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallback">BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallback</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackList.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallback[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallback">BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallback</a>[]

---


### BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackOutputReference <a name="BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackOutputReference.putTriggerOn">PutTriggerOn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackOutputReference.resetFirstByteTimeoutMilliseconds">ResetFirstByteTimeoutMilliseconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackOutputReference.resetModel">ResetModel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackOutputReference.resetTargetName">ResetTargetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackOutputReference.resetTriggerOn">ResetTriggerOn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTriggerOn` <a name="PutTriggerOn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackOutputReference.putTriggerOn"></a>

```csharp
private void PutTriggerOn(BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackTriggerOn Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackOutputReference.putTriggerOn.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackTriggerOn">BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackTriggerOn</a>

---

##### `ResetFirstByteTimeoutMilliseconds` <a name="ResetFirstByteTimeoutMilliseconds" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackOutputReference.resetFirstByteTimeoutMilliseconds"></a>

```csharp
private void ResetFirstByteTimeoutMilliseconds()
```

##### `ResetModel` <a name="ResetModel" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackOutputReference.resetModel"></a>

```csharp
private void ResetModel()
```

##### `ResetTargetName` <a name="ResetTargetName" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackOutputReference.resetTargetName"></a>

```csharp
private void ResetTargetName()
```

##### `ResetTriggerOn` <a name="ResetTriggerOn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackOutputReference.resetTriggerOn"></a>

```csharp
private void ResetTriggerOn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackOutputReference.property.triggerOn">TriggerOn</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackTriggerOnOutputReference">BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackTriggerOnOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackOutputReference.property.firstByteTimeoutMillisecondsInput">FirstByteTimeoutMillisecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackOutputReference.property.modelInput">ModelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackOutputReference.property.targetNameInput">TargetNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackOutputReference.property.triggerOnInput">TriggerOnInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackTriggerOn">BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackTriggerOn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackOutputReference.property.firstByteTimeoutMilliseconds">FirstByteTimeoutMilliseconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackOutputReference.property.model">Model</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackOutputReference.property.targetName">TargetName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallback">BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallback</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TriggerOn`<sup>Required</sup> <a name="TriggerOn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackOutputReference.property.triggerOn"></a>

```csharp
public BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackTriggerOnOutputReference TriggerOn { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackTriggerOnOutputReference">BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackTriggerOnOutputReference</a>

---

##### `FirstByteTimeoutMillisecondsInput`<sup>Optional</sup> <a name="FirstByteTimeoutMillisecondsInput" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackOutputReference.property.firstByteTimeoutMillisecondsInput"></a>

```csharp
public double FirstByteTimeoutMillisecondsInput { get; }
```

- *Type:* double

---

##### `ModelInput`<sup>Optional</sup> <a name="ModelInput" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackOutputReference.property.modelInput"></a>

```csharp
public string ModelInput { get; }
```

- *Type:* string

---

##### `TargetNameInput`<sup>Optional</sup> <a name="TargetNameInput" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackOutputReference.property.targetNameInput"></a>

```csharp
public string TargetNameInput { get; }
```

- *Type:* string

---

##### `TriggerOnInput`<sup>Optional</sup> <a name="TriggerOnInput" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackOutputReference.property.triggerOnInput"></a>

```csharp
public IResolvable|BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackTriggerOn TriggerOnInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackTriggerOn">BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackTriggerOn</a>

---

##### `FirstByteTimeoutMilliseconds`<sup>Required</sup> <a name="FirstByteTimeoutMilliseconds" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackOutputReference.property.firstByteTimeoutMilliseconds"></a>

```csharp
public double FirstByteTimeoutMilliseconds { get; }
```

- *Type:* double

---

##### `Model`<sup>Required</sup> <a name="Model" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackOutputReference.property.model"></a>

```csharp
public string Model { get; }
```

- *Type:* string

---

##### `TargetName`<sup>Required</sup> <a name="TargetName" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackOutputReference.property.targetName"></a>

```csharp
public string TargetName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallback InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallback">BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallback</a>

---


### BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackTriggerOnOutputReference <a name="BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackTriggerOnOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackTriggerOnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackTriggerOnOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackTriggerOnOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackTriggerOnOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackTriggerOnOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackTriggerOnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackTriggerOnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackTriggerOnOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackTriggerOnOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackTriggerOnOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackTriggerOnOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackTriggerOnOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackTriggerOnOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackTriggerOnOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackTriggerOnOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackTriggerOnOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackTriggerOnOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackTriggerOnOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackTriggerOnOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackTriggerOnOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackTriggerOnOutputReference.resetErrors">ResetErrors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackTriggerOnOutputReference.resetStatusCodes">ResetStatusCodes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackTriggerOnOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackTriggerOnOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackTriggerOnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackTriggerOnOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackTriggerOnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackTriggerOnOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackTriggerOnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackTriggerOnOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackTriggerOnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackTriggerOnOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackTriggerOnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackTriggerOnOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackTriggerOnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackTriggerOnOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackTriggerOnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackTriggerOnOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackTriggerOnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackTriggerOnOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackTriggerOnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackTriggerOnOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackTriggerOnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackTriggerOnOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackTriggerOnOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackTriggerOnOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetErrors` <a name="ResetErrors" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackTriggerOnOutputReference.resetErrors"></a>

```csharp
private void ResetErrors()
```

##### `ResetStatusCodes` <a name="ResetStatusCodes" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackTriggerOnOutputReference.resetStatusCodes"></a>

```csharp
private void ResetStatusCodes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackTriggerOnOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackTriggerOnOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackTriggerOnOutputReference.property.errorsInput">ErrorsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackTriggerOnOutputReference.property.statusCodesInput">StatusCodesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackTriggerOnOutputReference.property.errors">Errors</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackTriggerOnOutputReference.property.statusCodes">StatusCodes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackTriggerOnOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackTriggerOn">BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackTriggerOn</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackTriggerOnOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackTriggerOnOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ErrorsInput`<sup>Optional</sup> <a name="ErrorsInput" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackTriggerOnOutputReference.property.errorsInput"></a>

```csharp
public string[] ErrorsInput { get; }
```

- *Type:* string[]

---

##### `StatusCodesInput`<sup>Optional</sup> <a name="StatusCodesInput" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackTriggerOnOutputReference.property.statusCodesInput"></a>

```csharp
public string[] StatusCodesInput { get; }
```

- *Type:* string[]

---

##### `Errors`<sup>Required</sup> <a name="Errors" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackTriggerOnOutputReference.property.errors"></a>

```csharp
public string[] Errors { get; }
```

- *Type:* string[]

---

##### `StatusCodes`<sup>Required</sup> <a name="StatusCodes" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackTriggerOnOutputReference.property.statusCodes"></a>

```csharp
public string[] StatusCodes { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackTriggerOnOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackTriggerOn InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackTriggerOn">BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTargetFallbackTriggerOn</a>

---


### BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTriggerOnOutputReference <a name="BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTriggerOnOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTriggerOnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTriggerOnOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTriggerOnOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTriggerOnOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTriggerOnOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTriggerOnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTriggerOnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTriggerOnOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTriggerOnOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTriggerOnOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTriggerOnOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTriggerOnOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTriggerOnOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTriggerOnOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTriggerOnOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTriggerOnOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTriggerOnOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTriggerOnOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTriggerOnOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTriggerOnOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTriggerOnOutputReference.resetErrors">ResetErrors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTriggerOnOutputReference.resetStatusCodes">ResetStatusCodes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTriggerOnOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTriggerOnOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTriggerOnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTriggerOnOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTriggerOnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTriggerOnOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTriggerOnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTriggerOnOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTriggerOnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTriggerOnOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTriggerOnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTriggerOnOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTriggerOnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTriggerOnOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTriggerOnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTriggerOnOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTriggerOnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTriggerOnOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTriggerOnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTriggerOnOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTriggerOnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTriggerOnOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTriggerOnOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTriggerOnOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetErrors` <a name="ResetErrors" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTriggerOnOutputReference.resetErrors"></a>

```csharp
private void ResetErrors()
```

##### `ResetStatusCodes` <a name="ResetStatusCodes" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTriggerOnOutputReference.resetStatusCodes"></a>

```csharp
private void ResetStatusCodes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTriggerOnOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTriggerOnOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTriggerOnOutputReference.property.errorsInput">ErrorsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTriggerOnOutputReference.property.statusCodesInput">StatusCodesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTriggerOnOutputReference.property.errors">Errors</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTriggerOnOutputReference.property.statusCodes">StatusCodes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTriggerOnOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTriggerOn">BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTriggerOn</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTriggerOnOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTriggerOnOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ErrorsInput`<sup>Optional</sup> <a name="ErrorsInput" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTriggerOnOutputReference.property.errorsInput"></a>

```csharp
public string[] ErrorsInput { get; }
```

- *Type:* string[]

---

##### `StatusCodesInput`<sup>Optional</sup> <a name="StatusCodesInput" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTriggerOnOutputReference.property.statusCodesInput"></a>

```csharp
public string[] StatusCodesInput { get; }
```

- *Type:* string[]

---

##### `Errors`<sup>Required</sup> <a name="Errors" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTriggerOnOutputReference.property.errors"></a>

```csharp
public string[] Errors { get; }
```

- *Type:* string[]

---

##### `StatusCodes`<sup>Required</sup> <a name="StatusCodes" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTriggerOnOutputReference.property.statusCodes"></a>

```csharp
public string[] StatusCodes { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTriggerOnOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTriggerOn InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTriggerOn">BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackTriggerOn</a>

---


### BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteOutputReference <a name="BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteOutputReference.putFallback">PutFallback</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteOutputReference.resetFallback">ResetFallback</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteOutputReference.resetModel">ResetModel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteOutputReference.resetTargetName">ResetTargetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFallback` <a name="PutFallback" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteOutputReference.putFallback"></a>

```csharp
private void PutFallback(BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallback Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteOutputReference.putFallback.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallback">BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallback</a>

---

##### `ResetFallback` <a name="ResetFallback" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteOutputReference.resetFallback"></a>

```csharp
private void ResetFallback()
```

##### `ResetModel` <a name="ResetModel" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteOutputReference.resetModel"></a>

```csharp
private void ResetModel()
```

##### `ResetTargetName` <a name="ResetTargetName" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteOutputReference.resetTargetName"></a>

```csharp
private void ResetTargetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteOutputReference.property.fallback">Fallback</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackOutputReference">BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteOutputReference.property.fallbackInput">FallbackInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallback">BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallback</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteOutputReference.property.modelInput">ModelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteOutputReference.property.targetNameInput">TargetNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteOutputReference.property.model">Model</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteOutputReference.property.targetName">TargetName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRoute">BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRoute</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Fallback`<sup>Required</sup> <a name="Fallback" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteOutputReference.property.fallback"></a>

```csharp
public BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackOutputReference Fallback { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackOutputReference">BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallbackOutputReference</a>

---

##### `FallbackInput`<sup>Optional</sup> <a name="FallbackInput" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteOutputReference.property.fallbackInput"></a>

```csharp
public IResolvable|BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallback FallbackInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallback">BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteFallback</a>

---

##### `ModelInput`<sup>Optional</sup> <a name="ModelInput" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteOutputReference.property.modelInput"></a>

```csharp
public string ModelInput { get; }
```

- *Type:* string

---

##### `TargetNameInput`<sup>Optional</sup> <a name="TargetNameInput" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteOutputReference.property.targetNameInput"></a>

```csharp
public string TargetNameInput { get; }
```

- *Type:* string

---

##### `Model`<sup>Required</sup> <a name="Model" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteOutputReference.property.model"></a>

```csharp
public string Model { get; }
```

- *Type:* string

---

##### `TargetName`<sup>Required</sup> <a name="TargetName" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteOutputReference.property.targetName"></a>

```csharp
public string TargetName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRoute InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRoute">BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRoute</a>

---


### BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteOutputReference <a name="BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteOutputReference.putTrafficSplit">PutTrafficSplit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteOutputReference.resetTrafficSplit">ResetTrafficSplit</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTrafficSplit` <a name="PutTrafficSplit" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteOutputReference.putTrafficSplit"></a>

```csharp
private void PutTrafficSplit(IResolvable|BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplit[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteOutputReference.putTrafficSplit.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplit">BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplit</a>[]

---

##### `ResetTrafficSplit` <a name="ResetTrafficSplit" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteOutputReference.resetTrafficSplit"></a>

```csharp
private void ResetTrafficSplit()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteOutputReference.property.trafficSplit">TrafficSplit</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitList">BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteOutputReference.property.trafficSplitInput">TrafficSplitInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplit">BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplit</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRoute">BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRoute</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TrafficSplit`<sup>Required</sup> <a name="TrafficSplit" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteOutputReference.property.trafficSplit"></a>

```csharp
public BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitList TrafficSplit { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitList">BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitList</a>

---

##### `TrafficSplitInput`<sup>Optional</sup> <a name="TrafficSplitInput" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteOutputReference.property.trafficSplitInput"></a>

```csharp
public IResolvable|BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplit[] TrafficSplitInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplit">BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplit</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRoute InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRoute">BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRoute</a>

---


### BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackCircuitBreakerOutputReference <a name="BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackCircuitBreakerOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackCircuitBreakerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackCircuitBreakerOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackCircuitBreakerOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackCircuitBreakerOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackCircuitBreakerOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackCircuitBreakerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackCircuitBreakerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackCircuitBreakerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackCircuitBreakerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackCircuitBreakerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackCircuitBreakerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackCircuitBreakerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackCircuitBreakerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackCircuitBreakerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackCircuitBreakerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackCircuitBreakerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackCircuitBreakerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackCircuitBreakerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackCircuitBreakerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackCircuitBreakerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackCircuitBreakerOutputReference.resetMode">ResetMode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackCircuitBreakerOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackCircuitBreakerOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackCircuitBreakerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackCircuitBreakerOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackCircuitBreakerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackCircuitBreakerOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackCircuitBreakerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackCircuitBreakerOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackCircuitBreakerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackCircuitBreakerOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackCircuitBreakerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackCircuitBreakerOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackCircuitBreakerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackCircuitBreakerOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackCircuitBreakerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackCircuitBreakerOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackCircuitBreakerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackCircuitBreakerOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackCircuitBreakerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackCircuitBreakerOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackCircuitBreakerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackCircuitBreakerOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackCircuitBreakerOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackCircuitBreakerOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMode` <a name="ResetMode" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackCircuitBreakerOutputReference.resetMode"></a>

```csharp
private void ResetMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackCircuitBreakerOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackCircuitBreakerOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackCircuitBreakerOutputReference.property.modeInput">ModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackCircuitBreakerOutputReference.property.mode">Mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackCircuitBreakerOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackCircuitBreaker">BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackCircuitBreaker</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackCircuitBreakerOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackCircuitBreakerOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackCircuitBreakerOutputReference.property.modeInput"></a>

```csharp
public string ModeInput { get; }
```

- *Type:* string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackCircuitBreakerOutputReference.property.mode"></a>

```csharp
public string Mode { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackCircuitBreakerOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackCircuitBreaker InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackCircuitBreaker">BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackCircuitBreaker</a>

---


### BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackOutputReference <a name="BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackOutputReference.putCircuitBreaker">PutCircuitBreaker</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackOutputReference.putTargetFallback">PutTargetFallback</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackOutputReference.putTriggerOn">PutTriggerOn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackOutputReference.resetCircuitBreaker">ResetCircuitBreaker</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackOutputReference.resetFirstByteTimeoutMilliseconds">ResetFirstByteTimeoutMilliseconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackOutputReference.resetTargetFallback">ResetTargetFallback</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackOutputReference.resetTriggerOn">ResetTriggerOn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCircuitBreaker` <a name="PutCircuitBreaker" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackOutputReference.putCircuitBreaker"></a>

```csharp
private void PutCircuitBreaker(BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackCircuitBreaker Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackOutputReference.putCircuitBreaker.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackCircuitBreaker">BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackCircuitBreaker</a>

---

##### `PutTargetFallback` <a name="PutTargetFallback" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackOutputReference.putTargetFallback"></a>

```csharp
private void PutTargetFallback(IResolvable|BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallback[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackOutputReference.putTargetFallback.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallback">BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallback</a>[]

---

##### `PutTriggerOn` <a name="PutTriggerOn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackOutputReference.putTriggerOn"></a>

```csharp
private void PutTriggerOn(BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTriggerOn Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackOutputReference.putTriggerOn.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTriggerOn">BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTriggerOn</a>

---

##### `ResetCircuitBreaker` <a name="ResetCircuitBreaker" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackOutputReference.resetCircuitBreaker"></a>

```csharp
private void ResetCircuitBreaker()
```

##### `ResetFirstByteTimeoutMilliseconds` <a name="ResetFirstByteTimeoutMilliseconds" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackOutputReference.resetFirstByteTimeoutMilliseconds"></a>

```csharp
private void ResetFirstByteTimeoutMilliseconds()
```

##### `ResetTargetFallback` <a name="ResetTargetFallback" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackOutputReference.resetTargetFallback"></a>

```csharp
private void ResetTargetFallback()
```

##### `ResetTriggerOn` <a name="ResetTriggerOn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackOutputReference.resetTriggerOn"></a>

```csharp
private void ResetTriggerOn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackOutputReference.property.circuitBreaker">CircuitBreaker</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackCircuitBreakerOutputReference">BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackCircuitBreakerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackOutputReference.property.targetFallback">TargetFallback</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackList">BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackOutputReference.property.triggerOn">TriggerOn</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTriggerOnOutputReference">BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTriggerOnOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackOutputReference.property.circuitBreakerInput">CircuitBreakerInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackCircuitBreaker">BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackCircuitBreaker</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackOutputReference.property.firstByteTimeoutMillisecondsInput">FirstByteTimeoutMillisecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackOutputReference.property.targetFallbackInput">TargetFallbackInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallback">BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallback</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackOutputReference.property.triggerOnInput">TriggerOnInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTriggerOn">BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTriggerOn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackOutputReference.property.firstByteTimeoutMilliseconds">FirstByteTimeoutMilliseconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallback">BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallback</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CircuitBreaker`<sup>Required</sup> <a name="CircuitBreaker" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackOutputReference.property.circuitBreaker"></a>

```csharp
public BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackCircuitBreakerOutputReference CircuitBreaker { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackCircuitBreakerOutputReference">BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackCircuitBreakerOutputReference</a>

---

##### `TargetFallback`<sup>Required</sup> <a name="TargetFallback" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackOutputReference.property.targetFallback"></a>

```csharp
public BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackList TargetFallback { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackList">BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackList</a>

---

##### `TriggerOn`<sup>Required</sup> <a name="TriggerOn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackOutputReference.property.triggerOn"></a>

```csharp
public BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTriggerOnOutputReference TriggerOn { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTriggerOnOutputReference">BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTriggerOnOutputReference</a>

---

##### `CircuitBreakerInput`<sup>Optional</sup> <a name="CircuitBreakerInput" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackOutputReference.property.circuitBreakerInput"></a>

```csharp
public IResolvable|BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackCircuitBreaker CircuitBreakerInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackCircuitBreaker">BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackCircuitBreaker</a>

---

##### `FirstByteTimeoutMillisecondsInput`<sup>Optional</sup> <a name="FirstByteTimeoutMillisecondsInput" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackOutputReference.property.firstByteTimeoutMillisecondsInput"></a>

```csharp
public double FirstByteTimeoutMillisecondsInput { get; }
```

- *Type:* double

---

##### `TargetFallbackInput`<sup>Optional</sup> <a name="TargetFallbackInput" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackOutputReference.property.targetFallbackInput"></a>

```csharp
public IResolvable|BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallback[] TargetFallbackInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallback">BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallback</a>[]

---

##### `TriggerOnInput`<sup>Optional</sup> <a name="TriggerOnInput" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackOutputReference.property.triggerOnInput"></a>

```csharp
public IResolvable|BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTriggerOn TriggerOnInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTriggerOn">BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTriggerOn</a>

---

##### `FirstByteTimeoutMilliseconds`<sup>Required</sup> <a name="FirstByteTimeoutMilliseconds" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackOutputReference.property.firstByteTimeoutMilliseconds"></a>

```csharp
public double FirstByteTimeoutMilliseconds { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallback InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallback">BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallback</a>

---


### BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackList <a name="BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackList" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackList.get"></a>

```csharp
private BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallback">BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallback</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackList.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallback[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallback">BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallback</a>[]

---


### BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackOutputReference <a name="BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackOutputReference.putTriggerOn">PutTriggerOn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackOutputReference.resetFirstByteTimeoutMilliseconds">ResetFirstByteTimeoutMilliseconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackOutputReference.resetModel">ResetModel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackOutputReference.resetTargetName">ResetTargetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackOutputReference.resetTriggerOn">ResetTriggerOn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTriggerOn` <a name="PutTriggerOn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackOutputReference.putTriggerOn"></a>

```csharp
private void PutTriggerOn(BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackTriggerOn Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackOutputReference.putTriggerOn.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackTriggerOn">BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackTriggerOn</a>

---

##### `ResetFirstByteTimeoutMilliseconds` <a name="ResetFirstByteTimeoutMilliseconds" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackOutputReference.resetFirstByteTimeoutMilliseconds"></a>

```csharp
private void ResetFirstByteTimeoutMilliseconds()
```

##### `ResetModel` <a name="ResetModel" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackOutputReference.resetModel"></a>

```csharp
private void ResetModel()
```

##### `ResetTargetName` <a name="ResetTargetName" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackOutputReference.resetTargetName"></a>

```csharp
private void ResetTargetName()
```

##### `ResetTriggerOn` <a name="ResetTriggerOn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackOutputReference.resetTriggerOn"></a>

```csharp
private void ResetTriggerOn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackOutputReference.property.triggerOn">TriggerOn</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackTriggerOnOutputReference">BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackTriggerOnOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackOutputReference.property.firstByteTimeoutMillisecondsInput">FirstByteTimeoutMillisecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackOutputReference.property.modelInput">ModelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackOutputReference.property.targetNameInput">TargetNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackOutputReference.property.triggerOnInput">TriggerOnInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackTriggerOn">BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackTriggerOn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackOutputReference.property.firstByteTimeoutMilliseconds">FirstByteTimeoutMilliseconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackOutputReference.property.model">Model</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackOutputReference.property.targetName">TargetName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallback">BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallback</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TriggerOn`<sup>Required</sup> <a name="TriggerOn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackOutputReference.property.triggerOn"></a>

```csharp
public BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackTriggerOnOutputReference TriggerOn { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackTriggerOnOutputReference">BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackTriggerOnOutputReference</a>

---

##### `FirstByteTimeoutMillisecondsInput`<sup>Optional</sup> <a name="FirstByteTimeoutMillisecondsInput" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackOutputReference.property.firstByteTimeoutMillisecondsInput"></a>

```csharp
public double FirstByteTimeoutMillisecondsInput { get; }
```

- *Type:* double

---

##### `ModelInput`<sup>Optional</sup> <a name="ModelInput" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackOutputReference.property.modelInput"></a>

```csharp
public string ModelInput { get; }
```

- *Type:* string

---

##### `TargetNameInput`<sup>Optional</sup> <a name="TargetNameInput" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackOutputReference.property.targetNameInput"></a>

```csharp
public string TargetNameInput { get; }
```

- *Type:* string

---

##### `TriggerOnInput`<sup>Optional</sup> <a name="TriggerOnInput" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackOutputReference.property.triggerOnInput"></a>

```csharp
public IResolvable|BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackTriggerOn TriggerOnInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackTriggerOn">BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackTriggerOn</a>

---

##### `FirstByteTimeoutMilliseconds`<sup>Required</sup> <a name="FirstByteTimeoutMilliseconds" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackOutputReference.property.firstByteTimeoutMilliseconds"></a>

```csharp
public double FirstByteTimeoutMilliseconds { get; }
```

- *Type:* double

---

##### `Model`<sup>Required</sup> <a name="Model" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackOutputReference.property.model"></a>

```csharp
public string Model { get; }
```

- *Type:* string

---

##### `TargetName`<sup>Required</sup> <a name="TargetName" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackOutputReference.property.targetName"></a>

```csharp
public string TargetName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallback InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallback">BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallback</a>

---


### BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackTriggerOnOutputReference <a name="BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackTriggerOnOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackTriggerOnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackTriggerOnOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackTriggerOnOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackTriggerOnOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackTriggerOnOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackTriggerOnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackTriggerOnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackTriggerOnOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackTriggerOnOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackTriggerOnOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackTriggerOnOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackTriggerOnOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackTriggerOnOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackTriggerOnOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackTriggerOnOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackTriggerOnOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackTriggerOnOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackTriggerOnOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackTriggerOnOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackTriggerOnOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackTriggerOnOutputReference.resetErrors">ResetErrors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackTriggerOnOutputReference.resetStatusCodes">ResetStatusCodes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackTriggerOnOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackTriggerOnOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackTriggerOnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackTriggerOnOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackTriggerOnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackTriggerOnOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackTriggerOnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackTriggerOnOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackTriggerOnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackTriggerOnOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackTriggerOnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackTriggerOnOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackTriggerOnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackTriggerOnOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackTriggerOnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackTriggerOnOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackTriggerOnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackTriggerOnOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackTriggerOnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackTriggerOnOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackTriggerOnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackTriggerOnOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackTriggerOnOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackTriggerOnOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetErrors` <a name="ResetErrors" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackTriggerOnOutputReference.resetErrors"></a>

```csharp
private void ResetErrors()
```

##### `ResetStatusCodes` <a name="ResetStatusCodes" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackTriggerOnOutputReference.resetStatusCodes"></a>

```csharp
private void ResetStatusCodes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackTriggerOnOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackTriggerOnOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackTriggerOnOutputReference.property.errorsInput">ErrorsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackTriggerOnOutputReference.property.statusCodesInput">StatusCodesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackTriggerOnOutputReference.property.errors">Errors</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackTriggerOnOutputReference.property.statusCodes">StatusCodes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackTriggerOnOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackTriggerOn">BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackTriggerOn</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackTriggerOnOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackTriggerOnOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ErrorsInput`<sup>Optional</sup> <a name="ErrorsInput" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackTriggerOnOutputReference.property.errorsInput"></a>

```csharp
public string[] ErrorsInput { get; }
```

- *Type:* string[]

---

##### `StatusCodesInput`<sup>Optional</sup> <a name="StatusCodesInput" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackTriggerOnOutputReference.property.statusCodesInput"></a>

```csharp
public string[] StatusCodesInput { get; }
```

- *Type:* string[]

---

##### `Errors`<sup>Required</sup> <a name="Errors" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackTriggerOnOutputReference.property.errors"></a>

```csharp
public string[] Errors { get; }
```

- *Type:* string[]

---

##### `StatusCodes`<sup>Required</sup> <a name="StatusCodes" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackTriggerOnOutputReference.property.statusCodes"></a>

```csharp
public string[] StatusCodes { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackTriggerOnOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackTriggerOn InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackTriggerOn">BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTargetFallbackTriggerOn</a>

---


### BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTriggerOnOutputReference <a name="BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTriggerOnOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTriggerOnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTriggerOnOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTriggerOnOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTriggerOnOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTriggerOnOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTriggerOnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTriggerOnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTriggerOnOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTriggerOnOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTriggerOnOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTriggerOnOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTriggerOnOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTriggerOnOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTriggerOnOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTriggerOnOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTriggerOnOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTriggerOnOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTriggerOnOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTriggerOnOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTriggerOnOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTriggerOnOutputReference.resetErrors">ResetErrors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTriggerOnOutputReference.resetStatusCodes">ResetStatusCodes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTriggerOnOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTriggerOnOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTriggerOnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTriggerOnOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTriggerOnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTriggerOnOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTriggerOnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTriggerOnOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTriggerOnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTriggerOnOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTriggerOnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTriggerOnOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTriggerOnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTriggerOnOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTriggerOnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTriggerOnOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTriggerOnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTriggerOnOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTriggerOnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTriggerOnOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTriggerOnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTriggerOnOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTriggerOnOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTriggerOnOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetErrors` <a name="ResetErrors" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTriggerOnOutputReference.resetErrors"></a>

```csharp
private void ResetErrors()
```

##### `ResetStatusCodes` <a name="ResetStatusCodes" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTriggerOnOutputReference.resetStatusCodes"></a>

```csharp
private void ResetStatusCodes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTriggerOnOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTriggerOnOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTriggerOnOutputReference.property.errorsInput">ErrorsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTriggerOnOutputReference.property.statusCodesInput">StatusCodesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTriggerOnOutputReference.property.errors">Errors</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTriggerOnOutputReference.property.statusCodes">StatusCodes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTriggerOnOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTriggerOn">BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTriggerOn</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTriggerOnOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTriggerOnOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ErrorsInput`<sup>Optional</sup> <a name="ErrorsInput" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTriggerOnOutputReference.property.errorsInput"></a>

```csharp
public string[] ErrorsInput { get; }
```

- *Type:* string[]

---

##### `StatusCodesInput`<sup>Optional</sup> <a name="StatusCodesInput" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTriggerOnOutputReference.property.statusCodesInput"></a>

```csharp
public string[] StatusCodesInput { get; }
```

- *Type:* string[]

---

##### `Errors`<sup>Required</sup> <a name="Errors" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTriggerOnOutputReference.property.errors"></a>

```csharp
public string[] Errors { get; }
```

- *Type:* string[]

---

##### `StatusCodes`<sup>Required</sup> <a name="StatusCodes" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTriggerOnOutputReference.property.statusCodes"></a>

```csharp
public string[] StatusCodes { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTriggerOnOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTriggerOn InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTriggerOn">BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackTriggerOn</a>

---


### BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitList <a name="BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitList" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitList.get"></a>

```csharp
private BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplit">BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplit</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitList.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplit[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplit">BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplit</a>[]

---


### BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitOutputReference <a name="BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitOutputReference.putFallback">PutFallback</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitOutputReference.resetFallback">ResetFallback</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitOutputReference.resetMetadata">ResetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitOutputReference.resetModel">ResetModel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitOutputReference.resetTargetName">ResetTargetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitOutputReference.resetWeight">ResetWeight</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFallback` <a name="PutFallback" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitOutputReference.putFallback"></a>

```csharp
private void PutFallback(BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallback Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitOutputReference.putFallback.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallback">BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallback</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetFallback` <a name="ResetFallback" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitOutputReference.resetFallback"></a>

```csharp
private void ResetFallback()
```

##### `ResetMetadata` <a name="ResetMetadata" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitOutputReference.resetMetadata"></a>

```csharp
private void ResetMetadata()
```

##### `ResetModel` <a name="ResetModel" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitOutputReference.resetModel"></a>

```csharp
private void ResetModel()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetTargetName` <a name="ResetTargetName" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitOutputReference.resetTargetName"></a>

```csharp
private void ResetTargetName()
```

##### `ResetWeight` <a name="ResetWeight" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitOutputReference.resetWeight"></a>

```csharp
private void ResetWeight()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitOutputReference.property.fallback">Fallback</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackOutputReference">BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitOutputReference.property.fallbackInput">FallbackInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallback">BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallback</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitOutputReference.property.metadataInput">MetadataInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitOutputReference.property.modelInput">ModelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitOutputReference.property.targetNameInput">TargetNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitOutputReference.property.weightInput">WeightInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitOutputReference.property.metadata">Metadata</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitOutputReference.property.model">Model</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitOutputReference.property.targetName">TargetName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitOutputReference.property.weight">Weight</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplit">BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplit</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Fallback`<sup>Required</sup> <a name="Fallback" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitOutputReference.property.fallback"></a>

```csharp
public BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackOutputReference Fallback { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackOutputReference">BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallbackOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `FallbackInput`<sup>Optional</sup> <a name="FallbackInput" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitOutputReference.property.fallbackInput"></a>

```csharp
public IResolvable|BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallback FallbackInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallback">BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitFallback</a>

---

##### `MetadataInput`<sup>Optional</sup> <a name="MetadataInput" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitOutputReference.property.metadataInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> MetadataInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ModelInput`<sup>Optional</sup> <a name="ModelInput" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitOutputReference.property.modelInput"></a>

```csharp
public string ModelInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TargetNameInput`<sup>Optional</sup> <a name="TargetNameInput" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitOutputReference.property.targetNameInput"></a>

```csharp
public string TargetNameInput { get; }
```

- *Type:* string

---

##### `WeightInput`<sup>Optional</sup> <a name="WeightInput" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitOutputReference.property.weightInput"></a>

```csharp
public double WeightInput { get; }
```

- *Type:* double

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitOutputReference.property.metadata"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Metadata { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Model`<sup>Required</sup> <a name="Model" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitOutputReference.property.model"></a>

```csharp
public string Model { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `TargetName`<sup>Required</sup> <a name="TargetName" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitOutputReference.property.targetName"></a>

```csharp
public string TargetName { get; }
```

- *Type:* string

---

##### `Weight`<sup>Required</sup> <a name="Weight" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitOutputReference.property.weight"></a>

```csharp
public double Weight { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplit InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplit">BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplit</a>

---


### BedrockagentcoreGatewayRuleConditionsList <a name="BedrockagentcoreGatewayRuleConditionsList" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreGatewayRuleConditionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsList.get"></a>

```csharp
private BedrockagentcoreGatewayRuleConditionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditions">BedrockagentcoreGatewayRuleConditions</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsList.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreGatewayRuleConditions[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditions">BedrockagentcoreGatewayRuleConditions</a>[]

---


### BedrockagentcoreGatewayRuleConditionsMatchModelsAnyOfList <a name="BedrockagentcoreGatewayRuleConditionsMatchModelsAnyOfList" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchModelsAnyOfList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchModelsAnyOfList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreGatewayRuleConditionsMatchModelsAnyOfList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchModelsAnyOfList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchModelsAnyOfList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchModelsAnyOfList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchModelsAnyOfList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchModelsAnyOfList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchModelsAnyOfList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchModelsAnyOfList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchModelsAnyOfList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchModelsAnyOfList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchModelsAnyOfList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchModelsAnyOfList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchModelsAnyOfList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchModelsAnyOfList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchModelsAnyOfList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchModelsAnyOfList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchModelsAnyOfList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchModelsAnyOfList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchModelsAnyOfList.get"></a>

```csharp
private BedrockagentcoreGatewayRuleConditionsMatchModelsAnyOfOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchModelsAnyOfList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchModelsAnyOfList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchModelsAnyOfList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchModelsAnyOfList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchModelsAnyOf">BedrockagentcoreGatewayRuleConditionsMatchModelsAnyOf</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchModelsAnyOfList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchModelsAnyOfList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchModelsAnyOfList.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreGatewayRuleConditionsMatchModelsAnyOf[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchModelsAnyOf">BedrockagentcoreGatewayRuleConditionsMatchModelsAnyOf</a>[]

---


### BedrockagentcoreGatewayRuleConditionsMatchModelsAnyOfOutputReference <a name="BedrockagentcoreGatewayRuleConditionsMatchModelsAnyOfOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchModelsAnyOfOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchModelsAnyOfOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreGatewayRuleConditionsMatchModelsAnyOfOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchModelsAnyOfOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchModelsAnyOfOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchModelsAnyOfOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchModelsAnyOfOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchModelsAnyOfOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchModelsAnyOfOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchModelsAnyOfOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchModelsAnyOfOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchModelsAnyOfOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchModelsAnyOfOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchModelsAnyOfOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchModelsAnyOfOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchModelsAnyOfOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchModelsAnyOfOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchModelsAnyOfOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchModelsAnyOfOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchModelsAnyOfOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchModelsAnyOfOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchModelsAnyOfOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchModelsAnyOfOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchModelsAnyOfOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchModelsAnyOfOutputReference.resetOperator">ResetOperator</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchModelsAnyOfOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchModelsAnyOfOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchModelsAnyOfOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchModelsAnyOfOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchModelsAnyOfOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchModelsAnyOfOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchModelsAnyOfOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchModelsAnyOfOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchModelsAnyOfOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchModelsAnyOfOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchModelsAnyOfOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchModelsAnyOfOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchModelsAnyOfOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchModelsAnyOfOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchModelsAnyOfOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchModelsAnyOfOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchModelsAnyOfOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchModelsAnyOfOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchModelsAnyOfOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchModelsAnyOfOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchModelsAnyOfOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchModelsAnyOfOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchModelsAnyOfOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchModelsAnyOfOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchModelsAnyOfOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetOperator` <a name="ResetOperator" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchModelsAnyOfOutputReference.resetOperator"></a>

```csharp
private void ResetOperator()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchModelsAnyOfOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchModelsAnyOfOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchModelsAnyOfOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchModelsAnyOfOutputReference.property.operatorInput">OperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchModelsAnyOfOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchModelsAnyOfOutputReference.property.operator">Operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchModelsAnyOfOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchModelsAnyOfOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchModelsAnyOf">BedrockagentcoreGatewayRuleConditionsMatchModelsAnyOf</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchModelsAnyOfOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchModelsAnyOfOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchModelsAnyOfOutputReference.property.operatorInput"></a>

```csharp
public string OperatorInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchModelsAnyOfOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchModelsAnyOfOutputReference.property.operator"></a>

```csharp
public string Operator { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchModelsAnyOfOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchModelsAnyOfOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreGatewayRuleConditionsMatchModelsAnyOf InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchModelsAnyOf">BedrockagentcoreGatewayRuleConditionsMatchModelsAnyOf</a>

---


### BedrockagentcoreGatewayRuleConditionsMatchModelsOutputReference <a name="BedrockagentcoreGatewayRuleConditionsMatchModelsOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchModelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchModelsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreGatewayRuleConditionsMatchModelsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchModelsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchModelsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchModelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchModelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchModelsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchModelsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchModelsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchModelsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchModelsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchModelsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchModelsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchModelsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchModelsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchModelsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchModelsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchModelsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchModelsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchModelsOutputReference.putAnyOf">PutAnyOf</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchModelsOutputReference.resetAnyOf">ResetAnyOf</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchModelsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchModelsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchModelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchModelsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchModelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchModelsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchModelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchModelsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchModelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchModelsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchModelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchModelsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchModelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchModelsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchModelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchModelsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchModelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchModelsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchModelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchModelsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchModelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchModelsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchModelsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchModelsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAnyOf` <a name="PutAnyOf" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchModelsOutputReference.putAnyOf"></a>

```csharp
private void PutAnyOf(IResolvable|BedrockagentcoreGatewayRuleConditionsMatchModelsAnyOf[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchModelsOutputReference.putAnyOf.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchModelsAnyOf">BedrockagentcoreGatewayRuleConditionsMatchModelsAnyOf</a>[]

---

##### `ResetAnyOf` <a name="ResetAnyOf" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchModelsOutputReference.resetAnyOf"></a>

```csharp
private void ResetAnyOf()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchModelsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchModelsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchModelsOutputReference.property.anyOf">AnyOf</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchModelsAnyOfList">BedrockagentcoreGatewayRuleConditionsMatchModelsAnyOfList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchModelsOutputReference.property.anyOfInput">AnyOfInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchModelsAnyOf">BedrockagentcoreGatewayRuleConditionsMatchModelsAnyOf</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchModelsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchModels">BedrockagentcoreGatewayRuleConditionsMatchModels</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchModelsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchModelsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AnyOf`<sup>Required</sup> <a name="AnyOf" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchModelsOutputReference.property.anyOf"></a>

```csharp
public BedrockagentcoreGatewayRuleConditionsMatchModelsAnyOfList AnyOf { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchModelsAnyOfList">BedrockagentcoreGatewayRuleConditionsMatchModelsAnyOfList</a>

---

##### `AnyOfInput`<sup>Optional</sup> <a name="AnyOfInput" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchModelsOutputReference.property.anyOfInput"></a>

```csharp
public IResolvable|BedrockagentcoreGatewayRuleConditionsMatchModelsAnyOf[] AnyOfInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchModelsAnyOf">BedrockagentcoreGatewayRuleConditionsMatchModelsAnyOf</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchModelsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreGatewayRuleConditionsMatchModels InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchModels">BedrockagentcoreGatewayRuleConditionsMatchModels</a>

---


### BedrockagentcoreGatewayRuleConditionsMatchPathsOutputReference <a name="BedrockagentcoreGatewayRuleConditionsMatchPathsOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPathsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPathsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreGatewayRuleConditionsMatchPathsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPathsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPathsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPathsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPathsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPathsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPathsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPathsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPathsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPathsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPathsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPathsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPathsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPathsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPathsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPathsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPathsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPathsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPathsOutputReference.resetAnyOf">ResetAnyOf</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPathsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPathsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPathsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPathsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPathsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPathsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPathsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPathsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPathsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPathsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPathsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPathsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPathsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPathsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPathsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPathsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPathsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPathsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPathsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPathsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPathsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPathsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPathsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPathsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAnyOf` <a name="ResetAnyOf" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPathsOutputReference.resetAnyOf"></a>

```csharp
private void ResetAnyOf()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPathsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPathsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPathsOutputReference.property.anyOfInput">AnyOfInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPathsOutputReference.property.anyOf">AnyOf</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPathsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPaths">BedrockagentcoreGatewayRuleConditionsMatchPaths</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPathsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPathsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AnyOfInput`<sup>Optional</sup> <a name="AnyOfInput" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPathsOutputReference.property.anyOfInput"></a>

```csharp
public string[] AnyOfInput { get; }
```

- *Type:* string[]

---

##### `AnyOf`<sup>Required</sup> <a name="AnyOf" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPathsOutputReference.property.anyOf"></a>

```csharp
public string[] AnyOf { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPathsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreGatewayRuleConditionsMatchPaths InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPaths">BedrockagentcoreGatewayRuleConditionsMatchPaths</a>

---


### BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipalOutputReference <a name="BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipalOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipalOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipalOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipalOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipalOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipalOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipalOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipalOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipalOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipalOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipalOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipalOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipalOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipalOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipalOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipalOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipalOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipalOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipalOutputReference.resetArn">ResetArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipalOutputReference.resetOperator">ResetOperator</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipalOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipalOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipalOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipalOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipalOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipalOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipalOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipalOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipalOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipalOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipalOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipalOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipalOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipalOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetArn` <a name="ResetArn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipalOutputReference.resetArn"></a>

```csharp
private void ResetArn()
```

##### `ResetOperator` <a name="ResetOperator" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipalOutputReference.resetOperator"></a>

```csharp
private void ResetOperator()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipalOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipalOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipalOutputReference.property.arnInput">ArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipalOutputReference.property.operatorInput">OperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipalOutputReference.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipalOutputReference.property.operator">Operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipalOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipal">BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipal</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipalOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipalOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ArnInput`<sup>Optional</sup> <a name="ArnInput" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipalOutputReference.property.arnInput"></a>

```csharp
public string ArnInput { get; }
```

- *Type:* string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipalOutputReference.property.operatorInput"></a>

```csharp
public string OperatorInput { get; }
```

- *Type:* string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipalOutputReference.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipalOutputReference.property.operator"></a>

```csharp
public string Operator { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipalOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipal InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipal">BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipal</a>

---


### BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfList <a name="BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfList" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfList.get"></a>

```csharp
private BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOf">BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOf</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfList.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOf[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOf">BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOf</a>[]

---


### BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfOutputReference <a name="BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfOutputReference.putIamPrincipal">PutIamPrincipal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfOutputReference.resetIamPrincipal">ResetIamPrincipal</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutIamPrincipal` <a name="PutIamPrincipal" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfOutputReference.putIamPrincipal"></a>

```csharp
private void PutIamPrincipal(BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipal Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfOutputReference.putIamPrincipal.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipal">BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipal</a>

---

##### `ResetIamPrincipal` <a name="ResetIamPrincipal" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfOutputReference.resetIamPrincipal"></a>

```csharp
private void ResetIamPrincipal()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfOutputReference.property.iamPrincipal">IamPrincipal</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipalOutputReference">BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipalOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfOutputReference.property.iamPrincipalInput">IamPrincipalInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipal">BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOf">BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOf</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IamPrincipal`<sup>Required</sup> <a name="IamPrincipal" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfOutputReference.property.iamPrincipal"></a>

```csharp
public BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipalOutputReference IamPrincipal { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipalOutputReference">BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipalOutputReference</a>

---

##### `IamPrincipalInput`<sup>Optional</sup> <a name="IamPrincipalInput" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfOutputReference.property.iamPrincipalInput"></a>

```csharp
public IResolvable|BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipal IamPrincipalInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipal">BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipal</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOf InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOf">BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOf</a>

---


### BedrockagentcoreGatewayRuleConditionsMatchPrincipalsOutputReference <a name="BedrockagentcoreGatewayRuleConditionsMatchPrincipalsOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreGatewayRuleConditionsMatchPrincipalsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsOutputReference.putAnyOf">PutAnyOf</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsOutputReference.resetAnyOf">ResetAnyOf</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAnyOf` <a name="PutAnyOf" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsOutputReference.putAnyOf"></a>

```csharp
private void PutAnyOf(IResolvable|BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOf[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsOutputReference.putAnyOf.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOf">BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOf</a>[]

---

##### `ResetAnyOf` <a name="ResetAnyOf" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsOutputReference.resetAnyOf"></a>

```csharp
private void ResetAnyOf()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsOutputReference.property.anyOf">AnyOf</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfList">BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsOutputReference.property.anyOfInput">AnyOfInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOf">BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOf</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipals">BedrockagentcoreGatewayRuleConditionsMatchPrincipals</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AnyOf`<sup>Required</sup> <a name="AnyOf" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsOutputReference.property.anyOf"></a>

```csharp
public BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfList AnyOf { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfList">BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfList</a>

---

##### `AnyOfInput`<sup>Optional</sup> <a name="AnyOfInput" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsOutputReference.property.anyOfInput"></a>

```csharp
public IResolvable|BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOf[] AnyOfInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOf">BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOf</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreGatewayRuleConditionsMatchPrincipals InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipals">BedrockagentcoreGatewayRuleConditionsMatchPrincipals</a>

---


### BedrockagentcoreGatewayRuleConditionsOutputReference <a name="BedrockagentcoreGatewayRuleConditionsOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreGatewayRuleConditionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsOutputReference.putMatchModels">PutMatchModels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsOutputReference.putMatchPaths">PutMatchPaths</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsOutputReference.putMatchPrincipals">PutMatchPrincipals</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsOutputReference.resetMatchModels">ResetMatchModels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsOutputReference.resetMatchPaths">ResetMatchPaths</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsOutputReference.resetMatchPrincipals">ResetMatchPrincipals</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMatchModels` <a name="PutMatchModels" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsOutputReference.putMatchModels"></a>

```csharp
private void PutMatchModels(BedrockagentcoreGatewayRuleConditionsMatchModels Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsOutputReference.putMatchModels.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchModels">BedrockagentcoreGatewayRuleConditionsMatchModels</a>

---

##### `PutMatchPaths` <a name="PutMatchPaths" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsOutputReference.putMatchPaths"></a>

```csharp
private void PutMatchPaths(BedrockagentcoreGatewayRuleConditionsMatchPaths Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsOutputReference.putMatchPaths.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPaths">BedrockagentcoreGatewayRuleConditionsMatchPaths</a>

---

##### `PutMatchPrincipals` <a name="PutMatchPrincipals" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsOutputReference.putMatchPrincipals"></a>

```csharp
private void PutMatchPrincipals(BedrockagentcoreGatewayRuleConditionsMatchPrincipals Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsOutputReference.putMatchPrincipals.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipals">BedrockagentcoreGatewayRuleConditionsMatchPrincipals</a>

---

##### `ResetMatchModels` <a name="ResetMatchModels" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsOutputReference.resetMatchModels"></a>

```csharp
private void ResetMatchModels()
```

##### `ResetMatchPaths` <a name="ResetMatchPaths" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsOutputReference.resetMatchPaths"></a>

```csharp
private void ResetMatchPaths()
```

##### `ResetMatchPrincipals` <a name="ResetMatchPrincipals" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsOutputReference.resetMatchPrincipals"></a>

```csharp
private void ResetMatchPrincipals()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsOutputReference.property.matchModels">MatchModels</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchModelsOutputReference">BedrockagentcoreGatewayRuleConditionsMatchModelsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsOutputReference.property.matchPaths">MatchPaths</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPathsOutputReference">BedrockagentcoreGatewayRuleConditionsMatchPathsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsOutputReference.property.matchPrincipals">MatchPrincipals</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsOutputReference">BedrockagentcoreGatewayRuleConditionsMatchPrincipalsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsOutputReference.property.matchModelsInput">MatchModelsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchModels">BedrockagentcoreGatewayRuleConditionsMatchModels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsOutputReference.property.matchPathsInput">MatchPathsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPaths">BedrockagentcoreGatewayRuleConditionsMatchPaths</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsOutputReference.property.matchPrincipalsInput">MatchPrincipalsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipals">BedrockagentcoreGatewayRuleConditionsMatchPrincipals</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditions">BedrockagentcoreGatewayRuleConditions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MatchModels`<sup>Required</sup> <a name="MatchModels" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsOutputReference.property.matchModels"></a>

```csharp
public BedrockagentcoreGatewayRuleConditionsMatchModelsOutputReference MatchModels { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchModelsOutputReference">BedrockagentcoreGatewayRuleConditionsMatchModelsOutputReference</a>

---

##### `MatchPaths`<sup>Required</sup> <a name="MatchPaths" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsOutputReference.property.matchPaths"></a>

```csharp
public BedrockagentcoreGatewayRuleConditionsMatchPathsOutputReference MatchPaths { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPathsOutputReference">BedrockagentcoreGatewayRuleConditionsMatchPathsOutputReference</a>

---

##### `MatchPrincipals`<sup>Required</sup> <a name="MatchPrincipals" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsOutputReference.property.matchPrincipals"></a>

```csharp
public BedrockagentcoreGatewayRuleConditionsMatchPrincipalsOutputReference MatchPrincipals { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsOutputReference">BedrockagentcoreGatewayRuleConditionsMatchPrincipalsOutputReference</a>

---

##### `MatchModelsInput`<sup>Optional</sup> <a name="MatchModelsInput" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsOutputReference.property.matchModelsInput"></a>

```csharp
public IResolvable|BedrockagentcoreGatewayRuleConditionsMatchModels MatchModelsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchModels">BedrockagentcoreGatewayRuleConditionsMatchModels</a>

---

##### `MatchPathsInput`<sup>Optional</sup> <a name="MatchPathsInput" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsOutputReference.property.matchPathsInput"></a>

```csharp
public IResolvable|BedrockagentcoreGatewayRuleConditionsMatchPaths MatchPathsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPaths">BedrockagentcoreGatewayRuleConditionsMatchPaths</a>

---

##### `MatchPrincipalsInput`<sup>Optional</sup> <a name="MatchPrincipalsInput" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsOutputReference.property.matchPrincipalsInput"></a>

```csharp
public IResolvable|BedrockagentcoreGatewayRuleConditionsMatchPrincipals MatchPrincipalsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipals">BedrockagentcoreGatewayRuleConditionsMatchPrincipals</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreGatewayRuleConditions InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditions">BedrockagentcoreGatewayRuleConditions</a>

---


### BedrockagentcoreGatewayRuleSystemOutputReference <a name="BedrockagentcoreGatewayRuleSystemOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreGatewayRuleSystemOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemOutputReference.property.managedBy">ManagedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystem">BedrockagentcoreGatewayRuleSystem</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ManagedBy`<sup>Required</sup> <a name="ManagedBy" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemOutputReference.property.managedBy"></a>

```csharp
public string ManagedBy { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystemOutputReference.property.internalValue"></a>

```csharp
public BedrockagentcoreGatewayRuleSystem InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleSystem">BedrockagentcoreGatewayRuleSystem</a>

---



