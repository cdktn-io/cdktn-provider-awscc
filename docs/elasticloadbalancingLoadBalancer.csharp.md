# `elasticloadbalancingLoadBalancer` Submodule <a name="`elasticloadbalancingLoadBalancer` Submodule" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ElasticloadbalancingLoadBalancer <a name="ElasticloadbalancingLoadBalancer" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancing_load_balancer awscc_elasticloadbalancing_load_balancer}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ElasticloadbalancingLoadBalancer(Construct Scope, string Id, ElasticloadbalancingLoadBalancerConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConfig">ElasticloadbalancingLoadBalancerConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConfig">ElasticloadbalancingLoadBalancerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.putAccessLoggingPolicy">PutAccessLoggingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.putAppCookieStickinessPolicy">PutAppCookieStickinessPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.putConnectionDrainingPolicy">PutConnectionDrainingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.putConnectionSettings">PutConnectionSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.putHealthCheck">PutHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.putLbCookieStickinessPolicy">PutLbCookieStickinessPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.putListeners">PutListeners</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.putPolicies">PutPolicies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.resetAccessLoggingPolicy">ResetAccessLoggingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.resetAppCookieStickinessPolicy">ResetAppCookieStickinessPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.resetAvailabilityZones">ResetAvailabilityZones</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.resetConnectionDrainingPolicy">ResetConnectionDrainingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.resetConnectionSettings">ResetConnectionSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.resetCrossZone">ResetCrossZone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.resetHealthCheck">ResetHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.resetInstances">ResetInstances</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.resetLbCookieStickinessPolicy">ResetLbCookieStickinessPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.resetLoadBalancerName">ResetLoadBalancerName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.resetPolicies">ResetPolicies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.resetScheme">ResetScheme</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.resetSecurityGroups">ResetSecurityGroups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.resetSubnets">ResetSubnets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAccessLoggingPolicy` <a name="PutAccessLoggingPolicy" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.putAccessLoggingPolicy"></a>

```csharp
private void PutAccessLoggingPolicy(ElasticloadbalancingLoadBalancerAccessLoggingPolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.putAccessLoggingPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicy">ElasticloadbalancingLoadBalancerAccessLoggingPolicy</a>

---

##### `PutAppCookieStickinessPolicy` <a name="PutAppCookieStickinessPolicy" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.putAppCookieStickinessPolicy"></a>

```csharp
private void PutAppCookieStickinessPolicy(IResolvable|ElasticloadbalancingLoadBalancerAppCookieStickinessPolicy[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.putAppCookieStickinessPolicy.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicy">ElasticloadbalancingLoadBalancerAppCookieStickinessPolicy</a>[]

---

##### `PutConnectionDrainingPolicy` <a name="PutConnectionDrainingPolicy" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.putConnectionDrainingPolicy"></a>

```csharp
private void PutConnectionDrainingPolicy(ElasticloadbalancingLoadBalancerConnectionDrainingPolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.putConnectionDrainingPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicy">ElasticloadbalancingLoadBalancerConnectionDrainingPolicy</a>

---

##### `PutConnectionSettings` <a name="PutConnectionSettings" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.putConnectionSettings"></a>

```csharp
private void PutConnectionSettings(ElasticloadbalancingLoadBalancerConnectionSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.putConnectionSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettings">ElasticloadbalancingLoadBalancerConnectionSettings</a>

---

##### `PutHealthCheck` <a name="PutHealthCheck" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.putHealthCheck"></a>

```csharp
private void PutHealthCheck(ElasticloadbalancingLoadBalancerHealthCheck Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.putHealthCheck.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheck">ElasticloadbalancingLoadBalancerHealthCheck</a>

---

##### `PutLbCookieStickinessPolicy` <a name="PutLbCookieStickinessPolicy" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.putLbCookieStickinessPolicy"></a>

```csharp
private void PutLbCookieStickinessPolicy(IResolvable|ElasticloadbalancingLoadBalancerLbCookieStickinessPolicy[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.putLbCookieStickinessPolicy.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicy">ElasticloadbalancingLoadBalancerLbCookieStickinessPolicy</a>[]

---

##### `PutListeners` <a name="PutListeners" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.putListeners"></a>

```csharp
private void PutListeners(IResolvable|ElasticloadbalancingLoadBalancerListeners[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.putListeners.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListeners">ElasticloadbalancingLoadBalancerListeners</a>[]

---

##### `PutPolicies` <a name="PutPolicies" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.putPolicies"></a>

```csharp
private void PutPolicies(IResolvable|ElasticloadbalancingLoadBalancerPolicies[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.putPolicies.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPolicies">ElasticloadbalancingLoadBalancerPolicies</a>[]

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.putTags"></a>

```csharp
private void PutTags(IResolvable|ElasticloadbalancingLoadBalancerTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTags">ElasticloadbalancingLoadBalancerTags</a>[]

---

##### `ResetAccessLoggingPolicy` <a name="ResetAccessLoggingPolicy" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.resetAccessLoggingPolicy"></a>

```csharp
private void ResetAccessLoggingPolicy()
```

##### `ResetAppCookieStickinessPolicy` <a name="ResetAppCookieStickinessPolicy" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.resetAppCookieStickinessPolicy"></a>

```csharp
private void ResetAppCookieStickinessPolicy()
```

##### `ResetAvailabilityZones` <a name="ResetAvailabilityZones" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.resetAvailabilityZones"></a>

```csharp
private void ResetAvailabilityZones()
```

##### `ResetConnectionDrainingPolicy` <a name="ResetConnectionDrainingPolicy" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.resetConnectionDrainingPolicy"></a>

```csharp
private void ResetConnectionDrainingPolicy()
```

##### `ResetConnectionSettings` <a name="ResetConnectionSettings" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.resetConnectionSettings"></a>

```csharp
private void ResetConnectionSettings()
```

##### `ResetCrossZone` <a name="ResetCrossZone" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.resetCrossZone"></a>

```csharp
private void ResetCrossZone()
```

##### `ResetHealthCheck` <a name="ResetHealthCheck" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.resetHealthCheck"></a>

```csharp
private void ResetHealthCheck()
```

##### `ResetInstances` <a name="ResetInstances" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.resetInstances"></a>

```csharp
private void ResetInstances()
```

##### `ResetLbCookieStickinessPolicy` <a name="ResetLbCookieStickinessPolicy" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.resetLbCookieStickinessPolicy"></a>

```csharp
private void ResetLbCookieStickinessPolicy()
```

##### `ResetLoadBalancerName` <a name="ResetLoadBalancerName" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.resetLoadBalancerName"></a>

```csharp
private void ResetLoadBalancerName()
```

##### `ResetPolicies` <a name="ResetPolicies" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.resetPolicies"></a>

```csharp
private void ResetPolicies()
```

##### `ResetScheme` <a name="ResetScheme" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.resetScheme"></a>

```csharp
private void ResetScheme()
```

##### `ResetSecurityGroups` <a name="ResetSecurityGroups" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.resetSecurityGroups"></a>

```csharp
private void ResetSecurityGroups()
```

##### `ResetSubnets` <a name="ResetSubnets" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.resetSubnets"></a>

```csharp
private void ResetSubnets()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ElasticloadbalancingLoadBalancer resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ElasticloadbalancingLoadBalancer.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ElasticloadbalancingLoadBalancer.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ElasticloadbalancingLoadBalancer.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ElasticloadbalancingLoadBalancer.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a ElasticloadbalancingLoadBalancer resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ElasticloadbalancingLoadBalancer to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ElasticloadbalancingLoadBalancer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancing_load_balancer#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the ElasticloadbalancingLoadBalancer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.accessLoggingPolicy">AccessLoggingPolicy</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference">ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.appCookieStickinessPolicy">AppCookieStickinessPolicy</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyList">ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.canonicalHostedZoneName">CanonicalHostedZoneName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.canonicalHostedZoneNameId">CanonicalHostedZoneNameId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.connectionDrainingPolicy">ConnectionDrainingPolicy</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference">ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.connectionSettings">ConnectionSettings</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettingsOutputReference">ElasticloadbalancingLoadBalancerConnectionSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.dnsName">DnsName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.healthCheck">HealthCheck</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference">ElasticloadbalancingLoadBalancerHealthCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.lbCookieStickinessPolicy">LbCookieStickinessPolicy</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyList">ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.listeners">Listeners</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersList">ElasticloadbalancingLoadBalancerListenersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.policies">Policies</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesList">ElasticloadbalancingLoadBalancerPoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.sourceSecurityGroup">SourceSecurityGroup</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference">ElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsList">ElasticloadbalancingLoadBalancerTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.accessLoggingPolicyInput">AccessLoggingPolicyInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicy">ElasticloadbalancingLoadBalancerAccessLoggingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.appCookieStickinessPolicyInput">AppCookieStickinessPolicyInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicy">ElasticloadbalancingLoadBalancerAppCookieStickinessPolicy</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.availabilityZonesInput">AvailabilityZonesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.connectionDrainingPolicyInput">ConnectionDrainingPolicyInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicy">ElasticloadbalancingLoadBalancerConnectionDrainingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.connectionSettingsInput">ConnectionSettingsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettings">ElasticloadbalancingLoadBalancerConnectionSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.crossZoneInput">CrossZoneInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.healthCheckInput">HealthCheckInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheck">ElasticloadbalancingLoadBalancerHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.instancesInput">InstancesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.lbCookieStickinessPolicyInput">LbCookieStickinessPolicyInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicy">ElasticloadbalancingLoadBalancerLbCookieStickinessPolicy</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.listenersInput">ListenersInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListeners">ElasticloadbalancingLoadBalancerListeners</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.loadBalancerNameInput">LoadBalancerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.policiesInput">PoliciesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPolicies">ElasticloadbalancingLoadBalancerPolicies</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.schemeInput">SchemeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.securityGroupsInput">SecurityGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.subnetsInput">SubnetsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTags">ElasticloadbalancingLoadBalancerTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.availabilityZones">AvailabilityZones</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.crossZone">CrossZone</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.instances">Instances</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.loadBalancerName">LoadBalancerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.scheme">Scheme</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.securityGroups">SecurityGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.subnets">Subnets</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AccessLoggingPolicy`<sup>Required</sup> <a name="AccessLoggingPolicy" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.accessLoggingPolicy"></a>

```csharp
public ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference AccessLoggingPolicy { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference">ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference</a>

---

##### `AppCookieStickinessPolicy`<sup>Required</sup> <a name="AppCookieStickinessPolicy" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.appCookieStickinessPolicy"></a>

```csharp
public ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyList AppCookieStickinessPolicy { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyList">ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyList</a>

---

##### `CanonicalHostedZoneName`<sup>Required</sup> <a name="CanonicalHostedZoneName" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.canonicalHostedZoneName"></a>

```csharp
public string CanonicalHostedZoneName { get; }
```

- *Type:* string

---

##### `CanonicalHostedZoneNameId`<sup>Required</sup> <a name="CanonicalHostedZoneNameId" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.canonicalHostedZoneNameId"></a>

```csharp
public string CanonicalHostedZoneNameId { get; }
```

- *Type:* string

---

##### `ConnectionDrainingPolicy`<sup>Required</sup> <a name="ConnectionDrainingPolicy" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.connectionDrainingPolicy"></a>

```csharp
public ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference ConnectionDrainingPolicy { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference">ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference</a>

---

##### `ConnectionSettings`<sup>Required</sup> <a name="ConnectionSettings" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.connectionSettings"></a>

```csharp
public ElasticloadbalancingLoadBalancerConnectionSettingsOutputReference ConnectionSettings { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettingsOutputReference">ElasticloadbalancingLoadBalancerConnectionSettingsOutputReference</a>

---

##### `DnsName`<sup>Required</sup> <a name="DnsName" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.dnsName"></a>

```csharp
public string DnsName { get; }
```

- *Type:* string

---

##### `HealthCheck`<sup>Required</sup> <a name="HealthCheck" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.healthCheck"></a>

```csharp
public ElasticloadbalancingLoadBalancerHealthCheckOutputReference HealthCheck { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference">ElasticloadbalancingLoadBalancerHealthCheckOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LbCookieStickinessPolicy`<sup>Required</sup> <a name="LbCookieStickinessPolicy" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.lbCookieStickinessPolicy"></a>

```csharp
public ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyList LbCookieStickinessPolicy { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyList">ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyList</a>

---

##### `Listeners`<sup>Required</sup> <a name="Listeners" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.listeners"></a>

```csharp
public ElasticloadbalancingLoadBalancerListenersList Listeners { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersList">ElasticloadbalancingLoadBalancerListenersList</a>

---

##### `Policies`<sup>Required</sup> <a name="Policies" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.policies"></a>

```csharp
public ElasticloadbalancingLoadBalancerPoliciesList Policies { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesList">ElasticloadbalancingLoadBalancerPoliciesList</a>

---

##### `SourceSecurityGroup`<sup>Required</sup> <a name="SourceSecurityGroup" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.sourceSecurityGroup"></a>

```csharp
public ElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference SourceSecurityGroup { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference">ElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.tags"></a>

```csharp
public ElasticloadbalancingLoadBalancerTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsList">ElasticloadbalancingLoadBalancerTagsList</a>

---

##### `AccessLoggingPolicyInput`<sup>Optional</sup> <a name="AccessLoggingPolicyInput" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.accessLoggingPolicyInput"></a>

```csharp
public IResolvable|ElasticloadbalancingLoadBalancerAccessLoggingPolicy AccessLoggingPolicyInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicy">ElasticloadbalancingLoadBalancerAccessLoggingPolicy</a>

---

##### `AppCookieStickinessPolicyInput`<sup>Optional</sup> <a name="AppCookieStickinessPolicyInput" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.appCookieStickinessPolicyInput"></a>

```csharp
public IResolvable|ElasticloadbalancingLoadBalancerAppCookieStickinessPolicy[] AppCookieStickinessPolicyInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicy">ElasticloadbalancingLoadBalancerAppCookieStickinessPolicy</a>[]

---

##### `AvailabilityZonesInput`<sup>Optional</sup> <a name="AvailabilityZonesInput" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.availabilityZonesInput"></a>

```csharp
public string[] AvailabilityZonesInput { get; }
```

- *Type:* string[]

---

##### `ConnectionDrainingPolicyInput`<sup>Optional</sup> <a name="ConnectionDrainingPolicyInput" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.connectionDrainingPolicyInput"></a>

```csharp
public IResolvable|ElasticloadbalancingLoadBalancerConnectionDrainingPolicy ConnectionDrainingPolicyInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicy">ElasticloadbalancingLoadBalancerConnectionDrainingPolicy</a>

---

##### `ConnectionSettingsInput`<sup>Optional</sup> <a name="ConnectionSettingsInput" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.connectionSettingsInput"></a>

```csharp
public IResolvable|ElasticloadbalancingLoadBalancerConnectionSettings ConnectionSettingsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettings">ElasticloadbalancingLoadBalancerConnectionSettings</a>

---

##### `CrossZoneInput`<sup>Optional</sup> <a name="CrossZoneInput" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.crossZoneInput"></a>

```csharp
public bool|IResolvable CrossZoneInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `HealthCheckInput`<sup>Optional</sup> <a name="HealthCheckInput" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.healthCheckInput"></a>

```csharp
public IResolvable|ElasticloadbalancingLoadBalancerHealthCheck HealthCheckInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheck">ElasticloadbalancingLoadBalancerHealthCheck</a>

---

##### `InstancesInput`<sup>Optional</sup> <a name="InstancesInput" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.instancesInput"></a>

```csharp
public string[] InstancesInput { get; }
```

- *Type:* string[]

---

##### `LbCookieStickinessPolicyInput`<sup>Optional</sup> <a name="LbCookieStickinessPolicyInput" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.lbCookieStickinessPolicyInput"></a>

```csharp
public IResolvable|ElasticloadbalancingLoadBalancerLbCookieStickinessPolicy[] LbCookieStickinessPolicyInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicy">ElasticloadbalancingLoadBalancerLbCookieStickinessPolicy</a>[]

---

##### `ListenersInput`<sup>Optional</sup> <a name="ListenersInput" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.listenersInput"></a>

```csharp
public IResolvable|ElasticloadbalancingLoadBalancerListeners[] ListenersInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListeners">ElasticloadbalancingLoadBalancerListeners</a>[]

---

##### `LoadBalancerNameInput`<sup>Optional</sup> <a name="LoadBalancerNameInput" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.loadBalancerNameInput"></a>

```csharp
public string LoadBalancerNameInput { get; }
```

- *Type:* string

---

##### `PoliciesInput`<sup>Optional</sup> <a name="PoliciesInput" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.policiesInput"></a>

```csharp
public IResolvable|ElasticloadbalancingLoadBalancerPolicies[] PoliciesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPolicies">ElasticloadbalancingLoadBalancerPolicies</a>[]

---

##### `SchemeInput`<sup>Optional</sup> <a name="SchemeInput" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.schemeInput"></a>

```csharp
public string SchemeInput { get; }
```

- *Type:* string

---

##### `SecurityGroupsInput`<sup>Optional</sup> <a name="SecurityGroupsInput" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.securityGroupsInput"></a>

```csharp
public string[] SecurityGroupsInput { get; }
```

- *Type:* string[]

---

##### `SubnetsInput`<sup>Optional</sup> <a name="SubnetsInput" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.subnetsInput"></a>

```csharp
public string[] SubnetsInput { get; }
```

- *Type:* string[]

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.tagsInput"></a>

```csharp
public IResolvable|ElasticloadbalancingLoadBalancerTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTags">ElasticloadbalancingLoadBalancerTags</a>[]

---

##### `AvailabilityZones`<sup>Required</sup> <a name="AvailabilityZones" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.availabilityZones"></a>

```csharp
public string[] AvailabilityZones { get; }
```

- *Type:* string[]

---

##### `CrossZone`<sup>Required</sup> <a name="CrossZone" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.crossZone"></a>

```csharp
public bool|IResolvable CrossZone { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Instances`<sup>Required</sup> <a name="Instances" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.instances"></a>

```csharp
public string[] Instances { get; }
```

- *Type:* string[]

---

##### `LoadBalancerName`<sup>Required</sup> <a name="LoadBalancerName" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.loadBalancerName"></a>

```csharp
public string LoadBalancerName { get; }
```

- *Type:* string

---

##### `Scheme`<sup>Required</sup> <a name="Scheme" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.scheme"></a>

```csharp
public string Scheme { get; }
```

- *Type:* string

---

##### `SecurityGroups`<sup>Required</sup> <a name="SecurityGroups" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.securityGroups"></a>

```csharp
public string[] SecurityGroups { get; }
```

- *Type:* string[]

---

##### `Subnets`<sup>Required</sup> <a name="Subnets" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.subnets"></a>

```csharp
public string[] Subnets { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ElasticloadbalancingLoadBalancerAccessLoggingPolicy <a name="ElasticloadbalancingLoadBalancerAccessLoggingPolicy" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ElasticloadbalancingLoadBalancerAccessLoggingPolicy {
    double EmitInterval = null,
    bool|IResolvable Enabled = null,
    string S3BucketName = null,
    string S3BucketPrefix = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicy.property.emitInterval">EmitInterval</a></code> | <code>double</code> | The interval for publishing the access logs. You can specify an interval of either 5 minutes or 60 minutes. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicy.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Specifies whether access logs are enabled for the load balancer. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicy.property.s3BucketName">S3BucketName</a></code> | <code>string</code> | The name of the Amazon S3 bucket where the access logs are stored. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicy.property.s3BucketPrefix">S3BucketPrefix</a></code> | <code>string</code> | The logical hierarchy you created for your Amazon S3 bucket, for example `my-bucket-prefix/prod`. |

---

##### `EmitInterval`<sup>Optional</sup> <a name="EmitInterval" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicy.property.emitInterval"></a>

```csharp
public double EmitInterval { get; set; }
```

- *Type:* double

The interval for publishing the access logs. You can specify an interval of either 5 minutes or 60 minutes.

Default: 60 minutes

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancing_load_balancer#emit_interval ElasticloadbalancingLoadBalancer#emit_interval}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicy.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Specifies whether access logs are enabled for the load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancing_load_balancer#enabled ElasticloadbalancingLoadBalancer#enabled}

---

##### `S3BucketName`<sup>Optional</sup> <a name="S3BucketName" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicy.property.s3BucketName"></a>

```csharp
public string S3BucketName { get; set; }
```

- *Type:* string

The name of the Amazon S3 bucket where the access logs are stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancing_load_balancer#s3_bucket_name ElasticloadbalancingLoadBalancer#s3_bucket_name}

---

##### `S3BucketPrefix`<sup>Optional</sup> <a name="S3BucketPrefix" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicy.property.s3BucketPrefix"></a>

```csharp
public string S3BucketPrefix { get; set; }
```

- *Type:* string

The logical hierarchy you created for your Amazon S3 bucket, for example `my-bucket-prefix/prod`.

If the prefix is not provided, the log is placed at the root level of the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancing_load_balancer#s3_bucket_prefix ElasticloadbalancingLoadBalancer#s3_bucket_prefix}

---

### ElasticloadbalancingLoadBalancerAppCookieStickinessPolicy <a name="ElasticloadbalancingLoadBalancerAppCookieStickinessPolicy" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ElasticloadbalancingLoadBalancerAppCookieStickinessPolicy {
    string CookieName = null,
    string PolicyName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicy.property.cookieName">CookieName</a></code> | <code>string</code> | The name of the application cookie used for stickiness. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicy.property.policyName">PolicyName</a></code> | <code>string</code> | The mnemonic name for the policy being created. |

---

##### `CookieName`<sup>Optional</sup> <a name="CookieName" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicy.property.cookieName"></a>

```csharp
public string CookieName { get; set; }
```

- *Type:* string

The name of the application cookie used for stickiness.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancing_load_balancer#cookie_name ElasticloadbalancingLoadBalancer#cookie_name}

---

##### `PolicyName`<sup>Optional</sup> <a name="PolicyName" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicy.property.policyName"></a>

```csharp
public string PolicyName { get; set; }
```

- *Type:* string

The mnemonic name for the policy being created.

The name must be unique within a set of policies for this load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancing_load_balancer#policy_name ElasticloadbalancingLoadBalancer#policy_name}

---

### ElasticloadbalancingLoadBalancerConfig <a name="ElasticloadbalancingLoadBalancerConfig" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ElasticloadbalancingLoadBalancerConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    IResolvable|ElasticloadbalancingLoadBalancerListeners[] Listeners,
    ElasticloadbalancingLoadBalancerAccessLoggingPolicy AccessLoggingPolicy = null,
    IResolvable|ElasticloadbalancingLoadBalancerAppCookieStickinessPolicy[] AppCookieStickinessPolicy = null,
    string[] AvailabilityZones = null,
    ElasticloadbalancingLoadBalancerConnectionDrainingPolicy ConnectionDrainingPolicy = null,
    ElasticloadbalancingLoadBalancerConnectionSettings ConnectionSettings = null,
    bool|IResolvable CrossZone = null,
    ElasticloadbalancingLoadBalancerHealthCheck HealthCheck = null,
    string[] Instances = null,
    IResolvable|ElasticloadbalancingLoadBalancerLbCookieStickinessPolicy[] LbCookieStickinessPolicy = null,
    string LoadBalancerName = null,
    IResolvable|ElasticloadbalancingLoadBalancerPolicies[] Policies = null,
    string Scheme = null,
    string[] SecurityGroups = null,
    string[] Subnets = null,
    IResolvable|ElasticloadbalancingLoadBalancerTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConfig.property.listeners">Listeners</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListeners">ElasticloadbalancingLoadBalancerListeners</a>[]</code> | The Listeners for the load balancer. You can specify at most one listener per port. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConfig.property.accessLoggingPolicy">AccessLoggingPolicy</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicy">ElasticloadbalancingLoadBalancerAccessLoggingPolicy</a></code> | Information about where and how access logs are stored for the load balancer. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConfig.property.appCookieStickinessPolicy">AppCookieStickinessPolicy</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicy">ElasticloadbalancingLoadBalancerAppCookieStickinessPolicy</a>[]</code> | Information about a policy for application-controlled session stickiness. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConfig.property.availabilityZones">AvailabilityZones</a></code> | <code>string[]</code> | The Availability Zones for a load balancer in a default VPC. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConfig.property.connectionDrainingPolicy">ConnectionDrainingPolicy</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicy">ElasticloadbalancingLoadBalancerConnectionDrainingPolicy</a></code> | If enabled, the load balancer allows existing requests to complete before the load balancer shifts traffic away from a deregistered or unhealthy instance. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConfig.property.connectionSettings">ConnectionSettings</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettings">ElasticloadbalancingLoadBalancerConnectionSettings</a></code> | If enabled, the load balancer allows the connections to remain idle (no data is sent over the connection) for the specified duration. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConfig.property.crossZone">CrossZone</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | If enabled, the load balancer routes the request traffic evenly across all instances regardless of the Availability Zones. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConfig.property.healthCheck">HealthCheck</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheck">ElasticloadbalancingLoadBalancerHealthCheck</a></code> | The health check settings to use when evaluating the health of your EC2 instances. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConfig.property.instances">Instances</a></code> | <code>string[]</code> | The IDs of the instances for the load balancer. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConfig.property.lbCookieStickinessPolicy">LbCookieStickinessPolicy</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicy">ElasticloadbalancingLoadBalancerLbCookieStickinessPolicy</a>[]</code> | Information about a policy for duration-based session stickiness. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConfig.property.loadBalancerName">LoadBalancerName</a></code> | <code>string</code> | The name of the load balancer. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConfig.property.policies">Policies</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPolicies">ElasticloadbalancingLoadBalancerPolicies</a>[]</code> | The policies defined for your Classic Load Balancer. Specify only back-end server policies. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConfig.property.scheme">Scheme</a></code> | <code>string</code> | The type of load balancer. Valid only for load balancers in a VPC. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConfig.property.securityGroups">SecurityGroups</a></code> | <code>string[]</code> | The security groups for the load balancer. Valid only for load balancers in a VPC. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConfig.property.subnets">Subnets</a></code> | <code>string[]</code> | The IDs of the subnets for the load balancer. You can specify at most one subnet per Availability Zone. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTags">ElasticloadbalancingLoadBalancerTags</a>[]</code> | The tags associated with a load balancer. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Listeners`<sup>Required</sup> <a name="Listeners" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConfig.property.listeners"></a>

```csharp
public IResolvable|ElasticloadbalancingLoadBalancerListeners[] Listeners { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListeners">ElasticloadbalancingLoadBalancerListeners</a>[]

The Listeners for the load balancer. You can specify at most one listener per port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancing_load_balancer#listeners ElasticloadbalancingLoadBalancer#listeners}

---

##### `AccessLoggingPolicy`<sup>Optional</sup> <a name="AccessLoggingPolicy" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConfig.property.accessLoggingPolicy"></a>

```csharp
public ElasticloadbalancingLoadBalancerAccessLoggingPolicy AccessLoggingPolicy { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicy">ElasticloadbalancingLoadBalancerAccessLoggingPolicy</a>

Information about where and how access logs are stored for the load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancing_load_balancer#access_logging_policy ElasticloadbalancingLoadBalancer#access_logging_policy}

---

##### `AppCookieStickinessPolicy`<sup>Optional</sup> <a name="AppCookieStickinessPolicy" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConfig.property.appCookieStickinessPolicy"></a>

```csharp
public IResolvable|ElasticloadbalancingLoadBalancerAppCookieStickinessPolicy[] AppCookieStickinessPolicy { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicy">ElasticloadbalancingLoadBalancerAppCookieStickinessPolicy</a>[]

Information about a policy for application-controlled session stickiness.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancing_load_balancer#app_cookie_stickiness_policy ElasticloadbalancingLoadBalancer#app_cookie_stickiness_policy}

---

##### `AvailabilityZones`<sup>Optional</sup> <a name="AvailabilityZones" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConfig.property.availabilityZones"></a>

```csharp
public string[] AvailabilityZones { get; set; }
```

- *Type:* string[]

The Availability Zones for a load balancer in a default VPC.

For a load balancer in a nondefault VPC, specify Subnets instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancing_load_balancer#availability_zones ElasticloadbalancingLoadBalancer#availability_zones}

---

##### `ConnectionDrainingPolicy`<sup>Optional</sup> <a name="ConnectionDrainingPolicy" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConfig.property.connectionDrainingPolicy"></a>

```csharp
public ElasticloadbalancingLoadBalancerConnectionDrainingPolicy ConnectionDrainingPolicy { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicy">ElasticloadbalancingLoadBalancerConnectionDrainingPolicy</a>

If enabled, the load balancer allows existing requests to complete before the load balancer shifts traffic away from a deregistered or unhealthy instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancing_load_balancer#connection_draining_policy ElasticloadbalancingLoadBalancer#connection_draining_policy}

---

##### `ConnectionSettings`<sup>Optional</sup> <a name="ConnectionSettings" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConfig.property.connectionSettings"></a>

```csharp
public ElasticloadbalancingLoadBalancerConnectionSettings ConnectionSettings { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettings">ElasticloadbalancingLoadBalancerConnectionSettings</a>

If enabled, the load balancer allows the connections to remain idle (no data is sent over the connection) for the specified duration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancing_load_balancer#connection_settings ElasticloadbalancingLoadBalancer#connection_settings}

---

##### `CrossZone`<sup>Optional</sup> <a name="CrossZone" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConfig.property.crossZone"></a>

```csharp
public bool|IResolvable CrossZone { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

If enabled, the load balancer routes the request traffic evenly across all instances regardless of the Availability Zones.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancing_load_balancer#cross_zone ElasticloadbalancingLoadBalancer#cross_zone}

---

##### `HealthCheck`<sup>Optional</sup> <a name="HealthCheck" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConfig.property.healthCheck"></a>

```csharp
public ElasticloadbalancingLoadBalancerHealthCheck HealthCheck { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheck">ElasticloadbalancingLoadBalancerHealthCheck</a>

The health check settings to use when evaluating the health of your EC2 instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancing_load_balancer#health_check ElasticloadbalancingLoadBalancer#health_check}

---

##### `Instances`<sup>Optional</sup> <a name="Instances" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConfig.property.instances"></a>

```csharp
public string[] Instances { get; set; }
```

- *Type:* string[]

The IDs of the instances for the load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancing_load_balancer#instances ElasticloadbalancingLoadBalancer#instances}

---

##### `LbCookieStickinessPolicy`<sup>Optional</sup> <a name="LbCookieStickinessPolicy" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConfig.property.lbCookieStickinessPolicy"></a>

```csharp
public IResolvable|ElasticloadbalancingLoadBalancerLbCookieStickinessPolicy[] LbCookieStickinessPolicy { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicy">ElasticloadbalancingLoadBalancerLbCookieStickinessPolicy</a>[]

Information about a policy for duration-based session stickiness.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancing_load_balancer#lb_cookie_stickiness_policy ElasticloadbalancingLoadBalancer#lb_cookie_stickiness_policy}

---

##### `LoadBalancerName`<sup>Optional</sup> <a name="LoadBalancerName" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConfig.property.loadBalancerName"></a>

```csharp
public string LoadBalancerName { get; set; }
```

- *Type:* string

The name of the load balancer.

This name must be unique within your set of load balancers for the region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancing_load_balancer#load_balancer_name ElasticloadbalancingLoadBalancer#load_balancer_name}

---

##### `Policies`<sup>Optional</sup> <a name="Policies" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConfig.property.policies"></a>

```csharp
public IResolvable|ElasticloadbalancingLoadBalancerPolicies[] Policies { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPolicies">ElasticloadbalancingLoadBalancerPolicies</a>[]

The policies defined for your Classic Load Balancer. Specify only back-end server policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancing_load_balancer#policies ElasticloadbalancingLoadBalancer#policies}

---

##### `Scheme`<sup>Optional</sup> <a name="Scheme" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConfig.property.scheme"></a>

```csharp
public string Scheme { get; set; }
```

- *Type:* string

The type of load balancer. Valid only for load balancers in a VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancing_load_balancer#scheme ElasticloadbalancingLoadBalancer#scheme}

---

##### `SecurityGroups`<sup>Optional</sup> <a name="SecurityGroups" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConfig.property.securityGroups"></a>

```csharp
public string[] SecurityGroups { get; set; }
```

- *Type:* string[]

The security groups for the load balancer. Valid only for load balancers in a VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancing_load_balancer#security_groups ElasticloadbalancingLoadBalancer#security_groups}

---

##### `Subnets`<sup>Optional</sup> <a name="Subnets" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConfig.property.subnets"></a>

```csharp
public string[] Subnets { get; set; }
```

- *Type:* string[]

The IDs of the subnets for the load balancer. You can specify at most one subnet per Availability Zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancing_load_balancer#subnets ElasticloadbalancingLoadBalancer#subnets}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConfig.property.tags"></a>

```csharp
public IResolvable|ElasticloadbalancingLoadBalancerTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTags">ElasticloadbalancingLoadBalancerTags</a>[]

The tags associated with a load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancing_load_balancer#tags ElasticloadbalancingLoadBalancer#tags}

---

### ElasticloadbalancingLoadBalancerConnectionDrainingPolicy <a name="ElasticloadbalancingLoadBalancerConnectionDrainingPolicy" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ElasticloadbalancingLoadBalancerConnectionDrainingPolicy {
    bool|IResolvable Enabled = null,
    double Timeout = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicy.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Specifies whether connection draining is enabled for the load balancer. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicy.property.timeout">Timeout</a></code> | <code>double</code> | The maximum time, in seconds, to keep the existing connections open before deregistering the instances. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicy.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Specifies whether connection draining is enabled for the load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancing_load_balancer#enabled ElasticloadbalancingLoadBalancer#enabled}

---

##### `Timeout`<sup>Optional</sup> <a name="Timeout" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicy.property.timeout"></a>

```csharp
public double Timeout { get; set; }
```

- *Type:* double

The maximum time, in seconds, to keep the existing connections open before deregistering the instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancing_load_balancer#timeout ElasticloadbalancingLoadBalancer#timeout}

---

### ElasticloadbalancingLoadBalancerConnectionSettings <a name="ElasticloadbalancingLoadBalancerConnectionSettings" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ElasticloadbalancingLoadBalancerConnectionSettings {
    double IdleTimeout = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettings.property.idleTimeout">IdleTimeout</a></code> | <code>double</code> | The time, in seconds, that the connection is allowed to be idle (no data has been sent over the connection) before it is closed by the load balancer. |

---

##### `IdleTimeout`<sup>Optional</sup> <a name="IdleTimeout" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettings.property.idleTimeout"></a>

```csharp
public double IdleTimeout { get; set; }
```

- *Type:* double

The time, in seconds, that the connection is allowed to be idle (no data has been sent over the connection) before it is closed by the load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancing_load_balancer#idle_timeout ElasticloadbalancingLoadBalancer#idle_timeout}

---

### ElasticloadbalancingLoadBalancerHealthCheck <a name="ElasticloadbalancingLoadBalancerHealthCheck" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheck"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheck.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ElasticloadbalancingLoadBalancerHealthCheck {
    string HealthyThreshold = null,
    string Interval = null,
    string Target = null,
    string Timeout = null,
    string UnhealthyThreshold = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheck.property.healthyThreshold">HealthyThreshold</a></code> | <code>string</code> | The number of consecutive health checks successes required before moving the instance to the `Healthy` state. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheck.property.interval">Interval</a></code> | <code>string</code> | The approximate interval, in seconds, between health checks of an individual instance. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheck.property.target">Target</a></code> | <code>string</code> | The instance being checked. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheck.property.timeout">Timeout</a></code> | <code>string</code> | The amount of time, in seconds, during which no response means a failed health check. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheck.property.unhealthyThreshold">UnhealthyThreshold</a></code> | <code>string</code> | The number of consecutive health check failures required before moving the instance to the `Unhealthy` state. |

---

##### `HealthyThreshold`<sup>Optional</sup> <a name="HealthyThreshold" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheck.property.healthyThreshold"></a>

```csharp
public string HealthyThreshold { get; set; }
```

- *Type:* string

The number of consecutive health checks successes required before moving the instance to the `Healthy` state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancing_load_balancer#healthy_threshold ElasticloadbalancingLoadBalancer#healthy_threshold}

---

##### `Interval`<sup>Optional</sup> <a name="Interval" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheck.property.interval"></a>

```csharp
public string Interval { get; set; }
```

- *Type:* string

The approximate interval, in seconds, between health checks of an individual instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancing_load_balancer#interval ElasticloadbalancingLoadBalancer#interval}

---

##### `Target`<sup>Optional</sup> <a name="Target" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheck.property.target"></a>

```csharp
public string Target { get; set; }
```

- *Type:* string

The instance being checked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancing_load_balancer#target ElasticloadbalancingLoadBalancer#target}

---

##### `Timeout`<sup>Optional</sup> <a name="Timeout" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheck.property.timeout"></a>

```csharp
public string Timeout { get; set; }
```

- *Type:* string

The amount of time, in seconds, during which no response means a failed health check.

This value must be less than the `Interval` value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancing_load_balancer#timeout ElasticloadbalancingLoadBalancer#timeout}

---

##### `UnhealthyThreshold`<sup>Optional</sup> <a name="UnhealthyThreshold" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheck.property.unhealthyThreshold"></a>

```csharp
public string UnhealthyThreshold { get; set; }
```

- *Type:* string

The number of consecutive health check failures required before moving the instance to the `Unhealthy` state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancing_load_balancer#unhealthy_threshold ElasticloadbalancingLoadBalancer#unhealthy_threshold}

---

### ElasticloadbalancingLoadBalancerLbCookieStickinessPolicy <a name="ElasticloadbalancingLoadBalancerLbCookieStickinessPolicy" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ElasticloadbalancingLoadBalancerLbCookieStickinessPolicy {
    string CookieExpirationPeriod = null,
    string PolicyName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicy.property.cookieExpirationPeriod">CookieExpirationPeriod</a></code> | <code>string</code> | The time period, in seconds, after which the cookie should be considered stale. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicy.property.policyName">PolicyName</a></code> | <code>string</code> | The name of the policy. This name must be unique within the set of policies for this load balancer. |

---

##### `CookieExpirationPeriod`<sup>Optional</sup> <a name="CookieExpirationPeriod" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicy.property.cookieExpirationPeriod"></a>

```csharp
public string CookieExpirationPeriod { get; set; }
```

- *Type:* string

The time period, in seconds, after which the cookie should be considered stale.

If this parameter is not specified, the stickiness session lasts for the duration of the browser session.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancing_load_balancer#cookie_expiration_period ElasticloadbalancingLoadBalancer#cookie_expiration_period}

---

##### `PolicyName`<sup>Optional</sup> <a name="PolicyName" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicy.property.policyName"></a>

```csharp
public string PolicyName { get; set; }
```

- *Type:* string

The name of the policy. This name must be unique within the set of policies for this load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancing_load_balancer#policy_name ElasticloadbalancingLoadBalancer#policy_name}

---

### ElasticloadbalancingLoadBalancerListeners <a name="ElasticloadbalancingLoadBalancerListeners" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListeners"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListeners.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ElasticloadbalancingLoadBalancerListeners {
    string InstancePort,
    string LoadBalancerPort,
    string Protocol,
    string InstanceProtocol = null,
    string[] PolicyNames = null,
    string SslCertificateId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListeners.property.instancePort">InstancePort</a></code> | <code>string</code> | The port on which the instance is listening. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListeners.property.loadBalancerPort">LoadBalancerPort</a></code> | <code>string</code> | The port on which the load balancer is listening. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListeners.property.protocol">Protocol</a></code> | <code>string</code> | The load balancer transport protocol to use for routing: HTTP, HTTPS, TCP, or SSL. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListeners.property.instanceProtocol">InstanceProtocol</a></code> | <code>string</code> | The protocol to use for routing traffic to instances: HTTP, HTTPS, TCP, or SSL. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListeners.property.policyNames">PolicyNames</a></code> | <code>string[]</code> | The names of the policies to associate with the listener. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListeners.property.sslCertificateId">SslCertificateId</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the server certificate. |

---

##### `InstancePort`<sup>Required</sup> <a name="InstancePort" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListeners.property.instancePort"></a>

```csharp
public string InstancePort { get; set; }
```

- *Type:* string

The port on which the instance is listening.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancing_load_balancer#instance_port ElasticloadbalancingLoadBalancer#instance_port}

---

##### `LoadBalancerPort`<sup>Required</sup> <a name="LoadBalancerPort" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListeners.property.loadBalancerPort"></a>

```csharp
public string LoadBalancerPort { get; set; }
```

- *Type:* string

The port on which the load balancer is listening.

On EC2-VPC, you can specify any port from the range 1-65535. On EC2-Classic, you can specify any port from the following list: 25, 80, 443, 465, 587, 1024-65535.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancing_load_balancer#load_balancer_port ElasticloadbalancingLoadBalancer#load_balancer_port}

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListeners.property.protocol"></a>

```csharp
public string Protocol { get; set; }
```

- *Type:* string

The load balancer transport protocol to use for routing: HTTP, HTTPS, TCP, or SSL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancing_load_balancer#protocol ElasticloadbalancingLoadBalancer#protocol}

---

##### `InstanceProtocol`<sup>Optional</sup> <a name="InstanceProtocol" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListeners.property.instanceProtocol"></a>

```csharp
public string InstanceProtocol { get; set; }
```

- *Type:* string

The protocol to use for routing traffic to instances: HTTP, HTTPS, TCP, or SSL.

If the front-end protocol is TCP or SSL, the back-end protocol must be TCP or SSL. If the front-end protocol is HTTP or HTTPS, the back-end protocol must be HTTP or HTTPS.

If there is another listener with the same `InstancePort` whose `InstanceProtocol` is secure, (HTTPS or SSL), the listener's `InstanceProtocol` must also be secure.

If there is another listener with the same `InstancePort` whose `InstanceProtocol` is HTTP or TCP, the listener's `InstanceProtocol` must be HTTP or TCP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancing_load_balancer#instance_protocol ElasticloadbalancingLoadBalancer#instance_protocol}

---

##### `PolicyNames`<sup>Optional</sup> <a name="PolicyNames" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListeners.property.policyNames"></a>

```csharp
public string[] PolicyNames { get; set; }
```

- *Type:* string[]

The names of the policies to associate with the listener.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancing_load_balancer#policy_names ElasticloadbalancingLoadBalancer#policy_names}

---

##### `SslCertificateId`<sup>Optional</sup> <a name="SslCertificateId" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListeners.property.sslCertificateId"></a>

```csharp
public string SslCertificateId { get; set; }
```

- *Type:* string

The Amazon Resource Name (ARN) of the server certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancing_load_balancer#ssl_certificate_id ElasticloadbalancingLoadBalancer#ssl_certificate_id}

---

### ElasticloadbalancingLoadBalancerPolicies <a name="ElasticloadbalancingLoadBalancerPolicies" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPolicies.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ElasticloadbalancingLoadBalancerPolicies {
    IResolvable|ElasticloadbalancingLoadBalancerPoliciesAttributes[] Attributes = null,
    string[] InstancePorts = null,
    string[] LoadBalancerPorts = null,
    string PolicyName = null,
    string PolicyType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPolicies.property.attributes">Attributes</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributes">ElasticloadbalancingLoadBalancerPoliciesAttributes</a>[]</code> | The policy attributes. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPolicies.property.instancePorts">InstancePorts</a></code> | <code>string[]</code> | The instance ports for the policy. Required only for some policy types. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPolicies.property.loadBalancerPorts">LoadBalancerPorts</a></code> | <code>string[]</code> | The load balancer ports for the policy. Required only for some policy types. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPolicies.property.policyName">PolicyName</a></code> | <code>string</code> | The name of the policy. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPolicies.property.policyType">PolicyType</a></code> | <code>string</code> | The name of the policy type. |

---

##### `Attributes`<sup>Optional</sup> <a name="Attributes" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPolicies.property.attributes"></a>

```csharp
public IResolvable|ElasticloadbalancingLoadBalancerPoliciesAttributes[] Attributes { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributes">ElasticloadbalancingLoadBalancerPoliciesAttributes</a>[]

The policy attributes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancing_load_balancer#attributes ElasticloadbalancingLoadBalancer#attributes}

---

##### `InstancePorts`<sup>Optional</sup> <a name="InstancePorts" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPolicies.property.instancePorts"></a>

```csharp
public string[] InstancePorts { get; set; }
```

- *Type:* string[]

The instance ports for the policy. Required only for some policy types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancing_load_balancer#instance_ports ElasticloadbalancingLoadBalancer#instance_ports}

---

##### `LoadBalancerPorts`<sup>Optional</sup> <a name="LoadBalancerPorts" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPolicies.property.loadBalancerPorts"></a>

```csharp
public string[] LoadBalancerPorts { get; set; }
```

- *Type:* string[]

The load balancer ports for the policy. Required only for some policy types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancing_load_balancer#load_balancer_ports ElasticloadbalancingLoadBalancer#load_balancer_ports}

---

##### `PolicyName`<sup>Optional</sup> <a name="PolicyName" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPolicies.property.policyName"></a>

```csharp
public string PolicyName { get; set; }
```

- *Type:* string

The name of the policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancing_load_balancer#policy_name ElasticloadbalancingLoadBalancer#policy_name}

---

##### `PolicyType`<sup>Optional</sup> <a name="PolicyType" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPolicies.property.policyType"></a>

```csharp
public string PolicyType { get; set; }
```

- *Type:* string

The name of the policy type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancing_load_balancer#policy_type ElasticloadbalancingLoadBalancer#policy_type}

---

### ElasticloadbalancingLoadBalancerPoliciesAttributes <a name="ElasticloadbalancingLoadBalancerPoliciesAttributes" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributes.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ElasticloadbalancingLoadBalancerPoliciesAttributes {
    string Name = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributes.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancing_load_balancer#name ElasticloadbalancingLoadBalancer#name}. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributes.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancing_load_balancer#value ElasticloadbalancingLoadBalancer#value}. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributes.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancing_load_balancer#name ElasticloadbalancingLoadBalancer#name}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributes.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancing_load_balancer#value ElasticloadbalancingLoadBalancer#value}.

---

### ElasticloadbalancingLoadBalancerSourceSecurityGroup <a name="ElasticloadbalancingLoadBalancerSourceSecurityGroup" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerSourceSecurityGroup"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerSourceSecurityGroup.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ElasticloadbalancingLoadBalancerSourceSecurityGroup {

};
```


### ElasticloadbalancingLoadBalancerTags <a name="ElasticloadbalancingLoadBalancerTags" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ElasticloadbalancingLoadBalancerTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTags.property.key">Key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTags.property.value">Value</a></code> | <code>string</code> | The value for the tag. You can specify a value that's 1 to 256 characters in length. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key name of the tag.

You can specify a value that's 1 to 128 Unicode characters in length and can't be prefixed with `aws:`. You can use any of the following characters: the set of Unicode letters, digits, whitespace, `_`, `.`, `/`, `=`, `+`, and `-`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancing_load_balancer#key ElasticloadbalancingLoadBalancer#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value for the tag. You can specify a value that's 1 to 256 characters in length.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancing_load_balancer#value ElasticloadbalancingLoadBalancer#value}

---

## Classes <a name="Classes" id="Classes"></a>

### ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference <a name="ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.resetEmitInterval">ResetEmitInterval</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.resetS3BucketName">ResetS3BucketName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.resetS3BucketPrefix">ResetS3BucketPrefix</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEmitInterval` <a name="ResetEmitInterval" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.resetEmitInterval"></a>

```csharp
private void ResetEmitInterval()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetS3BucketName` <a name="ResetS3BucketName" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.resetS3BucketName"></a>

```csharp
private void ResetS3BucketName()
```

##### `ResetS3BucketPrefix` <a name="ResetS3BucketPrefix" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.resetS3BucketPrefix"></a>

```csharp
private void ResetS3BucketPrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.property.emitIntervalInput">EmitIntervalInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.property.s3BucketNameInput">S3BucketNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.property.s3BucketPrefixInput">S3BucketPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.property.emitInterval">EmitInterval</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.property.s3BucketName">S3BucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.property.s3BucketPrefix">S3BucketPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicy">ElasticloadbalancingLoadBalancerAccessLoggingPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EmitIntervalInput`<sup>Optional</sup> <a name="EmitIntervalInput" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.property.emitIntervalInput"></a>

```csharp
public double EmitIntervalInput { get; }
```

- *Type:* double

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `S3BucketNameInput`<sup>Optional</sup> <a name="S3BucketNameInput" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.property.s3BucketNameInput"></a>

```csharp
public string S3BucketNameInput { get; }
```

- *Type:* string

---

##### `S3BucketPrefixInput`<sup>Optional</sup> <a name="S3BucketPrefixInput" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.property.s3BucketPrefixInput"></a>

```csharp
public string S3BucketPrefixInput { get; }
```

- *Type:* string

---

##### `EmitInterval`<sup>Required</sup> <a name="EmitInterval" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.property.emitInterval"></a>

```csharp
public double EmitInterval { get; }
```

- *Type:* double

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `S3BucketName`<sup>Required</sup> <a name="S3BucketName" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.property.s3BucketName"></a>

```csharp
public string S3BucketName { get; }
```

- *Type:* string

---

##### `S3BucketPrefix`<sup>Required</sup> <a name="S3BucketPrefix" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.property.s3BucketPrefix"></a>

```csharp
public string S3BucketPrefix { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ElasticloadbalancingLoadBalancerAccessLoggingPolicy InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicy">ElasticloadbalancingLoadBalancerAccessLoggingPolicy</a>

---


### ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyList <a name="ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyList" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyList.get"></a>

```csharp
private ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicy">ElasticloadbalancingLoadBalancerAppCookieStickinessPolicy</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyList.property.internalValue"></a>

```csharp
public IResolvable|ElasticloadbalancingLoadBalancerAppCookieStickinessPolicy[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicy">ElasticloadbalancingLoadBalancerAppCookieStickinessPolicy</a>[]

---


### ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference <a name="ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.resetCookieName">ResetCookieName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.resetPolicyName">ResetPolicyName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCookieName` <a name="ResetCookieName" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.resetCookieName"></a>

```csharp
private void ResetCookieName()
```

##### `ResetPolicyName` <a name="ResetPolicyName" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.resetPolicyName"></a>

```csharp
private void ResetPolicyName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.property.cookieNameInput">CookieNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.property.policyNameInput">PolicyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.property.cookieName">CookieName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.property.policyName">PolicyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicy">ElasticloadbalancingLoadBalancerAppCookieStickinessPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CookieNameInput`<sup>Optional</sup> <a name="CookieNameInput" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.property.cookieNameInput"></a>

```csharp
public string CookieNameInput { get; }
```

- *Type:* string

---

##### `PolicyNameInput`<sup>Optional</sup> <a name="PolicyNameInput" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.property.policyNameInput"></a>

```csharp
public string PolicyNameInput { get; }
```

- *Type:* string

---

##### `CookieName`<sup>Required</sup> <a name="CookieName" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.property.cookieName"></a>

```csharp
public string CookieName { get; }
```

- *Type:* string

---

##### `PolicyName`<sup>Required</sup> <a name="PolicyName" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.property.policyName"></a>

```csharp
public string PolicyName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ElasticloadbalancingLoadBalancerAppCookieStickinessPolicy InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicy">ElasticloadbalancingLoadBalancerAppCookieStickinessPolicy</a>

---


### ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference <a name="ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.resetTimeout">ResetTimeout</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetTimeout` <a name="ResetTimeout" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.resetTimeout"></a>

```csharp
private void ResetTimeout()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.property.timeoutInput">TimeoutInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.property.timeout">Timeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicy">ElasticloadbalancingLoadBalancerConnectionDrainingPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `TimeoutInput`<sup>Optional</sup> <a name="TimeoutInput" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.property.timeoutInput"></a>

```csharp
public double TimeoutInput { get; }
```

- *Type:* double

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Timeout`<sup>Required</sup> <a name="Timeout" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.property.timeout"></a>

```csharp
public double Timeout { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ElasticloadbalancingLoadBalancerConnectionDrainingPolicy InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicy">ElasticloadbalancingLoadBalancerConnectionDrainingPolicy</a>

---


### ElasticloadbalancingLoadBalancerConnectionSettingsOutputReference <a name="ElasticloadbalancingLoadBalancerConnectionSettingsOutputReference" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ElasticloadbalancingLoadBalancerConnectionSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.resetIdleTimeout">ResetIdleTimeout</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIdleTimeout` <a name="ResetIdleTimeout" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.resetIdleTimeout"></a>

```csharp
private void ResetIdleTimeout()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.property.idleTimeoutInput">IdleTimeoutInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.property.idleTimeout">IdleTimeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettings">ElasticloadbalancingLoadBalancerConnectionSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdleTimeoutInput`<sup>Optional</sup> <a name="IdleTimeoutInput" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.property.idleTimeoutInput"></a>

```csharp
public double IdleTimeoutInput { get; }
```

- *Type:* double

---

##### `IdleTimeout`<sup>Required</sup> <a name="IdleTimeout" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.property.idleTimeout"></a>

```csharp
public double IdleTimeout { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ElasticloadbalancingLoadBalancerConnectionSettings InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettings">ElasticloadbalancingLoadBalancerConnectionSettings</a>

---


### ElasticloadbalancingLoadBalancerHealthCheckOutputReference <a name="ElasticloadbalancingLoadBalancerHealthCheckOutputReference" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ElasticloadbalancingLoadBalancerHealthCheckOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.resetHealthyThreshold">ResetHealthyThreshold</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.resetInterval">ResetInterval</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.resetTarget">ResetTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.resetTimeout">ResetTimeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.resetUnhealthyThreshold">ResetUnhealthyThreshold</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHealthyThreshold` <a name="ResetHealthyThreshold" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.resetHealthyThreshold"></a>

```csharp
private void ResetHealthyThreshold()
```

##### `ResetInterval` <a name="ResetInterval" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.resetInterval"></a>

```csharp
private void ResetInterval()
```

##### `ResetTarget` <a name="ResetTarget" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.resetTarget"></a>

```csharp
private void ResetTarget()
```

##### `ResetTimeout` <a name="ResetTimeout" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.resetTimeout"></a>

```csharp
private void ResetTimeout()
```

##### `ResetUnhealthyThreshold` <a name="ResetUnhealthyThreshold" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.resetUnhealthyThreshold"></a>

```csharp
private void ResetUnhealthyThreshold()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.property.healthyThresholdInput">HealthyThresholdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.property.intervalInput">IntervalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.property.targetInput">TargetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.property.timeoutInput">TimeoutInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.property.unhealthyThresholdInput">UnhealthyThresholdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.property.healthyThreshold">HealthyThreshold</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.property.interval">Interval</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.property.target">Target</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.property.timeout">Timeout</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.property.unhealthyThreshold">UnhealthyThreshold</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheck">ElasticloadbalancingLoadBalancerHealthCheck</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HealthyThresholdInput`<sup>Optional</sup> <a name="HealthyThresholdInput" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.property.healthyThresholdInput"></a>

```csharp
public string HealthyThresholdInput { get; }
```

- *Type:* string

---

##### `IntervalInput`<sup>Optional</sup> <a name="IntervalInput" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.property.intervalInput"></a>

```csharp
public string IntervalInput { get; }
```

- *Type:* string

---

##### `TargetInput`<sup>Optional</sup> <a name="TargetInput" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.property.targetInput"></a>

```csharp
public string TargetInput { get; }
```

- *Type:* string

---

##### `TimeoutInput`<sup>Optional</sup> <a name="TimeoutInput" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.property.timeoutInput"></a>

```csharp
public string TimeoutInput { get; }
```

- *Type:* string

---

##### `UnhealthyThresholdInput`<sup>Optional</sup> <a name="UnhealthyThresholdInput" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.property.unhealthyThresholdInput"></a>

```csharp
public string UnhealthyThresholdInput { get; }
```

- *Type:* string

---

##### `HealthyThreshold`<sup>Required</sup> <a name="HealthyThreshold" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.property.healthyThreshold"></a>

```csharp
public string HealthyThreshold { get; }
```

- *Type:* string

---

##### `Interval`<sup>Required</sup> <a name="Interval" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.property.interval"></a>

```csharp
public string Interval { get; }
```

- *Type:* string

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.property.target"></a>

```csharp
public string Target { get; }
```

- *Type:* string

---

##### `Timeout`<sup>Required</sup> <a name="Timeout" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.property.timeout"></a>

```csharp
public string Timeout { get; }
```

- *Type:* string

---

##### `UnhealthyThreshold`<sup>Required</sup> <a name="UnhealthyThreshold" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.property.unhealthyThreshold"></a>

```csharp
public string UnhealthyThreshold { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ElasticloadbalancingLoadBalancerHealthCheck InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheck">ElasticloadbalancingLoadBalancerHealthCheck</a>

---


### ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyList <a name="ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyList" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyList.get"></a>

```csharp
private ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicy">ElasticloadbalancingLoadBalancerLbCookieStickinessPolicy</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyList.property.internalValue"></a>

```csharp
public IResolvable|ElasticloadbalancingLoadBalancerLbCookieStickinessPolicy[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicy">ElasticloadbalancingLoadBalancerLbCookieStickinessPolicy</a>[]

---


### ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference <a name="ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.resetCookieExpirationPeriod">ResetCookieExpirationPeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.resetPolicyName">ResetPolicyName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCookieExpirationPeriod` <a name="ResetCookieExpirationPeriod" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.resetCookieExpirationPeriod"></a>

```csharp
private void ResetCookieExpirationPeriod()
```

##### `ResetPolicyName` <a name="ResetPolicyName" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.resetPolicyName"></a>

```csharp
private void ResetPolicyName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.property.cookieExpirationPeriodInput">CookieExpirationPeriodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.property.policyNameInput">PolicyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.property.cookieExpirationPeriod">CookieExpirationPeriod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.property.policyName">PolicyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicy">ElasticloadbalancingLoadBalancerLbCookieStickinessPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CookieExpirationPeriodInput`<sup>Optional</sup> <a name="CookieExpirationPeriodInput" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.property.cookieExpirationPeriodInput"></a>

```csharp
public string CookieExpirationPeriodInput { get; }
```

- *Type:* string

---

##### `PolicyNameInput`<sup>Optional</sup> <a name="PolicyNameInput" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.property.policyNameInput"></a>

```csharp
public string PolicyNameInput { get; }
```

- *Type:* string

---

##### `CookieExpirationPeriod`<sup>Required</sup> <a name="CookieExpirationPeriod" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.property.cookieExpirationPeriod"></a>

```csharp
public string CookieExpirationPeriod { get; }
```

- *Type:* string

---

##### `PolicyName`<sup>Required</sup> <a name="PolicyName" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.property.policyName"></a>

```csharp
public string PolicyName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ElasticloadbalancingLoadBalancerLbCookieStickinessPolicy InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicy">ElasticloadbalancingLoadBalancerLbCookieStickinessPolicy</a>

---


### ElasticloadbalancingLoadBalancerListenersList <a name="ElasticloadbalancingLoadBalancerListenersList" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ElasticloadbalancingLoadBalancerListenersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersList.get"></a>

```csharp
private ElasticloadbalancingLoadBalancerListenersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListeners">ElasticloadbalancingLoadBalancerListeners</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersList.property.internalValue"></a>

```csharp
public IResolvable|ElasticloadbalancingLoadBalancerListeners[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListeners">ElasticloadbalancingLoadBalancerListeners</a>[]

---


### ElasticloadbalancingLoadBalancerListenersOutputReference <a name="ElasticloadbalancingLoadBalancerListenersOutputReference" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ElasticloadbalancingLoadBalancerListenersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.resetInstanceProtocol">ResetInstanceProtocol</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.resetPolicyNames">ResetPolicyNames</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.resetSslCertificateId">ResetSslCertificateId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetInstanceProtocol` <a name="ResetInstanceProtocol" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.resetInstanceProtocol"></a>

```csharp
private void ResetInstanceProtocol()
```

##### `ResetPolicyNames` <a name="ResetPolicyNames" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.resetPolicyNames"></a>

```csharp
private void ResetPolicyNames()
```

##### `ResetSslCertificateId` <a name="ResetSslCertificateId" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.resetSslCertificateId"></a>

```csharp
private void ResetSslCertificateId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.property.instancePortInput">InstancePortInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.property.instanceProtocolInput">InstanceProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.property.loadBalancerPortInput">LoadBalancerPortInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.property.policyNamesInput">PolicyNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.property.protocolInput">ProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.property.sslCertificateIdInput">SslCertificateIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.property.instancePort">InstancePort</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.property.instanceProtocol">InstanceProtocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.property.loadBalancerPort">LoadBalancerPort</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.property.policyNames">PolicyNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.property.protocol">Protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.property.sslCertificateId">SslCertificateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListeners">ElasticloadbalancingLoadBalancerListeners</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InstancePortInput`<sup>Optional</sup> <a name="InstancePortInput" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.property.instancePortInput"></a>

```csharp
public string InstancePortInput { get; }
```

- *Type:* string

---

##### `InstanceProtocolInput`<sup>Optional</sup> <a name="InstanceProtocolInput" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.property.instanceProtocolInput"></a>

```csharp
public string InstanceProtocolInput { get; }
```

- *Type:* string

---

##### `LoadBalancerPortInput`<sup>Optional</sup> <a name="LoadBalancerPortInput" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.property.loadBalancerPortInput"></a>

```csharp
public string LoadBalancerPortInput { get; }
```

- *Type:* string

---

##### `PolicyNamesInput`<sup>Optional</sup> <a name="PolicyNamesInput" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.property.policyNamesInput"></a>

```csharp
public string[] PolicyNamesInput { get; }
```

- *Type:* string[]

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.property.protocolInput"></a>

```csharp
public string ProtocolInput { get; }
```

- *Type:* string

---

##### `SslCertificateIdInput`<sup>Optional</sup> <a name="SslCertificateIdInput" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.property.sslCertificateIdInput"></a>

```csharp
public string SslCertificateIdInput { get; }
```

- *Type:* string

---

##### `InstancePort`<sup>Required</sup> <a name="InstancePort" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.property.instancePort"></a>

```csharp
public string InstancePort { get; }
```

- *Type:* string

---

##### `InstanceProtocol`<sup>Required</sup> <a name="InstanceProtocol" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.property.instanceProtocol"></a>

```csharp
public string InstanceProtocol { get; }
```

- *Type:* string

---

##### `LoadBalancerPort`<sup>Required</sup> <a name="LoadBalancerPort" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.property.loadBalancerPort"></a>

```csharp
public string LoadBalancerPort { get; }
```

- *Type:* string

---

##### `PolicyNames`<sup>Required</sup> <a name="PolicyNames" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.property.policyNames"></a>

```csharp
public string[] PolicyNames { get; }
```

- *Type:* string[]

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.property.protocol"></a>

```csharp
public string Protocol { get; }
```

- *Type:* string

---

##### `SslCertificateId`<sup>Required</sup> <a name="SslCertificateId" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.property.sslCertificateId"></a>

```csharp
public string SslCertificateId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ElasticloadbalancingLoadBalancerListeners InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListeners">ElasticloadbalancingLoadBalancerListeners</a>

---


### ElasticloadbalancingLoadBalancerPoliciesAttributesList <a name="ElasticloadbalancingLoadBalancerPoliciesAttributesList" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ElasticloadbalancingLoadBalancerPoliciesAttributesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesList.get"></a>

```csharp
private ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributes">ElasticloadbalancingLoadBalancerPoliciesAttributes</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesList.property.internalValue"></a>

```csharp
public IResolvable|ElasticloadbalancingLoadBalancerPoliciesAttributes[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributes">ElasticloadbalancingLoadBalancerPoliciesAttributes</a>[]

---


### ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference <a name="ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributes">ElasticloadbalancingLoadBalancerPoliciesAttributes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ElasticloadbalancingLoadBalancerPoliciesAttributes InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributes">ElasticloadbalancingLoadBalancerPoliciesAttributes</a>

---


### ElasticloadbalancingLoadBalancerPoliciesList <a name="ElasticloadbalancingLoadBalancerPoliciesList" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ElasticloadbalancingLoadBalancerPoliciesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesList.get"></a>

```csharp
private ElasticloadbalancingLoadBalancerPoliciesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPolicies">ElasticloadbalancingLoadBalancerPolicies</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesList.property.internalValue"></a>

```csharp
public IResolvable|ElasticloadbalancingLoadBalancerPolicies[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPolicies">ElasticloadbalancingLoadBalancerPolicies</a>[]

---


### ElasticloadbalancingLoadBalancerPoliciesOutputReference <a name="ElasticloadbalancingLoadBalancerPoliciesOutputReference" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ElasticloadbalancingLoadBalancerPoliciesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.putAttributes">PutAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.resetAttributes">ResetAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.resetInstancePorts">ResetInstancePorts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.resetLoadBalancerPorts">ResetLoadBalancerPorts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.resetPolicyName">ResetPolicyName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.resetPolicyType">ResetPolicyType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAttributes` <a name="PutAttributes" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.putAttributes"></a>

```csharp
private void PutAttributes(IResolvable|ElasticloadbalancingLoadBalancerPoliciesAttributes[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.putAttributes.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributes">ElasticloadbalancingLoadBalancerPoliciesAttributes</a>[]

---

##### `ResetAttributes` <a name="ResetAttributes" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.resetAttributes"></a>

```csharp
private void ResetAttributes()
```

##### `ResetInstancePorts` <a name="ResetInstancePorts" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.resetInstancePorts"></a>

```csharp
private void ResetInstancePorts()
```

##### `ResetLoadBalancerPorts` <a name="ResetLoadBalancerPorts" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.resetLoadBalancerPorts"></a>

```csharp
private void ResetLoadBalancerPorts()
```

##### `ResetPolicyName` <a name="ResetPolicyName" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.resetPolicyName"></a>

```csharp
private void ResetPolicyName()
```

##### `ResetPolicyType` <a name="ResetPolicyType" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.resetPolicyType"></a>

```csharp
private void ResetPolicyType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.property.attributes">Attributes</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesList">ElasticloadbalancingLoadBalancerPoliciesAttributesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.property.attributesInput">AttributesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributes">ElasticloadbalancingLoadBalancerPoliciesAttributes</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.property.instancePortsInput">InstancePortsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.property.loadBalancerPortsInput">LoadBalancerPortsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.property.policyNameInput">PolicyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.property.policyTypeInput">PolicyTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.property.instancePorts">InstancePorts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.property.loadBalancerPorts">LoadBalancerPorts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.property.policyName">PolicyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.property.policyType">PolicyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPolicies">ElasticloadbalancingLoadBalancerPolicies</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Attributes`<sup>Required</sup> <a name="Attributes" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.property.attributes"></a>

```csharp
public ElasticloadbalancingLoadBalancerPoliciesAttributesList Attributes { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesList">ElasticloadbalancingLoadBalancerPoliciesAttributesList</a>

---

##### `AttributesInput`<sup>Optional</sup> <a name="AttributesInput" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.property.attributesInput"></a>

```csharp
public IResolvable|ElasticloadbalancingLoadBalancerPoliciesAttributes[] AttributesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributes">ElasticloadbalancingLoadBalancerPoliciesAttributes</a>[]

---

##### `InstancePortsInput`<sup>Optional</sup> <a name="InstancePortsInput" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.property.instancePortsInput"></a>

```csharp
public string[] InstancePortsInput { get; }
```

- *Type:* string[]

---

##### `LoadBalancerPortsInput`<sup>Optional</sup> <a name="LoadBalancerPortsInput" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.property.loadBalancerPortsInput"></a>

```csharp
public string[] LoadBalancerPortsInput { get; }
```

- *Type:* string[]

---

##### `PolicyNameInput`<sup>Optional</sup> <a name="PolicyNameInput" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.property.policyNameInput"></a>

```csharp
public string PolicyNameInput { get; }
```

- *Type:* string

---

##### `PolicyTypeInput`<sup>Optional</sup> <a name="PolicyTypeInput" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.property.policyTypeInput"></a>

```csharp
public string PolicyTypeInput { get; }
```

- *Type:* string

---

##### `InstancePorts`<sup>Required</sup> <a name="InstancePorts" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.property.instancePorts"></a>

```csharp
public string[] InstancePorts { get; }
```

- *Type:* string[]

---

##### `LoadBalancerPorts`<sup>Required</sup> <a name="LoadBalancerPorts" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.property.loadBalancerPorts"></a>

```csharp
public string[] LoadBalancerPorts { get; }
```

- *Type:* string[]

---

##### `PolicyName`<sup>Required</sup> <a name="PolicyName" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.property.policyName"></a>

```csharp
public string PolicyName { get; }
```

- *Type:* string

---

##### `PolicyType`<sup>Required</sup> <a name="PolicyType" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.property.policyType"></a>

```csharp
public string PolicyType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ElasticloadbalancingLoadBalancerPolicies InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPolicies">ElasticloadbalancingLoadBalancerPolicies</a>

---


### ElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference <a name="ElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.property.groupName">GroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.property.ownerAlias">OwnerAlias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerSourceSecurityGroup">ElasticloadbalancingLoadBalancerSourceSecurityGroup</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GroupName`<sup>Required</sup> <a name="GroupName" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.property.groupName"></a>

```csharp
public string GroupName { get; }
```

- *Type:* string

---

##### `OwnerAlias`<sup>Required</sup> <a name="OwnerAlias" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.property.ownerAlias"></a>

```csharp
public string OwnerAlias { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.property.internalValue"></a>

```csharp
public ElasticloadbalancingLoadBalancerSourceSecurityGroup InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerSourceSecurityGroup">ElasticloadbalancingLoadBalancerSourceSecurityGroup</a>

---


### ElasticloadbalancingLoadBalancerTagsList <a name="ElasticloadbalancingLoadBalancerTagsList" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ElasticloadbalancingLoadBalancerTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsList.get"></a>

```csharp
private ElasticloadbalancingLoadBalancerTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTags">ElasticloadbalancingLoadBalancerTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsList.property.internalValue"></a>

```csharp
public IResolvable|ElasticloadbalancingLoadBalancerTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTags">ElasticloadbalancingLoadBalancerTags</a>[]

---


### ElasticloadbalancingLoadBalancerTagsOutputReference <a name="ElasticloadbalancingLoadBalancerTagsOutputReference" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ElasticloadbalancingLoadBalancerTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTags">ElasticloadbalancingLoadBalancerTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ElasticloadbalancingLoadBalancerTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTags">ElasticloadbalancingLoadBalancerTags</a>

---



