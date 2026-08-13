# `route53ResolverFirewallRuleGroup` Submodule <a name="`route53ResolverFirewallRuleGroup` Submodule" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Route53ResolverFirewallRuleGroup <a name="Route53ResolverFirewallRuleGroup" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53resolver_firewall_rule_group awscc_route53resolver_firewall_rule_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Route53ResolverFirewallRuleGroup(Construct Scope, string Id, Route53ResolverFirewallRuleGroupConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupConfig">Route53ResolverFirewallRuleGroupConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupConfig">Route53ResolverFirewallRuleGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.putFirewallRules">PutFirewallRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.resetFirewallRules">ResetFirewallRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutFirewallRules` <a name="PutFirewallRules" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.putFirewallRules"></a>

```csharp
private void PutFirewallRules(IResolvable|Route53ResolverFirewallRuleGroupFirewallRules[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.putFirewallRules.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRules">Route53ResolverFirewallRuleGroupFirewallRules</a>[]

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.putTags"></a>

```csharp
private void PutTags(IResolvable|Route53ResolverFirewallRuleGroupTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTags">Route53ResolverFirewallRuleGroupTags</a>[]

---

##### `ResetFirewallRules` <a name="ResetFirewallRules" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.resetFirewallRules"></a>

```csharp
private void ResetFirewallRules()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a Route53ResolverFirewallRuleGroup resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Route53ResolverFirewallRuleGroup.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Route53ResolverFirewallRuleGroup.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Route53ResolverFirewallRuleGroup.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Route53ResolverFirewallRuleGroup.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a Route53ResolverFirewallRuleGroup resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Route53ResolverFirewallRuleGroup to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Route53ResolverFirewallRuleGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53resolver_firewall_rule_group#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the Route53ResolverFirewallRuleGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.creationTime">CreationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.creatorRequestId">CreatorRequestId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.firewallRuleGroupId">FirewallRuleGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.firewallRules">FirewallRules</a></code> | <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesList">Route53ResolverFirewallRuleGroupFirewallRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.modificationTime">ModificationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.ownerId">OwnerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.ruleCount">RuleCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.shareStatus">ShareStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.statusMessage">StatusMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsList">Route53ResolverFirewallRuleGroupTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.firewallRulesInput">FirewallRulesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRules">Route53ResolverFirewallRuleGroupFirewallRules</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTags">Route53ResolverFirewallRuleGroupTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.creationTime"></a>

```csharp
public string CreationTime { get; }
```

- *Type:* string

---

##### `CreatorRequestId`<sup>Required</sup> <a name="CreatorRequestId" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.creatorRequestId"></a>

```csharp
public string CreatorRequestId { get; }
```

- *Type:* string

---

##### `FirewallRuleGroupId`<sup>Required</sup> <a name="FirewallRuleGroupId" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.firewallRuleGroupId"></a>

```csharp
public string FirewallRuleGroupId { get; }
```

- *Type:* string

---

##### `FirewallRules`<sup>Required</sup> <a name="FirewallRules" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.firewallRules"></a>

```csharp
public Route53ResolverFirewallRuleGroupFirewallRulesList FirewallRules { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesList">Route53ResolverFirewallRuleGroupFirewallRulesList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ModificationTime`<sup>Required</sup> <a name="ModificationTime" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.modificationTime"></a>

```csharp
public string ModificationTime { get; }
```

- *Type:* string

---

##### `OwnerId`<sup>Required</sup> <a name="OwnerId" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.ownerId"></a>

```csharp
public string OwnerId { get; }
```

- *Type:* string

---

##### `RuleCount`<sup>Required</sup> <a name="RuleCount" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.ruleCount"></a>

```csharp
public double RuleCount { get; }
```

- *Type:* double

---

##### `ShareStatus`<sup>Required</sup> <a name="ShareStatus" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.shareStatus"></a>

```csharp
public string ShareStatus { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `StatusMessage`<sup>Required</sup> <a name="StatusMessage" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.statusMessage"></a>

```csharp
public string StatusMessage { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.tags"></a>

```csharp
public Route53ResolverFirewallRuleGroupTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsList">Route53ResolverFirewallRuleGroupTagsList</a>

---

##### `FirewallRulesInput`<sup>Optional</sup> <a name="FirewallRulesInput" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.firewallRulesInput"></a>

```csharp
public IResolvable|Route53ResolverFirewallRuleGroupFirewallRules[] FirewallRulesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRules">Route53ResolverFirewallRuleGroupFirewallRules</a>[]

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.tagsInput"></a>

```csharp
public IResolvable|Route53ResolverFirewallRuleGroupTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTags">Route53ResolverFirewallRuleGroupTags</a>[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Route53ResolverFirewallRuleGroupConfig <a name="Route53ResolverFirewallRuleGroupConfig" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Route53ResolverFirewallRuleGroupConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    IResolvable|Route53ResolverFirewallRuleGroupFirewallRules[] FirewallRules = null,
    string Name = null,
    IResolvable|Route53ResolverFirewallRuleGroupTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupConfig.property.firewallRules">FirewallRules</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRules">Route53ResolverFirewallRuleGroupFirewallRules</a>[]</code> | FirewallRules. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupConfig.property.name">Name</a></code> | <code>string</code> | FirewallRuleGroupName. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTags">Route53ResolverFirewallRuleGroupTags</a>[]</code> | Tags. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `FirewallRules`<sup>Optional</sup> <a name="FirewallRules" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupConfig.property.firewallRules"></a>

```csharp
public IResolvable|Route53ResolverFirewallRuleGroupFirewallRules[] FirewallRules { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRules">Route53ResolverFirewallRuleGroupFirewallRules</a>[]

FirewallRules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53resolver_firewall_rule_group#firewall_rules Route53ResolverFirewallRuleGroup#firewall_rules}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

FirewallRuleGroupName.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53resolver_firewall_rule_group#name Route53ResolverFirewallRuleGroup#name}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupConfig.property.tags"></a>

```csharp
public IResolvable|Route53ResolverFirewallRuleGroupTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTags">Route53ResolverFirewallRuleGroupTags</a>[]

Tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53resolver_firewall_rule_group#tags Route53ResolverFirewallRuleGroup#tags}

---

### Route53ResolverFirewallRuleGroupFirewallRules <a name="Route53ResolverFirewallRuleGroupFirewallRules" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRules.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Route53ResolverFirewallRuleGroupFirewallRules {
    string Action = null,
    string BlockOverrideDnsType = null,
    string BlockOverrideDomain = null,
    double BlockOverrideTtl = null,
    string BlockResponse = null,
    string ConfidenceThreshold = null,
    string DnsThreatProtection = null,
    string FirewallDomainListId = null,
    string FirewallDomainRedirectionAction = null,
    Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleType FirewallRuleType = null,
    string FirewallThreatProtectionId = null,
    double Priority = null,
    string Qtype = null,
    string Status = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRules.property.action">Action</a></code> | <code>string</code> | Rule Action. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRules.property.blockOverrideDnsType">BlockOverrideDnsType</a></code> | <code>string</code> | BlockOverrideDnsType. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRules.property.blockOverrideDomain">BlockOverrideDomain</a></code> | <code>string</code> | BlockOverrideDomain. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRules.property.blockOverrideTtl">BlockOverrideTtl</a></code> | <code>double</code> | BlockOverrideTtl. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRules.property.blockResponse">BlockResponse</a></code> | <code>string</code> | BlockResponse. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRules.property.confidenceThreshold">ConfidenceThreshold</a></code> | <code>string</code> | ConfidenceThreshold. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRules.property.dnsThreatProtection">DnsThreatProtection</a></code> | <code>string</code> | DnsThreatProtection. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRules.property.firewallDomainListId">FirewallDomainListId</a></code> | <code>string</code> | ResourceId. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRules.property.firewallDomainRedirectionAction">FirewallDomainRedirectionAction</a></code> | <code>string</code> | FirewallDomainRedirectionAction. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRules.property.firewallRuleType">FirewallRuleType</a></code> | <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleType">Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleType</a></code> | Advanced firewall rule type. Mutually exclusive with FirewallDomainListId and DnsThreatProtection/ConfidenceThreshold. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRules.property.firewallThreatProtectionId">FirewallThreatProtectionId</a></code> | <code>string</code> | ResourceId. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRules.property.priority">Priority</a></code> | <code>double</code> | Rule Priority. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRules.property.qtype">Qtype</a></code> | <code>string</code> | Qtype. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRules.property.status">Status</a></code> | <code>string</code> | The status of the firewall rule. |

---

##### `Action`<sup>Optional</sup> <a name="Action" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRules.property.action"></a>

```csharp
public string Action { get; set; }
```

- *Type:* string

Rule Action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53resolver_firewall_rule_group#action Route53ResolverFirewallRuleGroup#action}

---

##### `BlockOverrideDnsType`<sup>Optional</sup> <a name="BlockOverrideDnsType" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRules.property.blockOverrideDnsType"></a>

```csharp
public string BlockOverrideDnsType { get; set; }
```

- *Type:* string

BlockOverrideDnsType.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53resolver_firewall_rule_group#block_override_dns_type Route53ResolverFirewallRuleGroup#block_override_dns_type}

---

##### `BlockOverrideDomain`<sup>Optional</sup> <a name="BlockOverrideDomain" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRules.property.blockOverrideDomain"></a>

```csharp
public string BlockOverrideDomain { get; set; }
```

- *Type:* string

BlockOverrideDomain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53resolver_firewall_rule_group#block_override_domain Route53ResolverFirewallRuleGroup#block_override_domain}

---

##### `BlockOverrideTtl`<sup>Optional</sup> <a name="BlockOverrideTtl" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRules.property.blockOverrideTtl"></a>

```csharp
public double BlockOverrideTtl { get; set; }
```

- *Type:* double

BlockOverrideTtl.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53resolver_firewall_rule_group#block_override_ttl Route53ResolverFirewallRuleGroup#block_override_ttl}

---

##### `BlockResponse`<sup>Optional</sup> <a name="BlockResponse" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRules.property.blockResponse"></a>

```csharp
public string BlockResponse { get; set; }
```

- *Type:* string

BlockResponse.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53resolver_firewall_rule_group#block_response Route53ResolverFirewallRuleGroup#block_response}

---

##### `ConfidenceThreshold`<sup>Optional</sup> <a name="ConfidenceThreshold" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRules.property.confidenceThreshold"></a>

```csharp
public string ConfidenceThreshold { get; set; }
```

- *Type:* string

ConfidenceThreshold.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53resolver_firewall_rule_group#confidence_threshold Route53ResolverFirewallRuleGroup#confidence_threshold}

---

##### `DnsThreatProtection`<sup>Optional</sup> <a name="DnsThreatProtection" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRules.property.dnsThreatProtection"></a>

```csharp
public string DnsThreatProtection { get; set; }
```

- *Type:* string

DnsThreatProtection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53resolver_firewall_rule_group#dns_threat_protection Route53ResolverFirewallRuleGroup#dns_threat_protection}

---

##### `FirewallDomainListId`<sup>Optional</sup> <a name="FirewallDomainListId" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRules.property.firewallDomainListId"></a>

```csharp
public string FirewallDomainListId { get; set; }
```

- *Type:* string

ResourceId.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53resolver_firewall_rule_group#firewall_domain_list_id Route53ResolverFirewallRuleGroup#firewall_domain_list_id}

---

##### `FirewallDomainRedirectionAction`<sup>Optional</sup> <a name="FirewallDomainRedirectionAction" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRules.property.firewallDomainRedirectionAction"></a>

```csharp
public string FirewallDomainRedirectionAction { get; set; }
```

- *Type:* string

FirewallDomainRedirectionAction.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53resolver_firewall_rule_group#firewall_domain_redirection_action Route53ResolverFirewallRuleGroup#firewall_domain_redirection_action}

---

##### `FirewallRuleType`<sup>Optional</sup> <a name="FirewallRuleType" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRules.property.firewallRuleType"></a>

```csharp
public Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleType FirewallRuleType { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleType">Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleType</a>

Advanced firewall rule type. Mutually exclusive with FirewallDomainListId and DnsThreatProtection/ConfidenceThreshold.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53resolver_firewall_rule_group#firewall_rule_type Route53ResolverFirewallRuleGroup#firewall_rule_type}

---

##### `FirewallThreatProtectionId`<sup>Optional</sup> <a name="FirewallThreatProtectionId" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRules.property.firewallThreatProtectionId"></a>

```csharp
public string FirewallThreatProtectionId { get; set; }
```

- *Type:* string

ResourceId.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53resolver_firewall_rule_group#firewall_threat_protection_id Route53ResolverFirewallRuleGroup#firewall_threat_protection_id}

---

##### `Priority`<sup>Optional</sup> <a name="Priority" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRules.property.priority"></a>

```csharp
public double Priority { get; set; }
```

- *Type:* double

Rule Priority.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53resolver_firewall_rule_group#priority Route53ResolverFirewallRuleGroup#priority}

---

##### `Qtype`<sup>Optional</sup> <a name="Qtype" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRules.property.qtype"></a>

```csharp
public string Qtype { get; set; }
```

- *Type:* string

Qtype.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53resolver_firewall_rule_group#qtype Route53ResolverFirewallRuleGroup#qtype}

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRules.property.status"></a>

```csharp
public string Status { get; set; }
```

- *Type:* string

The status of the firewall rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53resolver_firewall_rule_group#status Route53ResolverFirewallRuleGroup#status}

---

### Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleType <a name="Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleType" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleType"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleType.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleType {
    Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategory FirewallAdvancedContentCategory = null,
    Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategory FirewallAdvancedThreatCategory = null,
    Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtection PartnerThreatProtection = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleType.property.firewallAdvancedContentCategory">FirewallAdvancedContentCategory</a></code> | <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategory">Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategory</a></code> | Configuration for an advanced content category rule type. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleType.property.firewallAdvancedThreatCategory">FirewallAdvancedThreatCategory</a></code> | <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategory">Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategory</a></code> | Configuration for an advanced threat category rule type. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleType.property.partnerThreatProtection">PartnerThreatProtection</a></code> | <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtection">Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtection</a></code> | Configuration for a partner threat protection rule type. |

---

##### `FirewallAdvancedContentCategory`<sup>Optional</sup> <a name="FirewallAdvancedContentCategory" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleType.property.firewallAdvancedContentCategory"></a>

```csharp
public Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategory FirewallAdvancedContentCategory { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategory">Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategory</a>

Configuration for an advanced content category rule type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53resolver_firewall_rule_group#firewall_advanced_content_category Route53ResolverFirewallRuleGroup#firewall_advanced_content_category}

---

##### `FirewallAdvancedThreatCategory`<sup>Optional</sup> <a name="FirewallAdvancedThreatCategory" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleType.property.firewallAdvancedThreatCategory"></a>

```csharp
public Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategory FirewallAdvancedThreatCategory { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategory">Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategory</a>

Configuration for an advanced threat category rule type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53resolver_firewall_rule_group#firewall_advanced_threat_category Route53ResolverFirewallRuleGroup#firewall_advanced_threat_category}

---

##### `PartnerThreatProtection`<sup>Optional</sup> <a name="PartnerThreatProtection" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleType.property.partnerThreatProtection"></a>

```csharp
public Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtection PartnerThreatProtection { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtection">Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtection</a>

Configuration for a partner threat protection rule type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53resolver_firewall_rule_group#partner_threat_protection Route53ResolverFirewallRuleGroup#partner_threat_protection}

---

### Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategory <a name="Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategory" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategory"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategory.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategory {
    string Category = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategory.property.category">Category</a></code> | <code>string</code> | The content category value. |

---

##### `Category`<sup>Optional</sup> <a name="Category" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategory.property.category"></a>

```csharp
public string Category { get; set; }
```

- *Type:* string

The content category value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53resolver_firewall_rule_group#category Route53ResolverFirewallRuleGroup#category}

---

### Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategory <a name="Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategory" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategory"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategory.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategory {
    string Category = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategory.property.category">Category</a></code> | <code>string</code> | The threat category value. |

---

##### `Category`<sup>Optional</sup> <a name="Category" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategory.property.category"></a>

```csharp
public string Category { get; set; }
```

- *Type:* string

The threat category value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53resolver_firewall_rule_group#category Route53ResolverFirewallRuleGroup#category}

---

### Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtection <a name="Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtection" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtection"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtection.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtection {
    string Partner = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtection.property.partner">Partner</a></code> | <code>string</code> | The partner identifier value. |

---

##### `Partner`<sup>Optional</sup> <a name="Partner" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtection.property.partner"></a>

```csharp
public string Partner { get; set; }
```

- *Type:* string

The partner identifier value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53resolver_firewall_rule_group#partner Route53ResolverFirewallRuleGroup#partner}

---

### Route53ResolverFirewallRuleGroupTags <a name="Route53ResolverFirewallRuleGroupTags" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Route53ResolverFirewallRuleGroupTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTags.property.key">Key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTags.property.value">Value</a></code> | <code>string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53resolver_firewall_rule_group#key Route53ResolverFirewallRuleGroup#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value for the tag.

You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53resolver_firewall_rule_group#value Route53ResolverFirewallRuleGroup#value}

---

## Classes <a name="Classes" id="Classes"></a>

### Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference <a name="Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.resetCategory">ResetCategory</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCategory` <a name="ResetCategory" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.resetCategory"></a>

```csharp
private void ResetCategory()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.property.categoryInput">CategoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.property.category">Category</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategory">Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategory</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CategoryInput`<sup>Optional</sup> <a name="CategoryInput" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.property.categoryInput"></a>

```csharp
public string CategoryInput { get; }
```

- *Type:* string

---

##### `Category`<sup>Required</sup> <a name="Category" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.property.category"></a>

```csharp
public string Category { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategory InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategory">Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategory</a>

---


### Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference <a name="Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.resetCategory">ResetCategory</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCategory` <a name="ResetCategory" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.resetCategory"></a>

```csharp
private void ResetCategory()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.property.categoryInput">CategoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.property.category">Category</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategory">Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategory</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CategoryInput`<sup>Optional</sup> <a name="CategoryInput" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.property.categoryInput"></a>

```csharp
public string CategoryInput { get; }
```

- *Type:* string

---

##### `Category`<sup>Required</sup> <a name="Category" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.property.category"></a>

```csharp
public string Category { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategory InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategory">Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategory</a>

---


### Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference <a name="Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.putFirewallAdvancedContentCategory">PutFirewallAdvancedContentCategory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.putFirewallAdvancedThreatCategory">PutFirewallAdvancedThreatCategory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.putPartnerThreatProtection">PutPartnerThreatProtection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.resetFirewallAdvancedContentCategory">ResetFirewallAdvancedContentCategory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.resetFirewallAdvancedThreatCategory">ResetFirewallAdvancedThreatCategory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.resetPartnerThreatProtection">ResetPartnerThreatProtection</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFirewallAdvancedContentCategory` <a name="PutFirewallAdvancedContentCategory" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.putFirewallAdvancedContentCategory"></a>

```csharp
private void PutFirewallAdvancedContentCategory(Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategory Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.putFirewallAdvancedContentCategory.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategory">Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategory</a>

---

##### `PutFirewallAdvancedThreatCategory` <a name="PutFirewallAdvancedThreatCategory" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.putFirewallAdvancedThreatCategory"></a>

```csharp
private void PutFirewallAdvancedThreatCategory(Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategory Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.putFirewallAdvancedThreatCategory.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategory">Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategory</a>

---

##### `PutPartnerThreatProtection` <a name="PutPartnerThreatProtection" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.putPartnerThreatProtection"></a>

```csharp
private void PutPartnerThreatProtection(Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtection Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.putPartnerThreatProtection.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtection">Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtection</a>

---

##### `ResetFirewallAdvancedContentCategory` <a name="ResetFirewallAdvancedContentCategory" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.resetFirewallAdvancedContentCategory"></a>

```csharp
private void ResetFirewallAdvancedContentCategory()
```

##### `ResetFirewallAdvancedThreatCategory` <a name="ResetFirewallAdvancedThreatCategory" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.resetFirewallAdvancedThreatCategory"></a>

```csharp
private void ResetFirewallAdvancedThreatCategory()
```

##### `ResetPartnerThreatProtection` <a name="ResetPartnerThreatProtection" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.resetPartnerThreatProtection"></a>

```csharp
private void ResetPartnerThreatProtection()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.property.firewallAdvancedContentCategory">FirewallAdvancedContentCategory</a></code> | <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference">Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.property.firewallAdvancedThreatCategory">FirewallAdvancedThreatCategory</a></code> | <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference">Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.property.partnerThreatProtection">PartnerThreatProtection</a></code> | <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference">Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.property.firewallAdvancedContentCategoryInput">FirewallAdvancedContentCategoryInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategory">Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.property.firewallAdvancedThreatCategoryInput">FirewallAdvancedThreatCategoryInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategory">Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.property.partnerThreatProtectionInput">PartnerThreatProtectionInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtection">Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleType">Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleType</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FirewallAdvancedContentCategory`<sup>Required</sup> <a name="FirewallAdvancedContentCategory" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.property.firewallAdvancedContentCategory"></a>

```csharp
public Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference FirewallAdvancedContentCategory { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference">Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference</a>

---

##### `FirewallAdvancedThreatCategory`<sup>Required</sup> <a name="FirewallAdvancedThreatCategory" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.property.firewallAdvancedThreatCategory"></a>

```csharp
public Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference FirewallAdvancedThreatCategory { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference">Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference</a>

---

##### `PartnerThreatProtection`<sup>Required</sup> <a name="PartnerThreatProtection" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.property.partnerThreatProtection"></a>

```csharp
public Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference PartnerThreatProtection { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference">Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference</a>

---

##### `FirewallAdvancedContentCategoryInput`<sup>Optional</sup> <a name="FirewallAdvancedContentCategoryInput" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.property.firewallAdvancedContentCategoryInput"></a>

```csharp
public IResolvable|Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategory FirewallAdvancedContentCategoryInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategory">Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategory</a>

---

##### `FirewallAdvancedThreatCategoryInput`<sup>Optional</sup> <a name="FirewallAdvancedThreatCategoryInput" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.property.firewallAdvancedThreatCategoryInput"></a>

```csharp
public IResolvable|Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategory FirewallAdvancedThreatCategoryInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategory">Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategory</a>

---

##### `PartnerThreatProtectionInput`<sup>Optional</sup> <a name="PartnerThreatProtectionInput" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.property.partnerThreatProtectionInput"></a>

```csharp
public IResolvable|Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtection PartnerThreatProtectionInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtection">Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtection</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleType InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleType">Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleType</a>

---


### Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference <a name="Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.resetPartner">ResetPartner</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPartner` <a name="ResetPartner" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.resetPartner"></a>

```csharp
private void ResetPartner()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.property.partnerInput">PartnerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.property.partner">Partner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtection">Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PartnerInput`<sup>Optional</sup> <a name="PartnerInput" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.property.partnerInput"></a>

```csharp
public string PartnerInput { get; }
```

- *Type:* string

---

##### `Partner`<sup>Required</sup> <a name="Partner" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.property.partner"></a>

```csharp
public string Partner { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtection InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtection">Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtection</a>

---


### Route53ResolverFirewallRuleGroupFirewallRulesList <a name="Route53ResolverFirewallRuleGroupFirewallRulesList" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Route53ResolverFirewallRuleGroupFirewallRulesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesList.get"></a>

```csharp
private Route53ResolverFirewallRuleGroupFirewallRulesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRules">Route53ResolverFirewallRuleGroupFirewallRules</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesList.property.internalValue"></a>

```csharp
public IResolvable|Route53ResolverFirewallRuleGroupFirewallRules[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRules">Route53ResolverFirewallRuleGroupFirewallRules</a>[]

---


### Route53ResolverFirewallRuleGroupFirewallRulesOutputReference <a name="Route53ResolverFirewallRuleGroupFirewallRulesOutputReference" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Route53ResolverFirewallRuleGroupFirewallRulesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.putFirewallRuleType">PutFirewallRuleType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.resetAction">ResetAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.resetBlockOverrideDnsType">ResetBlockOverrideDnsType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.resetBlockOverrideDomain">ResetBlockOverrideDomain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.resetBlockOverrideTtl">ResetBlockOverrideTtl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.resetBlockResponse">ResetBlockResponse</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.resetConfidenceThreshold">ResetConfidenceThreshold</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.resetDnsThreatProtection">ResetDnsThreatProtection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.resetFirewallDomainListId">ResetFirewallDomainListId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.resetFirewallDomainRedirectionAction">ResetFirewallDomainRedirectionAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.resetFirewallRuleType">ResetFirewallRuleType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.resetFirewallThreatProtectionId">ResetFirewallThreatProtectionId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.resetPriority">ResetPriority</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.resetQtype">ResetQtype</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.resetStatus">ResetStatus</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFirewallRuleType` <a name="PutFirewallRuleType" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.putFirewallRuleType"></a>

```csharp
private void PutFirewallRuleType(Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleType Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.putFirewallRuleType.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleType">Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleType</a>

---

##### `ResetAction` <a name="ResetAction" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.resetAction"></a>

```csharp
private void ResetAction()
```

##### `ResetBlockOverrideDnsType` <a name="ResetBlockOverrideDnsType" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.resetBlockOverrideDnsType"></a>

```csharp
private void ResetBlockOverrideDnsType()
```

##### `ResetBlockOverrideDomain` <a name="ResetBlockOverrideDomain" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.resetBlockOverrideDomain"></a>

```csharp
private void ResetBlockOverrideDomain()
```

##### `ResetBlockOverrideTtl` <a name="ResetBlockOverrideTtl" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.resetBlockOverrideTtl"></a>

```csharp
private void ResetBlockOverrideTtl()
```

##### `ResetBlockResponse` <a name="ResetBlockResponse" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.resetBlockResponse"></a>

```csharp
private void ResetBlockResponse()
```

##### `ResetConfidenceThreshold` <a name="ResetConfidenceThreshold" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.resetConfidenceThreshold"></a>

```csharp
private void ResetConfidenceThreshold()
```

##### `ResetDnsThreatProtection` <a name="ResetDnsThreatProtection" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.resetDnsThreatProtection"></a>

```csharp
private void ResetDnsThreatProtection()
```

##### `ResetFirewallDomainListId` <a name="ResetFirewallDomainListId" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.resetFirewallDomainListId"></a>

```csharp
private void ResetFirewallDomainListId()
```

##### `ResetFirewallDomainRedirectionAction` <a name="ResetFirewallDomainRedirectionAction" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.resetFirewallDomainRedirectionAction"></a>

```csharp
private void ResetFirewallDomainRedirectionAction()
```

##### `ResetFirewallRuleType` <a name="ResetFirewallRuleType" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.resetFirewallRuleType"></a>

```csharp
private void ResetFirewallRuleType()
```

##### `ResetFirewallThreatProtectionId` <a name="ResetFirewallThreatProtectionId" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.resetFirewallThreatProtectionId"></a>

```csharp
private void ResetFirewallThreatProtectionId()
```

##### `ResetPriority` <a name="ResetPriority" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.resetPriority"></a>

```csharp
private void ResetPriority()
```

##### `ResetQtype` <a name="ResetQtype" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.resetQtype"></a>

```csharp
private void ResetQtype()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.resetStatus"></a>

```csharp
private void ResetStatus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.firewallRuleType">FirewallRuleType</a></code> | <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference">Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.actionInput">ActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.blockOverrideDnsTypeInput">BlockOverrideDnsTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.blockOverrideDomainInput">BlockOverrideDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.blockOverrideTtlInput">BlockOverrideTtlInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.blockResponseInput">BlockResponseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.confidenceThresholdInput">ConfidenceThresholdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.dnsThreatProtectionInput">DnsThreatProtectionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.firewallDomainListIdInput">FirewallDomainListIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.firewallDomainRedirectionActionInput">FirewallDomainRedirectionActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.firewallRuleTypeInput">FirewallRuleTypeInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleType">Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.firewallThreatProtectionIdInput">FirewallThreatProtectionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.priorityInput">PriorityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.qtypeInput">QtypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.statusInput">StatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.action">Action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.blockOverrideDnsType">BlockOverrideDnsType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.blockOverrideDomain">BlockOverrideDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.blockOverrideTtl">BlockOverrideTtl</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.blockResponse">BlockResponse</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.confidenceThreshold">ConfidenceThreshold</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.dnsThreatProtection">DnsThreatProtection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.firewallDomainListId">FirewallDomainListId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.firewallDomainRedirectionAction">FirewallDomainRedirectionAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.firewallThreatProtectionId">FirewallThreatProtectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.priority">Priority</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.qtype">Qtype</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRules">Route53ResolverFirewallRuleGroupFirewallRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FirewallRuleType`<sup>Required</sup> <a name="FirewallRuleType" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.firewallRuleType"></a>

```csharp
public Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference FirewallRuleType { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference">Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference</a>

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.actionInput"></a>

```csharp
public string ActionInput { get; }
```

- *Type:* string

---

##### `BlockOverrideDnsTypeInput`<sup>Optional</sup> <a name="BlockOverrideDnsTypeInput" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.blockOverrideDnsTypeInput"></a>

```csharp
public string BlockOverrideDnsTypeInput { get; }
```

- *Type:* string

---

##### `BlockOverrideDomainInput`<sup>Optional</sup> <a name="BlockOverrideDomainInput" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.blockOverrideDomainInput"></a>

```csharp
public string BlockOverrideDomainInput { get; }
```

- *Type:* string

---

##### `BlockOverrideTtlInput`<sup>Optional</sup> <a name="BlockOverrideTtlInput" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.blockOverrideTtlInput"></a>

```csharp
public double BlockOverrideTtlInput { get; }
```

- *Type:* double

---

##### `BlockResponseInput`<sup>Optional</sup> <a name="BlockResponseInput" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.blockResponseInput"></a>

```csharp
public string BlockResponseInput { get; }
```

- *Type:* string

---

##### `ConfidenceThresholdInput`<sup>Optional</sup> <a name="ConfidenceThresholdInput" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.confidenceThresholdInput"></a>

```csharp
public string ConfidenceThresholdInput { get; }
```

- *Type:* string

---

##### `DnsThreatProtectionInput`<sup>Optional</sup> <a name="DnsThreatProtectionInput" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.dnsThreatProtectionInput"></a>

```csharp
public string DnsThreatProtectionInput { get; }
```

- *Type:* string

---

##### `FirewallDomainListIdInput`<sup>Optional</sup> <a name="FirewallDomainListIdInput" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.firewallDomainListIdInput"></a>

```csharp
public string FirewallDomainListIdInput { get; }
```

- *Type:* string

---

##### `FirewallDomainRedirectionActionInput`<sup>Optional</sup> <a name="FirewallDomainRedirectionActionInput" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.firewallDomainRedirectionActionInput"></a>

```csharp
public string FirewallDomainRedirectionActionInput { get; }
```

- *Type:* string

---

##### `FirewallRuleTypeInput`<sup>Optional</sup> <a name="FirewallRuleTypeInput" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.firewallRuleTypeInput"></a>

```csharp
public IResolvable|Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleType FirewallRuleTypeInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleType">Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleType</a>

---

##### `FirewallThreatProtectionIdInput`<sup>Optional</sup> <a name="FirewallThreatProtectionIdInput" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.firewallThreatProtectionIdInput"></a>

```csharp
public string FirewallThreatProtectionIdInput { get; }
```

- *Type:* string

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.priorityInput"></a>

```csharp
public double PriorityInput { get; }
```

- *Type:* double

---

##### `QtypeInput`<sup>Optional</sup> <a name="QtypeInput" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.qtypeInput"></a>

```csharp
public string QtypeInput { get; }
```

- *Type:* string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.statusInput"></a>

```csharp
public string StatusInput { get; }
```

- *Type:* string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.action"></a>

```csharp
public string Action { get; }
```

- *Type:* string

---

##### `BlockOverrideDnsType`<sup>Required</sup> <a name="BlockOverrideDnsType" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.blockOverrideDnsType"></a>

```csharp
public string BlockOverrideDnsType { get; }
```

- *Type:* string

---

##### `BlockOverrideDomain`<sup>Required</sup> <a name="BlockOverrideDomain" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.blockOverrideDomain"></a>

```csharp
public string BlockOverrideDomain { get; }
```

- *Type:* string

---

##### `BlockOverrideTtl`<sup>Required</sup> <a name="BlockOverrideTtl" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.blockOverrideTtl"></a>

```csharp
public double BlockOverrideTtl { get; }
```

- *Type:* double

---

##### `BlockResponse`<sup>Required</sup> <a name="BlockResponse" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.blockResponse"></a>

```csharp
public string BlockResponse { get; }
```

- *Type:* string

---

##### `ConfidenceThreshold`<sup>Required</sup> <a name="ConfidenceThreshold" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.confidenceThreshold"></a>

```csharp
public string ConfidenceThreshold { get; }
```

- *Type:* string

---

##### `DnsThreatProtection`<sup>Required</sup> <a name="DnsThreatProtection" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.dnsThreatProtection"></a>

```csharp
public string DnsThreatProtection { get; }
```

- *Type:* string

---

##### `FirewallDomainListId`<sup>Required</sup> <a name="FirewallDomainListId" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.firewallDomainListId"></a>

```csharp
public string FirewallDomainListId { get; }
```

- *Type:* string

---

##### `FirewallDomainRedirectionAction`<sup>Required</sup> <a name="FirewallDomainRedirectionAction" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.firewallDomainRedirectionAction"></a>

```csharp
public string FirewallDomainRedirectionAction { get; }
```

- *Type:* string

---

##### `FirewallThreatProtectionId`<sup>Required</sup> <a name="FirewallThreatProtectionId" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.firewallThreatProtectionId"></a>

```csharp
public string FirewallThreatProtectionId { get; }
```

- *Type:* string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.priority"></a>

```csharp
public double Priority { get; }
```

- *Type:* double

---

##### `Qtype`<sup>Required</sup> <a name="Qtype" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.qtype"></a>

```csharp
public string Qtype { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Route53ResolverFirewallRuleGroupFirewallRules InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRules">Route53ResolverFirewallRuleGroupFirewallRules</a>

---


### Route53ResolverFirewallRuleGroupTagsList <a name="Route53ResolverFirewallRuleGroupTagsList" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Route53ResolverFirewallRuleGroupTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsList.get"></a>

```csharp
private Route53ResolverFirewallRuleGroupTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTags">Route53ResolverFirewallRuleGroupTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsList.property.internalValue"></a>

```csharp
public IResolvable|Route53ResolverFirewallRuleGroupTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTags">Route53ResolverFirewallRuleGroupTags</a>[]

---


### Route53ResolverFirewallRuleGroupTagsOutputReference <a name="Route53ResolverFirewallRuleGroupTagsOutputReference" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Route53ResolverFirewallRuleGroupTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTags">Route53ResolverFirewallRuleGroupTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Route53ResolverFirewallRuleGroupTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTags">Route53ResolverFirewallRuleGroupTags</a>

---



