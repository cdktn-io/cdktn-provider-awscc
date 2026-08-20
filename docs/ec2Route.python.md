# `ec2Route` Submodule <a name="`ec2Route` Submodule" id="@cdktn/provider-awscc.ec2Route"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2Route <a name="Ec2Route" id="@cdktn/provider-awscc.ec2Route.Ec2Route"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_route awscc_ec2_route}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Route.Ec2Route.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_route

ec2Route.Ec2Route(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  route_table_id: str,
  carrier_gateway_id: str = None,
  core_network_arn: str = None,
  destination_cidr_block: str = None,
  destination_ipv6_cidr_block: str = None,
  destination_prefix_list_id: str = None,
  egress_only_internet_gateway_id: str = None,
  gateway_id: str = None,
  instance_id: str = None,
  local_gateway_id: str = None,
  nat_gateway_id: str = None,
  network_interface_id: str = None,
  odb_network_arn: str = None,
  transit_gateway_id: str = None,
  vpc_endpoint_id: str = None,
  vpc_peering_connection_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.Initializer.parameter.routeTableId">route_table_id</a></code> | <code>str</code> | The ID of the route table for the route. |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.Initializer.parameter.carrierGatewayId">carrier_gateway_id</a></code> | <code>str</code> | The ID of the carrier gateway. |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.Initializer.parameter.coreNetworkArn">core_network_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the core network. |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.Initializer.parameter.destinationCidrBlock">destination_cidr_block</a></code> | <code>str</code> | The IPv4 CIDR address block used for the destination match. |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.Initializer.parameter.destinationIpv6CidrBlock">destination_ipv6_cidr_block</a></code> | <code>str</code> | The IPv6 CIDR block used for the destination match. Routing decisions are based on the most specific match. |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.Initializer.parameter.destinationPrefixListId">destination_prefix_list_id</a></code> | <code>str</code> | The ID of a prefix list used for the destination match. |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.Initializer.parameter.egressOnlyInternetGatewayId">egress_only_internet_gateway_id</a></code> | <code>str</code> | [IPv6 traffic only] The ID of an egress-only internet gateway. |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.Initializer.parameter.gatewayId">gateway_id</a></code> | <code>str</code> | The ID of an internet gateway or virtual private gateway attached to your VPC. |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.Initializer.parameter.instanceId">instance_id</a></code> | <code>str</code> | The ID of a NAT instance in your VPC. |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.Initializer.parameter.localGatewayId">local_gateway_id</a></code> | <code>str</code> | The ID of the local gateway. |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.Initializer.parameter.natGatewayId">nat_gateway_id</a></code> | <code>str</code> | [IPv4 traffic only] The ID of a NAT gateway. |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.Initializer.parameter.networkInterfaceId">network_interface_id</a></code> | <code>str</code> | The ID of a network interface. |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.Initializer.parameter.odbNetworkArn">odb_network_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the ODB network. |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.Initializer.parameter.transitGatewayId">transit_gateway_id</a></code> | <code>str</code> | The ID of a transit gateway. |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.Initializer.parameter.vpcEndpointId">vpc_endpoint_id</a></code> | <code>str</code> | The ID of a VPC endpoint. Supported for Gateway Load Balancer endpoints only. |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.Initializer.parameter.vpcPeeringConnectionId">vpc_peering_connection_id</a></code> | <code>str</code> | The ID of a VPC peering connection. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2Route.Ec2Route.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2Route.Ec2Route.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2Route.Ec2Route.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2Route.Ec2Route.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ec2Route.Ec2Route.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ec2Route.Ec2Route.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2Route.Ec2Route.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2Route.Ec2Route.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2Route.Ec2Route.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `route_table_id`<sup>Required</sup> <a name="route_table_id" id="@cdktn/provider-awscc.ec2Route.Ec2Route.Initializer.parameter.routeTableId"></a>

- *Type:* str

The ID of the route table for the route.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_route#route_table_id Ec2Route#route_table_id}

---

##### `carrier_gateway_id`<sup>Optional</sup> <a name="carrier_gateway_id" id="@cdktn/provider-awscc.ec2Route.Ec2Route.Initializer.parameter.carrierGatewayId"></a>

- *Type:* str

The ID of the carrier gateway.

You can only use this option when the VPC contains a subnet which is associated with a Wavelength Zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_route#carrier_gateway_id Ec2Route#carrier_gateway_id}

---

##### `core_network_arn`<sup>Optional</sup> <a name="core_network_arn" id="@cdktn/provider-awscc.ec2Route.Ec2Route.Initializer.parameter.coreNetworkArn"></a>

- *Type:* str

The Amazon Resource Name (ARN) of the core network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_route#core_network_arn Ec2Route#core_network_arn}

---

##### `destination_cidr_block`<sup>Optional</sup> <a name="destination_cidr_block" id="@cdktn/provider-awscc.ec2Route.Ec2Route.Initializer.parameter.destinationCidrBlock"></a>

- *Type:* str

The IPv4 CIDR address block used for the destination match.

Routing decisions are based on the most specific match. We modify the specified CIDR block to its canonical form; for example, if you specify `100.68.0.18/18`, we modify it to `100.68.0.0/18`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_route#destination_cidr_block Ec2Route#destination_cidr_block}

---

##### `destination_ipv6_cidr_block`<sup>Optional</sup> <a name="destination_ipv6_cidr_block" id="@cdktn/provider-awscc.ec2Route.Ec2Route.Initializer.parameter.destinationIpv6CidrBlock"></a>

- *Type:* str

The IPv6 CIDR block used for the destination match. Routing decisions are based on the most specific match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_route#destination_ipv_6_cidr_block Ec2Route#destination_ipv_6_cidr_block}

---

##### `destination_prefix_list_id`<sup>Optional</sup> <a name="destination_prefix_list_id" id="@cdktn/provider-awscc.ec2Route.Ec2Route.Initializer.parameter.destinationPrefixListId"></a>

- *Type:* str

The ID of a prefix list used for the destination match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_route#destination_prefix_list_id Ec2Route#destination_prefix_list_id}

---

##### `egress_only_internet_gateway_id`<sup>Optional</sup> <a name="egress_only_internet_gateway_id" id="@cdktn/provider-awscc.ec2Route.Ec2Route.Initializer.parameter.egressOnlyInternetGatewayId"></a>

- *Type:* str

[IPv6 traffic only] The ID of an egress-only internet gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_route#egress_only_internet_gateway_id Ec2Route#egress_only_internet_gateway_id}

---

##### `gateway_id`<sup>Optional</sup> <a name="gateway_id" id="@cdktn/provider-awscc.ec2Route.Ec2Route.Initializer.parameter.gatewayId"></a>

- *Type:* str

The ID of an internet gateway or virtual private gateway attached to your VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_route#gateway_id Ec2Route#gateway_id}

---

##### `instance_id`<sup>Optional</sup> <a name="instance_id" id="@cdktn/provider-awscc.ec2Route.Ec2Route.Initializer.parameter.instanceId"></a>

- *Type:* str

The ID of a NAT instance in your VPC.

The operation fails if you specify an instance ID unless exactly one network interface is attached.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_route#instance_id Ec2Route#instance_id}

---

##### `local_gateway_id`<sup>Optional</sup> <a name="local_gateway_id" id="@cdktn/provider-awscc.ec2Route.Ec2Route.Initializer.parameter.localGatewayId"></a>

- *Type:* str

The ID of the local gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_route#local_gateway_id Ec2Route#local_gateway_id}

---

##### `nat_gateway_id`<sup>Optional</sup> <a name="nat_gateway_id" id="@cdktn/provider-awscc.ec2Route.Ec2Route.Initializer.parameter.natGatewayId"></a>

- *Type:* str

[IPv4 traffic only] The ID of a NAT gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_route#nat_gateway_id Ec2Route#nat_gateway_id}

---

##### `network_interface_id`<sup>Optional</sup> <a name="network_interface_id" id="@cdktn/provider-awscc.ec2Route.Ec2Route.Initializer.parameter.networkInterfaceId"></a>

- *Type:* str

The ID of a network interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_route#network_interface_id Ec2Route#network_interface_id}

---

##### `odb_network_arn`<sup>Optional</sup> <a name="odb_network_arn" id="@cdktn/provider-awscc.ec2Route.Ec2Route.Initializer.parameter.odbNetworkArn"></a>

- *Type:* str

The Amazon Resource Name (ARN) of the ODB network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_route#odb_network_arn Ec2Route#odb_network_arn}

---

##### `transit_gateway_id`<sup>Optional</sup> <a name="transit_gateway_id" id="@cdktn/provider-awscc.ec2Route.Ec2Route.Initializer.parameter.transitGatewayId"></a>

- *Type:* str

The ID of a transit gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_route#transit_gateway_id Ec2Route#transit_gateway_id}

---

##### `vpc_endpoint_id`<sup>Optional</sup> <a name="vpc_endpoint_id" id="@cdktn/provider-awscc.ec2Route.Ec2Route.Initializer.parameter.vpcEndpointId"></a>

- *Type:* str

The ID of a VPC endpoint. Supported for Gateway Load Balancer endpoints only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_route#vpc_endpoint_id Ec2Route#vpc_endpoint_id}

---

##### `vpc_peering_connection_id`<sup>Optional</sup> <a name="vpc_peering_connection_id" id="@cdktn/provider-awscc.ec2Route.Ec2Route.Initializer.parameter.vpcPeeringConnectionId"></a>

- *Type:* str

The ID of a VPC peering connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_route#vpc_peering_connection_id Ec2Route#vpc_peering_connection_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.resetCarrierGatewayId">reset_carrier_gateway_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.resetCoreNetworkArn">reset_core_network_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.resetDestinationCidrBlock">reset_destination_cidr_block</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.resetDestinationIpv6CidrBlock">reset_destination_ipv6_cidr_block</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.resetDestinationPrefixListId">reset_destination_prefix_list_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.resetEgressOnlyInternetGatewayId">reset_egress_only_internet_gateway_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.resetGatewayId">reset_gateway_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.resetInstanceId">reset_instance_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.resetLocalGatewayId">reset_local_gateway_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.resetNatGatewayId">reset_nat_gateway_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.resetNetworkInterfaceId">reset_network_interface_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.resetOdbNetworkArn">reset_odb_network_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.resetTransitGatewayId">reset_transit_gateway_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.resetVpcEndpointId">reset_vpc_endpoint_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.resetVpcPeeringConnectionId">reset_vpc_peering_connection_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2Route.Ec2Route.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ec2Route.Ec2Route.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ec2Route.Ec2Route.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.ec2Route.Ec2Route.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ec2Route.Ec2Route.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2Route.Ec2Route.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.ec2Route.Ec2Route.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.ec2Route.Ec2Route.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.ec2Route.Ec2Route.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.ec2Route.Ec2Route.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.ec2Route.Ec2Route.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.ec2Route.Ec2Route.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.ec2Route.Ec2Route.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.ec2Route.Ec2Route.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ec2Route.Ec2Route.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Route.Ec2Route.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ec2Route.Ec2Route.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Route.Ec2Route.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ec2Route.Ec2Route.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Route.Ec2Route.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ec2Route.Ec2Route.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Route.Ec2Route.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ec2Route.Ec2Route.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Route.Ec2Route.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ec2Route.Ec2Route.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Route.Ec2Route.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ec2Route.Ec2Route.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Route.Ec2Route.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ec2Route.Ec2Route.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Route.Ec2Route.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ec2Route.Ec2Route.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Route.Ec2Route.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.ec2Route.Ec2Route.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.ec2Route.Ec2Route.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2Route.Ec2Route.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2Route.Ec2Route.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ec2Route.Ec2Route.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Route.Ec2Route.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.ec2Route.Ec2Route.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2Route.Ec2Route.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.ec2Route.Ec2Route.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.ec2Route.Ec2Route.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ec2Route.Ec2Route.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.ec2Route.Ec2Route.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2Route.Ec2Route.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_carrier_gateway_id` <a name="reset_carrier_gateway_id" id="@cdktn/provider-awscc.ec2Route.Ec2Route.resetCarrierGatewayId"></a>

```python
def reset_carrier_gateway_id() -> None
```

##### `reset_core_network_arn` <a name="reset_core_network_arn" id="@cdktn/provider-awscc.ec2Route.Ec2Route.resetCoreNetworkArn"></a>

```python
def reset_core_network_arn() -> None
```

##### `reset_destination_cidr_block` <a name="reset_destination_cidr_block" id="@cdktn/provider-awscc.ec2Route.Ec2Route.resetDestinationCidrBlock"></a>

```python
def reset_destination_cidr_block() -> None
```

##### `reset_destination_ipv6_cidr_block` <a name="reset_destination_ipv6_cidr_block" id="@cdktn/provider-awscc.ec2Route.Ec2Route.resetDestinationIpv6CidrBlock"></a>

```python
def reset_destination_ipv6_cidr_block() -> None
```

##### `reset_destination_prefix_list_id` <a name="reset_destination_prefix_list_id" id="@cdktn/provider-awscc.ec2Route.Ec2Route.resetDestinationPrefixListId"></a>

```python
def reset_destination_prefix_list_id() -> None
```

##### `reset_egress_only_internet_gateway_id` <a name="reset_egress_only_internet_gateway_id" id="@cdktn/provider-awscc.ec2Route.Ec2Route.resetEgressOnlyInternetGatewayId"></a>

```python
def reset_egress_only_internet_gateway_id() -> None
```

##### `reset_gateway_id` <a name="reset_gateway_id" id="@cdktn/provider-awscc.ec2Route.Ec2Route.resetGatewayId"></a>

```python
def reset_gateway_id() -> None
```

##### `reset_instance_id` <a name="reset_instance_id" id="@cdktn/provider-awscc.ec2Route.Ec2Route.resetInstanceId"></a>

```python
def reset_instance_id() -> None
```

##### `reset_local_gateway_id` <a name="reset_local_gateway_id" id="@cdktn/provider-awscc.ec2Route.Ec2Route.resetLocalGatewayId"></a>

```python
def reset_local_gateway_id() -> None
```

##### `reset_nat_gateway_id` <a name="reset_nat_gateway_id" id="@cdktn/provider-awscc.ec2Route.Ec2Route.resetNatGatewayId"></a>

```python
def reset_nat_gateway_id() -> None
```

##### `reset_network_interface_id` <a name="reset_network_interface_id" id="@cdktn/provider-awscc.ec2Route.Ec2Route.resetNetworkInterfaceId"></a>

```python
def reset_network_interface_id() -> None
```

##### `reset_odb_network_arn` <a name="reset_odb_network_arn" id="@cdktn/provider-awscc.ec2Route.Ec2Route.resetOdbNetworkArn"></a>

```python
def reset_odb_network_arn() -> None
```

##### `reset_transit_gateway_id` <a name="reset_transit_gateway_id" id="@cdktn/provider-awscc.ec2Route.Ec2Route.resetTransitGatewayId"></a>

```python
def reset_transit_gateway_id() -> None
```

##### `reset_vpc_endpoint_id` <a name="reset_vpc_endpoint_id" id="@cdktn/provider-awscc.ec2Route.Ec2Route.resetVpcEndpointId"></a>

```python
def reset_vpc_endpoint_id() -> None
```

##### `reset_vpc_peering_connection_id` <a name="reset_vpc_peering_connection_id" id="@cdktn/provider-awscc.ec2Route.Ec2Route.resetVpcPeeringConnectionId"></a>

```python
def reset_vpc_peering_connection_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a Ec2Route resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.ec2Route.Ec2Route.isConstruct"></a>

```python
from cdktn_provider_awscc import ec2_route

ec2Route.Ec2Route.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2Route.Ec2Route.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.ec2Route.Ec2Route.isTerraformElement"></a>

```python
from cdktn_provider_awscc import ec2_route

ec2Route.Ec2Route.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2Route.Ec2Route.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.ec2Route.Ec2Route.isTerraformResource"></a>

```python
from cdktn_provider_awscc import ec2_route

ec2Route.Ec2Route.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2Route.Ec2Route.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.ec2Route.Ec2Route.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import ec2_route

ec2Route.Ec2Route.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a Ec2Route resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2Route.Ec2Route.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.ec2Route.Ec2Route.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Ec2Route to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.ec2Route.Ec2Route.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Ec2Route that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_route#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2Route.Ec2Route.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Ec2Route to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.property.cidrBlock">cidr_block</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.property.carrierGatewayIdInput">carrier_gateway_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.property.coreNetworkArnInput">core_network_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.property.destinationCidrBlockInput">destination_cidr_block_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.property.destinationIpv6CidrBlockInput">destination_ipv6_cidr_block_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.property.destinationPrefixListIdInput">destination_prefix_list_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.property.egressOnlyInternetGatewayIdInput">egress_only_internet_gateway_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.property.gatewayIdInput">gateway_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.property.instanceIdInput">instance_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.property.localGatewayIdInput">local_gateway_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.property.natGatewayIdInput">nat_gateway_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.property.networkInterfaceIdInput">network_interface_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.property.odbNetworkArnInput">odb_network_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.property.routeTableIdInput">route_table_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.property.transitGatewayIdInput">transit_gateway_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.property.vpcEndpointIdInput">vpc_endpoint_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.property.vpcPeeringConnectionIdInput">vpc_peering_connection_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.property.carrierGatewayId">carrier_gateway_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.property.coreNetworkArn">core_network_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.property.destinationCidrBlock">destination_cidr_block</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.property.destinationIpv6CidrBlock">destination_ipv6_cidr_block</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.property.destinationPrefixListId">destination_prefix_list_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.property.egressOnlyInternetGatewayId">egress_only_internet_gateway_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.property.gatewayId">gateway_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.property.instanceId">instance_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.property.localGatewayId">local_gateway_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.property.natGatewayId">nat_gateway_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.property.networkInterfaceId">network_interface_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.property.odbNetworkArn">odb_network_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.property.routeTableId">route_table_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.property.transitGatewayId">transit_gateway_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.property.vpcEndpointId">vpc_endpoint_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.property.vpcPeeringConnectionId">vpc_peering_connection_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ec2Route.Ec2Route.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.ec2Route.Ec2Route.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2Route.Ec2Route.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.ec2Route.Ec2Route.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.ec2Route.Ec2Route.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.ec2Route.Ec2Route.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.ec2Route.Ec2Route.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2Route.Ec2Route.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2Route.Ec2Route.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ec2Route.Ec2Route.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ec2Route.Ec2Route.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2Route.Ec2Route.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2Route.Ec2Route.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2Route.Ec2Route.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `cidr_block`<sup>Required</sup> <a name="cidr_block" id="@cdktn/provider-awscc.ec2Route.Ec2Route.property.cidrBlock"></a>

```python
cidr_block: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2Route.Ec2Route.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `carrier_gateway_id_input`<sup>Optional</sup> <a name="carrier_gateway_id_input" id="@cdktn/provider-awscc.ec2Route.Ec2Route.property.carrierGatewayIdInput"></a>

```python
carrier_gateway_id_input: str
```

- *Type:* str

---

##### `core_network_arn_input`<sup>Optional</sup> <a name="core_network_arn_input" id="@cdktn/provider-awscc.ec2Route.Ec2Route.property.coreNetworkArnInput"></a>

```python
core_network_arn_input: str
```

- *Type:* str

---

##### `destination_cidr_block_input`<sup>Optional</sup> <a name="destination_cidr_block_input" id="@cdktn/provider-awscc.ec2Route.Ec2Route.property.destinationCidrBlockInput"></a>

```python
destination_cidr_block_input: str
```

- *Type:* str

---

##### `destination_ipv6_cidr_block_input`<sup>Optional</sup> <a name="destination_ipv6_cidr_block_input" id="@cdktn/provider-awscc.ec2Route.Ec2Route.property.destinationIpv6CidrBlockInput"></a>

```python
destination_ipv6_cidr_block_input: str
```

- *Type:* str

---

##### `destination_prefix_list_id_input`<sup>Optional</sup> <a name="destination_prefix_list_id_input" id="@cdktn/provider-awscc.ec2Route.Ec2Route.property.destinationPrefixListIdInput"></a>

```python
destination_prefix_list_id_input: str
```

- *Type:* str

---

##### `egress_only_internet_gateway_id_input`<sup>Optional</sup> <a name="egress_only_internet_gateway_id_input" id="@cdktn/provider-awscc.ec2Route.Ec2Route.property.egressOnlyInternetGatewayIdInput"></a>

```python
egress_only_internet_gateway_id_input: str
```

- *Type:* str

---

##### `gateway_id_input`<sup>Optional</sup> <a name="gateway_id_input" id="@cdktn/provider-awscc.ec2Route.Ec2Route.property.gatewayIdInput"></a>

```python
gateway_id_input: str
```

- *Type:* str

---

##### `instance_id_input`<sup>Optional</sup> <a name="instance_id_input" id="@cdktn/provider-awscc.ec2Route.Ec2Route.property.instanceIdInput"></a>

```python
instance_id_input: str
```

- *Type:* str

---

##### `local_gateway_id_input`<sup>Optional</sup> <a name="local_gateway_id_input" id="@cdktn/provider-awscc.ec2Route.Ec2Route.property.localGatewayIdInput"></a>

```python
local_gateway_id_input: str
```

- *Type:* str

---

##### `nat_gateway_id_input`<sup>Optional</sup> <a name="nat_gateway_id_input" id="@cdktn/provider-awscc.ec2Route.Ec2Route.property.natGatewayIdInput"></a>

```python
nat_gateway_id_input: str
```

- *Type:* str

---

##### `network_interface_id_input`<sup>Optional</sup> <a name="network_interface_id_input" id="@cdktn/provider-awscc.ec2Route.Ec2Route.property.networkInterfaceIdInput"></a>

```python
network_interface_id_input: str
```

- *Type:* str

---

##### `odb_network_arn_input`<sup>Optional</sup> <a name="odb_network_arn_input" id="@cdktn/provider-awscc.ec2Route.Ec2Route.property.odbNetworkArnInput"></a>

```python
odb_network_arn_input: str
```

- *Type:* str

---

##### `route_table_id_input`<sup>Optional</sup> <a name="route_table_id_input" id="@cdktn/provider-awscc.ec2Route.Ec2Route.property.routeTableIdInput"></a>

```python
route_table_id_input: str
```

- *Type:* str

---

##### `transit_gateway_id_input`<sup>Optional</sup> <a name="transit_gateway_id_input" id="@cdktn/provider-awscc.ec2Route.Ec2Route.property.transitGatewayIdInput"></a>

```python
transit_gateway_id_input: str
```

- *Type:* str

---

##### `vpc_endpoint_id_input`<sup>Optional</sup> <a name="vpc_endpoint_id_input" id="@cdktn/provider-awscc.ec2Route.Ec2Route.property.vpcEndpointIdInput"></a>

```python
vpc_endpoint_id_input: str
```

- *Type:* str

---

##### `vpc_peering_connection_id_input`<sup>Optional</sup> <a name="vpc_peering_connection_id_input" id="@cdktn/provider-awscc.ec2Route.Ec2Route.property.vpcPeeringConnectionIdInput"></a>

```python
vpc_peering_connection_id_input: str
```

- *Type:* str

---

##### `carrier_gateway_id`<sup>Required</sup> <a name="carrier_gateway_id" id="@cdktn/provider-awscc.ec2Route.Ec2Route.property.carrierGatewayId"></a>

```python
carrier_gateway_id: str
```

- *Type:* str

---

##### `core_network_arn`<sup>Required</sup> <a name="core_network_arn" id="@cdktn/provider-awscc.ec2Route.Ec2Route.property.coreNetworkArn"></a>

```python
core_network_arn: str
```

- *Type:* str

---

##### `destination_cidr_block`<sup>Required</sup> <a name="destination_cidr_block" id="@cdktn/provider-awscc.ec2Route.Ec2Route.property.destinationCidrBlock"></a>

```python
destination_cidr_block: str
```

- *Type:* str

---

##### `destination_ipv6_cidr_block`<sup>Required</sup> <a name="destination_ipv6_cidr_block" id="@cdktn/provider-awscc.ec2Route.Ec2Route.property.destinationIpv6CidrBlock"></a>

```python
destination_ipv6_cidr_block: str
```

- *Type:* str

---

##### `destination_prefix_list_id`<sup>Required</sup> <a name="destination_prefix_list_id" id="@cdktn/provider-awscc.ec2Route.Ec2Route.property.destinationPrefixListId"></a>

```python
destination_prefix_list_id: str
```

- *Type:* str

---

##### `egress_only_internet_gateway_id`<sup>Required</sup> <a name="egress_only_internet_gateway_id" id="@cdktn/provider-awscc.ec2Route.Ec2Route.property.egressOnlyInternetGatewayId"></a>

```python
egress_only_internet_gateway_id: str
```

- *Type:* str

---

##### `gateway_id`<sup>Required</sup> <a name="gateway_id" id="@cdktn/provider-awscc.ec2Route.Ec2Route.property.gatewayId"></a>

```python
gateway_id: str
```

- *Type:* str

---

##### `instance_id`<sup>Required</sup> <a name="instance_id" id="@cdktn/provider-awscc.ec2Route.Ec2Route.property.instanceId"></a>

```python
instance_id: str
```

- *Type:* str

---

##### `local_gateway_id`<sup>Required</sup> <a name="local_gateway_id" id="@cdktn/provider-awscc.ec2Route.Ec2Route.property.localGatewayId"></a>

```python
local_gateway_id: str
```

- *Type:* str

---

##### `nat_gateway_id`<sup>Required</sup> <a name="nat_gateway_id" id="@cdktn/provider-awscc.ec2Route.Ec2Route.property.natGatewayId"></a>

```python
nat_gateway_id: str
```

- *Type:* str

---

##### `network_interface_id`<sup>Required</sup> <a name="network_interface_id" id="@cdktn/provider-awscc.ec2Route.Ec2Route.property.networkInterfaceId"></a>

```python
network_interface_id: str
```

- *Type:* str

---

##### `odb_network_arn`<sup>Required</sup> <a name="odb_network_arn" id="@cdktn/provider-awscc.ec2Route.Ec2Route.property.odbNetworkArn"></a>

```python
odb_network_arn: str
```

- *Type:* str

---

##### `route_table_id`<sup>Required</sup> <a name="route_table_id" id="@cdktn/provider-awscc.ec2Route.Ec2Route.property.routeTableId"></a>

```python
route_table_id: str
```

- *Type:* str

---

##### `transit_gateway_id`<sup>Required</sup> <a name="transit_gateway_id" id="@cdktn/provider-awscc.ec2Route.Ec2Route.property.transitGatewayId"></a>

```python
transit_gateway_id: str
```

- *Type:* str

---

##### `vpc_endpoint_id`<sup>Required</sup> <a name="vpc_endpoint_id" id="@cdktn/provider-awscc.ec2Route.Ec2Route.property.vpcEndpointId"></a>

```python
vpc_endpoint_id: str
```

- *Type:* str

---

##### `vpc_peering_connection_id`<sup>Required</sup> <a name="vpc_peering_connection_id" id="@cdktn/provider-awscc.ec2Route.Ec2Route.property.vpcPeeringConnectionId"></a>

```python
vpc_peering_connection_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ec2Route.Ec2Route.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2RouteConfig <a name="Ec2RouteConfig" id="@cdktn/provider-awscc.ec2Route.Ec2RouteConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2Route.Ec2RouteConfig.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_route

ec2Route.Ec2RouteConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  route_table_id: str,
  carrier_gateway_id: str = None,
  core_network_arn: str = None,
  destination_cidr_block: str = None,
  destination_ipv6_cidr_block: str = None,
  destination_prefix_list_id: str = None,
  egress_only_internet_gateway_id: str = None,
  gateway_id: str = None,
  instance_id: str = None,
  local_gateway_id: str = None,
  nat_gateway_id: str = None,
  network_interface_id: str = None,
  odb_network_arn: str = None,
  transit_gateway_id: str = None,
  vpc_endpoint_id: str = None,
  vpc_peering_connection_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2RouteConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2RouteConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2RouteConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2RouteConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2RouteConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2RouteConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2RouteConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2RouteConfig.property.routeTableId">route_table_id</a></code> | <code>str</code> | The ID of the route table for the route. |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2RouteConfig.property.carrierGatewayId">carrier_gateway_id</a></code> | <code>str</code> | The ID of the carrier gateway. |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2RouteConfig.property.coreNetworkArn">core_network_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the core network. |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2RouteConfig.property.destinationCidrBlock">destination_cidr_block</a></code> | <code>str</code> | The IPv4 CIDR address block used for the destination match. |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2RouteConfig.property.destinationIpv6CidrBlock">destination_ipv6_cidr_block</a></code> | <code>str</code> | The IPv6 CIDR block used for the destination match. Routing decisions are based on the most specific match. |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2RouteConfig.property.destinationPrefixListId">destination_prefix_list_id</a></code> | <code>str</code> | The ID of a prefix list used for the destination match. |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2RouteConfig.property.egressOnlyInternetGatewayId">egress_only_internet_gateway_id</a></code> | <code>str</code> | [IPv6 traffic only] The ID of an egress-only internet gateway. |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2RouteConfig.property.gatewayId">gateway_id</a></code> | <code>str</code> | The ID of an internet gateway or virtual private gateway attached to your VPC. |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2RouteConfig.property.instanceId">instance_id</a></code> | <code>str</code> | The ID of a NAT instance in your VPC. |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2RouteConfig.property.localGatewayId">local_gateway_id</a></code> | <code>str</code> | The ID of the local gateway. |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2RouteConfig.property.natGatewayId">nat_gateway_id</a></code> | <code>str</code> | [IPv4 traffic only] The ID of a NAT gateway. |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2RouteConfig.property.networkInterfaceId">network_interface_id</a></code> | <code>str</code> | The ID of a network interface. |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2RouteConfig.property.odbNetworkArn">odb_network_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the ODB network. |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2RouteConfig.property.transitGatewayId">transit_gateway_id</a></code> | <code>str</code> | The ID of a transit gateway. |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2RouteConfig.property.vpcEndpointId">vpc_endpoint_id</a></code> | <code>str</code> | The ID of a VPC endpoint. Supported for Gateway Load Balancer endpoints only. |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2RouteConfig.property.vpcPeeringConnectionId">vpc_peering_connection_id</a></code> | <code>str</code> | The ID of a VPC peering connection. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2Route.Ec2RouteConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2Route.Ec2RouteConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ec2Route.Ec2RouteConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ec2Route.Ec2RouteConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2Route.Ec2RouteConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2Route.Ec2RouteConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2Route.Ec2RouteConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `route_table_id`<sup>Required</sup> <a name="route_table_id" id="@cdktn/provider-awscc.ec2Route.Ec2RouteConfig.property.routeTableId"></a>

```python
route_table_id: str
```

- *Type:* str

The ID of the route table for the route.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_route#route_table_id Ec2Route#route_table_id}

---

##### `carrier_gateway_id`<sup>Optional</sup> <a name="carrier_gateway_id" id="@cdktn/provider-awscc.ec2Route.Ec2RouteConfig.property.carrierGatewayId"></a>

```python
carrier_gateway_id: str
```

- *Type:* str

The ID of the carrier gateway.

You can only use this option when the VPC contains a subnet which is associated with a Wavelength Zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_route#carrier_gateway_id Ec2Route#carrier_gateway_id}

---

##### `core_network_arn`<sup>Optional</sup> <a name="core_network_arn" id="@cdktn/provider-awscc.ec2Route.Ec2RouteConfig.property.coreNetworkArn"></a>

```python
core_network_arn: str
```

- *Type:* str

The Amazon Resource Name (ARN) of the core network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_route#core_network_arn Ec2Route#core_network_arn}

---

##### `destination_cidr_block`<sup>Optional</sup> <a name="destination_cidr_block" id="@cdktn/provider-awscc.ec2Route.Ec2RouteConfig.property.destinationCidrBlock"></a>

```python
destination_cidr_block: str
```

- *Type:* str

The IPv4 CIDR address block used for the destination match.

Routing decisions are based on the most specific match. We modify the specified CIDR block to its canonical form; for example, if you specify `100.68.0.18/18`, we modify it to `100.68.0.0/18`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_route#destination_cidr_block Ec2Route#destination_cidr_block}

---

##### `destination_ipv6_cidr_block`<sup>Optional</sup> <a name="destination_ipv6_cidr_block" id="@cdktn/provider-awscc.ec2Route.Ec2RouteConfig.property.destinationIpv6CidrBlock"></a>

```python
destination_ipv6_cidr_block: str
```

- *Type:* str

The IPv6 CIDR block used for the destination match. Routing decisions are based on the most specific match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_route#destination_ipv_6_cidr_block Ec2Route#destination_ipv_6_cidr_block}

---

##### `destination_prefix_list_id`<sup>Optional</sup> <a name="destination_prefix_list_id" id="@cdktn/provider-awscc.ec2Route.Ec2RouteConfig.property.destinationPrefixListId"></a>

```python
destination_prefix_list_id: str
```

- *Type:* str

The ID of a prefix list used for the destination match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_route#destination_prefix_list_id Ec2Route#destination_prefix_list_id}

---

##### `egress_only_internet_gateway_id`<sup>Optional</sup> <a name="egress_only_internet_gateway_id" id="@cdktn/provider-awscc.ec2Route.Ec2RouteConfig.property.egressOnlyInternetGatewayId"></a>

```python
egress_only_internet_gateway_id: str
```

- *Type:* str

[IPv6 traffic only] The ID of an egress-only internet gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_route#egress_only_internet_gateway_id Ec2Route#egress_only_internet_gateway_id}

---

##### `gateway_id`<sup>Optional</sup> <a name="gateway_id" id="@cdktn/provider-awscc.ec2Route.Ec2RouteConfig.property.gatewayId"></a>

```python
gateway_id: str
```

- *Type:* str

The ID of an internet gateway or virtual private gateway attached to your VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_route#gateway_id Ec2Route#gateway_id}

---

##### `instance_id`<sup>Optional</sup> <a name="instance_id" id="@cdktn/provider-awscc.ec2Route.Ec2RouteConfig.property.instanceId"></a>

```python
instance_id: str
```

- *Type:* str

The ID of a NAT instance in your VPC.

The operation fails if you specify an instance ID unless exactly one network interface is attached.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_route#instance_id Ec2Route#instance_id}

---

##### `local_gateway_id`<sup>Optional</sup> <a name="local_gateway_id" id="@cdktn/provider-awscc.ec2Route.Ec2RouteConfig.property.localGatewayId"></a>

```python
local_gateway_id: str
```

- *Type:* str

The ID of the local gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_route#local_gateway_id Ec2Route#local_gateway_id}

---

##### `nat_gateway_id`<sup>Optional</sup> <a name="nat_gateway_id" id="@cdktn/provider-awscc.ec2Route.Ec2RouteConfig.property.natGatewayId"></a>

```python
nat_gateway_id: str
```

- *Type:* str

[IPv4 traffic only] The ID of a NAT gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_route#nat_gateway_id Ec2Route#nat_gateway_id}

---

##### `network_interface_id`<sup>Optional</sup> <a name="network_interface_id" id="@cdktn/provider-awscc.ec2Route.Ec2RouteConfig.property.networkInterfaceId"></a>

```python
network_interface_id: str
```

- *Type:* str

The ID of a network interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_route#network_interface_id Ec2Route#network_interface_id}

---

##### `odb_network_arn`<sup>Optional</sup> <a name="odb_network_arn" id="@cdktn/provider-awscc.ec2Route.Ec2RouteConfig.property.odbNetworkArn"></a>

```python
odb_network_arn: str
```

- *Type:* str

The Amazon Resource Name (ARN) of the ODB network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_route#odb_network_arn Ec2Route#odb_network_arn}

---

##### `transit_gateway_id`<sup>Optional</sup> <a name="transit_gateway_id" id="@cdktn/provider-awscc.ec2Route.Ec2RouteConfig.property.transitGatewayId"></a>

```python
transit_gateway_id: str
```

- *Type:* str

The ID of a transit gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_route#transit_gateway_id Ec2Route#transit_gateway_id}

---

##### `vpc_endpoint_id`<sup>Optional</sup> <a name="vpc_endpoint_id" id="@cdktn/provider-awscc.ec2Route.Ec2RouteConfig.property.vpcEndpointId"></a>

```python
vpc_endpoint_id: str
```

- *Type:* str

The ID of a VPC endpoint. Supported for Gateway Load Balancer endpoints only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_route#vpc_endpoint_id Ec2Route#vpc_endpoint_id}

---

##### `vpc_peering_connection_id`<sup>Optional</sup> <a name="vpc_peering_connection_id" id="@cdktn/provider-awscc.ec2Route.Ec2RouteConfig.property.vpcPeeringConnectionId"></a>

```python
vpc_peering_connection_id: str
```

- *Type:* str

The ID of a VPC peering connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_route#vpc_peering_connection_id Ec2Route#vpc_peering_connection_id}

---



