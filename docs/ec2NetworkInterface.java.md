# `ec2NetworkInterface` Submodule <a name="`ec2NetworkInterface` Submodule" id="@cdktn/provider-awscc.ec2NetworkInterface"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2NetworkInterface <a name="Ec2NetworkInterface" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_network_interface awscc_ec2_network_interface}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_network_interface.Ec2NetworkInterface;

Ec2NetworkInterface.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .subnetId(java.lang.String)
//  .connectionTrackingSpecification(Ec2NetworkInterfaceConnectionTrackingSpecification)
//  .description(java.lang.String)
//  .enablePrimaryIpv6(java.lang.Boolean|IResolvable)
//  .groupSet(java.util.List<java.lang.String>)
//  .interfaceType(java.lang.String)
//  .ipv4PrefixCount(java.lang.Number)
//  .ipv4Prefixes(IResolvable|java.util.List<Ec2NetworkInterfaceIpv4Prefixes>)
//  .ipv6AddressCount(java.lang.Number)
//  .ipv6Addresses(IResolvable|java.util.List<Ec2NetworkInterfaceIpv6Addresses>)
//  .ipv6PrefixCount(java.lang.Number)
//  .ipv6Prefixes(IResolvable|java.util.List<Ec2NetworkInterfaceIpv6Prefixes>)
//  .privateIpAddress(java.lang.String)
//  .privateIpAddresses(IResolvable|java.util.List<Ec2NetworkInterfacePrivateIpAddresses>)
//  .publicIpDnsHostnameTypeSpecification(java.lang.String)
//  .secondaryPrivateIpAddressCount(java.lang.Number)
//  .sourceDestCheck(java.lang.Boolean|IResolvable)
//  .tags(IResolvable|java.util.List<Ec2NetworkInterfaceTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.Initializer.parameter.subnetId">subnetId</a></code> | <code>java.lang.String</code> | The ID of the subnet to associate with the network interface. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.Initializer.parameter.connectionTrackingSpecification">connectionTrackingSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConnectionTrackingSpecification">Ec2NetworkInterfaceConnectionTrackingSpecification</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_network_interface#connection_tracking_specification Ec2NetworkInterface#connection_tracking_specification}. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | A description for the network interface. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.Initializer.parameter.enablePrimaryIpv6">enablePrimaryIpv6</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If you have instances or ENIs that rely on the IPv6 address not changing, to avoid disrupting traffic to instances or ENIs, you can enable a primary IPv6 address. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.Initializer.parameter.groupSet">groupSet</a></code> | <code>java.util.List<java.lang.String></code> | A list of security group IDs associated with this network interface. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.Initializer.parameter.interfaceType">interfaceType</a></code> | <code>java.lang.String</code> | Indicates the type of network interface. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.Initializer.parameter.ipv4PrefixCount">ipv4PrefixCount</a></code> | <code>java.lang.Number</code> | The number of IPv4 prefixes to assign to a network interface. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.Initializer.parameter.ipv4Prefixes">ipv4Prefixes</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4Prefixes">Ec2NetworkInterfaceIpv4Prefixes</a>></code> | Assigns a list of IPv4 prefixes to the network interface. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.Initializer.parameter.ipv6AddressCount">ipv6AddressCount</a></code> | <code>java.lang.Number</code> | The number of IPv6 addresses to assign to a network interface. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.Initializer.parameter.ipv6Addresses">ipv6Addresses</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6Addresses">Ec2NetworkInterfaceIpv6Addresses</a>></code> | One or more specific IPv6 addresses from the IPv6 CIDR block range of your subnet to associate with the network interface. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.Initializer.parameter.ipv6PrefixCount">ipv6PrefixCount</a></code> | <code>java.lang.Number</code> | The number of IPv6 prefixes to assign to a network interface. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.Initializer.parameter.ipv6Prefixes">ipv6Prefixes</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6Prefixes">Ec2NetworkInterfaceIpv6Prefixes</a>></code> | Assigns a list of IPv6 prefixes to the network interface. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.Initializer.parameter.privateIpAddress">privateIpAddress</a></code> | <code>java.lang.String</code> | Assigns a single private IP address to the network interface, which is used as the primary private IP address. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.Initializer.parameter.privateIpAddresses">privateIpAddresses</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddresses">Ec2NetworkInterfacePrivateIpAddresses</a>></code> | Assigns a list of private IP addresses to the network interface. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.Initializer.parameter.publicIpDnsHostnameTypeSpecification">publicIpDnsHostnameTypeSpecification</a></code> | <code>java.lang.String</code> | Public IP DNS hostname type. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.Initializer.parameter.secondaryPrivateIpAddressCount">secondaryPrivateIpAddressCount</a></code> | <code>java.lang.Number</code> | The number of secondary private IPv4 addresses to assign to a network interface. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.Initializer.parameter.sourceDestCheck">sourceDestCheck</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Indicates whether traffic to or from the instance is validated. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTags">Ec2NetworkInterfaceTags</a>></code> | An arbitrary set of tags (key-value pairs) for this network interface. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.Initializer.parameter.subnetId"></a>

- *Type:* java.lang.String

The ID of the subnet to associate with the network interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_network_interface#subnet_id Ec2NetworkInterface#subnet_id}

---

##### `connectionTrackingSpecification`<sup>Optional</sup> <a name="connectionTrackingSpecification" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.Initializer.parameter.connectionTrackingSpecification"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConnectionTrackingSpecification">Ec2NetworkInterfaceConnectionTrackingSpecification</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_network_interface#connection_tracking_specification Ec2NetworkInterface#connection_tracking_specification}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.Initializer.parameter.description"></a>

- *Type:* java.lang.String

A description for the network interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_network_interface#description Ec2NetworkInterface#description}

---

##### `enablePrimaryIpv6`<sup>Optional</sup> <a name="enablePrimaryIpv6" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.Initializer.parameter.enablePrimaryIpv6"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If you have instances or ENIs that rely on the IPv6 address not changing, to avoid disrupting traffic to instances or ENIs, you can enable a primary IPv6 address.

Enable this option to automatically assign an IPv6 associated with the ENI attached to your instance to be the primary IPv6 address. When you enable an IPv6 address to be a primary IPv6, you cannot disable it. Traffic will be routed to the primary IPv6 address until the instance is terminated or the ENI is detached. If you have multiple IPv6 addresses associated with an ENI and you enable a primary IPv6 address, the first IPv6 address associated with the ENI becomes the primary IPv6 address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_network_interface#enable_primary_ipv_6 Ec2NetworkInterface#enable_primary_ipv_6}

---

##### `groupSet`<sup>Optional</sup> <a name="groupSet" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.Initializer.parameter.groupSet"></a>

- *Type:* java.util.List<java.lang.String>

A list of security group IDs associated with this network interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_network_interface#group_set Ec2NetworkInterface#group_set}

---

##### `interfaceType`<sup>Optional</sup> <a name="interfaceType" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.Initializer.parameter.interfaceType"></a>

- *Type:* java.lang.String

Indicates the type of network interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_network_interface#interface_type Ec2NetworkInterface#interface_type}

---

##### `ipv4PrefixCount`<sup>Optional</sup> <a name="ipv4PrefixCount" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.Initializer.parameter.ipv4PrefixCount"></a>

- *Type:* java.lang.Number

The number of IPv4 prefixes to assign to a network interface.

When you specify a number of IPv4 prefixes, Amazon EC2 selects these prefixes from your existing subnet CIDR reservations, if available, or from free spaces in the subnet. By default, these will be /28 prefixes. You can't specify a count of IPv4 prefixes if you've specified one of the following: specific IPv4 prefixes, specific private IPv4 addresses, or a count of private IPv4 addresses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_network_interface#ipv_4_prefix_count Ec2NetworkInterface#ipv_4_prefix_count}

---

##### `ipv4Prefixes`<sup>Optional</sup> <a name="ipv4Prefixes" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.Initializer.parameter.ipv4Prefixes"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4Prefixes">Ec2NetworkInterfaceIpv4Prefixes</a>>

Assigns a list of IPv4 prefixes to the network interface.

If you want EC2 to automatically assign IPv4 prefixes, use the Ipv4PrefixCount property and do not specify this property. Presently, only /28 prefixes are supported. You can't specify IPv4 prefixes if you've specified one of the following: a count of IPv4 prefixes, specific private IPv4 addresses, or a count of private IPv4 addresses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_network_interface#ipv_4_prefixes Ec2NetworkInterface#ipv_4_prefixes}

---

##### `ipv6AddressCount`<sup>Optional</sup> <a name="ipv6AddressCount" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.Initializer.parameter.ipv6AddressCount"></a>

- *Type:* java.lang.Number

The number of IPv6 addresses to assign to a network interface.

Amazon EC2 automatically selects the IPv6 addresses from the subnet range. To specify specific IPv6 addresses, use the Ipv6Addresses property and don't specify this property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_network_interface#ipv_6_address_count Ec2NetworkInterface#ipv_6_address_count}

---

##### `ipv6Addresses`<sup>Optional</sup> <a name="ipv6Addresses" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.Initializer.parameter.ipv6Addresses"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6Addresses">Ec2NetworkInterfaceIpv6Addresses</a>>

One or more specific IPv6 addresses from the IPv6 CIDR block range of your subnet to associate with the network interface.

If you're specifying a number of IPv6 addresses, use the Ipv6AddressCount property and don't specify this property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_network_interface#ipv_6_addresses Ec2NetworkInterface#ipv_6_addresses}

---

##### `ipv6PrefixCount`<sup>Optional</sup> <a name="ipv6PrefixCount" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.Initializer.parameter.ipv6PrefixCount"></a>

- *Type:* java.lang.Number

The number of IPv6 prefixes to assign to a network interface.

When you specify a number of IPv6 prefixes, Amazon EC2 selects these prefixes from your existing subnet CIDR reservations, if available, or from free spaces in the subnet. By default, these will be /80 prefixes. You can't specify a count of IPv6 prefixes if you've specified one of the following: specific IPv6 prefixes, specific IPv6 addresses, or a count of IPv6 addresses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_network_interface#ipv_6_prefix_count Ec2NetworkInterface#ipv_6_prefix_count}

---

##### `ipv6Prefixes`<sup>Optional</sup> <a name="ipv6Prefixes" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.Initializer.parameter.ipv6Prefixes"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6Prefixes">Ec2NetworkInterfaceIpv6Prefixes</a>>

Assigns a list of IPv6 prefixes to the network interface.

If you want EC2 to automatically assign IPv6 prefixes, use the Ipv6PrefixCount property and do not specify this property. Presently, only /80 prefixes are supported. You can't specify IPv6 prefixes if you've specified one of the following: a count of IPv6 prefixes, specific IPv6 addresses, or a count of IPv6 addresses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_network_interface#ipv_6_prefixes Ec2NetworkInterface#ipv_6_prefixes}

---

##### `privateIpAddress`<sup>Optional</sup> <a name="privateIpAddress" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.Initializer.parameter.privateIpAddress"></a>

- *Type:* java.lang.String

Assigns a single private IP address to the network interface, which is used as the primary private IP address.

If you want to specify multiple private IP address, use the PrivateIpAddresses property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_network_interface#private_ip_address Ec2NetworkInterface#private_ip_address}

---

##### `privateIpAddresses`<sup>Optional</sup> <a name="privateIpAddresses" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.Initializer.parameter.privateIpAddresses"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddresses">Ec2NetworkInterfacePrivateIpAddresses</a>>

Assigns a list of private IP addresses to the network interface.

You can specify a primary private IP address by setting the value of the Primary property to true in the PrivateIpAddressSpecification property. If you want EC2 to automatically assign private IP addresses, use the SecondaryPrivateIpAddressCount property and do not specify this property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_network_interface#private_ip_addresses Ec2NetworkInterface#private_ip_addresses}

---

##### `publicIpDnsHostnameTypeSpecification`<sup>Optional</sup> <a name="publicIpDnsHostnameTypeSpecification" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.Initializer.parameter.publicIpDnsHostnameTypeSpecification"></a>

- *Type:* java.lang.String

Public IP DNS hostname type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_network_interface#public_ip_dns_hostname_type_specification Ec2NetworkInterface#public_ip_dns_hostname_type_specification}

---

##### `secondaryPrivateIpAddressCount`<sup>Optional</sup> <a name="secondaryPrivateIpAddressCount" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.Initializer.parameter.secondaryPrivateIpAddressCount"></a>

- *Type:* java.lang.Number

The number of secondary private IPv4 addresses to assign to a network interface.

When you specify a number of secondary IPv4 addresses, Amazon EC2 selects these IP addresses within the subnet's IPv4 CIDR range. You can't specify this option and specify more than one private IP address using privateIpAddresses

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_network_interface#secondary_private_ip_address_count Ec2NetworkInterface#secondary_private_ip_address_count}

---

##### `sourceDestCheck`<sup>Optional</sup> <a name="sourceDestCheck" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.Initializer.parameter.sourceDestCheck"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Indicates whether traffic to or from the instance is validated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_network_interface#source_dest_check Ec2NetworkInterface#source_dest_check}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTags">Ec2NetworkInterfaceTags</a>>

An arbitrary set of tags (key-value pairs) for this network interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_network_interface#tags Ec2NetworkInterface#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.putConnectionTrackingSpecification">putConnectionTrackingSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.putIpv4Prefixes">putIpv4Prefixes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.putIpv6Addresses">putIpv6Addresses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.putIpv6Prefixes">putIpv6Prefixes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.putPrivateIpAddresses">putPrivateIpAddresses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.resetConnectionTrackingSpecification">resetConnectionTrackingSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.resetEnablePrimaryIpv6">resetEnablePrimaryIpv6</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.resetGroupSet">resetGroupSet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.resetInterfaceType">resetInterfaceType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.resetIpv4PrefixCount">resetIpv4PrefixCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.resetIpv4Prefixes">resetIpv4Prefixes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.resetIpv6AddressCount">resetIpv6AddressCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.resetIpv6Addresses">resetIpv6Addresses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.resetIpv6PrefixCount">resetIpv6PrefixCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.resetIpv6Prefixes">resetIpv6Prefixes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.resetPrivateIpAddress">resetPrivateIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.resetPrivateIpAddresses">resetPrivateIpAddresses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.resetPublicIpDnsHostnameTypeSpecification">resetPublicIpDnsHostnameTypeSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.resetSecondaryPrivateIpAddressCount">resetSecondaryPrivateIpAddressCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.resetSourceDestCheck">resetSourceDestCheck</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putConnectionTrackingSpecification` <a name="putConnectionTrackingSpecification" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.putConnectionTrackingSpecification"></a>

```java
public void putConnectionTrackingSpecification(Ec2NetworkInterfaceConnectionTrackingSpecification value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.putConnectionTrackingSpecification.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConnectionTrackingSpecification">Ec2NetworkInterfaceConnectionTrackingSpecification</a>

---

##### `putIpv4Prefixes` <a name="putIpv4Prefixes" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.putIpv4Prefixes"></a>

```java
public void putIpv4Prefixes(IResolvable|java.util.List<Ec2NetworkInterfaceIpv4Prefixes> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.putIpv4Prefixes.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4Prefixes">Ec2NetworkInterfaceIpv4Prefixes</a>>

---

##### `putIpv6Addresses` <a name="putIpv6Addresses" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.putIpv6Addresses"></a>

```java
public void putIpv6Addresses(IResolvable|java.util.List<Ec2NetworkInterfaceIpv6Addresses> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.putIpv6Addresses.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6Addresses">Ec2NetworkInterfaceIpv6Addresses</a>>

---

##### `putIpv6Prefixes` <a name="putIpv6Prefixes" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.putIpv6Prefixes"></a>

```java
public void putIpv6Prefixes(IResolvable|java.util.List<Ec2NetworkInterfaceIpv6Prefixes> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.putIpv6Prefixes.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6Prefixes">Ec2NetworkInterfaceIpv6Prefixes</a>>

---

##### `putPrivateIpAddresses` <a name="putPrivateIpAddresses" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.putPrivateIpAddresses"></a>

```java
public void putPrivateIpAddresses(IResolvable|java.util.List<Ec2NetworkInterfacePrivateIpAddresses> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.putPrivateIpAddresses.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddresses">Ec2NetworkInterfacePrivateIpAddresses</a>>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<Ec2NetworkInterfaceTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTags">Ec2NetworkInterfaceTags</a>>

---

##### `resetConnectionTrackingSpecification` <a name="resetConnectionTrackingSpecification" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.resetConnectionTrackingSpecification"></a>

```java
public void resetConnectionTrackingSpecification()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetEnablePrimaryIpv6` <a name="resetEnablePrimaryIpv6" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.resetEnablePrimaryIpv6"></a>

```java
public void resetEnablePrimaryIpv6()
```

##### `resetGroupSet` <a name="resetGroupSet" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.resetGroupSet"></a>

```java
public void resetGroupSet()
```

##### `resetInterfaceType` <a name="resetInterfaceType" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.resetInterfaceType"></a>

```java
public void resetInterfaceType()
```

##### `resetIpv4PrefixCount` <a name="resetIpv4PrefixCount" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.resetIpv4PrefixCount"></a>

```java
public void resetIpv4PrefixCount()
```

##### `resetIpv4Prefixes` <a name="resetIpv4Prefixes" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.resetIpv4Prefixes"></a>

```java
public void resetIpv4Prefixes()
```

##### `resetIpv6AddressCount` <a name="resetIpv6AddressCount" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.resetIpv6AddressCount"></a>

```java
public void resetIpv6AddressCount()
```

##### `resetIpv6Addresses` <a name="resetIpv6Addresses" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.resetIpv6Addresses"></a>

```java
public void resetIpv6Addresses()
```

##### `resetIpv6PrefixCount` <a name="resetIpv6PrefixCount" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.resetIpv6PrefixCount"></a>

```java
public void resetIpv6PrefixCount()
```

##### `resetIpv6Prefixes` <a name="resetIpv6Prefixes" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.resetIpv6Prefixes"></a>

```java
public void resetIpv6Prefixes()
```

##### `resetPrivateIpAddress` <a name="resetPrivateIpAddress" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.resetPrivateIpAddress"></a>

```java
public void resetPrivateIpAddress()
```

##### `resetPrivateIpAddresses` <a name="resetPrivateIpAddresses" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.resetPrivateIpAddresses"></a>

```java
public void resetPrivateIpAddresses()
```

##### `resetPublicIpDnsHostnameTypeSpecification` <a name="resetPublicIpDnsHostnameTypeSpecification" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.resetPublicIpDnsHostnameTypeSpecification"></a>

```java
public void resetPublicIpDnsHostnameTypeSpecification()
```

##### `resetSecondaryPrivateIpAddressCount` <a name="resetSecondaryPrivateIpAddressCount" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.resetSecondaryPrivateIpAddressCount"></a>

```java
public void resetSecondaryPrivateIpAddressCount()
```

##### `resetSourceDestCheck` <a name="resetSourceDestCheck" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.resetSourceDestCheck"></a>

```java
public void resetSourceDestCheck()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a Ec2NetworkInterface resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.isConstruct"></a>

```java
import io.cdktn.providers.awscc.ec2_network_interface.Ec2NetworkInterface;

Ec2NetworkInterface.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.ec2_network_interface.Ec2NetworkInterface;

Ec2NetworkInterface.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.ec2_network_interface.Ec2NetworkInterface;

Ec2NetworkInterface.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.ec2_network_interface.Ec2NetworkInterface;

Ec2NetworkInterface.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),Ec2NetworkInterface.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a Ec2NetworkInterface resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the Ec2NetworkInterface to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing Ec2NetworkInterface that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_network_interface#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the Ec2NetworkInterface to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.connectionTrackingSpecification">connectionTrackingSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConnectionTrackingSpecificationOutputReference">Ec2NetworkInterfaceConnectionTrackingSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.ipv4Prefixes">ipv4Prefixes</a></code> | <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4PrefixesList">Ec2NetworkInterfaceIpv4PrefixesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.ipv6Addresses">ipv6Addresses</a></code> | <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6AddressesList">Ec2NetworkInterfaceIpv6AddressesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.ipv6Prefixes">ipv6Prefixes</a></code> | <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6PrefixesList">Ec2NetworkInterfaceIpv6PrefixesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.networkInterfaceId">networkInterfaceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.primaryIpv6Address">primaryIpv6Address</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.primaryPrivateIpAddress">primaryPrivateIpAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.privateIpAddresses">privateIpAddresses</a></code> | <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddressesList">Ec2NetworkInterfacePrivateIpAddressesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.publicIpDnsNameOptions">publicIpDnsNameOptions</a></code> | <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePublicIpDnsNameOptionsOutputReference">Ec2NetworkInterfacePublicIpDnsNameOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.secondaryPrivateIpAddresses">secondaryPrivateIpAddresses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTagsList">Ec2NetworkInterfaceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.vpcId">vpcId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.connectionTrackingSpecificationInput">connectionTrackingSpecificationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConnectionTrackingSpecification">Ec2NetworkInterfaceConnectionTrackingSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.enablePrimaryIpv6Input">enablePrimaryIpv6Input</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.groupSetInput">groupSetInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.interfaceTypeInput">interfaceTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.ipv4PrefixCountInput">ipv4PrefixCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.ipv4PrefixesInput">ipv4PrefixesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4Prefixes">Ec2NetworkInterfaceIpv4Prefixes</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.ipv6AddressCountInput">ipv6AddressCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.ipv6AddressesInput">ipv6AddressesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6Addresses">Ec2NetworkInterfaceIpv6Addresses</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.ipv6PrefixCountInput">ipv6PrefixCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.ipv6PrefixesInput">ipv6PrefixesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6Prefixes">Ec2NetworkInterfaceIpv6Prefixes</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.privateIpAddressesInput">privateIpAddressesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddresses">Ec2NetworkInterfacePrivateIpAddresses</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.privateIpAddressInput">privateIpAddressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.publicIpDnsHostnameTypeSpecificationInput">publicIpDnsHostnameTypeSpecificationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.secondaryPrivateIpAddressCountInput">secondaryPrivateIpAddressCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.sourceDestCheckInput">sourceDestCheckInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.subnetIdInput">subnetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTags">Ec2NetworkInterfaceTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.enablePrimaryIpv6">enablePrimaryIpv6</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.groupSet">groupSet</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.interfaceType">interfaceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.ipv4PrefixCount">ipv4PrefixCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.ipv6AddressCount">ipv6AddressCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.ipv6PrefixCount">ipv6PrefixCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.privateIpAddress">privateIpAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.publicIpDnsHostnameTypeSpecification">publicIpDnsHostnameTypeSpecification</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.secondaryPrivateIpAddressCount">secondaryPrivateIpAddressCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.sourceDestCheck">sourceDestCheck</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `connectionTrackingSpecification`<sup>Required</sup> <a name="connectionTrackingSpecification" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.connectionTrackingSpecification"></a>

```java
public Ec2NetworkInterfaceConnectionTrackingSpecificationOutputReference getConnectionTrackingSpecification();
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConnectionTrackingSpecificationOutputReference">Ec2NetworkInterfaceConnectionTrackingSpecificationOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `ipv4Prefixes`<sup>Required</sup> <a name="ipv4Prefixes" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.ipv4Prefixes"></a>

```java
public Ec2NetworkInterfaceIpv4PrefixesList getIpv4Prefixes();
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4PrefixesList">Ec2NetworkInterfaceIpv4PrefixesList</a>

---

##### `ipv6Addresses`<sup>Required</sup> <a name="ipv6Addresses" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.ipv6Addresses"></a>

```java
public Ec2NetworkInterfaceIpv6AddressesList getIpv6Addresses();
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6AddressesList">Ec2NetworkInterfaceIpv6AddressesList</a>

---

##### `ipv6Prefixes`<sup>Required</sup> <a name="ipv6Prefixes" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.ipv6Prefixes"></a>

```java
public Ec2NetworkInterfaceIpv6PrefixesList getIpv6Prefixes();
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6PrefixesList">Ec2NetworkInterfaceIpv6PrefixesList</a>

---

##### `networkInterfaceId`<sup>Required</sup> <a name="networkInterfaceId" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.networkInterfaceId"></a>

```java
public java.lang.String getNetworkInterfaceId();
```

- *Type:* java.lang.String

---

##### `primaryIpv6Address`<sup>Required</sup> <a name="primaryIpv6Address" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.primaryIpv6Address"></a>

```java
public java.lang.String getPrimaryIpv6Address();
```

- *Type:* java.lang.String

---

##### `primaryPrivateIpAddress`<sup>Required</sup> <a name="primaryPrivateIpAddress" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.primaryPrivateIpAddress"></a>

```java
public java.lang.String getPrimaryPrivateIpAddress();
```

- *Type:* java.lang.String

---

##### `privateIpAddresses`<sup>Required</sup> <a name="privateIpAddresses" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.privateIpAddresses"></a>

```java
public Ec2NetworkInterfacePrivateIpAddressesList getPrivateIpAddresses();
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddressesList">Ec2NetworkInterfacePrivateIpAddressesList</a>

---

##### `publicIpDnsNameOptions`<sup>Required</sup> <a name="publicIpDnsNameOptions" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.publicIpDnsNameOptions"></a>

```java
public Ec2NetworkInterfacePublicIpDnsNameOptionsOutputReference getPublicIpDnsNameOptions();
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePublicIpDnsNameOptionsOutputReference">Ec2NetworkInterfacePublicIpDnsNameOptionsOutputReference</a>

---

##### `secondaryPrivateIpAddresses`<sup>Required</sup> <a name="secondaryPrivateIpAddresses" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.secondaryPrivateIpAddresses"></a>

```java
public java.util.List<java.lang.String> getSecondaryPrivateIpAddresses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.tags"></a>

```java
public Ec2NetworkInterfaceTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTagsList">Ec2NetworkInterfaceTagsList</a>

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.vpcId"></a>

```java
public java.lang.String getVpcId();
```

- *Type:* java.lang.String

---

##### `connectionTrackingSpecificationInput`<sup>Optional</sup> <a name="connectionTrackingSpecificationInput" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.connectionTrackingSpecificationInput"></a>

```java
public IResolvable|Ec2NetworkInterfaceConnectionTrackingSpecification getConnectionTrackingSpecificationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConnectionTrackingSpecification">Ec2NetworkInterfaceConnectionTrackingSpecification</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `enablePrimaryIpv6Input`<sup>Optional</sup> <a name="enablePrimaryIpv6Input" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.enablePrimaryIpv6Input"></a>

```java
public java.lang.Boolean|IResolvable getEnablePrimaryIpv6Input();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `groupSetInput`<sup>Optional</sup> <a name="groupSetInput" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.groupSetInput"></a>

```java
public java.util.List<java.lang.String> getGroupSetInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `interfaceTypeInput`<sup>Optional</sup> <a name="interfaceTypeInput" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.interfaceTypeInput"></a>

```java
public java.lang.String getInterfaceTypeInput();
```

- *Type:* java.lang.String

---

##### `ipv4PrefixCountInput`<sup>Optional</sup> <a name="ipv4PrefixCountInput" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.ipv4PrefixCountInput"></a>

```java
public java.lang.Number getIpv4PrefixCountInput();
```

- *Type:* java.lang.Number

---

##### `ipv4PrefixesInput`<sup>Optional</sup> <a name="ipv4PrefixesInput" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.ipv4PrefixesInput"></a>

```java
public IResolvable|java.util.List<Ec2NetworkInterfaceIpv4Prefixes> getIpv4PrefixesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4Prefixes">Ec2NetworkInterfaceIpv4Prefixes</a>>

---

##### `ipv6AddressCountInput`<sup>Optional</sup> <a name="ipv6AddressCountInput" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.ipv6AddressCountInput"></a>

```java
public java.lang.Number getIpv6AddressCountInput();
```

- *Type:* java.lang.Number

---

##### `ipv6AddressesInput`<sup>Optional</sup> <a name="ipv6AddressesInput" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.ipv6AddressesInput"></a>

```java
public IResolvable|java.util.List<Ec2NetworkInterfaceIpv6Addresses> getIpv6AddressesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6Addresses">Ec2NetworkInterfaceIpv6Addresses</a>>

---

##### `ipv6PrefixCountInput`<sup>Optional</sup> <a name="ipv6PrefixCountInput" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.ipv6PrefixCountInput"></a>

```java
public java.lang.Number getIpv6PrefixCountInput();
```

- *Type:* java.lang.Number

---

##### `ipv6PrefixesInput`<sup>Optional</sup> <a name="ipv6PrefixesInput" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.ipv6PrefixesInput"></a>

```java
public IResolvable|java.util.List<Ec2NetworkInterfaceIpv6Prefixes> getIpv6PrefixesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6Prefixes">Ec2NetworkInterfaceIpv6Prefixes</a>>

---

##### `privateIpAddressesInput`<sup>Optional</sup> <a name="privateIpAddressesInput" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.privateIpAddressesInput"></a>

```java
public IResolvable|java.util.List<Ec2NetworkInterfacePrivateIpAddresses> getPrivateIpAddressesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddresses">Ec2NetworkInterfacePrivateIpAddresses</a>>

---

##### `privateIpAddressInput`<sup>Optional</sup> <a name="privateIpAddressInput" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.privateIpAddressInput"></a>

```java
public java.lang.String getPrivateIpAddressInput();
```

- *Type:* java.lang.String

---

##### `publicIpDnsHostnameTypeSpecificationInput`<sup>Optional</sup> <a name="publicIpDnsHostnameTypeSpecificationInput" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.publicIpDnsHostnameTypeSpecificationInput"></a>

```java
public java.lang.String getPublicIpDnsHostnameTypeSpecificationInput();
```

- *Type:* java.lang.String

---

##### `secondaryPrivateIpAddressCountInput`<sup>Optional</sup> <a name="secondaryPrivateIpAddressCountInput" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.secondaryPrivateIpAddressCountInput"></a>

```java
public java.lang.Number getSecondaryPrivateIpAddressCountInput();
```

- *Type:* java.lang.Number

---

##### `sourceDestCheckInput`<sup>Optional</sup> <a name="sourceDestCheckInput" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.sourceDestCheckInput"></a>

```java
public java.lang.Boolean|IResolvable getSourceDestCheckInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.subnetIdInput"></a>

```java
public java.lang.String getSubnetIdInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.tagsInput"></a>

```java
public IResolvable|java.util.List<Ec2NetworkInterfaceTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTags">Ec2NetworkInterfaceTags</a>>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `enablePrimaryIpv6`<sup>Required</sup> <a name="enablePrimaryIpv6" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.enablePrimaryIpv6"></a>

```java
public java.lang.Boolean|IResolvable getEnablePrimaryIpv6();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `groupSet`<sup>Required</sup> <a name="groupSet" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.groupSet"></a>

```java
public java.util.List<java.lang.String> getGroupSet();
```

- *Type:* java.util.List<java.lang.String>

---

##### `interfaceType`<sup>Required</sup> <a name="interfaceType" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.interfaceType"></a>

```java
public java.lang.String getInterfaceType();
```

- *Type:* java.lang.String

---

##### `ipv4PrefixCount`<sup>Required</sup> <a name="ipv4PrefixCount" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.ipv4PrefixCount"></a>

```java
public java.lang.Number getIpv4PrefixCount();
```

- *Type:* java.lang.Number

---

##### `ipv6AddressCount`<sup>Required</sup> <a name="ipv6AddressCount" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.ipv6AddressCount"></a>

```java
public java.lang.Number getIpv6AddressCount();
```

- *Type:* java.lang.Number

---

##### `ipv6PrefixCount`<sup>Required</sup> <a name="ipv6PrefixCount" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.ipv6PrefixCount"></a>

```java
public java.lang.Number getIpv6PrefixCount();
```

- *Type:* java.lang.Number

---

##### `privateIpAddress`<sup>Required</sup> <a name="privateIpAddress" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.privateIpAddress"></a>

```java
public java.lang.String getPrivateIpAddress();
```

- *Type:* java.lang.String

---

##### `publicIpDnsHostnameTypeSpecification`<sup>Required</sup> <a name="publicIpDnsHostnameTypeSpecification" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.publicIpDnsHostnameTypeSpecification"></a>

```java
public java.lang.String getPublicIpDnsHostnameTypeSpecification();
```

- *Type:* java.lang.String

---

##### `secondaryPrivateIpAddressCount`<sup>Required</sup> <a name="secondaryPrivateIpAddressCount" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.secondaryPrivateIpAddressCount"></a>

```java
public java.lang.Number getSecondaryPrivateIpAddressCount();
```

- *Type:* java.lang.Number

---

##### `sourceDestCheck`<sup>Required</sup> <a name="sourceDestCheck" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.sourceDestCheck"></a>

```java
public java.lang.Boolean|IResolvable getSourceDestCheck();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterface.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2NetworkInterfaceConfig <a name="Ec2NetworkInterfaceConfig" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_network_interface.Ec2NetworkInterfaceConfig;

Ec2NetworkInterfaceConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .subnetId(java.lang.String)
//  .connectionTrackingSpecification(Ec2NetworkInterfaceConnectionTrackingSpecification)
//  .description(java.lang.String)
//  .enablePrimaryIpv6(java.lang.Boolean|IResolvable)
//  .groupSet(java.util.List<java.lang.String>)
//  .interfaceType(java.lang.String)
//  .ipv4PrefixCount(java.lang.Number)
//  .ipv4Prefixes(IResolvable|java.util.List<Ec2NetworkInterfaceIpv4Prefixes>)
//  .ipv6AddressCount(java.lang.Number)
//  .ipv6Addresses(IResolvable|java.util.List<Ec2NetworkInterfaceIpv6Addresses>)
//  .ipv6PrefixCount(java.lang.Number)
//  .ipv6Prefixes(IResolvable|java.util.List<Ec2NetworkInterfaceIpv6Prefixes>)
//  .privateIpAddress(java.lang.String)
//  .privateIpAddresses(IResolvable|java.util.List<Ec2NetworkInterfacePrivateIpAddresses>)
//  .publicIpDnsHostnameTypeSpecification(java.lang.String)
//  .secondaryPrivateIpAddressCount(java.lang.Number)
//  .sourceDestCheck(java.lang.Boolean|IResolvable)
//  .tags(IResolvable|java.util.List<Ec2NetworkInterfaceTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConfig.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | The ID of the subnet to associate with the network interface. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConfig.property.connectionTrackingSpecification">connectionTrackingSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConnectionTrackingSpecification">Ec2NetworkInterfaceConnectionTrackingSpecification</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_network_interface#connection_tracking_specification Ec2NetworkInterface#connection_tracking_specification}. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConfig.property.description">description</a></code> | <code>java.lang.String</code> | A description for the network interface. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConfig.property.enablePrimaryIpv6">enablePrimaryIpv6</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If you have instances or ENIs that rely on the IPv6 address not changing, to avoid disrupting traffic to instances or ENIs, you can enable a primary IPv6 address. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConfig.property.groupSet">groupSet</a></code> | <code>java.util.List<java.lang.String></code> | A list of security group IDs associated with this network interface. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConfig.property.interfaceType">interfaceType</a></code> | <code>java.lang.String</code> | Indicates the type of network interface. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConfig.property.ipv4PrefixCount">ipv4PrefixCount</a></code> | <code>java.lang.Number</code> | The number of IPv4 prefixes to assign to a network interface. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConfig.property.ipv4Prefixes">ipv4Prefixes</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4Prefixes">Ec2NetworkInterfaceIpv4Prefixes</a>></code> | Assigns a list of IPv4 prefixes to the network interface. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConfig.property.ipv6AddressCount">ipv6AddressCount</a></code> | <code>java.lang.Number</code> | The number of IPv6 addresses to assign to a network interface. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConfig.property.ipv6Addresses">ipv6Addresses</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6Addresses">Ec2NetworkInterfaceIpv6Addresses</a>></code> | One or more specific IPv6 addresses from the IPv6 CIDR block range of your subnet to associate with the network interface. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConfig.property.ipv6PrefixCount">ipv6PrefixCount</a></code> | <code>java.lang.Number</code> | The number of IPv6 prefixes to assign to a network interface. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConfig.property.ipv6Prefixes">ipv6Prefixes</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6Prefixes">Ec2NetworkInterfaceIpv6Prefixes</a>></code> | Assigns a list of IPv6 prefixes to the network interface. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConfig.property.privateIpAddress">privateIpAddress</a></code> | <code>java.lang.String</code> | Assigns a single private IP address to the network interface, which is used as the primary private IP address. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConfig.property.privateIpAddresses">privateIpAddresses</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddresses">Ec2NetworkInterfacePrivateIpAddresses</a>></code> | Assigns a list of private IP addresses to the network interface. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConfig.property.publicIpDnsHostnameTypeSpecification">publicIpDnsHostnameTypeSpecification</a></code> | <code>java.lang.String</code> | Public IP DNS hostname type. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConfig.property.secondaryPrivateIpAddressCount">secondaryPrivateIpAddressCount</a></code> | <code>java.lang.Number</code> | The number of secondary private IPv4 addresses to assign to a network interface. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConfig.property.sourceDestCheck">sourceDestCheck</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Indicates whether traffic to or from the instance is validated. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTags">Ec2NetworkInterfaceTags</a>></code> | An arbitrary set of tags (key-value pairs) for this network interface. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConfig.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

The ID of the subnet to associate with the network interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_network_interface#subnet_id Ec2NetworkInterface#subnet_id}

---

##### `connectionTrackingSpecification`<sup>Optional</sup> <a name="connectionTrackingSpecification" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConfig.property.connectionTrackingSpecification"></a>

```java
public Ec2NetworkInterfaceConnectionTrackingSpecification getConnectionTrackingSpecification();
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConnectionTrackingSpecification">Ec2NetworkInterfaceConnectionTrackingSpecification</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_network_interface#connection_tracking_specification Ec2NetworkInterface#connection_tracking_specification}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

A description for the network interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_network_interface#description Ec2NetworkInterface#description}

---

##### `enablePrimaryIpv6`<sup>Optional</sup> <a name="enablePrimaryIpv6" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConfig.property.enablePrimaryIpv6"></a>

```java
public java.lang.Boolean|IResolvable getEnablePrimaryIpv6();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If you have instances or ENIs that rely on the IPv6 address not changing, to avoid disrupting traffic to instances or ENIs, you can enable a primary IPv6 address.

Enable this option to automatically assign an IPv6 associated with the ENI attached to your instance to be the primary IPv6 address. When you enable an IPv6 address to be a primary IPv6, you cannot disable it. Traffic will be routed to the primary IPv6 address until the instance is terminated or the ENI is detached. If you have multiple IPv6 addresses associated with an ENI and you enable a primary IPv6 address, the first IPv6 address associated with the ENI becomes the primary IPv6 address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_network_interface#enable_primary_ipv_6 Ec2NetworkInterface#enable_primary_ipv_6}

---

##### `groupSet`<sup>Optional</sup> <a name="groupSet" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConfig.property.groupSet"></a>

```java
public java.util.List<java.lang.String> getGroupSet();
```

- *Type:* java.util.List<java.lang.String>

A list of security group IDs associated with this network interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_network_interface#group_set Ec2NetworkInterface#group_set}

---

##### `interfaceType`<sup>Optional</sup> <a name="interfaceType" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConfig.property.interfaceType"></a>

```java
public java.lang.String getInterfaceType();
```

- *Type:* java.lang.String

Indicates the type of network interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_network_interface#interface_type Ec2NetworkInterface#interface_type}

---

##### `ipv4PrefixCount`<sup>Optional</sup> <a name="ipv4PrefixCount" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConfig.property.ipv4PrefixCount"></a>

```java
public java.lang.Number getIpv4PrefixCount();
```

- *Type:* java.lang.Number

The number of IPv4 prefixes to assign to a network interface.

When you specify a number of IPv4 prefixes, Amazon EC2 selects these prefixes from your existing subnet CIDR reservations, if available, or from free spaces in the subnet. By default, these will be /28 prefixes. You can't specify a count of IPv4 prefixes if you've specified one of the following: specific IPv4 prefixes, specific private IPv4 addresses, or a count of private IPv4 addresses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_network_interface#ipv_4_prefix_count Ec2NetworkInterface#ipv_4_prefix_count}

---

##### `ipv4Prefixes`<sup>Optional</sup> <a name="ipv4Prefixes" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConfig.property.ipv4Prefixes"></a>

```java
public IResolvable|java.util.List<Ec2NetworkInterfaceIpv4Prefixes> getIpv4Prefixes();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4Prefixes">Ec2NetworkInterfaceIpv4Prefixes</a>>

Assigns a list of IPv4 prefixes to the network interface.

If you want EC2 to automatically assign IPv4 prefixes, use the Ipv4PrefixCount property and do not specify this property. Presently, only /28 prefixes are supported. You can't specify IPv4 prefixes if you've specified one of the following: a count of IPv4 prefixes, specific private IPv4 addresses, or a count of private IPv4 addresses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_network_interface#ipv_4_prefixes Ec2NetworkInterface#ipv_4_prefixes}

---

##### `ipv6AddressCount`<sup>Optional</sup> <a name="ipv6AddressCount" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConfig.property.ipv6AddressCount"></a>

```java
public java.lang.Number getIpv6AddressCount();
```

- *Type:* java.lang.Number

The number of IPv6 addresses to assign to a network interface.

Amazon EC2 automatically selects the IPv6 addresses from the subnet range. To specify specific IPv6 addresses, use the Ipv6Addresses property and don't specify this property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_network_interface#ipv_6_address_count Ec2NetworkInterface#ipv_6_address_count}

---

##### `ipv6Addresses`<sup>Optional</sup> <a name="ipv6Addresses" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConfig.property.ipv6Addresses"></a>

```java
public IResolvable|java.util.List<Ec2NetworkInterfaceIpv6Addresses> getIpv6Addresses();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6Addresses">Ec2NetworkInterfaceIpv6Addresses</a>>

One or more specific IPv6 addresses from the IPv6 CIDR block range of your subnet to associate with the network interface.

If you're specifying a number of IPv6 addresses, use the Ipv6AddressCount property and don't specify this property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_network_interface#ipv_6_addresses Ec2NetworkInterface#ipv_6_addresses}

---

##### `ipv6PrefixCount`<sup>Optional</sup> <a name="ipv6PrefixCount" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConfig.property.ipv6PrefixCount"></a>

```java
public java.lang.Number getIpv6PrefixCount();
```

- *Type:* java.lang.Number

The number of IPv6 prefixes to assign to a network interface.

When you specify a number of IPv6 prefixes, Amazon EC2 selects these prefixes from your existing subnet CIDR reservations, if available, or from free spaces in the subnet. By default, these will be /80 prefixes. You can't specify a count of IPv6 prefixes if you've specified one of the following: specific IPv6 prefixes, specific IPv6 addresses, or a count of IPv6 addresses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_network_interface#ipv_6_prefix_count Ec2NetworkInterface#ipv_6_prefix_count}

---

##### `ipv6Prefixes`<sup>Optional</sup> <a name="ipv6Prefixes" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConfig.property.ipv6Prefixes"></a>

```java
public IResolvable|java.util.List<Ec2NetworkInterfaceIpv6Prefixes> getIpv6Prefixes();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6Prefixes">Ec2NetworkInterfaceIpv6Prefixes</a>>

Assigns a list of IPv6 prefixes to the network interface.

If you want EC2 to automatically assign IPv6 prefixes, use the Ipv6PrefixCount property and do not specify this property. Presently, only /80 prefixes are supported. You can't specify IPv6 prefixes if you've specified one of the following: a count of IPv6 prefixes, specific IPv6 addresses, or a count of IPv6 addresses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_network_interface#ipv_6_prefixes Ec2NetworkInterface#ipv_6_prefixes}

---

##### `privateIpAddress`<sup>Optional</sup> <a name="privateIpAddress" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConfig.property.privateIpAddress"></a>

```java
public java.lang.String getPrivateIpAddress();
```

- *Type:* java.lang.String

Assigns a single private IP address to the network interface, which is used as the primary private IP address.

If you want to specify multiple private IP address, use the PrivateIpAddresses property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_network_interface#private_ip_address Ec2NetworkInterface#private_ip_address}

---

##### `privateIpAddresses`<sup>Optional</sup> <a name="privateIpAddresses" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConfig.property.privateIpAddresses"></a>

```java
public IResolvable|java.util.List<Ec2NetworkInterfacePrivateIpAddresses> getPrivateIpAddresses();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddresses">Ec2NetworkInterfacePrivateIpAddresses</a>>

Assigns a list of private IP addresses to the network interface.

You can specify a primary private IP address by setting the value of the Primary property to true in the PrivateIpAddressSpecification property. If you want EC2 to automatically assign private IP addresses, use the SecondaryPrivateIpAddressCount property and do not specify this property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_network_interface#private_ip_addresses Ec2NetworkInterface#private_ip_addresses}

---

##### `publicIpDnsHostnameTypeSpecification`<sup>Optional</sup> <a name="publicIpDnsHostnameTypeSpecification" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConfig.property.publicIpDnsHostnameTypeSpecification"></a>

```java
public java.lang.String getPublicIpDnsHostnameTypeSpecification();
```

- *Type:* java.lang.String

Public IP DNS hostname type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_network_interface#public_ip_dns_hostname_type_specification Ec2NetworkInterface#public_ip_dns_hostname_type_specification}

---

##### `secondaryPrivateIpAddressCount`<sup>Optional</sup> <a name="secondaryPrivateIpAddressCount" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConfig.property.secondaryPrivateIpAddressCount"></a>

```java
public java.lang.Number getSecondaryPrivateIpAddressCount();
```

- *Type:* java.lang.Number

The number of secondary private IPv4 addresses to assign to a network interface.

When you specify a number of secondary IPv4 addresses, Amazon EC2 selects these IP addresses within the subnet's IPv4 CIDR range. You can't specify this option and specify more than one private IP address using privateIpAddresses

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_network_interface#secondary_private_ip_address_count Ec2NetworkInterface#secondary_private_ip_address_count}

---

##### `sourceDestCheck`<sup>Optional</sup> <a name="sourceDestCheck" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConfig.property.sourceDestCheck"></a>

```java
public java.lang.Boolean|IResolvable getSourceDestCheck();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Indicates whether traffic to or from the instance is validated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_network_interface#source_dest_check Ec2NetworkInterface#source_dest_check}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConfig.property.tags"></a>

```java
public IResolvable|java.util.List<Ec2NetworkInterfaceTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTags">Ec2NetworkInterfaceTags</a>>

An arbitrary set of tags (key-value pairs) for this network interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_network_interface#tags Ec2NetworkInterface#tags}

---

### Ec2NetworkInterfaceConnectionTrackingSpecification <a name="Ec2NetworkInterfaceConnectionTrackingSpecification" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConnectionTrackingSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConnectionTrackingSpecification.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_network_interface.Ec2NetworkInterfaceConnectionTrackingSpecification;

Ec2NetworkInterfaceConnectionTrackingSpecification.builder()
//  .tcpEstablishedTimeout(java.lang.Number)
//  .udpStreamTimeout(java.lang.Number)
//  .udpTimeout(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConnectionTrackingSpecification.property.tcpEstablishedTimeout">tcpEstablishedTimeout</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_network_interface#tcp_established_timeout Ec2NetworkInterface#tcp_established_timeout}. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConnectionTrackingSpecification.property.udpStreamTimeout">udpStreamTimeout</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_network_interface#udp_stream_timeout Ec2NetworkInterface#udp_stream_timeout}. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConnectionTrackingSpecification.property.udpTimeout">udpTimeout</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_network_interface#udp_timeout Ec2NetworkInterface#udp_timeout}. |

---

##### `tcpEstablishedTimeout`<sup>Optional</sup> <a name="tcpEstablishedTimeout" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConnectionTrackingSpecification.property.tcpEstablishedTimeout"></a>

```java
public java.lang.Number getTcpEstablishedTimeout();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_network_interface#tcp_established_timeout Ec2NetworkInterface#tcp_established_timeout}.

---

##### `udpStreamTimeout`<sup>Optional</sup> <a name="udpStreamTimeout" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConnectionTrackingSpecification.property.udpStreamTimeout"></a>

```java
public java.lang.Number getUdpStreamTimeout();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_network_interface#udp_stream_timeout Ec2NetworkInterface#udp_stream_timeout}.

---

##### `udpTimeout`<sup>Optional</sup> <a name="udpTimeout" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConnectionTrackingSpecification.property.udpTimeout"></a>

```java
public java.lang.Number getUdpTimeout();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_network_interface#udp_timeout Ec2NetworkInterface#udp_timeout}.

---

### Ec2NetworkInterfaceIpv4Prefixes <a name="Ec2NetworkInterfaceIpv4Prefixes" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4Prefixes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4Prefixes.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_network_interface.Ec2NetworkInterfaceIpv4Prefixes;

Ec2NetworkInterfaceIpv4Prefixes.builder()
//  .ipv4Prefix(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4Prefixes.property.ipv4Prefix">ipv4Prefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_network_interface#ipv_4_prefix Ec2NetworkInterface#ipv_4_prefix}. |

---

##### `ipv4Prefix`<sup>Optional</sup> <a name="ipv4Prefix" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4Prefixes.property.ipv4Prefix"></a>

```java
public java.lang.String getIpv4Prefix();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_network_interface#ipv_4_prefix Ec2NetworkInterface#ipv_4_prefix}.

---

### Ec2NetworkInterfaceIpv6Addresses <a name="Ec2NetworkInterfaceIpv6Addresses" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6Addresses"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6Addresses.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_network_interface.Ec2NetworkInterfaceIpv6Addresses;

Ec2NetworkInterfaceIpv6Addresses.builder()
//  .ipv6Address(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6Addresses.property.ipv6Address">ipv6Address</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_network_interface#ipv_6_address Ec2NetworkInterface#ipv_6_address}. |

---

##### `ipv6Address`<sup>Optional</sup> <a name="ipv6Address" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6Addresses.property.ipv6Address"></a>

```java
public java.lang.String getIpv6Address();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_network_interface#ipv_6_address Ec2NetworkInterface#ipv_6_address}.

---

### Ec2NetworkInterfaceIpv6Prefixes <a name="Ec2NetworkInterfaceIpv6Prefixes" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6Prefixes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6Prefixes.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_network_interface.Ec2NetworkInterfaceIpv6Prefixes;

Ec2NetworkInterfaceIpv6Prefixes.builder()
//  .ipv6Prefix(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6Prefixes.property.ipv6Prefix">ipv6Prefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_network_interface#ipv_6_prefix Ec2NetworkInterface#ipv_6_prefix}. |

---

##### `ipv6Prefix`<sup>Optional</sup> <a name="ipv6Prefix" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6Prefixes.property.ipv6Prefix"></a>

```java
public java.lang.String getIpv6Prefix();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_network_interface#ipv_6_prefix Ec2NetworkInterface#ipv_6_prefix}.

---

### Ec2NetworkInterfacePrivateIpAddresses <a name="Ec2NetworkInterfacePrivateIpAddresses" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddresses"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddresses.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_network_interface.Ec2NetworkInterfacePrivateIpAddresses;

Ec2NetworkInterfacePrivateIpAddresses.builder()
//  .primary(java.lang.Boolean|IResolvable)
//  .privateIpAddress(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddresses.property.primary">primary</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_network_interface#primary Ec2NetworkInterface#primary}. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddresses.property.privateIpAddress">privateIpAddress</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_network_interface#private_ip_address Ec2NetworkInterface#private_ip_address}. |

---

##### `primary`<sup>Optional</sup> <a name="primary" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddresses.property.primary"></a>

```java
public java.lang.Boolean|IResolvable getPrimary();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_network_interface#primary Ec2NetworkInterface#primary}.

---

##### `privateIpAddress`<sup>Optional</sup> <a name="privateIpAddress" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddresses.property.privateIpAddress"></a>

```java
public java.lang.String getPrivateIpAddress();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_network_interface#private_ip_address Ec2NetworkInterface#private_ip_address}.

---

### Ec2NetworkInterfacePublicIpDnsNameOptions <a name="Ec2NetworkInterfacePublicIpDnsNameOptions" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePublicIpDnsNameOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePublicIpDnsNameOptions.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_network_interface.Ec2NetworkInterfacePublicIpDnsNameOptions;

Ec2NetworkInterfacePublicIpDnsNameOptions.builder()
    .build();
```


### Ec2NetworkInterfaceTags <a name="Ec2NetworkInterfaceTags" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_network_interface.Ec2NetworkInterfaceTags;

Ec2NetworkInterfaceTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_network_interface#key Ec2NetworkInterface#key}. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTags.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_network_interface#value Ec2NetworkInterface#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_network_interface#key Ec2NetworkInterface#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_network_interface#value Ec2NetworkInterface#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2NetworkInterfaceConnectionTrackingSpecificationOutputReference <a name="Ec2NetworkInterfaceConnectionTrackingSpecificationOutputReference" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConnectionTrackingSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConnectionTrackingSpecificationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_network_interface.Ec2NetworkInterfaceConnectionTrackingSpecificationOutputReference;

new Ec2NetworkInterfaceConnectionTrackingSpecificationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConnectionTrackingSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConnectionTrackingSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConnectionTrackingSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConnectionTrackingSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConnectionTrackingSpecificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConnectionTrackingSpecificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConnectionTrackingSpecificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConnectionTrackingSpecificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConnectionTrackingSpecificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConnectionTrackingSpecificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConnectionTrackingSpecificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConnectionTrackingSpecificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConnectionTrackingSpecificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConnectionTrackingSpecificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConnectionTrackingSpecificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConnectionTrackingSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConnectionTrackingSpecificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConnectionTrackingSpecificationOutputReference.resetTcpEstablishedTimeout">resetTcpEstablishedTimeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConnectionTrackingSpecificationOutputReference.resetUdpStreamTimeout">resetUdpStreamTimeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConnectionTrackingSpecificationOutputReference.resetUdpTimeout">resetUdpTimeout</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConnectionTrackingSpecificationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConnectionTrackingSpecificationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConnectionTrackingSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConnectionTrackingSpecificationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConnectionTrackingSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConnectionTrackingSpecificationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConnectionTrackingSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConnectionTrackingSpecificationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConnectionTrackingSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConnectionTrackingSpecificationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConnectionTrackingSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConnectionTrackingSpecificationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConnectionTrackingSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConnectionTrackingSpecificationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConnectionTrackingSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConnectionTrackingSpecificationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConnectionTrackingSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConnectionTrackingSpecificationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConnectionTrackingSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConnectionTrackingSpecificationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConnectionTrackingSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConnectionTrackingSpecificationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConnectionTrackingSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConnectionTrackingSpecificationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTcpEstablishedTimeout` <a name="resetTcpEstablishedTimeout" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConnectionTrackingSpecificationOutputReference.resetTcpEstablishedTimeout"></a>

```java
public void resetTcpEstablishedTimeout()
```

##### `resetUdpStreamTimeout` <a name="resetUdpStreamTimeout" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConnectionTrackingSpecificationOutputReference.resetUdpStreamTimeout"></a>

```java
public void resetUdpStreamTimeout()
```

##### `resetUdpTimeout` <a name="resetUdpTimeout" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConnectionTrackingSpecificationOutputReference.resetUdpTimeout"></a>

```java
public void resetUdpTimeout()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConnectionTrackingSpecificationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConnectionTrackingSpecificationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConnectionTrackingSpecificationOutputReference.property.tcpEstablishedTimeoutInput">tcpEstablishedTimeoutInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConnectionTrackingSpecificationOutputReference.property.udpStreamTimeoutInput">udpStreamTimeoutInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConnectionTrackingSpecificationOutputReference.property.udpTimeoutInput">udpTimeoutInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConnectionTrackingSpecificationOutputReference.property.tcpEstablishedTimeout">tcpEstablishedTimeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConnectionTrackingSpecificationOutputReference.property.udpStreamTimeout">udpStreamTimeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConnectionTrackingSpecificationOutputReference.property.udpTimeout">udpTimeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConnectionTrackingSpecificationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConnectionTrackingSpecification">Ec2NetworkInterfaceConnectionTrackingSpecification</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConnectionTrackingSpecificationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConnectionTrackingSpecificationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `tcpEstablishedTimeoutInput`<sup>Optional</sup> <a name="tcpEstablishedTimeoutInput" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConnectionTrackingSpecificationOutputReference.property.tcpEstablishedTimeoutInput"></a>

```java
public java.lang.Number getTcpEstablishedTimeoutInput();
```

- *Type:* java.lang.Number

---

##### `udpStreamTimeoutInput`<sup>Optional</sup> <a name="udpStreamTimeoutInput" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConnectionTrackingSpecificationOutputReference.property.udpStreamTimeoutInput"></a>

```java
public java.lang.Number getUdpStreamTimeoutInput();
```

- *Type:* java.lang.Number

---

##### `udpTimeoutInput`<sup>Optional</sup> <a name="udpTimeoutInput" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConnectionTrackingSpecificationOutputReference.property.udpTimeoutInput"></a>

```java
public java.lang.Number getUdpTimeoutInput();
```

- *Type:* java.lang.Number

---

##### `tcpEstablishedTimeout`<sup>Required</sup> <a name="tcpEstablishedTimeout" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConnectionTrackingSpecificationOutputReference.property.tcpEstablishedTimeout"></a>

```java
public java.lang.Number getTcpEstablishedTimeout();
```

- *Type:* java.lang.Number

---

##### `udpStreamTimeout`<sup>Required</sup> <a name="udpStreamTimeout" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConnectionTrackingSpecificationOutputReference.property.udpStreamTimeout"></a>

```java
public java.lang.Number getUdpStreamTimeout();
```

- *Type:* java.lang.Number

---

##### `udpTimeout`<sup>Required</sup> <a name="udpTimeout" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConnectionTrackingSpecificationOutputReference.property.udpTimeout"></a>

```java
public java.lang.Number getUdpTimeout();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConnectionTrackingSpecificationOutputReference.property.internalValue"></a>

```java
public IResolvable|Ec2NetworkInterfaceConnectionTrackingSpecification getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceConnectionTrackingSpecification">Ec2NetworkInterfaceConnectionTrackingSpecification</a>

---


### Ec2NetworkInterfaceIpv4PrefixesList <a name="Ec2NetworkInterfaceIpv4PrefixesList" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4PrefixesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4PrefixesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_network_interface.Ec2NetworkInterfaceIpv4PrefixesList;

new Ec2NetworkInterfaceIpv4PrefixesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4PrefixesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4PrefixesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4PrefixesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4PrefixesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4PrefixesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4PrefixesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4PrefixesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4PrefixesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4PrefixesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4PrefixesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4PrefixesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4PrefixesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4PrefixesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4PrefixesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4PrefixesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4PrefixesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4PrefixesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4PrefixesList.get"></a>

```java
public Ec2NetworkInterfaceIpv4PrefixesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4PrefixesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4PrefixesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4PrefixesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4PrefixesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4Prefixes">Ec2NetworkInterfaceIpv4Prefixes</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4PrefixesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4PrefixesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4PrefixesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<Ec2NetworkInterfaceIpv4Prefixes> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4Prefixes">Ec2NetworkInterfaceIpv4Prefixes</a>>

---


### Ec2NetworkInterfaceIpv4PrefixesOutputReference <a name="Ec2NetworkInterfaceIpv4PrefixesOutputReference" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4PrefixesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4PrefixesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_network_interface.Ec2NetworkInterfaceIpv4PrefixesOutputReference;

new Ec2NetworkInterfaceIpv4PrefixesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4PrefixesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4PrefixesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4PrefixesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4PrefixesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4PrefixesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4PrefixesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4PrefixesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4PrefixesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4PrefixesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4PrefixesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4PrefixesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4PrefixesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4PrefixesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4PrefixesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4PrefixesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4PrefixesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4PrefixesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4PrefixesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4PrefixesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4PrefixesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4PrefixesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4PrefixesOutputReference.resetIpv4Prefix">resetIpv4Prefix</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4PrefixesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4PrefixesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4PrefixesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4PrefixesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4PrefixesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4PrefixesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4PrefixesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4PrefixesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4PrefixesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4PrefixesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4PrefixesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4PrefixesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4PrefixesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4PrefixesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4PrefixesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4PrefixesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4PrefixesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4PrefixesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4PrefixesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4PrefixesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4PrefixesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4PrefixesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4PrefixesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4PrefixesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIpv4Prefix` <a name="resetIpv4Prefix" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4PrefixesOutputReference.resetIpv4Prefix"></a>

```java
public void resetIpv4Prefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4PrefixesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4PrefixesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4PrefixesOutputReference.property.ipv4PrefixInput">ipv4PrefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4PrefixesOutputReference.property.ipv4Prefix">ipv4Prefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4PrefixesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4Prefixes">Ec2NetworkInterfaceIpv4Prefixes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4PrefixesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4PrefixesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ipv4PrefixInput`<sup>Optional</sup> <a name="ipv4PrefixInput" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4PrefixesOutputReference.property.ipv4PrefixInput"></a>

```java
public java.lang.String getIpv4PrefixInput();
```

- *Type:* java.lang.String

---

##### `ipv4Prefix`<sup>Required</sup> <a name="ipv4Prefix" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4PrefixesOutputReference.property.ipv4Prefix"></a>

```java
public java.lang.String getIpv4Prefix();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4PrefixesOutputReference.property.internalValue"></a>

```java
public IResolvable|Ec2NetworkInterfaceIpv4Prefixes getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv4Prefixes">Ec2NetworkInterfaceIpv4Prefixes</a>

---


### Ec2NetworkInterfaceIpv6AddressesList <a name="Ec2NetworkInterfaceIpv6AddressesList" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6AddressesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6AddressesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_network_interface.Ec2NetworkInterfaceIpv6AddressesList;

new Ec2NetworkInterfaceIpv6AddressesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6AddressesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6AddressesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6AddressesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6AddressesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6AddressesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6AddressesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6AddressesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6AddressesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6AddressesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6AddressesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6AddressesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6AddressesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6AddressesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6AddressesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6AddressesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6AddressesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6AddressesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6AddressesList.get"></a>

```java
public Ec2NetworkInterfaceIpv6AddressesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6AddressesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6AddressesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6AddressesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6AddressesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6Addresses">Ec2NetworkInterfaceIpv6Addresses</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6AddressesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6AddressesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6AddressesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<Ec2NetworkInterfaceIpv6Addresses> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6Addresses">Ec2NetworkInterfaceIpv6Addresses</a>>

---


### Ec2NetworkInterfaceIpv6AddressesOutputReference <a name="Ec2NetworkInterfaceIpv6AddressesOutputReference" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6AddressesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6AddressesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_network_interface.Ec2NetworkInterfaceIpv6AddressesOutputReference;

new Ec2NetworkInterfaceIpv6AddressesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6AddressesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6AddressesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6AddressesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6AddressesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6AddressesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6AddressesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6AddressesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6AddressesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6AddressesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6AddressesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6AddressesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6AddressesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6AddressesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6AddressesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6AddressesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6AddressesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6AddressesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6AddressesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6AddressesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6AddressesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6AddressesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6AddressesOutputReference.resetIpv6Address">resetIpv6Address</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6AddressesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6AddressesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6AddressesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6AddressesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6AddressesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6AddressesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6AddressesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6AddressesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6AddressesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6AddressesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6AddressesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6AddressesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6AddressesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6AddressesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6AddressesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6AddressesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6AddressesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6AddressesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6AddressesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6AddressesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6AddressesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6AddressesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6AddressesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6AddressesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIpv6Address` <a name="resetIpv6Address" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6AddressesOutputReference.resetIpv6Address"></a>

```java
public void resetIpv6Address()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6AddressesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6AddressesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6AddressesOutputReference.property.ipv6AddressInput">ipv6AddressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6AddressesOutputReference.property.ipv6Address">ipv6Address</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6AddressesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6Addresses">Ec2NetworkInterfaceIpv6Addresses</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6AddressesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6AddressesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ipv6AddressInput`<sup>Optional</sup> <a name="ipv6AddressInput" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6AddressesOutputReference.property.ipv6AddressInput"></a>

```java
public java.lang.String getIpv6AddressInput();
```

- *Type:* java.lang.String

---

##### `ipv6Address`<sup>Required</sup> <a name="ipv6Address" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6AddressesOutputReference.property.ipv6Address"></a>

```java
public java.lang.String getIpv6Address();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6AddressesOutputReference.property.internalValue"></a>

```java
public IResolvable|Ec2NetworkInterfaceIpv6Addresses getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6Addresses">Ec2NetworkInterfaceIpv6Addresses</a>

---


### Ec2NetworkInterfaceIpv6PrefixesList <a name="Ec2NetworkInterfaceIpv6PrefixesList" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6PrefixesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6PrefixesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_network_interface.Ec2NetworkInterfaceIpv6PrefixesList;

new Ec2NetworkInterfaceIpv6PrefixesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6PrefixesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6PrefixesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6PrefixesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6PrefixesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6PrefixesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6PrefixesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6PrefixesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6PrefixesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6PrefixesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6PrefixesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6PrefixesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6PrefixesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6PrefixesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6PrefixesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6PrefixesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6PrefixesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6PrefixesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6PrefixesList.get"></a>

```java
public Ec2NetworkInterfaceIpv6PrefixesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6PrefixesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6PrefixesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6PrefixesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6PrefixesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6Prefixes">Ec2NetworkInterfaceIpv6Prefixes</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6PrefixesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6PrefixesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6PrefixesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<Ec2NetworkInterfaceIpv6Prefixes> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6Prefixes">Ec2NetworkInterfaceIpv6Prefixes</a>>

---


### Ec2NetworkInterfaceIpv6PrefixesOutputReference <a name="Ec2NetworkInterfaceIpv6PrefixesOutputReference" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6PrefixesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6PrefixesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_network_interface.Ec2NetworkInterfaceIpv6PrefixesOutputReference;

new Ec2NetworkInterfaceIpv6PrefixesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6PrefixesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6PrefixesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6PrefixesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6PrefixesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6PrefixesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6PrefixesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6PrefixesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6PrefixesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6PrefixesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6PrefixesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6PrefixesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6PrefixesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6PrefixesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6PrefixesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6PrefixesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6PrefixesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6PrefixesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6PrefixesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6PrefixesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6PrefixesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6PrefixesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6PrefixesOutputReference.resetIpv6Prefix">resetIpv6Prefix</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6PrefixesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6PrefixesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6PrefixesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6PrefixesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6PrefixesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6PrefixesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6PrefixesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6PrefixesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6PrefixesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6PrefixesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6PrefixesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6PrefixesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6PrefixesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6PrefixesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6PrefixesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6PrefixesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6PrefixesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6PrefixesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6PrefixesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6PrefixesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6PrefixesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6PrefixesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6PrefixesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6PrefixesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIpv6Prefix` <a name="resetIpv6Prefix" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6PrefixesOutputReference.resetIpv6Prefix"></a>

```java
public void resetIpv6Prefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6PrefixesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6PrefixesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6PrefixesOutputReference.property.ipv6PrefixInput">ipv6PrefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6PrefixesOutputReference.property.ipv6Prefix">ipv6Prefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6PrefixesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6Prefixes">Ec2NetworkInterfaceIpv6Prefixes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6PrefixesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6PrefixesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ipv6PrefixInput`<sup>Optional</sup> <a name="ipv6PrefixInput" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6PrefixesOutputReference.property.ipv6PrefixInput"></a>

```java
public java.lang.String getIpv6PrefixInput();
```

- *Type:* java.lang.String

---

##### `ipv6Prefix`<sup>Required</sup> <a name="ipv6Prefix" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6PrefixesOutputReference.property.ipv6Prefix"></a>

```java
public java.lang.String getIpv6Prefix();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6PrefixesOutputReference.property.internalValue"></a>

```java
public IResolvable|Ec2NetworkInterfaceIpv6Prefixes getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceIpv6Prefixes">Ec2NetworkInterfaceIpv6Prefixes</a>

---


### Ec2NetworkInterfacePrivateIpAddressesList <a name="Ec2NetworkInterfacePrivateIpAddressesList" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddressesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddressesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_network_interface.Ec2NetworkInterfacePrivateIpAddressesList;

new Ec2NetworkInterfacePrivateIpAddressesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddressesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddressesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddressesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddressesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddressesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddressesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddressesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddressesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddressesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddressesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddressesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddressesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddressesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddressesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddressesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddressesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddressesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddressesList.get"></a>

```java
public Ec2NetworkInterfacePrivateIpAddressesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddressesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddressesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddressesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddressesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddresses">Ec2NetworkInterfacePrivateIpAddresses</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddressesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddressesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddressesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<Ec2NetworkInterfacePrivateIpAddresses> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddresses">Ec2NetworkInterfacePrivateIpAddresses</a>>

---


### Ec2NetworkInterfacePrivateIpAddressesOutputReference <a name="Ec2NetworkInterfacePrivateIpAddressesOutputReference" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddressesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddressesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_network_interface.Ec2NetworkInterfacePrivateIpAddressesOutputReference;

new Ec2NetworkInterfacePrivateIpAddressesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddressesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddressesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddressesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddressesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddressesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddressesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddressesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddressesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddressesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddressesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddressesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddressesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddressesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddressesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddressesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddressesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddressesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddressesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddressesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddressesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddressesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddressesOutputReference.resetPrimary">resetPrimary</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddressesOutputReference.resetPrivateIpAddress">resetPrivateIpAddress</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddressesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddressesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddressesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddressesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddressesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddressesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddressesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddressesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddressesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddressesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddressesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddressesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddressesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddressesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddressesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddressesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddressesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddressesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddressesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddressesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddressesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddressesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddressesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddressesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPrimary` <a name="resetPrimary" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddressesOutputReference.resetPrimary"></a>

```java
public void resetPrimary()
```

##### `resetPrivateIpAddress` <a name="resetPrivateIpAddress" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddressesOutputReference.resetPrivateIpAddress"></a>

```java
public void resetPrivateIpAddress()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddressesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddressesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddressesOutputReference.property.primaryInput">primaryInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddressesOutputReference.property.privateIpAddressInput">privateIpAddressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddressesOutputReference.property.primary">primary</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddressesOutputReference.property.privateIpAddress">privateIpAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddressesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddresses">Ec2NetworkInterfacePrivateIpAddresses</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddressesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddressesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `primaryInput`<sup>Optional</sup> <a name="primaryInput" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddressesOutputReference.property.primaryInput"></a>

```java
public java.lang.Boolean|IResolvable getPrimaryInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `privateIpAddressInput`<sup>Optional</sup> <a name="privateIpAddressInput" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddressesOutputReference.property.privateIpAddressInput"></a>

```java
public java.lang.String getPrivateIpAddressInput();
```

- *Type:* java.lang.String

---

##### `primary`<sup>Required</sup> <a name="primary" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddressesOutputReference.property.primary"></a>

```java
public java.lang.Boolean|IResolvable getPrimary();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `privateIpAddress`<sup>Required</sup> <a name="privateIpAddress" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddressesOutputReference.property.privateIpAddress"></a>

```java
public java.lang.String getPrivateIpAddress();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddressesOutputReference.property.internalValue"></a>

```java
public IResolvable|Ec2NetworkInterfacePrivateIpAddresses getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePrivateIpAddresses">Ec2NetworkInterfacePrivateIpAddresses</a>

---


### Ec2NetworkInterfacePublicIpDnsNameOptionsOutputReference <a name="Ec2NetworkInterfacePublicIpDnsNameOptionsOutputReference" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePublicIpDnsNameOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePublicIpDnsNameOptionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_network_interface.Ec2NetworkInterfacePublicIpDnsNameOptionsOutputReference;

new Ec2NetworkInterfacePublicIpDnsNameOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePublicIpDnsNameOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePublicIpDnsNameOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePublicIpDnsNameOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePublicIpDnsNameOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePublicIpDnsNameOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePublicIpDnsNameOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePublicIpDnsNameOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePublicIpDnsNameOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePublicIpDnsNameOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePublicIpDnsNameOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePublicIpDnsNameOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePublicIpDnsNameOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePublicIpDnsNameOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePublicIpDnsNameOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePublicIpDnsNameOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePublicIpDnsNameOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePublicIpDnsNameOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePublicIpDnsNameOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePublicIpDnsNameOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePublicIpDnsNameOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePublicIpDnsNameOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePublicIpDnsNameOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePublicIpDnsNameOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePublicIpDnsNameOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePublicIpDnsNameOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePublicIpDnsNameOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePublicIpDnsNameOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePublicIpDnsNameOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePublicIpDnsNameOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePublicIpDnsNameOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePublicIpDnsNameOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePublicIpDnsNameOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePublicIpDnsNameOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePublicIpDnsNameOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePublicIpDnsNameOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePublicIpDnsNameOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePublicIpDnsNameOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePublicIpDnsNameOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePublicIpDnsNameOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePublicIpDnsNameOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePublicIpDnsNameOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePublicIpDnsNameOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePublicIpDnsNameOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePublicIpDnsNameOptionsOutputReference.property.dnsHostnameType">dnsHostnameType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePublicIpDnsNameOptionsOutputReference.property.publicDualStackDnsName">publicDualStackDnsName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePublicIpDnsNameOptionsOutputReference.property.publicIpv4DnsName">publicIpv4DnsName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePublicIpDnsNameOptionsOutputReference.property.publicIpv6DnsName">publicIpv6DnsName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePublicIpDnsNameOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePublicIpDnsNameOptions">Ec2NetworkInterfacePublicIpDnsNameOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePublicIpDnsNameOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePublicIpDnsNameOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dnsHostnameType`<sup>Required</sup> <a name="dnsHostnameType" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePublicIpDnsNameOptionsOutputReference.property.dnsHostnameType"></a>

```java
public java.lang.String getDnsHostnameType();
```

- *Type:* java.lang.String

---

##### `publicDualStackDnsName`<sup>Required</sup> <a name="publicDualStackDnsName" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePublicIpDnsNameOptionsOutputReference.property.publicDualStackDnsName"></a>

```java
public java.lang.String getPublicDualStackDnsName();
```

- *Type:* java.lang.String

---

##### `publicIpv4DnsName`<sup>Required</sup> <a name="publicIpv4DnsName" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePublicIpDnsNameOptionsOutputReference.property.publicIpv4DnsName"></a>

```java
public java.lang.String getPublicIpv4DnsName();
```

- *Type:* java.lang.String

---

##### `publicIpv6DnsName`<sup>Required</sup> <a name="publicIpv6DnsName" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePublicIpDnsNameOptionsOutputReference.property.publicIpv6DnsName"></a>

```java
public java.lang.String getPublicIpv6DnsName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePublicIpDnsNameOptionsOutputReference.property.internalValue"></a>

```java
public Ec2NetworkInterfacePublicIpDnsNameOptions getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfacePublicIpDnsNameOptions">Ec2NetworkInterfacePublicIpDnsNameOptions</a>

---


### Ec2NetworkInterfaceTagsList <a name="Ec2NetworkInterfaceTagsList" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_network_interface.Ec2NetworkInterfaceTagsList;

new Ec2NetworkInterfaceTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTagsList.get"></a>

```java
public Ec2NetworkInterfaceTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTags">Ec2NetworkInterfaceTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<Ec2NetworkInterfaceTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTags">Ec2NetworkInterfaceTags</a>>

---


### Ec2NetworkInterfaceTagsOutputReference <a name="Ec2NetworkInterfaceTagsOutputReference" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_network_interface.Ec2NetworkInterfaceTagsOutputReference;

new Ec2NetworkInterfaceTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTags">Ec2NetworkInterfaceTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|Ec2NetworkInterfaceTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2NetworkInterface.Ec2NetworkInterfaceTags">Ec2NetworkInterfaceTags</a>

---



