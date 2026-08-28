# `ec2VpnConnection` Submodule <a name="`ec2VpnConnection` Submodule" id="@cdktn/provider-awscc.ec2VpnConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2VpnConnection <a name="Ec2VpnConnection" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_vpn_connection awscc_ec2_vpn_connection}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_vpn_connection

ec2VpnConnection.Ec2VpnConnection(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  customer_gateway_id: str,
  type: str,
  enable_acceleration: bool | IResolvable = None,
  local_ipv4_network_cidr: str = None,
  local_ipv6_network_cidr: str = None,
  outside_ip_address_type: str = None,
  pre_shared_key_storage: str = None,
  remote_ipv4_network_cidr: str = None,
  remote_ipv6_network_cidr: str = None,
  static_routes_only: bool | IResolvable = None,
  tags: IResolvable | typing.List[Ec2VpnConnectionTags] = None,
  transit_gateway_id: str = None,
  transport_transit_gateway_attachment_id: str = None,
  tunnel_bandwidth: str = None,
  tunnel_inside_ip_version: str = None,
  vpn_concentrator_id: str = None,
  vpn_gateway_id: str = None,
  vpn_tunnel_options_specifications: IResolvable | typing.List[Ec2VpnConnectionVpnTunnelOptionsSpecifications] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.Initializer.parameter.customerGatewayId">customer_gateway_id</a></code> | <code>str</code> | The ID of the customer gateway at your end of the VPN connection. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.Initializer.parameter.type">type</a></code> | <code>str</code> | The type of VPN connection. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.Initializer.parameter.enableAcceleration">enable_acceleration</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicate whether to enable acceleration for the VPN connection.  Default: ``false``. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.Initializer.parameter.localIpv4NetworkCidr">local_ipv4_network_cidr</a></code> | <code>str</code> | The IPv4 CIDR on the customer gateway (on-premises) side of the VPN connection.  Default: ``0.0.0.0/0``. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.Initializer.parameter.localIpv6NetworkCidr">local_ipv6_network_cidr</a></code> | <code>str</code> | The IPv6 CIDR on the customer gateway (on-premises) side of the VPN connection.  Default: ``::/0``. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.Initializer.parameter.outsideIpAddressType">outside_ip_address_type</a></code> | <code>str</code> | The type of IP address assigned to the outside interface of the customer gateway device. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.Initializer.parameter.preSharedKeyStorage">pre_shared_key_storage</a></code> | <code>str</code> | Specifies the storage mode for the pre-shared key (PSK). |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.Initializer.parameter.remoteIpv4NetworkCidr">remote_ipv4_network_cidr</a></code> | <code>str</code> | The IPv4 CIDR on the AWS side of the VPN connection.  Default: ``0.0.0.0/0``. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.Initializer.parameter.remoteIpv6NetworkCidr">remote_ipv6_network_cidr</a></code> | <code>str</code> | The IPv6 CIDR on the AWS side of the VPN connection.  Default: ``::/0``. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.Initializer.parameter.staticRoutesOnly">static_routes_only</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates whether the VPN connection uses static routes only. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTags">Ec2VpnConnectionTags</a>]</code> | Any tags assigned to the VPN connection. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.Initializer.parameter.transitGatewayId">transit_gateway_id</a></code> | <code>str</code> | The ID of the transit gateway associated with the VPN connection. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.Initializer.parameter.transportTransitGatewayAttachmentId">transport_transit_gateway_attachment_id</a></code> | <code>str</code> | The transit gateway attachment ID to use for the VPN tunnel.  Required if ``OutsideIpAddressType`` is set to ``PrivateIpv4``. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.Initializer.parameter.tunnelBandwidth">tunnel_bandwidth</a></code> | <code>str</code> | The desired bandwidth specification for the VPN tunnel, used when creating or modifying VPN connection options to set the tunnel's throughput capacity. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.Initializer.parameter.tunnelInsideIpVersion">tunnel_inside_ip_version</a></code> | <code>str</code> | Indicate whether the VPN tunnels process IPv4 or IPv6 traffic.  Default: ``ipv4``. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.Initializer.parameter.vpnConcentratorId">vpn_concentrator_id</a></code> | <code>str</code> | The ID of the VPN concentrator to associate with the VPN connection. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.Initializer.parameter.vpnGatewayId">vpn_gateway_id</a></code> | <code>str</code> | The ID of the virtual private gateway at the AWS side of the VPN connection. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.Initializer.parameter.vpnTunnelOptionsSpecifications">vpn_tunnel_options_specifications</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecifications">Ec2VpnConnectionVpnTunnelOptionsSpecifications</a>]</code> | The tunnel options for the VPN connection. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `customer_gateway_id`<sup>Required</sup> <a name="customer_gateway_id" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.Initializer.parameter.customerGatewayId"></a>

- *Type:* str

The ID of the customer gateway at your end of the VPN connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_vpn_connection#customer_gateway_id Ec2VpnConnection#customer_gateway_id}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.Initializer.parameter.type"></a>

- *Type:* str

The type of VPN connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_vpn_connection#type Ec2VpnConnection#type}

---

##### `enable_acceleration`<sup>Optional</sup> <a name="enable_acceleration" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.Initializer.parameter.enableAcceleration"></a>

- *Type:* bool | cdktn.IResolvable

Indicate whether to enable acceleration for the VPN connection.  Default: ``false``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_vpn_connection#enable_acceleration Ec2VpnConnection#enable_acceleration}

---

##### `local_ipv4_network_cidr`<sup>Optional</sup> <a name="local_ipv4_network_cidr" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.Initializer.parameter.localIpv4NetworkCidr"></a>

- *Type:* str

The IPv4 CIDR on the customer gateway (on-premises) side of the VPN connection.  Default: ``0.0.0.0/0``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_vpn_connection#local_ipv_4_network_cidr Ec2VpnConnection#local_ipv_4_network_cidr}

---

##### `local_ipv6_network_cidr`<sup>Optional</sup> <a name="local_ipv6_network_cidr" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.Initializer.parameter.localIpv6NetworkCidr"></a>

- *Type:* str

The IPv6 CIDR on the customer gateway (on-premises) side of the VPN connection.  Default: ``::/0``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_vpn_connection#local_ipv_6_network_cidr Ec2VpnConnection#local_ipv_6_network_cidr}

---

##### `outside_ip_address_type`<sup>Optional</sup> <a name="outside_ip_address_type" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.Initializer.parameter.outsideIpAddressType"></a>

- *Type:* str

The type of IP address assigned to the outside interface of the customer gateway device.

Valid values: `PrivateIpv4` | `PublicIpv4` | `Ipv6`
Default: `PublicIpv4`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_vpn_connection#outside_ip_address_type Ec2VpnConnection#outside_ip_address_type}

---

##### `pre_shared_key_storage`<sup>Optional</sup> <a name="pre_shared_key_storage" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.Initializer.parameter.preSharedKeyStorage"></a>

- *Type:* str

Specifies the storage mode for the pre-shared key (PSK).

Valid values are `Standard` (stored in the S2Slong service) or `SecretsManager` (stored in AWS Secrets Manager).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_vpn_connection#pre_shared_key_storage Ec2VpnConnection#pre_shared_key_storage}

---

##### `remote_ipv4_network_cidr`<sup>Optional</sup> <a name="remote_ipv4_network_cidr" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.Initializer.parameter.remoteIpv4NetworkCidr"></a>

- *Type:* str

The IPv4 CIDR on the AWS side of the VPN connection.  Default: ``0.0.0.0/0``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_vpn_connection#remote_ipv_4_network_cidr Ec2VpnConnection#remote_ipv_4_network_cidr}

---

##### `remote_ipv6_network_cidr`<sup>Optional</sup> <a name="remote_ipv6_network_cidr" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.Initializer.parameter.remoteIpv6NetworkCidr"></a>

- *Type:* str

The IPv6 CIDR on the AWS side of the VPN connection.  Default: ``::/0``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_vpn_connection#remote_ipv_6_network_cidr Ec2VpnConnection#remote_ipv_6_network_cidr}

---

##### `static_routes_only`<sup>Optional</sup> <a name="static_routes_only" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.Initializer.parameter.staticRoutesOnly"></a>

- *Type:* bool | cdktn.IResolvable

Indicates whether the VPN connection uses static routes only.

Static routes must be used for devices that don't support BGP.
If you are creating a VPN connection for a device that does not support Border Gateway Protocol (BGP), you must specify `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_vpn_connection#static_routes_only Ec2VpnConnection#static_routes_only}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTags">Ec2VpnConnectionTags</a>]

Any tags assigned to the VPN connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_vpn_connection#tags Ec2VpnConnection#tags}

---

##### `transit_gateway_id`<sup>Optional</sup> <a name="transit_gateway_id" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.Initializer.parameter.transitGatewayId"></a>

- *Type:* str

The ID of the transit gateway associated with the VPN connection.

You must specify either `TransitGatewayId` or `VpnGatewayId`, but not both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_vpn_connection#transit_gateway_id Ec2VpnConnection#transit_gateway_id}

---

##### `transport_transit_gateway_attachment_id`<sup>Optional</sup> <a name="transport_transit_gateway_attachment_id" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.Initializer.parameter.transportTransitGatewayAttachmentId"></a>

- *Type:* str

The transit gateway attachment ID to use for the VPN tunnel.  Required if ``OutsideIpAddressType`` is set to ``PrivateIpv4``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_vpn_connection#transport_transit_gateway_attachment_id Ec2VpnConnection#transport_transit_gateway_attachment_id}

---

##### `tunnel_bandwidth`<sup>Optional</sup> <a name="tunnel_bandwidth" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.Initializer.parameter.tunnelBandwidth"></a>

- *Type:* str

The desired bandwidth specification for the VPN tunnel, used when creating or modifying VPN connection options to set the tunnel's throughput capacity.

`standard` supports up to 1.25 Gbps per tunnel, while `large` supports up to 5 Gbps per tunnel. The default value is `standard`. Existing VPN connections without a bandwidth setting will automatically default to `standard`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_vpn_connection#tunnel_bandwidth Ec2VpnConnection#tunnel_bandwidth}

---

##### `tunnel_inside_ip_version`<sup>Optional</sup> <a name="tunnel_inside_ip_version" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.Initializer.parameter.tunnelInsideIpVersion"></a>

- *Type:* str

Indicate whether the VPN tunnels process IPv4 or IPv6 traffic.  Default: ``ipv4``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_vpn_connection#tunnel_inside_ip_version Ec2VpnConnection#tunnel_inside_ip_version}

---

##### `vpn_concentrator_id`<sup>Optional</sup> <a name="vpn_concentrator_id" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.Initializer.parameter.vpnConcentratorId"></a>

- *Type:* str

The ID of the VPN concentrator to associate with the VPN connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_vpn_connection#vpn_concentrator_id Ec2VpnConnection#vpn_concentrator_id}

---

##### `vpn_gateway_id`<sup>Optional</sup> <a name="vpn_gateway_id" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.Initializer.parameter.vpnGatewayId"></a>

- *Type:* str

The ID of the virtual private gateway at the AWS side of the VPN connection.

You must specify either `TransitGatewayId` or `VpnGatewayId`, but not both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_vpn_connection#vpn_gateway_id Ec2VpnConnection#vpn_gateway_id}

---

##### `vpn_tunnel_options_specifications`<sup>Optional</sup> <a name="vpn_tunnel_options_specifications" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.Initializer.parameter.vpnTunnelOptionsSpecifications"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecifications">Ec2VpnConnectionVpnTunnelOptionsSpecifications</a>]

The tunnel options for the VPN connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_vpn_connection#vpn_tunnel_options_specifications Ec2VpnConnection#vpn_tunnel_options_specifications}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.putVpnTunnelOptionsSpecifications">put_vpn_tunnel_options_specifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.resetEnableAcceleration">reset_enable_acceleration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.resetLocalIpv4NetworkCidr">reset_local_ipv4_network_cidr</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.resetLocalIpv6NetworkCidr">reset_local_ipv6_network_cidr</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.resetOutsideIpAddressType">reset_outside_ip_address_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.resetPreSharedKeyStorage">reset_pre_shared_key_storage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.resetRemoteIpv4NetworkCidr">reset_remote_ipv4_network_cidr</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.resetRemoteIpv6NetworkCidr">reset_remote_ipv6_network_cidr</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.resetStaticRoutesOnly">reset_static_routes_only</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.resetTransitGatewayId">reset_transit_gateway_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.resetTransportTransitGatewayAttachmentId">reset_transport_transit_gateway_attachment_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.resetTunnelBandwidth">reset_tunnel_bandwidth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.resetTunnelInsideIpVersion">reset_tunnel_inside_ip_version</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.resetVpnConcentratorId">reset_vpn_concentrator_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.resetVpnGatewayId">reset_vpn_gateway_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.resetVpnTunnelOptionsSpecifications">reset_vpn_tunnel_options_specifications</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[Ec2VpnConnectionTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTags">Ec2VpnConnectionTags</a>]

---

##### `put_vpn_tunnel_options_specifications` <a name="put_vpn_tunnel_options_specifications" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.putVpnTunnelOptionsSpecifications"></a>

```python
def put_vpn_tunnel_options_specifications(
  value: IResolvable | typing.List[Ec2VpnConnectionVpnTunnelOptionsSpecifications]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.putVpnTunnelOptionsSpecifications.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecifications">Ec2VpnConnectionVpnTunnelOptionsSpecifications</a>]

---

##### `reset_enable_acceleration` <a name="reset_enable_acceleration" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.resetEnableAcceleration"></a>

```python
def reset_enable_acceleration() -> None
```

##### `reset_local_ipv4_network_cidr` <a name="reset_local_ipv4_network_cidr" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.resetLocalIpv4NetworkCidr"></a>

```python
def reset_local_ipv4_network_cidr() -> None
```

##### `reset_local_ipv6_network_cidr` <a name="reset_local_ipv6_network_cidr" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.resetLocalIpv6NetworkCidr"></a>

```python
def reset_local_ipv6_network_cidr() -> None
```

##### `reset_outside_ip_address_type` <a name="reset_outside_ip_address_type" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.resetOutsideIpAddressType"></a>

```python
def reset_outside_ip_address_type() -> None
```

##### `reset_pre_shared_key_storage` <a name="reset_pre_shared_key_storage" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.resetPreSharedKeyStorage"></a>

```python
def reset_pre_shared_key_storage() -> None
```

##### `reset_remote_ipv4_network_cidr` <a name="reset_remote_ipv4_network_cidr" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.resetRemoteIpv4NetworkCidr"></a>

```python
def reset_remote_ipv4_network_cidr() -> None
```

##### `reset_remote_ipv6_network_cidr` <a name="reset_remote_ipv6_network_cidr" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.resetRemoteIpv6NetworkCidr"></a>

```python
def reset_remote_ipv6_network_cidr() -> None
```

##### `reset_static_routes_only` <a name="reset_static_routes_only" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.resetStaticRoutesOnly"></a>

```python
def reset_static_routes_only() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_transit_gateway_id` <a name="reset_transit_gateway_id" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.resetTransitGatewayId"></a>

```python
def reset_transit_gateway_id() -> None
```

##### `reset_transport_transit_gateway_attachment_id` <a name="reset_transport_transit_gateway_attachment_id" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.resetTransportTransitGatewayAttachmentId"></a>

```python
def reset_transport_transit_gateway_attachment_id() -> None
```

##### `reset_tunnel_bandwidth` <a name="reset_tunnel_bandwidth" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.resetTunnelBandwidth"></a>

```python
def reset_tunnel_bandwidth() -> None
```

##### `reset_tunnel_inside_ip_version` <a name="reset_tunnel_inside_ip_version" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.resetTunnelInsideIpVersion"></a>

```python
def reset_tunnel_inside_ip_version() -> None
```

##### `reset_vpn_concentrator_id` <a name="reset_vpn_concentrator_id" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.resetVpnConcentratorId"></a>

```python
def reset_vpn_concentrator_id() -> None
```

##### `reset_vpn_gateway_id` <a name="reset_vpn_gateway_id" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.resetVpnGatewayId"></a>

```python
def reset_vpn_gateway_id() -> None
```

##### `reset_vpn_tunnel_options_specifications` <a name="reset_vpn_tunnel_options_specifications" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.resetVpnTunnelOptionsSpecifications"></a>

```python
def reset_vpn_tunnel_options_specifications() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a Ec2VpnConnection resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.isConstruct"></a>

```python
from cdktn_provider_awscc import ec2_vpn_connection

ec2VpnConnection.Ec2VpnConnection.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.isTerraformElement"></a>

```python
from cdktn_provider_awscc import ec2_vpn_connection

ec2VpnConnection.Ec2VpnConnection.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.isTerraformResource"></a>

```python
from cdktn_provider_awscc import ec2_vpn_connection

ec2VpnConnection.Ec2VpnConnection.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import ec2_vpn_connection

ec2VpnConnection.Ec2VpnConnection.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a Ec2VpnConnection resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Ec2VpnConnection to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Ec2VpnConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_vpn_connection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Ec2VpnConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsList">Ec2VpnConnectionTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.vpnConnectionId">vpn_connection_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.vpnTunnelOptionsSpecifications">vpn_tunnel_options_specifications</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsList">Ec2VpnConnectionVpnTunnelOptionsSpecificationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.customerGatewayIdInput">customer_gateway_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.enableAccelerationInput">enable_acceleration_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.localIpv4NetworkCidrInput">local_ipv4_network_cidr_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.localIpv6NetworkCidrInput">local_ipv6_network_cidr_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.outsideIpAddressTypeInput">outside_ip_address_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.preSharedKeyStorageInput">pre_shared_key_storage_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.remoteIpv4NetworkCidrInput">remote_ipv4_network_cidr_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.remoteIpv6NetworkCidrInput">remote_ipv6_network_cidr_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.staticRoutesOnlyInput">static_routes_only_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTags">Ec2VpnConnectionTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.transitGatewayIdInput">transit_gateway_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.transportTransitGatewayAttachmentIdInput">transport_transit_gateway_attachment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.tunnelBandwidthInput">tunnel_bandwidth_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.tunnelInsideIpVersionInput">tunnel_inside_ip_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.vpnConcentratorIdInput">vpn_concentrator_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.vpnGatewayIdInput">vpn_gateway_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.vpnTunnelOptionsSpecificationsInput">vpn_tunnel_options_specifications_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecifications">Ec2VpnConnectionVpnTunnelOptionsSpecifications</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.customerGatewayId">customer_gateway_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.enableAcceleration">enable_acceleration</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.localIpv4NetworkCidr">local_ipv4_network_cidr</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.localIpv6NetworkCidr">local_ipv6_network_cidr</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.outsideIpAddressType">outside_ip_address_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.preSharedKeyStorage">pre_shared_key_storage</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.remoteIpv4NetworkCidr">remote_ipv4_network_cidr</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.remoteIpv6NetworkCidr">remote_ipv6_network_cidr</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.staticRoutesOnly">static_routes_only</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.transitGatewayId">transit_gateway_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.transportTransitGatewayAttachmentId">transport_transit_gateway_attachment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.tunnelBandwidth">tunnel_bandwidth</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.tunnelInsideIpVersion">tunnel_inside_ip_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.vpnConcentratorId">vpn_concentrator_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.vpnGatewayId">vpn_gateway_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.tags"></a>

```python
tags: Ec2VpnConnectionTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsList">Ec2VpnConnectionTagsList</a>

---

##### `vpn_connection_id`<sup>Required</sup> <a name="vpn_connection_id" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.vpnConnectionId"></a>

```python
vpn_connection_id: str
```

- *Type:* str

---

##### `vpn_tunnel_options_specifications`<sup>Required</sup> <a name="vpn_tunnel_options_specifications" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.vpnTunnelOptionsSpecifications"></a>

```python
vpn_tunnel_options_specifications: Ec2VpnConnectionVpnTunnelOptionsSpecificationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsList">Ec2VpnConnectionVpnTunnelOptionsSpecificationsList</a>

---

##### `customer_gateway_id_input`<sup>Optional</sup> <a name="customer_gateway_id_input" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.customerGatewayIdInput"></a>

```python
customer_gateway_id_input: str
```

- *Type:* str

---

##### `enable_acceleration_input`<sup>Optional</sup> <a name="enable_acceleration_input" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.enableAccelerationInput"></a>

```python
enable_acceleration_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `local_ipv4_network_cidr_input`<sup>Optional</sup> <a name="local_ipv4_network_cidr_input" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.localIpv4NetworkCidrInput"></a>

```python
local_ipv4_network_cidr_input: str
```

- *Type:* str

---

##### `local_ipv6_network_cidr_input`<sup>Optional</sup> <a name="local_ipv6_network_cidr_input" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.localIpv6NetworkCidrInput"></a>

```python
local_ipv6_network_cidr_input: str
```

- *Type:* str

---

##### `outside_ip_address_type_input`<sup>Optional</sup> <a name="outside_ip_address_type_input" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.outsideIpAddressTypeInput"></a>

```python
outside_ip_address_type_input: str
```

- *Type:* str

---

##### `pre_shared_key_storage_input`<sup>Optional</sup> <a name="pre_shared_key_storage_input" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.preSharedKeyStorageInput"></a>

```python
pre_shared_key_storage_input: str
```

- *Type:* str

---

##### `remote_ipv4_network_cidr_input`<sup>Optional</sup> <a name="remote_ipv4_network_cidr_input" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.remoteIpv4NetworkCidrInput"></a>

```python
remote_ipv4_network_cidr_input: str
```

- *Type:* str

---

##### `remote_ipv6_network_cidr_input`<sup>Optional</sup> <a name="remote_ipv6_network_cidr_input" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.remoteIpv6NetworkCidrInput"></a>

```python
remote_ipv6_network_cidr_input: str
```

- *Type:* str

---

##### `static_routes_only_input`<sup>Optional</sup> <a name="static_routes_only_input" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.staticRoutesOnlyInput"></a>

```python
static_routes_only_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[Ec2VpnConnectionTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTags">Ec2VpnConnectionTags</a>]

---

##### `transit_gateway_id_input`<sup>Optional</sup> <a name="transit_gateway_id_input" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.transitGatewayIdInput"></a>

```python
transit_gateway_id_input: str
```

- *Type:* str

---

##### `transport_transit_gateway_attachment_id_input`<sup>Optional</sup> <a name="transport_transit_gateway_attachment_id_input" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.transportTransitGatewayAttachmentIdInput"></a>

```python
transport_transit_gateway_attachment_id_input: str
```

- *Type:* str

---

##### `tunnel_bandwidth_input`<sup>Optional</sup> <a name="tunnel_bandwidth_input" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.tunnelBandwidthInput"></a>

```python
tunnel_bandwidth_input: str
```

- *Type:* str

---

##### `tunnel_inside_ip_version_input`<sup>Optional</sup> <a name="tunnel_inside_ip_version_input" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.tunnelInsideIpVersionInput"></a>

```python
tunnel_inside_ip_version_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `vpn_concentrator_id_input`<sup>Optional</sup> <a name="vpn_concentrator_id_input" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.vpnConcentratorIdInput"></a>

```python
vpn_concentrator_id_input: str
```

- *Type:* str

---

##### `vpn_gateway_id_input`<sup>Optional</sup> <a name="vpn_gateway_id_input" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.vpnGatewayIdInput"></a>

```python
vpn_gateway_id_input: str
```

- *Type:* str

---

##### `vpn_tunnel_options_specifications_input`<sup>Optional</sup> <a name="vpn_tunnel_options_specifications_input" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.vpnTunnelOptionsSpecificationsInput"></a>

```python
vpn_tunnel_options_specifications_input: IResolvable | typing.List[Ec2VpnConnectionVpnTunnelOptionsSpecifications]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecifications">Ec2VpnConnectionVpnTunnelOptionsSpecifications</a>]

---

##### `customer_gateway_id`<sup>Required</sup> <a name="customer_gateway_id" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.customerGatewayId"></a>

```python
customer_gateway_id: str
```

- *Type:* str

---

##### `enable_acceleration`<sup>Required</sup> <a name="enable_acceleration" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.enableAcceleration"></a>

```python
enable_acceleration: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `local_ipv4_network_cidr`<sup>Required</sup> <a name="local_ipv4_network_cidr" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.localIpv4NetworkCidr"></a>

```python
local_ipv4_network_cidr: str
```

- *Type:* str

---

##### `local_ipv6_network_cidr`<sup>Required</sup> <a name="local_ipv6_network_cidr" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.localIpv6NetworkCidr"></a>

```python
local_ipv6_network_cidr: str
```

- *Type:* str

---

##### `outside_ip_address_type`<sup>Required</sup> <a name="outside_ip_address_type" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.outsideIpAddressType"></a>

```python
outside_ip_address_type: str
```

- *Type:* str

---

##### `pre_shared_key_storage`<sup>Required</sup> <a name="pre_shared_key_storage" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.preSharedKeyStorage"></a>

```python
pre_shared_key_storage: str
```

- *Type:* str

---

##### `remote_ipv4_network_cidr`<sup>Required</sup> <a name="remote_ipv4_network_cidr" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.remoteIpv4NetworkCidr"></a>

```python
remote_ipv4_network_cidr: str
```

- *Type:* str

---

##### `remote_ipv6_network_cidr`<sup>Required</sup> <a name="remote_ipv6_network_cidr" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.remoteIpv6NetworkCidr"></a>

```python
remote_ipv6_network_cidr: str
```

- *Type:* str

---

##### `static_routes_only`<sup>Required</sup> <a name="static_routes_only" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.staticRoutesOnly"></a>

```python
static_routes_only: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `transit_gateway_id`<sup>Required</sup> <a name="transit_gateway_id" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.transitGatewayId"></a>

```python
transit_gateway_id: str
```

- *Type:* str

---

##### `transport_transit_gateway_attachment_id`<sup>Required</sup> <a name="transport_transit_gateway_attachment_id" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.transportTransitGatewayAttachmentId"></a>

```python
transport_transit_gateway_attachment_id: str
```

- *Type:* str

---

##### `tunnel_bandwidth`<sup>Required</sup> <a name="tunnel_bandwidth" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.tunnelBandwidth"></a>

```python
tunnel_bandwidth: str
```

- *Type:* str

---

##### `tunnel_inside_ip_version`<sup>Required</sup> <a name="tunnel_inside_ip_version" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.tunnelInsideIpVersion"></a>

```python
tunnel_inside_ip_version: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `vpn_concentrator_id`<sup>Required</sup> <a name="vpn_concentrator_id" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.vpnConcentratorId"></a>

```python
vpn_concentrator_id: str
```

- *Type:* str

---

##### `vpn_gateway_id`<sup>Required</sup> <a name="vpn_gateway_id" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.vpnGatewayId"></a>

```python
vpn_gateway_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2VpnConnectionConfig <a name="Ec2VpnConnectionConfig" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_vpn_connection

ec2VpnConnection.Ec2VpnConnectionConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  customer_gateway_id: str,
  type: str,
  enable_acceleration: bool | IResolvable = None,
  local_ipv4_network_cidr: str = None,
  local_ipv6_network_cidr: str = None,
  outside_ip_address_type: str = None,
  pre_shared_key_storage: str = None,
  remote_ipv4_network_cidr: str = None,
  remote_ipv6_network_cidr: str = None,
  static_routes_only: bool | IResolvable = None,
  tags: IResolvable | typing.List[Ec2VpnConnectionTags] = None,
  transit_gateway_id: str = None,
  transport_transit_gateway_attachment_id: str = None,
  tunnel_bandwidth: str = None,
  tunnel_inside_ip_version: str = None,
  vpn_concentrator_id: str = None,
  vpn_gateway_id: str = None,
  vpn_tunnel_options_specifications: IResolvable | typing.List[Ec2VpnConnectionVpnTunnelOptionsSpecifications] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.property.customerGatewayId">customer_gateway_id</a></code> | <code>str</code> | The ID of the customer gateway at your end of the VPN connection. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.property.type">type</a></code> | <code>str</code> | The type of VPN connection. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.property.enableAcceleration">enable_acceleration</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicate whether to enable acceleration for the VPN connection.  Default: ``false``. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.property.localIpv4NetworkCidr">local_ipv4_network_cidr</a></code> | <code>str</code> | The IPv4 CIDR on the customer gateway (on-premises) side of the VPN connection.  Default: ``0.0.0.0/0``. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.property.localIpv6NetworkCidr">local_ipv6_network_cidr</a></code> | <code>str</code> | The IPv6 CIDR on the customer gateway (on-premises) side of the VPN connection.  Default: ``::/0``. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.property.outsideIpAddressType">outside_ip_address_type</a></code> | <code>str</code> | The type of IP address assigned to the outside interface of the customer gateway device. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.property.preSharedKeyStorage">pre_shared_key_storage</a></code> | <code>str</code> | Specifies the storage mode for the pre-shared key (PSK). |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.property.remoteIpv4NetworkCidr">remote_ipv4_network_cidr</a></code> | <code>str</code> | The IPv4 CIDR on the AWS side of the VPN connection.  Default: ``0.0.0.0/0``. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.property.remoteIpv6NetworkCidr">remote_ipv6_network_cidr</a></code> | <code>str</code> | The IPv6 CIDR on the AWS side of the VPN connection.  Default: ``::/0``. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.property.staticRoutesOnly">static_routes_only</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates whether the VPN connection uses static routes only. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTags">Ec2VpnConnectionTags</a>]</code> | Any tags assigned to the VPN connection. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.property.transitGatewayId">transit_gateway_id</a></code> | <code>str</code> | The ID of the transit gateway associated with the VPN connection. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.property.transportTransitGatewayAttachmentId">transport_transit_gateway_attachment_id</a></code> | <code>str</code> | The transit gateway attachment ID to use for the VPN tunnel.  Required if ``OutsideIpAddressType`` is set to ``PrivateIpv4``. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.property.tunnelBandwidth">tunnel_bandwidth</a></code> | <code>str</code> | The desired bandwidth specification for the VPN tunnel, used when creating or modifying VPN connection options to set the tunnel's throughput capacity. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.property.tunnelInsideIpVersion">tunnel_inside_ip_version</a></code> | <code>str</code> | Indicate whether the VPN tunnels process IPv4 or IPv6 traffic.  Default: ``ipv4``. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.property.vpnConcentratorId">vpn_concentrator_id</a></code> | <code>str</code> | The ID of the VPN concentrator to associate with the VPN connection. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.property.vpnGatewayId">vpn_gateway_id</a></code> | <code>str</code> | The ID of the virtual private gateway at the AWS side of the VPN connection. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.property.vpnTunnelOptionsSpecifications">vpn_tunnel_options_specifications</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecifications">Ec2VpnConnectionVpnTunnelOptionsSpecifications</a>]</code> | The tunnel options for the VPN connection. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `customer_gateway_id`<sup>Required</sup> <a name="customer_gateway_id" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.property.customerGatewayId"></a>

```python
customer_gateway_id: str
```

- *Type:* str

The ID of the customer gateway at your end of the VPN connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_vpn_connection#customer_gateway_id Ec2VpnConnection#customer_gateway_id}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.property.type"></a>

```python
type: str
```

- *Type:* str

The type of VPN connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_vpn_connection#type Ec2VpnConnection#type}

---

##### `enable_acceleration`<sup>Optional</sup> <a name="enable_acceleration" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.property.enableAcceleration"></a>

```python
enable_acceleration: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Indicate whether to enable acceleration for the VPN connection.  Default: ``false``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_vpn_connection#enable_acceleration Ec2VpnConnection#enable_acceleration}

---

##### `local_ipv4_network_cidr`<sup>Optional</sup> <a name="local_ipv4_network_cidr" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.property.localIpv4NetworkCidr"></a>

```python
local_ipv4_network_cidr: str
```

- *Type:* str

The IPv4 CIDR on the customer gateway (on-premises) side of the VPN connection.  Default: ``0.0.0.0/0``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_vpn_connection#local_ipv_4_network_cidr Ec2VpnConnection#local_ipv_4_network_cidr}

---

##### `local_ipv6_network_cidr`<sup>Optional</sup> <a name="local_ipv6_network_cidr" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.property.localIpv6NetworkCidr"></a>

```python
local_ipv6_network_cidr: str
```

- *Type:* str

The IPv6 CIDR on the customer gateway (on-premises) side of the VPN connection.  Default: ``::/0``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_vpn_connection#local_ipv_6_network_cidr Ec2VpnConnection#local_ipv_6_network_cidr}

---

##### `outside_ip_address_type`<sup>Optional</sup> <a name="outside_ip_address_type" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.property.outsideIpAddressType"></a>

```python
outside_ip_address_type: str
```

- *Type:* str

The type of IP address assigned to the outside interface of the customer gateway device.

Valid values: `PrivateIpv4` | `PublicIpv4` | `Ipv6`
Default: `PublicIpv4`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_vpn_connection#outside_ip_address_type Ec2VpnConnection#outside_ip_address_type}

---

##### `pre_shared_key_storage`<sup>Optional</sup> <a name="pre_shared_key_storage" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.property.preSharedKeyStorage"></a>

```python
pre_shared_key_storage: str
```

- *Type:* str

Specifies the storage mode for the pre-shared key (PSK).

Valid values are `Standard` (stored in the S2Slong service) or `SecretsManager` (stored in AWS Secrets Manager).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_vpn_connection#pre_shared_key_storage Ec2VpnConnection#pre_shared_key_storage}

---

##### `remote_ipv4_network_cidr`<sup>Optional</sup> <a name="remote_ipv4_network_cidr" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.property.remoteIpv4NetworkCidr"></a>

```python
remote_ipv4_network_cidr: str
```

- *Type:* str

The IPv4 CIDR on the AWS side of the VPN connection.  Default: ``0.0.0.0/0``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_vpn_connection#remote_ipv_4_network_cidr Ec2VpnConnection#remote_ipv_4_network_cidr}

---

##### `remote_ipv6_network_cidr`<sup>Optional</sup> <a name="remote_ipv6_network_cidr" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.property.remoteIpv6NetworkCidr"></a>

```python
remote_ipv6_network_cidr: str
```

- *Type:* str

The IPv6 CIDR on the AWS side of the VPN connection.  Default: ``::/0``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_vpn_connection#remote_ipv_6_network_cidr Ec2VpnConnection#remote_ipv_6_network_cidr}

---

##### `static_routes_only`<sup>Optional</sup> <a name="static_routes_only" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.property.staticRoutesOnly"></a>

```python
static_routes_only: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Indicates whether the VPN connection uses static routes only.

Static routes must be used for devices that don't support BGP.
If you are creating a VPN connection for a device that does not support Border Gateway Protocol (BGP), you must specify `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_vpn_connection#static_routes_only Ec2VpnConnection#static_routes_only}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[Ec2VpnConnectionTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTags">Ec2VpnConnectionTags</a>]

Any tags assigned to the VPN connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_vpn_connection#tags Ec2VpnConnection#tags}

---

##### `transit_gateway_id`<sup>Optional</sup> <a name="transit_gateway_id" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.property.transitGatewayId"></a>

```python
transit_gateway_id: str
```

- *Type:* str

The ID of the transit gateway associated with the VPN connection.

You must specify either `TransitGatewayId` or `VpnGatewayId`, but not both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_vpn_connection#transit_gateway_id Ec2VpnConnection#transit_gateway_id}

---

##### `transport_transit_gateway_attachment_id`<sup>Optional</sup> <a name="transport_transit_gateway_attachment_id" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.property.transportTransitGatewayAttachmentId"></a>

```python
transport_transit_gateway_attachment_id: str
```

- *Type:* str

The transit gateway attachment ID to use for the VPN tunnel.  Required if ``OutsideIpAddressType`` is set to ``PrivateIpv4``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_vpn_connection#transport_transit_gateway_attachment_id Ec2VpnConnection#transport_transit_gateway_attachment_id}

---

##### `tunnel_bandwidth`<sup>Optional</sup> <a name="tunnel_bandwidth" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.property.tunnelBandwidth"></a>

```python
tunnel_bandwidth: str
```

- *Type:* str

The desired bandwidth specification for the VPN tunnel, used when creating or modifying VPN connection options to set the tunnel's throughput capacity.

`standard` supports up to 1.25 Gbps per tunnel, while `large` supports up to 5 Gbps per tunnel. The default value is `standard`. Existing VPN connections without a bandwidth setting will automatically default to `standard`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_vpn_connection#tunnel_bandwidth Ec2VpnConnection#tunnel_bandwidth}

---

##### `tunnel_inside_ip_version`<sup>Optional</sup> <a name="tunnel_inside_ip_version" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.property.tunnelInsideIpVersion"></a>

```python
tunnel_inside_ip_version: str
```

- *Type:* str

Indicate whether the VPN tunnels process IPv4 or IPv6 traffic.  Default: ``ipv4``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_vpn_connection#tunnel_inside_ip_version Ec2VpnConnection#tunnel_inside_ip_version}

---

##### `vpn_concentrator_id`<sup>Optional</sup> <a name="vpn_concentrator_id" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.property.vpnConcentratorId"></a>

```python
vpn_concentrator_id: str
```

- *Type:* str

The ID of the VPN concentrator to associate with the VPN connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_vpn_connection#vpn_concentrator_id Ec2VpnConnection#vpn_concentrator_id}

---

##### `vpn_gateway_id`<sup>Optional</sup> <a name="vpn_gateway_id" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.property.vpnGatewayId"></a>

```python
vpn_gateway_id: str
```

- *Type:* str

The ID of the virtual private gateway at the AWS side of the VPN connection.

You must specify either `TransitGatewayId` or `VpnGatewayId`, but not both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_vpn_connection#vpn_gateway_id Ec2VpnConnection#vpn_gateway_id}

---

##### `vpn_tunnel_options_specifications`<sup>Optional</sup> <a name="vpn_tunnel_options_specifications" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.property.vpnTunnelOptionsSpecifications"></a>

```python
vpn_tunnel_options_specifications: IResolvable | typing.List[Ec2VpnConnectionVpnTunnelOptionsSpecifications]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecifications">Ec2VpnConnectionVpnTunnelOptionsSpecifications</a>]

The tunnel options for the VPN connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_vpn_connection#vpn_tunnel_options_specifications Ec2VpnConnection#vpn_tunnel_options_specifications}

---

### Ec2VpnConnectionTags <a name="Ec2VpnConnectionTags" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTags.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_vpn_connection

ec2VpnConnection.Ec2VpnConnectionTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTags.property.key">key</a></code> | <code>str</code> | The tag key. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTags.property.value">value</a></code> | <code>str</code> | The tag value. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTags.property.key"></a>

```python
key: str
```

- *Type:* str

The tag key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_vpn_connection#key Ec2VpnConnection#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTags.property.value"></a>

```python
value: str
```

- *Type:* str

The tag value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_vpn_connection#value Ec2VpnConnection#value}

---

### Ec2VpnConnectionVpnTunnelOptionsSpecifications <a name="Ec2VpnConnectionVpnTunnelOptionsSpecifications" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecifications"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecifications.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_vpn_connection

ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecifications(
  dpd_timeout_action: str = None,
  dpd_timeout_seconds: typing.Union[int, float] = None,
  enable_tunnel_lifecycle_control: bool | IResolvable = None,
  ike_versions: IResolvable | typing.List[Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersions] = None,
  log_options: Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptions = None,
  phase1_dh_group_numbers: IResolvable | typing.List[Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbers] = None,
  phase1_encryption_algorithms: IResolvable | typing.List[Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithms] = None,
  phase1_integrity_algorithms: IResolvable | typing.List[Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithms] = None,
  phase1_lifetime_seconds: typing.Union[int, float] = None,
  phase2_dh_group_numbers: IResolvable | typing.List[Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbers] = None,
  phase2_encryption_algorithms: IResolvable | typing.List[Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithms] = None,
  phase2_integrity_algorithms: IResolvable | typing.List[Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithms] = None,
  phase2_lifetime_seconds: typing.Union[int, float] = None,
  pre_shared_key: str = None,
  rekey_fuzz_percentage: typing.Union[int, float] = None,
  rekey_margin_time_seconds: typing.Union[int, float] = None,
  replay_window_size: typing.Union[int, float] = None,
  startup_action: str = None,
  tunnel_inside_cidr: str = None,
  tunnel_inside_ipv6_cidr: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecifications.property.dpdTimeoutAction">dpd_timeout_action</a></code> | <code>str</code> | The action to take after DPD timeout occurs. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecifications.property.dpdTimeoutSeconds">dpd_timeout_seconds</a></code> | <code>typing.Union[int, float]</code> | The number of seconds after which a DPD timeout occurs. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecifications.property.enableTunnelLifecycleControl">enable_tunnel_lifecycle_control</a></code> | <code>bool \| cdktn.IResolvable</code> | Turn on or off tunnel endpoint lifecycle control feature. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecifications.property.ikeVersions">ike_versions</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersions">Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersions</a>]</code> | The IKE versions that are permitted for the VPN tunnel.  Valid values: ``ikev1`` \| ``ikev2``. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecifications.property.logOptions">log_options</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptions">Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptions</a></code> | Options for logging VPN tunnel activity. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecifications.property.phase1DhGroupNumbers">phase1_dh_group_numbers</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbers">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbers</a>]</code> | One or more Diffie-Hellman group numbers that are permitted for the VPN tunnel for phase 1 IKE negotiations. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecifications.property.phase1EncryptionAlgorithms">phase1_encryption_algorithms</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithms">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithms</a>]</code> | One or more encryption algorithms that are permitted for the VPN tunnel for phase 1 IKE negotiations. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecifications.property.phase1IntegrityAlgorithms">phase1_integrity_algorithms</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithms">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithms</a>]</code> | One or more integrity algorithms that are permitted for the VPN tunnel for phase 1 IKE negotiations. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecifications.property.phase1LifetimeSeconds">phase1_lifetime_seconds</a></code> | <code>typing.Union[int, float]</code> | The lifetime for phase 1 of the IKE negotiation, in seconds. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecifications.property.phase2DhGroupNumbers">phase2_dh_group_numbers</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbers">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbers</a>]</code> | One or more Diffie-Hellman group numbers that are permitted for the VPN tunnel for phase 2 IKE negotiations. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecifications.property.phase2EncryptionAlgorithms">phase2_encryption_algorithms</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithms">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithms</a>]</code> | One or more encryption algorithms that are permitted for the VPN tunnel for phase 2 IKE negotiations. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecifications.property.phase2IntegrityAlgorithms">phase2_integrity_algorithms</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithms">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithms</a>]</code> | One or more integrity algorithms that are permitted for the VPN tunnel for phase 2 IKE negotiations. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecifications.property.phase2LifetimeSeconds">phase2_lifetime_seconds</a></code> | <code>typing.Union[int, float]</code> | The lifetime for phase 2 of the IKE negotiation, in seconds. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecifications.property.preSharedKey">pre_shared_key</a></code> | <code>str</code> | The pre-shared key (PSK) to establish initial authentication between the virtual private gateway and customer gateway. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecifications.property.rekeyFuzzPercentage">rekey_fuzz_percentage</a></code> | <code>typing.Union[int, float]</code> | The percentage of the rekey window (determined by ``RekeyMarginTimeSeconds``) during which the rekey time is randomly selected. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecifications.property.rekeyMarginTimeSeconds">rekey_margin_time_seconds</a></code> | <code>typing.Union[int, float]</code> | The margin time, in seconds, before the phase 2 lifetime expires, during which the AWS side of the VPN connection performs an IKE rekey. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecifications.property.replayWindowSize">replay_window_size</a></code> | <code>typing.Union[int, float]</code> | The number of packets in an IKE replay window.  Constraints: A value between 64 and 2048.  Default: ``1024``. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecifications.property.startupAction">startup_action</a></code> | <code>str</code> | The action to take when the establishing the tunnel for the VPN connection. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecifications.property.tunnelInsideCidr">tunnel_inside_cidr</a></code> | <code>str</code> | The range of inside IP addresses for the tunnel. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecifications.property.tunnelInsideIpv6Cidr">tunnel_inside_ipv6_cidr</a></code> | <code>str</code> | The range of inside IPv6 addresses for the tunnel. |

---

##### `dpd_timeout_action`<sup>Optional</sup> <a name="dpd_timeout_action" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecifications.property.dpdTimeoutAction"></a>

```python
dpd_timeout_action: str
```

- *Type:* str

The action to take after DPD timeout occurs.

Specify `restart` to restart the IKE initiation. Specify `clear` to end the IKE session.
Valid Values: `clear` | `none` | `restart`
Default: `clear`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_vpn_connection#dpd_timeout_action Ec2VpnConnection#dpd_timeout_action}

---

##### `dpd_timeout_seconds`<sup>Optional</sup> <a name="dpd_timeout_seconds" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecifications.property.dpdTimeoutSeconds"></a>

```python
dpd_timeout_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of seconds after which a DPD timeout occurs.

Constraints: A value greater than or equal to 30.
Default: `30`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_vpn_connection#dpd_timeout_seconds Ec2VpnConnection#dpd_timeout_seconds}

---

##### `enable_tunnel_lifecycle_control`<sup>Optional</sup> <a name="enable_tunnel_lifecycle_control" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecifications.property.enableTunnelLifecycleControl"></a>

```python
enable_tunnel_lifecycle_control: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Turn on or off tunnel endpoint lifecycle control feature.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_vpn_connection#enable_tunnel_lifecycle_control Ec2VpnConnection#enable_tunnel_lifecycle_control}

---

##### `ike_versions`<sup>Optional</sup> <a name="ike_versions" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecifications.property.ikeVersions"></a>

```python
ike_versions: IResolvable | typing.List[Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersions">Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersions</a>]

The IKE versions that are permitted for the VPN tunnel.  Valid values: ``ikev1`` | ``ikev2``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_vpn_connection#ike_versions Ec2VpnConnection#ike_versions}

---

##### `log_options`<sup>Optional</sup> <a name="log_options" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecifications.property.logOptions"></a>

```python
log_options: Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptions">Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptions</a>

Options for logging VPN tunnel activity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_vpn_connection#log_options Ec2VpnConnection#log_options}

---

##### `phase1_dh_group_numbers`<sup>Optional</sup> <a name="phase1_dh_group_numbers" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecifications.property.phase1DhGroupNumbers"></a>

```python
phase1_dh_group_numbers: IResolvable | typing.List[Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbers]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbers">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbers</a>]

One or more Diffie-Hellman group numbers that are permitted for the VPN tunnel for phase 1 IKE negotiations.

Valid values: `2` | `14` | `15` | `16` | `17` | `18` | `19` | `20` | `21` | `22` | `23` | `24`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_vpn_connection#phase_1_dh_group_numbers Ec2VpnConnection#phase_1_dh_group_numbers}

---

##### `phase1_encryption_algorithms`<sup>Optional</sup> <a name="phase1_encryption_algorithms" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecifications.property.phase1EncryptionAlgorithms"></a>

```python
phase1_encryption_algorithms: IResolvable | typing.List[Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithms]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithms">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithms</a>]

One or more encryption algorithms that are permitted for the VPN tunnel for phase 1 IKE negotiations.

Valid values: `AES128` | `AES256` | `AES128-GCM-16` | `AES256-GCM-16`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_vpn_connection#phase_1_encryption_algorithms Ec2VpnConnection#phase_1_encryption_algorithms}

---

##### `phase1_integrity_algorithms`<sup>Optional</sup> <a name="phase1_integrity_algorithms" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecifications.property.phase1IntegrityAlgorithms"></a>

```python
phase1_integrity_algorithms: IResolvable | typing.List[Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithms]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithms">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithms</a>]

One or more integrity algorithms that are permitted for the VPN tunnel for phase 1 IKE negotiations.

Valid values: `SHA1` | `SHA2-256` | `SHA2-384` | `SHA2-512`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_vpn_connection#phase_1_integrity_algorithms Ec2VpnConnection#phase_1_integrity_algorithms}

---

##### `phase1_lifetime_seconds`<sup>Optional</sup> <a name="phase1_lifetime_seconds" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecifications.property.phase1LifetimeSeconds"></a>

```python
phase1_lifetime_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The lifetime for phase 1 of the IKE negotiation, in seconds.

Constraints: A value between 900 and 28,800.
Default: `28800`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_vpn_connection#phase_1_lifetime_seconds Ec2VpnConnection#phase_1_lifetime_seconds}

---

##### `phase2_dh_group_numbers`<sup>Optional</sup> <a name="phase2_dh_group_numbers" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecifications.property.phase2DhGroupNumbers"></a>

```python
phase2_dh_group_numbers: IResolvable | typing.List[Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbers]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbers">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbers</a>]

One or more Diffie-Hellman group numbers that are permitted for the VPN tunnel for phase 2 IKE negotiations.

Valid values: `2` | `5` | `14` | `15` | `16` | `17` | `18` | `19` | `20` | `21` | `22` | `23` | `24`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_vpn_connection#phase_2_dh_group_numbers Ec2VpnConnection#phase_2_dh_group_numbers}

---

##### `phase2_encryption_algorithms`<sup>Optional</sup> <a name="phase2_encryption_algorithms" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecifications.property.phase2EncryptionAlgorithms"></a>

```python
phase2_encryption_algorithms: IResolvable | typing.List[Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithms]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithms">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithms</a>]

One or more encryption algorithms that are permitted for the VPN tunnel for phase 2 IKE negotiations.

Valid values: `AES128` | `AES256` | `AES128-GCM-16` | `AES256-GCM-16`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_vpn_connection#phase_2_encryption_algorithms Ec2VpnConnection#phase_2_encryption_algorithms}

---

##### `phase2_integrity_algorithms`<sup>Optional</sup> <a name="phase2_integrity_algorithms" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecifications.property.phase2IntegrityAlgorithms"></a>

```python
phase2_integrity_algorithms: IResolvable | typing.List[Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithms]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithms">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithms</a>]

One or more integrity algorithms that are permitted for the VPN tunnel for phase 2 IKE negotiations.

Valid values: `SHA1` | `SHA2-256` | `SHA2-384` | `SHA2-512`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_vpn_connection#phase_2_integrity_algorithms Ec2VpnConnection#phase_2_integrity_algorithms}

---

##### `phase2_lifetime_seconds`<sup>Optional</sup> <a name="phase2_lifetime_seconds" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecifications.property.phase2LifetimeSeconds"></a>

```python
phase2_lifetime_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The lifetime for phase 2 of the IKE negotiation, in seconds.

Constraints: A value between 900 and 3,600. The value must be less than the value for `Phase1LifetimeSeconds`.
Default: `3600`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_vpn_connection#phase_2_lifetime_seconds Ec2VpnConnection#phase_2_lifetime_seconds}

---

##### `pre_shared_key`<sup>Optional</sup> <a name="pre_shared_key" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecifications.property.preSharedKey"></a>

```python
pre_shared_key: str
```

- *Type:* str

The pre-shared key (PSK) to establish initial authentication between the virtual private gateway and customer gateway.

Constraints: Allowed characters are alphanumeric characters, periods (.), and underscores (_). Must be between 8 and 64 characters in length and cannot start with zero (0).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_vpn_connection#pre_shared_key Ec2VpnConnection#pre_shared_key}

---

##### `rekey_fuzz_percentage`<sup>Optional</sup> <a name="rekey_fuzz_percentage" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecifications.property.rekeyFuzzPercentage"></a>

```python
rekey_fuzz_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The percentage of the rekey window (determined by ``RekeyMarginTimeSeconds``) during which the rekey time is randomly selected.

Constraints: A value between 0 and 100.
Default: `100`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_vpn_connection#rekey_fuzz_percentage Ec2VpnConnection#rekey_fuzz_percentage}

---

##### `rekey_margin_time_seconds`<sup>Optional</sup> <a name="rekey_margin_time_seconds" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecifications.property.rekeyMarginTimeSeconds"></a>

```python
rekey_margin_time_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The margin time, in seconds, before the phase 2 lifetime expires, during which the AWS side of the VPN connection performs an IKE rekey.

The exact time of the rekey is randomly selected based on the value for `RekeyFuzzPercentage`.
Constraints: A value between 60 and half of `Phase2LifetimeSeconds`.
Default: `270`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_vpn_connection#rekey_margin_time_seconds Ec2VpnConnection#rekey_margin_time_seconds}

---

##### `replay_window_size`<sup>Optional</sup> <a name="replay_window_size" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecifications.property.replayWindowSize"></a>

```python
replay_window_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of packets in an IKE replay window.  Constraints: A value between 64 and 2048.  Default: ``1024``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_vpn_connection#replay_window_size Ec2VpnConnection#replay_window_size}

---

##### `startup_action`<sup>Optional</sup> <a name="startup_action" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecifications.property.startupAction"></a>

```python
startup_action: str
```

- *Type:* str

The action to take when the establishing the tunnel for the VPN connection.

By default, your customer gateway device must initiate the IKE negotiation and bring up the tunnel. Specify `start` for AWS to initiate the IKE negotiation.
Valid Values: `add` | `start`
Default: `add`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_vpn_connection#startup_action Ec2VpnConnection#startup_action}

---

##### `tunnel_inside_cidr`<sup>Optional</sup> <a name="tunnel_inside_cidr" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecifications.property.tunnelInsideCidr"></a>

```python
tunnel_inside_cidr: str
```

- *Type:* str

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_vpn_connection#tunnel_inside_cidr Ec2VpnConnection#tunnel_inside_cidr}

---

##### `tunnel_inside_ipv6_cidr`<sup>Optional</sup> <a name="tunnel_inside_ipv6_cidr" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecifications.property.tunnelInsideIpv6Cidr"></a>

```python
tunnel_inside_ipv6_cidr: str
```

- *Type:* str

The range of inside IPv6 addresses for the tunnel.

Any specified CIDR blocks must be unique across all VPN connections that use the same transit gateway.
Constraints: A size /126 CIDR block from the local `fd00::/8` range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_vpn_connection#tunnel_inside_ipv_6_cidr Ec2VpnConnection#tunnel_inside_ipv_6_cidr}

---

### Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersions <a name="Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersions" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersions.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_vpn_connection

ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersions(
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersions.property.value">value</a></code> | <code>str</code> | The IKE version. |

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersions.property.value"></a>

```python
value: str
```

- *Type:* str

The IKE version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_vpn_connection#value Ec2VpnConnection#value}

---

### Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptions <a name="Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptions" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptions.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_vpn_connection

ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptions(
  cloudwatch_log_options: Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptions = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptions.property.cloudwatchLogOptions">cloudwatch_log_options</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptions">Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptions</a></code> | Options for sending VPN tunnel logs to CloudWatch. |

---

##### `cloudwatch_log_options`<sup>Optional</sup> <a name="cloudwatch_log_options" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptions.property.cloudwatchLogOptions"></a>

```python
cloudwatch_log_options: Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptions">Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptions</a>

Options for sending VPN tunnel logs to CloudWatch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_vpn_connection#cloudwatch_log_options Ec2VpnConnection#cloudwatch_log_options}

---

### Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptions <a name="Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptions" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptions.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_vpn_connection

ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptions(
  bgp_log_enabled: bool | IResolvable = None,
  bgp_log_group_arn: str = None,
  bgp_log_output_format: str = None,
  log_enabled: bool | IResolvable = None,
  log_group_arn: str = None,
  log_output_format: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptions.property.bgpLogEnabled">bgp_log_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether to enable BGP logging for the VPN connection. Default value is ``False``.  Valid values: ``True`` \| ``False``. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptions.property.bgpLogGroupArn">bgp_log_group_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the CloudWatch log group where BGP logs will be sent. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptions.property.bgpLogOutputFormat">bgp_log_output_format</a></code> | <code>str</code> | The desired output format for BGP logs to be sent to CloudWatch. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptions.property.logEnabled">log_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Enable or disable VPN tunnel logging feature. Default value is ``False``.  Valid values: ``True`` \| ``False``. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptions.property.logGroupArn">log_group_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the CloudWatch log group to send logs to. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptions.property.logOutputFormat">log_output_format</a></code> | <code>str</code> | Set log format. Default format is ``json``.  Valid values: ``json`` \| ``text``. |

---

##### `bgp_log_enabled`<sup>Optional</sup> <a name="bgp_log_enabled" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptions.property.bgpLogEnabled"></a>

```python
bgp_log_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Specifies whether to enable BGP logging for the VPN connection. Default value is ``False``.  Valid values: ``True`` | ``False``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_vpn_connection#bgp_log_enabled Ec2VpnConnection#bgp_log_enabled}

---

##### `bgp_log_group_arn`<sup>Optional</sup> <a name="bgp_log_group_arn" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptions.property.bgpLogGroupArn"></a>

```python
bgp_log_group_arn: str
```

- *Type:* str

The Amazon Resource Name (ARN) of the CloudWatch log group where BGP logs will be sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_vpn_connection#bgp_log_group_arn Ec2VpnConnection#bgp_log_group_arn}

---

##### `bgp_log_output_format`<sup>Optional</sup> <a name="bgp_log_output_format" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptions.property.bgpLogOutputFormat"></a>

```python
bgp_log_output_format: str
```

- *Type:* str

The desired output format for BGP logs to be sent to CloudWatch.

Default format is `json`.
Valid values: `json` | `text`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_vpn_connection#bgp_log_output_format Ec2VpnConnection#bgp_log_output_format}

---

##### `log_enabled`<sup>Optional</sup> <a name="log_enabled" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptions.property.logEnabled"></a>

```python
log_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Enable or disable VPN tunnel logging feature. Default value is ``False``.  Valid values: ``True`` | ``False``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_vpn_connection#log_enabled Ec2VpnConnection#log_enabled}

---

##### `log_group_arn`<sup>Optional</sup> <a name="log_group_arn" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptions.property.logGroupArn"></a>

```python
log_group_arn: str
```

- *Type:* str

The Amazon Resource Name (ARN) of the CloudWatch log group to send logs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_vpn_connection#log_group_arn Ec2VpnConnection#log_group_arn}

---

##### `log_output_format`<sup>Optional</sup> <a name="log_output_format" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptions.property.logOutputFormat"></a>

```python
log_output_format: str
```

- *Type:* str

Set log format. Default format is ``json``.  Valid values: ``json`` | ``text``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_vpn_connection#log_output_format Ec2VpnConnection#log_output_format}

---

### Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbers <a name="Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbers" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbers.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_vpn_connection

ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbers(
  value: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbers.property.value">value</a></code> | <code>typing.Union[int, float]</code> | The Diffie-Hellmann group number. |

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbers.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The Diffie-Hellmann group number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_vpn_connection#value Ec2VpnConnection#value}

---

### Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithms <a name="Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithms" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithms"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithms.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_vpn_connection

ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithms(
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithms.property.value">value</a></code> | <code>str</code> | The value for the encryption algorithm. |

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithms.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the encryption algorithm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_vpn_connection#value Ec2VpnConnection#value}

---

### Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithms <a name="Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithms" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithms"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithms.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_vpn_connection

ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithms(
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithms.property.value">value</a></code> | <code>str</code> | The value for the integrity algorithm. |

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithms.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the integrity algorithm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_vpn_connection#value Ec2VpnConnection#value}

---

### Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbers <a name="Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbers" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbers.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_vpn_connection

ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbers(
  value: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbers.property.value">value</a></code> | <code>typing.Union[int, float]</code> | The Diffie-Hellmann group number. |

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbers.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The Diffie-Hellmann group number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_vpn_connection#value Ec2VpnConnection#value}

---

### Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithms <a name="Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithms" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithms"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithms.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_vpn_connection

ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithms(
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithms.property.value">value</a></code> | <code>str</code> | The encryption algorithm. |

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithms.property.value"></a>

```python
value: str
```

- *Type:* str

The encryption algorithm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_vpn_connection#value Ec2VpnConnection#value}

---

### Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithms <a name="Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithms" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithms"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithms.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_vpn_connection

ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithms(
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithms.property.value">value</a></code> | <code>str</code> | The integrity algorithm. |

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithms.property.value"></a>

```python
value: str
```

- *Type:* str

The integrity algorithm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_vpn_connection#value Ec2VpnConnection#value}

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2VpnConnectionTagsList <a name="Ec2VpnConnectionTagsList" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_vpn_connection

ec2VpnConnection.Ec2VpnConnectionTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Ec2VpnConnectionTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTags">Ec2VpnConnectionTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[Ec2VpnConnectionTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTags">Ec2VpnConnectionTags</a>]

---


### Ec2VpnConnectionTagsOutputReference <a name="Ec2VpnConnectionTagsOutputReference" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_vpn_connection

ec2VpnConnection.Ec2VpnConnectionTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTags">Ec2VpnConnectionTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Ec2VpnConnectionTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTags">Ec2VpnConnectionTags</a>

---


### Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList <a name="Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_vpn_connection

ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersions">Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersions">Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersions</a>]

---


### Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference <a name="Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_vpn_connection

ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersions">Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersions">Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersions</a>

---


### Ec2VpnConnectionVpnTunnelOptionsSpecificationsList <a name="Ec2VpnConnectionVpnTunnelOptionsSpecificationsList" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsList.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_vpn_connection

ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecifications">Ec2VpnConnectionVpnTunnelOptionsSpecifications</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[Ec2VpnConnectionVpnTunnelOptionsSpecifications]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecifications">Ec2VpnConnectionVpnTunnelOptionsSpecifications</a>]

---


### Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference <a name="Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_vpn_connection

ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.resetBgpLogEnabled">reset_bgp_log_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.resetBgpLogGroupArn">reset_bgp_log_group_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.resetBgpLogOutputFormat">reset_bgp_log_output_format</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.resetLogEnabled">reset_log_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.resetLogGroupArn">reset_log_group_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.resetLogOutputFormat">reset_log_output_format</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_bgp_log_enabled` <a name="reset_bgp_log_enabled" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.resetBgpLogEnabled"></a>

```python
def reset_bgp_log_enabled() -> None
```

##### `reset_bgp_log_group_arn` <a name="reset_bgp_log_group_arn" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.resetBgpLogGroupArn"></a>

```python
def reset_bgp_log_group_arn() -> None
```

##### `reset_bgp_log_output_format` <a name="reset_bgp_log_output_format" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.resetBgpLogOutputFormat"></a>

```python
def reset_bgp_log_output_format() -> None
```

##### `reset_log_enabled` <a name="reset_log_enabled" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.resetLogEnabled"></a>

```python
def reset_log_enabled() -> None
```

##### `reset_log_group_arn` <a name="reset_log_group_arn" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.resetLogGroupArn"></a>

```python
def reset_log_group_arn() -> None
```

##### `reset_log_output_format` <a name="reset_log_output_format" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.resetLogOutputFormat"></a>

```python
def reset_log_output_format() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.property.bgpLogEnabledInput">bgp_log_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.property.bgpLogGroupArnInput">bgp_log_group_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.property.bgpLogOutputFormatInput">bgp_log_output_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.property.logEnabledInput">log_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.property.logGroupArnInput">log_group_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.property.logOutputFormatInput">log_output_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.property.bgpLogEnabled">bgp_log_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.property.bgpLogGroupArn">bgp_log_group_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.property.bgpLogOutputFormat">bgp_log_output_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.property.logEnabled">log_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.property.logGroupArn">log_group_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.property.logOutputFormat">log_output_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptions">Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bgp_log_enabled_input`<sup>Optional</sup> <a name="bgp_log_enabled_input" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.property.bgpLogEnabledInput"></a>

```python
bgp_log_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `bgp_log_group_arn_input`<sup>Optional</sup> <a name="bgp_log_group_arn_input" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.property.bgpLogGroupArnInput"></a>

```python
bgp_log_group_arn_input: str
```

- *Type:* str

---

##### `bgp_log_output_format_input`<sup>Optional</sup> <a name="bgp_log_output_format_input" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.property.bgpLogOutputFormatInput"></a>

```python
bgp_log_output_format_input: str
```

- *Type:* str

---

##### `log_enabled_input`<sup>Optional</sup> <a name="log_enabled_input" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.property.logEnabledInput"></a>

```python
log_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `log_group_arn_input`<sup>Optional</sup> <a name="log_group_arn_input" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.property.logGroupArnInput"></a>

```python
log_group_arn_input: str
```

- *Type:* str

---

##### `log_output_format_input`<sup>Optional</sup> <a name="log_output_format_input" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.property.logOutputFormatInput"></a>

```python
log_output_format_input: str
```

- *Type:* str

---

##### `bgp_log_enabled`<sup>Required</sup> <a name="bgp_log_enabled" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.property.bgpLogEnabled"></a>

```python
bgp_log_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `bgp_log_group_arn`<sup>Required</sup> <a name="bgp_log_group_arn" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.property.bgpLogGroupArn"></a>

```python
bgp_log_group_arn: str
```

- *Type:* str

---

##### `bgp_log_output_format`<sup>Required</sup> <a name="bgp_log_output_format" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.property.bgpLogOutputFormat"></a>

```python
bgp_log_output_format: str
```

- *Type:* str

---

##### `log_enabled`<sup>Required</sup> <a name="log_enabled" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.property.logEnabled"></a>

```python
log_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `log_group_arn`<sup>Required</sup> <a name="log_group_arn" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.property.logGroupArn"></a>

```python
log_group_arn: str
```

- *Type:* str

---

##### `log_output_format`<sup>Required</sup> <a name="log_output_format" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.property.logOutputFormat"></a>

```python
log_output_format: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptions">Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptions</a>

---


### Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference <a name="Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_vpn_connection

ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.putCloudwatchLogOptions">put_cloudwatch_log_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.resetCloudwatchLogOptions">reset_cloudwatch_log_options</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_cloudwatch_log_options` <a name="put_cloudwatch_log_options" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.putCloudwatchLogOptions"></a>

```python
def put_cloudwatch_log_options(
  bgp_log_enabled: bool | IResolvable = None,
  bgp_log_group_arn: str = None,
  bgp_log_output_format: str = None,
  log_enabled: bool | IResolvable = None,
  log_group_arn: str = None,
  log_output_format: str = None
) -> None
```

###### `bgp_log_enabled`<sup>Optional</sup> <a name="bgp_log_enabled" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.putCloudwatchLogOptions.parameter.bgpLogEnabled"></a>

- *Type:* bool | cdktn.IResolvable

Specifies whether to enable BGP logging for the VPN connection. Default value is ``False``.  Valid values: ``True`` | ``False``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_vpn_connection#bgp_log_enabled Ec2VpnConnection#bgp_log_enabled}

---

###### `bgp_log_group_arn`<sup>Optional</sup> <a name="bgp_log_group_arn" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.putCloudwatchLogOptions.parameter.bgpLogGroupArn"></a>

- *Type:* str

The Amazon Resource Name (ARN) of the CloudWatch log group where BGP logs will be sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_vpn_connection#bgp_log_group_arn Ec2VpnConnection#bgp_log_group_arn}

---

###### `bgp_log_output_format`<sup>Optional</sup> <a name="bgp_log_output_format" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.putCloudwatchLogOptions.parameter.bgpLogOutputFormat"></a>

- *Type:* str

The desired output format for BGP logs to be sent to CloudWatch.

Default format is `json`.
Valid values: `json` | `text`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_vpn_connection#bgp_log_output_format Ec2VpnConnection#bgp_log_output_format}

---

###### `log_enabled`<sup>Optional</sup> <a name="log_enabled" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.putCloudwatchLogOptions.parameter.logEnabled"></a>

- *Type:* bool | cdktn.IResolvable

Enable or disable VPN tunnel logging feature. Default value is ``False``.  Valid values: ``True`` | ``False``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_vpn_connection#log_enabled Ec2VpnConnection#log_enabled}

---

###### `log_group_arn`<sup>Optional</sup> <a name="log_group_arn" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.putCloudwatchLogOptions.parameter.logGroupArn"></a>

- *Type:* str

The Amazon Resource Name (ARN) of the CloudWatch log group to send logs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_vpn_connection#log_group_arn Ec2VpnConnection#log_group_arn}

---

###### `log_output_format`<sup>Optional</sup> <a name="log_output_format" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.putCloudwatchLogOptions.parameter.logOutputFormat"></a>

- *Type:* str

Set log format. Default format is ``json``.  Valid values: ``json`` | ``text``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_vpn_connection#log_output_format Ec2VpnConnection#log_output_format}

---

##### `reset_cloudwatch_log_options` <a name="reset_cloudwatch_log_options" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.resetCloudwatchLogOptions"></a>

```python
def reset_cloudwatch_log_options() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.property.cloudwatchLogOptions">cloudwatch_log_options</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference">Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.property.cloudwatchLogOptionsInput">cloudwatch_log_options_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptions">Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptions">Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cloudwatch_log_options`<sup>Required</sup> <a name="cloudwatch_log_options" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.property.cloudwatchLogOptions"></a>

```python
cloudwatch_log_options: Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference">Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference</a>

---

##### `cloudwatch_log_options_input`<sup>Optional</sup> <a name="cloudwatch_log_options_input" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.property.cloudwatchLogOptionsInput"></a>

```python
cloudwatch_log_options_input: IResolvable | Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptions">Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptions</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptions">Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptions</a>

---


### Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference <a name="Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_vpn_connection

ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.putIkeVersions">put_ike_versions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.putLogOptions">put_log_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.putPhase1DhGroupNumbers">put_phase1_dh_group_numbers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.putPhase1EncryptionAlgorithms">put_phase1_encryption_algorithms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.putPhase1IntegrityAlgorithms">put_phase1_integrity_algorithms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.putPhase2DhGroupNumbers">put_phase2_dh_group_numbers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.putPhase2EncryptionAlgorithms">put_phase2_encryption_algorithms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.putPhase2IntegrityAlgorithms">put_phase2_integrity_algorithms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.resetDpdTimeoutAction">reset_dpd_timeout_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.resetDpdTimeoutSeconds">reset_dpd_timeout_seconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.resetEnableTunnelLifecycleControl">reset_enable_tunnel_lifecycle_control</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.resetIkeVersions">reset_ike_versions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.resetLogOptions">reset_log_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.resetPhase1DhGroupNumbers">reset_phase1_dh_group_numbers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.resetPhase1EncryptionAlgorithms">reset_phase1_encryption_algorithms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.resetPhase1IntegrityAlgorithms">reset_phase1_integrity_algorithms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.resetPhase1LifetimeSeconds">reset_phase1_lifetime_seconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.resetPhase2DhGroupNumbers">reset_phase2_dh_group_numbers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.resetPhase2EncryptionAlgorithms">reset_phase2_encryption_algorithms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.resetPhase2IntegrityAlgorithms">reset_phase2_integrity_algorithms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.resetPhase2LifetimeSeconds">reset_phase2_lifetime_seconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.resetPreSharedKey">reset_pre_shared_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.resetRekeyFuzzPercentage">reset_rekey_fuzz_percentage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.resetRekeyMarginTimeSeconds">reset_rekey_margin_time_seconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.resetReplayWindowSize">reset_replay_window_size</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.resetStartupAction">reset_startup_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.resetTunnelInsideCidr">reset_tunnel_inside_cidr</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.resetTunnelInsideIpv6Cidr">reset_tunnel_inside_ipv6_cidr</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_ike_versions` <a name="put_ike_versions" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.putIkeVersions"></a>

```python
def put_ike_versions(
  value: IResolvable | typing.List[Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersions]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.putIkeVersions.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersions">Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersions</a>]

---

##### `put_log_options` <a name="put_log_options" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.putLogOptions"></a>

```python
def put_log_options(
  cloudwatch_log_options: Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptions = None
) -> None
```

###### `cloudwatch_log_options`<sup>Optional</sup> <a name="cloudwatch_log_options" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.putLogOptions.parameter.cloudwatchLogOptions"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptions">Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptions</a>

Options for sending VPN tunnel logs to CloudWatch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_vpn_connection#cloudwatch_log_options Ec2VpnConnection#cloudwatch_log_options}

---

##### `put_phase1_dh_group_numbers` <a name="put_phase1_dh_group_numbers" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.putPhase1DhGroupNumbers"></a>

```python
def put_phase1_dh_group_numbers(
  value: IResolvable | typing.List[Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbers]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.putPhase1DhGroupNumbers.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbers">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbers</a>]

---

##### `put_phase1_encryption_algorithms` <a name="put_phase1_encryption_algorithms" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.putPhase1EncryptionAlgorithms"></a>

```python
def put_phase1_encryption_algorithms(
  value: IResolvable | typing.List[Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithms]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.putPhase1EncryptionAlgorithms.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithms">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithms</a>]

---

##### `put_phase1_integrity_algorithms` <a name="put_phase1_integrity_algorithms" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.putPhase1IntegrityAlgorithms"></a>

```python
def put_phase1_integrity_algorithms(
  value: IResolvable | typing.List[Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithms]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.putPhase1IntegrityAlgorithms.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithms">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithms</a>]

---

##### `put_phase2_dh_group_numbers` <a name="put_phase2_dh_group_numbers" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.putPhase2DhGroupNumbers"></a>

```python
def put_phase2_dh_group_numbers(
  value: IResolvable | typing.List[Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbers]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.putPhase2DhGroupNumbers.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbers">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbers</a>]

---

##### `put_phase2_encryption_algorithms` <a name="put_phase2_encryption_algorithms" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.putPhase2EncryptionAlgorithms"></a>

```python
def put_phase2_encryption_algorithms(
  value: IResolvable | typing.List[Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithms]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.putPhase2EncryptionAlgorithms.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithms">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithms</a>]

---

##### `put_phase2_integrity_algorithms` <a name="put_phase2_integrity_algorithms" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.putPhase2IntegrityAlgorithms"></a>

```python
def put_phase2_integrity_algorithms(
  value: IResolvable | typing.List[Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithms]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.putPhase2IntegrityAlgorithms.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithms">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithms</a>]

---

##### `reset_dpd_timeout_action` <a name="reset_dpd_timeout_action" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.resetDpdTimeoutAction"></a>

```python
def reset_dpd_timeout_action() -> None
```

##### `reset_dpd_timeout_seconds` <a name="reset_dpd_timeout_seconds" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.resetDpdTimeoutSeconds"></a>

```python
def reset_dpd_timeout_seconds() -> None
```

##### `reset_enable_tunnel_lifecycle_control` <a name="reset_enable_tunnel_lifecycle_control" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.resetEnableTunnelLifecycleControl"></a>

```python
def reset_enable_tunnel_lifecycle_control() -> None
```

##### `reset_ike_versions` <a name="reset_ike_versions" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.resetIkeVersions"></a>

```python
def reset_ike_versions() -> None
```

##### `reset_log_options` <a name="reset_log_options" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.resetLogOptions"></a>

```python
def reset_log_options() -> None
```

##### `reset_phase1_dh_group_numbers` <a name="reset_phase1_dh_group_numbers" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.resetPhase1DhGroupNumbers"></a>

```python
def reset_phase1_dh_group_numbers() -> None
```

##### `reset_phase1_encryption_algorithms` <a name="reset_phase1_encryption_algorithms" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.resetPhase1EncryptionAlgorithms"></a>

```python
def reset_phase1_encryption_algorithms() -> None
```

##### `reset_phase1_integrity_algorithms` <a name="reset_phase1_integrity_algorithms" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.resetPhase1IntegrityAlgorithms"></a>

```python
def reset_phase1_integrity_algorithms() -> None
```

##### `reset_phase1_lifetime_seconds` <a name="reset_phase1_lifetime_seconds" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.resetPhase1LifetimeSeconds"></a>

```python
def reset_phase1_lifetime_seconds() -> None
```

##### `reset_phase2_dh_group_numbers` <a name="reset_phase2_dh_group_numbers" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.resetPhase2DhGroupNumbers"></a>

```python
def reset_phase2_dh_group_numbers() -> None
```

##### `reset_phase2_encryption_algorithms` <a name="reset_phase2_encryption_algorithms" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.resetPhase2EncryptionAlgorithms"></a>

```python
def reset_phase2_encryption_algorithms() -> None
```

##### `reset_phase2_integrity_algorithms` <a name="reset_phase2_integrity_algorithms" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.resetPhase2IntegrityAlgorithms"></a>

```python
def reset_phase2_integrity_algorithms() -> None
```

##### `reset_phase2_lifetime_seconds` <a name="reset_phase2_lifetime_seconds" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.resetPhase2LifetimeSeconds"></a>

```python
def reset_phase2_lifetime_seconds() -> None
```

##### `reset_pre_shared_key` <a name="reset_pre_shared_key" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.resetPreSharedKey"></a>

```python
def reset_pre_shared_key() -> None
```

##### `reset_rekey_fuzz_percentage` <a name="reset_rekey_fuzz_percentage" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.resetRekeyFuzzPercentage"></a>

```python
def reset_rekey_fuzz_percentage() -> None
```

##### `reset_rekey_margin_time_seconds` <a name="reset_rekey_margin_time_seconds" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.resetRekeyMarginTimeSeconds"></a>

```python
def reset_rekey_margin_time_seconds() -> None
```

##### `reset_replay_window_size` <a name="reset_replay_window_size" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.resetReplayWindowSize"></a>

```python
def reset_replay_window_size() -> None
```

##### `reset_startup_action` <a name="reset_startup_action" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.resetStartupAction"></a>

```python
def reset_startup_action() -> None
```

##### `reset_tunnel_inside_cidr` <a name="reset_tunnel_inside_cidr" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.resetTunnelInsideCidr"></a>

```python
def reset_tunnel_inside_cidr() -> None
```

##### `reset_tunnel_inside_ipv6_cidr` <a name="reset_tunnel_inside_ipv6_cidr" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.resetTunnelInsideIpv6Cidr"></a>

```python
def reset_tunnel_inside_ipv6_cidr() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.ikeVersions">ike_versions</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList">Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.logOptions">log_options</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference">Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.phase1DhGroupNumbers">phase1_dh_group_numbers</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.phase1EncryptionAlgorithms">phase1_encryption_algorithms</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.phase1IntegrityAlgorithms">phase1_integrity_algorithms</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.phase2DhGroupNumbers">phase2_dh_group_numbers</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.phase2EncryptionAlgorithms">phase2_encryption_algorithms</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.phase2IntegrityAlgorithms">phase2_integrity_algorithms</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.dpdTimeoutActionInput">dpd_timeout_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.dpdTimeoutSecondsInput">dpd_timeout_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.enableTunnelLifecycleControlInput">enable_tunnel_lifecycle_control_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.ikeVersionsInput">ike_versions_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersions">Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersions</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.logOptionsInput">log_options_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptions">Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.phase1DhGroupNumbersInput">phase1_dh_group_numbers_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbers">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbers</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.phase1EncryptionAlgorithmsInput">phase1_encryption_algorithms_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithms">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithms</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.phase1IntegrityAlgorithmsInput">phase1_integrity_algorithms_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithms">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithms</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.phase1LifetimeSecondsInput">phase1_lifetime_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.phase2DhGroupNumbersInput">phase2_dh_group_numbers_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbers">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbers</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.phase2EncryptionAlgorithmsInput">phase2_encryption_algorithms_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithms">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithms</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.phase2IntegrityAlgorithmsInput">phase2_integrity_algorithms_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithms">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithms</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.phase2LifetimeSecondsInput">phase2_lifetime_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.preSharedKeyInput">pre_shared_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.rekeyFuzzPercentageInput">rekey_fuzz_percentage_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.rekeyMarginTimeSecondsInput">rekey_margin_time_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.replayWindowSizeInput">replay_window_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.startupActionInput">startup_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.tunnelInsideCidrInput">tunnel_inside_cidr_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.tunnelInsideIpv6CidrInput">tunnel_inside_ipv6_cidr_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.dpdTimeoutAction">dpd_timeout_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.dpdTimeoutSeconds">dpd_timeout_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.enableTunnelLifecycleControl">enable_tunnel_lifecycle_control</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.phase1LifetimeSeconds">phase1_lifetime_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.phase2LifetimeSeconds">phase2_lifetime_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.preSharedKey">pre_shared_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.rekeyFuzzPercentage">rekey_fuzz_percentage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.rekeyMarginTimeSeconds">rekey_margin_time_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.replayWindowSize">replay_window_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.startupAction">startup_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.tunnelInsideCidr">tunnel_inside_cidr</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.tunnelInsideIpv6Cidr">tunnel_inside_ipv6_cidr</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecifications">Ec2VpnConnectionVpnTunnelOptionsSpecifications</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ike_versions`<sup>Required</sup> <a name="ike_versions" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.ikeVersions"></a>

```python
ike_versions: Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList">Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList</a>

---

##### `log_options`<sup>Required</sup> <a name="log_options" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.logOptions"></a>

```python
log_options: Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference">Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference</a>

---

##### `phase1_dh_group_numbers`<sup>Required</sup> <a name="phase1_dh_group_numbers" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.phase1DhGroupNumbers"></a>

```python
phase1_dh_group_numbers: Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList</a>

---

##### `phase1_encryption_algorithms`<sup>Required</sup> <a name="phase1_encryption_algorithms" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.phase1EncryptionAlgorithms"></a>

```python
phase1_encryption_algorithms: Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList</a>

---

##### `phase1_integrity_algorithms`<sup>Required</sup> <a name="phase1_integrity_algorithms" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.phase1IntegrityAlgorithms"></a>

```python
phase1_integrity_algorithms: Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList</a>

---

##### `phase2_dh_group_numbers`<sup>Required</sup> <a name="phase2_dh_group_numbers" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.phase2DhGroupNumbers"></a>

```python
phase2_dh_group_numbers: Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList</a>

---

##### `phase2_encryption_algorithms`<sup>Required</sup> <a name="phase2_encryption_algorithms" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.phase2EncryptionAlgorithms"></a>

```python
phase2_encryption_algorithms: Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList</a>

---

##### `phase2_integrity_algorithms`<sup>Required</sup> <a name="phase2_integrity_algorithms" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.phase2IntegrityAlgorithms"></a>

```python
phase2_integrity_algorithms: Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList</a>

---

##### `dpd_timeout_action_input`<sup>Optional</sup> <a name="dpd_timeout_action_input" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.dpdTimeoutActionInput"></a>

```python
dpd_timeout_action_input: str
```

- *Type:* str

---

##### `dpd_timeout_seconds_input`<sup>Optional</sup> <a name="dpd_timeout_seconds_input" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.dpdTimeoutSecondsInput"></a>

```python
dpd_timeout_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `enable_tunnel_lifecycle_control_input`<sup>Optional</sup> <a name="enable_tunnel_lifecycle_control_input" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.enableTunnelLifecycleControlInput"></a>

```python
enable_tunnel_lifecycle_control_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `ike_versions_input`<sup>Optional</sup> <a name="ike_versions_input" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.ikeVersionsInput"></a>

```python
ike_versions_input: IResolvable | typing.List[Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersions">Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersions</a>]

---

##### `log_options_input`<sup>Optional</sup> <a name="log_options_input" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.logOptionsInput"></a>

```python
log_options_input: IResolvable | Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptions">Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptions</a>

---

##### `phase1_dh_group_numbers_input`<sup>Optional</sup> <a name="phase1_dh_group_numbers_input" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.phase1DhGroupNumbersInput"></a>

```python
phase1_dh_group_numbers_input: IResolvable | typing.List[Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbers]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbers">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbers</a>]

---

##### `phase1_encryption_algorithms_input`<sup>Optional</sup> <a name="phase1_encryption_algorithms_input" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.phase1EncryptionAlgorithmsInput"></a>

```python
phase1_encryption_algorithms_input: IResolvable | typing.List[Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithms]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithms">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithms</a>]

---

##### `phase1_integrity_algorithms_input`<sup>Optional</sup> <a name="phase1_integrity_algorithms_input" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.phase1IntegrityAlgorithmsInput"></a>

```python
phase1_integrity_algorithms_input: IResolvable | typing.List[Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithms]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithms">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithms</a>]

---

##### `phase1_lifetime_seconds_input`<sup>Optional</sup> <a name="phase1_lifetime_seconds_input" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.phase1LifetimeSecondsInput"></a>

```python
phase1_lifetime_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `phase2_dh_group_numbers_input`<sup>Optional</sup> <a name="phase2_dh_group_numbers_input" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.phase2DhGroupNumbersInput"></a>

```python
phase2_dh_group_numbers_input: IResolvable | typing.List[Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbers]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbers">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbers</a>]

---

##### `phase2_encryption_algorithms_input`<sup>Optional</sup> <a name="phase2_encryption_algorithms_input" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.phase2EncryptionAlgorithmsInput"></a>

```python
phase2_encryption_algorithms_input: IResolvable | typing.List[Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithms]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithms">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithms</a>]

---

##### `phase2_integrity_algorithms_input`<sup>Optional</sup> <a name="phase2_integrity_algorithms_input" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.phase2IntegrityAlgorithmsInput"></a>

```python
phase2_integrity_algorithms_input: IResolvable | typing.List[Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithms]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithms">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithms</a>]

---

##### `phase2_lifetime_seconds_input`<sup>Optional</sup> <a name="phase2_lifetime_seconds_input" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.phase2LifetimeSecondsInput"></a>

```python
phase2_lifetime_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `pre_shared_key_input`<sup>Optional</sup> <a name="pre_shared_key_input" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.preSharedKeyInput"></a>

```python
pre_shared_key_input: str
```

- *Type:* str

---

##### `rekey_fuzz_percentage_input`<sup>Optional</sup> <a name="rekey_fuzz_percentage_input" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.rekeyFuzzPercentageInput"></a>

```python
rekey_fuzz_percentage_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `rekey_margin_time_seconds_input`<sup>Optional</sup> <a name="rekey_margin_time_seconds_input" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.rekeyMarginTimeSecondsInput"></a>

```python
rekey_margin_time_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `replay_window_size_input`<sup>Optional</sup> <a name="replay_window_size_input" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.replayWindowSizeInput"></a>

```python
replay_window_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `startup_action_input`<sup>Optional</sup> <a name="startup_action_input" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.startupActionInput"></a>

```python
startup_action_input: str
```

- *Type:* str

---

##### `tunnel_inside_cidr_input`<sup>Optional</sup> <a name="tunnel_inside_cidr_input" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.tunnelInsideCidrInput"></a>

```python
tunnel_inside_cidr_input: str
```

- *Type:* str

---

##### `tunnel_inside_ipv6_cidr_input`<sup>Optional</sup> <a name="tunnel_inside_ipv6_cidr_input" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.tunnelInsideIpv6CidrInput"></a>

```python
tunnel_inside_ipv6_cidr_input: str
```

- *Type:* str

---

##### `dpd_timeout_action`<sup>Required</sup> <a name="dpd_timeout_action" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.dpdTimeoutAction"></a>

```python
dpd_timeout_action: str
```

- *Type:* str

---

##### `dpd_timeout_seconds`<sup>Required</sup> <a name="dpd_timeout_seconds" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.dpdTimeoutSeconds"></a>

```python
dpd_timeout_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `enable_tunnel_lifecycle_control`<sup>Required</sup> <a name="enable_tunnel_lifecycle_control" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.enableTunnelLifecycleControl"></a>

```python
enable_tunnel_lifecycle_control: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `phase1_lifetime_seconds`<sup>Required</sup> <a name="phase1_lifetime_seconds" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.phase1LifetimeSeconds"></a>

```python
phase1_lifetime_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `phase2_lifetime_seconds`<sup>Required</sup> <a name="phase2_lifetime_seconds" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.phase2LifetimeSeconds"></a>

```python
phase2_lifetime_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `pre_shared_key`<sup>Required</sup> <a name="pre_shared_key" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.preSharedKey"></a>

```python
pre_shared_key: str
```

- *Type:* str

---

##### `rekey_fuzz_percentage`<sup>Required</sup> <a name="rekey_fuzz_percentage" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.rekeyFuzzPercentage"></a>

```python
rekey_fuzz_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `rekey_margin_time_seconds`<sup>Required</sup> <a name="rekey_margin_time_seconds" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.rekeyMarginTimeSeconds"></a>

```python
rekey_margin_time_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `replay_window_size`<sup>Required</sup> <a name="replay_window_size" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.replayWindowSize"></a>

```python
replay_window_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `startup_action`<sup>Required</sup> <a name="startup_action" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.startupAction"></a>

```python
startup_action: str
```

- *Type:* str

---

##### `tunnel_inside_cidr`<sup>Required</sup> <a name="tunnel_inside_cidr" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.tunnelInsideCidr"></a>

```python
tunnel_inside_cidr: str
```

- *Type:* str

---

##### `tunnel_inside_ipv6_cidr`<sup>Required</sup> <a name="tunnel_inside_ipv6_cidr" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.tunnelInsideIpv6Cidr"></a>

```python
tunnel_inside_ipv6_cidr: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Ec2VpnConnectionVpnTunnelOptionsSpecifications
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecifications">Ec2VpnConnectionVpnTunnelOptionsSpecifications</a>

---


### Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList <a name="Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_vpn_connection

ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbers">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbers</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbers]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbers">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbers</a>]

---


### Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference <a name="Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_vpn_connection

ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.property.valueInput">value_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.property.value">value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbers">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbers</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.property.valueInput"></a>

```python
value_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbers
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbers">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbers</a>

---


### Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList <a name="Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_vpn_connection

ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithms">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithms</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithms]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithms">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithms</a>]

---


### Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference <a name="Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_vpn_connection

ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithms">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithms</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithms
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithms">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithms</a>

---


### Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList <a name="Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_vpn_connection

ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithms">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithms</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithms]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithms">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithms</a>]

---


### Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference <a name="Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_vpn_connection

ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithms">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithms</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithms
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithms">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithms</a>

---


### Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList <a name="Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_vpn_connection

ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbers">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbers</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbers]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbers">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbers</a>]

---


### Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference <a name="Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_vpn_connection

ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.property.valueInput">value_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.property.value">value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbers">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbers</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.property.valueInput"></a>

```python
value_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbers
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbers">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbers</a>

---


### Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList <a name="Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_vpn_connection

ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithms">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithms</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithms]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithms">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithms</a>]

---


### Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference <a name="Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_vpn_connection

ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithms">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithms</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithms
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithms">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithms</a>

---


### Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList <a name="Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_vpn_connection

ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithms">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithms</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithms]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithms">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithms</a>]

---


### Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference <a name="Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_vpn_connection

ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithms">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithms</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithms
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithms">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithms</a>

---



