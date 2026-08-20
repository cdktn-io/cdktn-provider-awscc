# `directconnectPrivateVirtualInterface` Submodule <a name="`directconnectPrivateVirtualInterface` Submodule" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DirectconnectPrivateVirtualInterface <a name="DirectconnectPrivateVirtualInterface" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/directconnect_private_virtual_interface awscc_directconnect_private_virtual_interface}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.Initializer"></a>

```java
import io.cdktn.providers.awscc.directconnect_private_virtual_interface.DirectconnectPrivateVirtualInterface;

DirectconnectPrivateVirtualInterface.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .bgpPeers(IResolvable|java.util.List<DirectconnectPrivateVirtualInterfaceBgpPeers>)
    .connectionId(java.lang.String)
    .virtualInterfaceName(java.lang.String)
    .vlan(java.lang.Number)
//  .allocatePrivateVirtualInterfaceRoleArn(java.lang.String)
//  .directConnectGatewayId(java.lang.String)
//  .enableSiteLink(java.lang.Boolean|IResolvable)
//  .mtu(java.lang.Number)
//  .rateLimit(java.lang.String)
//  .tags(IResolvable|java.util.List<DirectconnectPrivateVirtualInterfaceTags>)
//  .virtualGatewayId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.Initializer.parameter.bgpPeers">bgpPeers</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeers">DirectconnectPrivateVirtualInterfaceBgpPeers</a>></code> | The BGP peers configured on this virtual interface. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.Initializer.parameter.connectionId">connectionId</a></code> | <code>java.lang.String</code> | The ID or ARN of the connection or LAG. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.Initializer.parameter.virtualInterfaceName">virtualInterfaceName</a></code> | <code>java.lang.String</code> | The name of the virtual interface assigned by the customer network. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.Initializer.parameter.vlan">vlan</a></code> | <code>java.lang.Number</code> | The ID of the VLAN. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.Initializer.parameter.allocatePrivateVirtualInterfaceRoleArn">allocatePrivateVirtualInterfaceRoleArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the role to allocate the private virtual interface. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.Initializer.parameter.directConnectGatewayId">directConnectGatewayId</a></code> | <code>java.lang.String</code> | The ID or ARN of the Direct Connect gateway. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.Initializer.parameter.enableSiteLink">enableSiteLink</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Indicates whether to enable or disable SiteLink. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.Initializer.parameter.mtu">mtu</a></code> | <code>java.lang.Number</code> | The maximum transmission unit (MTU), in bytes. The supported values are 1500 and 9001. The default value is 1500. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.Initializer.parameter.rateLimit">rateLimit</a></code> | <code>java.lang.String</code> | The rate limit (bandwidth allocation) for the virtual interface. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTags">DirectconnectPrivateVirtualInterfaceTags</a>></code> | The tags associated with the private virtual interface. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.Initializer.parameter.virtualGatewayId">virtualGatewayId</a></code> | <code>java.lang.String</code> | The ID or ARN of the virtual private gateway. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `bgpPeers`<sup>Required</sup> <a name="bgpPeers" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.Initializer.parameter.bgpPeers"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeers">DirectconnectPrivateVirtualInterfaceBgpPeers</a>>

The BGP peers configured on this virtual interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/directconnect_private_virtual_interface#bgp_peers DirectconnectPrivateVirtualInterface#bgp_peers}

---

##### `connectionId`<sup>Required</sup> <a name="connectionId" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.Initializer.parameter.connectionId"></a>

- *Type:* java.lang.String

The ID or ARN of the connection or LAG.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/directconnect_private_virtual_interface#connection_id DirectconnectPrivateVirtualInterface#connection_id}

---

##### `virtualInterfaceName`<sup>Required</sup> <a name="virtualInterfaceName" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.Initializer.parameter.virtualInterfaceName"></a>

- *Type:* java.lang.String

The name of the virtual interface assigned by the customer network.

The name has a maximum of 100 characters. The following are valid characters: a-z, 0-9 and a hyphen (-).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/directconnect_private_virtual_interface#virtual_interface_name DirectconnectPrivateVirtualInterface#virtual_interface_name}

---

##### `vlan`<sup>Required</sup> <a name="vlan" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.Initializer.parameter.vlan"></a>

- *Type:* java.lang.Number

The ID of the VLAN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/directconnect_private_virtual_interface#vlan DirectconnectPrivateVirtualInterface#vlan}

---

##### `allocatePrivateVirtualInterfaceRoleArn`<sup>Optional</sup> <a name="allocatePrivateVirtualInterfaceRoleArn" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.Initializer.parameter.allocatePrivateVirtualInterfaceRoleArn"></a>

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the role to allocate the private virtual interface.

Needs directconnect:AllocatePrivateVirtualInterface permissions and tag permissions if applicable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/directconnect_private_virtual_interface#allocate_private_virtual_interface_role_arn DirectconnectPrivateVirtualInterface#allocate_private_virtual_interface_role_arn}

---

##### `directConnectGatewayId`<sup>Optional</sup> <a name="directConnectGatewayId" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.Initializer.parameter.directConnectGatewayId"></a>

- *Type:* java.lang.String

The ID or ARN of the Direct Connect gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/directconnect_private_virtual_interface#direct_connect_gateway_id DirectconnectPrivateVirtualInterface#direct_connect_gateway_id}

---

##### `enableSiteLink`<sup>Optional</sup> <a name="enableSiteLink" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.Initializer.parameter.enableSiteLink"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Indicates whether to enable or disable SiteLink.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/directconnect_private_virtual_interface#enable_site_link DirectconnectPrivateVirtualInterface#enable_site_link}

---

##### `mtu`<sup>Optional</sup> <a name="mtu" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.Initializer.parameter.mtu"></a>

- *Type:* java.lang.Number

The maximum transmission unit (MTU), in bytes. The supported values are 1500 and 9001. The default value is 1500.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/directconnect_private_virtual_interface#mtu DirectconnectPrivateVirtualInterface#mtu}

---

##### `rateLimit`<sup>Optional</sup> <a name="rateLimit" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.Initializer.parameter.rateLimit"></a>

- *Type:* java.lang.String

The rate limit (bandwidth allocation) for the virtual interface.

The value must be one of the supported bandwidth values (e.g., 50Mbps, 1Gbps, 10Gbps) and cannot exceed the bandwidth of the parent connection or LAG.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/directconnect_private_virtual_interface#rate_limit DirectconnectPrivateVirtualInterface#rate_limit}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTags">DirectconnectPrivateVirtualInterfaceTags</a>>

The tags associated with the private virtual interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/directconnect_private_virtual_interface#tags DirectconnectPrivateVirtualInterface#tags}

---

##### `virtualGatewayId`<sup>Optional</sup> <a name="virtualGatewayId" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.Initializer.parameter.virtualGatewayId"></a>

- *Type:* java.lang.String

The ID or ARN of the virtual private gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/directconnect_private_virtual_interface#virtual_gateway_id DirectconnectPrivateVirtualInterface#virtual_gateway_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.putBgpPeers">putBgpPeers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.resetAllocatePrivateVirtualInterfaceRoleArn">resetAllocatePrivateVirtualInterfaceRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.resetDirectConnectGatewayId">resetDirectConnectGatewayId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.resetEnableSiteLink">resetEnableSiteLink</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.resetMtu">resetMtu</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.resetRateLimit">resetRateLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.resetVirtualGatewayId">resetVirtualGatewayId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putBgpPeers` <a name="putBgpPeers" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.putBgpPeers"></a>

```java
public void putBgpPeers(IResolvable|java.util.List<DirectconnectPrivateVirtualInterfaceBgpPeers> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.putBgpPeers.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeers">DirectconnectPrivateVirtualInterfaceBgpPeers</a>>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<DirectconnectPrivateVirtualInterfaceTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTags">DirectconnectPrivateVirtualInterfaceTags</a>>

---

##### `resetAllocatePrivateVirtualInterfaceRoleArn` <a name="resetAllocatePrivateVirtualInterfaceRoleArn" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.resetAllocatePrivateVirtualInterfaceRoleArn"></a>

```java
public void resetAllocatePrivateVirtualInterfaceRoleArn()
```

##### `resetDirectConnectGatewayId` <a name="resetDirectConnectGatewayId" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.resetDirectConnectGatewayId"></a>

```java
public void resetDirectConnectGatewayId()
```

##### `resetEnableSiteLink` <a name="resetEnableSiteLink" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.resetEnableSiteLink"></a>

```java
public void resetEnableSiteLink()
```

##### `resetMtu` <a name="resetMtu" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.resetMtu"></a>

```java
public void resetMtu()
```

##### `resetRateLimit` <a name="resetRateLimit" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.resetRateLimit"></a>

```java
public void resetRateLimit()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.resetTags"></a>

```java
public void resetTags()
```

##### `resetVirtualGatewayId` <a name="resetVirtualGatewayId" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.resetVirtualGatewayId"></a>

```java
public void resetVirtualGatewayId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DirectconnectPrivateVirtualInterface resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.isConstruct"></a>

```java
import io.cdktn.providers.awscc.directconnect_private_virtual_interface.DirectconnectPrivateVirtualInterface;

DirectconnectPrivateVirtualInterface.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.directconnect_private_virtual_interface.DirectconnectPrivateVirtualInterface;

DirectconnectPrivateVirtualInterface.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.directconnect_private_virtual_interface.DirectconnectPrivateVirtualInterface;

DirectconnectPrivateVirtualInterface.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.directconnect_private_virtual_interface.DirectconnectPrivateVirtualInterface;

DirectconnectPrivateVirtualInterface.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DirectconnectPrivateVirtualInterface.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DirectconnectPrivateVirtualInterface resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DirectconnectPrivateVirtualInterface to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DirectconnectPrivateVirtualInterface that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/directconnect_private_virtual_interface#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DirectconnectPrivateVirtualInterface to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.bgpPeers">bgpPeers</a></code> | <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersList">DirectconnectPrivateVirtualInterfaceBgpPeersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsList">DirectconnectPrivateVirtualInterfaceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.virtualInterfaceArn">virtualInterfaceArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.virtualInterfaceId">virtualInterfaceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.allocatePrivateVirtualInterfaceRoleArnInput">allocatePrivateVirtualInterfaceRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.bgpPeersInput">bgpPeersInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeers">DirectconnectPrivateVirtualInterfaceBgpPeers</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.connectionIdInput">connectionIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.directConnectGatewayIdInput">directConnectGatewayIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.enableSiteLinkInput">enableSiteLinkInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.mtuInput">mtuInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.rateLimitInput">rateLimitInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTags">DirectconnectPrivateVirtualInterfaceTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.virtualGatewayIdInput">virtualGatewayIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.virtualInterfaceNameInput">virtualInterfaceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.vlanInput">vlanInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.allocatePrivateVirtualInterfaceRoleArn">allocatePrivateVirtualInterfaceRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.connectionId">connectionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.directConnectGatewayId">directConnectGatewayId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.enableSiteLink">enableSiteLink</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.mtu">mtu</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.rateLimit">rateLimit</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.virtualGatewayId">virtualGatewayId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.virtualInterfaceName">virtualInterfaceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.vlan">vlan</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `bgpPeers`<sup>Required</sup> <a name="bgpPeers" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.bgpPeers"></a>

```java
public DirectconnectPrivateVirtualInterfaceBgpPeersList getBgpPeers();
```

- *Type:* <a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersList">DirectconnectPrivateVirtualInterfaceBgpPeersList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.tags"></a>

```java
public DirectconnectPrivateVirtualInterfaceTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsList">DirectconnectPrivateVirtualInterfaceTagsList</a>

---

##### `virtualInterfaceArn`<sup>Required</sup> <a name="virtualInterfaceArn" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.virtualInterfaceArn"></a>

```java
public java.lang.String getVirtualInterfaceArn();
```

- *Type:* java.lang.String

---

##### `virtualInterfaceId`<sup>Required</sup> <a name="virtualInterfaceId" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.virtualInterfaceId"></a>

```java
public java.lang.String getVirtualInterfaceId();
```

- *Type:* java.lang.String

---

##### `allocatePrivateVirtualInterfaceRoleArnInput`<sup>Optional</sup> <a name="allocatePrivateVirtualInterfaceRoleArnInput" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.allocatePrivateVirtualInterfaceRoleArnInput"></a>

```java
public java.lang.String getAllocatePrivateVirtualInterfaceRoleArnInput();
```

- *Type:* java.lang.String

---

##### `bgpPeersInput`<sup>Optional</sup> <a name="bgpPeersInput" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.bgpPeersInput"></a>

```java
public IResolvable|java.util.List<DirectconnectPrivateVirtualInterfaceBgpPeers> getBgpPeersInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeers">DirectconnectPrivateVirtualInterfaceBgpPeers</a>>

---

##### `connectionIdInput`<sup>Optional</sup> <a name="connectionIdInput" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.connectionIdInput"></a>

```java
public java.lang.String getConnectionIdInput();
```

- *Type:* java.lang.String

---

##### `directConnectGatewayIdInput`<sup>Optional</sup> <a name="directConnectGatewayIdInput" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.directConnectGatewayIdInput"></a>

```java
public java.lang.String getDirectConnectGatewayIdInput();
```

- *Type:* java.lang.String

---

##### `enableSiteLinkInput`<sup>Optional</sup> <a name="enableSiteLinkInput" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.enableSiteLinkInput"></a>

```java
public java.lang.Boolean|IResolvable getEnableSiteLinkInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `mtuInput`<sup>Optional</sup> <a name="mtuInput" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.mtuInput"></a>

```java
public java.lang.Number getMtuInput();
```

- *Type:* java.lang.Number

---

##### `rateLimitInput`<sup>Optional</sup> <a name="rateLimitInput" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.rateLimitInput"></a>

```java
public java.lang.String getRateLimitInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.tagsInput"></a>

```java
public IResolvable|java.util.List<DirectconnectPrivateVirtualInterfaceTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTags">DirectconnectPrivateVirtualInterfaceTags</a>>

---

##### `virtualGatewayIdInput`<sup>Optional</sup> <a name="virtualGatewayIdInput" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.virtualGatewayIdInput"></a>

```java
public java.lang.String getVirtualGatewayIdInput();
```

- *Type:* java.lang.String

---

##### `virtualInterfaceNameInput`<sup>Optional</sup> <a name="virtualInterfaceNameInput" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.virtualInterfaceNameInput"></a>

```java
public java.lang.String getVirtualInterfaceNameInput();
```

- *Type:* java.lang.String

---

##### `vlanInput`<sup>Optional</sup> <a name="vlanInput" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.vlanInput"></a>

```java
public java.lang.Number getVlanInput();
```

- *Type:* java.lang.Number

---

##### `allocatePrivateVirtualInterfaceRoleArn`<sup>Required</sup> <a name="allocatePrivateVirtualInterfaceRoleArn" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.allocatePrivateVirtualInterfaceRoleArn"></a>

```java
public java.lang.String getAllocatePrivateVirtualInterfaceRoleArn();
```

- *Type:* java.lang.String

---

##### `connectionId`<sup>Required</sup> <a name="connectionId" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.connectionId"></a>

```java
public java.lang.String getConnectionId();
```

- *Type:* java.lang.String

---

##### `directConnectGatewayId`<sup>Required</sup> <a name="directConnectGatewayId" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.directConnectGatewayId"></a>

```java
public java.lang.String getDirectConnectGatewayId();
```

- *Type:* java.lang.String

---

##### `enableSiteLink`<sup>Required</sup> <a name="enableSiteLink" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.enableSiteLink"></a>

```java
public java.lang.Boolean|IResolvable getEnableSiteLink();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `mtu`<sup>Required</sup> <a name="mtu" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.mtu"></a>

```java
public java.lang.Number getMtu();
```

- *Type:* java.lang.Number

---

##### `rateLimit`<sup>Required</sup> <a name="rateLimit" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.rateLimit"></a>

```java
public java.lang.String getRateLimit();
```

- *Type:* java.lang.String

---

##### `virtualGatewayId`<sup>Required</sup> <a name="virtualGatewayId" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.virtualGatewayId"></a>

```java
public java.lang.String getVirtualGatewayId();
```

- *Type:* java.lang.String

---

##### `virtualInterfaceName`<sup>Required</sup> <a name="virtualInterfaceName" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.virtualInterfaceName"></a>

```java
public java.lang.String getVirtualInterfaceName();
```

- *Type:* java.lang.String

---

##### `vlan`<sup>Required</sup> <a name="vlan" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.vlan"></a>

```java
public java.lang.Number getVlan();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DirectconnectPrivateVirtualInterfaceBgpPeers <a name="DirectconnectPrivateVirtualInterfaceBgpPeers" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeers.Initializer"></a>

```java
import io.cdktn.providers.awscc.directconnect_private_virtual_interface.DirectconnectPrivateVirtualInterfaceBgpPeers;

DirectconnectPrivateVirtualInterfaceBgpPeers.builder()
    .addressFamily(java.lang.String)
    .asn(java.lang.String)
//  .amazonAddress(java.lang.String)
//  .authKey(java.lang.String)
//  .bgpPeerId(java.lang.String)
//  .customerAddress(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeers.property.addressFamily">addressFamily</a></code> | <code>java.lang.String</code> | The address family for the BGP peer. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeers.property.asn">asn</a></code> | <code>java.lang.String</code> | The autonomous system (AS) number for Border Gateway Protocol (BGP) configuration. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeers.property.amazonAddress">amazonAddress</a></code> | <code>java.lang.String</code> | The IP address assigned to the Amazon interface. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeers.property.authKey">authKey</a></code> | <code>java.lang.String</code> | The authentication key for BGP configuration. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeers.property.bgpPeerId">bgpPeerId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/directconnect_private_virtual_interface#bgp_peer_id DirectconnectPrivateVirtualInterface#bgp_peer_id}. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeers.property.customerAddress">customerAddress</a></code> | <code>java.lang.String</code> | The IP address assigned to the customer interface. |

---

##### `addressFamily`<sup>Required</sup> <a name="addressFamily" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeers.property.addressFamily"></a>

```java
public java.lang.String getAddressFamily();
```

- *Type:* java.lang.String

The address family for the BGP peer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/directconnect_private_virtual_interface#address_family DirectconnectPrivateVirtualInterface#address_family}

---

##### `asn`<sup>Required</sup> <a name="asn" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeers.property.asn"></a>

```java
public java.lang.String getAsn();
```

- *Type:* java.lang.String

The autonomous system (AS) number for Border Gateway Protocol (BGP) configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/directconnect_private_virtual_interface#asn DirectconnectPrivateVirtualInterface#asn}

---

##### `amazonAddress`<sup>Optional</sup> <a name="amazonAddress" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeers.property.amazonAddress"></a>

```java
public java.lang.String getAmazonAddress();
```

- *Type:* java.lang.String

The IP address assigned to the Amazon interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/directconnect_private_virtual_interface#amazon_address DirectconnectPrivateVirtualInterface#amazon_address}

---

##### `authKey`<sup>Optional</sup> <a name="authKey" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeers.property.authKey"></a>

```java
public java.lang.String getAuthKey();
```

- *Type:* java.lang.String

The authentication key for BGP configuration.

This string has a minimum length of 6 characters and and a maximum length of 80 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/directconnect_private_virtual_interface#auth_key DirectconnectPrivateVirtualInterface#auth_key}

---

##### `bgpPeerId`<sup>Optional</sup> <a name="bgpPeerId" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeers.property.bgpPeerId"></a>

```java
public java.lang.String getBgpPeerId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/directconnect_private_virtual_interface#bgp_peer_id DirectconnectPrivateVirtualInterface#bgp_peer_id}.

---

##### `customerAddress`<sup>Optional</sup> <a name="customerAddress" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeers.property.customerAddress"></a>

```java
public java.lang.String getCustomerAddress();
```

- *Type:* java.lang.String

The IP address assigned to the customer interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/directconnect_private_virtual_interface#customer_address DirectconnectPrivateVirtualInterface#customer_address}

---

### DirectconnectPrivateVirtualInterfaceConfig <a name="DirectconnectPrivateVirtualInterfaceConfig" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.directconnect_private_virtual_interface.DirectconnectPrivateVirtualInterfaceConfig;

DirectconnectPrivateVirtualInterfaceConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .bgpPeers(IResolvable|java.util.List<DirectconnectPrivateVirtualInterfaceBgpPeers>)
    .connectionId(java.lang.String)
    .virtualInterfaceName(java.lang.String)
    .vlan(java.lang.Number)
//  .allocatePrivateVirtualInterfaceRoleArn(java.lang.String)
//  .directConnectGatewayId(java.lang.String)
//  .enableSiteLink(java.lang.Boolean|IResolvable)
//  .mtu(java.lang.Number)
//  .rateLimit(java.lang.String)
//  .tags(IResolvable|java.util.List<DirectconnectPrivateVirtualInterfaceTags>)
//  .virtualGatewayId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceConfig.property.bgpPeers">bgpPeers</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeers">DirectconnectPrivateVirtualInterfaceBgpPeers</a>></code> | The BGP peers configured on this virtual interface. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceConfig.property.connectionId">connectionId</a></code> | <code>java.lang.String</code> | The ID or ARN of the connection or LAG. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceConfig.property.virtualInterfaceName">virtualInterfaceName</a></code> | <code>java.lang.String</code> | The name of the virtual interface assigned by the customer network. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceConfig.property.vlan">vlan</a></code> | <code>java.lang.Number</code> | The ID of the VLAN. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceConfig.property.allocatePrivateVirtualInterfaceRoleArn">allocatePrivateVirtualInterfaceRoleArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the role to allocate the private virtual interface. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceConfig.property.directConnectGatewayId">directConnectGatewayId</a></code> | <code>java.lang.String</code> | The ID or ARN of the Direct Connect gateway. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceConfig.property.enableSiteLink">enableSiteLink</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Indicates whether to enable or disable SiteLink. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceConfig.property.mtu">mtu</a></code> | <code>java.lang.Number</code> | The maximum transmission unit (MTU), in bytes. The supported values are 1500 and 9001. The default value is 1500. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceConfig.property.rateLimit">rateLimit</a></code> | <code>java.lang.String</code> | The rate limit (bandwidth allocation) for the virtual interface. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTags">DirectconnectPrivateVirtualInterfaceTags</a>></code> | The tags associated with the private virtual interface. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceConfig.property.virtualGatewayId">virtualGatewayId</a></code> | <code>java.lang.String</code> | The ID or ARN of the virtual private gateway. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `bgpPeers`<sup>Required</sup> <a name="bgpPeers" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceConfig.property.bgpPeers"></a>

```java
public IResolvable|java.util.List<DirectconnectPrivateVirtualInterfaceBgpPeers> getBgpPeers();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeers">DirectconnectPrivateVirtualInterfaceBgpPeers</a>>

The BGP peers configured on this virtual interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/directconnect_private_virtual_interface#bgp_peers DirectconnectPrivateVirtualInterface#bgp_peers}

---

##### `connectionId`<sup>Required</sup> <a name="connectionId" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceConfig.property.connectionId"></a>

```java
public java.lang.String getConnectionId();
```

- *Type:* java.lang.String

The ID or ARN of the connection or LAG.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/directconnect_private_virtual_interface#connection_id DirectconnectPrivateVirtualInterface#connection_id}

---

##### `virtualInterfaceName`<sup>Required</sup> <a name="virtualInterfaceName" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceConfig.property.virtualInterfaceName"></a>

```java
public java.lang.String getVirtualInterfaceName();
```

- *Type:* java.lang.String

The name of the virtual interface assigned by the customer network.

The name has a maximum of 100 characters. The following are valid characters: a-z, 0-9 and a hyphen (-).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/directconnect_private_virtual_interface#virtual_interface_name DirectconnectPrivateVirtualInterface#virtual_interface_name}

---

##### `vlan`<sup>Required</sup> <a name="vlan" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceConfig.property.vlan"></a>

```java
public java.lang.Number getVlan();
```

- *Type:* java.lang.Number

The ID of the VLAN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/directconnect_private_virtual_interface#vlan DirectconnectPrivateVirtualInterface#vlan}

---

##### `allocatePrivateVirtualInterfaceRoleArn`<sup>Optional</sup> <a name="allocatePrivateVirtualInterfaceRoleArn" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceConfig.property.allocatePrivateVirtualInterfaceRoleArn"></a>

```java
public java.lang.String getAllocatePrivateVirtualInterfaceRoleArn();
```

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the role to allocate the private virtual interface.

Needs directconnect:AllocatePrivateVirtualInterface permissions and tag permissions if applicable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/directconnect_private_virtual_interface#allocate_private_virtual_interface_role_arn DirectconnectPrivateVirtualInterface#allocate_private_virtual_interface_role_arn}

---

##### `directConnectGatewayId`<sup>Optional</sup> <a name="directConnectGatewayId" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceConfig.property.directConnectGatewayId"></a>

```java
public java.lang.String getDirectConnectGatewayId();
```

- *Type:* java.lang.String

The ID or ARN of the Direct Connect gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/directconnect_private_virtual_interface#direct_connect_gateway_id DirectconnectPrivateVirtualInterface#direct_connect_gateway_id}

---

##### `enableSiteLink`<sup>Optional</sup> <a name="enableSiteLink" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceConfig.property.enableSiteLink"></a>

```java
public java.lang.Boolean|IResolvable getEnableSiteLink();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Indicates whether to enable or disable SiteLink.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/directconnect_private_virtual_interface#enable_site_link DirectconnectPrivateVirtualInterface#enable_site_link}

---

##### `mtu`<sup>Optional</sup> <a name="mtu" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceConfig.property.mtu"></a>

```java
public java.lang.Number getMtu();
```

- *Type:* java.lang.Number

The maximum transmission unit (MTU), in bytes. The supported values are 1500 and 9001. The default value is 1500.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/directconnect_private_virtual_interface#mtu DirectconnectPrivateVirtualInterface#mtu}

---

##### `rateLimit`<sup>Optional</sup> <a name="rateLimit" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceConfig.property.rateLimit"></a>

```java
public java.lang.String getRateLimit();
```

- *Type:* java.lang.String

The rate limit (bandwidth allocation) for the virtual interface.

The value must be one of the supported bandwidth values (e.g., 50Mbps, 1Gbps, 10Gbps) and cannot exceed the bandwidth of the parent connection or LAG.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/directconnect_private_virtual_interface#rate_limit DirectconnectPrivateVirtualInterface#rate_limit}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceConfig.property.tags"></a>

```java
public IResolvable|java.util.List<DirectconnectPrivateVirtualInterfaceTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTags">DirectconnectPrivateVirtualInterfaceTags</a>>

The tags associated with the private virtual interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/directconnect_private_virtual_interface#tags DirectconnectPrivateVirtualInterface#tags}

---

##### `virtualGatewayId`<sup>Optional</sup> <a name="virtualGatewayId" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceConfig.property.virtualGatewayId"></a>

```java
public java.lang.String getVirtualGatewayId();
```

- *Type:* java.lang.String

The ID or ARN of the virtual private gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/directconnect_private_virtual_interface#virtual_gateway_id DirectconnectPrivateVirtualInterface#virtual_gateway_id}

---

### DirectconnectPrivateVirtualInterfaceTags <a name="DirectconnectPrivateVirtualInterfaceTags" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.directconnect_private_virtual_interface.DirectconnectPrivateVirtualInterfaceTags;

DirectconnectPrivateVirtualInterfaceTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTags.property.key">key</a></code> | <code>java.lang.String</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTags.property.value">value</a></code> | <code>java.lang.String</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/directconnect_private_virtual_interface#key DirectconnectPrivateVirtualInterface#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/directconnect_private_virtual_interface#value DirectconnectPrivateVirtualInterface#value}

---

## Classes <a name="Classes" id="Classes"></a>

### DirectconnectPrivateVirtualInterfaceBgpPeersList <a name="DirectconnectPrivateVirtualInterfaceBgpPeersList" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersList.Initializer"></a>

```java
import io.cdktn.providers.awscc.directconnect_private_virtual_interface.DirectconnectPrivateVirtualInterfaceBgpPeersList;

new DirectconnectPrivateVirtualInterfaceBgpPeersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersList.get"></a>

```java
public DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeers">DirectconnectPrivateVirtualInterfaceBgpPeers</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DirectconnectPrivateVirtualInterfaceBgpPeers> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeers">DirectconnectPrivateVirtualInterfaceBgpPeers</a>>

---


### DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference <a name="DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.directconnect_private_virtual_interface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference;

new DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.resetAmazonAddress">resetAmazonAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.resetAuthKey">resetAuthKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.resetBgpPeerId">resetBgpPeerId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.resetCustomerAddress">resetCustomerAddress</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAmazonAddress` <a name="resetAmazonAddress" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.resetAmazonAddress"></a>

```java
public void resetAmazonAddress()
```

##### `resetAuthKey` <a name="resetAuthKey" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.resetAuthKey"></a>

```java
public void resetAuthKey()
```

##### `resetBgpPeerId` <a name="resetBgpPeerId" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.resetBgpPeerId"></a>

```java
public void resetBgpPeerId()
```

##### `resetCustomerAddress` <a name="resetCustomerAddress" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.resetCustomerAddress"></a>

```java
public void resetCustomerAddress()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.property.addressFamilyInput">addressFamilyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.property.amazonAddressInput">amazonAddressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.property.asnInput">asnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.property.authKeyInput">authKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.property.bgpPeerIdInput">bgpPeerIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.property.customerAddressInput">customerAddressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.property.addressFamily">addressFamily</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.property.amazonAddress">amazonAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.property.asn">asn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.property.authKey">authKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.property.bgpPeerId">bgpPeerId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.property.customerAddress">customerAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeers">DirectconnectPrivateVirtualInterfaceBgpPeers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `addressFamilyInput`<sup>Optional</sup> <a name="addressFamilyInput" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.property.addressFamilyInput"></a>

```java
public java.lang.String getAddressFamilyInput();
```

- *Type:* java.lang.String

---

##### `amazonAddressInput`<sup>Optional</sup> <a name="amazonAddressInput" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.property.amazonAddressInput"></a>

```java
public java.lang.String getAmazonAddressInput();
```

- *Type:* java.lang.String

---

##### `asnInput`<sup>Optional</sup> <a name="asnInput" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.property.asnInput"></a>

```java
public java.lang.String getAsnInput();
```

- *Type:* java.lang.String

---

##### `authKeyInput`<sup>Optional</sup> <a name="authKeyInput" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.property.authKeyInput"></a>

```java
public java.lang.String getAuthKeyInput();
```

- *Type:* java.lang.String

---

##### `bgpPeerIdInput`<sup>Optional</sup> <a name="bgpPeerIdInput" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.property.bgpPeerIdInput"></a>

```java
public java.lang.String getBgpPeerIdInput();
```

- *Type:* java.lang.String

---

##### `customerAddressInput`<sup>Optional</sup> <a name="customerAddressInput" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.property.customerAddressInput"></a>

```java
public java.lang.String getCustomerAddressInput();
```

- *Type:* java.lang.String

---

##### `addressFamily`<sup>Required</sup> <a name="addressFamily" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.property.addressFamily"></a>

```java
public java.lang.String getAddressFamily();
```

- *Type:* java.lang.String

---

##### `amazonAddress`<sup>Required</sup> <a name="amazonAddress" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.property.amazonAddress"></a>

```java
public java.lang.String getAmazonAddress();
```

- *Type:* java.lang.String

---

##### `asn`<sup>Required</sup> <a name="asn" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.property.asn"></a>

```java
public java.lang.String getAsn();
```

- *Type:* java.lang.String

---

##### `authKey`<sup>Required</sup> <a name="authKey" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.property.authKey"></a>

```java
public java.lang.String getAuthKey();
```

- *Type:* java.lang.String

---

##### `bgpPeerId`<sup>Required</sup> <a name="bgpPeerId" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.property.bgpPeerId"></a>

```java
public java.lang.String getBgpPeerId();
```

- *Type:* java.lang.String

---

##### `customerAddress`<sup>Required</sup> <a name="customerAddress" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.property.customerAddress"></a>

```java
public java.lang.String getCustomerAddress();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.property.internalValue"></a>

```java
public IResolvable|DirectconnectPrivateVirtualInterfaceBgpPeers getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeers">DirectconnectPrivateVirtualInterfaceBgpPeers</a>

---


### DirectconnectPrivateVirtualInterfaceTagsList <a name="DirectconnectPrivateVirtualInterfaceTagsList" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.directconnect_private_virtual_interface.DirectconnectPrivateVirtualInterfaceTagsList;

new DirectconnectPrivateVirtualInterfaceTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsList.get"></a>

```java
public DirectconnectPrivateVirtualInterfaceTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTags">DirectconnectPrivateVirtualInterfaceTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DirectconnectPrivateVirtualInterfaceTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTags">DirectconnectPrivateVirtualInterfaceTags</a>>

---


### DirectconnectPrivateVirtualInterfaceTagsOutputReference <a name="DirectconnectPrivateVirtualInterfaceTagsOutputReference" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.directconnect_private_virtual_interface.DirectconnectPrivateVirtualInterfaceTagsOutputReference;

new DirectconnectPrivateVirtualInterfaceTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTags">DirectconnectPrivateVirtualInterfaceTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|DirectconnectPrivateVirtualInterfaceTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTags">DirectconnectPrivateVirtualInterfaceTags</a>

---



