# `elasticloadbalancingv2LoadBalancer` Submodule <a name="`elasticloadbalancingv2LoadBalancer` Submodule" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Elasticloadbalancingv2LoadBalancer <a name="Elasticloadbalancingv2LoadBalancer" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_load_balancer awscc_elasticloadbalancingv2_load_balancer}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Elasticloadbalancingv2LoadBalancer(Construct Scope, string Id, Elasticloadbalancingv2LoadBalancerConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerConfig">Elasticloadbalancingv2LoadBalancerConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerConfig">Elasticloadbalancingv2LoadBalancerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.putLoadBalancerAttributes">PutLoadBalancerAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.putMinimumLoadBalancerCapacity">PutMinimumLoadBalancerCapacity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.putSubnetMappings">PutSubnetMappings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.resetEnableCapacityReservationProvisionStabilize">ResetEnableCapacityReservationProvisionStabilize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.resetEnablePrefixForIpv6SourceNat">ResetEnablePrefixForIpv6SourceNat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.resetEnforceSecurityGroupInboundRulesOnPrivateLinkTraffic">ResetEnforceSecurityGroupInboundRulesOnPrivateLinkTraffic</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.resetIpAddressType">ResetIpAddressType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.resetIpv4IpamPoolId">ResetIpv4IpamPoolId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.resetLoadBalancerAttributes">ResetLoadBalancerAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.resetMinimumLoadBalancerCapacity">ResetMinimumLoadBalancerCapacity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.resetScheme">ResetScheme</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.resetSecurityGroups">ResetSecurityGroups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.resetSubnetMappings">ResetSubnetMappings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.resetSubnets">ResetSubnets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.resetType">ResetType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutLoadBalancerAttributes` <a name="PutLoadBalancerAttributes" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.putLoadBalancerAttributes"></a>

```csharp
private void PutLoadBalancerAttributes(IResolvable|Elasticloadbalancingv2LoadBalancerLoadBalancerAttributes[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.putLoadBalancerAttributes.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributes">Elasticloadbalancingv2LoadBalancerLoadBalancerAttributes</a>[]

---

##### `PutMinimumLoadBalancerCapacity` <a name="PutMinimumLoadBalancerCapacity" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.putMinimumLoadBalancerCapacity"></a>

```csharp
private void PutMinimumLoadBalancerCapacity(Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacity Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.putMinimumLoadBalancerCapacity.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacity">Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacity</a>

---

##### `PutSubnetMappings` <a name="PutSubnetMappings" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.putSubnetMappings"></a>

```csharp
private void PutSubnetMappings(IResolvable|Elasticloadbalancingv2LoadBalancerSubnetMappings[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.putSubnetMappings.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappings">Elasticloadbalancingv2LoadBalancerSubnetMappings</a>[]

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.putTags"></a>

```csharp
private void PutTags(IResolvable|Elasticloadbalancingv2LoadBalancerTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTags">Elasticloadbalancingv2LoadBalancerTags</a>[]

---

##### `ResetEnableCapacityReservationProvisionStabilize` <a name="ResetEnableCapacityReservationProvisionStabilize" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.resetEnableCapacityReservationProvisionStabilize"></a>

```csharp
private void ResetEnableCapacityReservationProvisionStabilize()
```

##### `ResetEnablePrefixForIpv6SourceNat` <a name="ResetEnablePrefixForIpv6SourceNat" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.resetEnablePrefixForIpv6SourceNat"></a>

```csharp
private void ResetEnablePrefixForIpv6SourceNat()
```

##### `ResetEnforceSecurityGroupInboundRulesOnPrivateLinkTraffic` <a name="ResetEnforceSecurityGroupInboundRulesOnPrivateLinkTraffic" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.resetEnforceSecurityGroupInboundRulesOnPrivateLinkTraffic"></a>

```csharp
private void ResetEnforceSecurityGroupInboundRulesOnPrivateLinkTraffic()
```

##### `ResetIpAddressType` <a name="ResetIpAddressType" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.resetIpAddressType"></a>

```csharp
private void ResetIpAddressType()
```

##### `ResetIpv4IpamPoolId` <a name="ResetIpv4IpamPoolId" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.resetIpv4IpamPoolId"></a>

```csharp
private void ResetIpv4IpamPoolId()
```

##### `ResetLoadBalancerAttributes` <a name="ResetLoadBalancerAttributes" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.resetLoadBalancerAttributes"></a>

```csharp
private void ResetLoadBalancerAttributes()
```

##### `ResetMinimumLoadBalancerCapacity` <a name="ResetMinimumLoadBalancerCapacity" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.resetMinimumLoadBalancerCapacity"></a>

```csharp
private void ResetMinimumLoadBalancerCapacity()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetScheme` <a name="ResetScheme" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.resetScheme"></a>

```csharp
private void ResetScheme()
```

##### `ResetSecurityGroups` <a name="ResetSecurityGroups" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.resetSecurityGroups"></a>

```csharp
private void ResetSecurityGroups()
```

##### `ResetSubnetMappings` <a name="ResetSubnetMappings" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.resetSubnetMappings"></a>

```csharp
private void ResetSubnetMappings()
```

##### `ResetSubnets` <a name="ResetSubnets" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.resetSubnets"></a>

```csharp
private void ResetSubnets()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.resetType"></a>

```csharp
private void ResetType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a Elasticloadbalancingv2LoadBalancer resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Elasticloadbalancingv2LoadBalancer.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Elasticloadbalancingv2LoadBalancer.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Elasticloadbalancingv2LoadBalancer.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Elasticloadbalancingv2LoadBalancer.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a Elasticloadbalancingv2LoadBalancer resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Elasticloadbalancingv2LoadBalancer to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Elasticloadbalancingv2LoadBalancer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_load_balancer#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the Elasticloadbalancingv2LoadBalancer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.canonicalHostedZoneId">CanonicalHostedZoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.dnsName">DnsName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.loadBalancerArn">LoadBalancerArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.loadBalancerAttributes">LoadBalancerAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesList">Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.loadBalancerFullName">LoadBalancerFullName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.loadBalancerName">LoadBalancerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.minimumLoadBalancerCapacity">MinimumLoadBalancerCapacity</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference">Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.subnetMappings">SubnetMappings</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsList">Elasticloadbalancingv2LoadBalancerSubnetMappingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsList">Elasticloadbalancingv2LoadBalancerTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.enableCapacityReservationProvisionStabilizeInput">EnableCapacityReservationProvisionStabilizeInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.enablePrefixForIpv6SourceNatInput">EnablePrefixForIpv6SourceNatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.enforceSecurityGroupInboundRulesOnPrivateLinkTrafficInput">EnforceSecurityGroupInboundRulesOnPrivateLinkTrafficInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.ipAddressTypeInput">IpAddressTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.ipv4IpamPoolIdInput">Ipv4IpamPoolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.loadBalancerAttributesInput">LoadBalancerAttributesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributes">Elasticloadbalancingv2LoadBalancerLoadBalancerAttributes</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.minimumLoadBalancerCapacityInput">MinimumLoadBalancerCapacityInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacity">Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.schemeInput">SchemeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.securityGroupsInput">SecurityGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.subnetMappingsInput">SubnetMappingsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappings">Elasticloadbalancingv2LoadBalancerSubnetMappings</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.subnetsInput">SubnetsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTags">Elasticloadbalancingv2LoadBalancerTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.enableCapacityReservationProvisionStabilize">EnableCapacityReservationProvisionStabilize</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.enablePrefixForIpv6SourceNat">EnablePrefixForIpv6SourceNat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.enforceSecurityGroupInboundRulesOnPrivateLinkTraffic">EnforceSecurityGroupInboundRulesOnPrivateLinkTraffic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.ipAddressType">IpAddressType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.ipv4IpamPoolId">Ipv4IpamPoolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.scheme">Scheme</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.securityGroups">SecurityGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.subnets">Subnets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.type">Type</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CanonicalHostedZoneId`<sup>Required</sup> <a name="CanonicalHostedZoneId" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.canonicalHostedZoneId"></a>

```csharp
public string CanonicalHostedZoneId { get; }
```

- *Type:* string

---

##### `DnsName`<sup>Required</sup> <a name="DnsName" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.dnsName"></a>

```csharp
public string DnsName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LoadBalancerArn`<sup>Required</sup> <a name="LoadBalancerArn" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.loadBalancerArn"></a>

```csharp
public string LoadBalancerArn { get; }
```

- *Type:* string

---

##### `LoadBalancerAttributes`<sup>Required</sup> <a name="LoadBalancerAttributes" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.loadBalancerAttributes"></a>

```csharp
public Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesList LoadBalancerAttributes { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesList">Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesList</a>

---

##### `LoadBalancerFullName`<sup>Required</sup> <a name="LoadBalancerFullName" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.loadBalancerFullName"></a>

```csharp
public string LoadBalancerFullName { get; }
```

- *Type:* string

---

##### `LoadBalancerName`<sup>Required</sup> <a name="LoadBalancerName" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.loadBalancerName"></a>

```csharp
public string LoadBalancerName { get; }
```

- *Type:* string

---

##### `MinimumLoadBalancerCapacity`<sup>Required</sup> <a name="MinimumLoadBalancerCapacity" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.minimumLoadBalancerCapacity"></a>

```csharp
public Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference MinimumLoadBalancerCapacity { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference">Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference</a>

---

##### `SubnetMappings`<sup>Required</sup> <a name="SubnetMappings" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.subnetMappings"></a>

```csharp
public Elasticloadbalancingv2LoadBalancerSubnetMappingsList SubnetMappings { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsList">Elasticloadbalancingv2LoadBalancerSubnetMappingsList</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.tags"></a>

```csharp
public Elasticloadbalancingv2LoadBalancerTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsList">Elasticloadbalancingv2LoadBalancerTagsList</a>

---

##### `EnableCapacityReservationProvisionStabilizeInput`<sup>Optional</sup> <a name="EnableCapacityReservationProvisionStabilizeInput" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.enableCapacityReservationProvisionStabilizeInput"></a>

```csharp
public bool|IResolvable EnableCapacityReservationProvisionStabilizeInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EnablePrefixForIpv6SourceNatInput`<sup>Optional</sup> <a name="EnablePrefixForIpv6SourceNatInput" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.enablePrefixForIpv6SourceNatInput"></a>

```csharp
public string EnablePrefixForIpv6SourceNatInput { get; }
```

- *Type:* string

---

##### `EnforceSecurityGroupInboundRulesOnPrivateLinkTrafficInput`<sup>Optional</sup> <a name="EnforceSecurityGroupInboundRulesOnPrivateLinkTrafficInput" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.enforceSecurityGroupInboundRulesOnPrivateLinkTrafficInput"></a>

```csharp
public string EnforceSecurityGroupInboundRulesOnPrivateLinkTrafficInput { get; }
```

- *Type:* string

---

##### `IpAddressTypeInput`<sup>Optional</sup> <a name="IpAddressTypeInput" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.ipAddressTypeInput"></a>

```csharp
public string IpAddressTypeInput { get; }
```

- *Type:* string

---

##### `Ipv4IpamPoolIdInput`<sup>Optional</sup> <a name="Ipv4IpamPoolIdInput" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.ipv4IpamPoolIdInput"></a>

```csharp
public string Ipv4IpamPoolIdInput { get; }
```

- *Type:* string

---

##### `LoadBalancerAttributesInput`<sup>Optional</sup> <a name="LoadBalancerAttributesInput" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.loadBalancerAttributesInput"></a>

```csharp
public IResolvable|Elasticloadbalancingv2LoadBalancerLoadBalancerAttributes[] LoadBalancerAttributesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributes">Elasticloadbalancingv2LoadBalancerLoadBalancerAttributes</a>[]

---

##### `MinimumLoadBalancerCapacityInput`<sup>Optional</sup> <a name="MinimumLoadBalancerCapacityInput" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.minimumLoadBalancerCapacityInput"></a>

```csharp
public IResolvable|Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacity MinimumLoadBalancerCapacityInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacity">Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacity</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `SchemeInput`<sup>Optional</sup> <a name="SchemeInput" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.schemeInput"></a>

```csharp
public string SchemeInput { get; }
```

- *Type:* string

---

##### `SecurityGroupsInput`<sup>Optional</sup> <a name="SecurityGroupsInput" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.securityGroupsInput"></a>

```csharp
public string[] SecurityGroupsInput { get; }
```

- *Type:* string[]

---

##### `SubnetMappingsInput`<sup>Optional</sup> <a name="SubnetMappingsInput" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.subnetMappingsInput"></a>

```csharp
public IResolvable|Elasticloadbalancingv2LoadBalancerSubnetMappings[] SubnetMappingsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappings">Elasticloadbalancingv2LoadBalancerSubnetMappings</a>[]

---

##### `SubnetsInput`<sup>Optional</sup> <a name="SubnetsInput" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.subnetsInput"></a>

```csharp
public string[] SubnetsInput { get; }
```

- *Type:* string[]

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.tagsInput"></a>

```csharp
public IResolvable|Elasticloadbalancingv2LoadBalancerTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTags">Elasticloadbalancingv2LoadBalancerTags</a>[]

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `EnableCapacityReservationProvisionStabilize`<sup>Required</sup> <a name="EnableCapacityReservationProvisionStabilize" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.enableCapacityReservationProvisionStabilize"></a>

```csharp
public bool|IResolvable EnableCapacityReservationProvisionStabilize { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EnablePrefixForIpv6SourceNat`<sup>Required</sup> <a name="EnablePrefixForIpv6SourceNat" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.enablePrefixForIpv6SourceNat"></a>

```csharp
public string EnablePrefixForIpv6SourceNat { get; }
```

- *Type:* string

---

##### `EnforceSecurityGroupInboundRulesOnPrivateLinkTraffic`<sup>Required</sup> <a name="EnforceSecurityGroupInboundRulesOnPrivateLinkTraffic" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.enforceSecurityGroupInboundRulesOnPrivateLinkTraffic"></a>

```csharp
public string EnforceSecurityGroupInboundRulesOnPrivateLinkTraffic { get; }
```

- *Type:* string

---

##### `IpAddressType`<sup>Required</sup> <a name="IpAddressType" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.ipAddressType"></a>

```csharp
public string IpAddressType { get; }
```

- *Type:* string

---

##### `Ipv4IpamPoolId`<sup>Required</sup> <a name="Ipv4IpamPoolId" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.ipv4IpamPoolId"></a>

```csharp
public string Ipv4IpamPoolId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Scheme`<sup>Required</sup> <a name="Scheme" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.scheme"></a>

```csharp
public string Scheme { get; }
```

- *Type:* string

---

##### `SecurityGroups`<sup>Required</sup> <a name="SecurityGroups" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.securityGroups"></a>

```csharp
public string[] SecurityGroups { get; }
```

- *Type:* string[]

---

##### `Subnets`<sup>Required</sup> <a name="Subnets" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.subnets"></a>

```csharp
public string[] Subnets { get; }
```

- *Type:* string[]

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Elasticloadbalancingv2LoadBalancerConfig <a name="Elasticloadbalancingv2LoadBalancerConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Elasticloadbalancingv2LoadBalancerConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    bool|IResolvable EnableCapacityReservationProvisionStabilize = null,
    string EnablePrefixForIpv6SourceNat = null,
    string EnforceSecurityGroupInboundRulesOnPrivateLinkTraffic = null,
    string IpAddressType = null,
    string Ipv4IpamPoolId = null,
    IResolvable|Elasticloadbalancingv2LoadBalancerLoadBalancerAttributes[] LoadBalancerAttributes = null,
    Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacity MinimumLoadBalancerCapacity = null,
    string Name = null,
    string Scheme = null,
    string[] SecurityGroups = null,
    IResolvable|Elasticloadbalancingv2LoadBalancerSubnetMappings[] SubnetMappings = null,
    string[] Subnets = null,
    IResolvable|Elasticloadbalancingv2LoadBalancerTags[] Tags = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerConfig.property.enableCapacityReservationProvisionStabilize">EnableCapacityReservationProvisionStabilize</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Indicates whether to enable stabilization when creating or updating an LCU reservation. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerConfig.property.enablePrefixForIpv6SourceNat">EnablePrefixForIpv6SourceNat</a></code> | <code>string</code> | [Network Load Balancers with UDP listeners] Indicates whether to use an IPv6 prefix from each subnet for source NAT. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerConfig.property.enforceSecurityGroupInboundRulesOnPrivateLinkTraffic">EnforceSecurityGroupInboundRulesOnPrivateLinkTraffic</a></code> | <code>string</code> | Indicates whether to evaluate inbound security group rules for traffic sent to a Network Load Balancer through privatelink. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerConfig.property.ipAddressType">IpAddressType</a></code> | <code>string</code> | The IP address type. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerConfig.property.ipv4IpamPoolId">Ipv4IpamPoolId</a></code> | <code>string</code> | The ID of the IPv4 IPAM pool. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerConfig.property.loadBalancerAttributes">LoadBalancerAttributes</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributes">Elasticloadbalancingv2LoadBalancerLoadBalancerAttributes</a>[]</code> | The load balancer attributes. Attributes that you do not modify retain their current values. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerConfig.property.minimumLoadBalancerCapacity">MinimumLoadBalancerCapacity</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacity">Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacity</a></code> | The minimum capacity for a load balancer. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerConfig.property.name">Name</a></code> | <code>string</code> | The name of the load balancer. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerConfig.property.scheme">Scheme</a></code> | <code>string</code> | The nodes of an Internet-facing load balancer have public IP addresses. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerConfig.property.securityGroups">SecurityGroups</a></code> | <code>string[]</code> | [Application Load Balancers and Network Load Balancers] The IDs of the security groups for the load balancer. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerConfig.property.subnetMappings">SubnetMappings</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappings">Elasticloadbalancingv2LoadBalancerSubnetMappings</a>[]</code> | The IDs of the subnets. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerConfig.property.subnets">Subnets</a></code> | <code>string[]</code> | The IDs of the subnets. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTags">Elasticloadbalancingv2LoadBalancerTags</a>[]</code> | The tags to assign to the load balancer. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerConfig.property.type">Type</a></code> | <code>string</code> | The type of load balancer. The default is ``application``. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `EnableCapacityReservationProvisionStabilize`<sup>Optional</sup> <a name="EnableCapacityReservationProvisionStabilize" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerConfig.property.enableCapacityReservationProvisionStabilize"></a>

```csharp
public bool|IResolvable EnableCapacityReservationProvisionStabilize { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Indicates whether to enable stabilization when creating or updating an LCU reservation.

This ensures that the final stack status reflects the status of the LCU reservation. The default is `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_load_balancer#enable_capacity_reservation_provision_stabilize Elasticloadbalancingv2LoadBalancer#enable_capacity_reservation_provision_stabilize}

---

##### `EnablePrefixForIpv6SourceNat`<sup>Optional</sup> <a name="EnablePrefixForIpv6SourceNat" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerConfig.property.enablePrefixForIpv6SourceNat"></a>

```csharp
public string EnablePrefixForIpv6SourceNat { get; set; }
```

- *Type:* string

[Network Load Balancers with UDP listeners] Indicates whether to use an IPv6 prefix from each subnet for source NAT.

The IP address type must be `dualstack`. The default value is `off`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_load_balancer#enable_prefix_for_ipv_6_source_nat Elasticloadbalancingv2LoadBalancer#enable_prefix_for_ipv_6_source_nat}

---

##### `EnforceSecurityGroupInboundRulesOnPrivateLinkTraffic`<sup>Optional</sup> <a name="EnforceSecurityGroupInboundRulesOnPrivateLinkTraffic" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerConfig.property.enforceSecurityGroupInboundRulesOnPrivateLinkTraffic"></a>

```csharp
public string EnforceSecurityGroupInboundRulesOnPrivateLinkTraffic { get; set; }
```

- *Type:* string

Indicates whether to evaluate inbound security group rules for traffic sent to a Network Load Balancer through privatelink.

The default is `on`.
You can't configure this property on a Network Load Balancer unless you associated a security group with the load balancer when you created it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_load_balancer#enforce_security_group_inbound_rules_on_private_link_traffic Elasticloadbalancingv2LoadBalancer#enforce_security_group_inbound_rules_on_private_link_traffic}

---

##### `IpAddressType`<sup>Optional</sup> <a name="IpAddressType" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerConfig.property.ipAddressType"></a>

```csharp
public string IpAddressType { get; set; }
```

- *Type:* string

The IP address type.

Internal load balancers must use `ipv4`.
[Application Load Balancers] The possible values are `ipv4` (IPv4 addresses), `dualstack` (IPv4 and IPv6 addresses), and `dualstack-without-public-ipv4` (public IPv6 addresses and private IPv4 and IPv6 addresses).
Application Load Balancer authentication supports IPv4 addresses only when connecting to an Identity Provider (IdP) or Amazon Cognito endpoint. Without a public IPv4 address the load balancer can't complete the authentication process, resulting in HTTP 500 errors.
[Network Load Balancers and Gateway Load Balancers] The possible values are `ipv4` (IPv4 addresses) and `dualstack` (IPv4 and IPv6 addresses).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_load_balancer#ip_address_type Elasticloadbalancingv2LoadBalancer#ip_address_type}

---

##### `Ipv4IpamPoolId`<sup>Optional</sup> <a name="Ipv4IpamPoolId" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerConfig.property.ipv4IpamPoolId"></a>

```csharp
public string Ipv4IpamPoolId { get; set; }
```

- *Type:* string

The ID of the IPv4 IPAM pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_load_balancer#ipv_4_ipam_pool_id Elasticloadbalancingv2LoadBalancer#ipv_4_ipam_pool_id}

---

##### `LoadBalancerAttributes`<sup>Optional</sup> <a name="LoadBalancerAttributes" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerConfig.property.loadBalancerAttributes"></a>

```csharp
public IResolvable|Elasticloadbalancingv2LoadBalancerLoadBalancerAttributes[] LoadBalancerAttributes { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributes">Elasticloadbalancingv2LoadBalancerLoadBalancerAttributes</a>[]

The load balancer attributes. Attributes that you do not modify retain their current values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_load_balancer#load_balancer_attributes Elasticloadbalancingv2LoadBalancer#load_balancer_attributes}

---

##### `MinimumLoadBalancerCapacity`<sup>Optional</sup> <a name="MinimumLoadBalancerCapacity" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerConfig.property.minimumLoadBalancerCapacity"></a>

```csharp
public Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacity MinimumLoadBalancerCapacity { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacity">Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacity</a>

The minimum capacity for a load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_load_balancer#minimum_load_balancer_capacity Elasticloadbalancingv2LoadBalancer#minimum_load_balancer_capacity}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the load balancer.

This name must be unique per region per account, can have a maximum of 32 characters, must contain only alphanumeric characters or hyphens, must not begin or end with a hyphen, and must not begin with "internal-".
If you don't specify a name, AWS CloudFormation generates a unique physical ID for the load balancer. If you specify a name, you cannot perform updates that require replacement of this resource, but you can perform other updates. To replace the resource, specify a new name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_load_balancer#name Elasticloadbalancingv2LoadBalancer#name}

---

##### `Scheme`<sup>Optional</sup> <a name="Scheme" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerConfig.property.scheme"></a>

```csharp
public string Scheme { get; set; }
```

- *Type:* string

The nodes of an Internet-facing load balancer have public IP addresses.

The DNS name of an Internet-facing load balancer is publicly resolvable to the public IP addresses of the nodes. Therefore, Internet-facing load balancers can route requests from clients over the internet.
The nodes of an internal load balancer have only private IP addresses. The DNS name of an internal load balancer is publicly resolvable to the private IP addresses of the nodes. Therefore, internal load balancers can route requests only from clients with access to the VPC for the load balancer.
The default is an Internet-facing load balancer.
You can't specify a scheme for a Gateway Load Balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_load_balancer#scheme Elasticloadbalancingv2LoadBalancer#scheme}

---

##### `SecurityGroups`<sup>Optional</sup> <a name="SecurityGroups" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerConfig.property.securityGroups"></a>

```csharp
public string[] SecurityGroups { get; set; }
```

- *Type:* string[]

[Application Load Balancers and Network Load Balancers] The IDs of the security groups for the load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_load_balancer#security_groups Elasticloadbalancingv2LoadBalancer#security_groups}

---

##### `SubnetMappings`<sup>Optional</sup> <a name="SubnetMappings" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerConfig.property.subnetMappings"></a>

```csharp
public IResolvable|Elasticloadbalancingv2LoadBalancerSubnetMappings[] SubnetMappings { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappings">Elasticloadbalancingv2LoadBalancerSubnetMappings</a>[]

The IDs of the subnets.

You can specify only one subnet per Availability Zone. You must specify either subnets or subnet mappings, but not both.
[Application Load Balancers] You must specify subnets from at least two Availability Zones. You can't specify Elastic IP addresses for your subnets.
[Application Load Balancers on Outposts] You must specify one Outpost subnet.
[Application Load Balancers on Local Zones] You can specify subnets from one or more Local Zones.
[Network Load Balancers] You can specify subnets from one or more Availability Zones. You can specify one Elastic IP address per subnet if you need static IP addresses for your internet-facing load balancer. For internal load balancers, you can specify one private IP address per subnet from the IPv4 range of the subnet. For internet-facing load balancer, you can specify one IPv6 address per subnet.
[Gateway Load Balancers] You can specify subnets from one or more Availability Zones. You can't specify Elastic IP addresses for your subnets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_load_balancer#subnet_mappings Elasticloadbalancingv2LoadBalancer#subnet_mappings}

---

##### `Subnets`<sup>Optional</sup> <a name="Subnets" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerConfig.property.subnets"></a>

```csharp
public string[] Subnets { get; set; }
```

- *Type:* string[]

The IDs of the subnets.

You can specify only one subnet per Availability Zone. You must specify either subnets or subnet mappings, but not both. To specify an Elastic IP address, specify subnet mappings instead of subnets.
[Application Load Balancers] You must specify subnets from at least two Availability Zones.
[Application Load Balancers on Outposts] You must specify one Outpost subnet.
[Application Load Balancers on Local Zones] You can specify subnets from one or more Local Zones.
[Network Load Balancers and Gateway Load Balancers] You can specify subnets from one or more Availability Zones.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_load_balancer#subnets Elasticloadbalancingv2LoadBalancer#subnets}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerConfig.property.tags"></a>

```csharp
public IResolvable|Elasticloadbalancingv2LoadBalancerTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTags">Elasticloadbalancingv2LoadBalancerTags</a>[]

The tags to assign to the load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_load_balancer#tags Elasticloadbalancingv2LoadBalancer#tags}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The type of load balancer. The default is ``application``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_load_balancer#type Elasticloadbalancingv2LoadBalancer#type}

---

### Elasticloadbalancingv2LoadBalancerLoadBalancerAttributes <a name="Elasticloadbalancingv2LoadBalancerLoadBalancerAttributes" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributes.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Elasticloadbalancingv2LoadBalancerLoadBalancerAttributes {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributes.property.key">Key</a></code> | <code>string</code> | The name of the attribute. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributes.property.value">Value</a></code> | <code>string</code> | The value of the attribute. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributes.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The name of the attribute.

The following attributes are supported by all load balancers:

* `deletion_protection.enabled` - Indicates whether deletion protection is enabled. The value is `true` or `false`. The default is `false`.
* `load_balancing.cross_zone.enabled` - Indicates whether cross-zone load balancing is enabled. The possible values are `true` and `false`. The default for Network Load Balancers and Gateway Load Balancers is `false`. The default for Application Load Balancers is `true`, and can't be changed.

The following attributes are supported by both Application Load Balancers and Network Load Balancers:

* `access_logs.s3.enabled` - Indicates whether access logs are enabled. The value is `true` or `false`. The default is `false`.
* `access_logs.s3.bucket` - The name of the S3 bucket for the access logs. This attribute is required if access logs are enabled. The bucket must exist in the same region as the load balancer and have a bucket policy that grants Elastic Load Balancing permissions to write to the bucket.
* `access_logs.s3.prefix` - The prefix for the location in the S3 bucket for the access logs.
* `ipv6.deny_all_igw_traffic` - Blocks internet gateway (IGW) access to the load balancer. It is set to `false` for internet-facing load balancers and `true` for internal load balancers, preventing unintended access to your internal load balancer through an internet gateway.
* `zonal_shift.config.enabled` - Indicates whether zonal shift is enabled. The possible values are `true` and `false`. The default is `false`.

The following attributes are supported by only Application Load Balancers:

* `idle_timeout.timeout_seconds` - The idle timeout value, in seconds. The valid range is 1-4000 seconds. The default is 60 seconds.
* `client_keep_alive.seconds` - The client keep alive value, in seconds. The valid range is 60-604800 seconds. The default is 3600 seconds.
* `connection_logs.s3.enabled` - Indicates whether connection logs are enabled. The value is `true` or `false`. The default is `false`.
* `connection_logs.s3.bucket` - The name of the S3 bucket for the connection logs. This attribute is required if connection logs are enabled. The bucket must exist in the same region as the load balancer and have a bucket policy that grants Elastic Load Balancing permissions to write to the bucket.
* `connection_logs.s3.prefix` - The prefix for the location in the S3 bucket for the connection logs.
* `health_check_logs.s3.enabled` - Indicates whether health check logs are enabled. The value is `true` or `false`. The default is `false`.
* `health_check_logs.s3.bucket` - The name of the S3 bucket for the health check logs. This attribute is required if health check logs are enabled. The bucket must exist in the same region as the load balancer and have a bucket policy that grants Elastic Load Balancing permissions to write to the bucket.
* `health_check_logs.s3.prefix` - The prefix for the location in the S3 bucket for the health check logs.
* `routing.http.desync_mitigation_mode` - Determines how the load balancer handles requests that might pose a security risk to your application. The possible values are `monitor`, `defensive`, and `strictest`. The default is `defensive`.
* `routing.http.drop_invalid_header_fields.enabled` - Indicates whether HTTP headers with invalid header fields are removed by the load balancer (`true`) or routed to targets (`false`). The default is `false`.
* `routing.http.preserve_host_header.enabled` - Indicates whether the Application Load Balancer should preserve the `Host` header in the HTTP request and send it to the target without any change. The possible values are `true` and `false`. The default is `false`.
* `routing.http.x_amzn_tls_version_and_cipher_suite.enabled` - Indicates whether the two headers (`x-amzn-tls-version` and `x-amzn-tls-cipher-suite`), which contain information about the negotiated TLS version and cipher suite, are added to the client request before sending it to the target. The `x-amzn-tls-version` header has information about the TLS protocol version negotiated with the client, and the `x-amzn-tls-cipher-suite` header has information about the cipher suite negotiated with the client. Both headers are in OpenSSL format. The possible values for the attribute are `true` and `false`. The default is `false`.
* `routing.http.xff_client_port.enabled` - Indicates whether the `X-Forwarded-For` header should preserve the source port that the client used to connect to the load balancer. The possible values are `true` and `false`. The default is `false`.
* `routing.http.xff_header_processing.mode` - Enables you to modify, preserve, or remove the `X-Forwarded-For` header in the HTTP request before the Application Load Balancer sends the request to the target. The possible values are `append`, `preserve`, and `remove`. The default is `append`.
* If the value is `append`, the Application Load Balancer adds the client IP address (of the last hop) to the `X-Forwarded-For` header in the HTTP request before it sends it to targets.
* If the value is `preserve` the Application Load Balancer preserves the `X-Forwarded-For` header in the HTTP request, and sends it to targets without any change.
* If the value is `remove`, the Application Load Balancer removes the `X-Forwarded-For` header in the HTTP request before it sends it to targets.
* `routing.http2.enabled` - Indicates whether clients can connect to the load balancer using HTTP/2. If `true`, clients can connect using HTTP/2 or HTTP/1.1. However, all client requests are subject to the stricter HTTP/2 header validation rules. For example, message header names must contain only alphanumeric characters and hyphens. If `false`, clients must connect using HTTP/1.1. The default is `true`.
* `waf.fail_open.enabled` - Indicates whether to allow a WAF-enabled load balancer to route requests to targets if it is unable to forward the request to AWS WAF. The possible values are `true` and `false`. The default is `false`.

The following attributes are supported by only Network Load Balancers:

* `dns_record.client_routing_policy` - Indicates how traffic is distributed among the load balancer Availability Zones. The possible values are `availability_zone_affinity` with 100 percent zonal affinity, `partial_availability_zone_affinity` with 85 percent zonal affinity, and `any_availability_zone` with 0 percent zonal affinity.
* `secondary_ips.auto_assigned.per_subnet` - The number of secondary IP addresses to configure for your load balancer nodes. Use to address port allocation errors if you can't add targets. The valid range is 0 to 7. The default is 0. After you set this value, you can't decrease it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_load_balancer#key Elasticloadbalancingv2LoadBalancer#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributes.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value of the attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_load_balancer#value Elasticloadbalancingv2LoadBalancer#value}

---

### Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacity <a name="Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacity" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacity.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacity {
    double CapacityUnits = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacity.property.capacityUnits">CapacityUnits</a></code> | <code>double</code> | The number of capacity units. |

---

##### `CapacityUnits`<sup>Optional</sup> <a name="CapacityUnits" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacity.property.capacityUnits"></a>

```csharp
public double CapacityUnits { get; set; }
```

- *Type:* double

The number of capacity units.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_load_balancer#capacity_units Elasticloadbalancingv2LoadBalancer#capacity_units}

---

### Elasticloadbalancingv2LoadBalancerSubnetMappings <a name="Elasticloadbalancingv2LoadBalancerSubnetMappings" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Elasticloadbalancingv2LoadBalancerSubnetMappings {
    string AllocationId = null,
    string IPv6Address = null,
    string PrivateIPv4Address = null,
    string SourceNatIpv6Prefix = null,
    string SubnetId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappings.property.allocationId">AllocationId</a></code> | <code>string</code> | [Network Load Balancers] The allocation ID of the Elastic IP address for an internet-facing load balancer. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappings.property.iPv6Address">IPv6Address</a></code> | <code>string</code> | [Network Load Balancers] The IPv6 address. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappings.property.privateIPv4Address">PrivateIPv4Address</a></code> | <code>string</code> | [Network Load Balancers] The private IPv4 address for an internal load balancer. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappings.property.sourceNatIpv6Prefix">SourceNatIpv6Prefix</a></code> | <code>string</code> | [Network Load Balancers with UDP listeners] The IPv6 prefix to use for source NAT. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappings.property.subnetId">SubnetId</a></code> | <code>string</code> | The ID of the subnet. |

---

##### `AllocationId`<sup>Optional</sup> <a name="AllocationId" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappings.property.allocationId"></a>

```csharp
public string AllocationId { get; set; }
```

- *Type:* string

[Network Load Balancers] The allocation ID of the Elastic IP address for an internet-facing load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_load_balancer#allocation_id Elasticloadbalancingv2LoadBalancer#allocation_id}

---

##### `IPv6Address`<sup>Optional</sup> <a name="IPv6Address" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappings.property.iPv6Address"></a>

```csharp
public string IPv6Address { get; set; }
```

- *Type:* string

[Network Load Balancers] The IPv6 address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_load_balancer#i_pv_6_address Elasticloadbalancingv2LoadBalancer#i_pv_6_address}

---

##### `PrivateIPv4Address`<sup>Optional</sup> <a name="PrivateIPv4Address" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappings.property.privateIPv4Address"></a>

```csharp
public string PrivateIPv4Address { get; set; }
```

- *Type:* string

[Network Load Balancers] The private IPv4 address for an internal load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_load_balancer#private_i_pv_4_address Elasticloadbalancingv2LoadBalancer#private_i_pv_4_address}

---

##### `SourceNatIpv6Prefix`<sup>Optional</sup> <a name="SourceNatIpv6Prefix" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappings.property.sourceNatIpv6Prefix"></a>

```csharp
public string SourceNatIpv6Prefix { get; set; }
```

- *Type:* string

[Network Load Balancers with UDP listeners] The IPv6 prefix to use for source NAT.

Specify an IPv6 prefix (/80 netmask) from the subnet CIDR block or `auto_assigned` to use an IPv6 prefix selected at random from the subnet CIDR block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_load_balancer#source_nat_ipv_6_prefix Elasticloadbalancingv2LoadBalancer#source_nat_ipv_6_prefix}

---

##### `SubnetId`<sup>Optional</sup> <a name="SubnetId" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappings.property.subnetId"></a>

```csharp
public string SubnetId { get; set; }
```

- *Type:* string

The ID of the subnet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_load_balancer#subnet_id Elasticloadbalancingv2LoadBalancer#subnet_id}

---

### Elasticloadbalancingv2LoadBalancerTags <a name="Elasticloadbalancingv2LoadBalancerTags" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Elasticloadbalancingv2LoadBalancerTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTags.property.key">Key</a></code> | <code>string</code> | The key of the tag. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTags.property.value">Value</a></code> | <code>string</code> | The value of the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_load_balancer#key Elasticloadbalancingv2LoadBalancer#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_load_balancer#value Elasticloadbalancingv2LoadBalancer#value}

---

## Classes <a name="Classes" id="Classes"></a>

### Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesList <a name="Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesList" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesList.get"></a>

```csharp
private Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributes">Elasticloadbalancingv2LoadBalancerLoadBalancerAttributes</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesList.property.internalValue"></a>

```csharp
public IResolvable|Elasticloadbalancingv2LoadBalancerLoadBalancerAttributes[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributes">Elasticloadbalancingv2LoadBalancerLoadBalancerAttributes</a>[]

---


### Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference <a name="Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributes">Elasticloadbalancingv2LoadBalancerLoadBalancerAttributes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Elasticloadbalancingv2LoadBalancerLoadBalancerAttributes InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributes">Elasticloadbalancingv2LoadBalancerLoadBalancerAttributes</a>

---


### Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference <a name="Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.resetCapacityUnits">ResetCapacityUnits</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCapacityUnits` <a name="ResetCapacityUnits" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.resetCapacityUnits"></a>

```csharp
private void ResetCapacityUnits()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.property.capacityUnitsInput">CapacityUnitsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.property.capacityUnits">CapacityUnits</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacity">Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CapacityUnitsInput`<sup>Optional</sup> <a name="CapacityUnitsInput" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.property.capacityUnitsInput"></a>

```csharp
public double CapacityUnitsInput { get; }
```

- *Type:* double

---

##### `CapacityUnits`<sup>Required</sup> <a name="CapacityUnits" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.property.capacityUnits"></a>

```csharp
public double CapacityUnits { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacity InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacity">Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacity</a>

---


### Elasticloadbalancingv2LoadBalancerSubnetMappingsList <a name="Elasticloadbalancingv2LoadBalancerSubnetMappingsList" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Elasticloadbalancingv2LoadBalancerSubnetMappingsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsList.get"></a>

```csharp
private Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappings">Elasticloadbalancingv2LoadBalancerSubnetMappings</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsList.property.internalValue"></a>

```csharp
public IResolvable|Elasticloadbalancingv2LoadBalancerSubnetMappings[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappings">Elasticloadbalancingv2LoadBalancerSubnetMappings</a>[]

---


### Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference <a name="Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.resetAllocationId">ResetAllocationId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.resetIPv6Address">ResetIPv6Address</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.resetPrivateIPv4Address">ResetPrivateIPv4Address</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.resetSourceNatIpv6Prefix">ResetSourceNatIpv6Prefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.resetSubnetId">ResetSubnetId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllocationId` <a name="ResetAllocationId" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.resetAllocationId"></a>

```csharp
private void ResetAllocationId()
```

##### `ResetIPv6Address` <a name="ResetIPv6Address" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.resetIPv6Address"></a>

```csharp
private void ResetIPv6Address()
```

##### `ResetPrivateIPv4Address` <a name="ResetPrivateIPv4Address" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.resetPrivateIPv4Address"></a>

```csharp
private void ResetPrivateIPv4Address()
```

##### `ResetSourceNatIpv6Prefix` <a name="ResetSourceNatIpv6Prefix" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.resetSourceNatIpv6Prefix"></a>

```csharp
private void ResetSourceNatIpv6Prefix()
```

##### `ResetSubnetId` <a name="ResetSubnetId" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.resetSubnetId"></a>

```csharp
private void ResetSubnetId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.property.allocationIdInput">AllocationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.property.iPv6AddressInput">IPv6AddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.property.privateIPv4AddressInput">PrivateIPv4AddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.property.sourceNatIpv6PrefixInput">SourceNatIpv6PrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.property.subnetIdInput">SubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.property.allocationId">AllocationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.property.iPv6Address">IPv6Address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.property.privateIPv4Address">PrivateIPv4Address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.property.sourceNatIpv6Prefix">SourceNatIpv6Prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.property.subnetId">SubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappings">Elasticloadbalancingv2LoadBalancerSubnetMappings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllocationIdInput`<sup>Optional</sup> <a name="AllocationIdInput" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.property.allocationIdInput"></a>

```csharp
public string AllocationIdInput { get; }
```

- *Type:* string

---

##### `IPv6AddressInput`<sup>Optional</sup> <a name="IPv6AddressInput" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.property.iPv6AddressInput"></a>

```csharp
public string IPv6AddressInput { get; }
```

- *Type:* string

---

##### `PrivateIPv4AddressInput`<sup>Optional</sup> <a name="PrivateIPv4AddressInput" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.property.privateIPv4AddressInput"></a>

```csharp
public string PrivateIPv4AddressInput { get; }
```

- *Type:* string

---

##### `SourceNatIpv6PrefixInput`<sup>Optional</sup> <a name="SourceNatIpv6PrefixInput" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.property.sourceNatIpv6PrefixInput"></a>

```csharp
public string SourceNatIpv6PrefixInput { get; }
```

- *Type:* string

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.property.subnetIdInput"></a>

```csharp
public string SubnetIdInput { get; }
```

- *Type:* string

---

##### `AllocationId`<sup>Required</sup> <a name="AllocationId" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.property.allocationId"></a>

```csharp
public string AllocationId { get; }
```

- *Type:* string

---

##### `IPv6Address`<sup>Required</sup> <a name="IPv6Address" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.property.iPv6Address"></a>

```csharp
public string IPv6Address { get; }
```

- *Type:* string

---

##### `PrivateIPv4Address`<sup>Required</sup> <a name="PrivateIPv4Address" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.property.privateIPv4Address"></a>

```csharp
public string PrivateIPv4Address { get; }
```

- *Type:* string

---

##### `SourceNatIpv6Prefix`<sup>Required</sup> <a name="SourceNatIpv6Prefix" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.property.sourceNatIpv6Prefix"></a>

```csharp
public string SourceNatIpv6Prefix { get; }
```

- *Type:* string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.property.subnetId"></a>

```csharp
public string SubnetId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Elasticloadbalancingv2LoadBalancerSubnetMappings InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappings">Elasticloadbalancingv2LoadBalancerSubnetMappings</a>

---


### Elasticloadbalancingv2LoadBalancerTagsList <a name="Elasticloadbalancingv2LoadBalancerTagsList" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Elasticloadbalancingv2LoadBalancerTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsList.get"></a>

```csharp
private Elasticloadbalancingv2LoadBalancerTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTags">Elasticloadbalancingv2LoadBalancerTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsList.property.internalValue"></a>

```csharp
public IResolvable|Elasticloadbalancingv2LoadBalancerTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTags">Elasticloadbalancingv2LoadBalancerTags</a>[]

---


### Elasticloadbalancingv2LoadBalancerTagsOutputReference <a name="Elasticloadbalancingv2LoadBalancerTagsOutputReference" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Elasticloadbalancingv2LoadBalancerTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTags">Elasticloadbalancingv2LoadBalancerTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Elasticloadbalancingv2LoadBalancerTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTags">Elasticloadbalancingv2LoadBalancerTags</a>

---



