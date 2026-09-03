# `directconnectTransitVirtualInterface` Submodule <a name="`directconnectTransitVirtualInterface` Submodule" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DirectconnectTransitVirtualInterface <a name="DirectconnectTransitVirtualInterface" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/directconnect_transit_virtual_interface awscc_directconnect_transit_virtual_interface}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.Initializer"></a>

```java
import io.cdktn.providers.awscc.directconnect_transit_virtual_interface.DirectconnectTransitVirtualInterface;

DirectconnectTransitVirtualInterface.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .bgpPeers(IResolvable|java.util.List<DirectconnectTransitVirtualInterfaceBgpPeers>)
    .connectionId(java.lang.String)
    .directConnectGatewayId(java.lang.String)
    .virtualInterfaceName(java.lang.String)
    .vlan(java.lang.Number)
//  .allocateTransitVirtualInterfaceRoleArn(java.lang.String)
//  .enableSiteLink(java.lang.Boolean|IResolvable)
//  .mtu(java.lang.Number)
//  .rateLimit(java.lang.String)
//  .tags(IResolvable|java.util.List<DirectconnectTransitVirtualInterfaceTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.Initializer.parameter.bgpPeers">bgpPeers</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeers">DirectconnectTransitVirtualInterfaceBgpPeers</a>></code> | The BGP peers configured on this virtual interface.. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.Initializer.parameter.connectionId">connectionId</a></code> | <code>java.lang.String</code> | The ID or ARN of the connection or LAG. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.Initializer.parameter.directConnectGatewayId">directConnectGatewayId</a></code> | <code>java.lang.String</code> | The ID or ARN of the Direct Connect gateway. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.Initializer.parameter.virtualInterfaceName">virtualInterfaceName</a></code> | <code>java.lang.String</code> | The name of the virtual interface assigned by the customer network. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.Initializer.parameter.vlan">vlan</a></code> | <code>java.lang.Number</code> | The ID of the VLAN. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.Initializer.parameter.allocateTransitVirtualInterfaceRoleArn">allocateTransitVirtualInterfaceRoleArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the role to allocate the TransitVifAllocation. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.Initializer.parameter.enableSiteLink">enableSiteLink</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Indicates whether to enable or disable SiteLink. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.Initializer.parameter.mtu">mtu</a></code> | <code>java.lang.Number</code> | The maximum transmission unit (MTU), in bytes. The supported values are 1500 and 9001. The default value is 1500. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.Initializer.parameter.rateLimit">rateLimit</a></code> | <code>java.lang.String</code> | The rate limit (bandwidth allocation) for the virtual interface. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTags">DirectconnectTransitVirtualInterfaceTags</a>></code> | The tags associated with the private virtual interface. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `bgpPeers`<sup>Required</sup> <a name="bgpPeers" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.Initializer.parameter.bgpPeers"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeers">DirectconnectTransitVirtualInterfaceBgpPeers</a>>

The BGP peers configured on this virtual interface..

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/directconnect_transit_virtual_interface#bgp_peers DirectconnectTransitVirtualInterface#bgp_peers}

---

##### `connectionId`<sup>Required</sup> <a name="connectionId" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.Initializer.parameter.connectionId"></a>

- *Type:* java.lang.String

The ID or ARN of the connection or LAG.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/directconnect_transit_virtual_interface#connection_id DirectconnectTransitVirtualInterface#connection_id}

---

##### `directConnectGatewayId`<sup>Required</sup> <a name="directConnectGatewayId" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.Initializer.parameter.directConnectGatewayId"></a>

- *Type:* java.lang.String

The ID or ARN of the Direct Connect gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/directconnect_transit_virtual_interface#direct_connect_gateway_id DirectconnectTransitVirtualInterface#direct_connect_gateway_id}

---

##### `virtualInterfaceName`<sup>Required</sup> <a name="virtualInterfaceName" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.Initializer.parameter.virtualInterfaceName"></a>

- *Type:* java.lang.String

The name of the virtual interface assigned by the customer network.

The name has a maximum of 100 characters. The following are valid characters: a-z, 0-9 and a hyphen (-).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/directconnect_transit_virtual_interface#virtual_interface_name DirectconnectTransitVirtualInterface#virtual_interface_name}

---

##### `vlan`<sup>Required</sup> <a name="vlan" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.Initializer.parameter.vlan"></a>

- *Type:* java.lang.Number

The ID of the VLAN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/directconnect_transit_virtual_interface#vlan DirectconnectTransitVirtualInterface#vlan}

---

##### `allocateTransitVirtualInterfaceRoleArn`<sup>Optional</sup> <a name="allocateTransitVirtualInterfaceRoleArn" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.Initializer.parameter.allocateTransitVirtualInterfaceRoleArn"></a>

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the role to allocate the TransitVifAllocation.

Needs directconnect:AllocateTransitVirtualInterface permissions and tag permissions if applicable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/directconnect_transit_virtual_interface#allocate_transit_virtual_interface_role_arn DirectconnectTransitVirtualInterface#allocate_transit_virtual_interface_role_arn}

---

##### `enableSiteLink`<sup>Optional</sup> <a name="enableSiteLink" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.Initializer.parameter.enableSiteLink"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Indicates whether to enable or disable SiteLink.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/directconnect_transit_virtual_interface#enable_site_link DirectconnectTransitVirtualInterface#enable_site_link}

---

##### `mtu`<sup>Optional</sup> <a name="mtu" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.Initializer.parameter.mtu"></a>

- *Type:* java.lang.Number

The maximum transmission unit (MTU), in bytes. The supported values are 1500 and 9001. The default value is 1500.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/directconnect_transit_virtual_interface#mtu DirectconnectTransitVirtualInterface#mtu}

---

##### `rateLimit`<sup>Optional</sup> <a name="rateLimit" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.Initializer.parameter.rateLimit"></a>

- *Type:* java.lang.String

The rate limit (bandwidth allocation) for the virtual interface.

The value must be one of the supported bandwidth values (e.g., 50Mbps, 1Gbps, 10Gbps) and cannot exceed the bandwidth of the parent connection or LAG.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/directconnect_transit_virtual_interface#rate_limit DirectconnectTransitVirtualInterface#rate_limit}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTags">DirectconnectTransitVirtualInterfaceTags</a>>

The tags associated with the private virtual interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/directconnect_transit_virtual_interface#tags DirectconnectTransitVirtualInterface#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.putBgpPeers">putBgpPeers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.resetAllocateTransitVirtualInterfaceRoleArn">resetAllocateTransitVirtualInterfaceRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.resetEnableSiteLink">resetEnableSiteLink</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.resetMtu">resetMtu</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.resetRateLimit">resetRateLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putBgpPeers` <a name="putBgpPeers" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.putBgpPeers"></a>

```java
public void putBgpPeers(IResolvable|java.util.List<DirectconnectTransitVirtualInterfaceBgpPeers> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.putBgpPeers.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeers">DirectconnectTransitVirtualInterfaceBgpPeers</a>>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<DirectconnectTransitVirtualInterfaceTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTags">DirectconnectTransitVirtualInterfaceTags</a>>

---

##### `resetAllocateTransitVirtualInterfaceRoleArn` <a name="resetAllocateTransitVirtualInterfaceRoleArn" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.resetAllocateTransitVirtualInterfaceRoleArn"></a>

```java
public void resetAllocateTransitVirtualInterfaceRoleArn()
```

##### `resetEnableSiteLink` <a name="resetEnableSiteLink" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.resetEnableSiteLink"></a>

```java
public void resetEnableSiteLink()
```

##### `resetMtu` <a name="resetMtu" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.resetMtu"></a>

```java
public void resetMtu()
```

##### `resetRateLimit` <a name="resetRateLimit" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.resetRateLimit"></a>

```java
public void resetRateLimit()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DirectconnectTransitVirtualInterface resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.isConstruct"></a>

```java
import io.cdktn.providers.awscc.directconnect_transit_virtual_interface.DirectconnectTransitVirtualInterface;

DirectconnectTransitVirtualInterface.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.directconnect_transit_virtual_interface.DirectconnectTransitVirtualInterface;

DirectconnectTransitVirtualInterface.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.directconnect_transit_virtual_interface.DirectconnectTransitVirtualInterface;

DirectconnectTransitVirtualInterface.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.directconnect_transit_virtual_interface.DirectconnectTransitVirtualInterface;

DirectconnectTransitVirtualInterface.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DirectconnectTransitVirtualInterface.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DirectconnectTransitVirtualInterface resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DirectconnectTransitVirtualInterface to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DirectconnectTransitVirtualInterface that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/directconnect_transit_virtual_interface#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DirectconnectTransitVirtualInterface to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.bgpPeers">bgpPeers</a></code> | <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersList">DirectconnectTransitVirtualInterfaceBgpPeersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsList">DirectconnectTransitVirtualInterfaceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.virtualInterfaceArn">virtualInterfaceArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.virtualInterfaceId">virtualInterfaceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.allocateTransitVirtualInterfaceRoleArnInput">allocateTransitVirtualInterfaceRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.bgpPeersInput">bgpPeersInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeers">DirectconnectTransitVirtualInterfaceBgpPeers</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.connectionIdInput">connectionIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.directConnectGatewayIdInput">directConnectGatewayIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.enableSiteLinkInput">enableSiteLinkInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.mtuInput">mtuInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.rateLimitInput">rateLimitInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTags">DirectconnectTransitVirtualInterfaceTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.virtualInterfaceNameInput">virtualInterfaceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.vlanInput">vlanInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.allocateTransitVirtualInterfaceRoleArn">allocateTransitVirtualInterfaceRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.connectionId">connectionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.directConnectGatewayId">directConnectGatewayId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.enableSiteLink">enableSiteLink</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.mtu">mtu</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.rateLimit">rateLimit</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.virtualInterfaceName">virtualInterfaceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.vlan">vlan</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `bgpPeers`<sup>Required</sup> <a name="bgpPeers" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.bgpPeers"></a>

```java
public DirectconnectTransitVirtualInterfaceBgpPeersList getBgpPeers();
```

- *Type:* <a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersList">DirectconnectTransitVirtualInterfaceBgpPeersList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.tags"></a>

```java
public DirectconnectTransitVirtualInterfaceTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsList">DirectconnectTransitVirtualInterfaceTagsList</a>

---

##### `virtualInterfaceArn`<sup>Required</sup> <a name="virtualInterfaceArn" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.virtualInterfaceArn"></a>

```java
public java.lang.String getVirtualInterfaceArn();
```

- *Type:* java.lang.String

---

##### `virtualInterfaceId`<sup>Required</sup> <a name="virtualInterfaceId" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.virtualInterfaceId"></a>

```java
public java.lang.String getVirtualInterfaceId();
```

- *Type:* java.lang.String

---

##### `allocateTransitVirtualInterfaceRoleArnInput`<sup>Optional</sup> <a name="allocateTransitVirtualInterfaceRoleArnInput" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.allocateTransitVirtualInterfaceRoleArnInput"></a>

```java
public java.lang.String getAllocateTransitVirtualInterfaceRoleArnInput();
```

- *Type:* java.lang.String

---

##### `bgpPeersInput`<sup>Optional</sup> <a name="bgpPeersInput" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.bgpPeersInput"></a>

```java
public IResolvable|java.util.List<DirectconnectTransitVirtualInterfaceBgpPeers> getBgpPeersInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeers">DirectconnectTransitVirtualInterfaceBgpPeers</a>>

---

##### `connectionIdInput`<sup>Optional</sup> <a name="connectionIdInput" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.connectionIdInput"></a>

```java
public java.lang.String getConnectionIdInput();
```

- *Type:* java.lang.String

---

##### `directConnectGatewayIdInput`<sup>Optional</sup> <a name="directConnectGatewayIdInput" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.directConnectGatewayIdInput"></a>

```java
public java.lang.String getDirectConnectGatewayIdInput();
```

- *Type:* java.lang.String

---

##### `enableSiteLinkInput`<sup>Optional</sup> <a name="enableSiteLinkInput" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.enableSiteLinkInput"></a>

```java
public java.lang.Boolean|IResolvable getEnableSiteLinkInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `mtuInput`<sup>Optional</sup> <a name="mtuInput" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.mtuInput"></a>

```java
public java.lang.Number getMtuInput();
```

- *Type:* java.lang.Number

---

##### `rateLimitInput`<sup>Optional</sup> <a name="rateLimitInput" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.rateLimitInput"></a>

```java
public java.lang.String getRateLimitInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.tagsInput"></a>

```java
public IResolvable|java.util.List<DirectconnectTransitVirtualInterfaceTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTags">DirectconnectTransitVirtualInterfaceTags</a>>

---

##### `virtualInterfaceNameInput`<sup>Optional</sup> <a name="virtualInterfaceNameInput" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.virtualInterfaceNameInput"></a>

```java
public java.lang.String getVirtualInterfaceNameInput();
```

- *Type:* java.lang.String

---

##### `vlanInput`<sup>Optional</sup> <a name="vlanInput" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.vlanInput"></a>

```java
public java.lang.Number getVlanInput();
```

- *Type:* java.lang.Number

---

##### `allocateTransitVirtualInterfaceRoleArn`<sup>Required</sup> <a name="allocateTransitVirtualInterfaceRoleArn" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.allocateTransitVirtualInterfaceRoleArn"></a>

```java
public java.lang.String getAllocateTransitVirtualInterfaceRoleArn();
```

- *Type:* java.lang.String

---

##### `connectionId`<sup>Required</sup> <a name="connectionId" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.connectionId"></a>

```java
public java.lang.String getConnectionId();
```

- *Type:* java.lang.String

---

##### `directConnectGatewayId`<sup>Required</sup> <a name="directConnectGatewayId" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.directConnectGatewayId"></a>

```java
public java.lang.String getDirectConnectGatewayId();
```

- *Type:* java.lang.String

---

##### `enableSiteLink`<sup>Required</sup> <a name="enableSiteLink" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.enableSiteLink"></a>

```java
public java.lang.Boolean|IResolvable getEnableSiteLink();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `mtu`<sup>Required</sup> <a name="mtu" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.mtu"></a>

```java
public java.lang.Number getMtu();
```

- *Type:* java.lang.Number

---

##### `rateLimit`<sup>Required</sup> <a name="rateLimit" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.rateLimit"></a>

```java
public java.lang.String getRateLimit();
```

- *Type:* java.lang.String

---

##### `virtualInterfaceName`<sup>Required</sup> <a name="virtualInterfaceName" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.virtualInterfaceName"></a>

```java
public java.lang.String getVirtualInterfaceName();
```

- *Type:* java.lang.String

---

##### `vlan`<sup>Required</sup> <a name="vlan" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.vlan"></a>

```java
public java.lang.Number getVlan();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DirectconnectTransitVirtualInterfaceBgpPeers <a name="DirectconnectTransitVirtualInterfaceBgpPeers" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeers.Initializer"></a>

```java
import io.cdktn.providers.awscc.directconnect_transit_virtual_interface.DirectconnectTransitVirtualInterfaceBgpPeers;

DirectconnectTransitVirtualInterfaceBgpPeers.builder()
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
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeers.property.addressFamily">addressFamily</a></code> | <code>java.lang.String</code> | The address family for the BGP peer. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeers.property.asn">asn</a></code> | <code>java.lang.String</code> | The autonomous system (AS) number for Border Gateway Protocol (BGP) configuration. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeers.property.amazonAddress">amazonAddress</a></code> | <code>java.lang.String</code> | The IP address assigned to the Amazon interface. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeers.property.authKey">authKey</a></code> | <code>java.lang.String</code> | The authentication key for BGP configuration. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeers.property.bgpPeerId">bgpPeerId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/directconnect_transit_virtual_interface#bgp_peer_id DirectconnectTransitVirtualInterface#bgp_peer_id}. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeers.property.customerAddress">customerAddress</a></code> | <code>java.lang.String</code> | The IP address assigned to the customer interface. |

---

##### `addressFamily`<sup>Required</sup> <a name="addressFamily" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeers.property.addressFamily"></a>

```java
public java.lang.String getAddressFamily();
```

- *Type:* java.lang.String

The address family for the BGP peer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/directconnect_transit_virtual_interface#address_family DirectconnectTransitVirtualInterface#address_family}

---

##### `asn`<sup>Required</sup> <a name="asn" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeers.property.asn"></a>

```java
public java.lang.String getAsn();
```

- *Type:* java.lang.String

The autonomous system (AS) number for Border Gateway Protocol (BGP) configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/directconnect_transit_virtual_interface#asn DirectconnectTransitVirtualInterface#asn}

---

##### `amazonAddress`<sup>Optional</sup> <a name="amazonAddress" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeers.property.amazonAddress"></a>

```java
public java.lang.String getAmazonAddress();
```

- *Type:* java.lang.String

The IP address assigned to the Amazon interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/directconnect_transit_virtual_interface#amazon_address DirectconnectTransitVirtualInterface#amazon_address}

---

##### `authKey`<sup>Optional</sup> <a name="authKey" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeers.property.authKey"></a>

```java
public java.lang.String getAuthKey();
```

- *Type:* java.lang.String

The authentication key for BGP configuration.

This string has a minimum length of 6 characters and and a maximum length of 80 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/directconnect_transit_virtual_interface#auth_key DirectconnectTransitVirtualInterface#auth_key}

---

##### `bgpPeerId`<sup>Optional</sup> <a name="bgpPeerId" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeers.property.bgpPeerId"></a>

```java
public java.lang.String getBgpPeerId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/directconnect_transit_virtual_interface#bgp_peer_id DirectconnectTransitVirtualInterface#bgp_peer_id}.

---

##### `customerAddress`<sup>Optional</sup> <a name="customerAddress" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeers.property.customerAddress"></a>

```java
public java.lang.String getCustomerAddress();
```

- *Type:* java.lang.String

The IP address assigned to the customer interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/directconnect_transit_virtual_interface#customer_address DirectconnectTransitVirtualInterface#customer_address}

---

### DirectconnectTransitVirtualInterfaceConfig <a name="DirectconnectTransitVirtualInterfaceConfig" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.directconnect_transit_virtual_interface.DirectconnectTransitVirtualInterfaceConfig;

DirectconnectTransitVirtualInterfaceConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .bgpPeers(IResolvable|java.util.List<DirectconnectTransitVirtualInterfaceBgpPeers>)
    .connectionId(java.lang.String)
    .directConnectGatewayId(java.lang.String)
    .virtualInterfaceName(java.lang.String)
    .vlan(java.lang.Number)
//  .allocateTransitVirtualInterfaceRoleArn(java.lang.String)
//  .enableSiteLink(java.lang.Boolean|IResolvable)
//  .mtu(java.lang.Number)
//  .rateLimit(java.lang.String)
//  .tags(IResolvable|java.util.List<DirectconnectTransitVirtualInterfaceTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceConfig.property.bgpPeers">bgpPeers</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeers">DirectconnectTransitVirtualInterfaceBgpPeers</a>></code> | The BGP peers configured on this virtual interface.. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceConfig.property.connectionId">connectionId</a></code> | <code>java.lang.String</code> | The ID or ARN of the connection or LAG. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceConfig.property.directConnectGatewayId">directConnectGatewayId</a></code> | <code>java.lang.String</code> | The ID or ARN of the Direct Connect gateway. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceConfig.property.virtualInterfaceName">virtualInterfaceName</a></code> | <code>java.lang.String</code> | The name of the virtual interface assigned by the customer network. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceConfig.property.vlan">vlan</a></code> | <code>java.lang.Number</code> | The ID of the VLAN. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceConfig.property.allocateTransitVirtualInterfaceRoleArn">allocateTransitVirtualInterfaceRoleArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the role to allocate the TransitVifAllocation. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceConfig.property.enableSiteLink">enableSiteLink</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Indicates whether to enable or disable SiteLink. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceConfig.property.mtu">mtu</a></code> | <code>java.lang.Number</code> | The maximum transmission unit (MTU), in bytes. The supported values are 1500 and 9001. The default value is 1500. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceConfig.property.rateLimit">rateLimit</a></code> | <code>java.lang.String</code> | The rate limit (bandwidth allocation) for the virtual interface. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTags">DirectconnectTransitVirtualInterfaceTags</a>></code> | The tags associated with the private virtual interface. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `bgpPeers`<sup>Required</sup> <a name="bgpPeers" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceConfig.property.bgpPeers"></a>

```java
public IResolvable|java.util.List<DirectconnectTransitVirtualInterfaceBgpPeers> getBgpPeers();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeers">DirectconnectTransitVirtualInterfaceBgpPeers</a>>

The BGP peers configured on this virtual interface..

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/directconnect_transit_virtual_interface#bgp_peers DirectconnectTransitVirtualInterface#bgp_peers}

---

##### `connectionId`<sup>Required</sup> <a name="connectionId" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceConfig.property.connectionId"></a>

```java
public java.lang.String getConnectionId();
```

- *Type:* java.lang.String

The ID or ARN of the connection or LAG.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/directconnect_transit_virtual_interface#connection_id DirectconnectTransitVirtualInterface#connection_id}

---

##### `directConnectGatewayId`<sup>Required</sup> <a name="directConnectGatewayId" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceConfig.property.directConnectGatewayId"></a>

```java
public java.lang.String getDirectConnectGatewayId();
```

- *Type:* java.lang.String

The ID or ARN of the Direct Connect gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/directconnect_transit_virtual_interface#direct_connect_gateway_id DirectconnectTransitVirtualInterface#direct_connect_gateway_id}

---

##### `virtualInterfaceName`<sup>Required</sup> <a name="virtualInterfaceName" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceConfig.property.virtualInterfaceName"></a>

```java
public java.lang.String getVirtualInterfaceName();
```

- *Type:* java.lang.String

The name of the virtual interface assigned by the customer network.

The name has a maximum of 100 characters. The following are valid characters: a-z, 0-9 and a hyphen (-).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/directconnect_transit_virtual_interface#virtual_interface_name DirectconnectTransitVirtualInterface#virtual_interface_name}

---

##### `vlan`<sup>Required</sup> <a name="vlan" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceConfig.property.vlan"></a>

```java
public java.lang.Number getVlan();
```

- *Type:* java.lang.Number

The ID of the VLAN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/directconnect_transit_virtual_interface#vlan DirectconnectTransitVirtualInterface#vlan}

---

##### `allocateTransitVirtualInterfaceRoleArn`<sup>Optional</sup> <a name="allocateTransitVirtualInterfaceRoleArn" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceConfig.property.allocateTransitVirtualInterfaceRoleArn"></a>

```java
public java.lang.String getAllocateTransitVirtualInterfaceRoleArn();
```

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the role to allocate the TransitVifAllocation.

Needs directconnect:AllocateTransitVirtualInterface permissions and tag permissions if applicable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/directconnect_transit_virtual_interface#allocate_transit_virtual_interface_role_arn DirectconnectTransitVirtualInterface#allocate_transit_virtual_interface_role_arn}

---

##### `enableSiteLink`<sup>Optional</sup> <a name="enableSiteLink" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceConfig.property.enableSiteLink"></a>

```java
public java.lang.Boolean|IResolvable getEnableSiteLink();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Indicates whether to enable or disable SiteLink.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/directconnect_transit_virtual_interface#enable_site_link DirectconnectTransitVirtualInterface#enable_site_link}

---

##### `mtu`<sup>Optional</sup> <a name="mtu" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceConfig.property.mtu"></a>

```java
public java.lang.Number getMtu();
```

- *Type:* java.lang.Number

The maximum transmission unit (MTU), in bytes. The supported values are 1500 and 9001. The default value is 1500.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/directconnect_transit_virtual_interface#mtu DirectconnectTransitVirtualInterface#mtu}

---

##### `rateLimit`<sup>Optional</sup> <a name="rateLimit" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceConfig.property.rateLimit"></a>

```java
public java.lang.String getRateLimit();
```

- *Type:* java.lang.String

The rate limit (bandwidth allocation) for the virtual interface.

The value must be one of the supported bandwidth values (e.g., 50Mbps, 1Gbps, 10Gbps) and cannot exceed the bandwidth of the parent connection or LAG.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/directconnect_transit_virtual_interface#rate_limit DirectconnectTransitVirtualInterface#rate_limit}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceConfig.property.tags"></a>

```java
public IResolvable|java.util.List<DirectconnectTransitVirtualInterfaceTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTags">DirectconnectTransitVirtualInterfaceTags</a>>

The tags associated with the private virtual interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/directconnect_transit_virtual_interface#tags DirectconnectTransitVirtualInterface#tags}

---

### DirectconnectTransitVirtualInterfaceTags <a name="DirectconnectTransitVirtualInterfaceTags" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.directconnect_transit_virtual_interface.DirectconnectTransitVirtualInterfaceTags;

DirectconnectTransitVirtualInterfaceTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTags.property.key">key</a></code> | <code>java.lang.String</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTags.property.value">value</a></code> | <code>java.lang.String</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/directconnect_transit_virtual_interface#key DirectconnectTransitVirtualInterface#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/directconnect_transit_virtual_interface#value DirectconnectTransitVirtualInterface#value}

---

## Classes <a name="Classes" id="Classes"></a>

### DirectconnectTransitVirtualInterfaceBgpPeersList <a name="DirectconnectTransitVirtualInterfaceBgpPeersList" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersList.Initializer"></a>

```java
import io.cdktn.providers.awscc.directconnect_transit_virtual_interface.DirectconnectTransitVirtualInterfaceBgpPeersList;

new DirectconnectTransitVirtualInterfaceBgpPeersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersList.get"></a>

```java
public DirectconnectTransitVirtualInterfaceBgpPeersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeers">DirectconnectTransitVirtualInterfaceBgpPeers</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DirectconnectTransitVirtualInterfaceBgpPeers> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeers">DirectconnectTransitVirtualInterfaceBgpPeers</a>>

---


### DirectconnectTransitVirtualInterfaceBgpPeersOutputReference <a name="DirectconnectTransitVirtualInterfaceBgpPeersOutputReference" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.directconnect_transit_virtual_interface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference;

new DirectconnectTransitVirtualInterfaceBgpPeersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.resetAmazonAddress">resetAmazonAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.resetAuthKey">resetAuthKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.resetBgpPeerId">resetBgpPeerId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.resetCustomerAddress">resetCustomerAddress</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAmazonAddress` <a name="resetAmazonAddress" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.resetAmazonAddress"></a>

```java
public void resetAmazonAddress()
```

##### `resetAuthKey` <a name="resetAuthKey" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.resetAuthKey"></a>

```java
public void resetAuthKey()
```

##### `resetBgpPeerId` <a name="resetBgpPeerId" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.resetBgpPeerId"></a>

```java
public void resetBgpPeerId()
```

##### `resetCustomerAddress` <a name="resetCustomerAddress" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.resetCustomerAddress"></a>

```java
public void resetCustomerAddress()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.property.addressFamilyInput">addressFamilyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.property.amazonAddressInput">amazonAddressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.property.asnInput">asnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.property.authKeyInput">authKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.property.bgpPeerIdInput">bgpPeerIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.property.customerAddressInput">customerAddressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.property.addressFamily">addressFamily</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.property.amazonAddress">amazonAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.property.asn">asn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.property.authKey">authKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.property.bgpPeerId">bgpPeerId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.property.customerAddress">customerAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeers">DirectconnectTransitVirtualInterfaceBgpPeers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `addressFamilyInput`<sup>Optional</sup> <a name="addressFamilyInput" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.property.addressFamilyInput"></a>

```java
public java.lang.String getAddressFamilyInput();
```

- *Type:* java.lang.String

---

##### `amazonAddressInput`<sup>Optional</sup> <a name="amazonAddressInput" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.property.amazonAddressInput"></a>

```java
public java.lang.String getAmazonAddressInput();
```

- *Type:* java.lang.String

---

##### `asnInput`<sup>Optional</sup> <a name="asnInput" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.property.asnInput"></a>

```java
public java.lang.String getAsnInput();
```

- *Type:* java.lang.String

---

##### `authKeyInput`<sup>Optional</sup> <a name="authKeyInput" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.property.authKeyInput"></a>

```java
public java.lang.String getAuthKeyInput();
```

- *Type:* java.lang.String

---

##### `bgpPeerIdInput`<sup>Optional</sup> <a name="bgpPeerIdInput" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.property.bgpPeerIdInput"></a>

```java
public java.lang.String getBgpPeerIdInput();
```

- *Type:* java.lang.String

---

##### `customerAddressInput`<sup>Optional</sup> <a name="customerAddressInput" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.property.customerAddressInput"></a>

```java
public java.lang.String getCustomerAddressInput();
```

- *Type:* java.lang.String

---

##### `addressFamily`<sup>Required</sup> <a name="addressFamily" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.property.addressFamily"></a>

```java
public java.lang.String getAddressFamily();
```

- *Type:* java.lang.String

---

##### `amazonAddress`<sup>Required</sup> <a name="amazonAddress" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.property.amazonAddress"></a>

```java
public java.lang.String getAmazonAddress();
```

- *Type:* java.lang.String

---

##### `asn`<sup>Required</sup> <a name="asn" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.property.asn"></a>

```java
public java.lang.String getAsn();
```

- *Type:* java.lang.String

---

##### `authKey`<sup>Required</sup> <a name="authKey" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.property.authKey"></a>

```java
public java.lang.String getAuthKey();
```

- *Type:* java.lang.String

---

##### `bgpPeerId`<sup>Required</sup> <a name="bgpPeerId" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.property.bgpPeerId"></a>

```java
public java.lang.String getBgpPeerId();
```

- *Type:* java.lang.String

---

##### `customerAddress`<sup>Required</sup> <a name="customerAddress" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.property.customerAddress"></a>

```java
public java.lang.String getCustomerAddress();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.property.internalValue"></a>

```java
public IResolvable|DirectconnectTransitVirtualInterfaceBgpPeers getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeers">DirectconnectTransitVirtualInterfaceBgpPeers</a>

---


### DirectconnectTransitVirtualInterfaceTagsList <a name="DirectconnectTransitVirtualInterfaceTagsList" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.directconnect_transit_virtual_interface.DirectconnectTransitVirtualInterfaceTagsList;

new DirectconnectTransitVirtualInterfaceTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsList.get"></a>

```java
public DirectconnectTransitVirtualInterfaceTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTags">DirectconnectTransitVirtualInterfaceTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DirectconnectTransitVirtualInterfaceTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTags">DirectconnectTransitVirtualInterfaceTags</a>>

---


### DirectconnectTransitVirtualInterfaceTagsOutputReference <a name="DirectconnectTransitVirtualInterfaceTagsOutputReference" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.directconnect_transit_virtual_interface.DirectconnectTransitVirtualInterfaceTagsOutputReference;

new DirectconnectTransitVirtualInterfaceTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTags">DirectconnectTransitVirtualInterfaceTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|DirectconnectTransitVirtualInterfaceTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTags">DirectconnectTransitVirtualInterfaceTags</a>

---



