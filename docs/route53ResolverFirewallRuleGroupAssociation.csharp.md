# `route53ResolverFirewallRuleGroupAssociation` Submodule <a name="`route53ResolverFirewallRuleGroupAssociation` Submodule" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Route53ResolverFirewallRuleGroupAssociation <a name="Route53ResolverFirewallRuleGroupAssociation" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53resolver_firewall_rule_group_association awscc_route53resolver_firewall_rule_group_association}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Route53ResolverFirewallRuleGroupAssociation(Construct Scope, string Id, Route53ResolverFirewallRuleGroupAssociationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationConfig">Route53ResolverFirewallRuleGroupAssociationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationConfig">Route53ResolverFirewallRuleGroupAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.resetMutationProtection">ResetMutationProtection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.putTags"></a>

```csharp
private void PutTags(IResolvable|Route53ResolverFirewallRuleGroupAssociationTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTags">Route53ResolverFirewallRuleGroupAssociationTags</a>[]

---

##### `ResetMutationProtection` <a name="ResetMutationProtection" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.resetMutationProtection"></a>

```csharp
private void ResetMutationProtection()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a Route53ResolverFirewallRuleGroupAssociation resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Route53ResolverFirewallRuleGroupAssociation.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Route53ResolverFirewallRuleGroupAssociation.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Route53ResolverFirewallRuleGroupAssociation.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Route53ResolverFirewallRuleGroupAssociation.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a Route53ResolverFirewallRuleGroupAssociation resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Route53ResolverFirewallRuleGroupAssociation to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Route53ResolverFirewallRuleGroupAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53resolver_firewall_rule_group_association#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the Route53ResolverFirewallRuleGroupAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.creationTime">CreationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.creatorRequestId">CreatorRequestId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.firewallRuleGroupAssociationId">FirewallRuleGroupAssociationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.managedOwnerName">ManagedOwnerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.modificationTime">ModificationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.statusMessage">StatusMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTagsList">Route53ResolverFirewallRuleGroupAssociationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.firewallRuleGroupIdInput">FirewallRuleGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.mutationProtectionInput">MutationProtectionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.priorityInput">PriorityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTags">Route53ResolverFirewallRuleGroupAssociationTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.vpcIdInput">VpcIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.firewallRuleGroupId">FirewallRuleGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.mutationProtection">MutationProtection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.priority">Priority</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.vpcId">VpcId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.creationTime"></a>

```csharp
public string CreationTime { get; }
```

- *Type:* string

---

##### `CreatorRequestId`<sup>Required</sup> <a name="CreatorRequestId" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.creatorRequestId"></a>

```csharp
public string CreatorRequestId { get; }
```

- *Type:* string

---

##### `FirewallRuleGroupAssociationId`<sup>Required</sup> <a name="FirewallRuleGroupAssociationId" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.firewallRuleGroupAssociationId"></a>

```csharp
public string FirewallRuleGroupAssociationId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ManagedOwnerName`<sup>Required</sup> <a name="ManagedOwnerName" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.managedOwnerName"></a>

```csharp
public string ManagedOwnerName { get; }
```

- *Type:* string

---

##### `ModificationTime`<sup>Required</sup> <a name="ModificationTime" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.modificationTime"></a>

```csharp
public string ModificationTime { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `StatusMessage`<sup>Required</sup> <a name="StatusMessage" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.statusMessage"></a>

```csharp
public string StatusMessage { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.tags"></a>

```csharp
public Route53ResolverFirewallRuleGroupAssociationTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTagsList">Route53ResolverFirewallRuleGroupAssociationTagsList</a>

---

##### `FirewallRuleGroupIdInput`<sup>Optional</sup> <a name="FirewallRuleGroupIdInput" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.firewallRuleGroupIdInput"></a>

```csharp
public string FirewallRuleGroupIdInput { get; }
```

- *Type:* string

---

##### `MutationProtectionInput`<sup>Optional</sup> <a name="MutationProtectionInput" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.mutationProtectionInput"></a>

```csharp
public string MutationProtectionInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.priorityInput"></a>

```csharp
public double PriorityInput { get; }
```

- *Type:* double

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.tagsInput"></a>

```csharp
public IResolvable|Route53ResolverFirewallRuleGroupAssociationTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTags">Route53ResolverFirewallRuleGroupAssociationTags</a>[]

---

##### `VpcIdInput`<sup>Optional</sup> <a name="VpcIdInput" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.vpcIdInput"></a>

```csharp
public string VpcIdInput { get; }
```

- *Type:* string

---

##### `FirewallRuleGroupId`<sup>Required</sup> <a name="FirewallRuleGroupId" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.firewallRuleGroupId"></a>

```csharp
public string FirewallRuleGroupId { get; }
```

- *Type:* string

---

##### `MutationProtection`<sup>Required</sup> <a name="MutationProtection" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.mutationProtection"></a>

```csharp
public string MutationProtection { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.priority"></a>

```csharp
public double Priority { get; }
```

- *Type:* double

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.vpcId"></a>

```csharp
public string VpcId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Route53ResolverFirewallRuleGroupAssociationConfig <a name="Route53ResolverFirewallRuleGroupAssociationConfig" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Route53ResolverFirewallRuleGroupAssociationConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string FirewallRuleGroupId,
    double Priority,
    string VpcId,
    string MutationProtection = null,
    string Name = null,
    IResolvable|Route53ResolverFirewallRuleGroupAssociationTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationConfig.property.firewallRuleGroupId">FirewallRuleGroupId</a></code> | <code>string</code> | FirewallRuleGroupId. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationConfig.property.priority">Priority</a></code> | <code>double</code> | Priority. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationConfig.property.vpcId">VpcId</a></code> | <code>string</code> | VpcId. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationConfig.property.mutationProtection">MutationProtection</a></code> | <code>string</code> | MutationProtectionStatus. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationConfig.property.name">Name</a></code> | <code>string</code> | FirewallRuleGroupAssociationName. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTags">Route53ResolverFirewallRuleGroupAssociationTags</a>[]</code> | Tags. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `FirewallRuleGroupId`<sup>Required</sup> <a name="FirewallRuleGroupId" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationConfig.property.firewallRuleGroupId"></a>

```csharp
public string FirewallRuleGroupId { get; set; }
```

- *Type:* string

FirewallRuleGroupId.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53resolver_firewall_rule_group_association#firewall_rule_group_id Route53ResolverFirewallRuleGroupAssociation#firewall_rule_group_id}

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationConfig.property.priority"></a>

```csharp
public double Priority { get; set; }
```

- *Type:* double

Priority.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53resolver_firewall_rule_group_association#priority Route53ResolverFirewallRuleGroupAssociation#priority}

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationConfig.property.vpcId"></a>

```csharp
public string VpcId { get; set; }
```

- *Type:* string

VpcId.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53resolver_firewall_rule_group_association#vpc_id Route53ResolverFirewallRuleGroupAssociation#vpc_id}

---

##### `MutationProtection`<sup>Optional</sup> <a name="MutationProtection" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationConfig.property.mutationProtection"></a>

```csharp
public string MutationProtection { get; set; }
```

- *Type:* string

MutationProtectionStatus.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53resolver_firewall_rule_group_association#mutation_protection Route53ResolverFirewallRuleGroupAssociation#mutation_protection}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

FirewallRuleGroupAssociationName.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53resolver_firewall_rule_group_association#name Route53ResolverFirewallRuleGroupAssociation#name}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationConfig.property.tags"></a>

```csharp
public IResolvable|Route53ResolverFirewallRuleGroupAssociationTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTags">Route53ResolverFirewallRuleGroupAssociationTags</a>[]

Tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53resolver_firewall_rule_group_association#tags Route53ResolverFirewallRuleGroupAssociation#tags}

---

### Route53ResolverFirewallRuleGroupAssociationTags <a name="Route53ResolverFirewallRuleGroupAssociationTags" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Route53ResolverFirewallRuleGroupAssociationTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTags.property.key">Key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTags.property.value">Value</a></code> | <code>string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53resolver_firewall_rule_group_association#key Route53ResolverFirewallRuleGroupAssociation#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value for the tag.

You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53resolver_firewall_rule_group_association#value Route53ResolverFirewallRuleGroupAssociation#value}

---

## Classes <a name="Classes" id="Classes"></a>

### Route53ResolverFirewallRuleGroupAssociationTagsList <a name="Route53ResolverFirewallRuleGroupAssociationTagsList" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Route53ResolverFirewallRuleGroupAssociationTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTagsList.get"></a>

```csharp
private Route53ResolverFirewallRuleGroupAssociationTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTags">Route53ResolverFirewallRuleGroupAssociationTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTagsList.property.internalValue"></a>

```csharp
public IResolvable|Route53ResolverFirewallRuleGroupAssociationTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTags">Route53ResolverFirewallRuleGroupAssociationTags</a>[]

---


### Route53ResolverFirewallRuleGroupAssociationTagsOutputReference <a name="Route53ResolverFirewallRuleGroupAssociationTagsOutputReference" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Route53ResolverFirewallRuleGroupAssociationTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTags">Route53ResolverFirewallRuleGroupAssociationTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Route53ResolverFirewallRuleGroupAssociationTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationTags">Route53ResolverFirewallRuleGroupAssociationTags</a>

---



