# `elasticloadbalancingv2LoadBalancer` Submodule <a name="`elasticloadbalancingv2LoadBalancer` Submodule" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Elasticloadbalancingv2LoadBalancer <a name="Elasticloadbalancingv2LoadBalancer" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticloadbalancingv2_load_balancer awscc_elasticloadbalancingv2_load_balancer}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.Initializer"></a>

```python
from cdktn_provider_awscc import elasticloadbalancingv2_load_balancer

elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  enable_capacity_reservation_provision_stabilize: bool | IResolvable = None,
  enable_prefix_for_ipv6_source_nat: str = None,
  enforce_security_group_inbound_rules_on_private_link_traffic: str = None,
  ip_address_type: str = None,
  ipv4_ipam_pool_id: str = None,
  load_balancer_attributes: IResolvable | typing.List[Elasticloadbalancingv2LoadBalancerLoadBalancerAttributes] = None,
  minimum_load_balancer_capacity: Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacity = None,
  name: str = None,
  scheme: str = None,
  security_groups: typing.List[str] = None,
  subnet_mappings: IResolvable | typing.List[Elasticloadbalancingv2LoadBalancerSubnetMappings] = None,
  subnets: typing.List[str] = None,
  tags: IResolvable | typing.List[Elasticloadbalancingv2LoadBalancerTags] = None,
  type: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.Initializer.parameter.enableCapacityReservationProvisionStabilize">enable_capacity_reservation_provision_stabilize</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates whether to enable stabilization when creating or updating an LCU reservation. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.Initializer.parameter.enablePrefixForIpv6SourceNat">enable_prefix_for_ipv6_source_nat</a></code> | <code>str</code> | [Network Load Balancers with UDP listeners] Indicates whether to use an IPv6 prefix from each subnet for source NAT. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.Initializer.parameter.enforceSecurityGroupInboundRulesOnPrivateLinkTraffic">enforce_security_group_inbound_rules_on_private_link_traffic</a></code> | <code>str</code> | Indicates whether to evaluate inbound security group rules for traffic sent to a Network Load Balancer through privatelink. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.Initializer.parameter.ipAddressType">ip_address_type</a></code> | <code>str</code> | The IP address type. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.Initializer.parameter.ipv4IpamPoolId">ipv4_ipam_pool_id</a></code> | <code>str</code> | The ID of the IPv4 IPAM pool. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.Initializer.parameter.loadBalancerAttributes">load_balancer_attributes</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributes">Elasticloadbalancingv2LoadBalancerLoadBalancerAttributes</a>]</code> | The load balancer attributes. Attributes that you do not modify retain their current values. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.Initializer.parameter.minimumLoadBalancerCapacity">minimum_load_balancer_capacity</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacity">Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacity</a></code> | The minimum capacity for a load balancer. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the load balancer. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.Initializer.parameter.scheme">scheme</a></code> | <code>str</code> | The nodes of an Internet-facing load balancer have public IP addresses. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.Initializer.parameter.securityGroups">security_groups</a></code> | <code>typing.List[str]</code> | [Application Load Balancers and Network Load Balancers] The IDs of the security groups for the load balancer. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.Initializer.parameter.subnetMappings">subnet_mappings</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappings">Elasticloadbalancingv2LoadBalancerSubnetMappings</a>]</code> | The IDs of the subnets. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.Initializer.parameter.subnets">subnets</a></code> | <code>typing.List[str]</code> | The IDs of the subnets. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTags">Elasticloadbalancingv2LoadBalancerTags</a>]</code> | The tags to assign to the load balancer. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.Initializer.parameter.type">type</a></code> | <code>str</code> | The type of load balancer. The default is ``application``. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `enable_capacity_reservation_provision_stabilize`<sup>Optional</sup> <a name="enable_capacity_reservation_provision_stabilize" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.Initializer.parameter.enableCapacityReservationProvisionStabilize"></a>

- *Type:* bool | cdktn.IResolvable

Indicates whether to enable stabilization when creating or updating an LCU reservation.

This ensures that the final stack status reflects the status of the LCU reservation. The default is `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticloadbalancingv2_load_balancer#enable_capacity_reservation_provision_stabilize Elasticloadbalancingv2LoadBalancer#enable_capacity_reservation_provision_stabilize}

---

##### `enable_prefix_for_ipv6_source_nat`<sup>Optional</sup> <a name="enable_prefix_for_ipv6_source_nat" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.Initializer.parameter.enablePrefixForIpv6SourceNat"></a>

- *Type:* str

[Network Load Balancers with UDP listeners] Indicates whether to use an IPv6 prefix from each subnet for source NAT.

The IP address type must be `dualstack`. The default value is `off`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticloadbalancingv2_load_balancer#enable_prefix_for_ipv_6_source_nat Elasticloadbalancingv2LoadBalancer#enable_prefix_for_ipv_6_source_nat}

---

##### `enforce_security_group_inbound_rules_on_private_link_traffic`<sup>Optional</sup> <a name="enforce_security_group_inbound_rules_on_private_link_traffic" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.Initializer.parameter.enforceSecurityGroupInboundRulesOnPrivateLinkTraffic"></a>

- *Type:* str

Indicates whether to evaluate inbound security group rules for traffic sent to a Network Load Balancer through privatelink.

The default is `on`.
You can't configure this property on a Network Load Balancer unless you associated a security group with the load balancer when you created it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticloadbalancingv2_load_balancer#enforce_security_group_inbound_rules_on_private_link_traffic Elasticloadbalancingv2LoadBalancer#enforce_security_group_inbound_rules_on_private_link_traffic}

---

##### `ip_address_type`<sup>Optional</sup> <a name="ip_address_type" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.Initializer.parameter.ipAddressType"></a>

- *Type:* str

The IP address type.

Internal load balancers must use `ipv4`.
[Application Load Balancers] The possible values are `ipv4` (IPv4 addresses), `dualstack` (IPv4 and IPv6 addresses), and `dualstack-without-public-ipv4` (public IPv6 addresses and private IPv4 and IPv6 addresses).
Application Load Balancer authentication supports IPv4 addresses only when connecting to an Identity Provider (IdP) or Amazon Cognito endpoint. Without a public IPv4 address the load balancer can't complete the authentication process, resulting in HTTP 500 errors.
[Network Load Balancers and Gateway Load Balancers] The possible values are `ipv4` (IPv4 addresses) and `dualstack` (IPv4 and IPv6 addresses).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticloadbalancingv2_load_balancer#ip_address_type Elasticloadbalancingv2LoadBalancer#ip_address_type}

---

##### `ipv4_ipam_pool_id`<sup>Optional</sup> <a name="ipv4_ipam_pool_id" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.Initializer.parameter.ipv4IpamPoolId"></a>

- *Type:* str

The ID of the IPv4 IPAM pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticloadbalancingv2_load_balancer#ipv_4_ipam_pool_id Elasticloadbalancingv2LoadBalancer#ipv_4_ipam_pool_id}

---

##### `load_balancer_attributes`<sup>Optional</sup> <a name="load_balancer_attributes" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.Initializer.parameter.loadBalancerAttributes"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributes">Elasticloadbalancingv2LoadBalancerLoadBalancerAttributes</a>]

The load balancer attributes. Attributes that you do not modify retain their current values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticloadbalancingv2_load_balancer#load_balancer_attributes Elasticloadbalancingv2LoadBalancer#load_balancer_attributes}

---

##### `minimum_load_balancer_capacity`<sup>Optional</sup> <a name="minimum_load_balancer_capacity" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.Initializer.parameter.minimumLoadBalancerCapacity"></a>

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacity">Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacity</a>

The minimum capacity for a load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticloadbalancingv2_load_balancer#minimum_load_balancer_capacity Elasticloadbalancingv2LoadBalancer#minimum_load_balancer_capacity}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.Initializer.parameter.name"></a>

- *Type:* str

The name of the load balancer.

This name must be unique per region per account, can have a maximum of 32 characters, must contain only alphanumeric characters or hyphens, must not begin or end with a hyphen, and must not begin with "internal-".
If you don't specify a name, AWS CloudFormation generates a unique physical ID for the load balancer. If you specify a name, you cannot perform updates that require replacement of this resource, but you can perform other updates. To replace the resource, specify a new name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticloadbalancingv2_load_balancer#name Elasticloadbalancingv2LoadBalancer#name}

---

##### `scheme`<sup>Optional</sup> <a name="scheme" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.Initializer.parameter.scheme"></a>

- *Type:* str

The nodes of an Internet-facing load balancer have public IP addresses.

The DNS name of an Internet-facing load balancer is publicly resolvable to the public IP addresses of the nodes. Therefore, Internet-facing load balancers can route requests from clients over the internet.
The nodes of an internal load balancer have only private IP addresses. The DNS name of an internal load balancer is publicly resolvable to the private IP addresses of the nodes. Therefore, internal load balancers can route requests only from clients with access to the VPC for the load balancer.
The default is an Internet-facing load balancer.
You can't specify a scheme for a Gateway Load Balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticloadbalancingv2_load_balancer#scheme Elasticloadbalancingv2LoadBalancer#scheme}

---

##### `security_groups`<sup>Optional</sup> <a name="security_groups" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.Initializer.parameter.securityGroups"></a>

- *Type:* typing.List[str]

[Application Load Balancers and Network Load Balancers] The IDs of the security groups for the load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticloadbalancingv2_load_balancer#security_groups Elasticloadbalancingv2LoadBalancer#security_groups}

---

##### `subnet_mappings`<sup>Optional</sup> <a name="subnet_mappings" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.Initializer.parameter.subnetMappings"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappings">Elasticloadbalancingv2LoadBalancerSubnetMappings</a>]

The IDs of the subnets.

You can specify only one subnet per Availability Zone. You must specify either subnets or subnet mappings, but not both.
[Application Load Balancers] You must specify subnets from at least two Availability Zones. You can't specify Elastic IP addresses for your subnets.
[Application Load Balancers on Outposts] You must specify one Outpost subnet.
[Application Load Balancers on Local Zones] You can specify subnets from one or more Local Zones.
[Network Load Balancers] You can specify subnets from one or more Availability Zones. You can specify one Elastic IP address per subnet if you need static IP addresses for your internet-facing load balancer. For internal load balancers, you can specify one private IP address per subnet from the IPv4 range of the subnet. For internet-facing load balancer, you can specify one IPv6 address per subnet.
[Gateway Load Balancers] You can specify subnets from one or more Availability Zones. You can't specify Elastic IP addresses for your subnets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticloadbalancingv2_load_balancer#subnet_mappings Elasticloadbalancingv2LoadBalancer#subnet_mappings}

---

##### `subnets`<sup>Optional</sup> <a name="subnets" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.Initializer.parameter.subnets"></a>

- *Type:* typing.List[str]

The IDs of the subnets.

You can specify only one subnet per Availability Zone. You must specify either subnets or subnet mappings, but not both. To specify an Elastic IP address, specify subnet mappings instead of subnets.
[Application Load Balancers] You must specify subnets from at least two Availability Zones.
[Application Load Balancers on Outposts] You must specify one Outpost subnet.
[Application Load Balancers on Local Zones] You can specify subnets from one or more Local Zones.
[Network Load Balancers and Gateway Load Balancers] You can specify subnets from one or more Availability Zones.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticloadbalancingv2_load_balancer#subnets Elasticloadbalancingv2LoadBalancer#subnets}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTags">Elasticloadbalancingv2LoadBalancerTags</a>]

The tags to assign to the load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticloadbalancingv2_load_balancer#tags Elasticloadbalancingv2LoadBalancer#tags}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.Initializer.parameter.type"></a>

- *Type:* str

The type of load balancer. The default is ``application``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticloadbalancingv2_load_balancer#type Elasticloadbalancingv2LoadBalancer#type}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.putLoadBalancerAttributes">put_load_balancer_attributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.putMinimumLoadBalancerCapacity">put_minimum_load_balancer_capacity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.putSubnetMappings">put_subnet_mappings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.resetEnableCapacityReservationProvisionStabilize">reset_enable_capacity_reservation_provision_stabilize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.resetEnablePrefixForIpv6SourceNat">reset_enable_prefix_for_ipv6_source_nat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.resetEnforceSecurityGroupInboundRulesOnPrivateLinkTraffic">reset_enforce_security_group_inbound_rules_on_private_link_traffic</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.resetIpAddressType">reset_ip_address_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.resetIpv4IpamPoolId">reset_ipv4_ipam_pool_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.resetLoadBalancerAttributes">reset_load_balancer_attributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.resetMinimumLoadBalancerCapacity">reset_minimum_load_balancer_capacity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.resetScheme">reset_scheme</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.resetSecurityGroups">reset_security_groups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.resetSubnetMappings">reset_subnet_mappings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.resetSubnets">reset_subnets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.resetType">reset_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_load_balancer_attributes` <a name="put_load_balancer_attributes" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.putLoadBalancerAttributes"></a>

```python
def put_load_balancer_attributes(
  value: IResolvable | typing.List[Elasticloadbalancingv2LoadBalancerLoadBalancerAttributes]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.putLoadBalancerAttributes.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributes">Elasticloadbalancingv2LoadBalancerLoadBalancerAttributes</a>]

---

##### `put_minimum_load_balancer_capacity` <a name="put_minimum_load_balancer_capacity" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.putMinimumLoadBalancerCapacity"></a>

```python
def put_minimum_load_balancer_capacity(
  capacity_units: typing.Union[int, float] = None
) -> None
```

###### `capacity_units`<sup>Optional</sup> <a name="capacity_units" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.putMinimumLoadBalancerCapacity.parameter.capacityUnits"></a>

- *Type:* typing.Union[int, float]

The number of capacity units.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticloadbalancingv2_load_balancer#capacity_units Elasticloadbalancingv2LoadBalancer#capacity_units}

---

##### `put_subnet_mappings` <a name="put_subnet_mappings" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.putSubnetMappings"></a>

```python
def put_subnet_mappings(
  value: IResolvable | typing.List[Elasticloadbalancingv2LoadBalancerSubnetMappings]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.putSubnetMappings.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappings">Elasticloadbalancingv2LoadBalancerSubnetMappings</a>]

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[Elasticloadbalancingv2LoadBalancerTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTags">Elasticloadbalancingv2LoadBalancerTags</a>]

---

##### `reset_enable_capacity_reservation_provision_stabilize` <a name="reset_enable_capacity_reservation_provision_stabilize" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.resetEnableCapacityReservationProvisionStabilize"></a>

```python
def reset_enable_capacity_reservation_provision_stabilize() -> None
```

##### `reset_enable_prefix_for_ipv6_source_nat` <a name="reset_enable_prefix_for_ipv6_source_nat" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.resetEnablePrefixForIpv6SourceNat"></a>

```python
def reset_enable_prefix_for_ipv6_source_nat() -> None
```

##### `reset_enforce_security_group_inbound_rules_on_private_link_traffic` <a name="reset_enforce_security_group_inbound_rules_on_private_link_traffic" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.resetEnforceSecurityGroupInboundRulesOnPrivateLinkTraffic"></a>

```python
def reset_enforce_security_group_inbound_rules_on_private_link_traffic() -> None
```

##### `reset_ip_address_type` <a name="reset_ip_address_type" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.resetIpAddressType"></a>

```python
def reset_ip_address_type() -> None
```

##### `reset_ipv4_ipam_pool_id` <a name="reset_ipv4_ipam_pool_id" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.resetIpv4IpamPoolId"></a>

```python
def reset_ipv4_ipam_pool_id() -> None
```

##### `reset_load_balancer_attributes` <a name="reset_load_balancer_attributes" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.resetLoadBalancerAttributes"></a>

```python
def reset_load_balancer_attributes() -> None
```

##### `reset_minimum_load_balancer_capacity` <a name="reset_minimum_load_balancer_capacity" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.resetMinimumLoadBalancerCapacity"></a>

```python
def reset_minimum_load_balancer_capacity() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_scheme` <a name="reset_scheme" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.resetScheme"></a>

```python
def reset_scheme() -> None
```

##### `reset_security_groups` <a name="reset_security_groups" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.resetSecurityGroups"></a>

```python
def reset_security_groups() -> None
```

##### `reset_subnet_mappings` <a name="reset_subnet_mappings" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.resetSubnetMappings"></a>

```python
def reset_subnet_mappings() -> None
```

##### `reset_subnets` <a name="reset_subnets" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.resetSubnets"></a>

```python
def reset_subnets() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.resetType"></a>

```python
def reset_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a Elasticloadbalancingv2LoadBalancer resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.isConstruct"></a>

```python
from cdktn_provider_awscc import elasticloadbalancingv2_load_balancer

elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.isTerraformElement"></a>

```python
from cdktn_provider_awscc import elasticloadbalancingv2_load_balancer

elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.isTerraformResource"></a>

```python
from cdktn_provider_awscc import elasticloadbalancingv2_load_balancer

elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import elasticloadbalancingv2_load_balancer

elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a Elasticloadbalancingv2LoadBalancer resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Elasticloadbalancingv2LoadBalancer to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Elasticloadbalancingv2LoadBalancer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticloadbalancingv2_load_balancer#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Elasticloadbalancingv2LoadBalancer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.canonicalHostedZoneId">canonical_hosted_zone_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.dnsName">dns_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.loadBalancerArn">load_balancer_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.loadBalancerAttributes">load_balancer_attributes</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesList">Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.loadBalancerFullName">load_balancer_full_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.loadBalancerName">load_balancer_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.minimumLoadBalancerCapacity">minimum_load_balancer_capacity</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference">Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.subnetMappings">subnet_mappings</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsList">Elasticloadbalancingv2LoadBalancerSubnetMappingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsList">Elasticloadbalancingv2LoadBalancerTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.enableCapacityReservationProvisionStabilizeInput">enable_capacity_reservation_provision_stabilize_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.enablePrefixForIpv6SourceNatInput">enable_prefix_for_ipv6_source_nat_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.enforceSecurityGroupInboundRulesOnPrivateLinkTrafficInput">enforce_security_group_inbound_rules_on_private_link_traffic_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.ipAddressTypeInput">ip_address_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.ipv4IpamPoolIdInput">ipv4_ipam_pool_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.loadBalancerAttributesInput">load_balancer_attributes_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributes">Elasticloadbalancingv2LoadBalancerLoadBalancerAttributes</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.minimumLoadBalancerCapacityInput">minimum_load_balancer_capacity_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacity">Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.schemeInput">scheme_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.securityGroupsInput">security_groups_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.subnetMappingsInput">subnet_mappings_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappings">Elasticloadbalancingv2LoadBalancerSubnetMappings</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.subnetsInput">subnets_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTags">Elasticloadbalancingv2LoadBalancerTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.enableCapacityReservationProvisionStabilize">enable_capacity_reservation_provision_stabilize</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.enablePrefixForIpv6SourceNat">enable_prefix_for_ipv6_source_nat</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.enforceSecurityGroupInboundRulesOnPrivateLinkTraffic">enforce_security_group_inbound_rules_on_private_link_traffic</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.ipAddressType">ip_address_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.ipv4IpamPoolId">ipv4_ipam_pool_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.scheme">scheme</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.securityGroups">security_groups</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.subnets">subnets</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.type">type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `canonical_hosted_zone_id`<sup>Required</sup> <a name="canonical_hosted_zone_id" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.canonicalHostedZoneId"></a>

```python
canonical_hosted_zone_id: str
```

- *Type:* str

---

##### `dns_name`<sup>Required</sup> <a name="dns_name" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.dnsName"></a>

```python
dns_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `load_balancer_arn`<sup>Required</sup> <a name="load_balancer_arn" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.loadBalancerArn"></a>

```python
load_balancer_arn: str
```

- *Type:* str

---

##### `load_balancer_attributes`<sup>Required</sup> <a name="load_balancer_attributes" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.loadBalancerAttributes"></a>

```python
load_balancer_attributes: Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesList
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesList">Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesList</a>

---

##### `load_balancer_full_name`<sup>Required</sup> <a name="load_balancer_full_name" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.loadBalancerFullName"></a>

```python
load_balancer_full_name: str
```

- *Type:* str

---

##### `load_balancer_name`<sup>Required</sup> <a name="load_balancer_name" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.loadBalancerName"></a>

```python
load_balancer_name: str
```

- *Type:* str

---

##### `minimum_load_balancer_capacity`<sup>Required</sup> <a name="minimum_load_balancer_capacity" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.minimumLoadBalancerCapacity"></a>

```python
minimum_load_balancer_capacity: Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference">Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference</a>

---

##### `subnet_mappings`<sup>Required</sup> <a name="subnet_mappings" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.subnetMappings"></a>

```python
subnet_mappings: Elasticloadbalancingv2LoadBalancerSubnetMappingsList
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsList">Elasticloadbalancingv2LoadBalancerSubnetMappingsList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.tags"></a>

```python
tags: Elasticloadbalancingv2LoadBalancerTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsList">Elasticloadbalancingv2LoadBalancerTagsList</a>

---

##### `enable_capacity_reservation_provision_stabilize_input`<sup>Optional</sup> <a name="enable_capacity_reservation_provision_stabilize_input" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.enableCapacityReservationProvisionStabilizeInput"></a>

```python
enable_capacity_reservation_provision_stabilize_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enable_prefix_for_ipv6_source_nat_input`<sup>Optional</sup> <a name="enable_prefix_for_ipv6_source_nat_input" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.enablePrefixForIpv6SourceNatInput"></a>

```python
enable_prefix_for_ipv6_source_nat_input: str
```

- *Type:* str

---

##### `enforce_security_group_inbound_rules_on_private_link_traffic_input`<sup>Optional</sup> <a name="enforce_security_group_inbound_rules_on_private_link_traffic_input" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.enforceSecurityGroupInboundRulesOnPrivateLinkTrafficInput"></a>

```python
enforce_security_group_inbound_rules_on_private_link_traffic_input: str
```

- *Type:* str

---

##### `ip_address_type_input`<sup>Optional</sup> <a name="ip_address_type_input" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.ipAddressTypeInput"></a>

```python
ip_address_type_input: str
```

- *Type:* str

---

##### `ipv4_ipam_pool_id_input`<sup>Optional</sup> <a name="ipv4_ipam_pool_id_input" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.ipv4IpamPoolIdInput"></a>

```python
ipv4_ipam_pool_id_input: str
```

- *Type:* str

---

##### `load_balancer_attributes_input`<sup>Optional</sup> <a name="load_balancer_attributes_input" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.loadBalancerAttributesInput"></a>

```python
load_balancer_attributes_input: IResolvable | typing.List[Elasticloadbalancingv2LoadBalancerLoadBalancerAttributes]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributes">Elasticloadbalancingv2LoadBalancerLoadBalancerAttributes</a>]

---

##### `minimum_load_balancer_capacity_input`<sup>Optional</sup> <a name="minimum_load_balancer_capacity_input" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.minimumLoadBalancerCapacityInput"></a>

```python
minimum_load_balancer_capacity_input: IResolvable | Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacity
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacity">Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacity</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `scheme_input`<sup>Optional</sup> <a name="scheme_input" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.schemeInput"></a>

```python
scheme_input: str
```

- *Type:* str

---

##### `security_groups_input`<sup>Optional</sup> <a name="security_groups_input" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.securityGroupsInput"></a>

```python
security_groups_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_mappings_input`<sup>Optional</sup> <a name="subnet_mappings_input" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.subnetMappingsInput"></a>

```python
subnet_mappings_input: IResolvable | typing.List[Elasticloadbalancingv2LoadBalancerSubnetMappings]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappings">Elasticloadbalancingv2LoadBalancerSubnetMappings</a>]

---

##### `subnets_input`<sup>Optional</sup> <a name="subnets_input" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.subnetsInput"></a>

```python
subnets_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[Elasticloadbalancingv2LoadBalancerTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTags">Elasticloadbalancingv2LoadBalancerTags</a>]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `enable_capacity_reservation_provision_stabilize`<sup>Required</sup> <a name="enable_capacity_reservation_provision_stabilize" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.enableCapacityReservationProvisionStabilize"></a>

```python
enable_capacity_reservation_provision_stabilize: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enable_prefix_for_ipv6_source_nat`<sup>Required</sup> <a name="enable_prefix_for_ipv6_source_nat" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.enablePrefixForIpv6SourceNat"></a>

```python
enable_prefix_for_ipv6_source_nat: str
```

- *Type:* str

---

##### `enforce_security_group_inbound_rules_on_private_link_traffic`<sup>Required</sup> <a name="enforce_security_group_inbound_rules_on_private_link_traffic" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.enforceSecurityGroupInboundRulesOnPrivateLinkTraffic"></a>

```python
enforce_security_group_inbound_rules_on_private_link_traffic: str
```

- *Type:* str

---

##### `ip_address_type`<sup>Required</sup> <a name="ip_address_type" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.ipAddressType"></a>

```python
ip_address_type: str
```

- *Type:* str

---

##### `ipv4_ipam_pool_id`<sup>Required</sup> <a name="ipv4_ipam_pool_id" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.ipv4IpamPoolId"></a>

```python
ipv4_ipam_pool_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `scheme`<sup>Required</sup> <a name="scheme" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.scheme"></a>

```python
scheme: str
```

- *Type:* str

---

##### `security_groups`<sup>Required</sup> <a name="security_groups" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.securityGroups"></a>

```python
security_groups: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.subnets"></a>

```python
subnets: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.type"></a>

```python
type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### Elasticloadbalancingv2LoadBalancerConfig <a name="Elasticloadbalancingv2LoadBalancerConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerConfig.Initializer"></a>

```python
from cdktn_provider_awscc import elasticloadbalancingv2_load_balancer

elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  enable_capacity_reservation_provision_stabilize: bool | IResolvable = None,
  enable_prefix_for_ipv6_source_nat: str = None,
  enforce_security_group_inbound_rules_on_private_link_traffic: str = None,
  ip_address_type: str = None,
  ipv4_ipam_pool_id: str = None,
  load_balancer_attributes: IResolvable | typing.List[Elasticloadbalancingv2LoadBalancerLoadBalancerAttributes] = None,
  minimum_load_balancer_capacity: Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacity = None,
  name: str = None,
  scheme: str = None,
  security_groups: typing.List[str] = None,
  subnet_mappings: IResolvable | typing.List[Elasticloadbalancingv2LoadBalancerSubnetMappings] = None,
  subnets: typing.List[str] = None,
  tags: IResolvable | typing.List[Elasticloadbalancingv2LoadBalancerTags] = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerConfig.property.enableCapacityReservationProvisionStabilize">enable_capacity_reservation_provision_stabilize</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates whether to enable stabilization when creating or updating an LCU reservation. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerConfig.property.enablePrefixForIpv6SourceNat">enable_prefix_for_ipv6_source_nat</a></code> | <code>str</code> | [Network Load Balancers with UDP listeners] Indicates whether to use an IPv6 prefix from each subnet for source NAT. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerConfig.property.enforceSecurityGroupInboundRulesOnPrivateLinkTraffic">enforce_security_group_inbound_rules_on_private_link_traffic</a></code> | <code>str</code> | Indicates whether to evaluate inbound security group rules for traffic sent to a Network Load Balancer through privatelink. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerConfig.property.ipAddressType">ip_address_type</a></code> | <code>str</code> | The IP address type. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerConfig.property.ipv4IpamPoolId">ipv4_ipam_pool_id</a></code> | <code>str</code> | The ID of the IPv4 IPAM pool. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerConfig.property.loadBalancerAttributes">load_balancer_attributes</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributes">Elasticloadbalancingv2LoadBalancerLoadBalancerAttributes</a>]</code> | The load balancer attributes. Attributes that you do not modify retain their current values. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerConfig.property.minimumLoadBalancerCapacity">minimum_load_balancer_capacity</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacity">Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacity</a></code> | The minimum capacity for a load balancer. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerConfig.property.name">name</a></code> | <code>str</code> | The name of the load balancer. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerConfig.property.scheme">scheme</a></code> | <code>str</code> | The nodes of an Internet-facing load balancer have public IP addresses. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerConfig.property.securityGroups">security_groups</a></code> | <code>typing.List[str]</code> | [Application Load Balancers and Network Load Balancers] The IDs of the security groups for the load balancer. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerConfig.property.subnetMappings">subnet_mappings</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappings">Elasticloadbalancingv2LoadBalancerSubnetMappings</a>]</code> | The IDs of the subnets. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerConfig.property.subnets">subnets</a></code> | <code>typing.List[str]</code> | The IDs of the subnets. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTags">Elasticloadbalancingv2LoadBalancerTags</a>]</code> | The tags to assign to the load balancer. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerConfig.property.type">type</a></code> | <code>str</code> | The type of load balancer. The default is ``application``. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `enable_capacity_reservation_provision_stabilize`<sup>Optional</sup> <a name="enable_capacity_reservation_provision_stabilize" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerConfig.property.enableCapacityReservationProvisionStabilize"></a>

```python
enable_capacity_reservation_provision_stabilize: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Indicates whether to enable stabilization when creating or updating an LCU reservation.

This ensures that the final stack status reflects the status of the LCU reservation. The default is `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticloadbalancingv2_load_balancer#enable_capacity_reservation_provision_stabilize Elasticloadbalancingv2LoadBalancer#enable_capacity_reservation_provision_stabilize}

---

##### `enable_prefix_for_ipv6_source_nat`<sup>Optional</sup> <a name="enable_prefix_for_ipv6_source_nat" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerConfig.property.enablePrefixForIpv6SourceNat"></a>

```python
enable_prefix_for_ipv6_source_nat: str
```

- *Type:* str

[Network Load Balancers with UDP listeners] Indicates whether to use an IPv6 prefix from each subnet for source NAT.

The IP address type must be `dualstack`. The default value is `off`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticloadbalancingv2_load_balancer#enable_prefix_for_ipv_6_source_nat Elasticloadbalancingv2LoadBalancer#enable_prefix_for_ipv_6_source_nat}

---

##### `enforce_security_group_inbound_rules_on_private_link_traffic`<sup>Optional</sup> <a name="enforce_security_group_inbound_rules_on_private_link_traffic" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerConfig.property.enforceSecurityGroupInboundRulesOnPrivateLinkTraffic"></a>

```python
enforce_security_group_inbound_rules_on_private_link_traffic: str
```

- *Type:* str

Indicates whether to evaluate inbound security group rules for traffic sent to a Network Load Balancer through privatelink.

The default is `on`.
You can't configure this property on a Network Load Balancer unless you associated a security group with the load balancer when you created it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticloadbalancingv2_load_balancer#enforce_security_group_inbound_rules_on_private_link_traffic Elasticloadbalancingv2LoadBalancer#enforce_security_group_inbound_rules_on_private_link_traffic}

---

##### `ip_address_type`<sup>Optional</sup> <a name="ip_address_type" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerConfig.property.ipAddressType"></a>

```python
ip_address_type: str
```

- *Type:* str

The IP address type.

Internal load balancers must use `ipv4`.
[Application Load Balancers] The possible values are `ipv4` (IPv4 addresses), `dualstack` (IPv4 and IPv6 addresses), and `dualstack-without-public-ipv4` (public IPv6 addresses and private IPv4 and IPv6 addresses).
Application Load Balancer authentication supports IPv4 addresses only when connecting to an Identity Provider (IdP) or Amazon Cognito endpoint. Without a public IPv4 address the load balancer can't complete the authentication process, resulting in HTTP 500 errors.
[Network Load Balancers and Gateway Load Balancers] The possible values are `ipv4` (IPv4 addresses) and `dualstack` (IPv4 and IPv6 addresses).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticloadbalancingv2_load_balancer#ip_address_type Elasticloadbalancingv2LoadBalancer#ip_address_type}

---

##### `ipv4_ipam_pool_id`<sup>Optional</sup> <a name="ipv4_ipam_pool_id" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerConfig.property.ipv4IpamPoolId"></a>

```python
ipv4_ipam_pool_id: str
```

- *Type:* str

The ID of the IPv4 IPAM pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticloadbalancingv2_load_balancer#ipv_4_ipam_pool_id Elasticloadbalancingv2LoadBalancer#ipv_4_ipam_pool_id}

---

##### `load_balancer_attributes`<sup>Optional</sup> <a name="load_balancer_attributes" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerConfig.property.loadBalancerAttributes"></a>

```python
load_balancer_attributes: IResolvable | typing.List[Elasticloadbalancingv2LoadBalancerLoadBalancerAttributes]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributes">Elasticloadbalancingv2LoadBalancerLoadBalancerAttributes</a>]

The load balancer attributes. Attributes that you do not modify retain their current values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticloadbalancingv2_load_balancer#load_balancer_attributes Elasticloadbalancingv2LoadBalancer#load_balancer_attributes}

---

##### `minimum_load_balancer_capacity`<sup>Optional</sup> <a name="minimum_load_balancer_capacity" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerConfig.property.minimumLoadBalancerCapacity"></a>

```python
minimum_load_balancer_capacity: Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacity
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacity">Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacity</a>

The minimum capacity for a load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticloadbalancingv2_load_balancer#minimum_load_balancer_capacity Elasticloadbalancingv2LoadBalancer#minimum_load_balancer_capacity}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the load balancer.

This name must be unique per region per account, can have a maximum of 32 characters, must contain only alphanumeric characters or hyphens, must not begin or end with a hyphen, and must not begin with "internal-".
If you don't specify a name, AWS CloudFormation generates a unique physical ID for the load balancer. If you specify a name, you cannot perform updates that require replacement of this resource, but you can perform other updates. To replace the resource, specify a new name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticloadbalancingv2_load_balancer#name Elasticloadbalancingv2LoadBalancer#name}

---

##### `scheme`<sup>Optional</sup> <a name="scheme" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerConfig.property.scheme"></a>

```python
scheme: str
```

- *Type:* str

The nodes of an Internet-facing load balancer have public IP addresses.

The DNS name of an Internet-facing load balancer is publicly resolvable to the public IP addresses of the nodes. Therefore, Internet-facing load balancers can route requests from clients over the internet.
The nodes of an internal load balancer have only private IP addresses. The DNS name of an internal load balancer is publicly resolvable to the private IP addresses of the nodes. Therefore, internal load balancers can route requests only from clients with access to the VPC for the load balancer.
The default is an Internet-facing load balancer.
You can't specify a scheme for a Gateway Load Balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticloadbalancingv2_load_balancer#scheme Elasticloadbalancingv2LoadBalancer#scheme}

---

##### `security_groups`<sup>Optional</sup> <a name="security_groups" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerConfig.property.securityGroups"></a>

```python
security_groups: typing.List[str]
```

- *Type:* typing.List[str]

[Application Load Balancers and Network Load Balancers] The IDs of the security groups for the load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticloadbalancingv2_load_balancer#security_groups Elasticloadbalancingv2LoadBalancer#security_groups}

---

##### `subnet_mappings`<sup>Optional</sup> <a name="subnet_mappings" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerConfig.property.subnetMappings"></a>

```python
subnet_mappings: IResolvable | typing.List[Elasticloadbalancingv2LoadBalancerSubnetMappings]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappings">Elasticloadbalancingv2LoadBalancerSubnetMappings</a>]

The IDs of the subnets.

You can specify only one subnet per Availability Zone. You must specify either subnets or subnet mappings, but not both.
[Application Load Balancers] You must specify subnets from at least two Availability Zones. You can't specify Elastic IP addresses for your subnets.
[Application Load Balancers on Outposts] You must specify one Outpost subnet.
[Application Load Balancers on Local Zones] You can specify subnets from one or more Local Zones.
[Network Load Balancers] You can specify subnets from one or more Availability Zones. You can specify one Elastic IP address per subnet if you need static IP addresses for your internet-facing load balancer. For internal load balancers, you can specify one private IP address per subnet from the IPv4 range of the subnet. For internet-facing load balancer, you can specify one IPv6 address per subnet.
[Gateway Load Balancers] You can specify subnets from one or more Availability Zones. You can't specify Elastic IP addresses for your subnets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticloadbalancingv2_load_balancer#subnet_mappings Elasticloadbalancingv2LoadBalancer#subnet_mappings}

---

##### `subnets`<sup>Optional</sup> <a name="subnets" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerConfig.property.subnets"></a>

```python
subnets: typing.List[str]
```

- *Type:* typing.List[str]

The IDs of the subnets.

You can specify only one subnet per Availability Zone. You must specify either subnets or subnet mappings, but not both. To specify an Elastic IP address, specify subnet mappings instead of subnets.
[Application Load Balancers] You must specify subnets from at least two Availability Zones.
[Application Load Balancers on Outposts] You must specify one Outpost subnet.
[Application Load Balancers on Local Zones] You can specify subnets from one or more Local Zones.
[Network Load Balancers and Gateway Load Balancers] You can specify subnets from one or more Availability Zones.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticloadbalancingv2_load_balancer#subnets Elasticloadbalancingv2LoadBalancer#subnets}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[Elasticloadbalancingv2LoadBalancerTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTags">Elasticloadbalancingv2LoadBalancerTags</a>]

The tags to assign to the load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticloadbalancingv2_load_balancer#tags Elasticloadbalancingv2LoadBalancer#tags}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerConfig.property.type"></a>

```python
type: str
```

- *Type:* str

The type of load balancer. The default is ``application``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticloadbalancingv2_load_balancer#type Elasticloadbalancingv2LoadBalancer#type}

---

### Elasticloadbalancingv2LoadBalancerLoadBalancerAttributes <a name="Elasticloadbalancingv2LoadBalancerLoadBalancerAttributes" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributes.Initializer"></a>

```python
from cdktn_provider_awscc import elasticloadbalancingv2_load_balancer

elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributes(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributes.property.key">key</a></code> | <code>str</code> | The name of the attribute. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributes.property.value">value</a></code> | <code>str</code> | The value of the attribute. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributes.property.key"></a>

```python
key: str
```

- *Type:* str

The name of the attribute.

The following attributes are supported by all load balancers:

* `deletion_protection.enabled` - Indicates whether deletion protection is enabled. The value is `true` or `false`. The default is `false`.
* `load_balancing.cross_zone.enabled` - Indicates whether cross-zone load balancing is enabled. The possible values are `true` and `false`. The default for Network Load Balancers and Gateway Load Balancers is `false`. The default for Application Load Balancers is `true`, and can't be changed.

The following attributes are supported by both Application Load Balancers and Network Load Balancers:

* `access_logs.s3.enabled` - Indicates whether access logs are enabled. The value is `true` or `false`. The default is `false`.
* `access_logs.s3.bucket` - The name of the S3 bucket for the access logs. This attribute is required if access logs are enabled. The bucket must exist in the same region as the load balancer and have a bucket policy that grants Elastic Load Balancing permissions to write to the bucket.
* `access_logs.s3.prefix` - The prefix for the location in the S3 bucket for the access logs.
* `ipv6.deny_all_igw_traffic` - Blocks internet gateway (IGW) access to the load balancer. It is set to `false` for internet-facing load balancers and `true` for internal load balancers, preventing unintended access to your internal load balancer through an internet gateway.
* `zonal_shift.config.enabled` - Indicates whether zonal shift is enabled. The possible values are `true` and `false`. The default is `false`.

The following attributes are supported by only Application Load Balancers:

* `idle_timeout.timeout_seconds` - The idle timeout value, in seconds. The valid range is 1-4000 seconds. The default is 60 seconds.
* `client_keep_alive.seconds` - The client keep alive value, in seconds. The valid range is 60-604800 seconds. The default is 3600 seconds.
* `connection_logs.s3.enabled` - Indicates whether connection logs are enabled. The value is `true` or `false`. The default is `false`.
* `connection_logs.s3.bucket` - The name of the S3 bucket for the connection logs. This attribute is required if connection logs are enabled. The bucket must exist in the same region as the load balancer and have a bucket policy that grants Elastic Load Balancing permissions to write to the bucket.
* `connection_logs.s3.prefix` - The prefix for the location in the S3 bucket for the connection logs.
* `health_check_logs.s3.enabled` - Indicates whether health check logs are enabled. The value is `true` or `false`. The default is `false`.
* `health_check_logs.s3.bucket` - The name of the S3 bucket for the health check logs. This attribute is required if health check logs are enabled. The bucket must exist in the same region as the load balancer and have a bucket policy that grants Elastic Load Balancing permissions to write to the bucket.
* `health_check_logs.s3.prefix` - The prefix for the location in the S3 bucket for the health check logs.
* `routing.http.desync_mitigation_mode` - Determines how the load balancer handles requests that might pose a security risk to your application. The possible values are `monitor`, `defensive`, and `strictest`. The default is `defensive`.
* `routing.http.drop_invalid_header_fields.enabled` - Indicates whether HTTP headers with invalid header fields are removed by the load balancer (`true`) or routed to targets (`false`). The default is `false`.
* `routing.http.preserve_host_header.enabled` - Indicates whether the Application Load Balancer should preserve the `Host` header in the HTTP request and send it to the target without any change. The possible values are `true` and `false`. The default is `false`.
* `routing.http.x_amzn_tls_version_and_cipher_suite.enabled` - Indicates whether the two headers (`x-amzn-tls-version` and `x-amzn-tls-cipher-suite`), which contain information about the negotiated TLS version and cipher suite, are added to the client request before sending it to the target. The `x-amzn-tls-version` header has information about the TLS protocol version negotiated with the client, and the `x-amzn-tls-cipher-suite` header has information about the cipher suite negotiated with the client. Both headers are in OpenSSL format. The possible values for the attribute are `true` and `false`. The default is `false`.
* `routing.http.xff_client_port.enabled` - Indicates whether the `X-Forwarded-For` header should preserve the source port that the client used to connect to the load balancer. The possible values are `true` and `false`. The default is `false`.
* `routing.http.xff_header_processing.mode` - Enables you to modify, preserve, or remove the `X-Forwarded-For` header in the HTTP request before the Application Load Balancer sends the request to the target. The possible values are `append`, `preserve`, and `remove`. The default is `append`.
* If the value is `append`, the Application Load Balancer adds the client IP address (of the last hop) to the `X-Forwarded-For` header in the HTTP request before it sends it to targets.
* If the value is `preserve` the Application Load Balancer preserves the `X-Forwarded-For` header in the HTTP request, and sends it to targets without any change.
* If the value is `remove`, the Application Load Balancer removes the `X-Forwarded-For` header in the HTTP request before it sends it to targets.
* `routing.http2.enabled` - Indicates whether clients can connect to the load balancer using HTTP/2. If `true`, clients can connect using HTTP/2 or HTTP/1.1. However, all client requests are subject to the stricter HTTP/2 header validation rules. For example, message header names must contain only alphanumeric characters and hyphens. If `false`, clients must connect using HTTP/1.1. The default is `true`.
* `waf.fail_open.enabled` - Indicates whether to allow a WAF-enabled load balancer to route requests to targets if it is unable to forward the request to AWS WAF. The possible values are `true` and `false`. The default is `false`.

The following attributes are supported by only Network Load Balancers:

* `dns_record.client_routing_policy` - Indicates how traffic is distributed among the load balancer Availability Zones. The possible values are `availability_zone_affinity` with 100 percent zonal affinity, `partial_availability_zone_affinity` with 85 percent zonal affinity, and `any_availability_zone` with 0 percent zonal affinity.
* `secondary_ips.auto_assigned.per_subnet` - The number of secondary IP addresses to configure for your load balancer nodes. Use to address port allocation errors if you can't add targets. The valid range is 0 to 7. The default is 0. After you set this value, you can't decrease it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticloadbalancingv2_load_balancer#key Elasticloadbalancingv2LoadBalancer#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributes.property.value"></a>

```python
value: str
```

- *Type:* str

The value of the attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticloadbalancingv2_load_balancer#value Elasticloadbalancingv2LoadBalancer#value}

---

### Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacity <a name="Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacity" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacity.Initializer"></a>

```python
from cdktn_provider_awscc import elasticloadbalancingv2_load_balancer

elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacity(
  capacity_units: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacity.property.capacityUnits">capacity_units</a></code> | <code>typing.Union[int, float]</code> | The number of capacity units. |

---

##### `capacity_units`<sup>Optional</sup> <a name="capacity_units" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacity.property.capacityUnits"></a>

```python
capacity_units: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of capacity units.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticloadbalancingv2_load_balancer#capacity_units Elasticloadbalancingv2LoadBalancer#capacity_units}

---

### Elasticloadbalancingv2LoadBalancerSubnetMappings <a name="Elasticloadbalancingv2LoadBalancerSubnetMappings" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappings.Initializer"></a>

```python
from cdktn_provider_awscc import elasticloadbalancingv2_load_balancer

elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappings(
  allocation_id: str = None,
  i_pv6_address: str = None,
  private_i_pv4_address: str = None,
  source_nat_ipv6_prefix: str = None,
  subnet_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappings.property.allocationId">allocation_id</a></code> | <code>str</code> | [Network Load Balancers] The allocation ID of the Elastic IP address for an internet-facing load balancer. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappings.property.iPv6Address">i_pv6_address</a></code> | <code>str</code> | [Network Load Balancers] The IPv6 address. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappings.property.privateIPv4Address">private_i_pv4_address</a></code> | <code>str</code> | [Network Load Balancers] The private IPv4 address for an internal load balancer. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappings.property.sourceNatIpv6Prefix">source_nat_ipv6_prefix</a></code> | <code>str</code> | [Network Load Balancers with UDP listeners] The IPv6 prefix to use for source NAT. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappings.property.subnetId">subnet_id</a></code> | <code>str</code> | The ID of the subnet. |

---

##### `allocation_id`<sup>Optional</sup> <a name="allocation_id" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappings.property.allocationId"></a>

```python
allocation_id: str
```

- *Type:* str

[Network Load Balancers] The allocation ID of the Elastic IP address for an internet-facing load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticloadbalancingv2_load_balancer#allocation_id Elasticloadbalancingv2LoadBalancer#allocation_id}

---

##### `i_pv6_address`<sup>Optional</sup> <a name="i_pv6_address" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappings.property.iPv6Address"></a>

```python
i_pv6_address: str
```

- *Type:* str

[Network Load Balancers] The IPv6 address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticloadbalancingv2_load_balancer#i_pv_6_address Elasticloadbalancingv2LoadBalancer#i_pv_6_address}

---

##### `private_i_pv4_address`<sup>Optional</sup> <a name="private_i_pv4_address" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappings.property.privateIPv4Address"></a>

```python
private_i_pv4_address: str
```

- *Type:* str

[Network Load Balancers] The private IPv4 address for an internal load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticloadbalancingv2_load_balancer#private_i_pv_4_address Elasticloadbalancingv2LoadBalancer#private_i_pv_4_address}

---

##### `source_nat_ipv6_prefix`<sup>Optional</sup> <a name="source_nat_ipv6_prefix" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappings.property.sourceNatIpv6Prefix"></a>

```python
source_nat_ipv6_prefix: str
```

- *Type:* str

[Network Load Balancers with UDP listeners] The IPv6 prefix to use for source NAT.

Specify an IPv6 prefix (/80 netmask) from the subnet CIDR block or `auto_assigned` to use an IPv6 prefix selected at random from the subnet CIDR block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticloadbalancingv2_load_balancer#source_nat_ipv_6_prefix Elasticloadbalancingv2LoadBalancer#source_nat_ipv_6_prefix}

---

##### `subnet_id`<sup>Optional</sup> <a name="subnet_id" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappings.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

The ID of the subnet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticloadbalancingv2_load_balancer#subnet_id Elasticloadbalancingv2LoadBalancer#subnet_id}

---

### Elasticloadbalancingv2LoadBalancerTags <a name="Elasticloadbalancingv2LoadBalancerTags" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTags.Initializer"></a>

```python
from cdktn_provider_awscc import elasticloadbalancingv2_load_balancer

elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTags.property.key">key</a></code> | <code>str</code> | The key of the tag. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTags.property.value">value</a></code> | <code>str</code> | The value of the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticloadbalancingv2_load_balancer#key Elasticloadbalancingv2LoadBalancer#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticloadbalancingv2_load_balancer#value Elasticloadbalancingv2LoadBalancer#value}

---

## Classes <a name="Classes" id="Classes"></a>

### Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesList <a name="Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesList" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesList.Initializer"></a>

```python
from cdktn_provider_awscc import elasticloadbalancingv2_load_balancer

elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributes">Elasticloadbalancingv2LoadBalancerLoadBalancerAttributes</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[Elasticloadbalancingv2LoadBalancerLoadBalancerAttributes]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributes">Elasticloadbalancingv2LoadBalancerLoadBalancerAttributes</a>]

---


### Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference <a name="Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import elasticloadbalancingv2_load_balancer

elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributes">Elasticloadbalancingv2LoadBalancerLoadBalancerAttributes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Elasticloadbalancingv2LoadBalancerLoadBalancerAttributes
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributes">Elasticloadbalancingv2LoadBalancerLoadBalancerAttributes</a>

---


### Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference <a name="Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import elasticloadbalancingv2_load_balancer

elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.resetCapacityUnits">reset_capacity_units</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_capacity_units` <a name="reset_capacity_units" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.resetCapacityUnits"></a>

```python
def reset_capacity_units() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.property.capacityUnitsInput">capacity_units_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.property.capacityUnits">capacity_units</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacity">Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacity</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `capacity_units_input`<sup>Optional</sup> <a name="capacity_units_input" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.property.capacityUnitsInput"></a>

```python
capacity_units_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `capacity_units`<sup>Required</sup> <a name="capacity_units" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.property.capacityUnits"></a>

```python
capacity_units: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacity
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacity">Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacity</a>

---


### Elasticloadbalancingv2LoadBalancerSubnetMappingsList <a name="Elasticloadbalancingv2LoadBalancerSubnetMappingsList" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsList.Initializer"></a>

```python
from cdktn_provider_awscc import elasticloadbalancingv2_load_balancer

elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappings">Elasticloadbalancingv2LoadBalancerSubnetMappings</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[Elasticloadbalancingv2LoadBalancerSubnetMappings]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappings">Elasticloadbalancingv2LoadBalancerSubnetMappings</a>]

---


### Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference <a name="Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import elasticloadbalancingv2_load_balancer

elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.resetAllocationId">reset_allocation_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.resetIPv6Address">reset_i_pv6_address</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.resetPrivateIPv4Address">reset_private_i_pv4_address</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.resetSourceNatIpv6Prefix">reset_source_nat_ipv6_prefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.resetSubnetId">reset_subnet_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_allocation_id` <a name="reset_allocation_id" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.resetAllocationId"></a>

```python
def reset_allocation_id() -> None
```

##### `reset_i_pv6_address` <a name="reset_i_pv6_address" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.resetIPv6Address"></a>

```python
def reset_i_pv6_address() -> None
```

##### `reset_private_i_pv4_address` <a name="reset_private_i_pv4_address" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.resetPrivateIPv4Address"></a>

```python
def reset_private_i_pv4_address() -> None
```

##### `reset_source_nat_ipv6_prefix` <a name="reset_source_nat_ipv6_prefix" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.resetSourceNatIpv6Prefix"></a>

```python
def reset_source_nat_ipv6_prefix() -> None
```

##### `reset_subnet_id` <a name="reset_subnet_id" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.resetSubnetId"></a>

```python
def reset_subnet_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.property.allocationIdInput">allocation_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.property.iPv6AddressInput">i_pv6_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.property.privateIPv4AddressInput">private_i_pv4_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.property.sourceNatIpv6PrefixInput">source_nat_ipv6_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.property.subnetIdInput">subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.property.allocationId">allocation_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.property.iPv6Address">i_pv6_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.property.privateIPv4Address">private_i_pv4_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.property.sourceNatIpv6Prefix">source_nat_ipv6_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappings">Elasticloadbalancingv2LoadBalancerSubnetMappings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allocation_id_input`<sup>Optional</sup> <a name="allocation_id_input" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.property.allocationIdInput"></a>

```python
allocation_id_input: str
```

- *Type:* str

---

##### `i_pv6_address_input`<sup>Optional</sup> <a name="i_pv6_address_input" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.property.iPv6AddressInput"></a>

```python
i_pv6_address_input: str
```

- *Type:* str

---

##### `private_i_pv4_address_input`<sup>Optional</sup> <a name="private_i_pv4_address_input" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.property.privateIPv4AddressInput"></a>

```python
private_i_pv4_address_input: str
```

- *Type:* str

---

##### `source_nat_ipv6_prefix_input`<sup>Optional</sup> <a name="source_nat_ipv6_prefix_input" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.property.sourceNatIpv6PrefixInput"></a>

```python
source_nat_ipv6_prefix_input: str
```

- *Type:* str

---

##### `subnet_id_input`<sup>Optional</sup> <a name="subnet_id_input" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.property.subnetIdInput"></a>

```python
subnet_id_input: str
```

- *Type:* str

---

##### `allocation_id`<sup>Required</sup> <a name="allocation_id" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.property.allocationId"></a>

```python
allocation_id: str
```

- *Type:* str

---

##### `i_pv6_address`<sup>Required</sup> <a name="i_pv6_address" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.property.iPv6Address"></a>

```python
i_pv6_address: str
```

- *Type:* str

---

##### `private_i_pv4_address`<sup>Required</sup> <a name="private_i_pv4_address" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.property.privateIPv4Address"></a>

```python
private_i_pv4_address: str
```

- *Type:* str

---

##### `source_nat_ipv6_prefix`<sup>Required</sup> <a name="source_nat_ipv6_prefix" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.property.sourceNatIpv6Prefix"></a>

```python
source_nat_ipv6_prefix: str
```

- *Type:* str

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Elasticloadbalancingv2LoadBalancerSubnetMappings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappings">Elasticloadbalancingv2LoadBalancerSubnetMappings</a>

---


### Elasticloadbalancingv2LoadBalancerTagsList <a name="Elasticloadbalancingv2LoadBalancerTagsList" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import elasticloadbalancingv2_load_balancer

elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Elasticloadbalancingv2LoadBalancerTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTags">Elasticloadbalancingv2LoadBalancerTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[Elasticloadbalancingv2LoadBalancerTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTags">Elasticloadbalancingv2LoadBalancerTags</a>]

---


### Elasticloadbalancingv2LoadBalancerTagsOutputReference <a name="Elasticloadbalancingv2LoadBalancerTagsOutputReference" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import elasticloadbalancingv2_load_balancer

elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTags">Elasticloadbalancingv2LoadBalancerTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Elasticloadbalancingv2LoadBalancerTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTags">Elasticloadbalancingv2LoadBalancerTags</a>

---



