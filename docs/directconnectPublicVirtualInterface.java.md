# `directconnectPublicVirtualInterface` Submodule <a name="`directconnectPublicVirtualInterface` Submodule" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DirectconnectPublicVirtualInterface <a name="DirectconnectPublicVirtualInterface" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/directconnect_public_virtual_interface awscc_directconnect_public_virtual_interface}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.Initializer"></a>

```java
import io.cdktn.providers.awscc.directconnect_public_virtual_interface.DirectconnectPublicVirtualInterface;

DirectconnectPublicVirtualInterface.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .bgpPeers(IResolvable|java.util.List<DirectconnectPublicVirtualInterfaceBgpPeers>)
    .connectionId(java.lang.String)
    .virtualInterfaceName(java.lang.String)
    .vlan(java.lang.Number)
//  .allocatePublicVirtualInterfaceRoleArn(java.lang.String)
//  .rateLimit(java.lang.String)
//  .routeFilterPrefixes(java.util.List<java.lang.String>)
//  .tags(IResolvable|java.util.List<DirectconnectPublicVirtualInterfaceTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.Initializer.parameter.bgpPeers">bgpPeers</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeers">DirectconnectPublicVirtualInterfaceBgpPeers</a>></code> | The BGP peers configured on this virtual interface. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.Initializer.parameter.connectionId">connectionId</a></code> | <code>java.lang.String</code> | The ID or ARN of the connection or LAG. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.Initializer.parameter.virtualInterfaceName">virtualInterfaceName</a></code> | <code>java.lang.String</code> | The name of the virtual interface assigned by the customer network. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.Initializer.parameter.vlan">vlan</a></code> | <code>java.lang.Number</code> | The ID of the VLAN. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.Initializer.parameter.allocatePublicVirtualInterfaceRoleArn">allocatePublicVirtualInterfaceRoleArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the role to allocate the public virtual interface. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.Initializer.parameter.rateLimit">rateLimit</a></code> | <code>java.lang.String</code> | The rate limit (bandwidth allocation) for the virtual interface. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.Initializer.parameter.routeFilterPrefixes">routeFilterPrefixes</a></code> | <code>java.util.List<java.lang.String></code> | The routes to be advertised to the AWS network in this region. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTags">DirectconnectPublicVirtualInterfaceTags</a>></code> | The tags associated with the public virtual interface. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `bgpPeers`<sup>Required</sup> <a name="bgpPeers" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.Initializer.parameter.bgpPeers"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeers">DirectconnectPublicVirtualInterfaceBgpPeers</a>>

The BGP peers configured on this virtual interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/directconnect_public_virtual_interface#bgp_peers DirectconnectPublicVirtualInterface#bgp_peers}

---

##### `connectionId`<sup>Required</sup> <a name="connectionId" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.Initializer.parameter.connectionId"></a>

- *Type:* java.lang.String

The ID or ARN of the connection or LAG.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/directconnect_public_virtual_interface#connection_id DirectconnectPublicVirtualInterface#connection_id}

---

##### `virtualInterfaceName`<sup>Required</sup> <a name="virtualInterfaceName" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.Initializer.parameter.virtualInterfaceName"></a>

- *Type:* java.lang.String

The name of the virtual interface assigned by the customer network.

The name has a maximum of 100 characters. The following are valid characters: a-z, 0-9 and a hyphen (-).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/directconnect_public_virtual_interface#virtual_interface_name DirectconnectPublicVirtualInterface#virtual_interface_name}

---

##### `vlan`<sup>Required</sup> <a name="vlan" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.Initializer.parameter.vlan"></a>

- *Type:* java.lang.Number

The ID of the VLAN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/directconnect_public_virtual_interface#vlan DirectconnectPublicVirtualInterface#vlan}

---

##### `allocatePublicVirtualInterfaceRoleArn`<sup>Optional</sup> <a name="allocatePublicVirtualInterfaceRoleArn" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.Initializer.parameter.allocatePublicVirtualInterfaceRoleArn"></a>

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the role to allocate the public virtual interface.

Needs directconnect:AllocatePublicVirtualInterface permissions and tag permissions if applicable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/directconnect_public_virtual_interface#allocate_public_virtual_interface_role_arn DirectconnectPublicVirtualInterface#allocate_public_virtual_interface_role_arn}

---

##### `rateLimit`<sup>Optional</sup> <a name="rateLimit" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.Initializer.parameter.rateLimit"></a>

- *Type:* java.lang.String

The rate limit (bandwidth allocation) for the virtual interface.

The value must be one of the supported bandwidth values (e.g., 50Mbps, 1Gbps, 10Gbps) and cannot exceed the bandwidth of the parent connection or LAG.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/directconnect_public_virtual_interface#rate_limit DirectconnectPublicVirtualInterface#rate_limit}

---

##### `routeFilterPrefixes`<sup>Optional</sup> <a name="routeFilterPrefixes" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.Initializer.parameter.routeFilterPrefixes"></a>

- *Type:* java.util.List<java.lang.String>

The routes to be advertised to the AWS network in this region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/directconnect_public_virtual_interface#route_filter_prefixes DirectconnectPublicVirtualInterface#route_filter_prefixes}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTags">DirectconnectPublicVirtualInterfaceTags</a>>

The tags associated with the public virtual interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/directconnect_public_virtual_interface#tags DirectconnectPublicVirtualInterface#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.putBgpPeers">putBgpPeers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.resetAllocatePublicVirtualInterfaceRoleArn">resetAllocatePublicVirtualInterfaceRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.resetRateLimit">resetRateLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.resetRouteFilterPrefixes">resetRouteFilterPrefixes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putBgpPeers` <a name="putBgpPeers" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.putBgpPeers"></a>

```java
public void putBgpPeers(IResolvable|java.util.List<DirectconnectPublicVirtualInterfaceBgpPeers> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.putBgpPeers.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeers">DirectconnectPublicVirtualInterfaceBgpPeers</a>>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<DirectconnectPublicVirtualInterfaceTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTags">DirectconnectPublicVirtualInterfaceTags</a>>

---

##### `resetAllocatePublicVirtualInterfaceRoleArn` <a name="resetAllocatePublicVirtualInterfaceRoleArn" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.resetAllocatePublicVirtualInterfaceRoleArn"></a>

```java
public void resetAllocatePublicVirtualInterfaceRoleArn()
```

##### `resetRateLimit` <a name="resetRateLimit" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.resetRateLimit"></a>

```java
public void resetRateLimit()
```

##### `resetRouteFilterPrefixes` <a name="resetRouteFilterPrefixes" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.resetRouteFilterPrefixes"></a>

```java
public void resetRouteFilterPrefixes()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DirectconnectPublicVirtualInterface resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.isConstruct"></a>

```java
import io.cdktn.providers.awscc.directconnect_public_virtual_interface.DirectconnectPublicVirtualInterface;

DirectconnectPublicVirtualInterface.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.directconnect_public_virtual_interface.DirectconnectPublicVirtualInterface;

DirectconnectPublicVirtualInterface.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.directconnect_public_virtual_interface.DirectconnectPublicVirtualInterface;

DirectconnectPublicVirtualInterface.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.directconnect_public_virtual_interface.DirectconnectPublicVirtualInterface;

DirectconnectPublicVirtualInterface.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DirectconnectPublicVirtualInterface.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DirectconnectPublicVirtualInterface resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DirectconnectPublicVirtualInterface to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DirectconnectPublicVirtualInterface that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/directconnect_public_virtual_interface#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DirectconnectPublicVirtualInterface to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.bgpPeers">bgpPeers</a></code> | <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersList">DirectconnectPublicVirtualInterfaceBgpPeersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsList">DirectconnectPublicVirtualInterfaceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.virtualInterfaceArn">virtualInterfaceArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.virtualInterfaceId">virtualInterfaceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.allocatePublicVirtualInterfaceRoleArnInput">allocatePublicVirtualInterfaceRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.bgpPeersInput">bgpPeersInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeers">DirectconnectPublicVirtualInterfaceBgpPeers</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.connectionIdInput">connectionIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.rateLimitInput">rateLimitInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.routeFilterPrefixesInput">routeFilterPrefixesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTags">DirectconnectPublicVirtualInterfaceTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.virtualInterfaceNameInput">virtualInterfaceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.vlanInput">vlanInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.allocatePublicVirtualInterfaceRoleArn">allocatePublicVirtualInterfaceRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.connectionId">connectionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.rateLimit">rateLimit</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.routeFilterPrefixes">routeFilterPrefixes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.virtualInterfaceName">virtualInterfaceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.vlan">vlan</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `bgpPeers`<sup>Required</sup> <a name="bgpPeers" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.bgpPeers"></a>

```java
public DirectconnectPublicVirtualInterfaceBgpPeersList getBgpPeers();
```

- *Type:* <a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersList">DirectconnectPublicVirtualInterfaceBgpPeersList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.tags"></a>

```java
public DirectconnectPublicVirtualInterfaceTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsList">DirectconnectPublicVirtualInterfaceTagsList</a>

---

##### `virtualInterfaceArn`<sup>Required</sup> <a name="virtualInterfaceArn" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.virtualInterfaceArn"></a>

```java
public java.lang.String getVirtualInterfaceArn();
```

- *Type:* java.lang.String

---

##### `virtualInterfaceId`<sup>Required</sup> <a name="virtualInterfaceId" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.virtualInterfaceId"></a>

```java
public java.lang.String getVirtualInterfaceId();
```

- *Type:* java.lang.String

---

##### `allocatePublicVirtualInterfaceRoleArnInput`<sup>Optional</sup> <a name="allocatePublicVirtualInterfaceRoleArnInput" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.allocatePublicVirtualInterfaceRoleArnInput"></a>

```java
public java.lang.String getAllocatePublicVirtualInterfaceRoleArnInput();
```

- *Type:* java.lang.String

---

##### `bgpPeersInput`<sup>Optional</sup> <a name="bgpPeersInput" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.bgpPeersInput"></a>

```java
public IResolvable|java.util.List<DirectconnectPublicVirtualInterfaceBgpPeers> getBgpPeersInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeers">DirectconnectPublicVirtualInterfaceBgpPeers</a>>

---

##### `connectionIdInput`<sup>Optional</sup> <a name="connectionIdInput" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.connectionIdInput"></a>

```java
public java.lang.String getConnectionIdInput();
```

- *Type:* java.lang.String

---

##### `rateLimitInput`<sup>Optional</sup> <a name="rateLimitInput" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.rateLimitInput"></a>

```java
public java.lang.String getRateLimitInput();
```

- *Type:* java.lang.String

---

##### `routeFilterPrefixesInput`<sup>Optional</sup> <a name="routeFilterPrefixesInput" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.routeFilterPrefixesInput"></a>

```java
public java.util.List<java.lang.String> getRouteFilterPrefixesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.tagsInput"></a>

```java
public IResolvable|java.util.List<DirectconnectPublicVirtualInterfaceTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTags">DirectconnectPublicVirtualInterfaceTags</a>>

---

##### `virtualInterfaceNameInput`<sup>Optional</sup> <a name="virtualInterfaceNameInput" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.virtualInterfaceNameInput"></a>

```java
public java.lang.String getVirtualInterfaceNameInput();
```

- *Type:* java.lang.String

---

##### `vlanInput`<sup>Optional</sup> <a name="vlanInput" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.vlanInput"></a>

```java
public java.lang.Number getVlanInput();
```

- *Type:* java.lang.Number

---

##### `allocatePublicVirtualInterfaceRoleArn`<sup>Required</sup> <a name="allocatePublicVirtualInterfaceRoleArn" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.allocatePublicVirtualInterfaceRoleArn"></a>

```java
public java.lang.String getAllocatePublicVirtualInterfaceRoleArn();
```

- *Type:* java.lang.String

---

##### `connectionId`<sup>Required</sup> <a name="connectionId" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.connectionId"></a>

```java
public java.lang.String getConnectionId();
```

- *Type:* java.lang.String

---

##### `rateLimit`<sup>Required</sup> <a name="rateLimit" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.rateLimit"></a>

```java
public java.lang.String getRateLimit();
```

- *Type:* java.lang.String

---

##### `routeFilterPrefixes`<sup>Required</sup> <a name="routeFilterPrefixes" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.routeFilterPrefixes"></a>

```java
public java.util.List<java.lang.String> getRouteFilterPrefixes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `virtualInterfaceName`<sup>Required</sup> <a name="virtualInterfaceName" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.virtualInterfaceName"></a>

```java
public java.lang.String getVirtualInterfaceName();
```

- *Type:* java.lang.String

---

##### `vlan`<sup>Required</sup> <a name="vlan" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.vlan"></a>

```java
public java.lang.Number getVlan();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DirectconnectPublicVirtualInterfaceBgpPeers <a name="DirectconnectPublicVirtualInterfaceBgpPeers" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeers.Initializer"></a>

```java
import io.cdktn.providers.awscc.directconnect_public_virtual_interface.DirectconnectPublicVirtualInterfaceBgpPeers;

DirectconnectPublicVirtualInterfaceBgpPeers.builder()
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
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeers.property.addressFamily">addressFamily</a></code> | <code>java.lang.String</code> | The address family for the BGP peer. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeers.property.asn">asn</a></code> | <code>java.lang.String</code> | The autonomous system (AS) number for Border Gateway Protocol (BGP) configuration. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeers.property.amazonAddress">amazonAddress</a></code> | <code>java.lang.String</code> | The IP address assigned to the Amazon interface. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeers.property.authKey">authKey</a></code> | <code>java.lang.String</code> | The authentication key for BGP configuration. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeers.property.bgpPeerId">bgpPeerId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/directconnect_public_virtual_interface#bgp_peer_id DirectconnectPublicVirtualInterface#bgp_peer_id}. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeers.property.customerAddress">customerAddress</a></code> | <code>java.lang.String</code> | The IP address assigned to the customer interface. |

---

##### `addressFamily`<sup>Required</sup> <a name="addressFamily" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeers.property.addressFamily"></a>

```java
public java.lang.String getAddressFamily();
```

- *Type:* java.lang.String

The address family for the BGP peer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/directconnect_public_virtual_interface#address_family DirectconnectPublicVirtualInterface#address_family}

---

##### `asn`<sup>Required</sup> <a name="asn" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeers.property.asn"></a>

```java
public java.lang.String getAsn();
```

- *Type:* java.lang.String

The autonomous system (AS) number for Border Gateway Protocol (BGP) configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/directconnect_public_virtual_interface#asn DirectconnectPublicVirtualInterface#asn}

---

##### `amazonAddress`<sup>Optional</sup> <a name="amazonAddress" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeers.property.amazonAddress"></a>

```java
public java.lang.String getAmazonAddress();
```

- *Type:* java.lang.String

The IP address assigned to the Amazon interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/directconnect_public_virtual_interface#amazon_address DirectconnectPublicVirtualInterface#amazon_address}

---

##### `authKey`<sup>Optional</sup> <a name="authKey" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeers.property.authKey"></a>

```java
public java.lang.String getAuthKey();
```

- *Type:* java.lang.String

The authentication key for BGP configuration.

This string has a minimum length of 6 characters and and a maximum length of 80 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/directconnect_public_virtual_interface#auth_key DirectconnectPublicVirtualInterface#auth_key}

---

##### `bgpPeerId`<sup>Optional</sup> <a name="bgpPeerId" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeers.property.bgpPeerId"></a>

```java
public java.lang.String getBgpPeerId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/directconnect_public_virtual_interface#bgp_peer_id DirectconnectPublicVirtualInterface#bgp_peer_id}.

---

##### `customerAddress`<sup>Optional</sup> <a name="customerAddress" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeers.property.customerAddress"></a>

```java
public java.lang.String getCustomerAddress();
```

- *Type:* java.lang.String

The IP address assigned to the customer interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/directconnect_public_virtual_interface#customer_address DirectconnectPublicVirtualInterface#customer_address}

---

### DirectconnectPublicVirtualInterfaceConfig <a name="DirectconnectPublicVirtualInterfaceConfig" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.directconnect_public_virtual_interface.DirectconnectPublicVirtualInterfaceConfig;

DirectconnectPublicVirtualInterfaceConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .bgpPeers(IResolvable|java.util.List<DirectconnectPublicVirtualInterfaceBgpPeers>)
    .connectionId(java.lang.String)
    .virtualInterfaceName(java.lang.String)
    .vlan(java.lang.Number)
//  .allocatePublicVirtualInterfaceRoleArn(java.lang.String)
//  .rateLimit(java.lang.String)
//  .routeFilterPrefixes(java.util.List<java.lang.String>)
//  .tags(IResolvable|java.util.List<DirectconnectPublicVirtualInterfaceTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceConfig.property.bgpPeers">bgpPeers</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeers">DirectconnectPublicVirtualInterfaceBgpPeers</a>></code> | The BGP peers configured on this virtual interface. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceConfig.property.connectionId">connectionId</a></code> | <code>java.lang.String</code> | The ID or ARN of the connection or LAG. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceConfig.property.virtualInterfaceName">virtualInterfaceName</a></code> | <code>java.lang.String</code> | The name of the virtual interface assigned by the customer network. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceConfig.property.vlan">vlan</a></code> | <code>java.lang.Number</code> | The ID of the VLAN. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceConfig.property.allocatePublicVirtualInterfaceRoleArn">allocatePublicVirtualInterfaceRoleArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the role to allocate the public virtual interface. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceConfig.property.rateLimit">rateLimit</a></code> | <code>java.lang.String</code> | The rate limit (bandwidth allocation) for the virtual interface. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceConfig.property.routeFilterPrefixes">routeFilterPrefixes</a></code> | <code>java.util.List<java.lang.String></code> | The routes to be advertised to the AWS network in this region. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTags">DirectconnectPublicVirtualInterfaceTags</a>></code> | The tags associated with the public virtual interface. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `bgpPeers`<sup>Required</sup> <a name="bgpPeers" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceConfig.property.bgpPeers"></a>

```java
public IResolvable|java.util.List<DirectconnectPublicVirtualInterfaceBgpPeers> getBgpPeers();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeers">DirectconnectPublicVirtualInterfaceBgpPeers</a>>

The BGP peers configured on this virtual interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/directconnect_public_virtual_interface#bgp_peers DirectconnectPublicVirtualInterface#bgp_peers}

---

##### `connectionId`<sup>Required</sup> <a name="connectionId" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceConfig.property.connectionId"></a>

```java
public java.lang.String getConnectionId();
```

- *Type:* java.lang.String

The ID or ARN of the connection or LAG.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/directconnect_public_virtual_interface#connection_id DirectconnectPublicVirtualInterface#connection_id}

---

##### `virtualInterfaceName`<sup>Required</sup> <a name="virtualInterfaceName" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceConfig.property.virtualInterfaceName"></a>

```java
public java.lang.String getVirtualInterfaceName();
```

- *Type:* java.lang.String

The name of the virtual interface assigned by the customer network.

The name has a maximum of 100 characters. The following are valid characters: a-z, 0-9 and a hyphen (-).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/directconnect_public_virtual_interface#virtual_interface_name DirectconnectPublicVirtualInterface#virtual_interface_name}

---

##### `vlan`<sup>Required</sup> <a name="vlan" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceConfig.property.vlan"></a>

```java
public java.lang.Number getVlan();
```

- *Type:* java.lang.Number

The ID of the VLAN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/directconnect_public_virtual_interface#vlan DirectconnectPublicVirtualInterface#vlan}

---

##### `allocatePublicVirtualInterfaceRoleArn`<sup>Optional</sup> <a name="allocatePublicVirtualInterfaceRoleArn" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceConfig.property.allocatePublicVirtualInterfaceRoleArn"></a>

```java
public java.lang.String getAllocatePublicVirtualInterfaceRoleArn();
```

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the role to allocate the public virtual interface.

Needs directconnect:AllocatePublicVirtualInterface permissions and tag permissions if applicable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/directconnect_public_virtual_interface#allocate_public_virtual_interface_role_arn DirectconnectPublicVirtualInterface#allocate_public_virtual_interface_role_arn}

---

##### `rateLimit`<sup>Optional</sup> <a name="rateLimit" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceConfig.property.rateLimit"></a>

```java
public java.lang.String getRateLimit();
```

- *Type:* java.lang.String

The rate limit (bandwidth allocation) for the virtual interface.

The value must be one of the supported bandwidth values (e.g., 50Mbps, 1Gbps, 10Gbps) and cannot exceed the bandwidth of the parent connection or LAG.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/directconnect_public_virtual_interface#rate_limit DirectconnectPublicVirtualInterface#rate_limit}

---

##### `routeFilterPrefixes`<sup>Optional</sup> <a name="routeFilterPrefixes" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceConfig.property.routeFilterPrefixes"></a>

```java
public java.util.List<java.lang.String> getRouteFilterPrefixes();
```

- *Type:* java.util.List<java.lang.String>

The routes to be advertised to the AWS network in this region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/directconnect_public_virtual_interface#route_filter_prefixes DirectconnectPublicVirtualInterface#route_filter_prefixes}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceConfig.property.tags"></a>

```java
public IResolvable|java.util.List<DirectconnectPublicVirtualInterfaceTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTags">DirectconnectPublicVirtualInterfaceTags</a>>

The tags associated with the public virtual interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/directconnect_public_virtual_interface#tags DirectconnectPublicVirtualInterface#tags}

---

### DirectconnectPublicVirtualInterfaceTags <a name="DirectconnectPublicVirtualInterfaceTags" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.directconnect_public_virtual_interface.DirectconnectPublicVirtualInterfaceTags;

DirectconnectPublicVirtualInterfaceTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTags.property.key">key</a></code> | <code>java.lang.String</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTags.property.value">value</a></code> | <code>java.lang.String</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/directconnect_public_virtual_interface#key DirectconnectPublicVirtualInterface#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/directconnect_public_virtual_interface#value DirectconnectPublicVirtualInterface#value}

---

## Classes <a name="Classes" id="Classes"></a>

### DirectconnectPublicVirtualInterfaceBgpPeersList <a name="DirectconnectPublicVirtualInterfaceBgpPeersList" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersList.Initializer"></a>

```java
import io.cdktn.providers.awscc.directconnect_public_virtual_interface.DirectconnectPublicVirtualInterfaceBgpPeersList;

new DirectconnectPublicVirtualInterfaceBgpPeersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersList.get"></a>

```java
public DirectconnectPublicVirtualInterfaceBgpPeersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeers">DirectconnectPublicVirtualInterfaceBgpPeers</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DirectconnectPublicVirtualInterfaceBgpPeers> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeers">DirectconnectPublicVirtualInterfaceBgpPeers</a>>

---


### DirectconnectPublicVirtualInterfaceBgpPeersOutputReference <a name="DirectconnectPublicVirtualInterfaceBgpPeersOutputReference" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.directconnect_public_virtual_interface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference;

new DirectconnectPublicVirtualInterfaceBgpPeersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.resetAmazonAddress">resetAmazonAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.resetAuthKey">resetAuthKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.resetBgpPeerId">resetBgpPeerId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.resetCustomerAddress">resetCustomerAddress</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAmazonAddress` <a name="resetAmazonAddress" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.resetAmazonAddress"></a>

```java
public void resetAmazonAddress()
```

##### `resetAuthKey` <a name="resetAuthKey" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.resetAuthKey"></a>

```java
public void resetAuthKey()
```

##### `resetBgpPeerId` <a name="resetBgpPeerId" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.resetBgpPeerId"></a>

```java
public void resetBgpPeerId()
```

##### `resetCustomerAddress` <a name="resetCustomerAddress" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.resetCustomerAddress"></a>

```java
public void resetCustomerAddress()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.property.addressFamilyInput">addressFamilyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.property.amazonAddressInput">amazonAddressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.property.asnInput">asnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.property.authKeyInput">authKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.property.bgpPeerIdInput">bgpPeerIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.property.customerAddressInput">customerAddressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.property.addressFamily">addressFamily</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.property.amazonAddress">amazonAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.property.asn">asn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.property.authKey">authKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.property.bgpPeerId">bgpPeerId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.property.customerAddress">customerAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeers">DirectconnectPublicVirtualInterfaceBgpPeers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `addressFamilyInput`<sup>Optional</sup> <a name="addressFamilyInput" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.property.addressFamilyInput"></a>

```java
public java.lang.String getAddressFamilyInput();
```

- *Type:* java.lang.String

---

##### `amazonAddressInput`<sup>Optional</sup> <a name="amazonAddressInput" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.property.amazonAddressInput"></a>

```java
public java.lang.String getAmazonAddressInput();
```

- *Type:* java.lang.String

---

##### `asnInput`<sup>Optional</sup> <a name="asnInput" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.property.asnInput"></a>

```java
public java.lang.String getAsnInput();
```

- *Type:* java.lang.String

---

##### `authKeyInput`<sup>Optional</sup> <a name="authKeyInput" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.property.authKeyInput"></a>

```java
public java.lang.String getAuthKeyInput();
```

- *Type:* java.lang.String

---

##### `bgpPeerIdInput`<sup>Optional</sup> <a name="bgpPeerIdInput" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.property.bgpPeerIdInput"></a>

```java
public java.lang.String getBgpPeerIdInput();
```

- *Type:* java.lang.String

---

##### `customerAddressInput`<sup>Optional</sup> <a name="customerAddressInput" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.property.customerAddressInput"></a>

```java
public java.lang.String getCustomerAddressInput();
```

- *Type:* java.lang.String

---

##### `addressFamily`<sup>Required</sup> <a name="addressFamily" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.property.addressFamily"></a>

```java
public java.lang.String getAddressFamily();
```

- *Type:* java.lang.String

---

##### `amazonAddress`<sup>Required</sup> <a name="amazonAddress" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.property.amazonAddress"></a>

```java
public java.lang.String getAmazonAddress();
```

- *Type:* java.lang.String

---

##### `asn`<sup>Required</sup> <a name="asn" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.property.asn"></a>

```java
public java.lang.String getAsn();
```

- *Type:* java.lang.String

---

##### `authKey`<sup>Required</sup> <a name="authKey" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.property.authKey"></a>

```java
public java.lang.String getAuthKey();
```

- *Type:* java.lang.String

---

##### `bgpPeerId`<sup>Required</sup> <a name="bgpPeerId" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.property.bgpPeerId"></a>

```java
public java.lang.String getBgpPeerId();
```

- *Type:* java.lang.String

---

##### `customerAddress`<sup>Required</sup> <a name="customerAddress" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.property.customerAddress"></a>

```java
public java.lang.String getCustomerAddress();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.property.internalValue"></a>

```java
public IResolvable|DirectconnectPublicVirtualInterfaceBgpPeers getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeers">DirectconnectPublicVirtualInterfaceBgpPeers</a>

---


### DirectconnectPublicVirtualInterfaceTagsList <a name="DirectconnectPublicVirtualInterfaceTagsList" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.directconnect_public_virtual_interface.DirectconnectPublicVirtualInterfaceTagsList;

new DirectconnectPublicVirtualInterfaceTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsList.get"></a>

```java
public DirectconnectPublicVirtualInterfaceTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTags">DirectconnectPublicVirtualInterfaceTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DirectconnectPublicVirtualInterfaceTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTags">DirectconnectPublicVirtualInterfaceTags</a>>

---


### DirectconnectPublicVirtualInterfaceTagsOutputReference <a name="DirectconnectPublicVirtualInterfaceTagsOutputReference" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.directconnect_public_virtual_interface.DirectconnectPublicVirtualInterfaceTagsOutputReference;

new DirectconnectPublicVirtualInterfaceTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTags">DirectconnectPublicVirtualInterfaceTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|DirectconnectPublicVirtualInterfaceTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTags">DirectconnectPublicVirtualInterfaceTags</a>

---



