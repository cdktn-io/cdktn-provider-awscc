# `ec2Subnet` Submodule <a name="`ec2Subnet` Submodule" id="@cdktn/provider-awscc.ec2Subnet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2Subnet <a name="Ec2Subnet" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_subnet awscc_ec2_subnet}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_subnet

ec2Subnet.Ec2Subnet(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  vpc_id: str,
  assign_ipv6_address_on_creation: bool | IResolvable = None,
  availability_zone: str = None,
  availability_zone_id: str = None,
  cidr_block: str = None,
  enable_dns64: bool | IResolvable = None,
  enable_lni_at_device_index: typing.Union[int, float] = None,
  ipv4_ipam_pool_id: str = None,
  ipv4_netmask_length: typing.Union[int, float] = None,
  ipv6_cidr_block: str = None,
  ipv6_ipam_pool_id: str = None,
  ipv6_native: bool | IResolvable = None,
  ipv6_netmask_length: typing.Union[int, float] = None,
  map_public_ip_on_launch: bool | IResolvable = None,
  outpost_arn: str = None,
  private_dns_name_options_on_launch: Ec2SubnetPrivateDnsNameOptionsOnLaunch = None,
  tags: IResolvable | typing.List[Ec2SubnetTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.Initializer.parameter.vpcId">vpc_id</a></code> | <code>str</code> | The ID of the VPC the subnet is in. |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.Initializer.parameter.assignIpv6AddressOnCreation">assign_ipv6_address_on_creation</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates whether a network interface created in this subnet receives an IPv6 address. |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.Initializer.parameter.availabilityZone">availability_zone</a></code> | <code>str</code> | The Availability Zone of the subnet.  If you update this property, you must also update the ``CidrBlock`` property. |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.Initializer.parameter.availabilityZoneId">availability_zone_id</a></code> | <code>str</code> | The AZ ID of the subnet. |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.Initializer.parameter.cidrBlock">cidr_block</a></code> | <code>str</code> | The IPv4 CIDR block assigned to the subnet. |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.Initializer.parameter.enableDns64">enable_dns64</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates whether DNS queries made to the Amazon-provided DNS Resolver in this subnet should return synthetic IPv6 addresses for IPv4-only destinations. |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.Initializer.parameter.enableLniAtDeviceIndex">enable_lni_at_device_index</a></code> | <code>typing.Union[int, float]</code> | Indicates the device position for local network interfaces in this subnet. |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.Initializer.parameter.ipv4IpamPoolId">ipv4_ipam_pool_id</a></code> | <code>str</code> | An IPv4 IPAM pool ID for the subnet. |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.Initializer.parameter.ipv4NetmaskLength">ipv4_netmask_length</a></code> | <code>typing.Union[int, float]</code> | An IPv4 netmask length for the subnet. |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.Initializer.parameter.ipv6CidrBlock">ipv6_cidr_block</a></code> | <code>str</code> | The IPv6 CIDR block.  If you specify ``AssignIpv6AddressOnCreation``, you must also specify an IPv6 CIDR block. |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.Initializer.parameter.ipv6IpamPoolId">ipv6_ipam_pool_id</a></code> | <code>str</code> | An IPv6 IPAM pool ID for the subnet. |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.Initializer.parameter.ipv6Native">ipv6_native</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates whether this is an IPv6 only subnet. For more information, see [Subnet basics](https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Subnets.html#subnet-basics) in the *User Guide*. |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.Initializer.parameter.ipv6NetmaskLength">ipv6_netmask_length</a></code> | <code>typing.Union[int, float]</code> | An IPv6 netmask length for the subnet. |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.Initializer.parameter.mapPublicIpOnLaunch">map_public_ip_on_launch</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates whether instances launched in this subnet receive a public IPv4 address. |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.Initializer.parameter.outpostArn">outpost_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the Outpost. |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.Initializer.parameter.privateDnsNameOptionsOnLaunch">private_dns_name_options_on_launch</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetPrivateDnsNameOptionsOnLaunch">Ec2SubnetPrivateDnsNameOptionsOnLaunch</a></code> | The hostname type for EC2 instances launched into this subnet and how DNS A and AAAA record queries to the instances should be handled. |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTags">Ec2SubnetTags</a>]</code> | Any tags assigned to the subnet. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.Initializer.parameter.vpcId"></a>

- *Type:* str

The ID of the VPC the subnet is in.

If you update this property, you must also update the `CidrBlock` property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_subnet#vpc_id Ec2Subnet#vpc_id}

---

##### `assign_ipv6_address_on_creation`<sup>Optional</sup> <a name="assign_ipv6_address_on_creation" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.Initializer.parameter.assignIpv6AddressOnCreation"></a>

- *Type:* bool | cdktn.IResolvable

Indicates whether a network interface created in this subnet receives an IPv6 address.

The default value is `false`.
If you specify `AssignIpv6AddressOnCreation`, you must also specify an IPv6 CIDR block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_subnet#assign_ipv_6_address_on_creation Ec2Subnet#assign_ipv_6_address_on_creation}

---

##### `availability_zone`<sup>Optional</sup> <a name="availability_zone" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.Initializer.parameter.availabilityZone"></a>

- *Type:* str

The Availability Zone of the subnet.  If you update this property, you must also update the ``CidrBlock`` property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_subnet#availability_zone Ec2Subnet#availability_zone}

---

##### `availability_zone_id`<sup>Optional</sup> <a name="availability_zone_id" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.Initializer.parameter.availabilityZoneId"></a>

- *Type:* str

The AZ ID of the subnet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_subnet#availability_zone_id Ec2Subnet#availability_zone_id}

---

##### `cidr_block`<sup>Optional</sup> <a name="cidr_block" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.Initializer.parameter.cidrBlock"></a>

- *Type:* str

The IPv4 CIDR block assigned to the subnet.

If you update this property, we create a new subnet, and then delete the existing one.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_subnet#cidr_block Ec2Subnet#cidr_block}

---

##### `enable_dns64`<sup>Optional</sup> <a name="enable_dns64" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.Initializer.parameter.enableDns64"></a>

- *Type:* bool | cdktn.IResolvable

Indicates whether DNS queries made to the Amazon-provided DNS Resolver in this subnet should return synthetic IPv6 addresses for IPv4-only destinations.

You must first configure a NAT gateway in a public subnet (separate from the subnet containing the IPv6-only workloads). For example, the subnet containing the NAT gateway should have a `0.0.0.0/0` route pointing to the internet gateway. For more information, see [Configure DNS64 and NAT64](https://docs.aws.amazon.com/vpc/latest/userguide/nat-gateway-nat64-dns64.html#nat-gateway-nat64-dns64-walkthrough) in the *User Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_subnet#enable_dns_64 Ec2Subnet#enable_dns_64}

---

##### `enable_lni_at_device_index`<sup>Optional</sup> <a name="enable_lni_at_device_index" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.Initializer.parameter.enableLniAtDeviceIndex"></a>

- *Type:* typing.Union[int, float]

Indicates the device position for local network interfaces in this subnet.

For example, `1` indicates local network interfaces in this subnet are the secondary network interface (eth1).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_subnet#enable_lni_at_device_index Ec2Subnet#enable_lni_at_device_index}

---

##### `ipv4_ipam_pool_id`<sup>Optional</sup> <a name="ipv4_ipam_pool_id" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.Initializer.parameter.ipv4IpamPoolId"></a>

- *Type:* str

An IPv4 IPAM pool ID for the subnet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_subnet#ipv_4_ipam_pool_id Ec2Subnet#ipv_4_ipam_pool_id}

---

##### `ipv4_netmask_length`<sup>Optional</sup> <a name="ipv4_netmask_length" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.Initializer.parameter.ipv4NetmaskLength"></a>

- *Type:* typing.Union[int, float]

An IPv4 netmask length for the subnet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_subnet#ipv_4_netmask_length Ec2Subnet#ipv_4_netmask_length}

---

##### `ipv6_cidr_block`<sup>Optional</sup> <a name="ipv6_cidr_block" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.Initializer.parameter.ipv6CidrBlock"></a>

- *Type:* str

The IPv6 CIDR block.  If you specify ``AssignIpv6AddressOnCreation``, you must also specify an IPv6 CIDR block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_subnet#ipv_6_cidr_block Ec2Subnet#ipv_6_cidr_block}

---

##### `ipv6_ipam_pool_id`<sup>Optional</sup> <a name="ipv6_ipam_pool_id" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.Initializer.parameter.ipv6IpamPoolId"></a>

- *Type:* str

An IPv6 IPAM pool ID for the subnet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_subnet#ipv_6_ipam_pool_id Ec2Subnet#ipv_6_ipam_pool_id}

---

##### `ipv6_native`<sup>Optional</sup> <a name="ipv6_native" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.Initializer.parameter.ipv6Native"></a>

- *Type:* bool | cdktn.IResolvable

Indicates whether this is an IPv6 only subnet. For more information, see [Subnet basics](https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Subnets.html#subnet-basics) in the *User Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_subnet#ipv_6_native Ec2Subnet#ipv_6_native}

---

##### `ipv6_netmask_length`<sup>Optional</sup> <a name="ipv6_netmask_length" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.Initializer.parameter.ipv6NetmaskLength"></a>

- *Type:* typing.Union[int, float]

An IPv6 netmask length for the subnet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_subnet#ipv_6_netmask_length Ec2Subnet#ipv_6_netmask_length}

---

##### `map_public_ip_on_launch`<sup>Optional</sup> <a name="map_public_ip_on_launch" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.Initializer.parameter.mapPublicIpOnLaunch"></a>

- *Type:* bool | cdktn.IResolvable

Indicates whether instances launched in this subnet receive a public IPv4 address.

The default value is `false`.
AWS charges for all public IPv4 addresses, including public IPv4 addresses associated with running instances and Elastic IP addresses. For more information, see the *Public IPv4 Address* tab on the [VPC pricing page](https://docs.aws.amazon.com/vpc/pricing/).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_subnet#map_public_ip_on_launch Ec2Subnet#map_public_ip_on_launch}

---

##### `outpost_arn`<sup>Optional</sup> <a name="outpost_arn" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.Initializer.parameter.outpostArn"></a>

- *Type:* str

The Amazon Resource Name (ARN) of the Outpost.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_subnet#outpost_arn Ec2Subnet#outpost_arn}

---

##### `private_dns_name_options_on_launch`<sup>Optional</sup> <a name="private_dns_name_options_on_launch" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.Initializer.parameter.privateDnsNameOptionsOnLaunch"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetPrivateDnsNameOptionsOnLaunch">Ec2SubnetPrivateDnsNameOptionsOnLaunch</a>

The hostname type for EC2 instances launched into this subnet and how DNS A and AAAA record queries to the instances should be handled.

For more information, see [Amazon EC2 instance hostname types](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-naming.html) in the *User Guide*.
Available options:

* EnableResourceNameDnsAAAARecord (true | false)
* EnableResourceNameDnsARecord (true | false)
* HostnameType (ip-name | resource-name)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_subnet#private_dns_name_options_on_launch Ec2Subnet#private_dns_name_options_on_launch}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTags">Ec2SubnetTags</a>]

Any tags assigned to the subnet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_subnet#tags Ec2Subnet#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.putPrivateDnsNameOptionsOnLaunch">put_private_dns_name_options_on_launch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.resetAssignIpv6AddressOnCreation">reset_assign_ipv6_address_on_creation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.resetAvailabilityZone">reset_availability_zone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.resetAvailabilityZoneId">reset_availability_zone_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.resetCidrBlock">reset_cidr_block</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.resetEnableDns64">reset_enable_dns64</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.resetEnableLniAtDeviceIndex">reset_enable_lni_at_device_index</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.resetIpv4IpamPoolId">reset_ipv4_ipam_pool_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.resetIpv4NetmaskLength">reset_ipv4_netmask_length</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.resetIpv6CidrBlock">reset_ipv6_cidr_block</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.resetIpv6IpamPoolId">reset_ipv6_ipam_pool_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.resetIpv6Native">reset_ipv6_native</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.resetIpv6NetmaskLength">reset_ipv6_netmask_length</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.resetMapPublicIpOnLaunch">reset_map_public_ip_on_launch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.resetOutpostArn">reset_outpost_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.resetPrivateDnsNameOptionsOnLaunch">reset_private_dns_name_options_on_launch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_private_dns_name_options_on_launch` <a name="put_private_dns_name_options_on_launch" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.putPrivateDnsNameOptionsOnLaunch"></a>

```python
def put_private_dns_name_options_on_launch(
  enable_resource_name_dns_aaaa_record: bool | IResolvable = None,
  enable_resource_name_dns_a_record: bool | IResolvable = None,
  hostname_type: str = None
) -> None
```

###### `enable_resource_name_dns_aaaa_record`<sup>Optional</sup> <a name="enable_resource_name_dns_aaaa_record" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.putPrivateDnsNameOptionsOnLaunch.parameter.enableResourceNameDnsAaaaRecord"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_subnet#enable_resource_name_dns_aaaa_record Ec2Subnet#enable_resource_name_dns_aaaa_record}.

---

###### `enable_resource_name_dns_a_record`<sup>Optional</sup> <a name="enable_resource_name_dns_a_record" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.putPrivateDnsNameOptionsOnLaunch.parameter.enableResourceNameDnsARecord"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_subnet#enable_resource_name_dns_a_record Ec2Subnet#enable_resource_name_dns_a_record}.

---

###### `hostname_type`<sup>Optional</sup> <a name="hostname_type" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.putPrivateDnsNameOptionsOnLaunch.parameter.hostnameType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_subnet#hostname_type Ec2Subnet#hostname_type}.

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[Ec2SubnetTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTags">Ec2SubnetTags</a>]

---

##### `reset_assign_ipv6_address_on_creation` <a name="reset_assign_ipv6_address_on_creation" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.resetAssignIpv6AddressOnCreation"></a>

```python
def reset_assign_ipv6_address_on_creation() -> None
```

##### `reset_availability_zone` <a name="reset_availability_zone" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.resetAvailabilityZone"></a>

```python
def reset_availability_zone() -> None
```

##### `reset_availability_zone_id` <a name="reset_availability_zone_id" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.resetAvailabilityZoneId"></a>

```python
def reset_availability_zone_id() -> None
```

##### `reset_cidr_block` <a name="reset_cidr_block" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.resetCidrBlock"></a>

```python
def reset_cidr_block() -> None
```

##### `reset_enable_dns64` <a name="reset_enable_dns64" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.resetEnableDns64"></a>

```python
def reset_enable_dns64() -> None
```

##### `reset_enable_lni_at_device_index` <a name="reset_enable_lni_at_device_index" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.resetEnableLniAtDeviceIndex"></a>

```python
def reset_enable_lni_at_device_index() -> None
```

##### `reset_ipv4_ipam_pool_id` <a name="reset_ipv4_ipam_pool_id" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.resetIpv4IpamPoolId"></a>

```python
def reset_ipv4_ipam_pool_id() -> None
```

##### `reset_ipv4_netmask_length` <a name="reset_ipv4_netmask_length" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.resetIpv4NetmaskLength"></a>

```python
def reset_ipv4_netmask_length() -> None
```

##### `reset_ipv6_cidr_block` <a name="reset_ipv6_cidr_block" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.resetIpv6CidrBlock"></a>

```python
def reset_ipv6_cidr_block() -> None
```

##### `reset_ipv6_ipam_pool_id` <a name="reset_ipv6_ipam_pool_id" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.resetIpv6IpamPoolId"></a>

```python
def reset_ipv6_ipam_pool_id() -> None
```

##### `reset_ipv6_native` <a name="reset_ipv6_native" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.resetIpv6Native"></a>

```python
def reset_ipv6_native() -> None
```

##### `reset_ipv6_netmask_length` <a name="reset_ipv6_netmask_length" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.resetIpv6NetmaskLength"></a>

```python
def reset_ipv6_netmask_length() -> None
```

##### `reset_map_public_ip_on_launch` <a name="reset_map_public_ip_on_launch" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.resetMapPublicIpOnLaunch"></a>

```python
def reset_map_public_ip_on_launch() -> None
```

##### `reset_outpost_arn` <a name="reset_outpost_arn" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.resetOutpostArn"></a>

```python
def reset_outpost_arn() -> None
```

##### `reset_private_dns_name_options_on_launch` <a name="reset_private_dns_name_options_on_launch" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.resetPrivateDnsNameOptionsOnLaunch"></a>

```python
def reset_private_dns_name_options_on_launch() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a Ec2Subnet resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.isConstruct"></a>

```python
from cdktn_provider_awscc import ec2_subnet

ec2Subnet.Ec2Subnet.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.isTerraformElement"></a>

```python
from cdktn_provider_awscc import ec2_subnet

ec2Subnet.Ec2Subnet.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.isTerraformResource"></a>

```python
from cdktn_provider_awscc import ec2_subnet

ec2Subnet.Ec2Subnet.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import ec2_subnet

ec2Subnet.Ec2Subnet.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a Ec2Subnet resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Ec2Subnet to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Ec2Subnet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_subnet#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Ec2Subnet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.blockPublicAccessStates">block_public_access_states</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetBlockPublicAccessStatesOutputReference">Ec2SubnetBlockPublicAccessStatesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.ipv6CidrBlocks">ipv6_cidr_blocks</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.networkAclAssociationId">network_acl_association_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.privateDnsNameOptionsOnLaunch">private_dns_name_options_on_launch</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetPrivateDnsNameOptionsOnLaunchOutputReference">Ec2SubnetPrivateDnsNameOptionsOnLaunchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTagsList">Ec2SubnetTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.assignIpv6AddressOnCreationInput">assign_ipv6_address_on_creation_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.availabilityZoneIdInput">availability_zone_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.availabilityZoneInput">availability_zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.cidrBlockInput">cidr_block_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.enableDns64Input">enable_dns64_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.enableLniAtDeviceIndexInput">enable_lni_at_device_index_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.ipv4IpamPoolIdInput">ipv4_ipam_pool_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.ipv4NetmaskLengthInput">ipv4_netmask_length_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.ipv6CidrBlockInput">ipv6_cidr_block_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.ipv6IpamPoolIdInput">ipv6_ipam_pool_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.ipv6NativeInput">ipv6_native_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.ipv6NetmaskLengthInput">ipv6_netmask_length_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.mapPublicIpOnLaunchInput">map_public_ip_on_launch_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.outpostArnInput">outpost_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.privateDnsNameOptionsOnLaunchInput">private_dns_name_options_on_launch_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetPrivateDnsNameOptionsOnLaunch">Ec2SubnetPrivateDnsNameOptionsOnLaunch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTags">Ec2SubnetTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.vpcIdInput">vpc_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.assignIpv6AddressOnCreation">assign_ipv6_address_on_creation</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.availabilityZone">availability_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.availabilityZoneId">availability_zone_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.cidrBlock">cidr_block</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.enableDns64">enable_dns64</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.enableLniAtDeviceIndex">enable_lni_at_device_index</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.ipv4IpamPoolId">ipv4_ipam_pool_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.ipv4NetmaskLength">ipv4_netmask_length</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.ipv6CidrBlock">ipv6_cidr_block</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.ipv6IpamPoolId">ipv6_ipam_pool_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.ipv6Native">ipv6_native</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.ipv6NetmaskLength">ipv6_netmask_length</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.mapPublicIpOnLaunch">map_public_ip_on_launch</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.outpostArn">outpost_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.vpcId">vpc_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `block_public_access_states`<sup>Required</sup> <a name="block_public_access_states" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.blockPublicAccessStates"></a>

```python
block_public_access_states: Ec2SubnetBlockPublicAccessStatesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetBlockPublicAccessStatesOutputReference">Ec2SubnetBlockPublicAccessStatesOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ipv6_cidr_blocks`<sup>Required</sup> <a name="ipv6_cidr_blocks" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.ipv6CidrBlocks"></a>

```python
ipv6_cidr_blocks: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `network_acl_association_id`<sup>Required</sup> <a name="network_acl_association_id" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.networkAclAssociationId"></a>

```python
network_acl_association_id: str
```

- *Type:* str

---

##### `private_dns_name_options_on_launch`<sup>Required</sup> <a name="private_dns_name_options_on_launch" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.privateDnsNameOptionsOnLaunch"></a>

```python
private_dns_name_options_on_launch: Ec2SubnetPrivateDnsNameOptionsOnLaunchOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetPrivateDnsNameOptionsOnLaunchOutputReference">Ec2SubnetPrivateDnsNameOptionsOnLaunchOutputReference</a>

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.tags"></a>

```python
tags: Ec2SubnetTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTagsList">Ec2SubnetTagsList</a>

---

##### `assign_ipv6_address_on_creation_input`<sup>Optional</sup> <a name="assign_ipv6_address_on_creation_input" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.assignIpv6AddressOnCreationInput"></a>

```python
assign_ipv6_address_on_creation_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `availability_zone_id_input`<sup>Optional</sup> <a name="availability_zone_id_input" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.availabilityZoneIdInput"></a>

```python
availability_zone_id_input: str
```

- *Type:* str

---

##### `availability_zone_input`<sup>Optional</sup> <a name="availability_zone_input" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.availabilityZoneInput"></a>

```python
availability_zone_input: str
```

- *Type:* str

---

##### `cidr_block_input`<sup>Optional</sup> <a name="cidr_block_input" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.cidrBlockInput"></a>

```python
cidr_block_input: str
```

- *Type:* str

---

##### `enable_dns64_input`<sup>Optional</sup> <a name="enable_dns64_input" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.enableDns64Input"></a>

```python
enable_dns64_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enable_lni_at_device_index_input`<sup>Optional</sup> <a name="enable_lni_at_device_index_input" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.enableLniAtDeviceIndexInput"></a>

```python
enable_lni_at_device_index_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ipv4_ipam_pool_id_input`<sup>Optional</sup> <a name="ipv4_ipam_pool_id_input" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.ipv4IpamPoolIdInput"></a>

```python
ipv4_ipam_pool_id_input: str
```

- *Type:* str

---

##### `ipv4_netmask_length_input`<sup>Optional</sup> <a name="ipv4_netmask_length_input" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.ipv4NetmaskLengthInput"></a>

```python
ipv4_netmask_length_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ipv6_cidr_block_input`<sup>Optional</sup> <a name="ipv6_cidr_block_input" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.ipv6CidrBlockInput"></a>

```python
ipv6_cidr_block_input: str
```

- *Type:* str

---

##### `ipv6_ipam_pool_id_input`<sup>Optional</sup> <a name="ipv6_ipam_pool_id_input" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.ipv6IpamPoolIdInput"></a>

```python
ipv6_ipam_pool_id_input: str
```

- *Type:* str

---

##### `ipv6_native_input`<sup>Optional</sup> <a name="ipv6_native_input" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.ipv6NativeInput"></a>

```python
ipv6_native_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `ipv6_netmask_length_input`<sup>Optional</sup> <a name="ipv6_netmask_length_input" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.ipv6NetmaskLengthInput"></a>

```python
ipv6_netmask_length_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `map_public_ip_on_launch_input`<sup>Optional</sup> <a name="map_public_ip_on_launch_input" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.mapPublicIpOnLaunchInput"></a>

```python
map_public_ip_on_launch_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `outpost_arn_input`<sup>Optional</sup> <a name="outpost_arn_input" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.outpostArnInput"></a>

```python
outpost_arn_input: str
```

- *Type:* str

---

##### `private_dns_name_options_on_launch_input`<sup>Optional</sup> <a name="private_dns_name_options_on_launch_input" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.privateDnsNameOptionsOnLaunchInput"></a>

```python
private_dns_name_options_on_launch_input: IResolvable | Ec2SubnetPrivateDnsNameOptionsOnLaunch
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetPrivateDnsNameOptionsOnLaunch">Ec2SubnetPrivateDnsNameOptionsOnLaunch</a>

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[Ec2SubnetTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTags">Ec2SubnetTags</a>]

---

##### `vpc_id_input`<sup>Optional</sup> <a name="vpc_id_input" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.vpcIdInput"></a>

```python
vpc_id_input: str
```

- *Type:* str

---

##### `assign_ipv6_address_on_creation`<sup>Required</sup> <a name="assign_ipv6_address_on_creation" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.assignIpv6AddressOnCreation"></a>

```python
assign_ipv6_address_on_creation: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `availability_zone`<sup>Required</sup> <a name="availability_zone" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.availabilityZone"></a>

```python
availability_zone: str
```

- *Type:* str

---

##### `availability_zone_id`<sup>Required</sup> <a name="availability_zone_id" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.availabilityZoneId"></a>

```python
availability_zone_id: str
```

- *Type:* str

---

##### `cidr_block`<sup>Required</sup> <a name="cidr_block" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.cidrBlock"></a>

```python
cidr_block: str
```

- *Type:* str

---

##### `enable_dns64`<sup>Required</sup> <a name="enable_dns64" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.enableDns64"></a>

```python
enable_dns64: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enable_lni_at_device_index`<sup>Required</sup> <a name="enable_lni_at_device_index" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.enableLniAtDeviceIndex"></a>

```python
enable_lni_at_device_index: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ipv4_ipam_pool_id`<sup>Required</sup> <a name="ipv4_ipam_pool_id" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.ipv4IpamPoolId"></a>

```python
ipv4_ipam_pool_id: str
```

- *Type:* str

---

##### `ipv4_netmask_length`<sup>Required</sup> <a name="ipv4_netmask_length" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.ipv4NetmaskLength"></a>

```python
ipv4_netmask_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ipv6_cidr_block`<sup>Required</sup> <a name="ipv6_cidr_block" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.ipv6CidrBlock"></a>

```python
ipv6_cidr_block: str
```

- *Type:* str

---

##### `ipv6_ipam_pool_id`<sup>Required</sup> <a name="ipv6_ipam_pool_id" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.ipv6IpamPoolId"></a>

```python
ipv6_ipam_pool_id: str
```

- *Type:* str

---

##### `ipv6_native`<sup>Required</sup> <a name="ipv6_native" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.ipv6Native"></a>

```python
ipv6_native: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `ipv6_netmask_length`<sup>Required</sup> <a name="ipv6_netmask_length" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.ipv6NetmaskLength"></a>

```python
ipv6_netmask_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `map_public_ip_on_launch`<sup>Required</sup> <a name="map_public_ip_on_launch" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.mapPublicIpOnLaunch"></a>

```python
map_public_ip_on_launch: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `outpost_arn`<sup>Required</sup> <a name="outpost_arn" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.outpostArn"></a>

```python
outpost_arn: str
```

- *Type:* str

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ec2Subnet.Ec2Subnet.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2SubnetBlockPublicAccessStates <a name="Ec2SubnetBlockPublicAccessStates" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetBlockPublicAccessStates"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetBlockPublicAccessStates.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_subnet

ec2Subnet.Ec2SubnetBlockPublicAccessStates()
```


### Ec2SubnetConfig <a name="Ec2SubnetConfig" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetConfig.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_subnet

ec2Subnet.Ec2SubnetConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  vpc_id: str,
  assign_ipv6_address_on_creation: bool | IResolvable = None,
  availability_zone: str = None,
  availability_zone_id: str = None,
  cidr_block: str = None,
  enable_dns64: bool | IResolvable = None,
  enable_lni_at_device_index: typing.Union[int, float] = None,
  ipv4_ipam_pool_id: str = None,
  ipv4_netmask_length: typing.Union[int, float] = None,
  ipv6_cidr_block: str = None,
  ipv6_ipam_pool_id: str = None,
  ipv6_native: bool | IResolvable = None,
  ipv6_netmask_length: typing.Union[int, float] = None,
  map_public_ip_on_launch: bool | IResolvable = None,
  outpost_arn: str = None,
  private_dns_name_options_on_launch: Ec2SubnetPrivateDnsNameOptionsOnLaunch = None,
  tags: IResolvable | typing.List[Ec2SubnetTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetConfig.property.vpcId">vpc_id</a></code> | <code>str</code> | The ID of the VPC the subnet is in. |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetConfig.property.assignIpv6AddressOnCreation">assign_ipv6_address_on_creation</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates whether a network interface created in this subnet receives an IPv6 address. |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetConfig.property.availabilityZone">availability_zone</a></code> | <code>str</code> | The Availability Zone of the subnet.  If you update this property, you must also update the ``CidrBlock`` property. |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetConfig.property.availabilityZoneId">availability_zone_id</a></code> | <code>str</code> | The AZ ID of the subnet. |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetConfig.property.cidrBlock">cidr_block</a></code> | <code>str</code> | The IPv4 CIDR block assigned to the subnet. |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetConfig.property.enableDns64">enable_dns64</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates whether DNS queries made to the Amazon-provided DNS Resolver in this subnet should return synthetic IPv6 addresses for IPv4-only destinations. |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetConfig.property.enableLniAtDeviceIndex">enable_lni_at_device_index</a></code> | <code>typing.Union[int, float]</code> | Indicates the device position for local network interfaces in this subnet. |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetConfig.property.ipv4IpamPoolId">ipv4_ipam_pool_id</a></code> | <code>str</code> | An IPv4 IPAM pool ID for the subnet. |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetConfig.property.ipv4NetmaskLength">ipv4_netmask_length</a></code> | <code>typing.Union[int, float]</code> | An IPv4 netmask length for the subnet. |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetConfig.property.ipv6CidrBlock">ipv6_cidr_block</a></code> | <code>str</code> | The IPv6 CIDR block.  If you specify ``AssignIpv6AddressOnCreation``, you must also specify an IPv6 CIDR block. |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetConfig.property.ipv6IpamPoolId">ipv6_ipam_pool_id</a></code> | <code>str</code> | An IPv6 IPAM pool ID for the subnet. |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetConfig.property.ipv6Native">ipv6_native</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates whether this is an IPv6 only subnet. For more information, see [Subnet basics](https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Subnets.html#subnet-basics) in the *User Guide*. |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetConfig.property.ipv6NetmaskLength">ipv6_netmask_length</a></code> | <code>typing.Union[int, float]</code> | An IPv6 netmask length for the subnet. |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetConfig.property.mapPublicIpOnLaunch">map_public_ip_on_launch</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates whether instances launched in this subnet receive a public IPv4 address. |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetConfig.property.outpostArn">outpost_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the Outpost. |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetConfig.property.privateDnsNameOptionsOnLaunch">private_dns_name_options_on_launch</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetPrivateDnsNameOptionsOnLaunch">Ec2SubnetPrivateDnsNameOptionsOnLaunch</a></code> | The hostname type for EC2 instances launched into this subnet and how DNS A and AAAA record queries to the instances should be handled. |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTags">Ec2SubnetTags</a>]</code> | Any tags assigned to the subnet. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetConfig.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

The ID of the VPC the subnet is in.

If you update this property, you must also update the `CidrBlock` property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_subnet#vpc_id Ec2Subnet#vpc_id}

---

##### `assign_ipv6_address_on_creation`<sup>Optional</sup> <a name="assign_ipv6_address_on_creation" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetConfig.property.assignIpv6AddressOnCreation"></a>

```python
assign_ipv6_address_on_creation: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Indicates whether a network interface created in this subnet receives an IPv6 address.

The default value is `false`.
If you specify `AssignIpv6AddressOnCreation`, you must also specify an IPv6 CIDR block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_subnet#assign_ipv_6_address_on_creation Ec2Subnet#assign_ipv_6_address_on_creation}

---

##### `availability_zone`<sup>Optional</sup> <a name="availability_zone" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetConfig.property.availabilityZone"></a>

```python
availability_zone: str
```

- *Type:* str

The Availability Zone of the subnet.  If you update this property, you must also update the ``CidrBlock`` property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_subnet#availability_zone Ec2Subnet#availability_zone}

---

##### `availability_zone_id`<sup>Optional</sup> <a name="availability_zone_id" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetConfig.property.availabilityZoneId"></a>

```python
availability_zone_id: str
```

- *Type:* str

The AZ ID of the subnet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_subnet#availability_zone_id Ec2Subnet#availability_zone_id}

---

##### `cidr_block`<sup>Optional</sup> <a name="cidr_block" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetConfig.property.cidrBlock"></a>

```python
cidr_block: str
```

- *Type:* str

The IPv4 CIDR block assigned to the subnet.

If you update this property, we create a new subnet, and then delete the existing one.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_subnet#cidr_block Ec2Subnet#cidr_block}

---

##### `enable_dns64`<sup>Optional</sup> <a name="enable_dns64" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetConfig.property.enableDns64"></a>

```python
enable_dns64: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Indicates whether DNS queries made to the Amazon-provided DNS Resolver in this subnet should return synthetic IPv6 addresses for IPv4-only destinations.

You must first configure a NAT gateway in a public subnet (separate from the subnet containing the IPv6-only workloads). For example, the subnet containing the NAT gateway should have a `0.0.0.0/0` route pointing to the internet gateway. For more information, see [Configure DNS64 and NAT64](https://docs.aws.amazon.com/vpc/latest/userguide/nat-gateway-nat64-dns64.html#nat-gateway-nat64-dns64-walkthrough) in the *User Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_subnet#enable_dns_64 Ec2Subnet#enable_dns_64}

---

##### `enable_lni_at_device_index`<sup>Optional</sup> <a name="enable_lni_at_device_index" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetConfig.property.enableLniAtDeviceIndex"></a>

```python
enable_lni_at_device_index: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Indicates the device position for local network interfaces in this subnet.

For example, `1` indicates local network interfaces in this subnet are the secondary network interface (eth1).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_subnet#enable_lni_at_device_index Ec2Subnet#enable_lni_at_device_index}

---

##### `ipv4_ipam_pool_id`<sup>Optional</sup> <a name="ipv4_ipam_pool_id" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetConfig.property.ipv4IpamPoolId"></a>

```python
ipv4_ipam_pool_id: str
```

- *Type:* str

An IPv4 IPAM pool ID for the subnet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_subnet#ipv_4_ipam_pool_id Ec2Subnet#ipv_4_ipam_pool_id}

---

##### `ipv4_netmask_length`<sup>Optional</sup> <a name="ipv4_netmask_length" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetConfig.property.ipv4NetmaskLength"></a>

```python
ipv4_netmask_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

An IPv4 netmask length for the subnet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_subnet#ipv_4_netmask_length Ec2Subnet#ipv_4_netmask_length}

---

##### `ipv6_cidr_block`<sup>Optional</sup> <a name="ipv6_cidr_block" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetConfig.property.ipv6CidrBlock"></a>

```python
ipv6_cidr_block: str
```

- *Type:* str

The IPv6 CIDR block.  If you specify ``AssignIpv6AddressOnCreation``, you must also specify an IPv6 CIDR block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_subnet#ipv_6_cidr_block Ec2Subnet#ipv_6_cidr_block}

---

##### `ipv6_ipam_pool_id`<sup>Optional</sup> <a name="ipv6_ipam_pool_id" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetConfig.property.ipv6IpamPoolId"></a>

```python
ipv6_ipam_pool_id: str
```

- *Type:* str

An IPv6 IPAM pool ID for the subnet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_subnet#ipv_6_ipam_pool_id Ec2Subnet#ipv_6_ipam_pool_id}

---

##### `ipv6_native`<sup>Optional</sup> <a name="ipv6_native" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetConfig.property.ipv6Native"></a>

```python
ipv6_native: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Indicates whether this is an IPv6 only subnet. For more information, see [Subnet basics](https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Subnets.html#subnet-basics) in the *User Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_subnet#ipv_6_native Ec2Subnet#ipv_6_native}

---

##### `ipv6_netmask_length`<sup>Optional</sup> <a name="ipv6_netmask_length" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetConfig.property.ipv6NetmaskLength"></a>

```python
ipv6_netmask_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

An IPv6 netmask length for the subnet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_subnet#ipv_6_netmask_length Ec2Subnet#ipv_6_netmask_length}

---

##### `map_public_ip_on_launch`<sup>Optional</sup> <a name="map_public_ip_on_launch" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetConfig.property.mapPublicIpOnLaunch"></a>

```python
map_public_ip_on_launch: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Indicates whether instances launched in this subnet receive a public IPv4 address.

The default value is `false`.
AWS charges for all public IPv4 addresses, including public IPv4 addresses associated with running instances and Elastic IP addresses. For more information, see the *Public IPv4 Address* tab on the [VPC pricing page](https://docs.aws.amazon.com/vpc/pricing/).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_subnet#map_public_ip_on_launch Ec2Subnet#map_public_ip_on_launch}

---

##### `outpost_arn`<sup>Optional</sup> <a name="outpost_arn" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetConfig.property.outpostArn"></a>

```python
outpost_arn: str
```

- *Type:* str

The Amazon Resource Name (ARN) of the Outpost.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_subnet#outpost_arn Ec2Subnet#outpost_arn}

---

##### `private_dns_name_options_on_launch`<sup>Optional</sup> <a name="private_dns_name_options_on_launch" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetConfig.property.privateDnsNameOptionsOnLaunch"></a>

```python
private_dns_name_options_on_launch: Ec2SubnetPrivateDnsNameOptionsOnLaunch
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetPrivateDnsNameOptionsOnLaunch">Ec2SubnetPrivateDnsNameOptionsOnLaunch</a>

The hostname type for EC2 instances launched into this subnet and how DNS A and AAAA record queries to the instances should be handled.

For more information, see [Amazon EC2 instance hostname types](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-naming.html) in the *User Guide*.
Available options:

* EnableResourceNameDnsAAAARecord (true | false)
* EnableResourceNameDnsARecord (true | false)
* HostnameType (ip-name | resource-name)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_subnet#private_dns_name_options_on_launch Ec2Subnet#private_dns_name_options_on_launch}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[Ec2SubnetTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTags">Ec2SubnetTags</a>]

Any tags assigned to the subnet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_subnet#tags Ec2Subnet#tags}

---

### Ec2SubnetPrivateDnsNameOptionsOnLaunch <a name="Ec2SubnetPrivateDnsNameOptionsOnLaunch" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetPrivateDnsNameOptionsOnLaunch"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetPrivateDnsNameOptionsOnLaunch.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_subnet

ec2Subnet.Ec2SubnetPrivateDnsNameOptionsOnLaunch(
  enable_resource_name_dns_aaaa_record: bool | IResolvable = None,
  enable_resource_name_dns_a_record: bool | IResolvable = None,
  hostname_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetPrivateDnsNameOptionsOnLaunch.property.enableResourceNameDnsAaaaRecord">enable_resource_name_dns_aaaa_record</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_subnet#enable_resource_name_dns_aaaa_record Ec2Subnet#enable_resource_name_dns_aaaa_record}. |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetPrivateDnsNameOptionsOnLaunch.property.enableResourceNameDnsARecord">enable_resource_name_dns_a_record</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_subnet#enable_resource_name_dns_a_record Ec2Subnet#enable_resource_name_dns_a_record}. |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetPrivateDnsNameOptionsOnLaunch.property.hostnameType">hostname_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_subnet#hostname_type Ec2Subnet#hostname_type}. |

---

##### `enable_resource_name_dns_aaaa_record`<sup>Optional</sup> <a name="enable_resource_name_dns_aaaa_record" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetPrivateDnsNameOptionsOnLaunch.property.enableResourceNameDnsAaaaRecord"></a>

```python
enable_resource_name_dns_aaaa_record: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_subnet#enable_resource_name_dns_aaaa_record Ec2Subnet#enable_resource_name_dns_aaaa_record}.

---

##### `enable_resource_name_dns_a_record`<sup>Optional</sup> <a name="enable_resource_name_dns_a_record" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetPrivateDnsNameOptionsOnLaunch.property.enableResourceNameDnsARecord"></a>

```python
enable_resource_name_dns_a_record: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_subnet#enable_resource_name_dns_a_record Ec2Subnet#enable_resource_name_dns_a_record}.

---

##### `hostname_type`<sup>Optional</sup> <a name="hostname_type" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetPrivateDnsNameOptionsOnLaunch.property.hostnameType"></a>

```python
hostname_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_subnet#hostname_type Ec2Subnet#hostname_type}.

---

### Ec2SubnetTags <a name="Ec2SubnetTags" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTags.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_subnet

ec2Subnet.Ec2SubnetTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTags.property.key">key</a></code> | <code>str</code> | The tag key. |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTags.property.value">value</a></code> | <code>str</code> | The tag value. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTags.property.key"></a>

```python
key: str
```

- *Type:* str

The tag key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_subnet#key Ec2Subnet#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTags.property.value"></a>

```python
value: str
```

- *Type:* str

The tag value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_subnet#value Ec2Subnet#value}

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2SubnetBlockPublicAccessStatesOutputReference <a name="Ec2SubnetBlockPublicAccessStatesOutputReference" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetBlockPublicAccessStatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetBlockPublicAccessStatesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_subnet

ec2Subnet.Ec2SubnetBlockPublicAccessStatesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetBlockPublicAccessStatesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetBlockPublicAccessStatesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetBlockPublicAccessStatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetBlockPublicAccessStatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetBlockPublicAccessStatesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetBlockPublicAccessStatesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetBlockPublicAccessStatesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetBlockPublicAccessStatesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetBlockPublicAccessStatesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetBlockPublicAccessStatesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetBlockPublicAccessStatesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetBlockPublicAccessStatesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetBlockPublicAccessStatesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetBlockPublicAccessStatesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetBlockPublicAccessStatesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetBlockPublicAccessStatesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetBlockPublicAccessStatesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetBlockPublicAccessStatesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetBlockPublicAccessStatesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetBlockPublicAccessStatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetBlockPublicAccessStatesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetBlockPublicAccessStatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetBlockPublicAccessStatesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetBlockPublicAccessStatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetBlockPublicAccessStatesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetBlockPublicAccessStatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetBlockPublicAccessStatesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetBlockPublicAccessStatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetBlockPublicAccessStatesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetBlockPublicAccessStatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetBlockPublicAccessStatesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetBlockPublicAccessStatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetBlockPublicAccessStatesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetBlockPublicAccessStatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetBlockPublicAccessStatesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetBlockPublicAccessStatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetBlockPublicAccessStatesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetBlockPublicAccessStatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetBlockPublicAccessStatesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetBlockPublicAccessStatesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetBlockPublicAccessStatesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetBlockPublicAccessStatesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetBlockPublicAccessStatesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetBlockPublicAccessStatesOutputReference.property.internetGatewayBlockMode">internet_gateway_block_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetBlockPublicAccessStatesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetBlockPublicAccessStates">Ec2SubnetBlockPublicAccessStates</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetBlockPublicAccessStatesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetBlockPublicAccessStatesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internet_gateway_block_mode`<sup>Required</sup> <a name="internet_gateway_block_mode" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetBlockPublicAccessStatesOutputReference.property.internetGatewayBlockMode"></a>

```python
internet_gateway_block_mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetBlockPublicAccessStatesOutputReference.property.internalValue"></a>

```python
internal_value: Ec2SubnetBlockPublicAccessStates
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetBlockPublicAccessStates">Ec2SubnetBlockPublicAccessStates</a>

---


### Ec2SubnetPrivateDnsNameOptionsOnLaunchOutputReference <a name="Ec2SubnetPrivateDnsNameOptionsOnLaunchOutputReference" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetPrivateDnsNameOptionsOnLaunchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetPrivateDnsNameOptionsOnLaunchOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_subnet

ec2Subnet.Ec2SubnetPrivateDnsNameOptionsOnLaunchOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetPrivateDnsNameOptionsOnLaunchOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetPrivateDnsNameOptionsOnLaunchOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetPrivateDnsNameOptionsOnLaunchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetPrivateDnsNameOptionsOnLaunchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetPrivateDnsNameOptionsOnLaunchOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetPrivateDnsNameOptionsOnLaunchOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetPrivateDnsNameOptionsOnLaunchOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetPrivateDnsNameOptionsOnLaunchOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetPrivateDnsNameOptionsOnLaunchOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetPrivateDnsNameOptionsOnLaunchOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetPrivateDnsNameOptionsOnLaunchOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetPrivateDnsNameOptionsOnLaunchOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetPrivateDnsNameOptionsOnLaunchOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetPrivateDnsNameOptionsOnLaunchOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetPrivateDnsNameOptionsOnLaunchOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetPrivateDnsNameOptionsOnLaunchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetPrivateDnsNameOptionsOnLaunchOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetPrivateDnsNameOptionsOnLaunchOutputReference.resetEnableResourceNameDnsAaaaRecord">reset_enable_resource_name_dns_aaaa_record</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetPrivateDnsNameOptionsOnLaunchOutputReference.resetEnableResourceNameDnsARecord">reset_enable_resource_name_dns_a_record</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetPrivateDnsNameOptionsOnLaunchOutputReference.resetHostnameType">reset_hostname_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetPrivateDnsNameOptionsOnLaunchOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetPrivateDnsNameOptionsOnLaunchOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetPrivateDnsNameOptionsOnLaunchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetPrivateDnsNameOptionsOnLaunchOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetPrivateDnsNameOptionsOnLaunchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetPrivateDnsNameOptionsOnLaunchOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetPrivateDnsNameOptionsOnLaunchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetPrivateDnsNameOptionsOnLaunchOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetPrivateDnsNameOptionsOnLaunchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetPrivateDnsNameOptionsOnLaunchOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetPrivateDnsNameOptionsOnLaunchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetPrivateDnsNameOptionsOnLaunchOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetPrivateDnsNameOptionsOnLaunchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetPrivateDnsNameOptionsOnLaunchOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetPrivateDnsNameOptionsOnLaunchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetPrivateDnsNameOptionsOnLaunchOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetPrivateDnsNameOptionsOnLaunchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetPrivateDnsNameOptionsOnLaunchOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetPrivateDnsNameOptionsOnLaunchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetPrivateDnsNameOptionsOnLaunchOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetPrivateDnsNameOptionsOnLaunchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetPrivateDnsNameOptionsOnLaunchOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetPrivateDnsNameOptionsOnLaunchOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetPrivateDnsNameOptionsOnLaunchOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enable_resource_name_dns_aaaa_record` <a name="reset_enable_resource_name_dns_aaaa_record" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetPrivateDnsNameOptionsOnLaunchOutputReference.resetEnableResourceNameDnsAaaaRecord"></a>

```python
def reset_enable_resource_name_dns_aaaa_record() -> None
```

##### `reset_enable_resource_name_dns_a_record` <a name="reset_enable_resource_name_dns_a_record" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetPrivateDnsNameOptionsOnLaunchOutputReference.resetEnableResourceNameDnsARecord"></a>

```python
def reset_enable_resource_name_dns_a_record() -> None
```

##### `reset_hostname_type` <a name="reset_hostname_type" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetPrivateDnsNameOptionsOnLaunchOutputReference.resetHostnameType"></a>

```python
def reset_hostname_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetPrivateDnsNameOptionsOnLaunchOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetPrivateDnsNameOptionsOnLaunchOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetPrivateDnsNameOptionsOnLaunchOutputReference.property.enableResourceNameDnsAaaaRecordInput">enable_resource_name_dns_aaaa_record_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetPrivateDnsNameOptionsOnLaunchOutputReference.property.enableResourceNameDnsARecordInput">enable_resource_name_dns_a_record_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetPrivateDnsNameOptionsOnLaunchOutputReference.property.hostnameTypeInput">hostname_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetPrivateDnsNameOptionsOnLaunchOutputReference.property.enableResourceNameDnsAaaaRecord">enable_resource_name_dns_aaaa_record</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetPrivateDnsNameOptionsOnLaunchOutputReference.property.enableResourceNameDnsARecord">enable_resource_name_dns_a_record</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetPrivateDnsNameOptionsOnLaunchOutputReference.property.hostnameType">hostname_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetPrivateDnsNameOptionsOnLaunchOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetPrivateDnsNameOptionsOnLaunch">Ec2SubnetPrivateDnsNameOptionsOnLaunch</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetPrivateDnsNameOptionsOnLaunchOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetPrivateDnsNameOptionsOnLaunchOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enable_resource_name_dns_aaaa_record_input`<sup>Optional</sup> <a name="enable_resource_name_dns_aaaa_record_input" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetPrivateDnsNameOptionsOnLaunchOutputReference.property.enableResourceNameDnsAaaaRecordInput"></a>

```python
enable_resource_name_dns_aaaa_record_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enable_resource_name_dns_a_record_input`<sup>Optional</sup> <a name="enable_resource_name_dns_a_record_input" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetPrivateDnsNameOptionsOnLaunchOutputReference.property.enableResourceNameDnsARecordInput"></a>

```python
enable_resource_name_dns_a_record_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `hostname_type_input`<sup>Optional</sup> <a name="hostname_type_input" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetPrivateDnsNameOptionsOnLaunchOutputReference.property.hostnameTypeInput"></a>

```python
hostname_type_input: str
```

- *Type:* str

---

##### `enable_resource_name_dns_aaaa_record`<sup>Required</sup> <a name="enable_resource_name_dns_aaaa_record" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetPrivateDnsNameOptionsOnLaunchOutputReference.property.enableResourceNameDnsAaaaRecord"></a>

```python
enable_resource_name_dns_aaaa_record: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enable_resource_name_dns_a_record`<sup>Required</sup> <a name="enable_resource_name_dns_a_record" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetPrivateDnsNameOptionsOnLaunchOutputReference.property.enableResourceNameDnsARecord"></a>

```python
enable_resource_name_dns_a_record: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `hostname_type`<sup>Required</sup> <a name="hostname_type" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetPrivateDnsNameOptionsOnLaunchOutputReference.property.hostnameType"></a>

```python
hostname_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetPrivateDnsNameOptionsOnLaunchOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Ec2SubnetPrivateDnsNameOptionsOnLaunch
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetPrivateDnsNameOptionsOnLaunch">Ec2SubnetPrivateDnsNameOptionsOnLaunch</a>

---


### Ec2SubnetTagsList <a name="Ec2SubnetTagsList" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_subnet

ec2Subnet.Ec2SubnetTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Ec2SubnetTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTags">Ec2SubnetTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[Ec2SubnetTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTags">Ec2SubnetTags</a>]

---


### Ec2SubnetTagsOutputReference <a name="Ec2SubnetTagsOutputReference" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_subnet

ec2Subnet.Ec2SubnetTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTags">Ec2SubnetTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Ec2SubnetTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2Subnet.Ec2SubnetTags">Ec2SubnetTags</a>

---



