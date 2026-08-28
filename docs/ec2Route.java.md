# `ec2Route` Submodule <a name="`ec2Route` Submodule" id="@cdktn/provider-awscc.ec2Route"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2Route <a name="Ec2Route" id="@cdktn/provider-awscc.ec2Route.Ec2Route"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_route awscc_ec2_route}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Route.Ec2Route.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_route.Ec2Route;

Ec2Route.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .routeTableId(java.lang.String)
//  .carrierGatewayId(java.lang.String)
//  .coreNetworkArn(java.lang.String)
//  .destinationCidrBlock(java.lang.String)
//  .destinationIpv6CidrBlock(java.lang.String)
//  .destinationPrefixListId(java.lang.String)
//  .egressOnlyInternetGatewayId(java.lang.String)
//  .gatewayId(java.lang.String)
//  .instanceId(java.lang.String)
//  .localGatewayId(java.lang.String)
//  .natGatewayId(java.lang.String)
//  .networkInterfaceId(java.lang.String)
//  .odbNetworkArn(java.lang.String)
//  .transitGatewayId(java.lang.String)
//  .vpcEndpointId(java.lang.String)
//  .vpcPeeringConnectionId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.Initializer.parameter.routeTableId">routeTableId</a></code> | <code>java.lang.String</code> | The ID of the route table for the route. |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.Initializer.parameter.carrierGatewayId">carrierGatewayId</a></code> | <code>java.lang.String</code> | The ID of the carrier gateway. |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.Initializer.parameter.coreNetworkArn">coreNetworkArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the core network. |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.Initializer.parameter.destinationCidrBlock">destinationCidrBlock</a></code> | <code>java.lang.String</code> | The IPv4 CIDR address block used for the destination match. |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.Initializer.parameter.destinationIpv6CidrBlock">destinationIpv6CidrBlock</a></code> | <code>java.lang.String</code> | The IPv6 CIDR block used for the destination match. Routing decisions are based on the most specific match. |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.Initializer.parameter.destinationPrefixListId">destinationPrefixListId</a></code> | <code>java.lang.String</code> | The ID of a prefix list used for the destination match. |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.Initializer.parameter.egressOnlyInternetGatewayId">egressOnlyInternetGatewayId</a></code> | <code>java.lang.String</code> | [IPv6 traffic only] The ID of an egress-only internet gateway. |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.Initializer.parameter.gatewayId">gatewayId</a></code> | <code>java.lang.String</code> | The ID of an internet gateway or virtual private gateway attached to your VPC. |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.Initializer.parameter.instanceId">instanceId</a></code> | <code>java.lang.String</code> | The ID of a NAT instance in your VPC. |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.Initializer.parameter.localGatewayId">localGatewayId</a></code> | <code>java.lang.String</code> | The ID of the local gateway. |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.Initializer.parameter.natGatewayId">natGatewayId</a></code> | <code>java.lang.String</code> | [IPv4 traffic only] The ID of a NAT gateway. |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.Initializer.parameter.networkInterfaceId">networkInterfaceId</a></code> | <code>java.lang.String</code> | The ID of a network interface. |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.Initializer.parameter.odbNetworkArn">odbNetworkArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the ODB network. |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.Initializer.parameter.transitGatewayId">transitGatewayId</a></code> | <code>java.lang.String</code> | The ID of a transit gateway. |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.Initializer.parameter.vpcEndpointId">vpcEndpointId</a></code> | <code>java.lang.String</code> | The ID of a VPC endpoint. Supported for Gateway Load Balancer endpoints only. |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.Initializer.parameter.vpcPeeringConnectionId">vpcPeeringConnectionId</a></code> | <code>java.lang.String</code> | The ID of a VPC peering connection. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2Route.Ec2Route.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2Route.Ec2Route.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2Route.Ec2Route.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2Route.Ec2Route.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ec2Route.Ec2Route.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ec2Route.Ec2Route.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2Route.Ec2Route.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2Route.Ec2Route.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2Route.Ec2Route.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `routeTableId`<sup>Required</sup> <a name="routeTableId" id="@cdktn/provider-awscc.ec2Route.Ec2Route.Initializer.parameter.routeTableId"></a>

- *Type:* java.lang.String

The ID of the route table for the route.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_route#route_table_id Ec2Route#route_table_id}

---

##### `carrierGatewayId`<sup>Optional</sup> <a name="carrierGatewayId" id="@cdktn/provider-awscc.ec2Route.Ec2Route.Initializer.parameter.carrierGatewayId"></a>

- *Type:* java.lang.String

The ID of the carrier gateway.

You can only use this option when the VPC contains a subnet which is associated with a Wavelength Zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_route#carrier_gateway_id Ec2Route#carrier_gateway_id}

---

##### `coreNetworkArn`<sup>Optional</sup> <a name="coreNetworkArn" id="@cdktn/provider-awscc.ec2Route.Ec2Route.Initializer.parameter.coreNetworkArn"></a>

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the core network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_route#core_network_arn Ec2Route#core_network_arn}

---

##### `destinationCidrBlock`<sup>Optional</sup> <a name="destinationCidrBlock" id="@cdktn/provider-awscc.ec2Route.Ec2Route.Initializer.parameter.destinationCidrBlock"></a>

- *Type:* java.lang.String

The IPv4 CIDR address block used for the destination match.

Routing decisions are based on the most specific match. We modify the specified CIDR block to its canonical form; for example, if you specify `100.68.0.18/18`, we modify it to `100.68.0.0/18`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_route#destination_cidr_block Ec2Route#destination_cidr_block}

---

##### `destinationIpv6CidrBlock`<sup>Optional</sup> <a name="destinationIpv6CidrBlock" id="@cdktn/provider-awscc.ec2Route.Ec2Route.Initializer.parameter.destinationIpv6CidrBlock"></a>

- *Type:* java.lang.String

The IPv6 CIDR block used for the destination match. Routing decisions are based on the most specific match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_route#destination_ipv_6_cidr_block Ec2Route#destination_ipv_6_cidr_block}

---

##### `destinationPrefixListId`<sup>Optional</sup> <a name="destinationPrefixListId" id="@cdktn/provider-awscc.ec2Route.Ec2Route.Initializer.parameter.destinationPrefixListId"></a>

- *Type:* java.lang.String

The ID of a prefix list used for the destination match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_route#destination_prefix_list_id Ec2Route#destination_prefix_list_id}

---

##### `egressOnlyInternetGatewayId`<sup>Optional</sup> <a name="egressOnlyInternetGatewayId" id="@cdktn/provider-awscc.ec2Route.Ec2Route.Initializer.parameter.egressOnlyInternetGatewayId"></a>

- *Type:* java.lang.String

[IPv6 traffic only] The ID of an egress-only internet gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_route#egress_only_internet_gateway_id Ec2Route#egress_only_internet_gateway_id}

---

##### `gatewayId`<sup>Optional</sup> <a name="gatewayId" id="@cdktn/provider-awscc.ec2Route.Ec2Route.Initializer.parameter.gatewayId"></a>

- *Type:* java.lang.String

The ID of an internet gateway or virtual private gateway attached to your VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_route#gateway_id Ec2Route#gateway_id}

---

##### `instanceId`<sup>Optional</sup> <a name="instanceId" id="@cdktn/provider-awscc.ec2Route.Ec2Route.Initializer.parameter.instanceId"></a>

- *Type:* java.lang.String

The ID of a NAT instance in your VPC.

The operation fails if you specify an instance ID unless exactly one network interface is attached.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_route#instance_id Ec2Route#instance_id}

---

##### `localGatewayId`<sup>Optional</sup> <a name="localGatewayId" id="@cdktn/provider-awscc.ec2Route.Ec2Route.Initializer.parameter.localGatewayId"></a>

- *Type:* java.lang.String

The ID of the local gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_route#local_gateway_id Ec2Route#local_gateway_id}

---

##### `natGatewayId`<sup>Optional</sup> <a name="natGatewayId" id="@cdktn/provider-awscc.ec2Route.Ec2Route.Initializer.parameter.natGatewayId"></a>

- *Type:* java.lang.String

[IPv4 traffic only] The ID of a NAT gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_route#nat_gateway_id Ec2Route#nat_gateway_id}

---

##### `networkInterfaceId`<sup>Optional</sup> <a name="networkInterfaceId" id="@cdktn/provider-awscc.ec2Route.Ec2Route.Initializer.parameter.networkInterfaceId"></a>

- *Type:* java.lang.String

The ID of a network interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_route#network_interface_id Ec2Route#network_interface_id}

---

##### `odbNetworkArn`<sup>Optional</sup> <a name="odbNetworkArn" id="@cdktn/provider-awscc.ec2Route.Ec2Route.Initializer.parameter.odbNetworkArn"></a>

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the ODB network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_route#odb_network_arn Ec2Route#odb_network_arn}

---

##### `transitGatewayId`<sup>Optional</sup> <a name="transitGatewayId" id="@cdktn/provider-awscc.ec2Route.Ec2Route.Initializer.parameter.transitGatewayId"></a>

- *Type:* java.lang.String

The ID of a transit gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_route#transit_gateway_id Ec2Route#transit_gateway_id}

---

##### `vpcEndpointId`<sup>Optional</sup> <a name="vpcEndpointId" id="@cdktn/provider-awscc.ec2Route.Ec2Route.Initializer.parameter.vpcEndpointId"></a>

- *Type:* java.lang.String

The ID of a VPC endpoint. Supported for Gateway Load Balancer endpoints only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_route#vpc_endpoint_id Ec2Route#vpc_endpoint_id}

---

##### `vpcPeeringConnectionId`<sup>Optional</sup> <a name="vpcPeeringConnectionId" id="@cdktn/provider-awscc.ec2Route.Ec2Route.Initializer.parameter.vpcPeeringConnectionId"></a>

- *Type:* java.lang.String

The ID of a VPC peering connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_route#vpc_peering_connection_id Ec2Route#vpc_peering_connection_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.resetCarrierGatewayId">resetCarrierGatewayId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.resetCoreNetworkArn">resetCoreNetworkArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.resetDestinationCidrBlock">resetDestinationCidrBlock</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.resetDestinationIpv6CidrBlock">resetDestinationIpv6CidrBlock</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.resetDestinationPrefixListId">resetDestinationPrefixListId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.resetEgressOnlyInternetGatewayId">resetEgressOnlyInternetGatewayId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.resetGatewayId">resetGatewayId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.resetInstanceId">resetInstanceId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.resetLocalGatewayId">resetLocalGatewayId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.resetNatGatewayId">resetNatGatewayId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.resetNetworkInterfaceId">resetNetworkInterfaceId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.resetOdbNetworkArn">resetOdbNetworkArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.resetTransitGatewayId">resetTransitGatewayId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.resetVpcEndpointId">resetVpcEndpointId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.resetVpcPeeringConnectionId">resetVpcPeeringConnectionId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2Route.Ec2Route.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ec2Route.Ec2Route.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ec2Route.Ec2Route.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.ec2Route.Ec2Route.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ec2Route.Ec2Route.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2Route.Ec2Route.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.ec2Route.Ec2Route.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.ec2Route.Ec2Route.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.ec2Route.Ec2Route.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.ec2Route.Ec2Route.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.ec2Route.Ec2Route.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.ec2Route.Ec2Route.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.ec2Route.Ec2Route.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2Route.Ec2Route.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2Route.Ec2Route.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Route.Ec2Route.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2Route.Ec2Route.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Route.Ec2Route.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2Route.Ec2Route.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Route.Ec2Route.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2Route.Ec2Route.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Route.Ec2Route.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2Route.Ec2Route.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Route.Ec2Route.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2Route.Ec2Route.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Route.Ec2Route.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2Route.Ec2Route.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Route.Ec2Route.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2Route.Ec2Route.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Route.Ec2Route.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2Route.Ec2Route.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Route.Ec2Route.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.ec2Route.Ec2Route.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.ec2Route.Ec2Route.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2Route.Ec2Route.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2Route.Ec2Route.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2Route.Ec2Route.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Route.Ec2Route.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.ec2Route.Ec2Route.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2Route.Ec2Route.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.ec2Route.Ec2Route.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2Route.Ec2Route.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ec2Route.Ec2Route.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.ec2Route.Ec2Route.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2Route.Ec2Route.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetCarrierGatewayId` <a name="resetCarrierGatewayId" id="@cdktn/provider-awscc.ec2Route.Ec2Route.resetCarrierGatewayId"></a>

```java
public void resetCarrierGatewayId()
```

##### `resetCoreNetworkArn` <a name="resetCoreNetworkArn" id="@cdktn/provider-awscc.ec2Route.Ec2Route.resetCoreNetworkArn"></a>

```java
public void resetCoreNetworkArn()
```

##### `resetDestinationCidrBlock` <a name="resetDestinationCidrBlock" id="@cdktn/provider-awscc.ec2Route.Ec2Route.resetDestinationCidrBlock"></a>

```java
public void resetDestinationCidrBlock()
```

##### `resetDestinationIpv6CidrBlock` <a name="resetDestinationIpv6CidrBlock" id="@cdktn/provider-awscc.ec2Route.Ec2Route.resetDestinationIpv6CidrBlock"></a>

```java
public void resetDestinationIpv6CidrBlock()
```

##### `resetDestinationPrefixListId` <a name="resetDestinationPrefixListId" id="@cdktn/provider-awscc.ec2Route.Ec2Route.resetDestinationPrefixListId"></a>

```java
public void resetDestinationPrefixListId()
```

##### `resetEgressOnlyInternetGatewayId` <a name="resetEgressOnlyInternetGatewayId" id="@cdktn/provider-awscc.ec2Route.Ec2Route.resetEgressOnlyInternetGatewayId"></a>

```java
public void resetEgressOnlyInternetGatewayId()
```

##### `resetGatewayId` <a name="resetGatewayId" id="@cdktn/provider-awscc.ec2Route.Ec2Route.resetGatewayId"></a>

```java
public void resetGatewayId()
```

##### `resetInstanceId` <a name="resetInstanceId" id="@cdktn/provider-awscc.ec2Route.Ec2Route.resetInstanceId"></a>

```java
public void resetInstanceId()
```

##### `resetLocalGatewayId` <a name="resetLocalGatewayId" id="@cdktn/provider-awscc.ec2Route.Ec2Route.resetLocalGatewayId"></a>

```java
public void resetLocalGatewayId()
```

##### `resetNatGatewayId` <a name="resetNatGatewayId" id="@cdktn/provider-awscc.ec2Route.Ec2Route.resetNatGatewayId"></a>

```java
public void resetNatGatewayId()
```

##### `resetNetworkInterfaceId` <a name="resetNetworkInterfaceId" id="@cdktn/provider-awscc.ec2Route.Ec2Route.resetNetworkInterfaceId"></a>

```java
public void resetNetworkInterfaceId()
```

##### `resetOdbNetworkArn` <a name="resetOdbNetworkArn" id="@cdktn/provider-awscc.ec2Route.Ec2Route.resetOdbNetworkArn"></a>

```java
public void resetOdbNetworkArn()
```

##### `resetTransitGatewayId` <a name="resetTransitGatewayId" id="@cdktn/provider-awscc.ec2Route.Ec2Route.resetTransitGatewayId"></a>

```java
public void resetTransitGatewayId()
```

##### `resetVpcEndpointId` <a name="resetVpcEndpointId" id="@cdktn/provider-awscc.ec2Route.Ec2Route.resetVpcEndpointId"></a>

```java
public void resetVpcEndpointId()
```

##### `resetVpcPeeringConnectionId` <a name="resetVpcPeeringConnectionId" id="@cdktn/provider-awscc.ec2Route.Ec2Route.resetVpcPeeringConnectionId"></a>

```java
public void resetVpcPeeringConnectionId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a Ec2Route resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.ec2Route.Ec2Route.isConstruct"></a>

```java
import io.cdktn.providers.awscc.ec2_route.Ec2Route;

Ec2Route.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.ec2Route.Ec2Route.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.ec2_route.Ec2Route;

Ec2Route.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2Route.Ec2Route.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.ec2Route.Ec2Route.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.ec2_route.Ec2Route;

Ec2Route.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2Route.Ec2Route.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.ec2Route.Ec2Route.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.ec2_route.Ec2Route;

Ec2Route.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),Ec2Route.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a Ec2Route resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2Route.Ec2Route.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.ec2Route.Ec2Route.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the Ec2Route to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.ec2Route.Ec2Route.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing Ec2Route that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_route#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2Route.Ec2Route.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the Ec2Route to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.property.cidrBlock">cidrBlock</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.property.carrierGatewayIdInput">carrierGatewayIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.property.coreNetworkArnInput">coreNetworkArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.property.destinationCidrBlockInput">destinationCidrBlockInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.property.destinationIpv6CidrBlockInput">destinationIpv6CidrBlockInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.property.destinationPrefixListIdInput">destinationPrefixListIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.property.egressOnlyInternetGatewayIdInput">egressOnlyInternetGatewayIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.property.gatewayIdInput">gatewayIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.property.instanceIdInput">instanceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.property.localGatewayIdInput">localGatewayIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.property.natGatewayIdInput">natGatewayIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.property.networkInterfaceIdInput">networkInterfaceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.property.odbNetworkArnInput">odbNetworkArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.property.routeTableIdInput">routeTableIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.property.transitGatewayIdInput">transitGatewayIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.property.vpcEndpointIdInput">vpcEndpointIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.property.vpcPeeringConnectionIdInput">vpcPeeringConnectionIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.property.carrierGatewayId">carrierGatewayId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.property.coreNetworkArn">coreNetworkArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.property.destinationCidrBlock">destinationCidrBlock</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.property.destinationIpv6CidrBlock">destinationIpv6CidrBlock</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.property.destinationPrefixListId">destinationPrefixListId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.property.egressOnlyInternetGatewayId">egressOnlyInternetGatewayId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.property.gatewayId">gatewayId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.property.instanceId">instanceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.property.localGatewayId">localGatewayId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.property.natGatewayId">natGatewayId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.property.networkInterfaceId">networkInterfaceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.property.odbNetworkArn">odbNetworkArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.property.routeTableId">routeTableId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.property.transitGatewayId">transitGatewayId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.property.vpcEndpointId">vpcEndpointId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.property.vpcPeeringConnectionId">vpcPeeringConnectionId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ec2Route.Ec2Route.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.ec2Route.Ec2Route.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2Route.Ec2Route.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.ec2Route.Ec2Route.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.ec2Route.Ec2Route.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.ec2Route.Ec2Route.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.ec2Route.Ec2Route.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2Route.Ec2Route.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2Route.Ec2Route.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ec2Route.Ec2Route.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ec2Route.Ec2Route.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2Route.Ec2Route.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2Route.Ec2Route.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2Route.Ec2Route.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `cidrBlock`<sup>Required</sup> <a name="cidrBlock" id="@cdktn/provider-awscc.ec2Route.Ec2Route.property.cidrBlock"></a>

```java
public java.lang.String getCidrBlock();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2Route.Ec2Route.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `carrierGatewayIdInput`<sup>Optional</sup> <a name="carrierGatewayIdInput" id="@cdktn/provider-awscc.ec2Route.Ec2Route.property.carrierGatewayIdInput"></a>

```java
public java.lang.String getCarrierGatewayIdInput();
```

- *Type:* java.lang.String

---

##### `coreNetworkArnInput`<sup>Optional</sup> <a name="coreNetworkArnInput" id="@cdktn/provider-awscc.ec2Route.Ec2Route.property.coreNetworkArnInput"></a>

```java
public java.lang.String getCoreNetworkArnInput();
```

- *Type:* java.lang.String

---

##### `destinationCidrBlockInput`<sup>Optional</sup> <a name="destinationCidrBlockInput" id="@cdktn/provider-awscc.ec2Route.Ec2Route.property.destinationCidrBlockInput"></a>

```java
public java.lang.String getDestinationCidrBlockInput();
```

- *Type:* java.lang.String

---

##### `destinationIpv6CidrBlockInput`<sup>Optional</sup> <a name="destinationIpv6CidrBlockInput" id="@cdktn/provider-awscc.ec2Route.Ec2Route.property.destinationIpv6CidrBlockInput"></a>

```java
public java.lang.String getDestinationIpv6CidrBlockInput();
```

- *Type:* java.lang.String

---

##### `destinationPrefixListIdInput`<sup>Optional</sup> <a name="destinationPrefixListIdInput" id="@cdktn/provider-awscc.ec2Route.Ec2Route.property.destinationPrefixListIdInput"></a>

```java
public java.lang.String getDestinationPrefixListIdInput();
```

- *Type:* java.lang.String

---

##### `egressOnlyInternetGatewayIdInput`<sup>Optional</sup> <a name="egressOnlyInternetGatewayIdInput" id="@cdktn/provider-awscc.ec2Route.Ec2Route.property.egressOnlyInternetGatewayIdInput"></a>

```java
public java.lang.String getEgressOnlyInternetGatewayIdInput();
```

- *Type:* java.lang.String

---

##### `gatewayIdInput`<sup>Optional</sup> <a name="gatewayIdInput" id="@cdktn/provider-awscc.ec2Route.Ec2Route.property.gatewayIdInput"></a>

```java
public java.lang.String getGatewayIdInput();
```

- *Type:* java.lang.String

---

##### `instanceIdInput`<sup>Optional</sup> <a name="instanceIdInput" id="@cdktn/provider-awscc.ec2Route.Ec2Route.property.instanceIdInput"></a>

```java
public java.lang.String getInstanceIdInput();
```

- *Type:* java.lang.String

---

##### `localGatewayIdInput`<sup>Optional</sup> <a name="localGatewayIdInput" id="@cdktn/provider-awscc.ec2Route.Ec2Route.property.localGatewayIdInput"></a>

```java
public java.lang.String getLocalGatewayIdInput();
```

- *Type:* java.lang.String

---

##### `natGatewayIdInput`<sup>Optional</sup> <a name="natGatewayIdInput" id="@cdktn/provider-awscc.ec2Route.Ec2Route.property.natGatewayIdInput"></a>

```java
public java.lang.String getNatGatewayIdInput();
```

- *Type:* java.lang.String

---

##### `networkInterfaceIdInput`<sup>Optional</sup> <a name="networkInterfaceIdInput" id="@cdktn/provider-awscc.ec2Route.Ec2Route.property.networkInterfaceIdInput"></a>

```java
public java.lang.String getNetworkInterfaceIdInput();
```

- *Type:* java.lang.String

---

##### `odbNetworkArnInput`<sup>Optional</sup> <a name="odbNetworkArnInput" id="@cdktn/provider-awscc.ec2Route.Ec2Route.property.odbNetworkArnInput"></a>

```java
public java.lang.String getOdbNetworkArnInput();
```

- *Type:* java.lang.String

---

##### `routeTableIdInput`<sup>Optional</sup> <a name="routeTableIdInput" id="@cdktn/provider-awscc.ec2Route.Ec2Route.property.routeTableIdInput"></a>

```java
public java.lang.String getRouteTableIdInput();
```

- *Type:* java.lang.String

---

##### `transitGatewayIdInput`<sup>Optional</sup> <a name="transitGatewayIdInput" id="@cdktn/provider-awscc.ec2Route.Ec2Route.property.transitGatewayIdInput"></a>

```java
public java.lang.String getTransitGatewayIdInput();
```

- *Type:* java.lang.String

---

##### `vpcEndpointIdInput`<sup>Optional</sup> <a name="vpcEndpointIdInput" id="@cdktn/provider-awscc.ec2Route.Ec2Route.property.vpcEndpointIdInput"></a>

```java
public java.lang.String getVpcEndpointIdInput();
```

- *Type:* java.lang.String

---

##### `vpcPeeringConnectionIdInput`<sup>Optional</sup> <a name="vpcPeeringConnectionIdInput" id="@cdktn/provider-awscc.ec2Route.Ec2Route.property.vpcPeeringConnectionIdInput"></a>

```java
public java.lang.String getVpcPeeringConnectionIdInput();
```

- *Type:* java.lang.String

---

##### `carrierGatewayId`<sup>Required</sup> <a name="carrierGatewayId" id="@cdktn/provider-awscc.ec2Route.Ec2Route.property.carrierGatewayId"></a>

```java
public java.lang.String getCarrierGatewayId();
```

- *Type:* java.lang.String

---

##### `coreNetworkArn`<sup>Required</sup> <a name="coreNetworkArn" id="@cdktn/provider-awscc.ec2Route.Ec2Route.property.coreNetworkArn"></a>

```java
public java.lang.String getCoreNetworkArn();
```

- *Type:* java.lang.String

---

##### `destinationCidrBlock`<sup>Required</sup> <a name="destinationCidrBlock" id="@cdktn/provider-awscc.ec2Route.Ec2Route.property.destinationCidrBlock"></a>

```java
public java.lang.String getDestinationCidrBlock();
```

- *Type:* java.lang.String

---

##### `destinationIpv6CidrBlock`<sup>Required</sup> <a name="destinationIpv6CidrBlock" id="@cdktn/provider-awscc.ec2Route.Ec2Route.property.destinationIpv6CidrBlock"></a>

```java
public java.lang.String getDestinationIpv6CidrBlock();
```

- *Type:* java.lang.String

---

##### `destinationPrefixListId`<sup>Required</sup> <a name="destinationPrefixListId" id="@cdktn/provider-awscc.ec2Route.Ec2Route.property.destinationPrefixListId"></a>

```java
public java.lang.String getDestinationPrefixListId();
```

- *Type:* java.lang.String

---

##### `egressOnlyInternetGatewayId`<sup>Required</sup> <a name="egressOnlyInternetGatewayId" id="@cdktn/provider-awscc.ec2Route.Ec2Route.property.egressOnlyInternetGatewayId"></a>

```java
public java.lang.String getEgressOnlyInternetGatewayId();
```

- *Type:* java.lang.String

---

##### `gatewayId`<sup>Required</sup> <a name="gatewayId" id="@cdktn/provider-awscc.ec2Route.Ec2Route.property.gatewayId"></a>

```java
public java.lang.String getGatewayId();
```

- *Type:* java.lang.String

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktn/provider-awscc.ec2Route.Ec2Route.property.instanceId"></a>

```java
public java.lang.String getInstanceId();
```

- *Type:* java.lang.String

---

##### `localGatewayId`<sup>Required</sup> <a name="localGatewayId" id="@cdktn/provider-awscc.ec2Route.Ec2Route.property.localGatewayId"></a>

```java
public java.lang.String getLocalGatewayId();
```

- *Type:* java.lang.String

---

##### `natGatewayId`<sup>Required</sup> <a name="natGatewayId" id="@cdktn/provider-awscc.ec2Route.Ec2Route.property.natGatewayId"></a>

```java
public java.lang.String getNatGatewayId();
```

- *Type:* java.lang.String

---

##### `networkInterfaceId`<sup>Required</sup> <a name="networkInterfaceId" id="@cdktn/provider-awscc.ec2Route.Ec2Route.property.networkInterfaceId"></a>

```java
public java.lang.String getNetworkInterfaceId();
```

- *Type:* java.lang.String

---

##### `odbNetworkArn`<sup>Required</sup> <a name="odbNetworkArn" id="@cdktn/provider-awscc.ec2Route.Ec2Route.property.odbNetworkArn"></a>

```java
public java.lang.String getOdbNetworkArn();
```

- *Type:* java.lang.String

---

##### `routeTableId`<sup>Required</sup> <a name="routeTableId" id="@cdktn/provider-awscc.ec2Route.Ec2Route.property.routeTableId"></a>

```java
public java.lang.String getRouteTableId();
```

- *Type:* java.lang.String

---

##### `transitGatewayId`<sup>Required</sup> <a name="transitGatewayId" id="@cdktn/provider-awscc.ec2Route.Ec2Route.property.transitGatewayId"></a>

```java
public java.lang.String getTransitGatewayId();
```

- *Type:* java.lang.String

---

##### `vpcEndpointId`<sup>Required</sup> <a name="vpcEndpointId" id="@cdktn/provider-awscc.ec2Route.Ec2Route.property.vpcEndpointId"></a>

```java
public java.lang.String getVpcEndpointId();
```

- *Type:* java.lang.String

---

##### `vpcPeeringConnectionId`<sup>Required</sup> <a name="vpcPeeringConnectionId" id="@cdktn/provider-awscc.ec2Route.Ec2Route.property.vpcPeeringConnectionId"></a>

```java
public java.lang.String getVpcPeeringConnectionId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2Route.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ec2Route.Ec2Route.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2RouteConfig <a name="Ec2RouteConfig" id="@cdktn/provider-awscc.ec2Route.Ec2RouteConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2Route.Ec2RouteConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_route.Ec2RouteConfig;

Ec2RouteConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .routeTableId(java.lang.String)
//  .carrierGatewayId(java.lang.String)
//  .coreNetworkArn(java.lang.String)
//  .destinationCidrBlock(java.lang.String)
//  .destinationIpv6CidrBlock(java.lang.String)
//  .destinationPrefixListId(java.lang.String)
//  .egressOnlyInternetGatewayId(java.lang.String)
//  .gatewayId(java.lang.String)
//  .instanceId(java.lang.String)
//  .localGatewayId(java.lang.String)
//  .natGatewayId(java.lang.String)
//  .networkInterfaceId(java.lang.String)
//  .odbNetworkArn(java.lang.String)
//  .transitGatewayId(java.lang.String)
//  .vpcEndpointId(java.lang.String)
//  .vpcPeeringConnectionId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2RouteConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2RouteConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2RouteConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2RouteConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2RouteConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2RouteConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2RouteConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2RouteConfig.property.routeTableId">routeTableId</a></code> | <code>java.lang.String</code> | The ID of the route table for the route. |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2RouteConfig.property.carrierGatewayId">carrierGatewayId</a></code> | <code>java.lang.String</code> | The ID of the carrier gateway. |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2RouteConfig.property.coreNetworkArn">coreNetworkArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the core network. |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2RouteConfig.property.destinationCidrBlock">destinationCidrBlock</a></code> | <code>java.lang.String</code> | The IPv4 CIDR address block used for the destination match. |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2RouteConfig.property.destinationIpv6CidrBlock">destinationIpv6CidrBlock</a></code> | <code>java.lang.String</code> | The IPv6 CIDR block used for the destination match. Routing decisions are based on the most specific match. |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2RouteConfig.property.destinationPrefixListId">destinationPrefixListId</a></code> | <code>java.lang.String</code> | The ID of a prefix list used for the destination match. |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2RouteConfig.property.egressOnlyInternetGatewayId">egressOnlyInternetGatewayId</a></code> | <code>java.lang.String</code> | [IPv6 traffic only] The ID of an egress-only internet gateway. |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2RouteConfig.property.gatewayId">gatewayId</a></code> | <code>java.lang.String</code> | The ID of an internet gateway or virtual private gateway attached to your VPC. |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2RouteConfig.property.instanceId">instanceId</a></code> | <code>java.lang.String</code> | The ID of a NAT instance in your VPC. |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2RouteConfig.property.localGatewayId">localGatewayId</a></code> | <code>java.lang.String</code> | The ID of the local gateway. |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2RouteConfig.property.natGatewayId">natGatewayId</a></code> | <code>java.lang.String</code> | [IPv4 traffic only] The ID of a NAT gateway. |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2RouteConfig.property.networkInterfaceId">networkInterfaceId</a></code> | <code>java.lang.String</code> | The ID of a network interface. |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2RouteConfig.property.odbNetworkArn">odbNetworkArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the ODB network. |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2RouteConfig.property.transitGatewayId">transitGatewayId</a></code> | <code>java.lang.String</code> | The ID of a transit gateway. |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2RouteConfig.property.vpcEndpointId">vpcEndpointId</a></code> | <code>java.lang.String</code> | The ID of a VPC endpoint. Supported for Gateway Load Balancer endpoints only. |
| <code><a href="#@cdktn/provider-awscc.ec2Route.Ec2RouteConfig.property.vpcPeeringConnectionId">vpcPeeringConnectionId</a></code> | <code>java.lang.String</code> | The ID of a VPC peering connection. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2Route.Ec2RouteConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2Route.Ec2RouteConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ec2Route.Ec2RouteConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ec2Route.Ec2RouteConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2Route.Ec2RouteConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2Route.Ec2RouteConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2Route.Ec2RouteConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `routeTableId`<sup>Required</sup> <a name="routeTableId" id="@cdktn/provider-awscc.ec2Route.Ec2RouteConfig.property.routeTableId"></a>

```java
public java.lang.String getRouteTableId();
```

- *Type:* java.lang.String

The ID of the route table for the route.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_route#route_table_id Ec2Route#route_table_id}

---

##### `carrierGatewayId`<sup>Optional</sup> <a name="carrierGatewayId" id="@cdktn/provider-awscc.ec2Route.Ec2RouteConfig.property.carrierGatewayId"></a>

```java
public java.lang.String getCarrierGatewayId();
```

- *Type:* java.lang.String

The ID of the carrier gateway.

You can only use this option when the VPC contains a subnet which is associated with a Wavelength Zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_route#carrier_gateway_id Ec2Route#carrier_gateway_id}

---

##### `coreNetworkArn`<sup>Optional</sup> <a name="coreNetworkArn" id="@cdktn/provider-awscc.ec2Route.Ec2RouteConfig.property.coreNetworkArn"></a>

```java
public java.lang.String getCoreNetworkArn();
```

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the core network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_route#core_network_arn Ec2Route#core_network_arn}

---

##### `destinationCidrBlock`<sup>Optional</sup> <a name="destinationCidrBlock" id="@cdktn/provider-awscc.ec2Route.Ec2RouteConfig.property.destinationCidrBlock"></a>

```java
public java.lang.String getDestinationCidrBlock();
```

- *Type:* java.lang.String

The IPv4 CIDR address block used for the destination match.

Routing decisions are based on the most specific match. We modify the specified CIDR block to its canonical form; for example, if you specify `100.68.0.18/18`, we modify it to `100.68.0.0/18`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_route#destination_cidr_block Ec2Route#destination_cidr_block}

---

##### `destinationIpv6CidrBlock`<sup>Optional</sup> <a name="destinationIpv6CidrBlock" id="@cdktn/provider-awscc.ec2Route.Ec2RouteConfig.property.destinationIpv6CidrBlock"></a>

```java
public java.lang.String getDestinationIpv6CidrBlock();
```

- *Type:* java.lang.String

The IPv6 CIDR block used for the destination match. Routing decisions are based on the most specific match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_route#destination_ipv_6_cidr_block Ec2Route#destination_ipv_6_cidr_block}

---

##### `destinationPrefixListId`<sup>Optional</sup> <a name="destinationPrefixListId" id="@cdktn/provider-awscc.ec2Route.Ec2RouteConfig.property.destinationPrefixListId"></a>

```java
public java.lang.String getDestinationPrefixListId();
```

- *Type:* java.lang.String

The ID of a prefix list used for the destination match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_route#destination_prefix_list_id Ec2Route#destination_prefix_list_id}

---

##### `egressOnlyInternetGatewayId`<sup>Optional</sup> <a name="egressOnlyInternetGatewayId" id="@cdktn/provider-awscc.ec2Route.Ec2RouteConfig.property.egressOnlyInternetGatewayId"></a>

```java
public java.lang.String getEgressOnlyInternetGatewayId();
```

- *Type:* java.lang.String

[IPv6 traffic only] The ID of an egress-only internet gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_route#egress_only_internet_gateway_id Ec2Route#egress_only_internet_gateway_id}

---

##### `gatewayId`<sup>Optional</sup> <a name="gatewayId" id="@cdktn/provider-awscc.ec2Route.Ec2RouteConfig.property.gatewayId"></a>

```java
public java.lang.String getGatewayId();
```

- *Type:* java.lang.String

The ID of an internet gateway or virtual private gateway attached to your VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_route#gateway_id Ec2Route#gateway_id}

---

##### `instanceId`<sup>Optional</sup> <a name="instanceId" id="@cdktn/provider-awscc.ec2Route.Ec2RouteConfig.property.instanceId"></a>

```java
public java.lang.String getInstanceId();
```

- *Type:* java.lang.String

The ID of a NAT instance in your VPC.

The operation fails if you specify an instance ID unless exactly one network interface is attached.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_route#instance_id Ec2Route#instance_id}

---

##### `localGatewayId`<sup>Optional</sup> <a name="localGatewayId" id="@cdktn/provider-awscc.ec2Route.Ec2RouteConfig.property.localGatewayId"></a>

```java
public java.lang.String getLocalGatewayId();
```

- *Type:* java.lang.String

The ID of the local gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_route#local_gateway_id Ec2Route#local_gateway_id}

---

##### `natGatewayId`<sup>Optional</sup> <a name="natGatewayId" id="@cdktn/provider-awscc.ec2Route.Ec2RouteConfig.property.natGatewayId"></a>

```java
public java.lang.String getNatGatewayId();
```

- *Type:* java.lang.String

[IPv4 traffic only] The ID of a NAT gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_route#nat_gateway_id Ec2Route#nat_gateway_id}

---

##### `networkInterfaceId`<sup>Optional</sup> <a name="networkInterfaceId" id="@cdktn/provider-awscc.ec2Route.Ec2RouteConfig.property.networkInterfaceId"></a>

```java
public java.lang.String getNetworkInterfaceId();
```

- *Type:* java.lang.String

The ID of a network interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_route#network_interface_id Ec2Route#network_interface_id}

---

##### `odbNetworkArn`<sup>Optional</sup> <a name="odbNetworkArn" id="@cdktn/provider-awscc.ec2Route.Ec2RouteConfig.property.odbNetworkArn"></a>

```java
public java.lang.String getOdbNetworkArn();
```

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the ODB network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_route#odb_network_arn Ec2Route#odb_network_arn}

---

##### `transitGatewayId`<sup>Optional</sup> <a name="transitGatewayId" id="@cdktn/provider-awscc.ec2Route.Ec2RouteConfig.property.transitGatewayId"></a>

```java
public java.lang.String getTransitGatewayId();
```

- *Type:* java.lang.String

The ID of a transit gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_route#transit_gateway_id Ec2Route#transit_gateway_id}

---

##### `vpcEndpointId`<sup>Optional</sup> <a name="vpcEndpointId" id="@cdktn/provider-awscc.ec2Route.Ec2RouteConfig.property.vpcEndpointId"></a>

```java
public java.lang.String getVpcEndpointId();
```

- *Type:* java.lang.String

The ID of a VPC endpoint. Supported for Gateway Load Balancer endpoints only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_route#vpc_endpoint_id Ec2Route#vpc_endpoint_id}

---

##### `vpcPeeringConnectionId`<sup>Optional</sup> <a name="vpcPeeringConnectionId" id="@cdktn/provider-awscc.ec2Route.Ec2RouteConfig.property.vpcPeeringConnectionId"></a>

```java
public java.lang.String getVpcPeeringConnectionId();
```

- *Type:* java.lang.String

The ID of a VPC peering connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_route#vpc_peering_connection_id Ec2Route#vpc_peering_connection_id}

---



