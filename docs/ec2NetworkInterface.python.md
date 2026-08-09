# `ec2NetworkInterface` Submodule <a name="`ec2NetworkInterface` Submodule" id="@cdktn/provider-awscc.ec2NetworkInterface"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2NetworkInterface <a name="Ec2NetworkInterface" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_network_interface awscc_ec2_network_interface}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_network_interface

ec2NetworkInterface.Ec2NetworkInterface(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  subnet_id: str,
  connection_tracking_specification: Ec2NetworkInterfaceConnectionTrackingSpecification = None,
  description: str = None,
  enable_primary_ipv6: bool | IResolvable = None,
  group_set: typing.List[str] = None,
  interface_type: str = None,
  ipv4_prefix_count: typing.Union[int, float] = None,
  ipv4_prefixes: IResolvable | typing.List[Ec2NetworkInterfaceIpv4Prefixes] = None,
  ipv6_address_count: typing.Union[int, float] = None,
  ipv6_addresses: IResolvable | typing.List[Ec2NetworkInterfaceIpv6Addresses] = None,
  ipv6_prefix_count: typing.Union[int, float] = None,
  ipv6_prefixes: IResolvable | typing.List[Ec2NetworkInterfaceIpv6Prefixes] = None,
  private_ip_address: str = None,
  private_ip_addresses: IResolvable | typing.List[Ec2NetworkInterfacePrivateIpAddresses] = None,
  public_ip_dns_hostname_type_specification: str = None,
  secondary_private_ip_address_count: typing.Union[int, float] = None,
  source_dest_check: bool | IResolvable = None,
  tags: IResolvable | typing.List[Ec2NetworkInterfaceTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.Initializer.parameter.subnetId">subnet_id</a></code> | <code>str</code> | The ID of the subnet to associate with the network interface. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.Initializer.parameter.connectionTrackingSpecification">connection_tracking_specification</a></code> | <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConnectionTrackingSpecification">Ec2NetworkInterfaceConnectionTrackingSpecification</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_network_interface#connection_tracking_specification Ec2NetworkInterface#connection_tracking_specification}. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.Initializer.parameter.description">description</a></code> | <code>str</code> | A description for the network interface. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.Initializer.parameter.enablePrimaryIpv6">enable_primary_ipv6</a></code> | <code>bool \| cdktn.IResolvable</code> | If you have instances or ENIs that rely on the IPv6 address not changing, to avoid disrupting traffic to instances or ENIs, you can enable a primary IPv6 address. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.Initializer.parameter.groupSet">group_set</a></code> | <code>typing.List[str]</code> | A list of security group IDs associated with this network interface. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.Initializer.parameter.interfaceType">interface_type</a></code> | <code>str</code> | Indicates the type of network interface. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.Initializer.parameter.ipv4PrefixCount">ipv4_prefix_count</a></code> | <code>typing.Union[int, float]</code> | The number of IPv4 prefixes to assign to a network interface. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.Initializer.parameter.ipv4Prefixes">ipv4_prefixes</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4Prefixes">Ec2NetworkInterfaceIpv4Prefixes</a>]</code> | Assigns a list of IPv4 prefixes to the network interface. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.Initializer.parameter.ipv6AddressCount">ipv6_address_count</a></code> | <code>typing.Union[int, float]</code> | The number of IPv6 addresses to assign to a network interface. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.Initializer.parameter.ipv6Addresses">ipv6_addresses</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6Addresses">Ec2NetworkInterfaceIpv6Addresses</a>]</code> | One or more specific IPv6 addresses from the IPv6 CIDR block range of your subnet to associate with the network interface. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.Initializer.parameter.ipv6PrefixCount">ipv6_prefix_count</a></code> | <code>typing.Union[int, float]</code> | The number of IPv6 prefixes to assign to a network interface. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.Initializer.parameter.ipv6Prefixes">ipv6_prefixes</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6Prefixes">Ec2NetworkInterfaceIpv6Prefixes</a>]</code> | Assigns a list of IPv6 prefixes to the network interface. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.Initializer.parameter.privateIpAddress">private_ip_address</a></code> | <code>str</code> | Assigns a single private IP address to the network interface, which is used as the primary private IP address. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.Initializer.parameter.privateIpAddresses">private_ip_addresses</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddresses">Ec2NetworkInterfacePrivateIpAddresses</a>]</code> | Assigns a list of private IP addresses to the network interface. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.Initializer.parameter.publicIpDnsHostnameTypeSpecification">public_ip_dns_hostname_type_specification</a></code> | <code>str</code> | Public IP DNS hostname type. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.Initializer.parameter.secondaryPrivateIpAddressCount">secondary_private_ip_address_count</a></code> | <code>typing.Union[int, float]</code> | The number of secondary private IPv4 addresses to assign to a network interface. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.Initializer.parameter.sourceDestCheck">source_dest_check</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates whether traffic to or from the instance is validated. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTags">Ec2NetworkInterfaceTags</a>]</code> | An arbitrary set of tags (key-value pairs) for this network interface. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.Initializer.parameter.subnetId"></a>

- *Type:* str

The ID of the subnet to associate with the network interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_network_interface#subnet_id Ec2NetworkInterface#subnet_id}

---

##### `connection_tracking_specification`<sup>Optional</sup> <a name="connection_tracking_specification" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.Initializer.parameter.connectionTrackingSpecification"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConnectionTrackingSpecification">Ec2NetworkInterfaceConnectionTrackingSpecification</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_network_interface#connection_tracking_specification Ec2NetworkInterface#connection_tracking_specification}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.Initializer.parameter.description"></a>

- *Type:* str

A description for the network interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_network_interface#description Ec2NetworkInterface#description}

---

##### `enable_primary_ipv6`<sup>Optional</sup> <a name="enable_primary_ipv6" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.Initializer.parameter.enablePrimaryIpv6"></a>

- *Type:* bool | cdktn.IResolvable

If you have instances or ENIs that rely on the IPv6 address not changing, to avoid disrupting traffic to instances or ENIs, you can enable a primary IPv6 address.

Enable this option to automatically assign an IPv6 associated with the ENI attached to your instance to be the primary IPv6 address. When you enable an IPv6 address to be a primary IPv6, you cannot disable it. Traffic will be routed to the primary IPv6 address until the instance is terminated or the ENI is detached. If you have multiple IPv6 addresses associated with an ENI and you enable a primary IPv6 address, the first IPv6 address associated with the ENI becomes the primary IPv6 address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_network_interface#enable_primary_ipv_6 Ec2NetworkInterface#enable_primary_ipv_6}

---

##### `group_set`<sup>Optional</sup> <a name="group_set" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.Initializer.parameter.groupSet"></a>

- *Type:* typing.List[str]

A list of security group IDs associated with this network interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_network_interface#group_set Ec2NetworkInterface#group_set}

---

##### `interface_type`<sup>Optional</sup> <a name="interface_type" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.Initializer.parameter.interfaceType"></a>

- *Type:* str

Indicates the type of network interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_network_interface#interface_type Ec2NetworkInterface#interface_type}

---

##### `ipv4_prefix_count`<sup>Optional</sup> <a name="ipv4_prefix_count" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.Initializer.parameter.ipv4PrefixCount"></a>

- *Type:* typing.Union[int, float]

The number of IPv4 prefixes to assign to a network interface.

When you specify a number of IPv4 prefixes, Amazon EC2 selects these prefixes from your existing subnet CIDR reservations, if available, or from free spaces in the subnet. By default, these will be /28 prefixes. You can't specify a count of IPv4 prefixes if you've specified one of the following: specific IPv4 prefixes, specific private IPv4 addresses, or a count of private IPv4 addresses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_network_interface#ipv_4_prefix_count Ec2NetworkInterface#ipv_4_prefix_count}

---

##### `ipv4_prefixes`<sup>Optional</sup> <a name="ipv4_prefixes" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.Initializer.parameter.ipv4Prefixes"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4Prefixes">Ec2NetworkInterfaceIpv4Prefixes</a>]

Assigns a list of IPv4 prefixes to the network interface.

If you want EC2 to automatically assign IPv4 prefixes, use the Ipv4PrefixCount property and do not specify this property. Presently, only /28 prefixes are supported. You can't specify IPv4 prefixes if you've specified one of the following: a count of IPv4 prefixes, specific private IPv4 addresses, or a count of private IPv4 addresses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_network_interface#ipv_4_prefixes Ec2NetworkInterface#ipv_4_prefixes}

---

##### `ipv6_address_count`<sup>Optional</sup> <a name="ipv6_address_count" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.Initializer.parameter.ipv6AddressCount"></a>

- *Type:* typing.Union[int, float]

The number of IPv6 addresses to assign to a network interface.

Amazon EC2 automatically selects the IPv6 addresses from the subnet range. To specify specific IPv6 addresses, use the Ipv6Addresses property and don't specify this property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_network_interface#ipv_6_address_count Ec2NetworkInterface#ipv_6_address_count}

---

##### `ipv6_addresses`<sup>Optional</sup> <a name="ipv6_addresses" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.Initializer.parameter.ipv6Addresses"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6Addresses">Ec2NetworkInterfaceIpv6Addresses</a>]

One or more specific IPv6 addresses from the IPv6 CIDR block range of your subnet to associate with the network interface.

If you're specifying a number of IPv6 addresses, use the Ipv6AddressCount property and don't specify this property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_network_interface#ipv_6_addresses Ec2NetworkInterface#ipv_6_addresses}

---

##### `ipv6_prefix_count`<sup>Optional</sup> <a name="ipv6_prefix_count" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.Initializer.parameter.ipv6PrefixCount"></a>

- *Type:* typing.Union[int, float]

The number of IPv6 prefixes to assign to a network interface.

When you specify a number of IPv6 prefixes, Amazon EC2 selects these prefixes from your existing subnet CIDR reservations, if available, or from free spaces in the subnet. By default, these will be /80 prefixes. You can't specify a count of IPv6 prefixes if you've specified one of the following: specific IPv6 prefixes, specific IPv6 addresses, or a count of IPv6 addresses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_network_interface#ipv_6_prefix_count Ec2NetworkInterface#ipv_6_prefix_count}

---

##### `ipv6_prefixes`<sup>Optional</sup> <a name="ipv6_prefixes" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.Initializer.parameter.ipv6Prefixes"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6Prefixes">Ec2NetworkInterfaceIpv6Prefixes</a>]

Assigns a list of IPv6 prefixes to the network interface.

If you want EC2 to automatically assign IPv6 prefixes, use the Ipv6PrefixCount property and do not specify this property. Presently, only /80 prefixes are supported. You can't specify IPv6 prefixes if you've specified one of the following: a count of IPv6 prefixes, specific IPv6 addresses, or a count of IPv6 addresses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_network_interface#ipv_6_prefixes Ec2NetworkInterface#ipv_6_prefixes}

---

##### `private_ip_address`<sup>Optional</sup> <a name="private_ip_address" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.Initializer.parameter.privateIpAddress"></a>

- *Type:* str

Assigns a single private IP address to the network interface, which is used as the primary private IP address.

If you want to specify multiple private IP address, use the PrivateIpAddresses property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_network_interface#private_ip_address Ec2NetworkInterface#private_ip_address}

---

##### `private_ip_addresses`<sup>Optional</sup> <a name="private_ip_addresses" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.Initializer.parameter.privateIpAddresses"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddresses">Ec2NetworkInterfacePrivateIpAddresses</a>]

Assigns a list of private IP addresses to the network interface.

You can specify a primary private IP address by setting the value of the Primary property to true in the PrivateIpAddressSpecification property. If you want EC2 to automatically assign private IP addresses, use the SecondaryPrivateIpAddressCount property and do not specify this property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_network_interface#private_ip_addresses Ec2NetworkInterface#private_ip_addresses}

---

##### `public_ip_dns_hostname_type_specification`<sup>Optional</sup> <a name="public_ip_dns_hostname_type_specification" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.Initializer.parameter.publicIpDnsHostnameTypeSpecification"></a>

- *Type:* str

Public IP DNS hostname type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_network_interface#public_ip_dns_hostname_type_specification Ec2NetworkInterface#public_ip_dns_hostname_type_specification}

---

##### `secondary_private_ip_address_count`<sup>Optional</sup> <a name="secondary_private_ip_address_count" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.Initializer.parameter.secondaryPrivateIpAddressCount"></a>

- *Type:* typing.Union[int, float]

The number of secondary private IPv4 addresses to assign to a network interface.

When you specify a number of secondary IPv4 addresses, Amazon EC2 selects these IP addresses within the subnet's IPv4 CIDR range. You can't specify this option and specify more than one private IP address using privateIpAddresses

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_network_interface#secondary_private_ip_address_count Ec2NetworkInterface#secondary_private_ip_address_count}

---

##### `source_dest_check`<sup>Optional</sup> <a name="source_dest_check" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.Initializer.parameter.sourceDestCheck"></a>

- *Type:* bool | cdktn.IResolvable

Indicates whether traffic to or from the instance is validated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_network_interface#source_dest_check Ec2NetworkInterface#source_dest_check}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTags">Ec2NetworkInterfaceTags</a>]

An arbitrary set of tags (key-value pairs) for this network interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_network_interface#tags Ec2NetworkInterface#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.putConnectionTrackingSpecification">put_connection_tracking_specification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.putIpv4Prefixes">put_ipv4_prefixes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.putIpv6Addresses">put_ipv6_addresses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.putIpv6Prefixes">put_ipv6_prefixes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.putPrivateIpAddresses">put_private_ip_addresses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.resetConnectionTrackingSpecification">reset_connection_tracking_specification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.resetEnablePrimaryIpv6">reset_enable_primary_ipv6</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.resetGroupSet">reset_group_set</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.resetInterfaceType">reset_interface_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.resetIpv4PrefixCount">reset_ipv4_prefix_count</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.resetIpv4Prefixes">reset_ipv4_prefixes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.resetIpv6AddressCount">reset_ipv6_address_count</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.resetIpv6Addresses">reset_ipv6_addresses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.resetIpv6PrefixCount">reset_ipv6_prefix_count</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.resetIpv6Prefixes">reset_ipv6_prefixes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.resetPrivateIpAddress">reset_private_ip_address</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.resetPrivateIpAddresses">reset_private_ip_addresses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.resetPublicIpDnsHostnameTypeSpecification">reset_public_ip_dns_hostname_type_specification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.resetSecondaryPrivateIpAddressCount">reset_secondary_private_ip_address_count</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.resetSourceDestCheck">reset_source_dest_check</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_connection_tracking_specification` <a name="put_connection_tracking_specification" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.putConnectionTrackingSpecification"></a>

```python
def put_connection_tracking_specification(
  tcp_established_timeout: typing.Union[int, float] = None,
  udp_stream_timeout: typing.Union[int, float] = None,
  udp_timeout: typing.Union[int, float] = None
) -> None
```

###### `tcp_established_timeout`<sup>Optional</sup> <a name="tcp_established_timeout" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.putConnectionTrackingSpecification.parameter.tcpEstablishedTimeout"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_network_interface#tcp_established_timeout Ec2NetworkInterface#tcp_established_timeout}.

---

###### `udp_stream_timeout`<sup>Optional</sup> <a name="udp_stream_timeout" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.putConnectionTrackingSpecification.parameter.udpStreamTimeout"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_network_interface#udp_stream_timeout Ec2NetworkInterface#udp_stream_timeout}.

---

###### `udp_timeout`<sup>Optional</sup> <a name="udp_timeout" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.putConnectionTrackingSpecification.parameter.udpTimeout"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_network_interface#udp_timeout Ec2NetworkInterface#udp_timeout}.

---

##### `put_ipv4_prefixes` <a name="put_ipv4_prefixes" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.putIpv4Prefixes"></a>

```python
def put_ipv4_prefixes(
  value: IResolvable | typing.List[Ec2NetworkInterfaceIpv4Prefixes]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.putIpv4Prefixes.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4Prefixes">Ec2NetworkInterfaceIpv4Prefixes</a>]

---

##### `put_ipv6_addresses` <a name="put_ipv6_addresses" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.putIpv6Addresses"></a>

```python
def put_ipv6_addresses(
  value: IResolvable | typing.List[Ec2NetworkInterfaceIpv6Addresses]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.putIpv6Addresses.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6Addresses">Ec2NetworkInterfaceIpv6Addresses</a>]

---

##### `put_ipv6_prefixes` <a name="put_ipv6_prefixes" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.putIpv6Prefixes"></a>

```python
def put_ipv6_prefixes(
  value: IResolvable | typing.List[Ec2NetworkInterfaceIpv6Prefixes]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.putIpv6Prefixes.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6Prefixes">Ec2NetworkInterfaceIpv6Prefixes</a>]

---

##### `put_private_ip_addresses` <a name="put_private_ip_addresses" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.putPrivateIpAddresses"></a>

```python
def put_private_ip_addresses(
  value: IResolvable | typing.List[Ec2NetworkInterfacePrivateIpAddresses]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.putPrivateIpAddresses.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddresses">Ec2NetworkInterfacePrivateIpAddresses</a>]

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[Ec2NetworkInterfaceTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTags">Ec2NetworkInterfaceTags</a>]

---

##### `reset_connection_tracking_specification` <a name="reset_connection_tracking_specification" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.resetConnectionTrackingSpecification"></a>

```python
def reset_connection_tracking_specification() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_enable_primary_ipv6` <a name="reset_enable_primary_ipv6" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.resetEnablePrimaryIpv6"></a>

```python
def reset_enable_primary_ipv6() -> None
```

##### `reset_group_set` <a name="reset_group_set" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.resetGroupSet"></a>

```python
def reset_group_set() -> None
```

##### `reset_interface_type` <a name="reset_interface_type" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.resetInterfaceType"></a>

```python
def reset_interface_type() -> None
```

##### `reset_ipv4_prefix_count` <a name="reset_ipv4_prefix_count" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.resetIpv4PrefixCount"></a>

```python
def reset_ipv4_prefix_count() -> None
```

##### `reset_ipv4_prefixes` <a name="reset_ipv4_prefixes" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.resetIpv4Prefixes"></a>

```python
def reset_ipv4_prefixes() -> None
```

##### `reset_ipv6_address_count` <a name="reset_ipv6_address_count" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.resetIpv6AddressCount"></a>

```python
def reset_ipv6_address_count() -> None
```

##### `reset_ipv6_addresses` <a name="reset_ipv6_addresses" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.resetIpv6Addresses"></a>

```python
def reset_ipv6_addresses() -> None
```

##### `reset_ipv6_prefix_count` <a name="reset_ipv6_prefix_count" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.resetIpv6PrefixCount"></a>

```python
def reset_ipv6_prefix_count() -> None
```

##### `reset_ipv6_prefixes` <a name="reset_ipv6_prefixes" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.resetIpv6Prefixes"></a>

```python
def reset_ipv6_prefixes() -> None
```

##### `reset_private_ip_address` <a name="reset_private_ip_address" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.resetPrivateIpAddress"></a>

```python
def reset_private_ip_address() -> None
```

##### `reset_private_ip_addresses` <a name="reset_private_ip_addresses" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.resetPrivateIpAddresses"></a>

```python
def reset_private_ip_addresses() -> None
```

##### `reset_public_ip_dns_hostname_type_specification` <a name="reset_public_ip_dns_hostname_type_specification" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.resetPublicIpDnsHostnameTypeSpecification"></a>

```python
def reset_public_ip_dns_hostname_type_specification() -> None
```

##### `reset_secondary_private_ip_address_count` <a name="reset_secondary_private_ip_address_count" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.resetSecondaryPrivateIpAddressCount"></a>

```python
def reset_secondary_private_ip_address_count() -> None
```

##### `reset_source_dest_check` <a name="reset_source_dest_check" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.resetSourceDestCheck"></a>

```python
def reset_source_dest_check() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a Ec2NetworkInterface resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.isConstruct"></a>

```python
from cdktn_provider_awscc import ec2_network_interface

ec2NetworkInterface.Ec2NetworkInterface.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.isTerraformElement"></a>

```python
from cdktn_provider_awscc import ec2_network_interface

ec2NetworkInterface.Ec2NetworkInterface.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.isTerraformResource"></a>

```python
from cdktn_provider_awscc import ec2_network_interface

ec2NetworkInterface.Ec2NetworkInterface.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import ec2_network_interface

ec2NetworkInterface.Ec2NetworkInterface.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a Ec2NetworkInterface resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Ec2NetworkInterface to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Ec2NetworkInterface that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_network_interface#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Ec2NetworkInterface to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.connectionTrackingSpecification">connection_tracking_specification</a></code> | <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConnectionTrackingSpecificationOutputReference">Ec2NetworkInterfaceConnectionTrackingSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.ipv4Prefixes">ipv4_prefixes</a></code> | <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4PrefixesList">Ec2NetworkInterfaceIpv4PrefixesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.ipv6Addresses">ipv6_addresses</a></code> | <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6AddressesList">Ec2NetworkInterfaceIpv6AddressesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.ipv6Prefixes">ipv6_prefixes</a></code> | <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6PrefixesList">Ec2NetworkInterfaceIpv6PrefixesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.networkInterfaceId">network_interface_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.primaryIpv6Address">primary_ipv6_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.primaryPrivateIpAddress">primary_private_ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.privateIpAddresses">private_ip_addresses</a></code> | <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddressesList">Ec2NetworkInterfacePrivateIpAddressesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.publicIpDnsNameOptions">public_ip_dns_name_options</a></code> | <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePublicIpDnsNameOptionsOutputReference">Ec2NetworkInterfacePublicIpDnsNameOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.secondaryPrivateIpAddresses">secondary_private_ip_addresses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTagsList">Ec2NetworkInterfaceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.vpcId">vpc_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.connectionTrackingSpecificationInput">connection_tracking_specification_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConnectionTrackingSpecification">Ec2NetworkInterfaceConnectionTrackingSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.enablePrimaryIpv6Input">enable_primary_ipv6_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.groupSetInput">group_set_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.interfaceTypeInput">interface_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.ipv4PrefixCountInput">ipv4_prefix_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.ipv4PrefixesInput">ipv4_prefixes_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4Prefixes">Ec2NetworkInterfaceIpv4Prefixes</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.ipv6AddressCountInput">ipv6_address_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.ipv6AddressesInput">ipv6_addresses_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6Addresses">Ec2NetworkInterfaceIpv6Addresses</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.ipv6PrefixCountInput">ipv6_prefix_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.ipv6PrefixesInput">ipv6_prefixes_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6Prefixes">Ec2NetworkInterfaceIpv6Prefixes</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.privateIpAddressesInput">private_ip_addresses_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddresses">Ec2NetworkInterfacePrivateIpAddresses</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.privateIpAddressInput">private_ip_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.publicIpDnsHostnameTypeSpecificationInput">public_ip_dns_hostname_type_specification_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.secondaryPrivateIpAddressCountInput">secondary_private_ip_address_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.sourceDestCheckInput">source_dest_check_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.subnetIdInput">subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTags">Ec2NetworkInterfaceTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.enablePrimaryIpv6">enable_primary_ipv6</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.groupSet">group_set</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.interfaceType">interface_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.ipv4PrefixCount">ipv4_prefix_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.ipv6AddressCount">ipv6_address_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.ipv6PrefixCount">ipv6_prefix_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.privateIpAddress">private_ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.publicIpDnsHostnameTypeSpecification">public_ip_dns_hostname_type_specification</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.secondaryPrivateIpAddressCount">secondary_private_ip_address_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.sourceDestCheck">source_dest_check</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `connection_tracking_specification`<sup>Required</sup> <a name="connection_tracking_specification" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.connectionTrackingSpecification"></a>

```python
connection_tracking_specification: Ec2NetworkInterfaceConnectionTrackingSpecificationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConnectionTrackingSpecificationOutputReference">Ec2NetworkInterfaceConnectionTrackingSpecificationOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ipv4_prefixes`<sup>Required</sup> <a name="ipv4_prefixes" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.ipv4Prefixes"></a>

```python
ipv4_prefixes: Ec2NetworkInterfaceIpv4PrefixesList
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4PrefixesList">Ec2NetworkInterfaceIpv4PrefixesList</a>

---

##### `ipv6_addresses`<sup>Required</sup> <a name="ipv6_addresses" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.ipv6Addresses"></a>

```python
ipv6_addresses: Ec2NetworkInterfaceIpv6AddressesList
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6AddressesList">Ec2NetworkInterfaceIpv6AddressesList</a>

---

##### `ipv6_prefixes`<sup>Required</sup> <a name="ipv6_prefixes" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.ipv6Prefixes"></a>

```python
ipv6_prefixes: Ec2NetworkInterfaceIpv6PrefixesList
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6PrefixesList">Ec2NetworkInterfaceIpv6PrefixesList</a>

---

##### `network_interface_id`<sup>Required</sup> <a name="network_interface_id" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.networkInterfaceId"></a>

```python
network_interface_id: str
```

- *Type:* str

---

##### `primary_ipv6_address`<sup>Required</sup> <a name="primary_ipv6_address" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.primaryIpv6Address"></a>

```python
primary_ipv6_address: str
```

- *Type:* str

---

##### `primary_private_ip_address`<sup>Required</sup> <a name="primary_private_ip_address" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.primaryPrivateIpAddress"></a>

```python
primary_private_ip_address: str
```

- *Type:* str

---

##### `private_ip_addresses`<sup>Required</sup> <a name="private_ip_addresses" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.privateIpAddresses"></a>

```python
private_ip_addresses: Ec2NetworkInterfacePrivateIpAddressesList
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddressesList">Ec2NetworkInterfacePrivateIpAddressesList</a>

---

##### `public_ip_dns_name_options`<sup>Required</sup> <a name="public_ip_dns_name_options" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.publicIpDnsNameOptions"></a>

```python
public_ip_dns_name_options: Ec2NetworkInterfacePublicIpDnsNameOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePublicIpDnsNameOptionsOutputReference">Ec2NetworkInterfacePublicIpDnsNameOptionsOutputReference</a>

---

##### `secondary_private_ip_addresses`<sup>Required</sup> <a name="secondary_private_ip_addresses" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.secondaryPrivateIpAddresses"></a>

```python
secondary_private_ip_addresses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.tags"></a>

```python
tags: Ec2NetworkInterfaceTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTagsList">Ec2NetworkInterfaceTagsList</a>

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

---

##### `connection_tracking_specification_input`<sup>Optional</sup> <a name="connection_tracking_specification_input" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.connectionTrackingSpecificationInput"></a>

```python
connection_tracking_specification_input: IResolvable | Ec2NetworkInterfaceConnectionTrackingSpecification
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConnectionTrackingSpecification">Ec2NetworkInterfaceConnectionTrackingSpecification</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `enable_primary_ipv6_input`<sup>Optional</sup> <a name="enable_primary_ipv6_input" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.enablePrimaryIpv6Input"></a>

```python
enable_primary_ipv6_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `group_set_input`<sup>Optional</sup> <a name="group_set_input" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.groupSetInput"></a>

```python
group_set_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `interface_type_input`<sup>Optional</sup> <a name="interface_type_input" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.interfaceTypeInput"></a>

```python
interface_type_input: str
```

- *Type:* str

---

##### `ipv4_prefix_count_input`<sup>Optional</sup> <a name="ipv4_prefix_count_input" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.ipv4PrefixCountInput"></a>

```python
ipv4_prefix_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ipv4_prefixes_input`<sup>Optional</sup> <a name="ipv4_prefixes_input" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.ipv4PrefixesInput"></a>

```python
ipv4_prefixes_input: IResolvable | typing.List[Ec2NetworkInterfaceIpv4Prefixes]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4Prefixes">Ec2NetworkInterfaceIpv4Prefixes</a>]

---

##### `ipv6_address_count_input`<sup>Optional</sup> <a name="ipv6_address_count_input" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.ipv6AddressCountInput"></a>

```python
ipv6_address_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ipv6_addresses_input`<sup>Optional</sup> <a name="ipv6_addresses_input" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.ipv6AddressesInput"></a>

```python
ipv6_addresses_input: IResolvable | typing.List[Ec2NetworkInterfaceIpv6Addresses]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6Addresses">Ec2NetworkInterfaceIpv6Addresses</a>]

---

##### `ipv6_prefix_count_input`<sup>Optional</sup> <a name="ipv6_prefix_count_input" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.ipv6PrefixCountInput"></a>

```python
ipv6_prefix_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ipv6_prefixes_input`<sup>Optional</sup> <a name="ipv6_prefixes_input" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.ipv6PrefixesInput"></a>

```python
ipv6_prefixes_input: IResolvable | typing.List[Ec2NetworkInterfaceIpv6Prefixes]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6Prefixes">Ec2NetworkInterfaceIpv6Prefixes</a>]

---

##### `private_ip_addresses_input`<sup>Optional</sup> <a name="private_ip_addresses_input" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.privateIpAddressesInput"></a>

```python
private_ip_addresses_input: IResolvable | typing.List[Ec2NetworkInterfacePrivateIpAddresses]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddresses">Ec2NetworkInterfacePrivateIpAddresses</a>]

---

##### `private_ip_address_input`<sup>Optional</sup> <a name="private_ip_address_input" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.privateIpAddressInput"></a>

```python
private_ip_address_input: str
```

- *Type:* str

---

##### `public_ip_dns_hostname_type_specification_input`<sup>Optional</sup> <a name="public_ip_dns_hostname_type_specification_input" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.publicIpDnsHostnameTypeSpecificationInput"></a>

```python
public_ip_dns_hostname_type_specification_input: str
```

- *Type:* str

---

##### `secondary_private_ip_address_count_input`<sup>Optional</sup> <a name="secondary_private_ip_address_count_input" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.secondaryPrivateIpAddressCountInput"></a>

```python
secondary_private_ip_address_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `source_dest_check_input`<sup>Optional</sup> <a name="source_dest_check_input" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.sourceDestCheckInput"></a>

```python
source_dest_check_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `subnet_id_input`<sup>Optional</sup> <a name="subnet_id_input" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.subnetIdInput"></a>

```python
subnet_id_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[Ec2NetworkInterfaceTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTags">Ec2NetworkInterfaceTags</a>]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `enable_primary_ipv6`<sup>Required</sup> <a name="enable_primary_ipv6" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.enablePrimaryIpv6"></a>

```python
enable_primary_ipv6: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `group_set`<sup>Required</sup> <a name="group_set" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.groupSet"></a>

```python
group_set: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `interface_type`<sup>Required</sup> <a name="interface_type" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.interfaceType"></a>

```python
interface_type: str
```

- *Type:* str

---

##### `ipv4_prefix_count`<sup>Required</sup> <a name="ipv4_prefix_count" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.ipv4PrefixCount"></a>

```python
ipv4_prefix_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ipv6_address_count`<sup>Required</sup> <a name="ipv6_address_count" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.ipv6AddressCount"></a>

```python
ipv6_address_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ipv6_prefix_count`<sup>Required</sup> <a name="ipv6_prefix_count" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.ipv6PrefixCount"></a>

```python
ipv6_prefix_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `private_ip_address`<sup>Required</sup> <a name="private_ip_address" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.privateIpAddress"></a>

```python
private_ip_address: str
```

- *Type:* str

---

##### `public_ip_dns_hostname_type_specification`<sup>Required</sup> <a name="public_ip_dns_hostname_type_specification" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.publicIpDnsHostnameTypeSpecification"></a>

```python
public_ip_dns_hostname_type_specification: str
```

- *Type:* str

---

##### `secondary_private_ip_address_count`<sup>Required</sup> <a name="secondary_private_ip_address_count" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.secondaryPrivateIpAddressCount"></a>

```python
secondary_private_ip_address_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `source_dest_check`<sup>Required</sup> <a name="source_dest_check" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.sourceDestCheck"></a>

```python
source_dest_check: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2NetworkInterfaceConfig <a name="Ec2NetworkInterfaceConfig" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConfig.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_network_interface

ec2NetworkInterface.Ec2NetworkInterfaceConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  subnet_id: str,
  connection_tracking_specification: Ec2NetworkInterfaceConnectionTrackingSpecification = None,
  description: str = None,
  enable_primary_ipv6: bool | IResolvable = None,
  group_set: typing.List[str] = None,
  interface_type: str = None,
  ipv4_prefix_count: typing.Union[int, float] = None,
  ipv4_prefixes: IResolvable | typing.List[Ec2NetworkInterfaceIpv4Prefixes] = None,
  ipv6_address_count: typing.Union[int, float] = None,
  ipv6_addresses: IResolvable | typing.List[Ec2NetworkInterfaceIpv6Addresses] = None,
  ipv6_prefix_count: typing.Union[int, float] = None,
  ipv6_prefixes: IResolvable | typing.List[Ec2NetworkInterfaceIpv6Prefixes] = None,
  private_ip_address: str = None,
  private_ip_addresses: IResolvable | typing.List[Ec2NetworkInterfacePrivateIpAddresses] = None,
  public_ip_dns_hostname_type_specification: str = None,
  secondary_private_ip_address_count: typing.Union[int, float] = None,
  source_dest_check: bool | IResolvable = None,
  tags: IResolvable | typing.List[Ec2NetworkInterfaceTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConfig.property.subnetId">subnet_id</a></code> | <code>str</code> | The ID of the subnet to associate with the network interface. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConfig.property.connectionTrackingSpecification">connection_tracking_specification</a></code> | <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConnectionTrackingSpecification">Ec2NetworkInterfaceConnectionTrackingSpecification</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_network_interface#connection_tracking_specification Ec2NetworkInterface#connection_tracking_specification}. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConfig.property.description">description</a></code> | <code>str</code> | A description for the network interface. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConfig.property.enablePrimaryIpv6">enable_primary_ipv6</a></code> | <code>bool \| cdktn.IResolvable</code> | If you have instances or ENIs that rely on the IPv6 address not changing, to avoid disrupting traffic to instances or ENIs, you can enable a primary IPv6 address. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConfig.property.groupSet">group_set</a></code> | <code>typing.List[str]</code> | A list of security group IDs associated with this network interface. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConfig.property.interfaceType">interface_type</a></code> | <code>str</code> | Indicates the type of network interface. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConfig.property.ipv4PrefixCount">ipv4_prefix_count</a></code> | <code>typing.Union[int, float]</code> | The number of IPv4 prefixes to assign to a network interface. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConfig.property.ipv4Prefixes">ipv4_prefixes</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4Prefixes">Ec2NetworkInterfaceIpv4Prefixes</a>]</code> | Assigns a list of IPv4 prefixes to the network interface. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConfig.property.ipv6AddressCount">ipv6_address_count</a></code> | <code>typing.Union[int, float]</code> | The number of IPv6 addresses to assign to a network interface. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConfig.property.ipv6Addresses">ipv6_addresses</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6Addresses">Ec2NetworkInterfaceIpv6Addresses</a>]</code> | One or more specific IPv6 addresses from the IPv6 CIDR block range of your subnet to associate with the network interface. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConfig.property.ipv6PrefixCount">ipv6_prefix_count</a></code> | <code>typing.Union[int, float]</code> | The number of IPv6 prefixes to assign to a network interface. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConfig.property.ipv6Prefixes">ipv6_prefixes</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6Prefixes">Ec2NetworkInterfaceIpv6Prefixes</a>]</code> | Assigns a list of IPv6 prefixes to the network interface. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConfig.property.privateIpAddress">private_ip_address</a></code> | <code>str</code> | Assigns a single private IP address to the network interface, which is used as the primary private IP address. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConfig.property.privateIpAddresses">private_ip_addresses</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddresses">Ec2NetworkInterfacePrivateIpAddresses</a>]</code> | Assigns a list of private IP addresses to the network interface. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConfig.property.publicIpDnsHostnameTypeSpecification">public_ip_dns_hostname_type_specification</a></code> | <code>str</code> | Public IP DNS hostname type. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConfig.property.secondaryPrivateIpAddressCount">secondary_private_ip_address_count</a></code> | <code>typing.Union[int, float]</code> | The number of secondary private IPv4 addresses to assign to a network interface. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConfig.property.sourceDestCheck">source_dest_check</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates whether traffic to or from the instance is validated. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTags">Ec2NetworkInterfaceTags</a>]</code> | An arbitrary set of tags (key-value pairs) for this network interface. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConfig.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

The ID of the subnet to associate with the network interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_network_interface#subnet_id Ec2NetworkInterface#subnet_id}

---

##### `connection_tracking_specification`<sup>Optional</sup> <a name="connection_tracking_specification" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConfig.property.connectionTrackingSpecification"></a>

```python
connection_tracking_specification: Ec2NetworkInterfaceConnectionTrackingSpecification
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConnectionTrackingSpecification">Ec2NetworkInterfaceConnectionTrackingSpecification</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_network_interface#connection_tracking_specification Ec2NetworkInterface#connection_tracking_specification}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConfig.property.description"></a>

```python
description: str
```

- *Type:* str

A description for the network interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_network_interface#description Ec2NetworkInterface#description}

---

##### `enable_primary_ipv6`<sup>Optional</sup> <a name="enable_primary_ipv6" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConfig.property.enablePrimaryIpv6"></a>

```python
enable_primary_ipv6: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

If you have instances or ENIs that rely on the IPv6 address not changing, to avoid disrupting traffic to instances or ENIs, you can enable a primary IPv6 address.

Enable this option to automatically assign an IPv6 associated with the ENI attached to your instance to be the primary IPv6 address. When you enable an IPv6 address to be a primary IPv6, you cannot disable it. Traffic will be routed to the primary IPv6 address until the instance is terminated or the ENI is detached. If you have multiple IPv6 addresses associated with an ENI and you enable a primary IPv6 address, the first IPv6 address associated with the ENI becomes the primary IPv6 address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_network_interface#enable_primary_ipv_6 Ec2NetworkInterface#enable_primary_ipv_6}

---

##### `group_set`<sup>Optional</sup> <a name="group_set" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConfig.property.groupSet"></a>

```python
group_set: typing.List[str]
```

- *Type:* typing.List[str]

A list of security group IDs associated with this network interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_network_interface#group_set Ec2NetworkInterface#group_set}

---

##### `interface_type`<sup>Optional</sup> <a name="interface_type" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConfig.property.interfaceType"></a>

```python
interface_type: str
```

- *Type:* str

Indicates the type of network interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_network_interface#interface_type Ec2NetworkInterface#interface_type}

---

##### `ipv4_prefix_count`<sup>Optional</sup> <a name="ipv4_prefix_count" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConfig.property.ipv4PrefixCount"></a>

```python
ipv4_prefix_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of IPv4 prefixes to assign to a network interface.

When you specify a number of IPv4 prefixes, Amazon EC2 selects these prefixes from your existing subnet CIDR reservations, if available, or from free spaces in the subnet. By default, these will be /28 prefixes. You can't specify a count of IPv4 prefixes if you've specified one of the following: specific IPv4 prefixes, specific private IPv4 addresses, or a count of private IPv4 addresses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_network_interface#ipv_4_prefix_count Ec2NetworkInterface#ipv_4_prefix_count}

---

##### `ipv4_prefixes`<sup>Optional</sup> <a name="ipv4_prefixes" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConfig.property.ipv4Prefixes"></a>

```python
ipv4_prefixes: IResolvable | typing.List[Ec2NetworkInterfaceIpv4Prefixes]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4Prefixes">Ec2NetworkInterfaceIpv4Prefixes</a>]

Assigns a list of IPv4 prefixes to the network interface.

If you want EC2 to automatically assign IPv4 prefixes, use the Ipv4PrefixCount property and do not specify this property. Presently, only /28 prefixes are supported. You can't specify IPv4 prefixes if you've specified one of the following: a count of IPv4 prefixes, specific private IPv4 addresses, or a count of private IPv4 addresses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_network_interface#ipv_4_prefixes Ec2NetworkInterface#ipv_4_prefixes}

---

##### `ipv6_address_count`<sup>Optional</sup> <a name="ipv6_address_count" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConfig.property.ipv6AddressCount"></a>

```python
ipv6_address_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of IPv6 addresses to assign to a network interface.

Amazon EC2 automatically selects the IPv6 addresses from the subnet range. To specify specific IPv6 addresses, use the Ipv6Addresses property and don't specify this property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_network_interface#ipv_6_address_count Ec2NetworkInterface#ipv_6_address_count}

---

##### `ipv6_addresses`<sup>Optional</sup> <a name="ipv6_addresses" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConfig.property.ipv6Addresses"></a>

```python
ipv6_addresses: IResolvable | typing.List[Ec2NetworkInterfaceIpv6Addresses]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6Addresses">Ec2NetworkInterfaceIpv6Addresses</a>]

One or more specific IPv6 addresses from the IPv6 CIDR block range of your subnet to associate with the network interface.

If you're specifying a number of IPv6 addresses, use the Ipv6AddressCount property and don't specify this property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_network_interface#ipv_6_addresses Ec2NetworkInterface#ipv_6_addresses}

---

##### `ipv6_prefix_count`<sup>Optional</sup> <a name="ipv6_prefix_count" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConfig.property.ipv6PrefixCount"></a>

```python
ipv6_prefix_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of IPv6 prefixes to assign to a network interface.

When you specify a number of IPv6 prefixes, Amazon EC2 selects these prefixes from your existing subnet CIDR reservations, if available, or from free spaces in the subnet. By default, these will be /80 prefixes. You can't specify a count of IPv6 prefixes if you've specified one of the following: specific IPv6 prefixes, specific IPv6 addresses, or a count of IPv6 addresses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_network_interface#ipv_6_prefix_count Ec2NetworkInterface#ipv_6_prefix_count}

---

##### `ipv6_prefixes`<sup>Optional</sup> <a name="ipv6_prefixes" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConfig.property.ipv6Prefixes"></a>

```python
ipv6_prefixes: IResolvable | typing.List[Ec2NetworkInterfaceIpv6Prefixes]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6Prefixes">Ec2NetworkInterfaceIpv6Prefixes</a>]

Assigns a list of IPv6 prefixes to the network interface.

If you want EC2 to automatically assign IPv6 prefixes, use the Ipv6PrefixCount property and do not specify this property. Presently, only /80 prefixes are supported. You can't specify IPv6 prefixes if you've specified one of the following: a count of IPv6 prefixes, specific IPv6 addresses, or a count of IPv6 addresses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_network_interface#ipv_6_prefixes Ec2NetworkInterface#ipv_6_prefixes}

---

##### `private_ip_address`<sup>Optional</sup> <a name="private_ip_address" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConfig.property.privateIpAddress"></a>

```python
private_ip_address: str
```

- *Type:* str

Assigns a single private IP address to the network interface, which is used as the primary private IP address.

If you want to specify multiple private IP address, use the PrivateIpAddresses property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_network_interface#private_ip_address Ec2NetworkInterface#private_ip_address}

---

##### `private_ip_addresses`<sup>Optional</sup> <a name="private_ip_addresses" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConfig.property.privateIpAddresses"></a>

```python
private_ip_addresses: IResolvable | typing.List[Ec2NetworkInterfacePrivateIpAddresses]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddresses">Ec2NetworkInterfacePrivateIpAddresses</a>]

Assigns a list of private IP addresses to the network interface.

You can specify a primary private IP address by setting the value of the Primary property to true in the PrivateIpAddressSpecification property. If you want EC2 to automatically assign private IP addresses, use the SecondaryPrivateIpAddressCount property and do not specify this property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_network_interface#private_ip_addresses Ec2NetworkInterface#private_ip_addresses}

---

##### `public_ip_dns_hostname_type_specification`<sup>Optional</sup> <a name="public_ip_dns_hostname_type_specification" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConfig.property.publicIpDnsHostnameTypeSpecification"></a>

```python
public_ip_dns_hostname_type_specification: str
```

- *Type:* str

Public IP DNS hostname type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_network_interface#public_ip_dns_hostname_type_specification Ec2NetworkInterface#public_ip_dns_hostname_type_specification}

---

##### `secondary_private_ip_address_count`<sup>Optional</sup> <a name="secondary_private_ip_address_count" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConfig.property.secondaryPrivateIpAddressCount"></a>

```python
secondary_private_ip_address_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of secondary private IPv4 addresses to assign to a network interface.

When you specify a number of secondary IPv4 addresses, Amazon EC2 selects these IP addresses within the subnet's IPv4 CIDR range. You can't specify this option and specify more than one private IP address using privateIpAddresses

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_network_interface#secondary_private_ip_address_count Ec2NetworkInterface#secondary_private_ip_address_count}

---

##### `source_dest_check`<sup>Optional</sup> <a name="source_dest_check" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConfig.property.sourceDestCheck"></a>

```python
source_dest_check: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Indicates whether traffic to or from the instance is validated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_network_interface#source_dest_check Ec2NetworkInterface#source_dest_check}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[Ec2NetworkInterfaceTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTags">Ec2NetworkInterfaceTags</a>]

An arbitrary set of tags (key-value pairs) for this network interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_network_interface#tags Ec2NetworkInterface#tags}

---

### Ec2NetworkInterfaceConnectionTrackingSpecification <a name="Ec2NetworkInterfaceConnectionTrackingSpecification" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConnectionTrackingSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConnectionTrackingSpecification.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_network_interface

ec2NetworkInterface.Ec2NetworkInterfaceConnectionTrackingSpecification(
  tcp_established_timeout: typing.Union[int, float] = None,
  udp_stream_timeout: typing.Union[int, float] = None,
  udp_timeout: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConnectionTrackingSpecification.property.tcpEstablishedTimeout">tcp_established_timeout</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_network_interface#tcp_established_timeout Ec2NetworkInterface#tcp_established_timeout}. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConnectionTrackingSpecification.property.udpStreamTimeout">udp_stream_timeout</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_network_interface#udp_stream_timeout Ec2NetworkInterface#udp_stream_timeout}. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConnectionTrackingSpecification.property.udpTimeout">udp_timeout</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_network_interface#udp_timeout Ec2NetworkInterface#udp_timeout}. |

---

##### `tcp_established_timeout`<sup>Optional</sup> <a name="tcp_established_timeout" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConnectionTrackingSpecification.property.tcpEstablishedTimeout"></a>

```python
tcp_established_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_network_interface#tcp_established_timeout Ec2NetworkInterface#tcp_established_timeout}.

---

##### `udp_stream_timeout`<sup>Optional</sup> <a name="udp_stream_timeout" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConnectionTrackingSpecification.property.udpStreamTimeout"></a>

```python
udp_stream_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_network_interface#udp_stream_timeout Ec2NetworkInterface#udp_stream_timeout}.

---

##### `udp_timeout`<sup>Optional</sup> <a name="udp_timeout" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConnectionTrackingSpecification.property.udpTimeout"></a>

```python
udp_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_network_interface#udp_timeout Ec2NetworkInterface#udp_timeout}.

---

### Ec2NetworkInterfaceIpv4Prefixes <a name="Ec2NetworkInterfaceIpv4Prefixes" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4Prefixes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4Prefixes.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_network_interface

ec2NetworkInterface.Ec2NetworkInterfaceIpv4Prefixes(
  ipv4_prefix: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4Prefixes.property.ipv4Prefix">ipv4_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_network_interface#ipv_4_prefix Ec2NetworkInterface#ipv_4_prefix}. |

---

##### `ipv4_prefix`<sup>Optional</sup> <a name="ipv4_prefix" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4Prefixes.property.ipv4Prefix"></a>

```python
ipv4_prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_network_interface#ipv_4_prefix Ec2NetworkInterface#ipv_4_prefix}.

---

### Ec2NetworkInterfaceIpv6Addresses <a name="Ec2NetworkInterfaceIpv6Addresses" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6Addresses"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6Addresses.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_network_interface

ec2NetworkInterface.Ec2NetworkInterfaceIpv6Addresses(
  ipv6_address: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6Addresses.property.ipv6Address">ipv6_address</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_network_interface#ipv_6_address Ec2NetworkInterface#ipv_6_address}. |

---

##### `ipv6_address`<sup>Optional</sup> <a name="ipv6_address" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6Addresses.property.ipv6Address"></a>

```python
ipv6_address: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_network_interface#ipv_6_address Ec2NetworkInterface#ipv_6_address}.

---

### Ec2NetworkInterfaceIpv6Prefixes <a name="Ec2NetworkInterfaceIpv6Prefixes" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6Prefixes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6Prefixes.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_network_interface

ec2NetworkInterface.Ec2NetworkInterfaceIpv6Prefixes(
  ipv6_prefix: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6Prefixes.property.ipv6Prefix">ipv6_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_network_interface#ipv_6_prefix Ec2NetworkInterface#ipv_6_prefix}. |

---

##### `ipv6_prefix`<sup>Optional</sup> <a name="ipv6_prefix" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6Prefixes.property.ipv6Prefix"></a>

```python
ipv6_prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_network_interface#ipv_6_prefix Ec2NetworkInterface#ipv_6_prefix}.

---

### Ec2NetworkInterfacePrivateIpAddresses <a name="Ec2NetworkInterfacePrivateIpAddresses" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddresses"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddresses.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_network_interface

ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddresses(
  primary: bool | IResolvable = None,
  private_ip_address: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddresses.property.primary">primary</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_network_interface#primary Ec2NetworkInterface#primary}. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddresses.property.privateIpAddress">private_ip_address</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_network_interface#private_ip_address Ec2NetworkInterface#private_ip_address}. |

---

##### `primary`<sup>Optional</sup> <a name="primary" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddresses.property.primary"></a>

```python
primary: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_network_interface#primary Ec2NetworkInterface#primary}.

---

##### `private_ip_address`<sup>Optional</sup> <a name="private_ip_address" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddresses.property.privateIpAddress"></a>

```python
private_ip_address: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_network_interface#private_ip_address Ec2NetworkInterface#private_ip_address}.

---

### Ec2NetworkInterfacePublicIpDnsNameOptions <a name="Ec2NetworkInterfacePublicIpDnsNameOptions" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePublicIpDnsNameOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePublicIpDnsNameOptions.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_network_interface

ec2NetworkInterface.Ec2NetworkInterfacePublicIpDnsNameOptions()
```


### Ec2NetworkInterfaceTags <a name="Ec2NetworkInterfaceTags" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTags.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_network_interface

ec2NetworkInterface.Ec2NetworkInterfaceTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_network_interface#key Ec2NetworkInterface#key}. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_network_interface#value Ec2NetworkInterface#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_network_interface#key Ec2NetworkInterface#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_network_interface#value Ec2NetworkInterface#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2NetworkInterfaceConnectionTrackingSpecificationOutputReference <a name="Ec2NetworkInterfaceConnectionTrackingSpecificationOutputReference" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConnectionTrackingSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConnectionTrackingSpecificationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_network_interface

ec2NetworkInterface.Ec2NetworkInterfaceConnectionTrackingSpecificationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConnectionTrackingSpecificationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConnectionTrackingSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConnectionTrackingSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConnectionTrackingSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConnectionTrackingSpecificationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConnectionTrackingSpecificationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConnectionTrackingSpecificationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConnectionTrackingSpecificationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConnectionTrackingSpecificationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConnectionTrackingSpecificationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConnectionTrackingSpecificationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConnectionTrackingSpecificationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConnectionTrackingSpecificationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConnectionTrackingSpecificationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConnectionTrackingSpecificationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConnectionTrackingSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConnectionTrackingSpecificationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConnectionTrackingSpecificationOutputReference.resetTcpEstablishedTimeout">reset_tcp_established_timeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConnectionTrackingSpecificationOutputReference.resetUdpStreamTimeout">reset_udp_stream_timeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConnectionTrackingSpecificationOutputReference.resetUdpTimeout">reset_udp_timeout</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConnectionTrackingSpecificationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConnectionTrackingSpecificationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConnectionTrackingSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConnectionTrackingSpecificationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConnectionTrackingSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConnectionTrackingSpecificationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConnectionTrackingSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConnectionTrackingSpecificationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConnectionTrackingSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConnectionTrackingSpecificationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConnectionTrackingSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConnectionTrackingSpecificationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConnectionTrackingSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConnectionTrackingSpecificationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConnectionTrackingSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConnectionTrackingSpecificationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConnectionTrackingSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConnectionTrackingSpecificationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConnectionTrackingSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConnectionTrackingSpecificationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConnectionTrackingSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConnectionTrackingSpecificationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConnectionTrackingSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConnectionTrackingSpecificationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_tcp_established_timeout` <a name="reset_tcp_established_timeout" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConnectionTrackingSpecificationOutputReference.resetTcpEstablishedTimeout"></a>

```python
def reset_tcp_established_timeout() -> None
```

##### `reset_udp_stream_timeout` <a name="reset_udp_stream_timeout" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConnectionTrackingSpecificationOutputReference.resetUdpStreamTimeout"></a>

```python
def reset_udp_stream_timeout() -> None
```

##### `reset_udp_timeout` <a name="reset_udp_timeout" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConnectionTrackingSpecificationOutputReference.resetUdpTimeout"></a>

```python
def reset_udp_timeout() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConnectionTrackingSpecificationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConnectionTrackingSpecificationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConnectionTrackingSpecificationOutputReference.property.tcpEstablishedTimeoutInput">tcp_established_timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConnectionTrackingSpecificationOutputReference.property.udpStreamTimeoutInput">udp_stream_timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConnectionTrackingSpecificationOutputReference.property.udpTimeoutInput">udp_timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConnectionTrackingSpecificationOutputReference.property.tcpEstablishedTimeout">tcp_established_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConnectionTrackingSpecificationOutputReference.property.udpStreamTimeout">udp_stream_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConnectionTrackingSpecificationOutputReference.property.udpTimeout">udp_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConnectionTrackingSpecificationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConnectionTrackingSpecification">Ec2NetworkInterfaceConnectionTrackingSpecification</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConnectionTrackingSpecificationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConnectionTrackingSpecificationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `tcp_established_timeout_input`<sup>Optional</sup> <a name="tcp_established_timeout_input" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConnectionTrackingSpecificationOutputReference.property.tcpEstablishedTimeoutInput"></a>

```python
tcp_established_timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `udp_stream_timeout_input`<sup>Optional</sup> <a name="udp_stream_timeout_input" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConnectionTrackingSpecificationOutputReference.property.udpStreamTimeoutInput"></a>

```python
udp_stream_timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `udp_timeout_input`<sup>Optional</sup> <a name="udp_timeout_input" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConnectionTrackingSpecificationOutputReference.property.udpTimeoutInput"></a>

```python
udp_timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tcp_established_timeout`<sup>Required</sup> <a name="tcp_established_timeout" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConnectionTrackingSpecificationOutputReference.property.tcpEstablishedTimeout"></a>

```python
tcp_established_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `udp_stream_timeout`<sup>Required</sup> <a name="udp_stream_timeout" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConnectionTrackingSpecificationOutputReference.property.udpStreamTimeout"></a>

```python
udp_stream_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `udp_timeout`<sup>Required</sup> <a name="udp_timeout" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConnectionTrackingSpecificationOutputReference.property.udpTimeout"></a>

```python
udp_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConnectionTrackingSpecificationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Ec2NetworkInterfaceConnectionTrackingSpecification
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConnectionTrackingSpecification">Ec2NetworkInterfaceConnectionTrackingSpecification</a>

---


### Ec2NetworkInterfaceIpv4PrefixesList <a name="Ec2NetworkInterfaceIpv4PrefixesList" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4PrefixesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4PrefixesList.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_network_interface

ec2NetworkInterface.Ec2NetworkInterfaceIpv4PrefixesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4PrefixesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4PrefixesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4PrefixesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4PrefixesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4PrefixesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4PrefixesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4PrefixesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4PrefixesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4PrefixesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4PrefixesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4PrefixesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4PrefixesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4PrefixesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4PrefixesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4PrefixesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4PrefixesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4PrefixesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4PrefixesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Ec2NetworkInterfaceIpv4PrefixesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4PrefixesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4PrefixesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4PrefixesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4PrefixesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4Prefixes">Ec2NetworkInterfaceIpv4Prefixes</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4PrefixesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4PrefixesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4PrefixesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[Ec2NetworkInterfaceIpv4Prefixes]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4Prefixes">Ec2NetworkInterfaceIpv4Prefixes</a>]

---


### Ec2NetworkInterfaceIpv4PrefixesOutputReference <a name="Ec2NetworkInterfaceIpv4PrefixesOutputReference" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4PrefixesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4PrefixesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_network_interface

ec2NetworkInterface.Ec2NetworkInterfaceIpv4PrefixesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4PrefixesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4PrefixesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4PrefixesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4PrefixesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4PrefixesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4PrefixesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4PrefixesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4PrefixesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4PrefixesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4PrefixesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4PrefixesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4PrefixesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4PrefixesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4PrefixesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4PrefixesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4PrefixesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4PrefixesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4PrefixesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4PrefixesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4PrefixesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4PrefixesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4PrefixesOutputReference.resetIpv4Prefix">reset_ipv4_prefix</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4PrefixesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4PrefixesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4PrefixesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4PrefixesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4PrefixesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4PrefixesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4PrefixesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4PrefixesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4PrefixesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4PrefixesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4PrefixesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4PrefixesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4PrefixesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4PrefixesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4PrefixesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4PrefixesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4PrefixesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4PrefixesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4PrefixesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4PrefixesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4PrefixesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4PrefixesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4PrefixesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4PrefixesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_ipv4_prefix` <a name="reset_ipv4_prefix" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4PrefixesOutputReference.resetIpv4Prefix"></a>

```python
def reset_ipv4_prefix() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4PrefixesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4PrefixesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4PrefixesOutputReference.property.ipv4PrefixInput">ipv4_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4PrefixesOutputReference.property.ipv4Prefix">ipv4_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4PrefixesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4Prefixes">Ec2NetworkInterfaceIpv4Prefixes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4PrefixesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4PrefixesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ipv4_prefix_input`<sup>Optional</sup> <a name="ipv4_prefix_input" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4PrefixesOutputReference.property.ipv4PrefixInput"></a>

```python
ipv4_prefix_input: str
```

- *Type:* str

---

##### `ipv4_prefix`<sup>Required</sup> <a name="ipv4_prefix" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4PrefixesOutputReference.property.ipv4Prefix"></a>

```python
ipv4_prefix: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4PrefixesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Ec2NetworkInterfaceIpv4Prefixes
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4Prefixes">Ec2NetworkInterfaceIpv4Prefixes</a>

---


### Ec2NetworkInterfaceIpv6AddressesList <a name="Ec2NetworkInterfaceIpv6AddressesList" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6AddressesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6AddressesList.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_network_interface

ec2NetworkInterface.Ec2NetworkInterfaceIpv6AddressesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6AddressesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6AddressesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6AddressesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6AddressesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6AddressesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6AddressesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6AddressesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6AddressesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6AddressesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6AddressesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6AddressesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6AddressesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6AddressesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6AddressesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6AddressesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6AddressesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6AddressesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6AddressesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Ec2NetworkInterfaceIpv6AddressesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6AddressesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6AddressesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6AddressesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6AddressesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6Addresses">Ec2NetworkInterfaceIpv6Addresses</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6AddressesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6AddressesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6AddressesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[Ec2NetworkInterfaceIpv6Addresses]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6Addresses">Ec2NetworkInterfaceIpv6Addresses</a>]

---


### Ec2NetworkInterfaceIpv6AddressesOutputReference <a name="Ec2NetworkInterfaceIpv6AddressesOutputReference" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6AddressesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6AddressesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_network_interface

ec2NetworkInterface.Ec2NetworkInterfaceIpv6AddressesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6AddressesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6AddressesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6AddressesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6AddressesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6AddressesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6AddressesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6AddressesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6AddressesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6AddressesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6AddressesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6AddressesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6AddressesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6AddressesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6AddressesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6AddressesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6AddressesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6AddressesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6AddressesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6AddressesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6AddressesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6AddressesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6AddressesOutputReference.resetIpv6Address">reset_ipv6_address</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6AddressesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6AddressesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6AddressesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6AddressesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6AddressesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6AddressesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6AddressesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6AddressesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6AddressesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6AddressesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6AddressesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6AddressesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6AddressesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6AddressesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6AddressesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6AddressesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6AddressesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6AddressesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6AddressesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6AddressesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6AddressesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6AddressesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6AddressesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6AddressesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_ipv6_address` <a name="reset_ipv6_address" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6AddressesOutputReference.resetIpv6Address"></a>

```python
def reset_ipv6_address() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6AddressesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6AddressesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6AddressesOutputReference.property.ipv6AddressInput">ipv6_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6AddressesOutputReference.property.ipv6Address">ipv6_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6AddressesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6Addresses">Ec2NetworkInterfaceIpv6Addresses</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6AddressesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6AddressesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ipv6_address_input`<sup>Optional</sup> <a name="ipv6_address_input" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6AddressesOutputReference.property.ipv6AddressInput"></a>

```python
ipv6_address_input: str
```

- *Type:* str

---

##### `ipv6_address`<sup>Required</sup> <a name="ipv6_address" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6AddressesOutputReference.property.ipv6Address"></a>

```python
ipv6_address: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6AddressesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Ec2NetworkInterfaceIpv6Addresses
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6Addresses">Ec2NetworkInterfaceIpv6Addresses</a>

---


### Ec2NetworkInterfaceIpv6PrefixesList <a name="Ec2NetworkInterfaceIpv6PrefixesList" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6PrefixesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6PrefixesList.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_network_interface

ec2NetworkInterface.Ec2NetworkInterfaceIpv6PrefixesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6PrefixesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6PrefixesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6PrefixesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6PrefixesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6PrefixesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6PrefixesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6PrefixesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6PrefixesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6PrefixesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6PrefixesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6PrefixesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6PrefixesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6PrefixesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6PrefixesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6PrefixesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6PrefixesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6PrefixesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6PrefixesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Ec2NetworkInterfaceIpv6PrefixesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6PrefixesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6PrefixesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6PrefixesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6PrefixesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6Prefixes">Ec2NetworkInterfaceIpv6Prefixes</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6PrefixesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6PrefixesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6PrefixesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[Ec2NetworkInterfaceIpv6Prefixes]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6Prefixes">Ec2NetworkInterfaceIpv6Prefixes</a>]

---


### Ec2NetworkInterfaceIpv6PrefixesOutputReference <a name="Ec2NetworkInterfaceIpv6PrefixesOutputReference" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6PrefixesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6PrefixesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_network_interface

ec2NetworkInterface.Ec2NetworkInterfaceIpv6PrefixesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6PrefixesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6PrefixesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6PrefixesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6PrefixesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6PrefixesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6PrefixesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6PrefixesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6PrefixesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6PrefixesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6PrefixesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6PrefixesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6PrefixesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6PrefixesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6PrefixesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6PrefixesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6PrefixesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6PrefixesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6PrefixesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6PrefixesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6PrefixesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6PrefixesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6PrefixesOutputReference.resetIpv6Prefix">reset_ipv6_prefix</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6PrefixesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6PrefixesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6PrefixesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6PrefixesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6PrefixesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6PrefixesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6PrefixesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6PrefixesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6PrefixesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6PrefixesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6PrefixesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6PrefixesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6PrefixesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6PrefixesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6PrefixesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6PrefixesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6PrefixesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6PrefixesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6PrefixesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6PrefixesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6PrefixesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6PrefixesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6PrefixesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6PrefixesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_ipv6_prefix` <a name="reset_ipv6_prefix" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6PrefixesOutputReference.resetIpv6Prefix"></a>

```python
def reset_ipv6_prefix() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6PrefixesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6PrefixesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6PrefixesOutputReference.property.ipv6PrefixInput">ipv6_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6PrefixesOutputReference.property.ipv6Prefix">ipv6_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6PrefixesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6Prefixes">Ec2NetworkInterfaceIpv6Prefixes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6PrefixesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6PrefixesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ipv6_prefix_input`<sup>Optional</sup> <a name="ipv6_prefix_input" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6PrefixesOutputReference.property.ipv6PrefixInput"></a>

```python
ipv6_prefix_input: str
```

- *Type:* str

---

##### `ipv6_prefix`<sup>Required</sup> <a name="ipv6_prefix" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6PrefixesOutputReference.property.ipv6Prefix"></a>

```python
ipv6_prefix: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6PrefixesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Ec2NetworkInterfaceIpv6Prefixes
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6Prefixes">Ec2NetworkInterfaceIpv6Prefixes</a>

---


### Ec2NetworkInterfacePrivateIpAddressesList <a name="Ec2NetworkInterfacePrivateIpAddressesList" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddressesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddressesList.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_network_interface

ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddressesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddressesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddressesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddressesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddressesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddressesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddressesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddressesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddressesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddressesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddressesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddressesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddressesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddressesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddressesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddressesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddressesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddressesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddressesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Ec2NetworkInterfacePrivateIpAddressesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddressesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddressesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddressesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddressesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddresses">Ec2NetworkInterfacePrivateIpAddresses</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddressesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddressesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddressesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[Ec2NetworkInterfacePrivateIpAddresses]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddresses">Ec2NetworkInterfacePrivateIpAddresses</a>]

---


### Ec2NetworkInterfacePrivateIpAddressesOutputReference <a name="Ec2NetworkInterfacePrivateIpAddressesOutputReference" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddressesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddressesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_network_interface

ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddressesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddressesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddressesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddressesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddressesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddressesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddressesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddressesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddressesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddressesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddressesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddressesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddressesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddressesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddressesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddressesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddressesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddressesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddressesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddressesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddressesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddressesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddressesOutputReference.resetPrimary">reset_primary</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddressesOutputReference.resetPrivateIpAddress">reset_private_ip_address</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddressesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddressesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddressesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddressesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddressesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddressesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddressesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddressesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddressesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddressesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddressesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddressesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddressesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddressesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddressesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddressesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddressesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddressesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddressesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddressesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddressesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddressesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddressesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddressesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_primary` <a name="reset_primary" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddressesOutputReference.resetPrimary"></a>

```python
def reset_primary() -> None
```

##### `reset_private_ip_address` <a name="reset_private_ip_address" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddressesOutputReference.resetPrivateIpAddress"></a>

```python
def reset_private_ip_address() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddressesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddressesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddressesOutputReference.property.primaryInput">primary_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddressesOutputReference.property.privateIpAddressInput">private_ip_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddressesOutputReference.property.primary">primary</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddressesOutputReference.property.privateIpAddress">private_ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddressesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddresses">Ec2NetworkInterfacePrivateIpAddresses</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddressesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddressesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `primary_input`<sup>Optional</sup> <a name="primary_input" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddressesOutputReference.property.primaryInput"></a>

```python
primary_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `private_ip_address_input`<sup>Optional</sup> <a name="private_ip_address_input" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddressesOutputReference.property.privateIpAddressInput"></a>

```python
private_ip_address_input: str
```

- *Type:* str

---

##### `primary`<sup>Required</sup> <a name="primary" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddressesOutputReference.property.primary"></a>

```python
primary: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `private_ip_address`<sup>Required</sup> <a name="private_ip_address" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddressesOutputReference.property.privateIpAddress"></a>

```python
private_ip_address: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddressesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Ec2NetworkInterfacePrivateIpAddresses
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddresses">Ec2NetworkInterfacePrivateIpAddresses</a>

---


### Ec2NetworkInterfacePublicIpDnsNameOptionsOutputReference <a name="Ec2NetworkInterfacePublicIpDnsNameOptionsOutputReference" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePublicIpDnsNameOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePublicIpDnsNameOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_network_interface

ec2NetworkInterface.Ec2NetworkInterfacePublicIpDnsNameOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePublicIpDnsNameOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePublicIpDnsNameOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePublicIpDnsNameOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePublicIpDnsNameOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePublicIpDnsNameOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePublicIpDnsNameOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePublicIpDnsNameOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePublicIpDnsNameOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePublicIpDnsNameOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePublicIpDnsNameOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePublicIpDnsNameOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePublicIpDnsNameOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePublicIpDnsNameOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePublicIpDnsNameOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePublicIpDnsNameOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePublicIpDnsNameOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePublicIpDnsNameOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePublicIpDnsNameOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePublicIpDnsNameOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePublicIpDnsNameOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePublicIpDnsNameOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePublicIpDnsNameOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePublicIpDnsNameOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePublicIpDnsNameOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePublicIpDnsNameOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePublicIpDnsNameOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePublicIpDnsNameOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePublicIpDnsNameOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePublicIpDnsNameOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePublicIpDnsNameOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePublicIpDnsNameOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePublicIpDnsNameOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePublicIpDnsNameOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePublicIpDnsNameOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePublicIpDnsNameOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePublicIpDnsNameOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePublicIpDnsNameOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePublicIpDnsNameOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePublicIpDnsNameOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePublicIpDnsNameOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePublicIpDnsNameOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePublicIpDnsNameOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePublicIpDnsNameOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePublicIpDnsNameOptionsOutputReference.property.dnsHostnameType">dns_hostname_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePublicIpDnsNameOptionsOutputReference.property.publicDualStackDnsName">public_dual_stack_dns_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePublicIpDnsNameOptionsOutputReference.property.publicIpv4DnsName">public_ipv4_dns_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePublicIpDnsNameOptionsOutputReference.property.publicIpv6DnsName">public_ipv6_dns_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePublicIpDnsNameOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePublicIpDnsNameOptions">Ec2NetworkInterfacePublicIpDnsNameOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePublicIpDnsNameOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePublicIpDnsNameOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dns_hostname_type`<sup>Required</sup> <a name="dns_hostname_type" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePublicIpDnsNameOptionsOutputReference.property.dnsHostnameType"></a>

```python
dns_hostname_type: str
```

- *Type:* str

---

##### `public_dual_stack_dns_name`<sup>Required</sup> <a name="public_dual_stack_dns_name" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePublicIpDnsNameOptionsOutputReference.property.publicDualStackDnsName"></a>

```python
public_dual_stack_dns_name: str
```

- *Type:* str

---

##### `public_ipv4_dns_name`<sup>Required</sup> <a name="public_ipv4_dns_name" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePublicIpDnsNameOptionsOutputReference.property.publicIpv4DnsName"></a>

```python
public_ipv4_dns_name: str
```

- *Type:* str

---

##### `public_ipv6_dns_name`<sup>Required</sup> <a name="public_ipv6_dns_name" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePublicIpDnsNameOptionsOutputReference.property.publicIpv6DnsName"></a>

```python
public_ipv6_dns_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePublicIpDnsNameOptionsOutputReference.property.internalValue"></a>

```python
internal_value: Ec2NetworkInterfacePublicIpDnsNameOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePublicIpDnsNameOptions">Ec2NetworkInterfacePublicIpDnsNameOptions</a>

---


### Ec2NetworkInterfaceTagsList <a name="Ec2NetworkInterfaceTagsList" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_network_interface

ec2NetworkInterface.Ec2NetworkInterfaceTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Ec2NetworkInterfaceTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTags">Ec2NetworkInterfaceTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[Ec2NetworkInterfaceTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTags">Ec2NetworkInterfaceTags</a>]

---


### Ec2NetworkInterfaceTagsOutputReference <a name="Ec2NetworkInterfaceTagsOutputReference" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_network_interface

ec2NetworkInterface.Ec2NetworkInterfaceTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTags">Ec2NetworkInterfaceTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Ec2NetworkInterfaceTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTags">Ec2NetworkInterfaceTags</a>

---



