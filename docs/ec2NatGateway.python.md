# `ec2NatGateway` Submodule <a name="`ec2NatGateway` Submodule" id="@cdktn/provider-awscc.ec2NatGateway"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2NatGateway <a name="Ec2NatGateway" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_nat_gateway awscc_ec2_nat_gateway}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_nat_gateway

ec2NatGateway.Ec2NatGateway(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  allocation_id: str = None,
  availability_mode: str = None,
  availability_zone_addresses: IResolvable | typing.List[Ec2NatGatewayAvailabilityZoneAddresses] = None,
  connectivity_type: str = None,
  max_drain_duration_seconds: typing.Union[int, float] = None,
  private_ip_address: str = None,
  secondary_allocation_ids: typing.List[str] = None,
  secondary_private_ip_address_count: typing.Union[int, float] = None,
  secondary_private_ip_addresses: typing.List[str] = None,
  subnet_id: str = None,
  tags: IResolvable | typing.List[Ec2NatGatewayTags] = None,
  vpc_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.Initializer.parameter.allocationId">allocation_id</a></code> | <code>str</code> | [Public NAT gateway only] The allocation ID of the Elastic IP address that's associated with the NAT gateway. |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.Initializer.parameter.availabilityMode">availability_mode</a></code> | <code>str</code> | Indicates whether this is a zonal (single-AZ) or regional (multi-AZ) NAT gateway. |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.Initializer.parameter.availabilityZoneAddresses">availability_zone_addresses</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddresses">Ec2NatGatewayAvailabilityZoneAddresses</a>]</code> | For regional NAT gateways only: Specifies which Availability Zones you want the NAT gateway to support and the Elastic IP addresses (EIPs) to use in each AZ. |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.Initializer.parameter.connectivityType">connectivity_type</a></code> | <code>str</code> | Indicates whether the NAT gateway supports public or private connectivity. The default is public connectivity. |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.Initializer.parameter.maxDrainDurationSeconds">max_drain_duration_seconds</a></code> | <code>typing.Union[int, float]</code> | The maximum amount of time to wait (in seconds) before forcibly releasing the IP addresses if connections are still in progress. |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.Initializer.parameter.privateIpAddress">private_ip_address</a></code> | <code>str</code> | The private IPv4 address to assign to the NAT gateway. |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.Initializer.parameter.secondaryAllocationIds">secondary_allocation_ids</a></code> | <code>typing.List[str]</code> | Secondary EIP allocation IDs. For more information, see [Create a NAT gateway](https://docs.aws.amazon.com/vpc/latest/userguide/nat-gateway-working-with.html) in the *Amazon VPC User Guide*. |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.Initializer.parameter.secondaryPrivateIpAddressCount">secondary_private_ip_address_count</a></code> | <code>typing.Union[int, float]</code> | [Private NAT gateway only] The number of secondary private IPv4 addresses you want to assign to the NAT gateway. |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.Initializer.parameter.secondaryPrivateIpAddresses">secondary_private_ip_addresses</a></code> | <code>typing.List[str]</code> | Secondary private IPv4 addresses. |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.Initializer.parameter.subnetId">subnet_id</a></code> | <code>str</code> | The ID of the subnet in which the NAT gateway is located. |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTags">Ec2NatGatewayTags</a>]</code> | The tags for the NAT gateway. |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.Initializer.parameter.vpcId">vpc_id</a></code> | <code>str</code> | The ID of the VPC in which the NAT gateway is located. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `allocation_id`<sup>Optional</sup> <a name="allocation_id" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.Initializer.parameter.allocationId"></a>

- *Type:* str

[Public NAT gateway only] The allocation ID of the Elastic IP address that's associated with the NAT gateway.

This property is required for a public NAT gateway and cannot be specified with a private NAT gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_nat_gateway#allocation_id Ec2NatGateway#allocation_id}

---

##### `availability_mode`<sup>Optional</sup> <a name="availability_mode" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.Initializer.parameter.availabilityMode"></a>

- *Type:* str

Indicates whether this is a zonal (single-AZ) or regional (multi-AZ) NAT gateway.

A zonal NAT gateway is a NAT Gateway that provides redundancy and scalability within a single availability zone. A regional NAT gateway is a single NAT Gateway that works across multiple availability zones (AZs) in your VPC, providing redundancy, scalability and availability across all the AZs in a Region.
For more information, see [Regional NAT gateways for automatic multi-AZ expansion](https://docs.aws.amazon.com/vpc/latest/userguide/nat-gateways-regional.html) in the *Amazon VPC User Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_nat_gateway#availability_mode Ec2NatGateway#availability_mode}

---

##### `availability_zone_addresses`<sup>Optional</sup> <a name="availability_zone_addresses" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.Initializer.parameter.availabilityZoneAddresses"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddresses">Ec2NatGatewayAvailabilityZoneAddresses</a>]

For regional NAT gateways only: Specifies which Availability Zones you want the NAT gateway to support and the Elastic IP addresses (EIPs) to use in each AZ.

The regional NAT gateway uses these EIPs to handle outbound NAT traffic from their respective AZs. If not specified, the NAT gateway will automatically expand to new AZs and associate EIPs upon detection of an elastic network interface. If you specify this parameter, auto-expansion is disabled and you must manually manage AZ coverage.
A regional NAT gateway is a single NAT Gateway that works across multiple availability zones (AZs) in your VPC, providing redundancy, scalability and availability across all the AZs in a Region.
For more information, see [Regional NAT gateways for automatic multi-AZ expansion](https://docs.aws.amazon.com/vpc/latest/userguide/nat-gateways-regional.html) in the *Amazon VPC User Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_nat_gateway#availability_zone_addresses Ec2NatGateway#availability_zone_addresses}

---

##### `connectivity_type`<sup>Optional</sup> <a name="connectivity_type" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.Initializer.parameter.connectivityType"></a>

- *Type:* str

Indicates whether the NAT gateway supports public or private connectivity. The default is public connectivity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_nat_gateway#connectivity_type Ec2NatGateway#connectivity_type}

---

##### `max_drain_duration_seconds`<sup>Optional</sup> <a name="max_drain_duration_seconds" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.Initializer.parameter.maxDrainDurationSeconds"></a>

- *Type:* typing.Union[int, float]

The maximum amount of time to wait (in seconds) before forcibly releasing the IP addresses if connections are still in progress.

Default value is 350 seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_nat_gateway#max_drain_duration_seconds Ec2NatGateway#max_drain_duration_seconds}

---

##### `private_ip_address`<sup>Optional</sup> <a name="private_ip_address" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.Initializer.parameter.privateIpAddress"></a>

- *Type:* str

The private IPv4 address to assign to the NAT gateway.

If you don't provide an address, a private IPv4 address will be automatically assigned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_nat_gateway#private_ip_address Ec2NatGateway#private_ip_address}

---

##### `secondary_allocation_ids`<sup>Optional</sup> <a name="secondary_allocation_ids" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.Initializer.parameter.secondaryAllocationIds"></a>

- *Type:* typing.List[str]

Secondary EIP allocation IDs. For more information, see [Create a NAT gateway](https://docs.aws.amazon.com/vpc/latest/userguide/nat-gateway-working-with.html) in the *Amazon VPC User Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_nat_gateway#secondary_allocation_ids Ec2NatGateway#secondary_allocation_ids}

---

##### `secondary_private_ip_address_count`<sup>Optional</sup> <a name="secondary_private_ip_address_count" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.Initializer.parameter.secondaryPrivateIpAddressCount"></a>

- *Type:* typing.Union[int, float]

[Private NAT gateway only] The number of secondary private IPv4 addresses you want to assign to the NAT gateway.

For more information about secondary addresses, see [Create a NAT gateway](https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-gateway.html#nat-gateway-creating) in the *Amazon Virtual Private Cloud User Guide*.
`SecondaryPrivateIpAddressCount` and `SecondaryPrivateIpAddresses` cannot be set at the same time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_nat_gateway#secondary_private_ip_address_count Ec2NatGateway#secondary_private_ip_address_count}

---

##### `secondary_private_ip_addresses`<sup>Optional</sup> <a name="secondary_private_ip_addresses" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.Initializer.parameter.secondaryPrivateIpAddresses"></a>

- *Type:* typing.List[str]

Secondary private IPv4 addresses.

For more information about secondary addresses, see [Create a NAT gateway](https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-gateway.html#nat-gateway-creating) in the *Amazon Virtual Private Cloud User Guide*.
`SecondaryPrivateIpAddressCount` and `SecondaryPrivateIpAddresses` cannot be set at the same time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_nat_gateway#secondary_private_ip_addresses Ec2NatGateway#secondary_private_ip_addresses}

---

##### `subnet_id`<sup>Optional</sup> <a name="subnet_id" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.Initializer.parameter.subnetId"></a>

- *Type:* str

The ID of the subnet in which the NAT gateway is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_nat_gateway#subnet_id Ec2NatGateway#subnet_id}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTags">Ec2NatGatewayTags</a>]

The tags for the NAT gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_nat_gateway#tags Ec2NatGateway#tags}

---

##### `vpc_id`<sup>Optional</sup> <a name="vpc_id" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.Initializer.parameter.vpcId"></a>

- *Type:* str

The ID of the VPC in which the NAT gateway is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_nat_gateway#vpc_id Ec2NatGateway#vpc_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.putAvailabilityZoneAddresses">put_availability_zone_addresses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.resetAllocationId">reset_allocation_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.resetAvailabilityMode">reset_availability_mode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.resetAvailabilityZoneAddresses">reset_availability_zone_addresses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.resetConnectivityType">reset_connectivity_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.resetMaxDrainDurationSeconds">reset_max_drain_duration_seconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.resetPrivateIpAddress">reset_private_ip_address</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.resetSecondaryAllocationIds">reset_secondary_allocation_ids</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.resetSecondaryPrivateIpAddressCount">reset_secondary_private_ip_address_count</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.resetSecondaryPrivateIpAddresses">reset_secondary_private_ip_addresses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.resetSubnetId">reset_subnet_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.resetVpcId">reset_vpc_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_availability_zone_addresses` <a name="put_availability_zone_addresses" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.putAvailabilityZoneAddresses"></a>

```python
def put_availability_zone_addresses(
  value: IResolvable | typing.List[Ec2NatGatewayAvailabilityZoneAddresses]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.putAvailabilityZoneAddresses.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddresses">Ec2NatGatewayAvailabilityZoneAddresses</a>]

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[Ec2NatGatewayTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTags">Ec2NatGatewayTags</a>]

---

##### `reset_allocation_id` <a name="reset_allocation_id" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.resetAllocationId"></a>

```python
def reset_allocation_id() -> None
```

##### `reset_availability_mode` <a name="reset_availability_mode" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.resetAvailabilityMode"></a>

```python
def reset_availability_mode() -> None
```

##### `reset_availability_zone_addresses` <a name="reset_availability_zone_addresses" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.resetAvailabilityZoneAddresses"></a>

```python
def reset_availability_zone_addresses() -> None
```

##### `reset_connectivity_type` <a name="reset_connectivity_type" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.resetConnectivityType"></a>

```python
def reset_connectivity_type() -> None
```

##### `reset_max_drain_duration_seconds` <a name="reset_max_drain_duration_seconds" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.resetMaxDrainDurationSeconds"></a>

```python
def reset_max_drain_duration_seconds() -> None
```

##### `reset_private_ip_address` <a name="reset_private_ip_address" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.resetPrivateIpAddress"></a>

```python
def reset_private_ip_address() -> None
```

##### `reset_secondary_allocation_ids` <a name="reset_secondary_allocation_ids" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.resetSecondaryAllocationIds"></a>

```python
def reset_secondary_allocation_ids() -> None
```

##### `reset_secondary_private_ip_address_count` <a name="reset_secondary_private_ip_address_count" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.resetSecondaryPrivateIpAddressCount"></a>

```python
def reset_secondary_private_ip_address_count() -> None
```

##### `reset_secondary_private_ip_addresses` <a name="reset_secondary_private_ip_addresses" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.resetSecondaryPrivateIpAddresses"></a>

```python
def reset_secondary_private_ip_addresses() -> None
```

##### `reset_subnet_id` <a name="reset_subnet_id" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.resetSubnetId"></a>

```python
def reset_subnet_id() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_vpc_id` <a name="reset_vpc_id" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.resetVpcId"></a>

```python
def reset_vpc_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a Ec2NatGateway resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.isConstruct"></a>

```python
from cdktn_provider_awscc import ec2_nat_gateway

ec2NatGateway.Ec2NatGateway.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.isTerraformElement"></a>

```python
from cdktn_provider_awscc import ec2_nat_gateway

ec2NatGateway.Ec2NatGateway.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.isTerraformResource"></a>

```python
from cdktn_provider_awscc import ec2_nat_gateway

ec2NatGateway.Ec2NatGateway.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import ec2_nat_gateway

ec2NatGateway.Ec2NatGateway.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a Ec2NatGateway resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Ec2NatGateway to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Ec2NatGateway that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_nat_gateway#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Ec2NatGateway to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.autoProvisionZones">auto_provision_zones</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.autoScalingIps">auto_scaling_ips</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.availabilityZoneAddresses">availability_zone_addresses</a></code> | <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesList">Ec2NatGatewayAvailabilityZoneAddressesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.eniId">eni_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.natGatewayId">nat_gateway_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.routeTableId">route_table_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsList">Ec2NatGatewayTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.allocationIdInput">allocation_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.availabilityModeInput">availability_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.availabilityZoneAddressesInput">availability_zone_addresses_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddresses">Ec2NatGatewayAvailabilityZoneAddresses</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.connectivityTypeInput">connectivity_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.maxDrainDurationSecondsInput">max_drain_duration_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.privateIpAddressInput">private_ip_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.secondaryAllocationIdsInput">secondary_allocation_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.secondaryPrivateIpAddressCountInput">secondary_private_ip_address_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.secondaryPrivateIpAddressesInput">secondary_private_ip_addresses_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.subnetIdInput">subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTags">Ec2NatGatewayTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.vpcIdInput">vpc_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.allocationId">allocation_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.availabilityMode">availability_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.connectivityType">connectivity_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.maxDrainDurationSeconds">max_drain_duration_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.privateIpAddress">private_ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.secondaryAllocationIds">secondary_allocation_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.secondaryPrivateIpAddressCount">secondary_private_ip_address_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.secondaryPrivateIpAddresses">secondary_private_ip_addresses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.vpcId">vpc_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `auto_provision_zones`<sup>Required</sup> <a name="auto_provision_zones" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.autoProvisionZones"></a>

```python
auto_provision_zones: str
```

- *Type:* str

---

##### `auto_scaling_ips`<sup>Required</sup> <a name="auto_scaling_ips" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.autoScalingIps"></a>

```python
auto_scaling_ips: str
```

- *Type:* str

---

##### `availability_zone_addresses`<sup>Required</sup> <a name="availability_zone_addresses" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.availabilityZoneAddresses"></a>

```python
availability_zone_addresses: Ec2NatGatewayAvailabilityZoneAddressesList
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesList">Ec2NatGatewayAvailabilityZoneAddressesList</a>

---

##### `eni_id`<sup>Required</sup> <a name="eni_id" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.eniId"></a>

```python
eni_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `nat_gateway_id`<sup>Required</sup> <a name="nat_gateway_id" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.natGatewayId"></a>

```python
nat_gateway_id: str
```

- *Type:* str

---

##### `route_table_id`<sup>Required</sup> <a name="route_table_id" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.routeTableId"></a>

```python
route_table_id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.tags"></a>

```python
tags: Ec2NatGatewayTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsList">Ec2NatGatewayTagsList</a>

---

##### `allocation_id_input`<sup>Optional</sup> <a name="allocation_id_input" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.allocationIdInput"></a>

```python
allocation_id_input: str
```

- *Type:* str

---

##### `availability_mode_input`<sup>Optional</sup> <a name="availability_mode_input" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.availabilityModeInput"></a>

```python
availability_mode_input: str
```

- *Type:* str

---

##### `availability_zone_addresses_input`<sup>Optional</sup> <a name="availability_zone_addresses_input" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.availabilityZoneAddressesInput"></a>

```python
availability_zone_addresses_input: IResolvable | typing.List[Ec2NatGatewayAvailabilityZoneAddresses]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddresses">Ec2NatGatewayAvailabilityZoneAddresses</a>]

---

##### `connectivity_type_input`<sup>Optional</sup> <a name="connectivity_type_input" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.connectivityTypeInput"></a>

```python
connectivity_type_input: str
```

- *Type:* str

---

##### `max_drain_duration_seconds_input`<sup>Optional</sup> <a name="max_drain_duration_seconds_input" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.maxDrainDurationSecondsInput"></a>

```python
max_drain_duration_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `private_ip_address_input`<sup>Optional</sup> <a name="private_ip_address_input" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.privateIpAddressInput"></a>

```python
private_ip_address_input: str
```

- *Type:* str

---

##### `secondary_allocation_ids_input`<sup>Optional</sup> <a name="secondary_allocation_ids_input" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.secondaryAllocationIdsInput"></a>

```python
secondary_allocation_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `secondary_private_ip_address_count_input`<sup>Optional</sup> <a name="secondary_private_ip_address_count_input" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.secondaryPrivateIpAddressCountInput"></a>

```python
secondary_private_ip_address_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `secondary_private_ip_addresses_input`<sup>Optional</sup> <a name="secondary_private_ip_addresses_input" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.secondaryPrivateIpAddressesInput"></a>

```python
secondary_private_ip_addresses_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_id_input`<sup>Optional</sup> <a name="subnet_id_input" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.subnetIdInput"></a>

```python
subnet_id_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[Ec2NatGatewayTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTags">Ec2NatGatewayTags</a>]

---

##### `vpc_id_input`<sup>Optional</sup> <a name="vpc_id_input" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.vpcIdInput"></a>

```python
vpc_id_input: str
```

- *Type:* str

---

##### `allocation_id`<sup>Required</sup> <a name="allocation_id" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.allocationId"></a>

```python
allocation_id: str
```

- *Type:* str

---

##### `availability_mode`<sup>Required</sup> <a name="availability_mode" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.availabilityMode"></a>

```python
availability_mode: str
```

- *Type:* str

---

##### `connectivity_type`<sup>Required</sup> <a name="connectivity_type" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.connectivityType"></a>

```python
connectivity_type: str
```

- *Type:* str

---

##### `max_drain_duration_seconds`<sup>Required</sup> <a name="max_drain_duration_seconds" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.maxDrainDurationSeconds"></a>

```python
max_drain_duration_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `private_ip_address`<sup>Required</sup> <a name="private_ip_address" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.privateIpAddress"></a>

```python
private_ip_address: str
```

- *Type:* str

---

##### `secondary_allocation_ids`<sup>Required</sup> <a name="secondary_allocation_ids" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.secondaryAllocationIds"></a>

```python
secondary_allocation_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `secondary_private_ip_address_count`<sup>Required</sup> <a name="secondary_private_ip_address_count" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.secondaryPrivateIpAddressCount"></a>

```python
secondary_private_ip_address_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `secondary_private_ip_addresses`<sup>Required</sup> <a name="secondary_private_ip_addresses" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.secondaryPrivateIpAddresses"></a>

```python
secondary_private_ip_addresses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2NatGatewayAvailabilityZoneAddresses <a name="Ec2NatGatewayAvailabilityZoneAddresses" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddresses"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddresses.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_nat_gateway

ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddresses(
  allocation_ids: typing.List[str] = None,
  availability_zone: str = None,
  availability_zone_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddresses.property.allocationIds">allocation_ids</a></code> | <code>typing.List[str]</code> | The allocation IDs of the Elastic IP addresses (EIPs) to be used for handling outbound NAT traffic in this specific Availability Zone. |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddresses.property.availabilityZone">availability_zone</a></code> | <code>str</code> | For regional NAT gateways only: The Availability Zone where this specific NAT gateway configuration will be active. |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddresses.property.availabilityZoneId">availability_zone_id</a></code> | <code>str</code> | For regional NAT gateways only: The ID of the Availability Zone where this specific NAT gateway configuration will be active. |

---

##### `allocation_ids`<sup>Optional</sup> <a name="allocation_ids" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddresses.property.allocationIds"></a>

```python
allocation_ids: typing.List[str]
```

- *Type:* typing.List[str]

The allocation IDs of the Elastic IP addresses (EIPs) to be used for handling outbound NAT traffic in this specific Availability Zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_nat_gateway#allocation_ids Ec2NatGateway#allocation_ids}

---

##### `availability_zone`<sup>Optional</sup> <a name="availability_zone" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddresses.property.availabilityZone"></a>

```python
availability_zone: str
```

- *Type:* str

For regional NAT gateways only: The Availability Zone where this specific NAT gateway configuration will be active.

Each AZ in a regional NAT gateway has its own configuration to handle outbound NAT traffic from that AZ.
A regional NAT gateway is a single NAT Gateway that works across multiple availability zones (AZs) in your VPC, providing redundancy, scalability and availability across all the AZs in a Region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_nat_gateway#availability_zone Ec2NatGateway#availability_zone}

---

##### `availability_zone_id`<sup>Optional</sup> <a name="availability_zone_id" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddresses.property.availabilityZoneId"></a>

```python
availability_zone_id: str
```

- *Type:* str

For regional NAT gateways only: The ID of the Availability Zone where this specific NAT gateway configuration will be active.

Each AZ in a regional NAT gateway has its own configuration to handle outbound NAT traffic from that AZ. Use this instead of AvailabilityZone for consistent identification of AZs across AWS Regions.
A regional NAT gateway is a single NAT Gateway that works across multiple availability zones (AZs) in your VPC, providing redundancy, scalability and availability across all the AZs in a Region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_nat_gateway#availability_zone_id Ec2NatGateway#availability_zone_id}

---

### Ec2NatGatewayConfig <a name="Ec2NatGatewayConfig" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayConfig.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_nat_gateway

ec2NatGateway.Ec2NatGatewayConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  allocation_id: str = None,
  availability_mode: str = None,
  availability_zone_addresses: IResolvable | typing.List[Ec2NatGatewayAvailabilityZoneAddresses] = None,
  connectivity_type: str = None,
  max_drain_duration_seconds: typing.Union[int, float] = None,
  private_ip_address: str = None,
  secondary_allocation_ids: typing.List[str] = None,
  secondary_private_ip_address_count: typing.Union[int, float] = None,
  secondary_private_ip_addresses: typing.List[str] = None,
  subnet_id: str = None,
  tags: IResolvable | typing.List[Ec2NatGatewayTags] = None,
  vpc_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayConfig.property.allocationId">allocation_id</a></code> | <code>str</code> | [Public NAT gateway only] The allocation ID of the Elastic IP address that's associated with the NAT gateway. |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayConfig.property.availabilityMode">availability_mode</a></code> | <code>str</code> | Indicates whether this is a zonal (single-AZ) or regional (multi-AZ) NAT gateway. |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayConfig.property.availabilityZoneAddresses">availability_zone_addresses</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddresses">Ec2NatGatewayAvailabilityZoneAddresses</a>]</code> | For regional NAT gateways only: Specifies which Availability Zones you want the NAT gateway to support and the Elastic IP addresses (EIPs) to use in each AZ. |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayConfig.property.connectivityType">connectivity_type</a></code> | <code>str</code> | Indicates whether the NAT gateway supports public or private connectivity. The default is public connectivity. |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayConfig.property.maxDrainDurationSeconds">max_drain_duration_seconds</a></code> | <code>typing.Union[int, float]</code> | The maximum amount of time to wait (in seconds) before forcibly releasing the IP addresses if connections are still in progress. |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayConfig.property.privateIpAddress">private_ip_address</a></code> | <code>str</code> | The private IPv4 address to assign to the NAT gateway. |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayConfig.property.secondaryAllocationIds">secondary_allocation_ids</a></code> | <code>typing.List[str]</code> | Secondary EIP allocation IDs. For more information, see [Create a NAT gateway](https://docs.aws.amazon.com/vpc/latest/userguide/nat-gateway-working-with.html) in the *Amazon VPC User Guide*. |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayConfig.property.secondaryPrivateIpAddressCount">secondary_private_ip_address_count</a></code> | <code>typing.Union[int, float]</code> | [Private NAT gateway only] The number of secondary private IPv4 addresses you want to assign to the NAT gateway. |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayConfig.property.secondaryPrivateIpAddresses">secondary_private_ip_addresses</a></code> | <code>typing.List[str]</code> | Secondary private IPv4 addresses. |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayConfig.property.subnetId">subnet_id</a></code> | <code>str</code> | The ID of the subnet in which the NAT gateway is located. |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTags">Ec2NatGatewayTags</a>]</code> | The tags for the NAT gateway. |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayConfig.property.vpcId">vpc_id</a></code> | <code>str</code> | The ID of the VPC in which the NAT gateway is located. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `allocation_id`<sup>Optional</sup> <a name="allocation_id" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayConfig.property.allocationId"></a>

```python
allocation_id: str
```

- *Type:* str

[Public NAT gateway only] The allocation ID of the Elastic IP address that's associated with the NAT gateway.

This property is required for a public NAT gateway and cannot be specified with a private NAT gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_nat_gateway#allocation_id Ec2NatGateway#allocation_id}

---

##### `availability_mode`<sup>Optional</sup> <a name="availability_mode" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayConfig.property.availabilityMode"></a>

```python
availability_mode: str
```

- *Type:* str

Indicates whether this is a zonal (single-AZ) or regional (multi-AZ) NAT gateway.

A zonal NAT gateway is a NAT Gateway that provides redundancy and scalability within a single availability zone. A regional NAT gateway is a single NAT Gateway that works across multiple availability zones (AZs) in your VPC, providing redundancy, scalability and availability across all the AZs in a Region.
For more information, see [Regional NAT gateways for automatic multi-AZ expansion](https://docs.aws.amazon.com/vpc/latest/userguide/nat-gateways-regional.html) in the *Amazon VPC User Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_nat_gateway#availability_mode Ec2NatGateway#availability_mode}

---

##### `availability_zone_addresses`<sup>Optional</sup> <a name="availability_zone_addresses" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayConfig.property.availabilityZoneAddresses"></a>

```python
availability_zone_addresses: IResolvable | typing.List[Ec2NatGatewayAvailabilityZoneAddresses]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddresses">Ec2NatGatewayAvailabilityZoneAddresses</a>]

For regional NAT gateways only: Specifies which Availability Zones you want the NAT gateway to support and the Elastic IP addresses (EIPs) to use in each AZ.

The regional NAT gateway uses these EIPs to handle outbound NAT traffic from their respective AZs. If not specified, the NAT gateway will automatically expand to new AZs and associate EIPs upon detection of an elastic network interface. If you specify this parameter, auto-expansion is disabled and you must manually manage AZ coverage.
A regional NAT gateway is a single NAT Gateway that works across multiple availability zones (AZs) in your VPC, providing redundancy, scalability and availability across all the AZs in a Region.
For more information, see [Regional NAT gateways for automatic multi-AZ expansion](https://docs.aws.amazon.com/vpc/latest/userguide/nat-gateways-regional.html) in the *Amazon VPC User Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_nat_gateway#availability_zone_addresses Ec2NatGateway#availability_zone_addresses}

---

##### `connectivity_type`<sup>Optional</sup> <a name="connectivity_type" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayConfig.property.connectivityType"></a>

```python
connectivity_type: str
```

- *Type:* str

Indicates whether the NAT gateway supports public or private connectivity. The default is public connectivity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_nat_gateway#connectivity_type Ec2NatGateway#connectivity_type}

---

##### `max_drain_duration_seconds`<sup>Optional</sup> <a name="max_drain_duration_seconds" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayConfig.property.maxDrainDurationSeconds"></a>

```python
max_drain_duration_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum amount of time to wait (in seconds) before forcibly releasing the IP addresses if connections are still in progress.

Default value is 350 seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_nat_gateway#max_drain_duration_seconds Ec2NatGateway#max_drain_duration_seconds}

---

##### `private_ip_address`<sup>Optional</sup> <a name="private_ip_address" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayConfig.property.privateIpAddress"></a>

```python
private_ip_address: str
```

- *Type:* str

The private IPv4 address to assign to the NAT gateway.

If you don't provide an address, a private IPv4 address will be automatically assigned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_nat_gateway#private_ip_address Ec2NatGateway#private_ip_address}

---

##### `secondary_allocation_ids`<sup>Optional</sup> <a name="secondary_allocation_ids" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayConfig.property.secondaryAllocationIds"></a>

```python
secondary_allocation_ids: typing.List[str]
```

- *Type:* typing.List[str]

Secondary EIP allocation IDs. For more information, see [Create a NAT gateway](https://docs.aws.amazon.com/vpc/latest/userguide/nat-gateway-working-with.html) in the *Amazon VPC User Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_nat_gateway#secondary_allocation_ids Ec2NatGateway#secondary_allocation_ids}

---

##### `secondary_private_ip_address_count`<sup>Optional</sup> <a name="secondary_private_ip_address_count" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayConfig.property.secondaryPrivateIpAddressCount"></a>

```python
secondary_private_ip_address_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

[Private NAT gateway only] The number of secondary private IPv4 addresses you want to assign to the NAT gateway.

For more information about secondary addresses, see [Create a NAT gateway](https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-gateway.html#nat-gateway-creating) in the *Amazon Virtual Private Cloud User Guide*.
`SecondaryPrivateIpAddressCount` and `SecondaryPrivateIpAddresses` cannot be set at the same time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_nat_gateway#secondary_private_ip_address_count Ec2NatGateway#secondary_private_ip_address_count}

---

##### `secondary_private_ip_addresses`<sup>Optional</sup> <a name="secondary_private_ip_addresses" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayConfig.property.secondaryPrivateIpAddresses"></a>

```python
secondary_private_ip_addresses: typing.List[str]
```

- *Type:* typing.List[str]

Secondary private IPv4 addresses.

For more information about secondary addresses, see [Create a NAT gateway](https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-gateway.html#nat-gateway-creating) in the *Amazon Virtual Private Cloud User Guide*.
`SecondaryPrivateIpAddressCount` and `SecondaryPrivateIpAddresses` cannot be set at the same time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_nat_gateway#secondary_private_ip_addresses Ec2NatGateway#secondary_private_ip_addresses}

---

##### `subnet_id`<sup>Optional</sup> <a name="subnet_id" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayConfig.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

The ID of the subnet in which the NAT gateway is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_nat_gateway#subnet_id Ec2NatGateway#subnet_id}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[Ec2NatGatewayTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTags">Ec2NatGatewayTags</a>]

The tags for the NAT gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_nat_gateway#tags Ec2NatGateway#tags}

---

##### `vpc_id`<sup>Optional</sup> <a name="vpc_id" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayConfig.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

The ID of the VPC in which the NAT gateway is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_nat_gateway#vpc_id Ec2NatGateway#vpc_id}

---

### Ec2NatGatewayTags <a name="Ec2NatGatewayTags" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTags.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_nat_gateway

ec2NatGateway.Ec2NatGatewayTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTags.property.key">key</a></code> | <code>str</code> | The tag key. |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTags.property.value">value</a></code> | <code>str</code> | The tag value. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTags.property.key"></a>

```python
key: str
```

- *Type:* str

The tag key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_nat_gateway#key Ec2NatGateway#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTags.property.value"></a>

```python
value: str
```

- *Type:* str

The tag value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_nat_gateway#value Ec2NatGateway#value}

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2NatGatewayAvailabilityZoneAddressesList <a name="Ec2NatGatewayAvailabilityZoneAddressesList" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesList.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_nat_gateway

ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Ec2NatGatewayAvailabilityZoneAddressesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddresses">Ec2NatGatewayAvailabilityZoneAddresses</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[Ec2NatGatewayAvailabilityZoneAddresses]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddresses">Ec2NatGatewayAvailabilityZoneAddresses</a>]

---


### Ec2NatGatewayAvailabilityZoneAddressesOutputReference <a name="Ec2NatGatewayAvailabilityZoneAddressesOutputReference" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_nat_gateway

ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.resetAllocationIds">reset_allocation_ids</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.resetAvailabilityZone">reset_availability_zone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.resetAvailabilityZoneId">reset_availability_zone_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_allocation_ids` <a name="reset_allocation_ids" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.resetAllocationIds"></a>

```python
def reset_allocation_ids() -> None
```

##### `reset_availability_zone` <a name="reset_availability_zone" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.resetAvailabilityZone"></a>

```python
def reset_availability_zone() -> None
```

##### `reset_availability_zone_id` <a name="reset_availability_zone_id" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.resetAvailabilityZoneId"></a>

```python
def reset_availability_zone_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.property.allocationIdsInput">allocation_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.property.availabilityZoneIdInput">availability_zone_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.property.availabilityZoneInput">availability_zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.property.allocationIds">allocation_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.property.availabilityZone">availability_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.property.availabilityZoneId">availability_zone_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddresses">Ec2NatGatewayAvailabilityZoneAddresses</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allocation_ids_input`<sup>Optional</sup> <a name="allocation_ids_input" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.property.allocationIdsInput"></a>

```python
allocation_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `availability_zone_id_input`<sup>Optional</sup> <a name="availability_zone_id_input" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.property.availabilityZoneIdInput"></a>

```python
availability_zone_id_input: str
```

- *Type:* str

---

##### `availability_zone_input`<sup>Optional</sup> <a name="availability_zone_input" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.property.availabilityZoneInput"></a>

```python
availability_zone_input: str
```

- *Type:* str

---

##### `allocation_ids`<sup>Required</sup> <a name="allocation_ids" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.property.allocationIds"></a>

```python
allocation_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `availability_zone`<sup>Required</sup> <a name="availability_zone" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.property.availabilityZone"></a>

```python
availability_zone: str
```

- *Type:* str

---

##### `availability_zone_id`<sup>Required</sup> <a name="availability_zone_id" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.property.availabilityZoneId"></a>

```python
availability_zone_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Ec2NatGatewayAvailabilityZoneAddresses
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddresses">Ec2NatGatewayAvailabilityZoneAddresses</a>

---


### Ec2NatGatewayTagsList <a name="Ec2NatGatewayTagsList" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_nat_gateway

ec2NatGateway.Ec2NatGatewayTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Ec2NatGatewayTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTags">Ec2NatGatewayTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[Ec2NatGatewayTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTags">Ec2NatGatewayTags</a>]

---


### Ec2NatGatewayTagsOutputReference <a name="Ec2NatGatewayTagsOutputReference" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_nat_gateway

ec2NatGateway.Ec2NatGatewayTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTags">Ec2NatGatewayTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Ec2NatGatewayTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTags">Ec2NatGatewayTags</a>

---



