# `ec2ClientVpnEndpoint` Submodule <a name="`ec2ClientVpnEndpoint` Submodule" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2ClientVpnEndpoint <a name="Ec2ClientVpnEndpoint" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint awscc_ec2_client_vpn_endpoint}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2ClientVpnEndpoint(Construct Scope, string Id, Ec2ClientVpnEndpointConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig">Ec2ClientVpnEndpointConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig">Ec2ClientVpnEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.putAuthenticationOptions">PutAuthenticationOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.putAuthorizationPolicy">PutAuthorizationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.putClientConnectOptions">PutClientConnectOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.putClientLoginBannerOptions">PutClientLoginBannerOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.putClientRouteEnforcementOptions">PutClientRouteEnforcementOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.putConnectionLogOptions">PutConnectionLogOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.putDevicePostureOptions">PutDevicePostureOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.putTagSpecifications">PutTagSpecifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.putTransitGatewayConfiguration">PutTransitGatewayConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.resetAuthorizationPolicy">ResetAuthorizationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.resetClientCidrBlock">ResetClientCidrBlock</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.resetClientConnectOptions">ResetClientConnectOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.resetClientLoginBannerOptions">ResetClientLoginBannerOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.resetClientRouteEnforcementOptions">ResetClientRouteEnforcementOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.resetDevicePostureOptions">ResetDevicePostureOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.resetDisconnectOnSessionTimeout">ResetDisconnectOnSessionTimeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.resetDnsServers">ResetDnsServers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.resetEndpointIpAddressType">ResetEndpointIpAddressType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.resetSecurityGroupIds">ResetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.resetSelfServicePortal">ResetSelfServicePortal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.resetSessionTimeoutHours">ResetSessionTimeoutHours</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.resetSplitTunnel">ResetSplitTunnel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.resetTagSpecifications">ResetTagSpecifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.resetTrafficIpAddressType">ResetTrafficIpAddressType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.resetTransitGatewayConfiguration">ResetTransitGatewayConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.resetTransportProtocol">ResetTransportProtocol</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.resetVpcId">ResetVpcId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.resetVpnPort">ResetVpnPort</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAuthenticationOptions` <a name="PutAuthenticationOptions" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.putAuthenticationOptions"></a>

```csharp
private void PutAuthenticationOptions(IResolvable|Ec2ClientVpnEndpointAuthenticationOptions[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.putAuthenticationOptions.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptions">Ec2ClientVpnEndpointAuthenticationOptions</a>[]

---

##### `PutAuthorizationPolicy` <a name="PutAuthorizationPolicy" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.putAuthorizationPolicy"></a>

```csharp
private void PutAuthorizationPolicy(Ec2ClientVpnEndpointAuthorizationPolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.putAuthorizationPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicy">Ec2ClientVpnEndpointAuthorizationPolicy</a>

---

##### `PutClientConnectOptions` <a name="PutClientConnectOptions" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.putClientConnectOptions"></a>

```csharp
private void PutClientConnectOptions(Ec2ClientVpnEndpointClientConnectOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.putClientConnectOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptions">Ec2ClientVpnEndpointClientConnectOptions</a>

---

##### `PutClientLoginBannerOptions` <a name="PutClientLoginBannerOptions" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.putClientLoginBannerOptions"></a>

```csharp
private void PutClientLoginBannerOptions(Ec2ClientVpnEndpointClientLoginBannerOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.putClientLoginBannerOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptions">Ec2ClientVpnEndpointClientLoginBannerOptions</a>

---

##### `PutClientRouteEnforcementOptions` <a name="PutClientRouteEnforcementOptions" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.putClientRouteEnforcementOptions"></a>

```csharp
private void PutClientRouteEnforcementOptions(Ec2ClientVpnEndpointClientRouteEnforcementOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.putClientRouteEnforcementOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptions">Ec2ClientVpnEndpointClientRouteEnforcementOptions</a>

---

##### `PutConnectionLogOptions` <a name="PutConnectionLogOptions" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.putConnectionLogOptions"></a>

```csharp
private void PutConnectionLogOptions(Ec2ClientVpnEndpointConnectionLogOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.putConnectionLogOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptions">Ec2ClientVpnEndpointConnectionLogOptions</a>

---

##### `PutDevicePostureOptions` <a name="PutDevicePostureOptions" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.putDevicePostureOptions"></a>

```csharp
private void PutDevicePostureOptions(Ec2ClientVpnEndpointDevicePostureOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.putDevicePostureOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptions">Ec2ClientVpnEndpointDevicePostureOptions</a>

---

##### `PutTagSpecifications` <a name="PutTagSpecifications" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.putTagSpecifications"></a>

```csharp
private void PutTagSpecifications(IResolvable|Ec2ClientVpnEndpointTagSpecifications[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.putTagSpecifications.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecifications">Ec2ClientVpnEndpointTagSpecifications</a>[]

---

##### `PutTransitGatewayConfiguration` <a name="PutTransitGatewayConfiguration" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.putTransitGatewayConfiguration"></a>

```csharp
private void PutTransitGatewayConfiguration(Ec2ClientVpnEndpointTransitGatewayConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.putTransitGatewayConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfiguration">Ec2ClientVpnEndpointTransitGatewayConfiguration</a>

---

##### `ResetAuthorizationPolicy` <a name="ResetAuthorizationPolicy" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.resetAuthorizationPolicy"></a>

```csharp
private void ResetAuthorizationPolicy()
```

##### `ResetClientCidrBlock` <a name="ResetClientCidrBlock" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.resetClientCidrBlock"></a>

```csharp
private void ResetClientCidrBlock()
```

##### `ResetClientConnectOptions` <a name="ResetClientConnectOptions" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.resetClientConnectOptions"></a>

```csharp
private void ResetClientConnectOptions()
```

##### `ResetClientLoginBannerOptions` <a name="ResetClientLoginBannerOptions" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.resetClientLoginBannerOptions"></a>

```csharp
private void ResetClientLoginBannerOptions()
```

##### `ResetClientRouteEnforcementOptions` <a name="ResetClientRouteEnforcementOptions" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.resetClientRouteEnforcementOptions"></a>

```csharp
private void ResetClientRouteEnforcementOptions()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDevicePostureOptions` <a name="ResetDevicePostureOptions" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.resetDevicePostureOptions"></a>

```csharp
private void ResetDevicePostureOptions()
```

##### `ResetDisconnectOnSessionTimeout` <a name="ResetDisconnectOnSessionTimeout" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.resetDisconnectOnSessionTimeout"></a>

```csharp
private void ResetDisconnectOnSessionTimeout()
```

##### `ResetDnsServers` <a name="ResetDnsServers" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.resetDnsServers"></a>

```csharp
private void ResetDnsServers()
```

##### `ResetEndpointIpAddressType` <a name="ResetEndpointIpAddressType" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.resetEndpointIpAddressType"></a>

```csharp
private void ResetEndpointIpAddressType()
```

##### `ResetSecurityGroupIds` <a name="ResetSecurityGroupIds" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.resetSecurityGroupIds"></a>

```csharp
private void ResetSecurityGroupIds()
```

##### `ResetSelfServicePortal` <a name="ResetSelfServicePortal" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.resetSelfServicePortal"></a>

```csharp
private void ResetSelfServicePortal()
```

##### `ResetSessionTimeoutHours` <a name="ResetSessionTimeoutHours" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.resetSessionTimeoutHours"></a>

```csharp
private void ResetSessionTimeoutHours()
```

##### `ResetSplitTunnel` <a name="ResetSplitTunnel" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.resetSplitTunnel"></a>

```csharp
private void ResetSplitTunnel()
```

##### `ResetTagSpecifications` <a name="ResetTagSpecifications" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.resetTagSpecifications"></a>

```csharp
private void ResetTagSpecifications()
```

##### `ResetTrafficIpAddressType` <a name="ResetTrafficIpAddressType" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.resetTrafficIpAddressType"></a>

```csharp
private void ResetTrafficIpAddressType()
```

##### `ResetTransitGatewayConfiguration` <a name="ResetTransitGatewayConfiguration" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.resetTransitGatewayConfiguration"></a>

```csharp
private void ResetTransitGatewayConfiguration()
```

##### `ResetTransportProtocol` <a name="ResetTransportProtocol" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.resetTransportProtocol"></a>

```csharp
private void ResetTransportProtocol()
```

##### `ResetVpcId` <a name="ResetVpcId" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.resetVpcId"></a>

```csharp
private void ResetVpcId()
```

##### `ResetVpnPort` <a name="ResetVpnPort" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.resetVpnPort"></a>

```csharp
private void ResetVpnPort()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a Ec2ClientVpnEndpoint resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Ec2ClientVpnEndpoint.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Ec2ClientVpnEndpoint.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Ec2ClientVpnEndpoint.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Ec2ClientVpnEndpoint.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a Ec2ClientVpnEndpoint resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Ec2ClientVpnEndpoint to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Ec2ClientVpnEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the Ec2ClientVpnEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.authenticationOptions">AuthenticationOptions</a></code> | <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsList">Ec2ClientVpnEndpointAuthenticationOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.authorizationPolicy">AuthorizationPolicy</a></code> | <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference">Ec2ClientVpnEndpointAuthorizationPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.clientConnectOptions">ClientConnectOptions</a></code> | <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference">Ec2ClientVpnEndpointClientConnectOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.clientLoginBannerOptions">ClientLoginBannerOptions</a></code> | <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference">Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.clientRouteEnforcementOptions">ClientRouteEnforcementOptions</a></code> | <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference">Ec2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.clientVpnEndpointId">ClientVpnEndpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.connectionLogOptions">ConnectionLogOptions</a></code> | <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference">Ec2ClientVpnEndpointConnectionLogOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.devicePostureOptions">DevicePostureOptions</a></code> | <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsOutputReference">Ec2ClientVpnEndpointDevicePostureOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.tagSpecifications">TagSpecifications</a></code> | <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsList">Ec2ClientVpnEndpointTagSpecificationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.transitGatewayConfiguration">TransitGatewayConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference">Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.authenticationOptionsInput">AuthenticationOptionsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptions">Ec2ClientVpnEndpointAuthenticationOptions</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.authorizationPolicyInput">AuthorizationPolicyInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicy">Ec2ClientVpnEndpointAuthorizationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.clientCidrBlockInput">ClientCidrBlockInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.clientConnectOptionsInput">ClientConnectOptionsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptions">Ec2ClientVpnEndpointClientConnectOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.clientLoginBannerOptionsInput">ClientLoginBannerOptionsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptions">Ec2ClientVpnEndpointClientLoginBannerOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.clientRouteEnforcementOptionsInput">ClientRouteEnforcementOptionsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptions">Ec2ClientVpnEndpointClientRouteEnforcementOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.connectionLogOptionsInput">ConnectionLogOptionsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptions">Ec2ClientVpnEndpointConnectionLogOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.devicePostureOptionsInput">DevicePostureOptionsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptions">Ec2ClientVpnEndpointDevicePostureOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.disconnectOnSessionTimeoutInput">DisconnectOnSessionTimeoutInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.dnsServersInput">DnsServersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.endpointIpAddressTypeInput">EndpointIpAddressTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.securityGroupIdsInput">SecurityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.selfServicePortalInput">SelfServicePortalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.serverCertificateArnInput">ServerCertificateArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.sessionTimeoutHoursInput">SessionTimeoutHoursInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.splitTunnelInput">SplitTunnelInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.tagSpecificationsInput">TagSpecificationsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecifications">Ec2ClientVpnEndpointTagSpecifications</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.trafficIpAddressTypeInput">TrafficIpAddressTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.transitGatewayConfigurationInput">TransitGatewayConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfiguration">Ec2ClientVpnEndpointTransitGatewayConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.transportProtocolInput">TransportProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.vpcIdInput">VpcIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.vpnPortInput">VpnPortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.clientCidrBlock">ClientCidrBlock</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.disconnectOnSessionTimeout">DisconnectOnSessionTimeout</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.dnsServers">DnsServers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.endpointIpAddressType">EndpointIpAddressType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.selfServicePortal">SelfServicePortal</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.serverCertificateArn">ServerCertificateArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.sessionTimeoutHours">SessionTimeoutHours</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.splitTunnel">SplitTunnel</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.trafficIpAddressType">TrafficIpAddressType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.transportProtocol">TransportProtocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.vpcId">VpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.vpnPort">VpnPort</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AuthenticationOptions`<sup>Required</sup> <a name="AuthenticationOptions" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.authenticationOptions"></a>

```csharp
public Ec2ClientVpnEndpointAuthenticationOptionsList AuthenticationOptions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsList">Ec2ClientVpnEndpointAuthenticationOptionsList</a>

---

##### `AuthorizationPolicy`<sup>Required</sup> <a name="AuthorizationPolicy" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.authorizationPolicy"></a>

```csharp
public Ec2ClientVpnEndpointAuthorizationPolicyOutputReference AuthorizationPolicy { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference">Ec2ClientVpnEndpointAuthorizationPolicyOutputReference</a>

---

##### `ClientConnectOptions`<sup>Required</sup> <a name="ClientConnectOptions" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.clientConnectOptions"></a>

```csharp
public Ec2ClientVpnEndpointClientConnectOptionsOutputReference ClientConnectOptions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference">Ec2ClientVpnEndpointClientConnectOptionsOutputReference</a>

---

##### `ClientLoginBannerOptions`<sup>Required</sup> <a name="ClientLoginBannerOptions" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.clientLoginBannerOptions"></a>

```csharp
public Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference ClientLoginBannerOptions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference">Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference</a>

---

##### `ClientRouteEnforcementOptions`<sup>Required</sup> <a name="ClientRouteEnforcementOptions" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.clientRouteEnforcementOptions"></a>

```csharp
public Ec2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference ClientRouteEnforcementOptions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference">Ec2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference</a>

---

##### `ClientVpnEndpointId`<sup>Required</sup> <a name="ClientVpnEndpointId" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.clientVpnEndpointId"></a>

```csharp
public string ClientVpnEndpointId { get; }
```

- *Type:* string

---

##### `ConnectionLogOptions`<sup>Required</sup> <a name="ConnectionLogOptions" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.connectionLogOptions"></a>

```csharp
public Ec2ClientVpnEndpointConnectionLogOptionsOutputReference ConnectionLogOptions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference">Ec2ClientVpnEndpointConnectionLogOptionsOutputReference</a>

---

##### `DevicePostureOptions`<sup>Required</sup> <a name="DevicePostureOptions" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.devicePostureOptions"></a>

```csharp
public Ec2ClientVpnEndpointDevicePostureOptionsOutputReference DevicePostureOptions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsOutputReference">Ec2ClientVpnEndpointDevicePostureOptionsOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `TagSpecifications`<sup>Required</sup> <a name="TagSpecifications" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.tagSpecifications"></a>

```csharp
public Ec2ClientVpnEndpointTagSpecificationsList TagSpecifications { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsList">Ec2ClientVpnEndpointTagSpecificationsList</a>

---

##### `TransitGatewayConfiguration`<sup>Required</sup> <a name="TransitGatewayConfiguration" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.transitGatewayConfiguration"></a>

```csharp
public Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference TransitGatewayConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference">Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference</a>

---

##### `AuthenticationOptionsInput`<sup>Optional</sup> <a name="AuthenticationOptionsInput" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.authenticationOptionsInput"></a>

```csharp
public IResolvable|Ec2ClientVpnEndpointAuthenticationOptions[] AuthenticationOptionsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptions">Ec2ClientVpnEndpointAuthenticationOptions</a>[]

---

##### `AuthorizationPolicyInput`<sup>Optional</sup> <a name="AuthorizationPolicyInput" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.authorizationPolicyInput"></a>

```csharp
public IResolvable|Ec2ClientVpnEndpointAuthorizationPolicy AuthorizationPolicyInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicy">Ec2ClientVpnEndpointAuthorizationPolicy</a>

---

##### `ClientCidrBlockInput`<sup>Optional</sup> <a name="ClientCidrBlockInput" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.clientCidrBlockInput"></a>

```csharp
public string ClientCidrBlockInput { get; }
```

- *Type:* string

---

##### `ClientConnectOptionsInput`<sup>Optional</sup> <a name="ClientConnectOptionsInput" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.clientConnectOptionsInput"></a>

```csharp
public IResolvable|Ec2ClientVpnEndpointClientConnectOptions ClientConnectOptionsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptions">Ec2ClientVpnEndpointClientConnectOptions</a>

---

##### `ClientLoginBannerOptionsInput`<sup>Optional</sup> <a name="ClientLoginBannerOptionsInput" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.clientLoginBannerOptionsInput"></a>

```csharp
public IResolvable|Ec2ClientVpnEndpointClientLoginBannerOptions ClientLoginBannerOptionsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptions">Ec2ClientVpnEndpointClientLoginBannerOptions</a>

---

##### `ClientRouteEnforcementOptionsInput`<sup>Optional</sup> <a name="ClientRouteEnforcementOptionsInput" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.clientRouteEnforcementOptionsInput"></a>

```csharp
public IResolvable|Ec2ClientVpnEndpointClientRouteEnforcementOptions ClientRouteEnforcementOptionsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptions">Ec2ClientVpnEndpointClientRouteEnforcementOptions</a>

---

##### `ConnectionLogOptionsInput`<sup>Optional</sup> <a name="ConnectionLogOptionsInput" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.connectionLogOptionsInput"></a>

```csharp
public IResolvable|Ec2ClientVpnEndpointConnectionLogOptions ConnectionLogOptionsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptions">Ec2ClientVpnEndpointConnectionLogOptions</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DevicePostureOptionsInput`<sup>Optional</sup> <a name="DevicePostureOptionsInput" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.devicePostureOptionsInput"></a>

```csharp
public IResolvable|Ec2ClientVpnEndpointDevicePostureOptions DevicePostureOptionsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptions">Ec2ClientVpnEndpointDevicePostureOptions</a>

---

##### `DisconnectOnSessionTimeoutInput`<sup>Optional</sup> <a name="DisconnectOnSessionTimeoutInput" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.disconnectOnSessionTimeoutInput"></a>

```csharp
public bool|IResolvable DisconnectOnSessionTimeoutInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DnsServersInput`<sup>Optional</sup> <a name="DnsServersInput" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.dnsServersInput"></a>

```csharp
public string[] DnsServersInput { get; }
```

- *Type:* string[]

---

##### `EndpointIpAddressTypeInput`<sup>Optional</sup> <a name="EndpointIpAddressTypeInput" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.endpointIpAddressTypeInput"></a>

```csharp
public string EndpointIpAddressTypeInput { get; }
```

- *Type:* string

---

##### `SecurityGroupIdsInput`<sup>Optional</sup> <a name="SecurityGroupIdsInput" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.securityGroupIdsInput"></a>

```csharp
public string[] SecurityGroupIdsInput { get; }
```

- *Type:* string[]

---

##### `SelfServicePortalInput`<sup>Optional</sup> <a name="SelfServicePortalInput" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.selfServicePortalInput"></a>

```csharp
public string SelfServicePortalInput { get; }
```

- *Type:* string

---

##### `ServerCertificateArnInput`<sup>Optional</sup> <a name="ServerCertificateArnInput" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.serverCertificateArnInput"></a>

```csharp
public string ServerCertificateArnInput { get; }
```

- *Type:* string

---

##### `SessionTimeoutHoursInput`<sup>Optional</sup> <a name="SessionTimeoutHoursInput" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.sessionTimeoutHoursInput"></a>

```csharp
public double SessionTimeoutHoursInput { get; }
```

- *Type:* double

---

##### `SplitTunnelInput`<sup>Optional</sup> <a name="SplitTunnelInput" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.splitTunnelInput"></a>

```csharp
public bool|IResolvable SplitTunnelInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `TagSpecificationsInput`<sup>Optional</sup> <a name="TagSpecificationsInput" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.tagSpecificationsInput"></a>

```csharp
public IResolvable|Ec2ClientVpnEndpointTagSpecifications[] TagSpecificationsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecifications">Ec2ClientVpnEndpointTagSpecifications</a>[]

---

##### `TrafficIpAddressTypeInput`<sup>Optional</sup> <a name="TrafficIpAddressTypeInput" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.trafficIpAddressTypeInput"></a>

```csharp
public string TrafficIpAddressTypeInput { get; }
```

- *Type:* string

---

##### `TransitGatewayConfigurationInput`<sup>Optional</sup> <a name="TransitGatewayConfigurationInput" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.transitGatewayConfigurationInput"></a>

```csharp
public IResolvable|Ec2ClientVpnEndpointTransitGatewayConfiguration TransitGatewayConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfiguration">Ec2ClientVpnEndpointTransitGatewayConfiguration</a>

---

##### `TransportProtocolInput`<sup>Optional</sup> <a name="TransportProtocolInput" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.transportProtocolInput"></a>

```csharp
public string TransportProtocolInput { get; }
```

- *Type:* string

---

##### `VpcIdInput`<sup>Optional</sup> <a name="VpcIdInput" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.vpcIdInput"></a>

```csharp
public string VpcIdInput { get; }
```

- *Type:* string

---

##### `VpnPortInput`<sup>Optional</sup> <a name="VpnPortInput" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.vpnPortInput"></a>

```csharp
public double VpnPortInput { get; }
```

- *Type:* double

---

##### `ClientCidrBlock`<sup>Required</sup> <a name="ClientCidrBlock" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.clientCidrBlock"></a>

```csharp
public string ClientCidrBlock { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisconnectOnSessionTimeout`<sup>Required</sup> <a name="DisconnectOnSessionTimeout" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.disconnectOnSessionTimeout"></a>

```csharp
public bool|IResolvable DisconnectOnSessionTimeout { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DnsServers`<sup>Required</sup> <a name="DnsServers" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.dnsServers"></a>

```csharp
public string[] DnsServers { get; }
```

- *Type:* string[]

---

##### `EndpointIpAddressType`<sup>Required</sup> <a name="EndpointIpAddressType" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.endpointIpAddressType"></a>

```csharp
public string EndpointIpAddressType { get; }
```

- *Type:* string

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; }
```

- *Type:* string[]

---

##### `SelfServicePortal`<sup>Required</sup> <a name="SelfServicePortal" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.selfServicePortal"></a>

```csharp
public string SelfServicePortal { get; }
```

- *Type:* string

---

##### `ServerCertificateArn`<sup>Required</sup> <a name="ServerCertificateArn" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.serverCertificateArn"></a>

```csharp
public string ServerCertificateArn { get; }
```

- *Type:* string

---

##### `SessionTimeoutHours`<sup>Required</sup> <a name="SessionTimeoutHours" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.sessionTimeoutHours"></a>

```csharp
public double SessionTimeoutHours { get; }
```

- *Type:* double

---

##### `SplitTunnel`<sup>Required</sup> <a name="SplitTunnel" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.splitTunnel"></a>

```csharp
public bool|IResolvable SplitTunnel { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `TrafficIpAddressType`<sup>Required</sup> <a name="TrafficIpAddressType" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.trafficIpAddressType"></a>

```csharp
public string TrafficIpAddressType { get; }
```

- *Type:* string

---

##### `TransportProtocol`<sup>Required</sup> <a name="TransportProtocol" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.transportProtocol"></a>

```csharp
public string TransportProtocol { get; }
```

- *Type:* string

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.vpcId"></a>

```csharp
public string VpcId { get; }
```

- *Type:* string

---

##### `VpnPort`<sup>Required</sup> <a name="VpnPort" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.vpnPort"></a>

```csharp
public double VpnPort { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2ClientVpnEndpointAuthenticationOptions <a name="Ec2ClientVpnEndpointAuthenticationOptions" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2ClientVpnEndpointAuthenticationOptions {
    string Type,
    Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectory ActiveDirectory = null,
    Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthentication FederatedAuthentication = null,
    Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthentication MutualAuthentication = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptions.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#type Ec2ClientVpnEndpoint#type}. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptions.property.activeDirectory">ActiveDirectory</a></code> | <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectory">Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectory</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#active_directory Ec2ClientVpnEndpoint#active_directory}. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptions.property.federatedAuthentication">FederatedAuthentication</a></code> | <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthentication">Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthentication</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#federated_authentication Ec2ClientVpnEndpoint#federated_authentication}. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptions.property.mutualAuthentication">MutualAuthentication</a></code> | <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthentication">Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthentication</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#mutual_authentication Ec2ClientVpnEndpoint#mutual_authentication}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptions.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#type Ec2ClientVpnEndpoint#type}.

---

##### `ActiveDirectory`<sup>Optional</sup> <a name="ActiveDirectory" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptions.property.activeDirectory"></a>

```csharp
public Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectory ActiveDirectory { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectory">Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectory</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#active_directory Ec2ClientVpnEndpoint#active_directory}.

---

##### `FederatedAuthentication`<sup>Optional</sup> <a name="FederatedAuthentication" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptions.property.federatedAuthentication"></a>

```csharp
public Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthentication FederatedAuthentication { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthentication">Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthentication</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#federated_authentication Ec2ClientVpnEndpoint#federated_authentication}.

---

##### `MutualAuthentication`<sup>Optional</sup> <a name="MutualAuthentication" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptions.property.mutualAuthentication"></a>

```csharp
public Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthentication MutualAuthentication { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthentication">Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthentication</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#mutual_authentication Ec2ClientVpnEndpoint#mutual_authentication}.

---

### Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectory <a name="Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectory" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectory"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectory.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectory {
    string DirectoryId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectory.property.directoryId">DirectoryId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#directory_id Ec2ClientVpnEndpoint#directory_id}. |

---

##### `DirectoryId`<sup>Optional</sup> <a name="DirectoryId" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectory.property.directoryId"></a>

```csharp
public string DirectoryId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#directory_id Ec2ClientVpnEndpoint#directory_id}.

---

### Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthentication <a name="Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthentication" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthentication.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthentication {
    string SamlProviderArn = null,
    string SelfServiceSamlProviderArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthentication.property.samlProviderArn">SamlProviderArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#saml_provider_arn Ec2ClientVpnEndpoint#saml_provider_arn}. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthentication.property.selfServiceSamlProviderArn">SelfServiceSamlProviderArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#self_service_saml_provider_arn Ec2ClientVpnEndpoint#self_service_saml_provider_arn}. |

---

##### `SamlProviderArn`<sup>Optional</sup> <a name="SamlProviderArn" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthentication.property.samlProviderArn"></a>

```csharp
public string SamlProviderArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#saml_provider_arn Ec2ClientVpnEndpoint#saml_provider_arn}.

---

##### `SelfServiceSamlProviderArn`<sup>Optional</sup> <a name="SelfServiceSamlProviderArn" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthentication.property.selfServiceSamlProviderArn"></a>

```csharp
public string SelfServiceSamlProviderArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#self_service_saml_provider_arn Ec2ClientVpnEndpoint#self_service_saml_provider_arn}.

---

### Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthentication <a name="Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthentication" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthentication.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthentication {
    string ClientRootCertificateChainArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthentication.property.clientRootCertificateChainArn">ClientRootCertificateChainArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#client_root_certificate_chain_arn Ec2ClientVpnEndpoint#client_root_certificate_chain_arn}. |

---

##### `ClientRootCertificateChainArn`<sup>Optional</sup> <a name="ClientRootCertificateChainArn" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthentication.property.clientRootCertificateChainArn"></a>

```csharp
public string ClientRootCertificateChainArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#client_root_certificate_chain_arn Ec2ClientVpnEndpoint#client_root_certificate_chain_arn}.

---

### Ec2ClientVpnEndpointAuthorizationPolicy <a name="Ec2ClientVpnEndpointAuthorizationPolicy" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2ClientVpnEndpointAuthorizationPolicy {
    string Description = null,
    string PolicyDocument = null,
    string ShadowMode = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicy.property.description">Description</a></code> | <code>string</code> | A brief description of the authorization policy. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicy.property.policyDocument">PolicyDocument</a></code> | <code>string</code> | The Cedar policy document. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicy.property.shadowMode">ShadowMode</a></code> | <code>string</code> | Whether the authorization policy runs in shadow (observe-only) mode. |

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicy.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A brief description of the authorization policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#description Ec2ClientVpnEndpoint#description}

---

##### `PolicyDocument`<sup>Optional</sup> <a name="PolicyDocument" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicy.property.policyDocument"></a>

```csharp
public string PolicyDocument { get; set; }
```

- *Type:* string

The Cedar policy document.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#policy_document Ec2ClientVpnEndpoint#policy_document}

---

##### `ShadowMode`<sup>Optional</sup> <a name="ShadowMode" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicy.property.shadowMode"></a>

```csharp
public string ShadowMode { get; set; }
```

- *Type:* string

Whether the authorization policy runs in shadow (observe-only) mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#shadow_mode Ec2ClientVpnEndpoint#shadow_mode}

---

### Ec2ClientVpnEndpointClientConnectOptions <a name="Ec2ClientVpnEndpointClientConnectOptions" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2ClientVpnEndpointClientConnectOptions {
    bool|IResolvable Enabled = null,
    string LambdaFunctionArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptions.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#enabled Ec2ClientVpnEndpoint#enabled}. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptions.property.lambdaFunctionArn">LambdaFunctionArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#lambda_function_arn Ec2ClientVpnEndpoint#lambda_function_arn}. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptions.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#enabled Ec2ClientVpnEndpoint#enabled}.

---

##### `LambdaFunctionArn`<sup>Optional</sup> <a name="LambdaFunctionArn" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptions.property.lambdaFunctionArn"></a>

```csharp
public string LambdaFunctionArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#lambda_function_arn Ec2ClientVpnEndpoint#lambda_function_arn}.

---

### Ec2ClientVpnEndpointClientLoginBannerOptions <a name="Ec2ClientVpnEndpointClientLoginBannerOptions" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2ClientVpnEndpointClientLoginBannerOptions {
    string BannerText = null,
    bool|IResolvable Enabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptions.property.bannerText">BannerText</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#banner_text Ec2ClientVpnEndpoint#banner_text}. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptions.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#enabled Ec2ClientVpnEndpoint#enabled}. |

---

##### `BannerText`<sup>Optional</sup> <a name="BannerText" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptions.property.bannerText"></a>

```csharp
public string BannerText { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#banner_text Ec2ClientVpnEndpoint#banner_text}.

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptions.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#enabled Ec2ClientVpnEndpoint#enabled}.

---

### Ec2ClientVpnEndpointClientRouteEnforcementOptions <a name="Ec2ClientVpnEndpointClientRouteEnforcementOptions" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2ClientVpnEndpointClientRouteEnforcementOptions {
    bool|IResolvable Enforced = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptions.property.enforced">Enforced</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#enforced Ec2ClientVpnEndpoint#enforced}. |

---

##### `Enforced`<sup>Optional</sup> <a name="Enforced" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptions.property.enforced"></a>

```csharp
public bool|IResolvable Enforced { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#enforced Ec2ClientVpnEndpoint#enforced}.

---

### Ec2ClientVpnEndpointConfig <a name="Ec2ClientVpnEndpointConfig" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2ClientVpnEndpointConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    IResolvable|Ec2ClientVpnEndpointAuthenticationOptions[] AuthenticationOptions,
    Ec2ClientVpnEndpointConnectionLogOptions ConnectionLogOptions,
    string ServerCertificateArn,
    Ec2ClientVpnEndpointAuthorizationPolicy AuthorizationPolicy = null,
    string ClientCidrBlock = null,
    Ec2ClientVpnEndpointClientConnectOptions ClientConnectOptions = null,
    Ec2ClientVpnEndpointClientLoginBannerOptions ClientLoginBannerOptions = null,
    Ec2ClientVpnEndpointClientRouteEnforcementOptions ClientRouteEnforcementOptions = null,
    string Description = null,
    Ec2ClientVpnEndpointDevicePostureOptions DevicePostureOptions = null,
    bool|IResolvable DisconnectOnSessionTimeout = null,
    string[] DnsServers = null,
    string EndpointIpAddressType = null,
    string[] SecurityGroupIds = null,
    string SelfServicePortal = null,
    double SessionTimeoutHours = null,
    bool|IResolvable SplitTunnel = null,
    IResolvable|Ec2ClientVpnEndpointTagSpecifications[] TagSpecifications = null,
    string TrafficIpAddressType = null,
    Ec2ClientVpnEndpointTransitGatewayConfiguration TransitGatewayConfiguration = null,
    string TransportProtocol = null,
    string VpcId = null,
    double VpnPort = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.authenticationOptions">AuthenticationOptions</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptions">Ec2ClientVpnEndpointAuthenticationOptions</a>[]</code> | Information about the authentication method to be used to authenticate clients. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.connectionLogOptions">ConnectionLogOptions</a></code> | <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptions">Ec2ClientVpnEndpointConnectionLogOptions</a></code> | Information about the client connection logging options. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.serverCertificateArn">ServerCertificateArn</a></code> | <code>string</code> | The ARN of the server certificate. For more information, see the AWS Certificate Manager User Guide. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.authorizationPolicy">AuthorizationPolicy</a></code> | <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicy">Ec2ClientVpnEndpointAuthorizationPolicy</a></code> | The Cedar authorization policy to associate with the Client VPN endpoint. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.clientCidrBlock">ClientCidrBlock</a></code> | <code>string</code> | The IPv4 address range, in CIDR notation, from which to assign client IP addresses. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.clientConnectOptions">ClientConnectOptions</a></code> | <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptions">Ec2ClientVpnEndpointClientConnectOptions</a></code> | The options for managing connection authorization for new client connections. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.clientLoginBannerOptions">ClientLoginBannerOptions</a></code> | <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptions">Ec2ClientVpnEndpointClientLoginBannerOptions</a></code> | Options for enabling a customizable text banner that will be displayed on AWS provided clients when a VPN session is established. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.clientRouteEnforcementOptions">ClientRouteEnforcementOptions</a></code> | <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptions">Ec2ClientVpnEndpointClientRouteEnforcementOptions</a></code> | Client route enforcement is a feature of the Client VPN service that helps enforce administrator defined routes on devices connected through the VPN. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.description">Description</a></code> | <code>string</code> | A brief description of the Client VPN endpoint. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.devicePostureOptions">DevicePostureOptions</a></code> | <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptions">Ec2ClientVpnEndpointDevicePostureOptions</a></code> | The device-posture trust providers to associate with the Client VPN endpoint. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.disconnectOnSessionTimeout">DisconnectOnSessionTimeout</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Indicates whether the client VPN session is disconnected after the maximum sessionTimeoutHours is reached. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.dnsServers">DnsServers</a></code> | <code>string[]</code> | Information about the DNS servers to be used for DNS resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.endpointIpAddressType">EndpointIpAddressType</a></code> | <code>string</code> | The IP address type of the Client VPN endpoint. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | The IDs of one or more security groups to apply to the target network. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.selfServicePortal">SelfServicePortal</a></code> | <code>string</code> | Specify whether to enable the self-service portal for the Client VPN endpoint. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.sessionTimeoutHours">SessionTimeoutHours</a></code> | <code>double</code> | The maximum VPN session duration time in hours. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.splitTunnel">SplitTunnel</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Indicates whether split-tunnel is enabled on the AWS Client VPN endpoint. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.tagSpecifications">TagSpecifications</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecifications">Ec2ClientVpnEndpointTagSpecifications</a>[]</code> | The tags to apply to the Client VPN endpoint during creation. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.trafficIpAddressType">TrafficIpAddressType</a></code> | <code>string</code> | The IP address type of the Client VPN endpoint. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.transitGatewayConfiguration">TransitGatewayConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfiguration">Ec2ClientVpnEndpointTransitGatewayConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#transit_gateway_configuration Ec2ClientVpnEndpoint#transit_gateway_configuration}. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.transportProtocol">TransportProtocol</a></code> | <code>string</code> | The transport protocol to be used by the VPN session. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.vpcId">VpcId</a></code> | <code>string</code> | The ID of the VPC to associate with the Client VPN endpoint. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.vpnPort">VpnPort</a></code> | <code>double</code> | The port number to assign to the Client VPN endpoint for TCP and UDP traffic. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AuthenticationOptions`<sup>Required</sup> <a name="AuthenticationOptions" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.authenticationOptions"></a>

```csharp
public IResolvable|Ec2ClientVpnEndpointAuthenticationOptions[] AuthenticationOptions { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptions">Ec2ClientVpnEndpointAuthenticationOptions</a>[]

Information about the authentication method to be used to authenticate clients.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#authentication_options Ec2ClientVpnEndpoint#authentication_options}

---

##### `ConnectionLogOptions`<sup>Required</sup> <a name="ConnectionLogOptions" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.connectionLogOptions"></a>

```csharp
public Ec2ClientVpnEndpointConnectionLogOptions ConnectionLogOptions { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptions">Ec2ClientVpnEndpointConnectionLogOptions</a>

Information about the client connection logging options.

If you enable client connection logging, data about client connections is sent to a Cloudwatch Logs log stream. The following information is logged: client connection requests, client connection results (successful and unsuccessful), reasons for unsuccessful client connection requests, client connection termination time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#connection_log_options Ec2ClientVpnEndpoint#connection_log_options}

---

##### `ServerCertificateArn`<sup>Required</sup> <a name="ServerCertificateArn" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.serverCertificateArn"></a>

```csharp
public string ServerCertificateArn { get; set; }
```

- *Type:* string

The ARN of the server certificate. For more information, see the AWS Certificate Manager User Guide.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#server_certificate_arn Ec2ClientVpnEndpoint#server_certificate_arn}

---

##### `AuthorizationPolicy`<sup>Optional</sup> <a name="AuthorizationPolicy" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.authorizationPolicy"></a>

```csharp
public Ec2ClientVpnEndpointAuthorizationPolicy AuthorizationPolicy { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicy">Ec2ClientVpnEndpointAuthorizationPolicy</a>

The Cedar authorization policy to associate with the Client VPN endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#authorization_policy Ec2ClientVpnEndpoint#authorization_policy}

---

##### `ClientCidrBlock`<sup>Optional</sup> <a name="ClientCidrBlock" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.clientCidrBlock"></a>

```csharp
public string ClientCidrBlock { get; set; }
```

- *Type:* string

The IPv4 address range, in CIDR notation, from which to assign client IP addresses.

The address range cannot overlap with the local CIDR of the VPC in which the associated subnet is located, or the routes that you add manually. The address range cannot be changed after the Client VPN endpoint has been created. Client CIDR range must have a size of at least /22 and must not be greater than /12.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#client_cidr_block Ec2ClientVpnEndpoint#client_cidr_block}

---

##### `ClientConnectOptions`<sup>Optional</sup> <a name="ClientConnectOptions" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.clientConnectOptions"></a>

```csharp
public Ec2ClientVpnEndpointClientConnectOptions ClientConnectOptions { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptions">Ec2ClientVpnEndpointClientConnectOptions</a>

The options for managing connection authorization for new client connections.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#client_connect_options Ec2ClientVpnEndpoint#client_connect_options}

---

##### `ClientLoginBannerOptions`<sup>Optional</sup> <a name="ClientLoginBannerOptions" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.clientLoginBannerOptions"></a>

```csharp
public Ec2ClientVpnEndpointClientLoginBannerOptions ClientLoginBannerOptions { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptions">Ec2ClientVpnEndpointClientLoginBannerOptions</a>

Options for enabling a customizable text banner that will be displayed on AWS provided clients when a VPN session is established.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#client_login_banner_options Ec2ClientVpnEndpoint#client_login_banner_options}

---

##### `ClientRouteEnforcementOptions`<sup>Optional</sup> <a name="ClientRouteEnforcementOptions" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.clientRouteEnforcementOptions"></a>

```csharp
public Ec2ClientVpnEndpointClientRouteEnforcementOptions ClientRouteEnforcementOptions { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptions">Ec2ClientVpnEndpointClientRouteEnforcementOptions</a>

Client route enforcement is a feature of the Client VPN service that helps enforce administrator defined routes on devices connected through the VPN.

This feature helps improve your security posture by ensuring that network traffic originating from a connected client is not inadvertently sent outside the VPN tunnel.
Client route enforcement works by monitoring the route table of a connected device for routing policy changes to the VPN connection. If the feature detects any VPN routing policy modifications, it will automatically force an update to the route table, reverting it back to the expected route configurations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#client_route_enforcement_options Ec2ClientVpnEndpoint#client_route_enforcement_options}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A brief description of the Client VPN endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#description Ec2ClientVpnEndpoint#description}

---

##### `DevicePostureOptions`<sup>Optional</sup> <a name="DevicePostureOptions" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.devicePostureOptions"></a>

```csharp
public Ec2ClientVpnEndpointDevicePostureOptions DevicePostureOptions { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptions">Ec2ClientVpnEndpointDevicePostureOptions</a>

The device-posture trust providers to associate with the Client VPN endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#device_posture_options Ec2ClientVpnEndpoint#device_posture_options}

---

##### `DisconnectOnSessionTimeout`<sup>Optional</sup> <a name="DisconnectOnSessionTimeout" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.disconnectOnSessionTimeout"></a>

```csharp
public bool|IResolvable DisconnectOnSessionTimeout { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Indicates whether the client VPN session is disconnected after the maximum sessionTimeoutHours is reached.

If true, users are prompted to reconnect client VPN. If false, client VPN attempts to reconnect automatically.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#disconnect_on_session_timeout Ec2ClientVpnEndpoint#disconnect_on_session_timeout}

---

##### `DnsServers`<sup>Optional</sup> <a name="DnsServers" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.dnsServers"></a>

```csharp
public string[] DnsServers { get; set; }
```

- *Type:* string[]

Information about the DNS servers to be used for DNS resolution.

A Client VPN endpoint can have up to two DNS servers. If no DNS server is specified, the DNS address configured on the device is used for the DNS server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#dns_servers Ec2ClientVpnEndpoint#dns_servers}

---

##### `EndpointIpAddressType`<sup>Optional</sup> <a name="EndpointIpAddressType" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.endpointIpAddressType"></a>

```csharp
public string EndpointIpAddressType { get; set; }
```

- *Type:* string

The IP address type of the Client VPN endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#endpoint_ip_address_type Ec2ClientVpnEndpoint#endpoint_ip_address_type}

---

##### `SecurityGroupIds`<sup>Optional</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; set; }
```

- *Type:* string[]

The IDs of one or more security groups to apply to the target network.

You must also specify the ID of the VPC that contains the security groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#security_group_ids Ec2ClientVpnEndpoint#security_group_ids}

---

##### `SelfServicePortal`<sup>Optional</sup> <a name="SelfServicePortal" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.selfServicePortal"></a>

```csharp
public string SelfServicePortal { get; set; }
```

- *Type:* string

Specify whether to enable the self-service portal for the Client VPN endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#self_service_portal Ec2ClientVpnEndpoint#self_service_portal}

---

##### `SessionTimeoutHours`<sup>Optional</sup> <a name="SessionTimeoutHours" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.sessionTimeoutHours"></a>

```csharp
public double SessionTimeoutHours { get; set; }
```

- *Type:* double

The maximum VPN session duration time in hours.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#session_timeout_hours Ec2ClientVpnEndpoint#session_timeout_hours}

---

##### `SplitTunnel`<sup>Optional</sup> <a name="SplitTunnel" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.splitTunnel"></a>

```csharp
public bool|IResolvable SplitTunnel { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Indicates whether split-tunnel is enabled on the AWS Client VPN endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#split_tunnel Ec2ClientVpnEndpoint#split_tunnel}

---

##### `TagSpecifications`<sup>Optional</sup> <a name="TagSpecifications" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.tagSpecifications"></a>

```csharp
public IResolvable|Ec2ClientVpnEndpointTagSpecifications[] TagSpecifications { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecifications">Ec2ClientVpnEndpointTagSpecifications</a>[]

The tags to apply to the Client VPN endpoint during creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#tag_specifications Ec2ClientVpnEndpoint#tag_specifications}

---

##### `TrafficIpAddressType`<sup>Optional</sup> <a name="TrafficIpAddressType" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.trafficIpAddressType"></a>

```csharp
public string TrafficIpAddressType { get; set; }
```

- *Type:* string

The IP address type of the Client VPN endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#traffic_ip_address_type Ec2ClientVpnEndpoint#traffic_ip_address_type}

---

##### `TransitGatewayConfiguration`<sup>Optional</sup> <a name="TransitGatewayConfiguration" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.transitGatewayConfiguration"></a>

```csharp
public Ec2ClientVpnEndpointTransitGatewayConfiguration TransitGatewayConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfiguration">Ec2ClientVpnEndpointTransitGatewayConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#transit_gateway_configuration Ec2ClientVpnEndpoint#transit_gateway_configuration}.

---

##### `TransportProtocol`<sup>Optional</sup> <a name="TransportProtocol" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.transportProtocol"></a>

```csharp
public string TransportProtocol { get; set; }
```

- *Type:* string

The transport protocol to be used by the VPN session.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#transport_protocol Ec2ClientVpnEndpoint#transport_protocol}

---

##### `VpcId`<sup>Optional</sup> <a name="VpcId" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.vpcId"></a>

```csharp
public string VpcId { get; set; }
```

- *Type:* string

The ID of the VPC to associate with the Client VPN endpoint.

If no security group IDs are specified in the request, the default security group for the VPC is applied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#vpc_id Ec2ClientVpnEndpoint#vpc_id}

---

##### `VpnPort`<sup>Optional</sup> <a name="VpnPort" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.vpnPort"></a>

```csharp
public double VpnPort { get; set; }
```

- *Type:* double

The port number to assign to the Client VPN endpoint for TCP and UDP traffic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#vpn_port Ec2ClientVpnEndpoint#vpn_port}

---

### Ec2ClientVpnEndpointConnectionLogOptions <a name="Ec2ClientVpnEndpointConnectionLogOptions" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2ClientVpnEndpointConnectionLogOptions {
    bool|IResolvable Enabled,
    string CloudwatchLogGroup = null,
    string CloudwatchLogStream = null,
    bool|IResolvable IncludeAuthorizationPolicyContext = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptions.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#enabled Ec2ClientVpnEndpoint#enabled}. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptions.property.cloudwatchLogGroup">CloudwatchLogGroup</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#cloudwatch_log_group Ec2ClientVpnEndpoint#cloudwatch_log_group}. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptions.property.cloudwatchLogStream">CloudwatchLogStream</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#cloudwatch_log_stream Ec2ClientVpnEndpoint#cloudwatch_log_stream}. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptions.property.includeAuthorizationPolicyContext">IncludeAuthorizationPolicyContext</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Indicates whether authorization-policy evaluation context is included in the connection logs. |

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptions.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#enabled Ec2ClientVpnEndpoint#enabled}.

---

##### `CloudwatchLogGroup`<sup>Optional</sup> <a name="CloudwatchLogGroup" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptions.property.cloudwatchLogGroup"></a>

```csharp
public string CloudwatchLogGroup { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#cloudwatch_log_group Ec2ClientVpnEndpoint#cloudwatch_log_group}.

---

##### `CloudwatchLogStream`<sup>Optional</sup> <a name="CloudwatchLogStream" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptions.property.cloudwatchLogStream"></a>

```csharp
public string CloudwatchLogStream { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#cloudwatch_log_stream Ec2ClientVpnEndpoint#cloudwatch_log_stream}.

---

##### `IncludeAuthorizationPolicyContext`<sup>Optional</sup> <a name="IncludeAuthorizationPolicyContext" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptions.property.includeAuthorizationPolicyContext"></a>

```csharp
public bool|IResolvable IncludeAuthorizationPolicyContext { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Indicates whether authorization-policy evaluation context is included in the connection logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#include_authorization_policy_context Ec2ClientVpnEndpoint#include_authorization_policy_context}

---

### Ec2ClientVpnEndpointDevicePostureOptions <a name="Ec2ClientVpnEndpointDevicePostureOptions" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2ClientVpnEndpointDevicePostureOptions {
    bool|IResolvable Enabled = null,
    IResolvable|Ec2ClientVpnEndpointDevicePostureOptionsTrustProviders[] TrustProviders = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptions.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether device posture is enabled for the Client VPN endpoint. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptions.property.trustProviders">TrustProviders</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProviders">Ec2ClientVpnEndpointDevicePostureOptionsTrustProviders</a>[]</code> | The device-posture trust providers. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptions.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether device posture is enabled for the Client VPN endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#enabled Ec2ClientVpnEndpoint#enabled}

---

##### `TrustProviders`<sup>Optional</sup> <a name="TrustProviders" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptions.property.trustProviders"></a>

```csharp
public IResolvable|Ec2ClientVpnEndpointDevicePostureOptionsTrustProviders[] TrustProviders { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProviders">Ec2ClientVpnEndpointDevicePostureOptionsTrustProviders</a>[]

The device-posture trust providers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#trust_providers Ec2ClientVpnEndpoint#trust_providers}

---

### Ec2ClientVpnEndpointDevicePostureOptionsTrustProviders <a name="Ec2ClientVpnEndpointDevicePostureOptionsTrustProviders" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProviders"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProviders.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2ClientVpnEndpointDevicePostureOptionsTrustProviders {
    string PublicSigningKeyUrl = null,
    string TenantId = null,
    string TrustProviderType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProviders.property.publicSigningKeyUrl">PublicSigningKeyUrl</a></code> | <code>string</code> | The URL of the public signing key. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProviders.property.tenantId">TenantId</a></code> | <code>string</code> | The tenant identifier registered with the trust provider. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProviders.property.trustProviderType">TrustProviderType</a></code> | <code>string</code> | The device-posture trust provider type. |

---

##### `PublicSigningKeyUrl`<sup>Optional</sup> <a name="PublicSigningKeyUrl" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProviders.property.publicSigningKeyUrl"></a>

```csharp
public string PublicSigningKeyUrl { get; set; }
```

- *Type:* string

The URL of the public signing key.

Conditionally required by the provider type and enforced server-side (crowdstrike/jumpcloud require it, jamf rejects it).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#public_signing_key_url Ec2ClientVpnEndpoint#public_signing_key_url}

---

##### `TenantId`<sup>Optional</sup> <a name="TenantId" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProviders.property.tenantId"></a>

```csharp
public string TenantId { get; set; }
```

- *Type:* string

The tenant identifier registered with the trust provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#tenant_id Ec2ClientVpnEndpoint#tenant_id}

---

##### `TrustProviderType`<sup>Optional</sup> <a name="TrustProviderType" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProviders.property.trustProviderType"></a>

```csharp
public string TrustProviderType { get; set; }
```

- *Type:* string

The device-posture trust provider type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#trust_provider_type Ec2ClientVpnEndpoint#trust_provider_type}

---

### Ec2ClientVpnEndpointTagSpecifications <a name="Ec2ClientVpnEndpointTagSpecifications" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecifications"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecifications.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2ClientVpnEndpointTagSpecifications {
    string ResourceType = null,
    IResolvable|Ec2ClientVpnEndpointTagSpecificationsTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecifications.property.resourceType">ResourceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#resource_type Ec2ClientVpnEndpoint#resource_type}. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecifications.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTags">Ec2ClientVpnEndpointTagSpecificationsTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#tags Ec2ClientVpnEndpoint#tags}. |

---

##### `ResourceType`<sup>Optional</sup> <a name="ResourceType" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecifications.property.resourceType"></a>

```csharp
public string ResourceType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#resource_type Ec2ClientVpnEndpoint#resource_type}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecifications.property.tags"></a>

```csharp
public IResolvable|Ec2ClientVpnEndpointTagSpecificationsTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTags">Ec2ClientVpnEndpointTagSpecificationsTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#tags Ec2ClientVpnEndpoint#tags}.

---

### Ec2ClientVpnEndpointTagSpecificationsTags <a name="Ec2ClientVpnEndpointTagSpecificationsTags" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2ClientVpnEndpointTagSpecificationsTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTags.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#key Ec2ClientVpnEndpoint#key}. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTags.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#value Ec2ClientVpnEndpoint#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#key Ec2ClientVpnEndpoint#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#value Ec2ClientVpnEndpoint#value}.

---

### Ec2ClientVpnEndpointTransitGatewayConfiguration <a name="Ec2ClientVpnEndpointTransitGatewayConfiguration" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2ClientVpnEndpointTransitGatewayConfiguration {
    string[] AvailabilityZoneIds = null,
    string[] AvailabilityZones = null,
    string TransitGatewayId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfiguration.property.availabilityZoneIds">AvailabilityZoneIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#availability_zone_ids Ec2ClientVpnEndpoint#availability_zone_ids}. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfiguration.property.availabilityZones">AvailabilityZones</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#availability_zones Ec2ClientVpnEndpoint#availability_zones}. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfiguration.property.transitGatewayId">TransitGatewayId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#transit_gateway_id Ec2ClientVpnEndpoint#transit_gateway_id}. |

---

##### `AvailabilityZoneIds`<sup>Optional</sup> <a name="AvailabilityZoneIds" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfiguration.property.availabilityZoneIds"></a>

```csharp
public string[] AvailabilityZoneIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#availability_zone_ids Ec2ClientVpnEndpoint#availability_zone_ids}.

---

##### `AvailabilityZones`<sup>Optional</sup> <a name="AvailabilityZones" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfiguration.property.availabilityZones"></a>

```csharp
public string[] AvailabilityZones { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#availability_zones Ec2ClientVpnEndpoint#availability_zones}.

---

##### `TransitGatewayId`<sup>Optional</sup> <a name="TransitGatewayId" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfiguration.property.transitGatewayId"></a>

```csharp
public string TransitGatewayId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#transit_gateway_id Ec2ClientVpnEndpoint#transit_gateway_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference <a name="Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.resetDirectoryId">ResetDirectoryId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDirectoryId` <a name="ResetDirectoryId" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.resetDirectoryId"></a>

```csharp
private void ResetDirectoryId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.property.directoryIdInput">DirectoryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.property.directoryId">DirectoryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectory">Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectory</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DirectoryIdInput`<sup>Optional</sup> <a name="DirectoryIdInput" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.property.directoryIdInput"></a>

```csharp
public string DirectoryIdInput { get; }
```

- *Type:* string

---

##### `DirectoryId`<sup>Required</sup> <a name="DirectoryId" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.property.directoryId"></a>

```csharp
public string DirectoryId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectory InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectory">Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectory</a>

---


### Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference <a name="Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.resetSamlProviderArn">ResetSamlProviderArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.resetSelfServiceSamlProviderArn">ResetSelfServiceSamlProviderArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSamlProviderArn` <a name="ResetSamlProviderArn" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.resetSamlProviderArn"></a>

```csharp
private void ResetSamlProviderArn()
```

##### `ResetSelfServiceSamlProviderArn` <a name="ResetSelfServiceSamlProviderArn" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.resetSelfServiceSamlProviderArn"></a>

```csharp
private void ResetSelfServiceSamlProviderArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.property.samlProviderArnInput">SamlProviderArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.property.selfServiceSamlProviderArnInput">SelfServiceSamlProviderArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.property.samlProviderArn">SamlProviderArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.property.selfServiceSamlProviderArn">SelfServiceSamlProviderArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthentication">Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthentication</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SamlProviderArnInput`<sup>Optional</sup> <a name="SamlProviderArnInput" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.property.samlProviderArnInput"></a>

```csharp
public string SamlProviderArnInput { get; }
```

- *Type:* string

---

##### `SelfServiceSamlProviderArnInput`<sup>Optional</sup> <a name="SelfServiceSamlProviderArnInput" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.property.selfServiceSamlProviderArnInput"></a>

```csharp
public string SelfServiceSamlProviderArnInput { get; }
```

- *Type:* string

---

##### `SamlProviderArn`<sup>Required</sup> <a name="SamlProviderArn" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.property.samlProviderArn"></a>

```csharp
public string SamlProviderArn { get; }
```

- *Type:* string

---

##### `SelfServiceSamlProviderArn`<sup>Required</sup> <a name="SelfServiceSamlProviderArn" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.property.selfServiceSamlProviderArn"></a>

```csharp
public string SelfServiceSamlProviderArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthentication InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthentication">Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthentication</a>

---


### Ec2ClientVpnEndpointAuthenticationOptionsList <a name="Ec2ClientVpnEndpointAuthenticationOptionsList" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2ClientVpnEndpointAuthenticationOptionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsList.get"></a>

```csharp
private Ec2ClientVpnEndpointAuthenticationOptionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptions">Ec2ClientVpnEndpointAuthenticationOptions</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsList.property.internalValue"></a>

```csharp
public IResolvable|Ec2ClientVpnEndpointAuthenticationOptions[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptions">Ec2ClientVpnEndpointAuthenticationOptions</a>[]

---


### Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference <a name="Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.resetClientRootCertificateChainArn">ResetClientRootCertificateChainArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetClientRootCertificateChainArn` <a name="ResetClientRootCertificateChainArn" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.resetClientRootCertificateChainArn"></a>

```csharp
private void ResetClientRootCertificateChainArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.property.clientRootCertificateChainArnInput">ClientRootCertificateChainArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.property.clientRootCertificateChainArn">ClientRootCertificateChainArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthentication">Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthentication</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClientRootCertificateChainArnInput`<sup>Optional</sup> <a name="ClientRootCertificateChainArnInput" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.property.clientRootCertificateChainArnInput"></a>

```csharp
public string ClientRootCertificateChainArnInput { get; }
```

- *Type:* string

---

##### `ClientRootCertificateChainArn`<sup>Required</sup> <a name="ClientRootCertificateChainArn" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.property.clientRootCertificateChainArn"></a>

```csharp
public string ClientRootCertificateChainArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthentication InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthentication">Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthentication</a>

---


### Ec2ClientVpnEndpointAuthenticationOptionsOutputReference <a name="Ec2ClientVpnEndpointAuthenticationOptionsOutputReference" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2ClientVpnEndpointAuthenticationOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.putActiveDirectory">PutActiveDirectory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.putFederatedAuthentication">PutFederatedAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.putMutualAuthentication">PutMutualAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.resetActiveDirectory">ResetActiveDirectory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.resetFederatedAuthentication">ResetFederatedAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.resetMutualAuthentication">ResetMutualAuthentication</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutActiveDirectory` <a name="PutActiveDirectory" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.putActiveDirectory"></a>

```csharp
private void PutActiveDirectory(Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectory Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.putActiveDirectory.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectory">Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectory</a>

---

##### `PutFederatedAuthentication` <a name="PutFederatedAuthentication" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.putFederatedAuthentication"></a>

```csharp
private void PutFederatedAuthentication(Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthentication Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.putFederatedAuthentication.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthentication">Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthentication</a>

---

##### `PutMutualAuthentication` <a name="PutMutualAuthentication" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.putMutualAuthentication"></a>

```csharp
private void PutMutualAuthentication(Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthentication Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.putMutualAuthentication.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthentication">Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthentication</a>

---

##### `ResetActiveDirectory` <a name="ResetActiveDirectory" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.resetActiveDirectory"></a>

```csharp
private void ResetActiveDirectory()
```

##### `ResetFederatedAuthentication` <a name="ResetFederatedAuthentication" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.resetFederatedAuthentication"></a>

```csharp
private void ResetFederatedAuthentication()
```

##### `ResetMutualAuthentication` <a name="ResetMutualAuthentication" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.resetMutualAuthentication"></a>

```csharp
private void ResetMutualAuthentication()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.property.activeDirectory">ActiveDirectory</a></code> | <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference">Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.property.federatedAuthentication">FederatedAuthentication</a></code> | <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference">Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.property.mutualAuthentication">MutualAuthentication</a></code> | <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference">Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.property.activeDirectoryInput">ActiveDirectoryInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectory">Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.property.federatedAuthenticationInput">FederatedAuthenticationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthentication">Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.property.mutualAuthenticationInput">MutualAuthenticationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthentication">Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptions">Ec2ClientVpnEndpointAuthenticationOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ActiveDirectory`<sup>Required</sup> <a name="ActiveDirectory" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.property.activeDirectory"></a>

```csharp
public Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference ActiveDirectory { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference">Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference</a>

---

##### `FederatedAuthentication`<sup>Required</sup> <a name="FederatedAuthentication" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.property.federatedAuthentication"></a>

```csharp
public Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference FederatedAuthentication { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference">Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference</a>

---

##### `MutualAuthentication`<sup>Required</sup> <a name="MutualAuthentication" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.property.mutualAuthentication"></a>

```csharp
public Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference MutualAuthentication { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference">Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference</a>

---

##### `ActiveDirectoryInput`<sup>Optional</sup> <a name="ActiveDirectoryInput" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.property.activeDirectoryInput"></a>

```csharp
public IResolvable|Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectory ActiveDirectoryInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectory">Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectory</a>

---

##### `FederatedAuthenticationInput`<sup>Optional</sup> <a name="FederatedAuthenticationInput" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.property.federatedAuthenticationInput"></a>

```csharp
public IResolvable|Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthentication FederatedAuthenticationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthentication">Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthentication</a>

---

##### `MutualAuthenticationInput`<sup>Optional</sup> <a name="MutualAuthenticationInput" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.property.mutualAuthenticationInput"></a>

```csharp
public IResolvable|Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthentication MutualAuthenticationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthentication">Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthentication</a>

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Ec2ClientVpnEndpointAuthenticationOptions InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptions">Ec2ClientVpnEndpointAuthenticationOptions</a>

---


### Ec2ClientVpnEndpointAuthorizationPolicyOutputReference <a name="Ec2ClientVpnEndpointAuthorizationPolicyOutputReference" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2ClientVpnEndpointAuthorizationPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference.resetPolicyDocument">ResetPolicyDocument</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference.resetShadowMode">ResetShadowMode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetPolicyDocument` <a name="ResetPolicyDocument" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference.resetPolicyDocument"></a>

```csharp
private void ResetPolicyDocument()
```

##### `ResetShadowMode` <a name="ResetShadowMode" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference.resetShadowMode"></a>

```csharp
private void ResetShadowMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference.property.policyDocumentInput">PolicyDocumentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference.property.shadowModeInput">ShadowModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference.property.policyDocument">PolicyDocument</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference.property.shadowMode">ShadowMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicy">Ec2ClientVpnEndpointAuthorizationPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `PolicyDocumentInput`<sup>Optional</sup> <a name="PolicyDocumentInput" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference.property.policyDocumentInput"></a>

```csharp
public string PolicyDocumentInput { get; }
```

- *Type:* string

---

##### `ShadowModeInput`<sup>Optional</sup> <a name="ShadowModeInput" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference.property.shadowModeInput"></a>

```csharp
public string ShadowModeInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `PolicyDocument`<sup>Required</sup> <a name="PolicyDocument" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference.property.policyDocument"></a>

```csharp
public string PolicyDocument { get; }
```

- *Type:* string

---

##### `ShadowMode`<sup>Required</sup> <a name="ShadowMode" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference.property.shadowMode"></a>

```csharp
public string ShadowMode { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Ec2ClientVpnEndpointAuthorizationPolicy InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicy">Ec2ClientVpnEndpointAuthorizationPolicy</a>

---


### Ec2ClientVpnEndpointClientConnectOptionsOutputReference <a name="Ec2ClientVpnEndpointClientConnectOptionsOutputReference" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2ClientVpnEndpointClientConnectOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.resetLambdaFunctionArn">ResetLambdaFunctionArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetLambdaFunctionArn` <a name="ResetLambdaFunctionArn" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.resetLambdaFunctionArn"></a>

```csharp
private void ResetLambdaFunctionArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.property.lambdaFunctionArnInput">LambdaFunctionArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.property.lambdaFunctionArn">LambdaFunctionArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptions">Ec2ClientVpnEndpointClientConnectOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `LambdaFunctionArnInput`<sup>Optional</sup> <a name="LambdaFunctionArnInput" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.property.lambdaFunctionArnInput"></a>

```csharp
public string LambdaFunctionArnInput { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `LambdaFunctionArn`<sup>Required</sup> <a name="LambdaFunctionArn" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.property.lambdaFunctionArn"></a>

```csharp
public string LambdaFunctionArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Ec2ClientVpnEndpointClientConnectOptions InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptions">Ec2ClientVpnEndpointClientConnectOptions</a>

---


### Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference <a name="Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.resetBannerText">ResetBannerText</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBannerText` <a name="ResetBannerText" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.resetBannerText"></a>

```csharp
private void ResetBannerText()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.property.bannerTextInput">BannerTextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.property.bannerText">BannerText</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptions">Ec2ClientVpnEndpointClientLoginBannerOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BannerTextInput`<sup>Optional</sup> <a name="BannerTextInput" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.property.bannerTextInput"></a>

```csharp
public string BannerTextInput { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `BannerText`<sup>Required</sup> <a name="BannerText" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.property.bannerText"></a>

```csharp
public string BannerText { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Ec2ClientVpnEndpointClientLoginBannerOptions InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptions">Ec2ClientVpnEndpointClientLoginBannerOptions</a>

---


### Ec2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference <a name="Ec2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.resetEnforced">ResetEnforced</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnforced` <a name="ResetEnforced" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.resetEnforced"></a>

```csharp
private void ResetEnforced()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.property.enforcedInput">EnforcedInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.property.enforced">Enforced</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptions">Ec2ClientVpnEndpointClientRouteEnforcementOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnforcedInput`<sup>Optional</sup> <a name="EnforcedInput" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.property.enforcedInput"></a>

```csharp
public bool|IResolvable EnforcedInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Enforced`<sup>Required</sup> <a name="Enforced" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.property.enforced"></a>

```csharp
public bool|IResolvable Enforced { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Ec2ClientVpnEndpointClientRouteEnforcementOptions InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptions">Ec2ClientVpnEndpointClientRouteEnforcementOptions</a>

---


### Ec2ClientVpnEndpointConnectionLogOptionsOutputReference <a name="Ec2ClientVpnEndpointConnectionLogOptionsOutputReference" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2ClientVpnEndpointConnectionLogOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.resetCloudwatchLogGroup">ResetCloudwatchLogGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.resetCloudwatchLogStream">ResetCloudwatchLogStream</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.resetIncludeAuthorizationPolicyContext">ResetIncludeAuthorizationPolicyContext</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCloudwatchLogGroup` <a name="ResetCloudwatchLogGroup" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.resetCloudwatchLogGroup"></a>

```csharp
private void ResetCloudwatchLogGroup()
```

##### `ResetCloudwatchLogStream` <a name="ResetCloudwatchLogStream" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.resetCloudwatchLogStream"></a>

```csharp
private void ResetCloudwatchLogStream()
```

##### `ResetIncludeAuthorizationPolicyContext` <a name="ResetIncludeAuthorizationPolicyContext" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.resetIncludeAuthorizationPolicyContext"></a>

```csharp
private void ResetIncludeAuthorizationPolicyContext()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.property.cloudwatchLogGroupInput">CloudwatchLogGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.property.cloudwatchLogStreamInput">CloudwatchLogStreamInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.property.includeAuthorizationPolicyContextInput">IncludeAuthorizationPolicyContextInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.property.cloudwatchLogGroup">CloudwatchLogGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.property.cloudwatchLogStream">CloudwatchLogStream</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.property.includeAuthorizationPolicyContext">IncludeAuthorizationPolicyContext</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptions">Ec2ClientVpnEndpointConnectionLogOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CloudwatchLogGroupInput`<sup>Optional</sup> <a name="CloudwatchLogGroupInput" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.property.cloudwatchLogGroupInput"></a>

```csharp
public string CloudwatchLogGroupInput { get; }
```

- *Type:* string

---

##### `CloudwatchLogStreamInput`<sup>Optional</sup> <a name="CloudwatchLogStreamInput" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.property.cloudwatchLogStreamInput"></a>

```csharp
public string CloudwatchLogStreamInput { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IncludeAuthorizationPolicyContextInput`<sup>Optional</sup> <a name="IncludeAuthorizationPolicyContextInput" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.property.includeAuthorizationPolicyContextInput"></a>

```csharp
public bool|IResolvable IncludeAuthorizationPolicyContextInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `CloudwatchLogGroup`<sup>Required</sup> <a name="CloudwatchLogGroup" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.property.cloudwatchLogGroup"></a>

```csharp
public string CloudwatchLogGroup { get; }
```

- *Type:* string

---

##### `CloudwatchLogStream`<sup>Required</sup> <a name="CloudwatchLogStream" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.property.cloudwatchLogStream"></a>

```csharp
public string CloudwatchLogStream { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IncludeAuthorizationPolicyContext`<sup>Required</sup> <a name="IncludeAuthorizationPolicyContext" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.property.includeAuthorizationPolicyContext"></a>

```csharp
public bool|IResolvable IncludeAuthorizationPolicyContext { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Ec2ClientVpnEndpointConnectionLogOptions InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptions">Ec2ClientVpnEndpointConnectionLogOptions</a>

---


### Ec2ClientVpnEndpointDevicePostureOptionsOutputReference <a name="Ec2ClientVpnEndpointDevicePostureOptionsOutputReference" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2ClientVpnEndpointDevicePostureOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsOutputReference.putTrustProviders">PutTrustProviders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsOutputReference.resetTrustProviders">ResetTrustProviders</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTrustProviders` <a name="PutTrustProviders" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsOutputReference.putTrustProviders"></a>

```csharp
private void PutTrustProviders(IResolvable|Ec2ClientVpnEndpointDevicePostureOptionsTrustProviders[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsOutputReference.putTrustProviders.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProviders">Ec2ClientVpnEndpointDevicePostureOptionsTrustProviders</a>[]

---

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetTrustProviders` <a name="ResetTrustProviders" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsOutputReference.resetTrustProviders"></a>

```csharp
private void ResetTrustProviders()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsOutputReference.property.trustProviders">TrustProviders</a></code> | <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersList">Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsOutputReference.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsOutputReference.property.trustProvidersInput">TrustProvidersInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProviders">Ec2ClientVpnEndpointDevicePostureOptionsTrustProviders</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsOutputReference.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptions">Ec2ClientVpnEndpointDevicePostureOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TrustProviders`<sup>Required</sup> <a name="TrustProviders" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsOutputReference.property.trustProviders"></a>

```csharp
public Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersList TrustProviders { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersList">Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersList</a>

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsOutputReference.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `TrustProvidersInput`<sup>Optional</sup> <a name="TrustProvidersInput" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsOutputReference.property.trustProvidersInput"></a>

```csharp
public IResolvable|Ec2ClientVpnEndpointDevicePostureOptionsTrustProviders[] TrustProvidersInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProviders">Ec2ClientVpnEndpointDevicePostureOptionsTrustProviders</a>[]

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsOutputReference.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Ec2ClientVpnEndpointDevicePostureOptions InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptions">Ec2ClientVpnEndpointDevicePostureOptions</a>

---


### Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersList <a name="Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersList" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersList.get"></a>

```csharp
private Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProviders">Ec2ClientVpnEndpointDevicePostureOptionsTrustProviders</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersList.property.internalValue"></a>

```csharp
public IResolvable|Ec2ClientVpnEndpointDevicePostureOptionsTrustProviders[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProviders">Ec2ClientVpnEndpointDevicePostureOptionsTrustProviders</a>[]

---


### Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference <a name="Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.resetPublicSigningKeyUrl">ResetPublicSigningKeyUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.resetTenantId">ResetTenantId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.resetTrustProviderType">ResetTrustProviderType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPublicSigningKeyUrl` <a name="ResetPublicSigningKeyUrl" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.resetPublicSigningKeyUrl"></a>

```csharp
private void ResetPublicSigningKeyUrl()
```

##### `ResetTenantId` <a name="ResetTenantId" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.resetTenantId"></a>

```csharp
private void ResetTenantId()
```

##### `ResetTrustProviderType` <a name="ResetTrustProviderType" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.resetTrustProviderType"></a>

```csharp
private void ResetTrustProviderType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.property.publicSigningKeyUrlInput">PublicSigningKeyUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.property.tenantIdInput">TenantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.property.trustProviderTypeInput">TrustProviderTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.property.publicSigningKeyUrl">PublicSigningKeyUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.property.tenantId">TenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.property.trustProviderType">TrustProviderType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProviders">Ec2ClientVpnEndpointDevicePostureOptionsTrustProviders</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PublicSigningKeyUrlInput`<sup>Optional</sup> <a name="PublicSigningKeyUrlInput" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.property.publicSigningKeyUrlInput"></a>

```csharp
public string PublicSigningKeyUrlInput { get; }
```

- *Type:* string

---

##### `TenantIdInput`<sup>Optional</sup> <a name="TenantIdInput" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.property.tenantIdInput"></a>

```csharp
public string TenantIdInput { get; }
```

- *Type:* string

---

##### `TrustProviderTypeInput`<sup>Optional</sup> <a name="TrustProviderTypeInput" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.property.trustProviderTypeInput"></a>

```csharp
public string TrustProviderTypeInput { get; }
```

- *Type:* string

---

##### `PublicSigningKeyUrl`<sup>Required</sup> <a name="PublicSigningKeyUrl" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.property.publicSigningKeyUrl"></a>

```csharp
public string PublicSigningKeyUrl { get; }
```

- *Type:* string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.property.tenantId"></a>

```csharp
public string TenantId { get; }
```

- *Type:* string

---

##### `TrustProviderType`<sup>Required</sup> <a name="TrustProviderType" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.property.trustProviderType"></a>

```csharp
public string TrustProviderType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Ec2ClientVpnEndpointDevicePostureOptionsTrustProviders InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProviders">Ec2ClientVpnEndpointDevicePostureOptionsTrustProviders</a>

---


### Ec2ClientVpnEndpointTagSpecificationsList <a name="Ec2ClientVpnEndpointTagSpecificationsList" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2ClientVpnEndpointTagSpecificationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsList.get"></a>

```csharp
private Ec2ClientVpnEndpointTagSpecificationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecifications">Ec2ClientVpnEndpointTagSpecifications</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsList.property.internalValue"></a>

```csharp
public IResolvable|Ec2ClientVpnEndpointTagSpecifications[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecifications">Ec2ClientVpnEndpointTagSpecifications</a>[]

---


### Ec2ClientVpnEndpointTagSpecificationsOutputReference <a name="Ec2ClientVpnEndpointTagSpecificationsOutputReference" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2ClientVpnEndpointTagSpecificationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference.resetResourceType">ResetResourceType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference.putTags"></a>

```csharp
private void PutTags(IResolvable|Ec2ClientVpnEndpointTagSpecificationsTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTags">Ec2ClientVpnEndpointTagSpecificationsTags</a>[]

---

##### `ResetResourceType` <a name="ResetResourceType" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference.resetResourceType"></a>

```csharp
private void ResetResourceType()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference.resetTags"></a>

```csharp
private void ResetTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsList">Ec2ClientVpnEndpointTagSpecificationsTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference.property.resourceTypeInput">ResourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTags">Ec2ClientVpnEndpointTagSpecificationsTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference.property.resourceType">ResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecifications">Ec2ClientVpnEndpointTagSpecifications</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference.property.tags"></a>

```csharp
public Ec2ClientVpnEndpointTagSpecificationsTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsList">Ec2ClientVpnEndpointTagSpecificationsTagsList</a>

---

##### `ResourceTypeInput`<sup>Optional</sup> <a name="ResourceTypeInput" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference.property.resourceTypeInput"></a>

```csharp
public string ResourceTypeInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference.property.tagsInput"></a>

```csharp
public IResolvable|Ec2ClientVpnEndpointTagSpecificationsTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTags">Ec2ClientVpnEndpointTagSpecificationsTags</a>[]

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference.property.resourceType"></a>

```csharp
public string ResourceType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Ec2ClientVpnEndpointTagSpecifications InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecifications">Ec2ClientVpnEndpointTagSpecifications</a>

---


### Ec2ClientVpnEndpointTagSpecificationsTagsList <a name="Ec2ClientVpnEndpointTagSpecificationsTagsList" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2ClientVpnEndpointTagSpecificationsTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsList.get"></a>

```csharp
private Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTags">Ec2ClientVpnEndpointTagSpecificationsTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsList.property.internalValue"></a>

```csharp
public IResolvable|Ec2ClientVpnEndpointTagSpecificationsTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTags">Ec2ClientVpnEndpointTagSpecificationsTags</a>[]

---


### Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference <a name="Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTags">Ec2ClientVpnEndpointTagSpecificationsTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Ec2ClientVpnEndpointTagSpecificationsTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTags">Ec2ClientVpnEndpointTagSpecificationsTags</a>

---


### Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference <a name="Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference.resetAvailabilityZoneIds">ResetAvailabilityZoneIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference.resetAvailabilityZones">ResetAvailabilityZones</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference.resetTransitGatewayId">ResetTransitGatewayId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAvailabilityZoneIds` <a name="ResetAvailabilityZoneIds" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference.resetAvailabilityZoneIds"></a>

```csharp
private void ResetAvailabilityZoneIds()
```

##### `ResetAvailabilityZones` <a name="ResetAvailabilityZones" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference.resetAvailabilityZones"></a>

```csharp
private void ResetAvailabilityZones()
```

##### `ResetTransitGatewayId` <a name="ResetTransitGatewayId" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference.resetTransitGatewayId"></a>

```csharp
private void ResetTransitGatewayId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference.property.availabilityZoneIdsInput">AvailabilityZoneIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference.property.availabilityZonesInput">AvailabilityZonesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference.property.transitGatewayIdInput">TransitGatewayIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference.property.availabilityZoneIds">AvailabilityZoneIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference.property.availabilityZones">AvailabilityZones</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference.property.transitGatewayId">TransitGatewayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfiguration">Ec2ClientVpnEndpointTransitGatewayConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AvailabilityZoneIdsInput`<sup>Optional</sup> <a name="AvailabilityZoneIdsInput" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference.property.availabilityZoneIdsInput"></a>

```csharp
public string[] AvailabilityZoneIdsInput { get; }
```

- *Type:* string[]

---

##### `AvailabilityZonesInput`<sup>Optional</sup> <a name="AvailabilityZonesInput" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference.property.availabilityZonesInput"></a>

```csharp
public string[] AvailabilityZonesInput { get; }
```

- *Type:* string[]

---

##### `TransitGatewayIdInput`<sup>Optional</sup> <a name="TransitGatewayIdInput" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference.property.transitGatewayIdInput"></a>

```csharp
public string TransitGatewayIdInput { get; }
```

- *Type:* string

---

##### `AvailabilityZoneIds`<sup>Required</sup> <a name="AvailabilityZoneIds" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference.property.availabilityZoneIds"></a>

```csharp
public string[] AvailabilityZoneIds { get; }
```

- *Type:* string[]

---

##### `AvailabilityZones`<sup>Required</sup> <a name="AvailabilityZones" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference.property.availabilityZones"></a>

```csharp
public string[] AvailabilityZones { get; }
```

- *Type:* string[]

---

##### `TransitGatewayId`<sup>Required</sup> <a name="TransitGatewayId" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference.property.transitGatewayId"></a>

```csharp
public string TransitGatewayId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Ec2ClientVpnEndpointTransitGatewayConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfiguration">Ec2ClientVpnEndpointTransitGatewayConfiguration</a>

---



