# `directconnectPrivateVirtualInterface` Submodule <a name="`directconnectPrivateVirtualInterface` Submodule" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DirectconnectPrivateVirtualInterface <a name="DirectconnectPrivateVirtualInterface" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/directconnect_private_virtual_interface awscc_directconnect_private_virtual_interface}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.Initializer"></a>

```python
from cdktn_provider_awscc import directconnect_private_virtual_interface

directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  bgp_peers: IResolvable | typing.List[DirectconnectPrivateVirtualInterfaceBgpPeers],
  connection_id: str,
  virtual_interface_name: str,
  vlan: typing.Union[int, float],
  allocate_private_virtual_interface_role_arn: str = None,
  direct_connect_gateway_id: str = None,
  enable_site_link: bool | IResolvable = None,
  mtu: typing.Union[int, float] = None,
  rate_limit: str = None,
  tags: IResolvable | typing.List[DirectconnectPrivateVirtualInterfaceTags] = None,
  virtual_gateway_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.Initializer.parameter.bgpPeers">bgp_peers</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeers">DirectconnectPrivateVirtualInterfaceBgpPeers</a>]</code> | The BGP peers configured on this virtual interface. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.Initializer.parameter.connectionId">connection_id</a></code> | <code>str</code> | The ID or ARN of the connection or LAG. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.Initializer.parameter.virtualInterfaceName">virtual_interface_name</a></code> | <code>str</code> | The name of the virtual interface assigned by the customer network. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.Initializer.parameter.vlan">vlan</a></code> | <code>typing.Union[int, float]</code> | The ID of the VLAN. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.Initializer.parameter.allocatePrivateVirtualInterfaceRoleArn">allocate_private_virtual_interface_role_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the role to allocate the private virtual interface. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.Initializer.parameter.directConnectGatewayId">direct_connect_gateway_id</a></code> | <code>str</code> | The ID or ARN of the Direct Connect gateway. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.Initializer.parameter.enableSiteLink">enable_site_link</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates whether to enable or disable SiteLink. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.Initializer.parameter.mtu">mtu</a></code> | <code>typing.Union[int, float]</code> | The maximum transmission unit (MTU), in bytes. The supported values are 1500 and 9001. The default value is 1500. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.Initializer.parameter.rateLimit">rate_limit</a></code> | <code>str</code> | The rate limit (bandwidth allocation) for the virtual interface. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTags">DirectconnectPrivateVirtualInterfaceTags</a>]</code> | The tags associated with the private virtual interface. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.Initializer.parameter.virtualGatewayId">virtual_gateway_id</a></code> | <code>str</code> | The ID or ARN of the virtual private gateway. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `bgp_peers`<sup>Required</sup> <a name="bgp_peers" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.Initializer.parameter.bgpPeers"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeers">DirectconnectPrivateVirtualInterfaceBgpPeers</a>]

The BGP peers configured on this virtual interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/directconnect_private_virtual_interface#bgp_peers DirectconnectPrivateVirtualInterface#bgp_peers}

---

##### `connection_id`<sup>Required</sup> <a name="connection_id" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.Initializer.parameter.connectionId"></a>

- *Type:* str

The ID or ARN of the connection or LAG.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/directconnect_private_virtual_interface#connection_id DirectconnectPrivateVirtualInterface#connection_id}

---

##### `virtual_interface_name`<sup>Required</sup> <a name="virtual_interface_name" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.Initializer.parameter.virtualInterfaceName"></a>

- *Type:* str

The name of the virtual interface assigned by the customer network.

The name has a maximum of 100 characters. The following are valid characters: a-z, 0-9 and a hyphen (-).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/directconnect_private_virtual_interface#virtual_interface_name DirectconnectPrivateVirtualInterface#virtual_interface_name}

---

##### `vlan`<sup>Required</sup> <a name="vlan" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.Initializer.parameter.vlan"></a>

- *Type:* typing.Union[int, float]

The ID of the VLAN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/directconnect_private_virtual_interface#vlan DirectconnectPrivateVirtualInterface#vlan}

---

##### `allocate_private_virtual_interface_role_arn`<sup>Optional</sup> <a name="allocate_private_virtual_interface_role_arn" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.Initializer.parameter.allocatePrivateVirtualInterfaceRoleArn"></a>

- *Type:* str

The Amazon Resource Name (ARN) of the role to allocate the private virtual interface.

Needs directconnect:AllocatePrivateVirtualInterface permissions and tag permissions if applicable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/directconnect_private_virtual_interface#allocate_private_virtual_interface_role_arn DirectconnectPrivateVirtualInterface#allocate_private_virtual_interface_role_arn}

---

##### `direct_connect_gateway_id`<sup>Optional</sup> <a name="direct_connect_gateway_id" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.Initializer.parameter.directConnectGatewayId"></a>

- *Type:* str

The ID or ARN of the Direct Connect gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/directconnect_private_virtual_interface#direct_connect_gateway_id DirectconnectPrivateVirtualInterface#direct_connect_gateway_id}

---

##### `enable_site_link`<sup>Optional</sup> <a name="enable_site_link" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.Initializer.parameter.enableSiteLink"></a>

- *Type:* bool | cdktn.IResolvable

Indicates whether to enable or disable SiteLink.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/directconnect_private_virtual_interface#enable_site_link DirectconnectPrivateVirtualInterface#enable_site_link}

---

##### `mtu`<sup>Optional</sup> <a name="mtu" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.Initializer.parameter.mtu"></a>

- *Type:* typing.Union[int, float]

The maximum transmission unit (MTU), in bytes. The supported values are 1500 and 9001. The default value is 1500.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/directconnect_private_virtual_interface#mtu DirectconnectPrivateVirtualInterface#mtu}

---

##### `rate_limit`<sup>Optional</sup> <a name="rate_limit" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.Initializer.parameter.rateLimit"></a>

- *Type:* str

The rate limit (bandwidth allocation) for the virtual interface.

The value must be one of the supported bandwidth values (e.g., 50Mbps, 1Gbps, 10Gbps) and cannot exceed the bandwidth of the parent connection or LAG.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/directconnect_private_virtual_interface#rate_limit DirectconnectPrivateVirtualInterface#rate_limit}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTags">DirectconnectPrivateVirtualInterfaceTags</a>]

The tags associated with the private virtual interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/directconnect_private_virtual_interface#tags DirectconnectPrivateVirtualInterface#tags}

---

##### `virtual_gateway_id`<sup>Optional</sup> <a name="virtual_gateway_id" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.Initializer.parameter.virtualGatewayId"></a>

- *Type:* str

The ID or ARN of the virtual private gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/directconnect_private_virtual_interface#virtual_gateway_id DirectconnectPrivateVirtualInterface#virtual_gateway_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.putBgpPeers">put_bgp_peers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.resetAllocatePrivateVirtualInterfaceRoleArn">reset_allocate_private_virtual_interface_role_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.resetDirectConnectGatewayId">reset_direct_connect_gateway_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.resetEnableSiteLink">reset_enable_site_link</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.resetMtu">reset_mtu</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.resetRateLimit">reset_rate_limit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.resetVirtualGatewayId">reset_virtual_gateway_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.with"></a>

```python
def with(
  mixins: *IMixin
) -> IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_bgp_peers` <a name="put_bgp_peers" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.putBgpPeers"></a>

```python
def put_bgp_peers(
  value: IResolvable | typing.List[DirectconnectPrivateVirtualInterfaceBgpPeers]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.putBgpPeers.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeers">DirectconnectPrivateVirtualInterfaceBgpPeers</a>]

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[DirectconnectPrivateVirtualInterfaceTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTags">DirectconnectPrivateVirtualInterfaceTags</a>]

---

##### `reset_allocate_private_virtual_interface_role_arn` <a name="reset_allocate_private_virtual_interface_role_arn" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.resetAllocatePrivateVirtualInterfaceRoleArn"></a>

```python
def reset_allocate_private_virtual_interface_role_arn() -> None
```

##### `reset_direct_connect_gateway_id` <a name="reset_direct_connect_gateway_id" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.resetDirectConnectGatewayId"></a>

```python
def reset_direct_connect_gateway_id() -> None
```

##### `reset_enable_site_link` <a name="reset_enable_site_link" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.resetEnableSiteLink"></a>

```python
def reset_enable_site_link() -> None
```

##### `reset_mtu` <a name="reset_mtu" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.resetMtu"></a>

```python
def reset_mtu() -> None
```

##### `reset_rate_limit` <a name="reset_rate_limit" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.resetRateLimit"></a>

```python
def reset_rate_limit() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_virtual_gateway_id` <a name="reset_virtual_gateway_id" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.resetVirtualGatewayId"></a>

```python
def reset_virtual_gateway_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DirectconnectPrivateVirtualInterface resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.isConstruct"></a>

```python
from cdktn_provider_awscc import directconnect_private_virtual_interface

directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.is_construct(
  x: typing.Any
)
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

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.isTerraformElement"></a>

```python
from cdktn_provider_awscc import directconnect_private_virtual_interface

directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.isTerraformResource"></a>

```python
from cdktn_provider_awscc import directconnect_private_virtual_interface

directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import directconnect_private_virtual_interface

directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DirectconnectPrivateVirtualInterface resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DirectconnectPrivateVirtualInterface to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DirectconnectPrivateVirtualInterface that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/directconnect_private_virtual_interface#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DirectconnectPrivateVirtualInterface to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.bgpPeers">bgp_peers</a></code> | <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersList">DirectconnectPrivateVirtualInterfaceBgpPeersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsList">DirectconnectPrivateVirtualInterfaceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.virtualInterfaceArn">virtual_interface_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.virtualInterfaceId">virtual_interface_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.allocatePrivateVirtualInterfaceRoleArnInput">allocate_private_virtual_interface_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.bgpPeersInput">bgp_peers_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeers">DirectconnectPrivateVirtualInterfaceBgpPeers</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.connectionIdInput">connection_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.directConnectGatewayIdInput">direct_connect_gateway_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.enableSiteLinkInput">enable_site_link_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.mtuInput">mtu_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.rateLimitInput">rate_limit_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTags">DirectconnectPrivateVirtualInterfaceTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.virtualGatewayIdInput">virtual_gateway_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.virtualInterfaceNameInput">virtual_interface_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.vlanInput">vlan_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.allocatePrivateVirtualInterfaceRoleArn">allocate_private_virtual_interface_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.connectionId">connection_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.directConnectGatewayId">direct_connect_gateway_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.enableSiteLink">enable_site_link</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.mtu">mtu</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.rateLimit">rate_limit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.virtualGatewayId">virtual_gateway_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.virtualInterfaceName">virtual_interface_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.vlan">vlan</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `bgp_peers`<sup>Required</sup> <a name="bgp_peers" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.bgpPeers"></a>

```python
bgp_peers: DirectconnectPrivateVirtualInterfaceBgpPeersList
```

- *Type:* <a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersList">DirectconnectPrivateVirtualInterfaceBgpPeersList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.tags"></a>

```python
tags: DirectconnectPrivateVirtualInterfaceTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsList">DirectconnectPrivateVirtualInterfaceTagsList</a>

---

##### `virtual_interface_arn`<sup>Required</sup> <a name="virtual_interface_arn" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.virtualInterfaceArn"></a>

```python
virtual_interface_arn: str
```

- *Type:* str

---

##### `virtual_interface_id`<sup>Required</sup> <a name="virtual_interface_id" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.virtualInterfaceId"></a>

```python
virtual_interface_id: str
```

- *Type:* str

---

##### `allocate_private_virtual_interface_role_arn_input`<sup>Optional</sup> <a name="allocate_private_virtual_interface_role_arn_input" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.allocatePrivateVirtualInterfaceRoleArnInput"></a>

```python
allocate_private_virtual_interface_role_arn_input: str
```

- *Type:* str

---

##### `bgp_peers_input`<sup>Optional</sup> <a name="bgp_peers_input" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.bgpPeersInput"></a>

```python
bgp_peers_input: IResolvable | typing.List[DirectconnectPrivateVirtualInterfaceBgpPeers]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeers">DirectconnectPrivateVirtualInterfaceBgpPeers</a>]

---

##### `connection_id_input`<sup>Optional</sup> <a name="connection_id_input" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.connectionIdInput"></a>

```python
connection_id_input: str
```

- *Type:* str

---

##### `direct_connect_gateway_id_input`<sup>Optional</sup> <a name="direct_connect_gateway_id_input" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.directConnectGatewayIdInput"></a>

```python
direct_connect_gateway_id_input: str
```

- *Type:* str

---

##### `enable_site_link_input`<sup>Optional</sup> <a name="enable_site_link_input" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.enableSiteLinkInput"></a>

```python
enable_site_link_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `mtu_input`<sup>Optional</sup> <a name="mtu_input" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.mtuInput"></a>

```python
mtu_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `rate_limit_input`<sup>Optional</sup> <a name="rate_limit_input" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.rateLimitInput"></a>

```python
rate_limit_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[DirectconnectPrivateVirtualInterfaceTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTags">DirectconnectPrivateVirtualInterfaceTags</a>]

---

##### `virtual_gateway_id_input`<sup>Optional</sup> <a name="virtual_gateway_id_input" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.virtualGatewayIdInput"></a>

```python
virtual_gateway_id_input: str
```

- *Type:* str

---

##### `virtual_interface_name_input`<sup>Optional</sup> <a name="virtual_interface_name_input" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.virtualInterfaceNameInput"></a>

```python
virtual_interface_name_input: str
```

- *Type:* str

---

##### `vlan_input`<sup>Optional</sup> <a name="vlan_input" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.vlanInput"></a>

```python
vlan_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `allocate_private_virtual_interface_role_arn`<sup>Required</sup> <a name="allocate_private_virtual_interface_role_arn" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.allocatePrivateVirtualInterfaceRoleArn"></a>

```python
allocate_private_virtual_interface_role_arn: str
```

- *Type:* str

---

##### `connection_id`<sup>Required</sup> <a name="connection_id" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.connectionId"></a>

```python
connection_id: str
```

- *Type:* str

---

##### `direct_connect_gateway_id`<sup>Required</sup> <a name="direct_connect_gateway_id" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.directConnectGatewayId"></a>

```python
direct_connect_gateway_id: str
```

- *Type:* str

---

##### `enable_site_link`<sup>Required</sup> <a name="enable_site_link" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.enableSiteLink"></a>

```python
enable_site_link: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `mtu`<sup>Required</sup> <a name="mtu" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.mtu"></a>

```python
mtu: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `rate_limit`<sup>Required</sup> <a name="rate_limit" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.rateLimit"></a>

```python
rate_limit: str
```

- *Type:* str

---

##### `virtual_gateway_id`<sup>Required</sup> <a name="virtual_gateway_id" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.virtualGatewayId"></a>

```python
virtual_gateway_id: str
```

- *Type:* str

---

##### `virtual_interface_name`<sup>Required</sup> <a name="virtual_interface_name" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.virtualInterfaceName"></a>

```python
virtual_interface_name: str
```

- *Type:* str

---

##### `vlan`<sup>Required</sup> <a name="vlan" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.vlan"></a>

```python
vlan: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DirectconnectPrivateVirtualInterfaceBgpPeers <a name="DirectconnectPrivateVirtualInterfaceBgpPeers" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeers.Initializer"></a>

```python
from cdktn_provider_awscc import directconnect_private_virtual_interface

directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeers(
  address_family: str,
  asn: str,
  amazon_address: str = None,
  auth_key: str = None,
  bgp_peer_id: str = None,
  customer_address: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeers.property.addressFamily">address_family</a></code> | <code>str</code> | The address family for the BGP peer. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeers.property.asn">asn</a></code> | <code>str</code> | The autonomous system (AS) number for Border Gateway Protocol (BGP) configuration. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeers.property.amazonAddress">amazon_address</a></code> | <code>str</code> | The IP address assigned to the Amazon interface. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeers.property.authKey">auth_key</a></code> | <code>str</code> | The authentication key for BGP configuration. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeers.property.bgpPeerId">bgp_peer_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/directconnect_private_virtual_interface#bgp_peer_id DirectconnectPrivateVirtualInterface#bgp_peer_id}. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeers.property.customerAddress">customer_address</a></code> | <code>str</code> | The IP address assigned to the customer interface. |

---

##### `address_family`<sup>Required</sup> <a name="address_family" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeers.property.addressFamily"></a>

```python
address_family: str
```

- *Type:* str

The address family for the BGP peer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/directconnect_private_virtual_interface#address_family DirectconnectPrivateVirtualInterface#address_family}

---

##### `asn`<sup>Required</sup> <a name="asn" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeers.property.asn"></a>

```python
asn: str
```

- *Type:* str

The autonomous system (AS) number for Border Gateway Protocol (BGP) configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/directconnect_private_virtual_interface#asn DirectconnectPrivateVirtualInterface#asn}

---

##### `amazon_address`<sup>Optional</sup> <a name="amazon_address" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeers.property.amazonAddress"></a>

```python
amazon_address: str
```

- *Type:* str

The IP address assigned to the Amazon interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/directconnect_private_virtual_interface#amazon_address DirectconnectPrivateVirtualInterface#amazon_address}

---

##### `auth_key`<sup>Optional</sup> <a name="auth_key" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeers.property.authKey"></a>

```python
auth_key: str
```

- *Type:* str

The authentication key for BGP configuration.

This string has a minimum length of 6 characters and and a maximum length of 80 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/directconnect_private_virtual_interface#auth_key DirectconnectPrivateVirtualInterface#auth_key}

---

##### `bgp_peer_id`<sup>Optional</sup> <a name="bgp_peer_id" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeers.property.bgpPeerId"></a>

```python
bgp_peer_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/directconnect_private_virtual_interface#bgp_peer_id DirectconnectPrivateVirtualInterface#bgp_peer_id}.

---

##### `customer_address`<sup>Optional</sup> <a name="customer_address" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeers.property.customerAddress"></a>

```python
customer_address: str
```

- *Type:* str

The IP address assigned to the customer interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/directconnect_private_virtual_interface#customer_address DirectconnectPrivateVirtualInterface#customer_address}

---

### DirectconnectPrivateVirtualInterfaceConfig <a name="DirectconnectPrivateVirtualInterfaceConfig" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceConfig.Initializer"></a>

```python
from cdktn_provider_awscc import directconnect_private_virtual_interface

directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  bgp_peers: IResolvable | typing.List[DirectconnectPrivateVirtualInterfaceBgpPeers],
  connection_id: str,
  virtual_interface_name: str,
  vlan: typing.Union[int, float],
  allocate_private_virtual_interface_role_arn: str = None,
  direct_connect_gateway_id: str = None,
  enable_site_link: bool | IResolvable = None,
  mtu: typing.Union[int, float] = None,
  rate_limit: str = None,
  tags: IResolvable | typing.List[DirectconnectPrivateVirtualInterfaceTags] = None,
  virtual_gateway_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceConfig.property.bgpPeers">bgp_peers</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeers">DirectconnectPrivateVirtualInterfaceBgpPeers</a>]</code> | The BGP peers configured on this virtual interface. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceConfig.property.connectionId">connection_id</a></code> | <code>str</code> | The ID or ARN of the connection or LAG. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceConfig.property.virtualInterfaceName">virtual_interface_name</a></code> | <code>str</code> | The name of the virtual interface assigned by the customer network. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceConfig.property.vlan">vlan</a></code> | <code>typing.Union[int, float]</code> | The ID of the VLAN. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceConfig.property.allocatePrivateVirtualInterfaceRoleArn">allocate_private_virtual_interface_role_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the role to allocate the private virtual interface. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceConfig.property.directConnectGatewayId">direct_connect_gateway_id</a></code> | <code>str</code> | The ID or ARN of the Direct Connect gateway. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceConfig.property.enableSiteLink">enable_site_link</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates whether to enable or disable SiteLink. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceConfig.property.mtu">mtu</a></code> | <code>typing.Union[int, float]</code> | The maximum transmission unit (MTU), in bytes. The supported values are 1500 and 9001. The default value is 1500. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceConfig.property.rateLimit">rate_limit</a></code> | <code>str</code> | The rate limit (bandwidth allocation) for the virtual interface. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTags">DirectconnectPrivateVirtualInterfaceTags</a>]</code> | The tags associated with the private virtual interface. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceConfig.property.virtualGatewayId">virtual_gateway_id</a></code> | <code>str</code> | The ID or ARN of the virtual private gateway. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `bgp_peers`<sup>Required</sup> <a name="bgp_peers" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceConfig.property.bgpPeers"></a>

```python
bgp_peers: IResolvable | typing.List[DirectconnectPrivateVirtualInterfaceBgpPeers]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeers">DirectconnectPrivateVirtualInterfaceBgpPeers</a>]

The BGP peers configured on this virtual interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/directconnect_private_virtual_interface#bgp_peers DirectconnectPrivateVirtualInterface#bgp_peers}

---

##### `connection_id`<sup>Required</sup> <a name="connection_id" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceConfig.property.connectionId"></a>

```python
connection_id: str
```

- *Type:* str

The ID or ARN of the connection or LAG.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/directconnect_private_virtual_interface#connection_id DirectconnectPrivateVirtualInterface#connection_id}

---

##### `virtual_interface_name`<sup>Required</sup> <a name="virtual_interface_name" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceConfig.property.virtualInterfaceName"></a>

```python
virtual_interface_name: str
```

- *Type:* str

The name of the virtual interface assigned by the customer network.

The name has a maximum of 100 characters. The following are valid characters: a-z, 0-9 and a hyphen (-).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/directconnect_private_virtual_interface#virtual_interface_name DirectconnectPrivateVirtualInterface#virtual_interface_name}

---

##### `vlan`<sup>Required</sup> <a name="vlan" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceConfig.property.vlan"></a>

```python
vlan: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The ID of the VLAN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/directconnect_private_virtual_interface#vlan DirectconnectPrivateVirtualInterface#vlan}

---

##### `allocate_private_virtual_interface_role_arn`<sup>Optional</sup> <a name="allocate_private_virtual_interface_role_arn" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceConfig.property.allocatePrivateVirtualInterfaceRoleArn"></a>

```python
allocate_private_virtual_interface_role_arn: str
```

- *Type:* str

The Amazon Resource Name (ARN) of the role to allocate the private virtual interface.

Needs directconnect:AllocatePrivateVirtualInterface permissions and tag permissions if applicable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/directconnect_private_virtual_interface#allocate_private_virtual_interface_role_arn DirectconnectPrivateVirtualInterface#allocate_private_virtual_interface_role_arn}

---

##### `direct_connect_gateway_id`<sup>Optional</sup> <a name="direct_connect_gateway_id" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceConfig.property.directConnectGatewayId"></a>

```python
direct_connect_gateway_id: str
```

- *Type:* str

The ID or ARN of the Direct Connect gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/directconnect_private_virtual_interface#direct_connect_gateway_id DirectconnectPrivateVirtualInterface#direct_connect_gateway_id}

---

##### `enable_site_link`<sup>Optional</sup> <a name="enable_site_link" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceConfig.property.enableSiteLink"></a>

```python
enable_site_link: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Indicates whether to enable or disable SiteLink.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/directconnect_private_virtual_interface#enable_site_link DirectconnectPrivateVirtualInterface#enable_site_link}

---

##### `mtu`<sup>Optional</sup> <a name="mtu" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceConfig.property.mtu"></a>

```python
mtu: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum transmission unit (MTU), in bytes. The supported values are 1500 and 9001. The default value is 1500.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/directconnect_private_virtual_interface#mtu DirectconnectPrivateVirtualInterface#mtu}

---

##### `rate_limit`<sup>Optional</sup> <a name="rate_limit" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceConfig.property.rateLimit"></a>

```python
rate_limit: str
```

- *Type:* str

The rate limit (bandwidth allocation) for the virtual interface.

The value must be one of the supported bandwidth values (e.g., 50Mbps, 1Gbps, 10Gbps) and cannot exceed the bandwidth of the parent connection or LAG.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/directconnect_private_virtual_interface#rate_limit DirectconnectPrivateVirtualInterface#rate_limit}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[DirectconnectPrivateVirtualInterfaceTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTags">DirectconnectPrivateVirtualInterfaceTags</a>]

The tags associated with the private virtual interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/directconnect_private_virtual_interface#tags DirectconnectPrivateVirtualInterface#tags}

---

##### `virtual_gateway_id`<sup>Optional</sup> <a name="virtual_gateway_id" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceConfig.property.virtualGatewayId"></a>

```python
virtual_gateway_id: str
```

- *Type:* str

The ID or ARN of the virtual private gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/directconnect_private_virtual_interface#virtual_gateway_id DirectconnectPrivateVirtualInterface#virtual_gateway_id}

---

### DirectconnectPrivateVirtualInterfaceTags <a name="DirectconnectPrivateVirtualInterfaceTags" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTags.Initializer"></a>

```python
from cdktn_provider_awscc import directconnect_private_virtual_interface

directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTags.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTags.property.value">value</a></code> | <code>str</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/directconnect_private_virtual_interface#key DirectconnectPrivateVirtualInterface#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/directconnect_private_virtual_interface#value DirectconnectPrivateVirtualInterface#value}

---

## Classes <a name="Classes" id="Classes"></a>

### DirectconnectPrivateVirtualInterfaceBgpPeersList <a name="DirectconnectPrivateVirtualInterfaceBgpPeersList" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersList.Initializer"></a>

```python
from cdktn_provider_awscc import directconnect_private_virtual_interface

directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeers">DirectconnectPrivateVirtualInterfaceBgpPeers</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DirectconnectPrivateVirtualInterfaceBgpPeers]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeers">DirectconnectPrivateVirtualInterfaceBgpPeers</a>]

---


### DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference <a name="DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import directconnect_private_virtual_interface

directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.resetAmazonAddress">reset_amazon_address</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.resetAuthKey">reset_auth_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.resetBgpPeerId">reset_bgp_peer_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.resetCustomerAddress">reset_customer_address</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_amazon_address` <a name="reset_amazon_address" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.resetAmazonAddress"></a>

```python
def reset_amazon_address() -> None
```

##### `reset_auth_key` <a name="reset_auth_key" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.resetAuthKey"></a>

```python
def reset_auth_key() -> None
```

##### `reset_bgp_peer_id` <a name="reset_bgp_peer_id" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.resetBgpPeerId"></a>

```python
def reset_bgp_peer_id() -> None
```

##### `reset_customer_address` <a name="reset_customer_address" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.resetCustomerAddress"></a>

```python
def reset_customer_address() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.property.addressFamilyInput">address_family_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.property.amazonAddressInput">amazon_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.property.asnInput">asn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.property.authKeyInput">auth_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.property.bgpPeerIdInput">bgp_peer_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.property.customerAddressInput">customer_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.property.addressFamily">address_family</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.property.amazonAddress">amazon_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.property.asn">asn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.property.authKey">auth_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.property.bgpPeerId">bgp_peer_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.property.customerAddress">customer_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeers">DirectconnectPrivateVirtualInterfaceBgpPeers</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `address_family_input`<sup>Optional</sup> <a name="address_family_input" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.property.addressFamilyInput"></a>

```python
address_family_input: str
```

- *Type:* str

---

##### `amazon_address_input`<sup>Optional</sup> <a name="amazon_address_input" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.property.amazonAddressInput"></a>

```python
amazon_address_input: str
```

- *Type:* str

---

##### `asn_input`<sup>Optional</sup> <a name="asn_input" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.property.asnInput"></a>

```python
asn_input: str
```

- *Type:* str

---

##### `auth_key_input`<sup>Optional</sup> <a name="auth_key_input" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.property.authKeyInput"></a>

```python
auth_key_input: str
```

- *Type:* str

---

##### `bgp_peer_id_input`<sup>Optional</sup> <a name="bgp_peer_id_input" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.property.bgpPeerIdInput"></a>

```python
bgp_peer_id_input: str
```

- *Type:* str

---

##### `customer_address_input`<sup>Optional</sup> <a name="customer_address_input" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.property.customerAddressInput"></a>

```python
customer_address_input: str
```

- *Type:* str

---

##### `address_family`<sup>Required</sup> <a name="address_family" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.property.addressFamily"></a>

```python
address_family: str
```

- *Type:* str

---

##### `amazon_address`<sup>Required</sup> <a name="amazon_address" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.property.amazonAddress"></a>

```python
amazon_address: str
```

- *Type:* str

---

##### `asn`<sup>Required</sup> <a name="asn" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.property.asn"></a>

```python
asn: str
```

- *Type:* str

---

##### `auth_key`<sup>Required</sup> <a name="auth_key" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.property.authKey"></a>

```python
auth_key: str
```

- *Type:* str

---

##### `bgp_peer_id`<sup>Required</sup> <a name="bgp_peer_id" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.property.bgpPeerId"></a>

```python
bgp_peer_id: str
```

- *Type:* str

---

##### `customer_address`<sup>Required</sup> <a name="customer_address" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.property.customerAddress"></a>

```python
customer_address: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DirectconnectPrivateVirtualInterfaceBgpPeers
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeers">DirectconnectPrivateVirtualInterfaceBgpPeers</a>

---


### DirectconnectPrivateVirtualInterfaceTagsList <a name="DirectconnectPrivateVirtualInterfaceTagsList" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import directconnect_private_virtual_interface

directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DirectconnectPrivateVirtualInterfaceTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTags">DirectconnectPrivateVirtualInterfaceTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DirectconnectPrivateVirtualInterfaceTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTags">DirectconnectPrivateVirtualInterfaceTags</a>]

---


### DirectconnectPrivateVirtualInterfaceTagsOutputReference <a name="DirectconnectPrivateVirtualInterfaceTagsOutputReference" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import directconnect_private_virtual_interface

directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTags">DirectconnectPrivateVirtualInterfaceTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DirectconnectPrivateVirtualInterfaceTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTags">DirectconnectPrivateVirtualInterfaceTags</a>

---



