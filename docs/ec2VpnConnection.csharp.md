# `ec2VpnConnection` Submodule <a name="`ec2VpnConnection` Submodule" id="@cdktn/provider-awscc.ec2VpnConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2VpnConnection <a name="Ec2VpnConnection" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_vpn_connection awscc_ec2_vpn_connection}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2VpnConnection(Construct Scope, string Id, Ec2VpnConnectionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig">Ec2VpnConnectionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig">Ec2VpnConnectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.putVpnTunnelOptionsSpecifications">PutVpnTunnelOptionsSpecifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.resetEnableAcceleration">ResetEnableAcceleration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.resetLocalIpv4NetworkCidr">ResetLocalIpv4NetworkCidr</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.resetLocalIpv6NetworkCidr">ResetLocalIpv6NetworkCidr</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.resetOutsideIpAddressType">ResetOutsideIpAddressType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.resetPreSharedKeyStorage">ResetPreSharedKeyStorage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.resetRemoteIpv4NetworkCidr">ResetRemoteIpv4NetworkCidr</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.resetRemoteIpv6NetworkCidr">ResetRemoteIpv6NetworkCidr</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.resetStaticRoutesOnly">ResetStaticRoutesOnly</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.resetTransitGatewayId">ResetTransitGatewayId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.resetTransportTransitGatewayAttachmentId">ResetTransportTransitGatewayAttachmentId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.resetTunnelBandwidth">ResetTunnelBandwidth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.resetTunnelInsideIpVersion">ResetTunnelInsideIpVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.resetVpnConcentratorId">ResetVpnConcentratorId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.resetVpnGatewayId">ResetVpnGatewayId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.resetVpnTunnelOptionsSpecifications">ResetVpnTunnelOptionsSpecifications</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.putTags"></a>

```csharp
private void PutTags(IResolvable|Ec2VpnConnectionTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTags">Ec2VpnConnectionTags</a>[]

---

##### `PutVpnTunnelOptionsSpecifications` <a name="PutVpnTunnelOptionsSpecifications" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.putVpnTunnelOptionsSpecifications"></a>

```csharp
private void PutVpnTunnelOptionsSpecifications(IResolvable|Ec2VpnConnectionVpnTunnelOptionsSpecifications[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.putVpnTunnelOptionsSpecifications.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecifications">Ec2VpnConnectionVpnTunnelOptionsSpecifications</a>[]

---

##### `ResetEnableAcceleration` <a name="ResetEnableAcceleration" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.resetEnableAcceleration"></a>

```csharp
private void ResetEnableAcceleration()
```

##### `ResetLocalIpv4NetworkCidr` <a name="ResetLocalIpv4NetworkCidr" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.resetLocalIpv4NetworkCidr"></a>

```csharp
private void ResetLocalIpv4NetworkCidr()
```

##### `ResetLocalIpv6NetworkCidr` <a name="ResetLocalIpv6NetworkCidr" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.resetLocalIpv6NetworkCidr"></a>

```csharp
private void ResetLocalIpv6NetworkCidr()
```

##### `ResetOutsideIpAddressType` <a name="ResetOutsideIpAddressType" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.resetOutsideIpAddressType"></a>

```csharp
private void ResetOutsideIpAddressType()
```

##### `ResetPreSharedKeyStorage` <a name="ResetPreSharedKeyStorage" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.resetPreSharedKeyStorage"></a>

```csharp
private void ResetPreSharedKeyStorage()
```

##### `ResetRemoteIpv4NetworkCidr` <a name="ResetRemoteIpv4NetworkCidr" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.resetRemoteIpv4NetworkCidr"></a>

```csharp
private void ResetRemoteIpv4NetworkCidr()
```

##### `ResetRemoteIpv6NetworkCidr` <a name="ResetRemoteIpv6NetworkCidr" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.resetRemoteIpv6NetworkCidr"></a>

```csharp
private void ResetRemoteIpv6NetworkCidr()
```

##### `ResetStaticRoutesOnly` <a name="ResetStaticRoutesOnly" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.resetStaticRoutesOnly"></a>

```csharp
private void ResetStaticRoutesOnly()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTransitGatewayId` <a name="ResetTransitGatewayId" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.resetTransitGatewayId"></a>

```csharp
private void ResetTransitGatewayId()
```

##### `ResetTransportTransitGatewayAttachmentId` <a name="ResetTransportTransitGatewayAttachmentId" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.resetTransportTransitGatewayAttachmentId"></a>

```csharp
private void ResetTransportTransitGatewayAttachmentId()
```

##### `ResetTunnelBandwidth` <a name="ResetTunnelBandwidth" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.resetTunnelBandwidth"></a>

```csharp
private void ResetTunnelBandwidth()
```

##### `ResetTunnelInsideIpVersion` <a name="ResetTunnelInsideIpVersion" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.resetTunnelInsideIpVersion"></a>

```csharp
private void ResetTunnelInsideIpVersion()
```

##### `ResetVpnConcentratorId` <a name="ResetVpnConcentratorId" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.resetVpnConcentratorId"></a>

```csharp
private void ResetVpnConcentratorId()
```

##### `ResetVpnGatewayId` <a name="ResetVpnGatewayId" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.resetVpnGatewayId"></a>

```csharp
private void ResetVpnGatewayId()
```

##### `ResetVpnTunnelOptionsSpecifications` <a name="ResetVpnTunnelOptionsSpecifications" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.resetVpnTunnelOptionsSpecifications"></a>

```csharp
private void ResetVpnTunnelOptionsSpecifications()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a Ec2VpnConnection resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Ec2VpnConnection.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Ec2VpnConnection.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Ec2VpnConnection.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Ec2VpnConnection.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a Ec2VpnConnection resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Ec2VpnConnection to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Ec2VpnConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_vpn_connection#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the Ec2VpnConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsList">Ec2VpnConnectionTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.vpnConnectionId">VpnConnectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.vpnTunnelOptionsSpecifications">VpnTunnelOptionsSpecifications</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsList">Ec2VpnConnectionVpnTunnelOptionsSpecificationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.customerGatewayIdInput">CustomerGatewayIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.enableAccelerationInput">EnableAccelerationInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.localIpv4NetworkCidrInput">LocalIpv4NetworkCidrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.localIpv6NetworkCidrInput">LocalIpv6NetworkCidrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.outsideIpAddressTypeInput">OutsideIpAddressTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.preSharedKeyStorageInput">PreSharedKeyStorageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.remoteIpv4NetworkCidrInput">RemoteIpv4NetworkCidrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.remoteIpv6NetworkCidrInput">RemoteIpv6NetworkCidrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.staticRoutesOnlyInput">StaticRoutesOnlyInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTags">Ec2VpnConnectionTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.transitGatewayIdInput">TransitGatewayIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.transportTransitGatewayAttachmentIdInput">TransportTransitGatewayAttachmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.tunnelBandwidthInput">TunnelBandwidthInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.tunnelInsideIpVersionInput">TunnelInsideIpVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.vpnConcentratorIdInput">VpnConcentratorIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.vpnGatewayIdInput">VpnGatewayIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.vpnTunnelOptionsSpecificationsInput">VpnTunnelOptionsSpecificationsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecifications">Ec2VpnConnectionVpnTunnelOptionsSpecifications</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.customerGatewayId">CustomerGatewayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.enableAcceleration">EnableAcceleration</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.localIpv4NetworkCidr">LocalIpv4NetworkCidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.localIpv6NetworkCidr">LocalIpv6NetworkCidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.outsideIpAddressType">OutsideIpAddressType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.preSharedKeyStorage">PreSharedKeyStorage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.remoteIpv4NetworkCidr">RemoteIpv4NetworkCidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.remoteIpv6NetworkCidr">RemoteIpv6NetworkCidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.staticRoutesOnly">StaticRoutesOnly</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.transitGatewayId">TransitGatewayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.transportTransitGatewayAttachmentId">TransportTransitGatewayAttachmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.tunnelBandwidth">TunnelBandwidth</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.tunnelInsideIpVersion">TunnelInsideIpVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.vpnConcentratorId">VpnConcentratorId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.vpnGatewayId">VpnGatewayId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.tags"></a>

```csharp
public Ec2VpnConnectionTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsList">Ec2VpnConnectionTagsList</a>

---

##### `VpnConnectionId`<sup>Required</sup> <a name="VpnConnectionId" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.vpnConnectionId"></a>

```csharp
public string VpnConnectionId { get; }
```

- *Type:* string

---

##### `VpnTunnelOptionsSpecifications`<sup>Required</sup> <a name="VpnTunnelOptionsSpecifications" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.vpnTunnelOptionsSpecifications"></a>

```csharp
public Ec2VpnConnectionVpnTunnelOptionsSpecificationsList VpnTunnelOptionsSpecifications { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsList">Ec2VpnConnectionVpnTunnelOptionsSpecificationsList</a>

---

##### `CustomerGatewayIdInput`<sup>Optional</sup> <a name="CustomerGatewayIdInput" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.customerGatewayIdInput"></a>

```csharp
public string CustomerGatewayIdInput { get; }
```

- *Type:* string

---

##### `EnableAccelerationInput`<sup>Optional</sup> <a name="EnableAccelerationInput" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.enableAccelerationInput"></a>

```csharp
public bool|IResolvable EnableAccelerationInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `LocalIpv4NetworkCidrInput`<sup>Optional</sup> <a name="LocalIpv4NetworkCidrInput" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.localIpv4NetworkCidrInput"></a>

```csharp
public string LocalIpv4NetworkCidrInput { get; }
```

- *Type:* string

---

##### `LocalIpv6NetworkCidrInput`<sup>Optional</sup> <a name="LocalIpv6NetworkCidrInput" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.localIpv6NetworkCidrInput"></a>

```csharp
public string LocalIpv6NetworkCidrInput { get; }
```

- *Type:* string

---

##### `OutsideIpAddressTypeInput`<sup>Optional</sup> <a name="OutsideIpAddressTypeInput" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.outsideIpAddressTypeInput"></a>

```csharp
public string OutsideIpAddressTypeInput { get; }
```

- *Type:* string

---

##### `PreSharedKeyStorageInput`<sup>Optional</sup> <a name="PreSharedKeyStorageInput" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.preSharedKeyStorageInput"></a>

```csharp
public string PreSharedKeyStorageInput { get; }
```

- *Type:* string

---

##### `RemoteIpv4NetworkCidrInput`<sup>Optional</sup> <a name="RemoteIpv4NetworkCidrInput" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.remoteIpv4NetworkCidrInput"></a>

```csharp
public string RemoteIpv4NetworkCidrInput { get; }
```

- *Type:* string

---

##### `RemoteIpv6NetworkCidrInput`<sup>Optional</sup> <a name="RemoteIpv6NetworkCidrInput" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.remoteIpv6NetworkCidrInput"></a>

```csharp
public string RemoteIpv6NetworkCidrInput { get; }
```

- *Type:* string

---

##### `StaticRoutesOnlyInput`<sup>Optional</sup> <a name="StaticRoutesOnlyInput" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.staticRoutesOnlyInput"></a>

```csharp
public bool|IResolvable StaticRoutesOnlyInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.tagsInput"></a>

```csharp
public IResolvable|Ec2VpnConnectionTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTags">Ec2VpnConnectionTags</a>[]

---

##### `TransitGatewayIdInput`<sup>Optional</sup> <a name="TransitGatewayIdInput" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.transitGatewayIdInput"></a>

```csharp
public string TransitGatewayIdInput { get; }
```

- *Type:* string

---

##### `TransportTransitGatewayAttachmentIdInput`<sup>Optional</sup> <a name="TransportTransitGatewayAttachmentIdInput" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.transportTransitGatewayAttachmentIdInput"></a>

```csharp
public string TransportTransitGatewayAttachmentIdInput { get; }
```

- *Type:* string

---

##### `TunnelBandwidthInput`<sup>Optional</sup> <a name="TunnelBandwidthInput" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.tunnelBandwidthInput"></a>

```csharp
public string TunnelBandwidthInput { get; }
```

- *Type:* string

---

##### `TunnelInsideIpVersionInput`<sup>Optional</sup> <a name="TunnelInsideIpVersionInput" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.tunnelInsideIpVersionInput"></a>

```csharp
public string TunnelInsideIpVersionInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `VpnConcentratorIdInput`<sup>Optional</sup> <a name="VpnConcentratorIdInput" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.vpnConcentratorIdInput"></a>

```csharp
public string VpnConcentratorIdInput { get; }
```

- *Type:* string

---

##### `VpnGatewayIdInput`<sup>Optional</sup> <a name="VpnGatewayIdInput" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.vpnGatewayIdInput"></a>

```csharp
public string VpnGatewayIdInput { get; }
```

- *Type:* string

---

##### `VpnTunnelOptionsSpecificationsInput`<sup>Optional</sup> <a name="VpnTunnelOptionsSpecificationsInput" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.vpnTunnelOptionsSpecificationsInput"></a>

```csharp
public IResolvable|Ec2VpnConnectionVpnTunnelOptionsSpecifications[] VpnTunnelOptionsSpecificationsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecifications">Ec2VpnConnectionVpnTunnelOptionsSpecifications</a>[]

---

##### `CustomerGatewayId`<sup>Required</sup> <a name="CustomerGatewayId" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.customerGatewayId"></a>

```csharp
public string CustomerGatewayId { get; }
```

- *Type:* string

---

##### `EnableAcceleration`<sup>Required</sup> <a name="EnableAcceleration" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.enableAcceleration"></a>

```csharp
public bool|IResolvable EnableAcceleration { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `LocalIpv4NetworkCidr`<sup>Required</sup> <a name="LocalIpv4NetworkCidr" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.localIpv4NetworkCidr"></a>

```csharp
public string LocalIpv4NetworkCidr { get; }
```

- *Type:* string

---

##### `LocalIpv6NetworkCidr`<sup>Required</sup> <a name="LocalIpv6NetworkCidr" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.localIpv6NetworkCidr"></a>

```csharp
public string LocalIpv6NetworkCidr { get; }
```

- *Type:* string

---

##### `OutsideIpAddressType`<sup>Required</sup> <a name="OutsideIpAddressType" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.outsideIpAddressType"></a>

```csharp
public string OutsideIpAddressType { get; }
```

- *Type:* string

---

##### `PreSharedKeyStorage`<sup>Required</sup> <a name="PreSharedKeyStorage" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.preSharedKeyStorage"></a>

```csharp
public string PreSharedKeyStorage { get; }
```

- *Type:* string

---

##### `RemoteIpv4NetworkCidr`<sup>Required</sup> <a name="RemoteIpv4NetworkCidr" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.remoteIpv4NetworkCidr"></a>

```csharp
public string RemoteIpv4NetworkCidr { get; }
```

- *Type:* string

---

##### `RemoteIpv6NetworkCidr`<sup>Required</sup> <a name="RemoteIpv6NetworkCidr" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.remoteIpv6NetworkCidr"></a>

```csharp
public string RemoteIpv6NetworkCidr { get; }
```

- *Type:* string

---

##### `StaticRoutesOnly`<sup>Required</sup> <a name="StaticRoutesOnly" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.staticRoutesOnly"></a>

```csharp
public bool|IResolvable StaticRoutesOnly { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `TransitGatewayId`<sup>Required</sup> <a name="TransitGatewayId" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.transitGatewayId"></a>

```csharp
public string TransitGatewayId { get; }
```

- *Type:* string

---

##### `TransportTransitGatewayAttachmentId`<sup>Required</sup> <a name="TransportTransitGatewayAttachmentId" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.transportTransitGatewayAttachmentId"></a>

```csharp
public string TransportTransitGatewayAttachmentId { get; }
```

- *Type:* string

---

##### `TunnelBandwidth`<sup>Required</sup> <a name="TunnelBandwidth" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.tunnelBandwidth"></a>

```csharp
public string TunnelBandwidth { get; }
```

- *Type:* string

---

##### `TunnelInsideIpVersion`<sup>Required</sup> <a name="TunnelInsideIpVersion" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.tunnelInsideIpVersion"></a>

```csharp
public string TunnelInsideIpVersion { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `VpnConcentratorId`<sup>Required</sup> <a name="VpnConcentratorId" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.vpnConcentratorId"></a>

```csharp
public string VpnConcentratorId { get; }
```

- *Type:* string

---

##### `VpnGatewayId`<sup>Required</sup> <a name="VpnGatewayId" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.vpnGatewayId"></a>

```csharp
public string VpnGatewayId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2VpnConnectionConfig <a name="Ec2VpnConnectionConfig" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2VpnConnectionConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string CustomerGatewayId,
    string Type,
    bool|IResolvable EnableAcceleration = null,
    string LocalIpv4NetworkCidr = null,
    string LocalIpv6NetworkCidr = null,
    string OutsideIpAddressType = null,
    string PreSharedKeyStorage = null,
    string RemoteIpv4NetworkCidr = null,
    string RemoteIpv6NetworkCidr = null,
    bool|IResolvable StaticRoutesOnly = null,
    IResolvable|Ec2VpnConnectionTags[] Tags = null,
    string TransitGatewayId = null,
    string TransportTransitGatewayAttachmentId = null,
    string TunnelBandwidth = null,
    string TunnelInsideIpVersion = null,
    string VpnConcentratorId = null,
    string VpnGatewayId = null,
    IResolvable|Ec2VpnConnectionVpnTunnelOptionsSpecifications[] VpnTunnelOptionsSpecifications = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.property.customerGatewayId">CustomerGatewayId</a></code> | <code>string</code> | The ID of the customer gateway at your end of the VPN connection. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.property.type">Type</a></code> | <code>string</code> | The type of VPN connection. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.property.enableAcceleration">EnableAcceleration</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Indicate whether to enable acceleration for the VPN connection.  Default: ``false``. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.property.localIpv4NetworkCidr">LocalIpv4NetworkCidr</a></code> | <code>string</code> | The IPv4 CIDR on the customer gateway (on-premises) side of the VPN connection.  Default: ``0.0.0.0/0``. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.property.localIpv6NetworkCidr">LocalIpv6NetworkCidr</a></code> | <code>string</code> | The IPv6 CIDR on the customer gateway (on-premises) side of the VPN connection.  Default: ``::/0``. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.property.outsideIpAddressType">OutsideIpAddressType</a></code> | <code>string</code> | The type of IP address assigned to the outside interface of the customer gateway device. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.property.preSharedKeyStorage">PreSharedKeyStorage</a></code> | <code>string</code> | Describes the storage location for an instance store-backed AMI. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.property.remoteIpv4NetworkCidr">RemoteIpv4NetworkCidr</a></code> | <code>string</code> | The IPv4 CIDR on the AWS side of the VPN connection.  Default: ``0.0.0.0/0``. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.property.remoteIpv6NetworkCidr">RemoteIpv6NetworkCidr</a></code> | <code>string</code> | The IPv6 CIDR on the AWS side of the VPN connection.  Default: ``::/0``. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.property.staticRoutesOnly">StaticRoutesOnly</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Indicates whether the VPN connection uses static routes only. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTags">Ec2VpnConnectionTags</a>[]</code> | Any tags assigned to the VPN connection. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.property.transitGatewayId">TransitGatewayId</a></code> | <code>string</code> | The ID of the transit gateway associated with the VPN connection. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.property.transportTransitGatewayAttachmentId">TransportTransitGatewayAttachmentId</a></code> | <code>string</code> | The transit gateway attachment ID to use for the VPN tunnel.  Required if ``OutsideIpAddressType`` is set to ``PrivateIpv4``. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.property.tunnelBandwidth">TunnelBandwidth</a></code> | <code>string</code> | The desired bandwidth specification for the VPN tunnel, used when creating or modifying VPN connection options to set the tunnel's throughput capacity. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.property.tunnelInsideIpVersion">TunnelInsideIpVersion</a></code> | <code>string</code> | Indicate whether the VPN tunnels process IPv4 or IPv6 traffic.  Default: ``ipv4``. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.property.vpnConcentratorId">VpnConcentratorId</a></code> | <code>string</code> | The ID of the VPN concentrator to associate with the VPN connection. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.property.vpnGatewayId">VpnGatewayId</a></code> | <code>string</code> | The ID of the virtual private gateway at the AWS side of the VPN connection. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.property.vpnTunnelOptionsSpecifications">VpnTunnelOptionsSpecifications</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecifications">Ec2VpnConnectionVpnTunnelOptionsSpecifications</a>[]</code> | The tunnel options for the VPN connection. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CustomerGatewayId`<sup>Required</sup> <a name="CustomerGatewayId" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.property.customerGatewayId"></a>

```csharp
public string CustomerGatewayId { get; set; }
```

- *Type:* string

The ID of the customer gateway at your end of the VPN connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_vpn_connection#customer_gateway_id Ec2VpnConnection#customer_gateway_id}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The type of VPN connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_vpn_connection#type Ec2VpnConnection#type}

---

##### `EnableAcceleration`<sup>Optional</sup> <a name="EnableAcceleration" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.property.enableAcceleration"></a>

```csharp
public bool|IResolvable EnableAcceleration { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Indicate whether to enable acceleration for the VPN connection.  Default: ``false``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_vpn_connection#enable_acceleration Ec2VpnConnection#enable_acceleration}

---

##### `LocalIpv4NetworkCidr`<sup>Optional</sup> <a name="LocalIpv4NetworkCidr" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.property.localIpv4NetworkCidr"></a>

```csharp
public string LocalIpv4NetworkCidr { get; set; }
```

- *Type:* string

The IPv4 CIDR on the customer gateway (on-premises) side of the VPN connection.  Default: ``0.0.0.0/0``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_vpn_connection#local_ipv_4_network_cidr Ec2VpnConnection#local_ipv_4_network_cidr}

---

##### `LocalIpv6NetworkCidr`<sup>Optional</sup> <a name="LocalIpv6NetworkCidr" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.property.localIpv6NetworkCidr"></a>

```csharp
public string LocalIpv6NetworkCidr { get; set; }
```

- *Type:* string

The IPv6 CIDR on the customer gateway (on-premises) side of the VPN connection.  Default: ``::/0``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_vpn_connection#local_ipv_6_network_cidr Ec2VpnConnection#local_ipv_6_network_cidr}

---

##### `OutsideIpAddressType`<sup>Optional</sup> <a name="OutsideIpAddressType" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.property.outsideIpAddressType"></a>

```csharp
public string OutsideIpAddressType { get; set; }
```

- *Type:* string

The type of IP address assigned to the outside interface of the customer gateway device.

Valid values: `PrivateIpv4` | `PublicIpv4` | `Ipv6`
Default: `PublicIpv4`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_vpn_connection#outside_ip_address_type Ec2VpnConnection#outside_ip_address_type}

---

##### `PreSharedKeyStorage`<sup>Optional</sup> <a name="PreSharedKeyStorage" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.property.preSharedKeyStorage"></a>

```csharp
public string PreSharedKeyStorage { get; set; }
```

- *Type:* string

Describes the storage location for an instance store-backed AMI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_vpn_connection#pre_shared_key_storage Ec2VpnConnection#pre_shared_key_storage}

---

##### `RemoteIpv4NetworkCidr`<sup>Optional</sup> <a name="RemoteIpv4NetworkCidr" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.property.remoteIpv4NetworkCidr"></a>

```csharp
public string RemoteIpv4NetworkCidr { get; set; }
```

- *Type:* string

The IPv4 CIDR on the AWS side of the VPN connection.  Default: ``0.0.0.0/0``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_vpn_connection#remote_ipv_4_network_cidr Ec2VpnConnection#remote_ipv_4_network_cidr}

---

##### `RemoteIpv6NetworkCidr`<sup>Optional</sup> <a name="RemoteIpv6NetworkCidr" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.property.remoteIpv6NetworkCidr"></a>

```csharp
public string RemoteIpv6NetworkCidr { get; set; }
```

- *Type:* string

The IPv6 CIDR on the AWS side of the VPN connection.  Default: ``::/0``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_vpn_connection#remote_ipv_6_network_cidr Ec2VpnConnection#remote_ipv_6_network_cidr}

---

##### `StaticRoutesOnly`<sup>Optional</sup> <a name="StaticRoutesOnly" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.property.staticRoutesOnly"></a>

```csharp
public bool|IResolvable StaticRoutesOnly { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Indicates whether the VPN connection uses static routes only.

Static routes must be used for devices that don't support BGP.
If you are creating a VPN connection for a device that does not support Border Gateway Protocol (BGP), you must specify `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_vpn_connection#static_routes_only Ec2VpnConnection#static_routes_only}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.property.tags"></a>

```csharp
public IResolvable|Ec2VpnConnectionTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTags">Ec2VpnConnectionTags</a>[]

Any tags assigned to the VPN connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_vpn_connection#tags Ec2VpnConnection#tags}

---

##### `TransitGatewayId`<sup>Optional</sup> <a name="TransitGatewayId" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.property.transitGatewayId"></a>

```csharp
public string TransitGatewayId { get; set; }
```

- *Type:* string

The ID of the transit gateway associated with the VPN connection.

You must specify either `TransitGatewayId` or `VpnGatewayId`, but not both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_vpn_connection#transit_gateway_id Ec2VpnConnection#transit_gateway_id}

---

##### `TransportTransitGatewayAttachmentId`<sup>Optional</sup> <a name="TransportTransitGatewayAttachmentId" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.property.transportTransitGatewayAttachmentId"></a>

```csharp
public string TransportTransitGatewayAttachmentId { get; set; }
```

- *Type:* string

The transit gateway attachment ID to use for the VPN tunnel.  Required if ``OutsideIpAddressType`` is set to ``PrivateIpv4``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_vpn_connection#transport_transit_gateway_attachment_id Ec2VpnConnection#transport_transit_gateway_attachment_id}

---

##### `TunnelBandwidth`<sup>Optional</sup> <a name="TunnelBandwidth" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.property.tunnelBandwidth"></a>

```csharp
public string TunnelBandwidth { get; set; }
```

- *Type:* string

The desired bandwidth specification for the VPN tunnel, used when creating or modifying VPN connection options to set the tunnel's throughput capacity.

`standard` supports up to 1.25 Gbps per tunnel, while `large` supports up to 5 Gbps per tunnel. The default value is `standard`. Existing VPN connections without a bandwidth setting will automatically default to `standard`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_vpn_connection#tunnel_bandwidth Ec2VpnConnection#tunnel_bandwidth}

---

##### `TunnelInsideIpVersion`<sup>Optional</sup> <a name="TunnelInsideIpVersion" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.property.tunnelInsideIpVersion"></a>

```csharp
public string TunnelInsideIpVersion { get; set; }
```

- *Type:* string

Indicate whether the VPN tunnels process IPv4 or IPv6 traffic.  Default: ``ipv4``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_vpn_connection#tunnel_inside_ip_version Ec2VpnConnection#tunnel_inside_ip_version}

---

##### `VpnConcentratorId`<sup>Optional</sup> <a name="VpnConcentratorId" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.property.vpnConcentratorId"></a>

```csharp
public string VpnConcentratorId { get; set; }
```

- *Type:* string

The ID of the VPN concentrator to associate with the VPN connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_vpn_connection#vpn_concentrator_id Ec2VpnConnection#vpn_concentrator_id}

---

##### `VpnGatewayId`<sup>Optional</sup> <a name="VpnGatewayId" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.property.vpnGatewayId"></a>

```csharp
public string VpnGatewayId { get; set; }
```

- *Type:* string

The ID of the virtual private gateway at the AWS side of the VPN connection.

You must specify either `TransitGatewayId` or `VpnGatewayId`, but not both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_vpn_connection#vpn_gateway_id Ec2VpnConnection#vpn_gateway_id}

---

##### `VpnTunnelOptionsSpecifications`<sup>Optional</sup> <a name="VpnTunnelOptionsSpecifications" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.property.vpnTunnelOptionsSpecifications"></a>

```csharp
public IResolvable|Ec2VpnConnectionVpnTunnelOptionsSpecifications[] VpnTunnelOptionsSpecifications { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecifications">Ec2VpnConnectionVpnTunnelOptionsSpecifications</a>[]

The tunnel options for the VPN connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_vpn_connection#vpn_tunnel_options_specifications Ec2VpnConnection#vpn_tunnel_options_specifications}

---

### Ec2VpnConnectionTags <a name="Ec2VpnConnectionTags" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2VpnConnectionTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTags.property.key">Key</a></code> | <code>string</code> | The tag key. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTags.property.value">Value</a></code> | <code>string</code> | The tag value. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The tag key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_vpn_connection#key Ec2VpnConnection#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The tag value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_vpn_connection#value Ec2VpnConnection#value}

---

### Ec2VpnConnectionVpnTunnelOptionsSpecifications <a name="Ec2VpnConnectionVpnTunnelOptionsSpecifications" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecifications"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecifications.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2VpnConnectionVpnTunnelOptionsSpecifications {
    string DpdTimeoutAction = null,
    double DpdTimeoutSeconds = null,
    bool|IResolvable EnableTunnelLifecycleControl = null,
    IResolvable|Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersions[] IkeVersions = null,
    Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptions LogOptions = null,
    IResolvable|Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbers[] Phase1DhGroupNumbers = null,
    IResolvable|Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithms[] Phase1EncryptionAlgorithms = null,
    IResolvable|Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithms[] Phase1IntegrityAlgorithms = null,
    double Phase1LifetimeSeconds = null,
    IResolvable|Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbers[] Phase2DhGroupNumbers = null,
    IResolvable|Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithms[] Phase2EncryptionAlgorithms = null,
    IResolvable|Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithms[] Phase2IntegrityAlgorithms = null,
    double Phase2LifetimeSeconds = null,
    string PreSharedKey = null,
    double RekeyFuzzPercentage = null,
    double RekeyMarginTimeSeconds = null,
    double ReplayWindowSize = null,
    string StartupAction = null,
    string TunnelInsideCidr = null,
    string TunnelInsideIpv6Cidr = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecifications.property.dpdTimeoutAction">DpdTimeoutAction</a></code> | <code>string</code> | The action to take after DPD timeout occurs. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecifications.property.dpdTimeoutSeconds">DpdTimeoutSeconds</a></code> | <code>double</code> | The number of seconds after which a DPD timeout occurs. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecifications.property.enableTunnelLifecycleControl">EnableTunnelLifecycleControl</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Turn on or off tunnel endpoint lifecycle control feature. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecifications.property.ikeVersions">IkeVersions</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersions">Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersions</a>[]</code> | The IKE versions that are permitted for the VPN tunnel.  Valid values: ``ikev1`` \| ``ikev2``. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecifications.property.logOptions">LogOptions</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptions">Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptions</a></code> | Options for logging VPN tunnel activity. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecifications.property.phase1DhGroupNumbers">Phase1DhGroupNumbers</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbers">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbers</a>[]</code> | One or more Diffie-Hellman group numbers that are permitted for the VPN tunnel for phase 1 IKE negotiations. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecifications.property.phase1EncryptionAlgorithms">Phase1EncryptionAlgorithms</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithms">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithms</a>[]</code> | One or more encryption algorithms that are permitted for the VPN tunnel for phase 1 IKE negotiations. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecifications.property.phase1IntegrityAlgorithms">Phase1IntegrityAlgorithms</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithms">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithms</a>[]</code> | One or more integrity algorithms that are permitted for the VPN tunnel for phase 1 IKE negotiations. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecifications.property.phase1LifetimeSeconds">Phase1LifetimeSeconds</a></code> | <code>double</code> | The lifetime for phase 1 of the IKE negotiation, in seconds. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecifications.property.phase2DhGroupNumbers">Phase2DhGroupNumbers</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbers">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbers</a>[]</code> | One or more Diffie-Hellman group numbers that are permitted for the VPN tunnel for phase 2 IKE negotiations. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecifications.property.phase2EncryptionAlgorithms">Phase2EncryptionAlgorithms</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithms">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithms</a>[]</code> | One or more encryption algorithms that are permitted for the VPN tunnel for phase 2 IKE negotiations. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecifications.property.phase2IntegrityAlgorithms">Phase2IntegrityAlgorithms</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithms">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithms</a>[]</code> | One or more integrity algorithms that are permitted for the VPN tunnel for phase 2 IKE negotiations. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecifications.property.phase2LifetimeSeconds">Phase2LifetimeSeconds</a></code> | <code>double</code> | The lifetime for phase 2 of the IKE negotiation, in seconds. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecifications.property.preSharedKey">PreSharedKey</a></code> | <code>string</code> | The pre-shared key (PSK) to establish initial authentication between the virtual private gateway and customer gateway. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecifications.property.rekeyFuzzPercentage">RekeyFuzzPercentage</a></code> | <code>double</code> | The percentage of the rekey window (determined by ``RekeyMarginTimeSeconds``) during which the rekey time is randomly selected. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecifications.property.rekeyMarginTimeSeconds">RekeyMarginTimeSeconds</a></code> | <code>double</code> | The margin time, in seconds, before the phase 2 lifetime expires, during which the AWS side of the VPN connection performs an IKE rekey. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecifications.property.replayWindowSize">ReplayWindowSize</a></code> | <code>double</code> | The number of packets in an IKE replay window.  Constraints: A value between 64 and 2048.  Default: ``1024``. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecifications.property.startupAction">StartupAction</a></code> | <code>string</code> | The action to take when the establishing the tunnel for the VPN connection. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecifications.property.tunnelInsideCidr">TunnelInsideCidr</a></code> | <code>string</code> | The range of inside IP addresses for the tunnel. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecifications.property.tunnelInsideIpv6Cidr">TunnelInsideIpv6Cidr</a></code> | <code>string</code> | The range of inside IPv6 addresses for the tunnel. |

---

##### `DpdTimeoutAction`<sup>Optional</sup> <a name="DpdTimeoutAction" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecifications.property.dpdTimeoutAction"></a>

```csharp
public string DpdTimeoutAction { get; set; }
```

- *Type:* string

The action to take after DPD timeout occurs.

Specify `restart` to restart the IKE initiation. Specify `clear` to end the IKE session.
Valid Values: `clear` | `none` | `restart`
Default: `clear`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_vpn_connection#dpd_timeout_action Ec2VpnConnection#dpd_timeout_action}

---

##### `DpdTimeoutSeconds`<sup>Optional</sup> <a name="DpdTimeoutSeconds" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecifications.property.dpdTimeoutSeconds"></a>

```csharp
public double DpdTimeoutSeconds { get; set; }
```

- *Type:* double

The number of seconds after which a DPD timeout occurs.

Constraints: A value greater than or equal to 30.
Default: `30`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_vpn_connection#dpd_timeout_seconds Ec2VpnConnection#dpd_timeout_seconds}

---

##### `EnableTunnelLifecycleControl`<sup>Optional</sup> <a name="EnableTunnelLifecycleControl" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecifications.property.enableTunnelLifecycleControl"></a>

```csharp
public bool|IResolvable EnableTunnelLifecycleControl { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Turn on or off tunnel endpoint lifecycle control feature.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_vpn_connection#enable_tunnel_lifecycle_control Ec2VpnConnection#enable_tunnel_lifecycle_control}

---

##### `IkeVersions`<sup>Optional</sup> <a name="IkeVersions" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecifications.property.ikeVersions"></a>

```csharp
public IResolvable|Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersions[] IkeVersions { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersions">Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersions</a>[]

The IKE versions that are permitted for the VPN tunnel.  Valid values: ``ikev1`` | ``ikev2``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_vpn_connection#ike_versions Ec2VpnConnection#ike_versions}

---

##### `LogOptions`<sup>Optional</sup> <a name="LogOptions" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecifications.property.logOptions"></a>

```csharp
public Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptions LogOptions { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptions">Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptions</a>

Options for logging VPN tunnel activity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_vpn_connection#log_options Ec2VpnConnection#log_options}

---

##### `Phase1DhGroupNumbers`<sup>Optional</sup> <a name="Phase1DhGroupNumbers" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecifications.property.phase1DhGroupNumbers"></a>

```csharp
public IResolvable|Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbers[] Phase1DhGroupNumbers { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbers">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbers</a>[]

One or more Diffie-Hellman group numbers that are permitted for the VPN tunnel for phase 1 IKE negotiations.

Valid values: `2` | `14` | `15` | `16` | `17` | `18` | `19` | `20` | `21` | `22` | `23` | `24`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_vpn_connection#phase_1_dh_group_numbers Ec2VpnConnection#phase_1_dh_group_numbers}

---

##### `Phase1EncryptionAlgorithms`<sup>Optional</sup> <a name="Phase1EncryptionAlgorithms" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecifications.property.phase1EncryptionAlgorithms"></a>

```csharp
public IResolvable|Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithms[] Phase1EncryptionAlgorithms { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithms">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithms</a>[]

One or more encryption algorithms that are permitted for the VPN tunnel for phase 1 IKE negotiations.

Valid values: `AES128` | `AES256` | `AES128-GCM-16` | `AES256-GCM-16`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_vpn_connection#phase_1_encryption_algorithms Ec2VpnConnection#phase_1_encryption_algorithms}

---

##### `Phase1IntegrityAlgorithms`<sup>Optional</sup> <a name="Phase1IntegrityAlgorithms" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecifications.property.phase1IntegrityAlgorithms"></a>

```csharp
public IResolvable|Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithms[] Phase1IntegrityAlgorithms { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithms">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithms</a>[]

One or more integrity algorithms that are permitted for the VPN tunnel for phase 1 IKE negotiations.

Valid values: `SHA1` | `SHA2-256` | `SHA2-384` | `SHA2-512`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_vpn_connection#phase_1_integrity_algorithms Ec2VpnConnection#phase_1_integrity_algorithms}

---

##### `Phase1LifetimeSeconds`<sup>Optional</sup> <a name="Phase1LifetimeSeconds" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecifications.property.phase1LifetimeSeconds"></a>

```csharp
public double Phase1LifetimeSeconds { get; set; }
```

- *Type:* double

The lifetime for phase 1 of the IKE negotiation, in seconds.

Constraints: A value between 900 and 28,800.
Default: `28800`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_vpn_connection#phase_1_lifetime_seconds Ec2VpnConnection#phase_1_lifetime_seconds}

---

##### `Phase2DhGroupNumbers`<sup>Optional</sup> <a name="Phase2DhGroupNumbers" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecifications.property.phase2DhGroupNumbers"></a>

```csharp
public IResolvable|Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbers[] Phase2DhGroupNumbers { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbers">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbers</a>[]

One or more Diffie-Hellman group numbers that are permitted for the VPN tunnel for phase 2 IKE negotiations.

Valid values: `2` | `5` | `14` | `15` | `16` | `17` | `18` | `19` | `20` | `21` | `22` | `23` | `24`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_vpn_connection#phase_2_dh_group_numbers Ec2VpnConnection#phase_2_dh_group_numbers}

---

##### `Phase2EncryptionAlgorithms`<sup>Optional</sup> <a name="Phase2EncryptionAlgorithms" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecifications.property.phase2EncryptionAlgorithms"></a>

```csharp
public IResolvable|Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithms[] Phase2EncryptionAlgorithms { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithms">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithms</a>[]

One or more encryption algorithms that are permitted for the VPN tunnel for phase 2 IKE negotiations.

Valid values: `AES128` | `AES256` | `AES128-GCM-16` | `AES256-GCM-16`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_vpn_connection#phase_2_encryption_algorithms Ec2VpnConnection#phase_2_encryption_algorithms}

---

##### `Phase2IntegrityAlgorithms`<sup>Optional</sup> <a name="Phase2IntegrityAlgorithms" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecifications.property.phase2IntegrityAlgorithms"></a>

```csharp
public IResolvable|Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithms[] Phase2IntegrityAlgorithms { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithms">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithms</a>[]

One or more integrity algorithms that are permitted for the VPN tunnel for phase 2 IKE negotiations.

Valid values: `SHA1` | `SHA2-256` | `SHA2-384` | `SHA2-512`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_vpn_connection#phase_2_integrity_algorithms Ec2VpnConnection#phase_2_integrity_algorithms}

---

##### `Phase2LifetimeSeconds`<sup>Optional</sup> <a name="Phase2LifetimeSeconds" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecifications.property.phase2LifetimeSeconds"></a>

```csharp
public double Phase2LifetimeSeconds { get; set; }
```

- *Type:* double

The lifetime for phase 2 of the IKE negotiation, in seconds.

Constraints: A value between 900 and 3,600. The value must be less than the value for `Phase1LifetimeSeconds`.
Default: `3600`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_vpn_connection#phase_2_lifetime_seconds Ec2VpnConnection#phase_2_lifetime_seconds}

---

##### `PreSharedKey`<sup>Optional</sup> <a name="PreSharedKey" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecifications.property.preSharedKey"></a>

```csharp
public string PreSharedKey { get; set; }
```

- *Type:* string

The pre-shared key (PSK) to establish initial authentication between the virtual private gateway and customer gateway.

Constraints: Allowed characters are alphanumeric characters, periods (.), and underscores (_). Must be between 8 and 64 characters in length and cannot start with zero (0).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_vpn_connection#pre_shared_key Ec2VpnConnection#pre_shared_key}

---

##### `RekeyFuzzPercentage`<sup>Optional</sup> <a name="RekeyFuzzPercentage" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecifications.property.rekeyFuzzPercentage"></a>

```csharp
public double RekeyFuzzPercentage { get; set; }
```

- *Type:* double

The percentage of the rekey window (determined by ``RekeyMarginTimeSeconds``) during which the rekey time is randomly selected.

Constraints: A value between 0 and 100.
Default: `100`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_vpn_connection#rekey_fuzz_percentage Ec2VpnConnection#rekey_fuzz_percentage}

---

##### `RekeyMarginTimeSeconds`<sup>Optional</sup> <a name="RekeyMarginTimeSeconds" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecifications.property.rekeyMarginTimeSeconds"></a>

```csharp
public double RekeyMarginTimeSeconds { get; set; }
```

- *Type:* double

The margin time, in seconds, before the phase 2 lifetime expires, during which the AWS side of the VPN connection performs an IKE rekey.

The exact time of the rekey is randomly selected based on the value for `RekeyFuzzPercentage`.
Constraints: A value between 60 and half of `Phase2LifetimeSeconds`.
Default: `270`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_vpn_connection#rekey_margin_time_seconds Ec2VpnConnection#rekey_margin_time_seconds}

---

##### `ReplayWindowSize`<sup>Optional</sup> <a name="ReplayWindowSize" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecifications.property.replayWindowSize"></a>

```csharp
public double ReplayWindowSize { get; set; }
```

- *Type:* double

The number of packets in an IKE replay window.  Constraints: A value between 64 and 2048.  Default: ``1024``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_vpn_connection#replay_window_size Ec2VpnConnection#replay_window_size}

---

##### `StartupAction`<sup>Optional</sup> <a name="StartupAction" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecifications.property.startupAction"></a>

```csharp
public string StartupAction { get; set; }
```

- *Type:* string

The action to take when the establishing the tunnel for the VPN connection.

By default, your customer gateway device must initiate the IKE negotiation and bring up the tunnel. Specify `start` for AWS to initiate the IKE negotiation.
Valid Values: `add` | `start`
Default: `add`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_vpn_connection#startup_action Ec2VpnConnection#startup_action}

---

##### `TunnelInsideCidr`<sup>Optional</sup> <a name="TunnelInsideCidr" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecifications.property.tunnelInsideCidr"></a>

```csharp
public string TunnelInsideCidr { get; set; }
```

- *Type:* string

The range of inside IP addresses for the tunnel.

Any specified CIDR blocks must be unique across all VPN connections that use the same virtual private gateway.
Constraints: A size /30 CIDR block from the `169.254.0.0/16` range. The following CIDR blocks are reserved and cannot be used:

* `169.254.0.0/30`
* `169.254.1.0/30`
* `169.254.2.0/30`
* `169.254.3.0/30`
* `169.254.4.0/30`
* `169.254.5.0/30`
* `169.254.169.252/30`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_vpn_connection#tunnel_inside_cidr Ec2VpnConnection#tunnel_inside_cidr}

---

##### `TunnelInsideIpv6Cidr`<sup>Optional</sup> <a name="TunnelInsideIpv6Cidr" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecifications.property.tunnelInsideIpv6Cidr"></a>

```csharp
public string TunnelInsideIpv6Cidr { get; set; }
```

- *Type:* string

The range of inside IPv6 addresses for the tunnel.

Any specified CIDR blocks must be unique across all VPN connections that use the same transit gateway.
Constraints: A size /126 CIDR block from the local `fd00::/8` range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_vpn_connection#tunnel_inside_ipv_6_cidr Ec2VpnConnection#tunnel_inside_ipv_6_cidr}

---

### Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersions <a name="Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersions" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersions {
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersions.property.value">Value</a></code> | <code>string</code> | The IKE version. |

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersions.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The IKE version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_vpn_connection#value Ec2VpnConnection#value}

---

### Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptions <a name="Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptions" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptions {
    Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptions CloudwatchLogOptions = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptions.property.cloudwatchLogOptions">CloudwatchLogOptions</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptions">Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptions</a></code> | Options for sending VPN tunnel logs to CloudWatch. |

---

##### `CloudwatchLogOptions`<sup>Optional</sup> <a name="CloudwatchLogOptions" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptions.property.cloudwatchLogOptions"></a>

```csharp
public Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptions CloudwatchLogOptions { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptions">Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptions</a>

Options for sending VPN tunnel logs to CloudWatch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_vpn_connection#cloudwatch_log_options Ec2VpnConnection#cloudwatch_log_options}

---

### Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptions <a name="Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptions" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptions {
    bool|IResolvable BgpLogEnabled = null,
    string BgpLogGroupArn = null,
    string BgpLogOutputFormat = null,
    bool|IResolvable LogEnabled = null,
    string LogGroupArn = null,
    string LogOutputFormat = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptions.property.bgpLogEnabled">BgpLogEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Specifies whether to enable BGP logging for the VPN connection. Default value is ``False``.  Valid values: ``True`` \| ``False``. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptions.property.bgpLogGroupArn">BgpLogGroupArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the CloudWatch log group where BGP logs will be sent. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptions.property.bgpLogOutputFormat">BgpLogOutputFormat</a></code> | <code>string</code> | The desired output format for BGP logs to be sent to CloudWatch. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptions.property.logEnabled">LogEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Enable or disable VPN tunnel logging feature. Default value is ``False``.  Valid values: ``True`` \| ``False``. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptions.property.logGroupArn">LogGroupArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the CloudWatch log group to send logs to. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptions.property.logOutputFormat">LogOutputFormat</a></code> | <code>string</code> | Set log format. Default format is ``json``.  Valid values: ``json`` \| ``text``. |

---

##### `BgpLogEnabled`<sup>Optional</sup> <a name="BgpLogEnabled" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptions.property.bgpLogEnabled"></a>

```csharp
public bool|IResolvable BgpLogEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Specifies whether to enable BGP logging for the VPN connection. Default value is ``False``.  Valid values: ``True`` | ``False``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_vpn_connection#bgp_log_enabled Ec2VpnConnection#bgp_log_enabled}

---

##### `BgpLogGroupArn`<sup>Optional</sup> <a name="BgpLogGroupArn" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptions.property.bgpLogGroupArn"></a>

```csharp
public string BgpLogGroupArn { get; set; }
```

- *Type:* string

The Amazon Resource Name (ARN) of the CloudWatch log group where BGP logs will be sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_vpn_connection#bgp_log_group_arn Ec2VpnConnection#bgp_log_group_arn}

---

##### `BgpLogOutputFormat`<sup>Optional</sup> <a name="BgpLogOutputFormat" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptions.property.bgpLogOutputFormat"></a>

```csharp
public string BgpLogOutputFormat { get; set; }
```

- *Type:* string

The desired output format for BGP logs to be sent to CloudWatch.

Default format is `json`.
Valid values: `json` | `text`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_vpn_connection#bgp_log_output_format Ec2VpnConnection#bgp_log_output_format}

---

##### `LogEnabled`<sup>Optional</sup> <a name="LogEnabled" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptions.property.logEnabled"></a>

```csharp
public bool|IResolvable LogEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Enable or disable VPN tunnel logging feature. Default value is ``False``.  Valid values: ``True`` | ``False``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_vpn_connection#log_enabled Ec2VpnConnection#log_enabled}

---

##### `LogGroupArn`<sup>Optional</sup> <a name="LogGroupArn" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptions.property.logGroupArn"></a>

```csharp
public string LogGroupArn { get; set; }
```

- *Type:* string

The Amazon Resource Name (ARN) of the CloudWatch log group to send logs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_vpn_connection#log_group_arn Ec2VpnConnection#log_group_arn}

---

##### `LogOutputFormat`<sup>Optional</sup> <a name="LogOutputFormat" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptions.property.logOutputFormat"></a>

```csharp
public string LogOutputFormat { get; set; }
```

- *Type:* string

Set log format. Default format is ``json``.  Valid values: ``json`` | ``text``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_vpn_connection#log_output_format Ec2VpnConnection#log_output_format}

---

### Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbers <a name="Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbers" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbers.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbers {
    double Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbers.property.value">Value</a></code> | <code>double</code> | The Diffie-Hellmann group number. |

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbers.property.value"></a>

```csharp
public double Value { get; set; }
```

- *Type:* double

The Diffie-Hellmann group number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_vpn_connection#value Ec2VpnConnection#value}

---

### Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithms <a name="Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithms" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithms"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithms.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithms {
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithms.property.value">Value</a></code> | <code>string</code> | The value for the encryption algorithm. |

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithms.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value for the encryption algorithm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_vpn_connection#value Ec2VpnConnection#value}

---

### Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithms <a name="Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithms" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithms"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithms.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithms {
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithms.property.value">Value</a></code> | <code>string</code> | The value for the integrity algorithm. |

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithms.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value for the integrity algorithm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_vpn_connection#value Ec2VpnConnection#value}

---

### Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbers <a name="Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbers" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbers.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbers {
    double Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbers.property.value">Value</a></code> | <code>double</code> | The Diffie-Hellmann group number. |

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbers.property.value"></a>

```csharp
public double Value { get; set; }
```

- *Type:* double

The Diffie-Hellmann group number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_vpn_connection#value Ec2VpnConnection#value}

---

### Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithms <a name="Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithms" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithms"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithms.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithms {
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithms.property.value">Value</a></code> | <code>string</code> | The encryption algorithm. |

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithms.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The encryption algorithm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_vpn_connection#value Ec2VpnConnection#value}

---

### Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithms <a name="Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithms" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithms"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithms.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithms {
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithms.property.value">Value</a></code> | <code>string</code> | The integrity algorithm. |

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithms.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The integrity algorithm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_vpn_connection#value Ec2VpnConnection#value}

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2VpnConnectionTagsList <a name="Ec2VpnConnectionTagsList" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2VpnConnectionTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsList.get"></a>

```csharp
private Ec2VpnConnectionTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTags">Ec2VpnConnectionTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsList.property.internalValue"></a>

```csharp
public IResolvable|Ec2VpnConnectionTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTags">Ec2VpnConnectionTags</a>[]

---


### Ec2VpnConnectionTagsOutputReference <a name="Ec2VpnConnectionTagsOutputReference" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2VpnConnectionTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTags">Ec2VpnConnectionTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Ec2VpnConnectionTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTags">Ec2VpnConnectionTags</a>

---


### Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList <a name="Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList.get"></a>

```csharp
private Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersions">Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersions</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList.property.internalValue"></a>

```csharp
public IResolvable|Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersions[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersions">Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersions</a>[]

---


### Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference <a name="Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersions">Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersions InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersions">Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersions</a>

---


### Ec2VpnConnectionVpnTunnelOptionsSpecificationsList <a name="Ec2VpnConnectionVpnTunnelOptionsSpecificationsList" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2VpnConnectionVpnTunnelOptionsSpecificationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsList.get"></a>

```csharp
private Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecifications">Ec2VpnConnectionVpnTunnelOptionsSpecifications</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsList.property.internalValue"></a>

```csharp
public IResolvable|Ec2VpnConnectionVpnTunnelOptionsSpecifications[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecifications">Ec2VpnConnectionVpnTunnelOptionsSpecifications</a>[]

---


### Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference <a name="Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.resetBgpLogEnabled">ResetBgpLogEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.resetBgpLogGroupArn">ResetBgpLogGroupArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.resetBgpLogOutputFormat">ResetBgpLogOutputFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.resetLogEnabled">ResetLogEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.resetLogGroupArn">ResetLogGroupArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.resetLogOutputFormat">ResetLogOutputFormat</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBgpLogEnabled` <a name="ResetBgpLogEnabled" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.resetBgpLogEnabled"></a>

```csharp
private void ResetBgpLogEnabled()
```

##### `ResetBgpLogGroupArn` <a name="ResetBgpLogGroupArn" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.resetBgpLogGroupArn"></a>

```csharp
private void ResetBgpLogGroupArn()
```

##### `ResetBgpLogOutputFormat` <a name="ResetBgpLogOutputFormat" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.resetBgpLogOutputFormat"></a>

```csharp
private void ResetBgpLogOutputFormat()
```

##### `ResetLogEnabled` <a name="ResetLogEnabled" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.resetLogEnabled"></a>

```csharp
private void ResetLogEnabled()
```

##### `ResetLogGroupArn` <a name="ResetLogGroupArn" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.resetLogGroupArn"></a>

```csharp
private void ResetLogGroupArn()
```

##### `ResetLogOutputFormat` <a name="ResetLogOutputFormat" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.resetLogOutputFormat"></a>

```csharp
private void ResetLogOutputFormat()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.property.bgpLogEnabledInput">BgpLogEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.property.bgpLogGroupArnInput">BgpLogGroupArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.property.bgpLogOutputFormatInput">BgpLogOutputFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.property.logEnabledInput">LogEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.property.logGroupArnInput">LogGroupArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.property.logOutputFormatInput">LogOutputFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.property.bgpLogEnabled">BgpLogEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.property.bgpLogGroupArn">BgpLogGroupArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.property.bgpLogOutputFormat">BgpLogOutputFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.property.logEnabled">LogEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.property.logGroupArn">LogGroupArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.property.logOutputFormat">LogOutputFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptions">Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BgpLogEnabledInput`<sup>Optional</sup> <a name="BgpLogEnabledInput" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.property.bgpLogEnabledInput"></a>

```csharp
public bool|IResolvable BgpLogEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `BgpLogGroupArnInput`<sup>Optional</sup> <a name="BgpLogGroupArnInput" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.property.bgpLogGroupArnInput"></a>

```csharp
public string BgpLogGroupArnInput { get; }
```

- *Type:* string

---

##### `BgpLogOutputFormatInput`<sup>Optional</sup> <a name="BgpLogOutputFormatInput" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.property.bgpLogOutputFormatInput"></a>

```csharp
public string BgpLogOutputFormatInput { get; }
```

- *Type:* string

---

##### `LogEnabledInput`<sup>Optional</sup> <a name="LogEnabledInput" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.property.logEnabledInput"></a>

```csharp
public bool|IResolvable LogEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `LogGroupArnInput`<sup>Optional</sup> <a name="LogGroupArnInput" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.property.logGroupArnInput"></a>

```csharp
public string LogGroupArnInput { get; }
```

- *Type:* string

---

##### `LogOutputFormatInput`<sup>Optional</sup> <a name="LogOutputFormatInput" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.property.logOutputFormatInput"></a>

```csharp
public string LogOutputFormatInput { get; }
```

- *Type:* string

---

##### `BgpLogEnabled`<sup>Required</sup> <a name="BgpLogEnabled" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.property.bgpLogEnabled"></a>

```csharp
public bool|IResolvable BgpLogEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `BgpLogGroupArn`<sup>Required</sup> <a name="BgpLogGroupArn" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.property.bgpLogGroupArn"></a>

```csharp
public string BgpLogGroupArn { get; }
```

- *Type:* string

---

##### `BgpLogOutputFormat`<sup>Required</sup> <a name="BgpLogOutputFormat" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.property.bgpLogOutputFormat"></a>

```csharp
public string BgpLogOutputFormat { get; }
```

- *Type:* string

---

##### `LogEnabled`<sup>Required</sup> <a name="LogEnabled" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.property.logEnabled"></a>

```csharp
public bool|IResolvable LogEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `LogGroupArn`<sup>Required</sup> <a name="LogGroupArn" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.property.logGroupArn"></a>

```csharp
public string LogGroupArn { get; }
```

- *Type:* string

---

##### `LogOutputFormat`<sup>Required</sup> <a name="LogOutputFormat" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.property.logOutputFormat"></a>

```csharp
public string LogOutputFormat { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptions InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptions">Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptions</a>

---


### Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference <a name="Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.putCloudwatchLogOptions">PutCloudwatchLogOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.resetCloudwatchLogOptions">ResetCloudwatchLogOptions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCloudwatchLogOptions` <a name="PutCloudwatchLogOptions" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.putCloudwatchLogOptions"></a>

```csharp
private void PutCloudwatchLogOptions(Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.putCloudwatchLogOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptions">Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptions</a>

---

##### `ResetCloudwatchLogOptions` <a name="ResetCloudwatchLogOptions" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.resetCloudwatchLogOptions"></a>

```csharp
private void ResetCloudwatchLogOptions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.property.cloudwatchLogOptions">CloudwatchLogOptions</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference">Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.property.cloudwatchLogOptionsInput">CloudwatchLogOptionsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptions">Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptions">Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CloudwatchLogOptions`<sup>Required</sup> <a name="CloudwatchLogOptions" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.property.cloudwatchLogOptions"></a>

```csharp
public Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference CloudwatchLogOptions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference">Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference</a>

---

##### `CloudwatchLogOptionsInput`<sup>Optional</sup> <a name="CloudwatchLogOptionsInput" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.property.cloudwatchLogOptionsInput"></a>

```csharp
public IResolvable|Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptions CloudwatchLogOptionsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptions">Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptions</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptions InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptions">Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptions</a>

---


### Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference <a name="Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.putIkeVersions">PutIkeVersions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.putLogOptions">PutLogOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.putPhase1DhGroupNumbers">PutPhase1DhGroupNumbers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.putPhase1EncryptionAlgorithms">PutPhase1EncryptionAlgorithms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.putPhase1IntegrityAlgorithms">PutPhase1IntegrityAlgorithms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.putPhase2DhGroupNumbers">PutPhase2DhGroupNumbers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.putPhase2EncryptionAlgorithms">PutPhase2EncryptionAlgorithms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.putPhase2IntegrityAlgorithms">PutPhase2IntegrityAlgorithms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.resetDpdTimeoutAction">ResetDpdTimeoutAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.resetDpdTimeoutSeconds">ResetDpdTimeoutSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.resetEnableTunnelLifecycleControl">ResetEnableTunnelLifecycleControl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.resetIkeVersions">ResetIkeVersions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.resetLogOptions">ResetLogOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.resetPhase1DhGroupNumbers">ResetPhase1DhGroupNumbers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.resetPhase1EncryptionAlgorithms">ResetPhase1EncryptionAlgorithms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.resetPhase1IntegrityAlgorithms">ResetPhase1IntegrityAlgorithms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.resetPhase1LifetimeSeconds">ResetPhase1LifetimeSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.resetPhase2DhGroupNumbers">ResetPhase2DhGroupNumbers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.resetPhase2EncryptionAlgorithms">ResetPhase2EncryptionAlgorithms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.resetPhase2IntegrityAlgorithms">ResetPhase2IntegrityAlgorithms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.resetPhase2LifetimeSeconds">ResetPhase2LifetimeSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.resetPreSharedKey">ResetPreSharedKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.resetRekeyFuzzPercentage">ResetRekeyFuzzPercentage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.resetRekeyMarginTimeSeconds">ResetRekeyMarginTimeSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.resetReplayWindowSize">ResetReplayWindowSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.resetStartupAction">ResetStartupAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.resetTunnelInsideCidr">ResetTunnelInsideCidr</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.resetTunnelInsideIpv6Cidr">ResetTunnelInsideIpv6Cidr</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutIkeVersions` <a name="PutIkeVersions" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.putIkeVersions"></a>

```csharp
private void PutIkeVersions(IResolvable|Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersions[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.putIkeVersions.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersions">Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersions</a>[]

---

##### `PutLogOptions` <a name="PutLogOptions" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.putLogOptions"></a>

```csharp
private void PutLogOptions(Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.putLogOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptions">Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptions</a>

---

##### `PutPhase1DhGroupNumbers` <a name="PutPhase1DhGroupNumbers" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.putPhase1DhGroupNumbers"></a>

```csharp
private void PutPhase1DhGroupNumbers(IResolvable|Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbers[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.putPhase1DhGroupNumbers.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbers">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbers</a>[]

---

##### `PutPhase1EncryptionAlgorithms` <a name="PutPhase1EncryptionAlgorithms" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.putPhase1EncryptionAlgorithms"></a>

```csharp
private void PutPhase1EncryptionAlgorithms(IResolvable|Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithms[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.putPhase1EncryptionAlgorithms.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithms">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithms</a>[]

---

##### `PutPhase1IntegrityAlgorithms` <a name="PutPhase1IntegrityAlgorithms" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.putPhase1IntegrityAlgorithms"></a>

```csharp
private void PutPhase1IntegrityAlgorithms(IResolvable|Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithms[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.putPhase1IntegrityAlgorithms.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithms">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithms</a>[]

---

##### `PutPhase2DhGroupNumbers` <a name="PutPhase2DhGroupNumbers" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.putPhase2DhGroupNumbers"></a>

```csharp
private void PutPhase2DhGroupNumbers(IResolvable|Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbers[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.putPhase2DhGroupNumbers.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbers">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbers</a>[]

---

##### `PutPhase2EncryptionAlgorithms` <a name="PutPhase2EncryptionAlgorithms" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.putPhase2EncryptionAlgorithms"></a>

```csharp
private void PutPhase2EncryptionAlgorithms(IResolvable|Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithms[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.putPhase2EncryptionAlgorithms.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithms">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithms</a>[]

---

##### `PutPhase2IntegrityAlgorithms` <a name="PutPhase2IntegrityAlgorithms" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.putPhase2IntegrityAlgorithms"></a>

```csharp
private void PutPhase2IntegrityAlgorithms(IResolvable|Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithms[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.putPhase2IntegrityAlgorithms.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithms">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithms</a>[]

---

##### `ResetDpdTimeoutAction` <a name="ResetDpdTimeoutAction" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.resetDpdTimeoutAction"></a>

```csharp
private void ResetDpdTimeoutAction()
```

##### `ResetDpdTimeoutSeconds` <a name="ResetDpdTimeoutSeconds" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.resetDpdTimeoutSeconds"></a>

```csharp
private void ResetDpdTimeoutSeconds()
```

##### `ResetEnableTunnelLifecycleControl` <a name="ResetEnableTunnelLifecycleControl" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.resetEnableTunnelLifecycleControl"></a>

```csharp
private void ResetEnableTunnelLifecycleControl()
```

##### `ResetIkeVersions` <a name="ResetIkeVersions" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.resetIkeVersions"></a>

```csharp
private void ResetIkeVersions()
```

##### `ResetLogOptions` <a name="ResetLogOptions" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.resetLogOptions"></a>

```csharp
private void ResetLogOptions()
```

##### `ResetPhase1DhGroupNumbers` <a name="ResetPhase1DhGroupNumbers" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.resetPhase1DhGroupNumbers"></a>

```csharp
private void ResetPhase1DhGroupNumbers()
```

##### `ResetPhase1EncryptionAlgorithms` <a name="ResetPhase1EncryptionAlgorithms" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.resetPhase1EncryptionAlgorithms"></a>

```csharp
private void ResetPhase1EncryptionAlgorithms()
```

##### `ResetPhase1IntegrityAlgorithms` <a name="ResetPhase1IntegrityAlgorithms" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.resetPhase1IntegrityAlgorithms"></a>

```csharp
private void ResetPhase1IntegrityAlgorithms()
```

##### `ResetPhase1LifetimeSeconds` <a name="ResetPhase1LifetimeSeconds" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.resetPhase1LifetimeSeconds"></a>

```csharp
private void ResetPhase1LifetimeSeconds()
```

##### `ResetPhase2DhGroupNumbers` <a name="ResetPhase2DhGroupNumbers" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.resetPhase2DhGroupNumbers"></a>

```csharp
private void ResetPhase2DhGroupNumbers()
```

##### `ResetPhase2EncryptionAlgorithms` <a name="ResetPhase2EncryptionAlgorithms" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.resetPhase2EncryptionAlgorithms"></a>

```csharp
private void ResetPhase2EncryptionAlgorithms()
```

##### `ResetPhase2IntegrityAlgorithms` <a name="ResetPhase2IntegrityAlgorithms" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.resetPhase2IntegrityAlgorithms"></a>

```csharp
private void ResetPhase2IntegrityAlgorithms()
```

##### `ResetPhase2LifetimeSeconds` <a name="ResetPhase2LifetimeSeconds" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.resetPhase2LifetimeSeconds"></a>

```csharp
private void ResetPhase2LifetimeSeconds()
```

##### `ResetPreSharedKey` <a name="ResetPreSharedKey" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.resetPreSharedKey"></a>

```csharp
private void ResetPreSharedKey()
```

##### `ResetRekeyFuzzPercentage` <a name="ResetRekeyFuzzPercentage" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.resetRekeyFuzzPercentage"></a>

```csharp
private void ResetRekeyFuzzPercentage()
```

##### `ResetRekeyMarginTimeSeconds` <a name="ResetRekeyMarginTimeSeconds" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.resetRekeyMarginTimeSeconds"></a>

```csharp
private void ResetRekeyMarginTimeSeconds()
```

##### `ResetReplayWindowSize` <a name="ResetReplayWindowSize" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.resetReplayWindowSize"></a>

```csharp
private void ResetReplayWindowSize()
```

##### `ResetStartupAction` <a name="ResetStartupAction" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.resetStartupAction"></a>

```csharp
private void ResetStartupAction()
```

##### `ResetTunnelInsideCidr` <a name="ResetTunnelInsideCidr" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.resetTunnelInsideCidr"></a>

```csharp
private void ResetTunnelInsideCidr()
```

##### `ResetTunnelInsideIpv6Cidr` <a name="ResetTunnelInsideIpv6Cidr" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.resetTunnelInsideIpv6Cidr"></a>

```csharp
private void ResetTunnelInsideIpv6Cidr()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.ikeVersions">IkeVersions</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList">Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.logOptions">LogOptions</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference">Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.phase1DhGroupNumbers">Phase1DhGroupNumbers</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.phase1EncryptionAlgorithms">Phase1EncryptionAlgorithms</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.phase1IntegrityAlgorithms">Phase1IntegrityAlgorithms</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.phase2DhGroupNumbers">Phase2DhGroupNumbers</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.phase2EncryptionAlgorithms">Phase2EncryptionAlgorithms</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.phase2IntegrityAlgorithms">Phase2IntegrityAlgorithms</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.dpdTimeoutActionInput">DpdTimeoutActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.dpdTimeoutSecondsInput">DpdTimeoutSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.enableTunnelLifecycleControlInput">EnableTunnelLifecycleControlInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.ikeVersionsInput">IkeVersionsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersions">Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersions</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.logOptionsInput">LogOptionsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptions">Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.phase1DhGroupNumbersInput">Phase1DhGroupNumbersInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbers">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbers</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.phase1EncryptionAlgorithmsInput">Phase1EncryptionAlgorithmsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithms">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithms</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.phase1IntegrityAlgorithmsInput">Phase1IntegrityAlgorithmsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithms">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithms</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.phase1LifetimeSecondsInput">Phase1LifetimeSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.phase2DhGroupNumbersInput">Phase2DhGroupNumbersInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbers">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbers</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.phase2EncryptionAlgorithmsInput">Phase2EncryptionAlgorithmsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithms">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithms</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.phase2IntegrityAlgorithmsInput">Phase2IntegrityAlgorithmsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithms">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithms</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.phase2LifetimeSecondsInput">Phase2LifetimeSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.preSharedKeyInput">PreSharedKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.rekeyFuzzPercentageInput">RekeyFuzzPercentageInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.rekeyMarginTimeSecondsInput">RekeyMarginTimeSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.replayWindowSizeInput">ReplayWindowSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.startupActionInput">StartupActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.tunnelInsideCidrInput">TunnelInsideCidrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.tunnelInsideIpv6CidrInput">TunnelInsideIpv6CidrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.dpdTimeoutAction">DpdTimeoutAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.dpdTimeoutSeconds">DpdTimeoutSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.enableTunnelLifecycleControl">EnableTunnelLifecycleControl</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.phase1LifetimeSeconds">Phase1LifetimeSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.phase2LifetimeSeconds">Phase2LifetimeSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.preSharedKey">PreSharedKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.rekeyFuzzPercentage">RekeyFuzzPercentage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.rekeyMarginTimeSeconds">RekeyMarginTimeSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.replayWindowSize">ReplayWindowSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.startupAction">StartupAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.tunnelInsideCidr">TunnelInsideCidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.tunnelInsideIpv6Cidr">TunnelInsideIpv6Cidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecifications">Ec2VpnConnectionVpnTunnelOptionsSpecifications</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IkeVersions`<sup>Required</sup> <a name="IkeVersions" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.ikeVersions"></a>

```csharp
public Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList IkeVersions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList">Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList</a>

---

##### `LogOptions`<sup>Required</sup> <a name="LogOptions" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.logOptions"></a>

```csharp
public Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference LogOptions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference">Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference</a>

---

##### `Phase1DhGroupNumbers`<sup>Required</sup> <a name="Phase1DhGroupNumbers" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.phase1DhGroupNumbers"></a>

```csharp
public Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList Phase1DhGroupNumbers { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList</a>

---

##### `Phase1EncryptionAlgorithms`<sup>Required</sup> <a name="Phase1EncryptionAlgorithms" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.phase1EncryptionAlgorithms"></a>

```csharp
public Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList Phase1EncryptionAlgorithms { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList</a>

---

##### `Phase1IntegrityAlgorithms`<sup>Required</sup> <a name="Phase1IntegrityAlgorithms" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.phase1IntegrityAlgorithms"></a>

```csharp
public Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList Phase1IntegrityAlgorithms { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList</a>

---

##### `Phase2DhGroupNumbers`<sup>Required</sup> <a name="Phase2DhGroupNumbers" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.phase2DhGroupNumbers"></a>

```csharp
public Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList Phase2DhGroupNumbers { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList</a>

---

##### `Phase2EncryptionAlgorithms`<sup>Required</sup> <a name="Phase2EncryptionAlgorithms" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.phase2EncryptionAlgorithms"></a>

```csharp
public Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList Phase2EncryptionAlgorithms { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList</a>

---

##### `Phase2IntegrityAlgorithms`<sup>Required</sup> <a name="Phase2IntegrityAlgorithms" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.phase2IntegrityAlgorithms"></a>

```csharp
public Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList Phase2IntegrityAlgorithms { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList</a>

---

##### `DpdTimeoutActionInput`<sup>Optional</sup> <a name="DpdTimeoutActionInput" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.dpdTimeoutActionInput"></a>

```csharp
public string DpdTimeoutActionInput { get; }
```

- *Type:* string

---

##### `DpdTimeoutSecondsInput`<sup>Optional</sup> <a name="DpdTimeoutSecondsInput" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.dpdTimeoutSecondsInput"></a>

```csharp
public double DpdTimeoutSecondsInput { get; }
```

- *Type:* double

---

##### `EnableTunnelLifecycleControlInput`<sup>Optional</sup> <a name="EnableTunnelLifecycleControlInput" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.enableTunnelLifecycleControlInput"></a>

```csharp
public bool|IResolvable EnableTunnelLifecycleControlInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IkeVersionsInput`<sup>Optional</sup> <a name="IkeVersionsInput" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.ikeVersionsInput"></a>

```csharp
public IResolvable|Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersions[] IkeVersionsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersions">Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersions</a>[]

---

##### `LogOptionsInput`<sup>Optional</sup> <a name="LogOptionsInput" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.logOptionsInput"></a>

```csharp
public IResolvable|Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptions LogOptionsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptions">Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptions</a>

---

##### `Phase1DhGroupNumbersInput`<sup>Optional</sup> <a name="Phase1DhGroupNumbersInput" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.phase1DhGroupNumbersInput"></a>

```csharp
public IResolvable|Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbers[] Phase1DhGroupNumbersInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbers">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbers</a>[]

---

##### `Phase1EncryptionAlgorithmsInput`<sup>Optional</sup> <a name="Phase1EncryptionAlgorithmsInput" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.phase1EncryptionAlgorithmsInput"></a>

```csharp
public IResolvable|Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithms[] Phase1EncryptionAlgorithmsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithms">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithms</a>[]

---

##### `Phase1IntegrityAlgorithmsInput`<sup>Optional</sup> <a name="Phase1IntegrityAlgorithmsInput" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.phase1IntegrityAlgorithmsInput"></a>

```csharp
public IResolvable|Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithms[] Phase1IntegrityAlgorithmsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithms">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithms</a>[]

---

##### `Phase1LifetimeSecondsInput`<sup>Optional</sup> <a name="Phase1LifetimeSecondsInput" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.phase1LifetimeSecondsInput"></a>

```csharp
public double Phase1LifetimeSecondsInput { get; }
```

- *Type:* double

---

##### `Phase2DhGroupNumbersInput`<sup>Optional</sup> <a name="Phase2DhGroupNumbersInput" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.phase2DhGroupNumbersInput"></a>

```csharp
public IResolvable|Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbers[] Phase2DhGroupNumbersInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbers">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbers</a>[]

---

##### `Phase2EncryptionAlgorithmsInput`<sup>Optional</sup> <a name="Phase2EncryptionAlgorithmsInput" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.phase2EncryptionAlgorithmsInput"></a>

```csharp
public IResolvable|Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithms[] Phase2EncryptionAlgorithmsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithms">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithms</a>[]

---

##### `Phase2IntegrityAlgorithmsInput`<sup>Optional</sup> <a name="Phase2IntegrityAlgorithmsInput" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.phase2IntegrityAlgorithmsInput"></a>

```csharp
public IResolvable|Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithms[] Phase2IntegrityAlgorithmsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithms">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithms</a>[]

---

##### `Phase2LifetimeSecondsInput`<sup>Optional</sup> <a name="Phase2LifetimeSecondsInput" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.phase2LifetimeSecondsInput"></a>

```csharp
public double Phase2LifetimeSecondsInput { get; }
```

- *Type:* double

---

##### `PreSharedKeyInput`<sup>Optional</sup> <a name="PreSharedKeyInput" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.preSharedKeyInput"></a>

```csharp
public string PreSharedKeyInput { get; }
```

- *Type:* string

---

##### `RekeyFuzzPercentageInput`<sup>Optional</sup> <a name="RekeyFuzzPercentageInput" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.rekeyFuzzPercentageInput"></a>

```csharp
public double RekeyFuzzPercentageInput { get; }
```

- *Type:* double

---

##### `RekeyMarginTimeSecondsInput`<sup>Optional</sup> <a name="RekeyMarginTimeSecondsInput" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.rekeyMarginTimeSecondsInput"></a>

```csharp
public double RekeyMarginTimeSecondsInput { get; }
```

- *Type:* double

---

##### `ReplayWindowSizeInput`<sup>Optional</sup> <a name="ReplayWindowSizeInput" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.replayWindowSizeInput"></a>

```csharp
public double ReplayWindowSizeInput { get; }
```

- *Type:* double

---

##### `StartupActionInput`<sup>Optional</sup> <a name="StartupActionInput" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.startupActionInput"></a>

```csharp
public string StartupActionInput { get; }
```

- *Type:* string

---

##### `TunnelInsideCidrInput`<sup>Optional</sup> <a name="TunnelInsideCidrInput" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.tunnelInsideCidrInput"></a>

```csharp
public string TunnelInsideCidrInput { get; }
```

- *Type:* string

---

##### `TunnelInsideIpv6CidrInput`<sup>Optional</sup> <a name="TunnelInsideIpv6CidrInput" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.tunnelInsideIpv6CidrInput"></a>

```csharp
public string TunnelInsideIpv6CidrInput { get; }
```

- *Type:* string

---

##### `DpdTimeoutAction`<sup>Required</sup> <a name="DpdTimeoutAction" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.dpdTimeoutAction"></a>

```csharp
public string DpdTimeoutAction { get; }
```

- *Type:* string

---

##### `DpdTimeoutSeconds`<sup>Required</sup> <a name="DpdTimeoutSeconds" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.dpdTimeoutSeconds"></a>

```csharp
public double DpdTimeoutSeconds { get; }
```

- *Type:* double

---

##### `EnableTunnelLifecycleControl`<sup>Required</sup> <a name="EnableTunnelLifecycleControl" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.enableTunnelLifecycleControl"></a>

```csharp
public bool|IResolvable EnableTunnelLifecycleControl { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Phase1LifetimeSeconds`<sup>Required</sup> <a name="Phase1LifetimeSeconds" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.phase1LifetimeSeconds"></a>

```csharp
public double Phase1LifetimeSeconds { get; }
```

- *Type:* double

---

##### `Phase2LifetimeSeconds`<sup>Required</sup> <a name="Phase2LifetimeSeconds" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.phase2LifetimeSeconds"></a>

```csharp
public double Phase2LifetimeSeconds { get; }
```

- *Type:* double

---

##### `PreSharedKey`<sup>Required</sup> <a name="PreSharedKey" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.preSharedKey"></a>

```csharp
public string PreSharedKey { get; }
```

- *Type:* string

---

##### `RekeyFuzzPercentage`<sup>Required</sup> <a name="RekeyFuzzPercentage" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.rekeyFuzzPercentage"></a>

```csharp
public double RekeyFuzzPercentage { get; }
```

- *Type:* double

---

##### `RekeyMarginTimeSeconds`<sup>Required</sup> <a name="RekeyMarginTimeSeconds" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.rekeyMarginTimeSeconds"></a>

```csharp
public double RekeyMarginTimeSeconds { get; }
```

- *Type:* double

---

##### `ReplayWindowSize`<sup>Required</sup> <a name="ReplayWindowSize" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.replayWindowSize"></a>

```csharp
public double ReplayWindowSize { get; }
```

- *Type:* double

---

##### `StartupAction`<sup>Required</sup> <a name="StartupAction" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.startupAction"></a>

```csharp
public string StartupAction { get; }
```

- *Type:* string

---

##### `TunnelInsideCidr`<sup>Required</sup> <a name="TunnelInsideCidr" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.tunnelInsideCidr"></a>

```csharp
public string TunnelInsideCidr { get; }
```

- *Type:* string

---

##### `TunnelInsideIpv6Cidr`<sup>Required</sup> <a name="TunnelInsideIpv6Cidr" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.tunnelInsideIpv6Cidr"></a>

```csharp
public string TunnelInsideIpv6Cidr { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Ec2VpnConnectionVpnTunnelOptionsSpecifications InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecifications">Ec2VpnConnectionVpnTunnelOptionsSpecifications</a>

---


### Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList <a name="Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList.get"></a>

```csharp
private Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbers">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbers</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList.property.internalValue"></a>

```csharp
public IResolvable|Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbers[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbers">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbers</a>[]

---


### Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference <a name="Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.property.valueInput">ValueInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.property.value">Value</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbers">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbers</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.property.valueInput"></a>

```csharp
public double ValueInput { get; }
```

- *Type:* double

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.property.value"></a>

```csharp
public double Value { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbers InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbers">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbers</a>

---


### Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList <a name="Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList.get"></a>

```csharp
private Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithms">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithms</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList.property.internalValue"></a>

```csharp
public IResolvable|Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithms[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithms">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithms</a>[]

---


### Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference <a name="Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithms">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithms</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithms InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithms">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithms</a>

---


### Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList <a name="Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList.get"></a>

```csharp
private Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithms">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithms</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList.property.internalValue"></a>

```csharp
public IResolvable|Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithms[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithms">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithms</a>[]

---


### Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference <a name="Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithms">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithms</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithms InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithms">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithms</a>

---


### Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList <a name="Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList.get"></a>

```csharp
private Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbers">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbers</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList.property.internalValue"></a>

```csharp
public IResolvable|Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbers[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbers">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbers</a>[]

---


### Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference <a name="Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.property.valueInput">ValueInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.property.value">Value</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbers">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbers</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.property.valueInput"></a>

```csharp
public double ValueInput { get; }
```

- *Type:* double

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.property.value"></a>

```csharp
public double Value { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbers InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbers">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbers</a>

---


### Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList <a name="Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList.get"></a>

```csharp
private Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithms">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithms</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList.property.internalValue"></a>

```csharp
public IResolvable|Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithms[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithms">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithms</a>[]

---


### Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference <a name="Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithms">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithms</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithms InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithms">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithms</a>

---


### Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList <a name="Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList.get"></a>

```csharp
private Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithms">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithms</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList.property.internalValue"></a>

```csharp
public IResolvable|Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithms[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithms">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithms</a>[]

---


### Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference <a name="Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithms">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithms</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithms InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithms">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithms</a>

---



