# `ec2VpcEndpointService` Submodule <a name="`ec2VpcEndpointService` Submodule" id="@cdktn/provider-awscc.ec2VpcEndpointService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2VpcEndpointService <a name="Ec2VpcEndpointService" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_vpc_endpoint_service awscc_ec2_vpc_endpoint_service}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2VpcEndpointService(Construct Scope, string Id, Ec2VpcEndpointServiceConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceConfig">Ec2VpcEndpointServiceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceConfig">Ec2VpcEndpointServiceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.putPrivateDnsNameConfiguration">PutPrivateDnsNameConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.resetAcceptanceRequired">ResetAcceptanceRequired</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.resetContributorInsightsEnabled">ResetContributorInsightsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.resetGatewayLoadBalancerArns">ResetGatewayLoadBalancerArns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.resetNetworkLoadBalancerArns">ResetNetworkLoadBalancerArns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.resetPayerResponsibility">ResetPayerResponsibility</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.resetPrivateDnsName">ResetPrivateDnsName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.resetPrivateDnsNameConfiguration">ResetPrivateDnsNameConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.resetSupportedIpAddressTypes">ResetSupportedIpAddressTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.resetSupportedRegions">ResetSupportedRegions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutPrivateDnsNameConfiguration` <a name="PutPrivateDnsNameConfiguration" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.putPrivateDnsNameConfiguration"></a>

```csharp
private void PutPrivateDnsNameConfiguration(Ec2VpcEndpointServicePrivateDnsNameConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.putPrivateDnsNameConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServicePrivateDnsNameConfiguration">Ec2VpcEndpointServicePrivateDnsNameConfiguration</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.putTags"></a>

```csharp
private void PutTags(IResolvable|Ec2VpcEndpointServiceTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTags">Ec2VpcEndpointServiceTags</a>[]

---

##### `ResetAcceptanceRequired` <a name="ResetAcceptanceRequired" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.resetAcceptanceRequired"></a>

```csharp
private void ResetAcceptanceRequired()
```

##### `ResetContributorInsightsEnabled` <a name="ResetContributorInsightsEnabled" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.resetContributorInsightsEnabled"></a>

```csharp
private void ResetContributorInsightsEnabled()
```

##### `ResetGatewayLoadBalancerArns` <a name="ResetGatewayLoadBalancerArns" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.resetGatewayLoadBalancerArns"></a>

```csharp
private void ResetGatewayLoadBalancerArns()
```

##### `ResetNetworkLoadBalancerArns` <a name="ResetNetworkLoadBalancerArns" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.resetNetworkLoadBalancerArns"></a>

```csharp
private void ResetNetworkLoadBalancerArns()
```

##### `ResetPayerResponsibility` <a name="ResetPayerResponsibility" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.resetPayerResponsibility"></a>

```csharp
private void ResetPayerResponsibility()
```

##### `ResetPrivateDnsName` <a name="ResetPrivateDnsName" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.resetPrivateDnsName"></a>

```csharp
private void ResetPrivateDnsName()
```

##### `ResetPrivateDnsNameConfiguration` <a name="ResetPrivateDnsNameConfiguration" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.resetPrivateDnsNameConfiguration"></a>

```csharp
private void ResetPrivateDnsNameConfiguration()
```

##### `ResetSupportedIpAddressTypes` <a name="ResetSupportedIpAddressTypes" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.resetSupportedIpAddressTypes"></a>

```csharp
private void ResetSupportedIpAddressTypes()
```

##### `ResetSupportedRegions` <a name="ResetSupportedRegions" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.resetSupportedRegions"></a>

```csharp
private void ResetSupportedRegions()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a Ec2VpcEndpointService resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Ec2VpcEndpointService.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Ec2VpcEndpointService.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Ec2VpcEndpointService.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Ec2VpcEndpointService.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a Ec2VpcEndpointService resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Ec2VpcEndpointService to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Ec2VpcEndpointService that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_vpc_endpoint_service#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the Ec2VpcEndpointService to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.privateDnsNameConfiguration">PrivateDnsNameConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServicePrivateDnsNameConfigurationOutputReference">Ec2VpcEndpointServicePrivateDnsNameConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.serviceId">ServiceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsList">Ec2VpcEndpointServiceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.acceptanceRequiredInput">AcceptanceRequiredInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.contributorInsightsEnabledInput">ContributorInsightsEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.gatewayLoadBalancerArnsInput">GatewayLoadBalancerArnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.networkLoadBalancerArnsInput">NetworkLoadBalancerArnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.payerResponsibilityInput">PayerResponsibilityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.privateDnsNameConfigurationInput">PrivateDnsNameConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServicePrivateDnsNameConfiguration">Ec2VpcEndpointServicePrivateDnsNameConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.privateDnsNameInput">PrivateDnsNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.supportedIpAddressTypesInput">SupportedIpAddressTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.supportedRegionsInput">SupportedRegionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTags">Ec2VpcEndpointServiceTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.acceptanceRequired">AcceptanceRequired</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.contributorInsightsEnabled">ContributorInsightsEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.gatewayLoadBalancerArns">GatewayLoadBalancerArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.networkLoadBalancerArns">NetworkLoadBalancerArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.payerResponsibility">PayerResponsibility</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.privateDnsName">PrivateDnsName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.supportedIpAddressTypes">SupportedIpAddressTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.supportedRegions">SupportedRegions</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `PrivateDnsNameConfiguration`<sup>Required</sup> <a name="PrivateDnsNameConfiguration" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.privateDnsNameConfiguration"></a>

```csharp
public Ec2VpcEndpointServicePrivateDnsNameConfigurationOutputReference PrivateDnsNameConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServicePrivateDnsNameConfigurationOutputReference">Ec2VpcEndpointServicePrivateDnsNameConfigurationOutputReference</a>

---

##### `ServiceId`<sup>Required</sup> <a name="ServiceId" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.serviceId"></a>

```csharp
public string ServiceId { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.tags"></a>

```csharp
public Ec2VpcEndpointServiceTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsList">Ec2VpcEndpointServiceTagsList</a>

---

##### `AcceptanceRequiredInput`<sup>Optional</sup> <a name="AcceptanceRequiredInput" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.acceptanceRequiredInput"></a>

```csharp
public bool|IResolvable AcceptanceRequiredInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ContributorInsightsEnabledInput`<sup>Optional</sup> <a name="ContributorInsightsEnabledInput" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.contributorInsightsEnabledInput"></a>

```csharp
public bool|IResolvable ContributorInsightsEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `GatewayLoadBalancerArnsInput`<sup>Optional</sup> <a name="GatewayLoadBalancerArnsInput" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.gatewayLoadBalancerArnsInput"></a>

```csharp
public string[] GatewayLoadBalancerArnsInput { get; }
```

- *Type:* string[]

---

##### `NetworkLoadBalancerArnsInput`<sup>Optional</sup> <a name="NetworkLoadBalancerArnsInput" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.networkLoadBalancerArnsInput"></a>

```csharp
public string[] NetworkLoadBalancerArnsInput { get; }
```

- *Type:* string[]

---

##### `PayerResponsibilityInput`<sup>Optional</sup> <a name="PayerResponsibilityInput" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.payerResponsibilityInput"></a>

```csharp
public string PayerResponsibilityInput { get; }
```

- *Type:* string

---

##### `PrivateDnsNameConfigurationInput`<sup>Optional</sup> <a name="PrivateDnsNameConfigurationInput" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.privateDnsNameConfigurationInput"></a>

```csharp
public IResolvable|Ec2VpcEndpointServicePrivateDnsNameConfiguration PrivateDnsNameConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServicePrivateDnsNameConfiguration">Ec2VpcEndpointServicePrivateDnsNameConfiguration</a>

---

##### `PrivateDnsNameInput`<sup>Optional</sup> <a name="PrivateDnsNameInput" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.privateDnsNameInput"></a>

```csharp
public string PrivateDnsNameInput { get; }
```

- *Type:* string

---

##### `SupportedIpAddressTypesInput`<sup>Optional</sup> <a name="SupportedIpAddressTypesInput" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.supportedIpAddressTypesInput"></a>

```csharp
public string[] SupportedIpAddressTypesInput { get; }
```

- *Type:* string[]

---

##### `SupportedRegionsInput`<sup>Optional</sup> <a name="SupportedRegionsInput" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.supportedRegionsInput"></a>

```csharp
public string[] SupportedRegionsInput { get; }
```

- *Type:* string[]

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.tagsInput"></a>

```csharp
public IResolvable|Ec2VpcEndpointServiceTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTags">Ec2VpcEndpointServiceTags</a>[]

---

##### `AcceptanceRequired`<sup>Required</sup> <a name="AcceptanceRequired" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.acceptanceRequired"></a>

```csharp
public bool|IResolvable AcceptanceRequired { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ContributorInsightsEnabled`<sup>Required</sup> <a name="ContributorInsightsEnabled" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.contributorInsightsEnabled"></a>

```csharp
public bool|IResolvable ContributorInsightsEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `GatewayLoadBalancerArns`<sup>Required</sup> <a name="GatewayLoadBalancerArns" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.gatewayLoadBalancerArns"></a>

```csharp
public string[] GatewayLoadBalancerArns { get; }
```

- *Type:* string[]

---

##### `NetworkLoadBalancerArns`<sup>Required</sup> <a name="NetworkLoadBalancerArns" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.networkLoadBalancerArns"></a>

```csharp
public string[] NetworkLoadBalancerArns { get; }
```

- *Type:* string[]

---

##### `PayerResponsibility`<sup>Required</sup> <a name="PayerResponsibility" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.payerResponsibility"></a>

```csharp
public string PayerResponsibility { get; }
```

- *Type:* string

---

##### `PrivateDnsName`<sup>Required</sup> <a name="PrivateDnsName" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.privateDnsName"></a>

```csharp
public string PrivateDnsName { get; }
```

- *Type:* string

---

##### `SupportedIpAddressTypes`<sup>Required</sup> <a name="SupportedIpAddressTypes" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.supportedIpAddressTypes"></a>

```csharp
public string[] SupportedIpAddressTypes { get; }
```

- *Type:* string[]

---

##### `SupportedRegions`<sup>Required</sup> <a name="SupportedRegions" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.supportedRegions"></a>

```csharp
public string[] SupportedRegions { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointService.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2VpcEndpointServiceConfig <a name="Ec2VpcEndpointServiceConfig" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2VpcEndpointServiceConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    bool|IResolvable AcceptanceRequired = null,
    bool|IResolvable ContributorInsightsEnabled = null,
    string[] GatewayLoadBalancerArns = null,
    string[] NetworkLoadBalancerArns = null,
    string PayerResponsibility = null,
    string PrivateDnsName = null,
    Ec2VpcEndpointServicePrivateDnsNameConfiguration PrivateDnsNameConfiguration = null,
    string[] SupportedIpAddressTypes = null,
    string[] SupportedRegions = null,
    IResolvable|Ec2VpcEndpointServiceTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceConfig.property.acceptanceRequired">AcceptanceRequired</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_vpc_endpoint_service#acceptance_required Ec2VpcEndpointService#acceptance_required}. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceConfig.property.contributorInsightsEnabled">ContributorInsightsEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_vpc_endpoint_service#contributor_insights_enabled Ec2VpcEndpointService#contributor_insights_enabled}. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceConfig.property.gatewayLoadBalancerArns">GatewayLoadBalancerArns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_vpc_endpoint_service#gateway_load_balancer_arns Ec2VpcEndpointService#gateway_load_balancer_arns}. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceConfig.property.networkLoadBalancerArns">NetworkLoadBalancerArns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_vpc_endpoint_service#network_load_balancer_arns Ec2VpcEndpointService#network_load_balancer_arns}. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceConfig.property.payerResponsibility">PayerResponsibility</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_vpc_endpoint_service#payer_responsibility Ec2VpcEndpointService#payer_responsibility}. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceConfig.property.privateDnsName">PrivateDnsName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_vpc_endpoint_service#private_dns_name Ec2VpcEndpointService#private_dns_name}. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceConfig.property.privateDnsNameConfiguration">PrivateDnsNameConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServicePrivateDnsNameConfiguration">Ec2VpcEndpointServicePrivateDnsNameConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_vpc_endpoint_service#private_dns_name_configuration Ec2VpcEndpointService#private_dns_name_configuration}. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceConfig.property.supportedIpAddressTypes">SupportedIpAddressTypes</a></code> | <code>string[]</code> | Specify which Ip Address types are supported for VPC endpoint service. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceConfig.property.supportedRegions">SupportedRegions</a></code> | <code>string[]</code> | The Regions from which service consumers can access the service. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTags">Ec2VpcEndpointServiceTags</a>[]</code> | The tags to add to the VPC endpoint service. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AcceptanceRequired`<sup>Optional</sup> <a name="AcceptanceRequired" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceConfig.property.acceptanceRequired"></a>

```csharp
public bool|IResolvable AcceptanceRequired { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_vpc_endpoint_service#acceptance_required Ec2VpcEndpointService#acceptance_required}.

---

##### `ContributorInsightsEnabled`<sup>Optional</sup> <a name="ContributorInsightsEnabled" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceConfig.property.contributorInsightsEnabled"></a>

```csharp
public bool|IResolvable ContributorInsightsEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_vpc_endpoint_service#contributor_insights_enabled Ec2VpcEndpointService#contributor_insights_enabled}.

---

##### `GatewayLoadBalancerArns`<sup>Optional</sup> <a name="GatewayLoadBalancerArns" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceConfig.property.gatewayLoadBalancerArns"></a>

```csharp
public string[] GatewayLoadBalancerArns { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_vpc_endpoint_service#gateway_load_balancer_arns Ec2VpcEndpointService#gateway_load_balancer_arns}.

---

##### `NetworkLoadBalancerArns`<sup>Optional</sup> <a name="NetworkLoadBalancerArns" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceConfig.property.networkLoadBalancerArns"></a>

```csharp
public string[] NetworkLoadBalancerArns { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_vpc_endpoint_service#network_load_balancer_arns Ec2VpcEndpointService#network_load_balancer_arns}.

---

##### `PayerResponsibility`<sup>Optional</sup> <a name="PayerResponsibility" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceConfig.property.payerResponsibility"></a>

```csharp
public string PayerResponsibility { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_vpc_endpoint_service#payer_responsibility Ec2VpcEndpointService#payer_responsibility}.

---

##### `PrivateDnsName`<sup>Optional</sup> <a name="PrivateDnsName" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceConfig.property.privateDnsName"></a>

```csharp
public string PrivateDnsName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_vpc_endpoint_service#private_dns_name Ec2VpcEndpointService#private_dns_name}.

---

##### `PrivateDnsNameConfiguration`<sup>Optional</sup> <a name="PrivateDnsNameConfiguration" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceConfig.property.privateDnsNameConfiguration"></a>

```csharp
public Ec2VpcEndpointServicePrivateDnsNameConfiguration PrivateDnsNameConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServicePrivateDnsNameConfiguration">Ec2VpcEndpointServicePrivateDnsNameConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_vpc_endpoint_service#private_dns_name_configuration Ec2VpcEndpointService#private_dns_name_configuration}.

---

##### `SupportedIpAddressTypes`<sup>Optional</sup> <a name="SupportedIpAddressTypes" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceConfig.property.supportedIpAddressTypes"></a>

```csharp
public string[] SupportedIpAddressTypes { get; set; }
```

- *Type:* string[]

Specify which Ip Address types are supported for VPC endpoint service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_vpc_endpoint_service#supported_ip_address_types Ec2VpcEndpointService#supported_ip_address_types}

---

##### `SupportedRegions`<sup>Optional</sup> <a name="SupportedRegions" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceConfig.property.supportedRegions"></a>

```csharp
public string[] SupportedRegions { get; set; }
```

- *Type:* string[]

The Regions from which service consumers can access the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_vpc_endpoint_service#supported_regions Ec2VpcEndpointService#supported_regions}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceConfig.property.tags"></a>

```csharp
public IResolvable|Ec2VpcEndpointServiceTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTags">Ec2VpcEndpointServiceTags</a>[]

The tags to add to the VPC endpoint service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_vpc_endpoint_service#tags Ec2VpcEndpointService#tags}

---

### Ec2VpcEndpointServicePrivateDnsNameConfiguration <a name="Ec2VpcEndpointServicePrivateDnsNameConfiguration" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServicePrivateDnsNameConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServicePrivateDnsNameConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2VpcEndpointServicePrivateDnsNameConfiguration {

};
```


### Ec2VpcEndpointServiceTags <a name="Ec2VpcEndpointServiceTags" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2VpcEndpointServiceTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTags.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_vpc_endpoint_service#key Ec2VpcEndpointService#key}. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTags.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_vpc_endpoint_service#value Ec2VpcEndpointService#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_vpc_endpoint_service#key Ec2VpcEndpointService#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_vpc_endpoint_service#value Ec2VpcEndpointService#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2VpcEndpointServicePrivateDnsNameConfigurationOutputReference <a name="Ec2VpcEndpointServicePrivateDnsNameConfigurationOutputReference" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServicePrivateDnsNameConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServicePrivateDnsNameConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2VpcEndpointServicePrivateDnsNameConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServicePrivateDnsNameConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServicePrivateDnsNameConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServicePrivateDnsNameConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServicePrivateDnsNameConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServicePrivateDnsNameConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServicePrivateDnsNameConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServicePrivateDnsNameConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServicePrivateDnsNameConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServicePrivateDnsNameConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServicePrivateDnsNameConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServicePrivateDnsNameConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServicePrivateDnsNameConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServicePrivateDnsNameConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServicePrivateDnsNameConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServicePrivateDnsNameConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServicePrivateDnsNameConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServicePrivateDnsNameConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServicePrivateDnsNameConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServicePrivateDnsNameConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServicePrivateDnsNameConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServicePrivateDnsNameConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServicePrivateDnsNameConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServicePrivateDnsNameConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServicePrivateDnsNameConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServicePrivateDnsNameConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServicePrivateDnsNameConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServicePrivateDnsNameConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServicePrivateDnsNameConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServicePrivateDnsNameConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServicePrivateDnsNameConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServicePrivateDnsNameConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServicePrivateDnsNameConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServicePrivateDnsNameConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServicePrivateDnsNameConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServicePrivateDnsNameConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServicePrivateDnsNameConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServicePrivateDnsNameConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServicePrivateDnsNameConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServicePrivateDnsNameConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServicePrivateDnsNameConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServicePrivateDnsNameConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServicePrivateDnsNameConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServicePrivateDnsNameConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServicePrivateDnsNameConfigurationOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServicePrivateDnsNameConfigurationOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServicePrivateDnsNameConfigurationOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServicePrivateDnsNameConfigurationOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServicePrivateDnsNameConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServicePrivateDnsNameConfiguration">Ec2VpcEndpointServicePrivateDnsNameConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServicePrivateDnsNameConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServicePrivateDnsNameConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServicePrivateDnsNameConfigurationOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServicePrivateDnsNameConfigurationOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServicePrivateDnsNameConfigurationOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServicePrivateDnsNameConfigurationOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServicePrivateDnsNameConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Ec2VpcEndpointServicePrivateDnsNameConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServicePrivateDnsNameConfiguration">Ec2VpcEndpointServicePrivateDnsNameConfiguration</a>

---


### Ec2VpcEndpointServiceTagsList <a name="Ec2VpcEndpointServiceTagsList" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2VpcEndpointServiceTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsList.get"></a>

```csharp
private Ec2VpcEndpointServiceTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTags">Ec2VpcEndpointServiceTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsList.property.internalValue"></a>

```csharp
public IResolvable|Ec2VpcEndpointServiceTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTags">Ec2VpcEndpointServiceTags</a>[]

---


### Ec2VpcEndpointServiceTagsOutputReference <a name="Ec2VpcEndpointServiceTagsOutputReference" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2VpcEndpointServiceTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTags">Ec2VpcEndpointServiceTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Ec2VpcEndpointServiceTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2VpcEndpointService.Ec2VpcEndpointServiceTags">Ec2VpcEndpointServiceTags</a>

---



