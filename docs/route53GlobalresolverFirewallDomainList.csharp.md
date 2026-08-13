# `route53GlobalresolverFirewallDomainList` Submodule <a name="`route53GlobalresolverFirewallDomainList` Submodule" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Route53GlobalresolverFirewallDomainList <a name="Route53GlobalresolverFirewallDomainList" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53globalresolver_firewall_domain_list awscc_route53globalresolver_firewall_domain_list}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Route53GlobalresolverFirewallDomainList(Construct Scope, string Id, Route53GlobalresolverFirewallDomainListConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListConfig">Route53GlobalresolverFirewallDomainListConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListConfig">Route53GlobalresolverFirewallDomainListConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.resetClientToken">ResetClientToken</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.resetDomainFileUrl">ResetDomainFileUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.resetDomains">ResetDomains</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.putTags"></a>

```csharp
private void PutTags(IResolvable|Route53GlobalresolverFirewallDomainListTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTags">Route53GlobalresolverFirewallDomainListTags</a>[]

---

##### `ResetClientToken` <a name="ResetClientToken" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.resetClientToken"></a>

```csharp
private void ResetClientToken()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDomainFileUrl` <a name="ResetDomainFileUrl" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.resetDomainFileUrl"></a>

```csharp
private void ResetDomainFileUrl()
```

##### `ResetDomains` <a name="ResetDomains" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.resetDomains"></a>

```csharp
private void ResetDomains()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a Route53GlobalresolverFirewallDomainList resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Route53GlobalresolverFirewallDomainList.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Route53GlobalresolverFirewallDomainList.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Route53GlobalresolverFirewallDomainList.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Route53GlobalresolverFirewallDomainList.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a Route53GlobalresolverFirewallDomainList resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Route53GlobalresolverFirewallDomainList to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Route53GlobalresolverFirewallDomainList that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53globalresolver_firewall_domain_list#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the Route53GlobalresolverFirewallDomainList to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.property.domainCount">DomainCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.property.firewallDomainListId">FirewallDomainListId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.property.statusMessage">StatusMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTagsList">Route53GlobalresolverFirewallDomainListTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.property.clientTokenInput">ClientTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.property.domainFileUrlInput">DomainFileUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.property.domainsInput">DomainsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.property.globalResolverIdInput">GlobalResolverIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTags">Route53GlobalresolverFirewallDomainListTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.property.clientToken">ClientToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.property.domainFileUrl">DomainFileUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.property.domains">Domains</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.property.globalResolverId">GlobalResolverId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `DomainCount`<sup>Required</sup> <a name="DomainCount" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.property.domainCount"></a>

```csharp
public double DomainCount { get; }
```

- *Type:* double

---

##### `FirewallDomainListId`<sup>Required</sup> <a name="FirewallDomainListId" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.property.firewallDomainListId"></a>

```csharp
public string FirewallDomainListId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `StatusMessage`<sup>Required</sup> <a name="StatusMessage" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.property.statusMessage"></a>

```csharp
public string StatusMessage { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.property.tags"></a>

```csharp
public Route53GlobalresolverFirewallDomainListTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTagsList">Route53GlobalresolverFirewallDomainListTagsList</a>

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `ClientTokenInput`<sup>Optional</sup> <a name="ClientTokenInput" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.property.clientTokenInput"></a>

```csharp
public string ClientTokenInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DomainFileUrlInput`<sup>Optional</sup> <a name="DomainFileUrlInput" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.property.domainFileUrlInput"></a>

```csharp
public string DomainFileUrlInput { get; }
```

- *Type:* string

---

##### `DomainsInput`<sup>Optional</sup> <a name="DomainsInput" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.property.domainsInput"></a>

```csharp
public string[] DomainsInput { get; }
```

- *Type:* string[]

---

##### `GlobalResolverIdInput`<sup>Optional</sup> <a name="GlobalResolverIdInput" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.property.globalResolverIdInput"></a>

```csharp
public string GlobalResolverIdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.property.tagsInput"></a>

```csharp
public IResolvable|Route53GlobalresolverFirewallDomainListTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTags">Route53GlobalresolverFirewallDomainListTags</a>[]

---

##### `ClientToken`<sup>Required</sup> <a name="ClientToken" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.property.clientToken"></a>

```csharp
public string ClientToken { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DomainFileUrl`<sup>Required</sup> <a name="DomainFileUrl" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.property.domainFileUrl"></a>

```csharp
public string DomainFileUrl { get; }
```

- *Type:* string

---

##### `Domains`<sup>Required</sup> <a name="Domains" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.property.domains"></a>

```csharp
public string[] Domains { get; }
```

- *Type:* string[]

---

##### `GlobalResolverId`<sup>Required</sup> <a name="GlobalResolverId" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.property.globalResolverId"></a>

```csharp
public string GlobalResolverId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Route53GlobalresolverFirewallDomainListConfig <a name="Route53GlobalresolverFirewallDomainListConfig" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Route53GlobalresolverFirewallDomainListConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string GlobalResolverId,
    string Name,
    string ClientToken = null,
    string Description = null,
    string DomainFileUrl = null,
    string[] Domains = null,
    IResolvable|Route53GlobalresolverFirewallDomainListTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListConfig.property.globalResolverId">GlobalResolverId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53globalresolver_firewall_domain_list#global_resolver_id Route53GlobalresolverFirewallDomainList#global_resolver_id}. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53globalresolver_firewall_domain_list#name Route53GlobalresolverFirewallDomainList#name}. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListConfig.property.clientToken">ClientToken</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53globalresolver_firewall_domain_list#client_token Route53GlobalresolverFirewallDomainList#client_token}. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53globalresolver_firewall_domain_list#description Route53GlobalresolverFirewallDomainList#description}. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListConfig.property.domainFileUrl">DomainFileUrl</a></code> | <code>string</code> | S3 URL to import domains from. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListConfig.property.domains">Domains</a></code> | <code>string[]</code> | An inline list of domains to use for this domain list. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTags">Route53GlobalresolverFirewallDomainListTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53globalresolver_firewall_domain_list#tags Route53GlobalresolverFirewallDomainList#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `GlobalResolverId`<sup>Required</sup> <a name="GlobalResolverId" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListConfig.property.globalResolverId"></a>

```csharp
public string GlobalResolverId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53globalresolver_firewall_domain_list#global_resolver_id Route53GlobalresolverFirewallDomainList#global_resolver_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53globalresolver_firewall_domain_list#name Route53GlobalresolverFirewallDomainList#name}.

---

##### `ClientToken`<sup>Optional</sup> <a name="ClientToken" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListConfig.property.clientToken"></a>

```csharp
public string ClientToken { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53globalresolver_firewall_domain_list#client_token Route53GlobalresolverFirewallDomainList#client_token}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53globalresolver_firewall_domain_list#description Route53GlobalresolverFirewallDomainList#description}.

---

##### `DomainFileUrl`<sup>Optional</sup> <a name="DomainFileUrl" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListConfig.property.domainFileUrl"></a>

```csharp
public string DomainFileUrl { get; set; }
```

- *Type:* string

S3 URL to import domains from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53globalresolver_firewall_domain_list#domain_file_url Route53GlobalresolverFirewallDomainList#domain_file_url}

---

##### `Domains`<sup>Optional</sup> <a name="Domains" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListConfig.property.domains"></a>

```csharp
public string[] Domains { get; set; }
```

- *Type:* string[]

An inline list of domains to use for this domain list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53globalresolver_firewall_domain_list#domains Route53GlobalresolverFirewallDomainList#domains}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListConfig.property.tags"></a>

```csharp
public IResolvable|Route53GlobalresolverFirewallDomainListTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTags">Route53GlobalresolverFirewallDomainListTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53globalresolver_firewall_domain_list#tags Route53GlobalresolverFirewallDomainList#tags}.

---

### Route53GlobalresolverFirewallDomainListTags <a name="Route53GlobalresolverFirewallDomainListTags" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Route53GlobalresolverFirewallDomainListTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTags.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53globalresolver_firewall_domain_list#key Route53GlobalresolverFirewallDomainList#key}. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTags.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53globalresolver_firewall_domain_list#value Route53GlobalresolverFirewallDomainList#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53globalresolver_firewall_domain_list#key Route53GlobalresolverFirewallDomainList#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53globalresolver_firewall_domain_list#value Route53GlobalresolverFirewallDomainList#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### Route53GlobalresolverFirewallDomainListTagsList <a name="Route53GlobalresolverFirewallDomainListTagsList" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Route53GlobalresolverFirewallDomainListTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTagsList.get"></a>

```csharp
private Route53GlobalresolverFirewallDomainListTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTags">Route53GlobalresolverFirewallDomainListTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTagsList.property.internalValue"></a>

```csharp
public IResolvable|Route53GlobalresolverFirewallDomainListTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTags">Route53GlobalresolverFirewallDomainListTags</a>[]

---


### Route53GlobalresolverFirewallDomainListTagsOutputReference <a name="Route53GlobalresolverFirewallDomainListTagsOutputReference" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Route53GlobalresolverFirewallDomainListTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTags">Route53GlobalresolverFirewallDomainListTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Route53GlobalresolverFirewallDomainListTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTags">Route53GlobalresolverFirewallDomainListTags</a>

---



