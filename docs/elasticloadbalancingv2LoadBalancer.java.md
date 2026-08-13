# `elasticloadbalancingv2LoadBalancer` Submodule <a name="`elasticloadbalancingv2LoadBalancer` Submodule" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Elasticloadbalancingv2LoadBalancer <a name="Elasticloadbalancingv2LoadBalancer" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_load_balancer awscc_elasticloadbalancingv2_load_balancer}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.Initializer"></a>

```java
import io.cdktn.providers.awscc.elasticloadbalancingv2_load_balancer.Elasticloadbalancingv2LoadBalancer;

Elasticloadbalancingv2LoadBalancer.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .enableCapacityReservationProvisionStabilize(java.lang.Boolean|IResolvable)
//  .enablePrefixForIpv6SourceNat(java.lang.String)
//  .enforceSecurityGroupInboundRulesOnPrivateLinkTraffic(java.lang.String)
//  .ipAddressType(java.lang.String)
//  .ipv4IpamPoolId(java.lang.String)
//  .loadBalancerAttributes(IResolvable|java.util.List<Elasticloadbalancingv2LoadBalancerLoadBalancerAttributes>)
//  .minimumLoadBalancerCapacity(Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacity)
//  .name(java.lang.String)
//  .scheme(java.lang.String)
//  .securityGroups(java.util.List<java.lang.String>)
//  .subnetMappings(IResolvable|java.util.List<Elasticloadbalancingv2LoadBalancerSubnetMappings>)
//  .subnets(java.util.List<java.lang.String>)
//  .tags(IResolvable|java.util.List<Elasticloadbalancingv2LoadBalancerTags>)
//  .type(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.Initializer.parameter.enableCapacityReservationProvisionStabilize">enableCapacityReservationProvisionStabilize</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Indicates whether to enable stabilization when creating or updating an LCU reservation. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.Initializer.parameter.enablePrefixForIpv6SourceNat">enablePrefixForIpv6SourceNat</a></code> | <code>java.lang.String</code> | [Network Load Balancers with UDP listeners] Indicates whether to use an IPv6 prefix from each subnet for source NAT. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.Initializer.parameter.enforceSecurityGroupInboundRulesOnPrivateLinkTraffic">enforceSecurityGroupInboundRulesOnPrivateLinkTraffic</a></code> | <code>java.lang.String</code> | Indicates whether to evaluate inbound security group rules for traffic sent to a Network Load Balancer through privatelink. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.Initializer.parameter.ipAddressType">ipAddressType</a></code> | <code>java.lang.String</code> | The IP address type. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.Initializer.parameter.ipv4IpamPoolId">ipv4IpamPoolId</a></code> | <code>java.lang.String</code> | The ID of the IPv4 IPAM pool. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.Initializer.parameter.loadBalancerAttributes">loadBalancerAttributes</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributes">Elasticloadbalancingv2LoadBalancerLoadBalancerAttributes</a>></code> | The load balancer attributes. Attributes that you do not modify retain their current values. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.Initializer.parameter.minimumLoadBalancerCapacity">minimumLoadBalancerCapacity</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacity">Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacity</a></code> | The minimum capacity for a load balancer. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the load balancer. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.Initializer.parameter.scheme">scheme</a></code> | <code>java.lang.String</code> | The nodes of an Internet-facing load balancer have public IP addresses. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.Initializer.parameter.securityGroups">securityGroups</a></code> | <code>java.util.List<java.lang.String></code> | [Application Load Balancers and Network Load Balancers] The IDs of the security groups for the load balancer. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.Initializer.parameter.subnetMappings">subnetMappings</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappings">Elasticloadbalancingv2LoadBalancerSubnetMappings</a>></code> | The IDs of the subnets. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.Initializer.parameter.subnets">subnets</a></code> | <code>java.util.List<java.lang.String></code> | The IDs of the subnets. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTags">Elasticloadbalancingv2LoadBalancerTags</a>></code> | The tags to assign to the load balancer. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | The type of load balancer. The default is ``application``. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `enableCapacityReservationProvisionStabilize`<sup>Optional</sup> <a name="enableCapacityReservationProvisionStabilize" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.Initializer.parameter.enableCapacityReservationProvisionStabilize"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Indicates whether to enable stabilization when creating or updating an LCU reservation.

This ensures that the final stack status reflects the status of the LCU reservation. The default is `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_load_balancer#enable_capacity_reservation_provision_stabilize Elasticloadbalancingv2LoadBalancer#enable_capacity_reservation_provision_stabilize}

---

##### `enablePrefixForIpv6SourceNat`<sup>Optional</sup> <a name="enablePrefixForIpv6SourceNat" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.Initializer.parameter.enablePrefixForIpv6SourceNat"></a>

- *Type:* java.lang.String

[Network Load Balancers with UDP listeners] Indicates whether to use an IPv6 prefix from each subnet for source NAT.

The IP address type must be `dualstack`. The default value is `off`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_load_balancer#enable_prefix_for_ipv_6_source_nat Elasticloadbalancingv2LoadBalancer#enable_prefix_for_ipv_6_source_nat}

---

##### `enforceSecurityGroupInboundRulesOnPrivateLinkTraffic`<sup>Optional</sup> <a name="enforceSecurityGroupInboundRulesOnPrivateLinkTraffic" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.Initializer.parameter.enforceSecurityGroupInboundRulesOnPrivateLinkTraffic"></a>

- *Type:* java.lang.String

Indicates whether to evaluate inbound security group rules for traffic sent to a Network Load Balancer through privatelink.

The default is `on`.
You can't configure this property on a Network Load Balancer unless you associated a security group with the load balancer when you created it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_load_balancer#enforce_security_group_inbound_rules_on_private_link_traffic Elasticloadbalancingv2LoadBalancer#enforce_security_group_inbound_rules_on_private_link_traffic}

---

##### `ipAddressType`<sup>Optional</sup> <a name="ipAddressType" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.Initializer.parameter.ipAddressType"></a>

- *Type:* java.lang.String

The IP address type.

Internal load balancers must use `ipv4`.
[Application Load Balancers] The possible values are `ipv4` (IPv4 addresses), `dualstack` (IPv4 and IPv6 addresses), and `dualstack-without-public-ipv4` (public IPv6 addresses and private IPv4 and IPv6 addresses).
Application Load Balancer authentication supports IPv4 addresses only when connecting to an Identity Provider (IdP) or Amazon Cognito endpoint. Without a public IPv4 address the load balancer can't complete the authentication process, resulting in HTTP 500 errors.
[Network Load Balancers and Gateway Load Balancers] The possible values are `ipv4` (IPv4 addresses) and `dualstack` (IPv4 and IPv6 addresses).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_load_balancer#ip_address_type Elasticloadbalancingv2LoadBalancer#ip_address_type}

---

##### `ipv4IpamPoolId`<sup>Optional</sup> <a name="ipv4IpamPoolId" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.Initializer.parameter.ipv4IpamPoolId"></a>

- *Type:* java.lang.String

The ID of the IPv4 IPAM pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_load_balancer#ipv_4_ipam_pool_id Elasticloadbalancingv2LoadBalancer#ipv_4_ipam_pool_id}

---

##### `loadBalancerAttributes`<sup>Optional</sup> <a name="loadBalancerAttributes" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.Initializer.parameter.loadBalancerAttributes"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributes">Elasticloadbalancingv2LoadBalancerLoadBalancerAttributes</a>>

The load balancer attributes. Attributes that you do not modify retain their current values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_load_balancer#load_balancer_attributes Elasticloadbalancingv2LoadBalancer#load_balancer_attributes}

---

##### `minimumLoadBalancerCapacity`<sup>Optional</sup> <a name="minimumLoadBalancerCapacity" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.Initializer.parameter.minimumLoadBalancerCapacity"></a>

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacity">Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacity</a>

The minimum capacity for a load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_load_balancer#minimum_load_balancer_capacity Elasticloadbalancingv2LoadBalancer#minimum_load_balancer_capacity}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the load balancer.

This name must be unique per region per account, can have a maximum of 32 characters, must contain only alphanumeric characters or hyphens, must not begin or end with a hyphen, and must not begin with "internal-".
If you don't specify a name, AWS CloudFormation generates a unique physical ID for the load balancer. If you specify a name, you cannot perform updates that require replacement of this resource, but you can perform other updates. To replace the resource, specify a new name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_load_balancer#name Elasticloadbalancingv2LoadBalancer#name}

---

##### `scheme`<sup>Optional</sup> <a name="scheme" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.Initializer.parameter.scheme"></a>

- *Type:* java.lang.String

The nodes of an Internet-facing load balancer have public IP addresses.

The DNS name of an Internet-facing load balancer is publicly resolvable to the public IP addresses of the nodes. Therefore, Internet-facing load balancers can route requests from clients over the internet.
The nodes of an internal load balancer have only private IP addresses. The DNS name of an internal load balancer is publicly resolvable to the private IP addresses of the nodes. Therefore, internal load balancers can route requests only from clients with access to the VPC for the load balancer.
The default is an Internet-facing load balancer.
You can't specify a scheme for a Gateway Load Balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_load_balancer#scheme Elasticloadbalancingv2LoadBalancer#scheme}

---

##### `securityGroups`<sup>Optional</sup> <a name="securityGroups" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.Initializer.parameter.securityGroups"></a>

- *Type:* java.util.List<java.lang.String>

[Application Load Balancers and Network Load Balancers] The IDs of the security groups for the load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_load_balancer#security_groups Elasticloadbalancingv2LoadBalancer#security_groups}

---

##### `subnetMappings`<sup>Optional</sup> <a name="subnetMappings" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.Initializer.parameter.subnetMappings"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappings">Elasticloadbalancingv2LoadBalancerSubnetMappings</a>>

The IDs of the subnets.

You can specify only one subnet per Availability Zone. You must specify either subnets or subnet mappings, but not both.
[Application Load Balancers] You must specify subnets from at least two Availability Zones. You can't specify Elastic IP addresses for your subnets.
[Application Load Balancers on Outposts] You must specify one Outpost subnet.
[Application Load Balancers on Local Zones] You can specify subnets from one or more Local Zones.
[Network Load Balancers] You can specify subnets from one or more Availability Zones. You can specify one Elastic IP address per subnet if you need static IP addresses for your internet-facing load balancer. For internal load balancers, you can specify one private IP address per subnet from the IPv4 range of the subnet. For internet-facing load balancer, you can specify one IPv6 address per subnet.
[Gateway Load Balancers] You can specify subnets from one or more Availability Zones. You can't specify Elastic IP addresses for your subnets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_load_balancer#subnet_mappings Elasticloadbalancingv2LoadBalancer#subnet_mappings}

---

##### `subnets`<sup>Optional</sup> <a name="subnets" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.Initializer.parameter.subnets"></a>

- *Type:* java.util.List<java.lang.String>

The IDs of the subnets.

You can specify only one subnet per Availability Zone. You must specify either subnets or subnet mappings, but not both. To specify an Elastic IP address, specify subnet mappings instead of subnets.
[Application Load Balancers] You must specify subnets from at least two Availability Zones.
[Application Load Balancers on Outposts] You must specify one Outpost subnet.
[Application Load Balancers on Local Zones] You can specify subnets from one or more Local Zones.
[Network Load Balancers and Gateway Load Balancers] You can specify subnets from one or more Availability Zones.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_load_balancer#subnets Elasticloadbalancingv2LoadBalancer#subnets}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTags">Elasticloadbalancingv2LoadBalancerTags</a>>

The tags to assign to the load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_load_balancer#tags Elasticloadbalancingv2LoadBalancer#tags}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.Initializer.parameter.type"></a>

- *Type:* java.lang.String

The type of load balancer. The default is ``application``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_load_balancer#type Elasticloadbalancingv2LoadBalancer#type}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.putLoadBalancerAttributes">putLoadBalancerAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.putMinimumLoadBalancerCapacity">putMinimumLoadBalancerCapacity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.putSubnetMappings">putSubnetMappings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.resetEnableCapacityReservationProvisionStabilize">resetEnableCapacityReservationProvisionStabilize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.resetEnablePrefixForIpv6SourceNat">resetEnablePrefixForIpv6SourceNat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.resetEnforceSecurityGroupInboundRulesOnPrivateLinkTraffic">resetEnforceSecurityGroupInboundRulesOnPrivateLinkTraffic</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.resetIpAddressType">resetIpAddressType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.resetIpv4IpamPoolId">resetIpv4IpamPoolId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.resetLoadBalancerAttributes">resetLoadBalancerAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.resetMinimumLoadBalancerCapacity">resetMinimumLoadBalancerCapacity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.resetScheme">resetScheme</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.resetSecurityGroups">resetSecurityGroups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.resetSubnetMappings">resetSubnetMappings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.resetSubnets">resetSubnets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.resetType">resetType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putLoadBalancerAttributes` <a name="putLoadBalancerAttributes" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.putLoadBalancerAttributes"></a>

```java
public void putLoadBalancerAttributes(IResolvable|java.util.List<Elasticloadbalancingv2LoadBalancerLoadBalancerAttributes> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.putLoadBalancerAttributes.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributes">Elasticloadbalancingv2LoadBalancerLoadBalancerAttributes</a>>

---

##### `putMinimumLoadBalancerCapacity` <a name="putMinimumLoadBalancerCapacity" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.putMinimumLoadBalancerCapacity"></a>

```java
public void putMinimumLoadBalancerCapacity(Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacity value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.putMinimumLoadBalancerCapacity.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacity">Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacity</a>

---

##### `putSubnetMappings` <a name="putSubnetMappings" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.putSubnetMappings"></a>

```java
public void putSubnetMappings(IResolvable|java.util.List<Elasticloadbalancingv2LoadBalancerSubnetMappings> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.putSubnetMappings.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappings">Elasticloadbalancingv2LoadBalancerSubnetMappings</a>>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<Elasticloadbalancingv2LoadBalancerTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTags">Elasticloadbalancingv2LoadBalancerTags</a>>

---

##### `resetEnableCapacityReservationProvisionStabilize` <a name="resetEnableCapacityReservationProvisionStabilize" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.resetEnableCapacityReservationProvisionStabilize"></a>

```java
public void resetEnableCapacityReservationProvisionStabilize()
```

##### `resetEnablePrefixForIpv6SourceNat` <a name="resetEnablePrefixForIpv6SourceNat" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.resetEnablePrefixForIpv6SourceNat"></a>

```java
public void resetEnablePrefixForIpv6SourceNat()
```

##### `resetEnforceSecurityGroupInboundRulesOnPrivateLinkTraffic` <a name="resetEnforceSecurityGroupInboundRulesOnPrivateLinkTraffic" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.resetEnforceSecurityGroupInboundRulesOnPrivateLinkTraffic"></a>

```java
public void resetEnforceSecurityGroupInboundRulesOnPrivateLinkTraffic()
```

##### `resetIpAddressType` <a name="resetIpAddressType" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.resetIpAddressType"></a>

```java
public void resetIpAddressType()
```

##### `resetIpv4IpamPoolId` <a name="resetIpv4IpamPoolId" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.resetIpv4IpamPoolId"></a>

```java
public void resetIpv4IpamPoolId()
```

##### `resetLoadBalancerAttributes` <a name="resetLoadBalancerAttributes" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.resetLoadBalancerAttributes"></a>

```java
public void resetLoadBalancerAttributes()
```

##### `resetMinimumLoadBalancerCapacity` <a name="resetMinimumLoadBalancerCapacity" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.resetMinimumLoadBalancerCapacity"></a>

```java
public void resetMinimumLoadBalancerCapacity()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.resetName"></a>

```java
public void resetName()
```

##### `resetScheme` <a name="resetScheme" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.resetScheme"></a>

```java
public void resetScheme()
```

##### `resetSecurityGroups` <a name="resetSecurityGroups" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.resetSecurityGroups"></a>

```java
public void resetSecurityGroups()
```

##### `resetSubnetMappings` <a name="resetSubnetMappings" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.resetSubnetMappings"></a>

```java
public void resetSubnetMappings()
```

##### `resetSubnets` <a name="resetSubnets" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.resetSubnets"></a>

```java
public void resetSubnets()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.resetTags"></a>

```java
public void resetTags()
```

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.resetType"></a>

```java
public void resetType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a Elasticloadbalancingv2LoadBalancer resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.isConstruct"></a>

```java
import io.cdktn.providers.awscc.elasticloadbalancingv2_load_balancer.Elasticloadbalancingv2LoadBalancer;

Elasticloadbalancingv2LoadBalancer.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.elasticloadbalancingv2_load_balancer.Elasticloadbalancingv2LoadBalancer;

Elasticloadbalancingv2LoadBalancer.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.elasticloadbalancingv2_load_balancer.Elasticloadbalancingv2LoadBalancer;

Elasticloadbalancingv2LoadBalancer.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.elasticloadbalancingv2_load_balancer.Elasticloadbalancingv2LoadBalancer;

Elasticloadbalancingv2LoadBalancer.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),Elasticloadbalancingv2LoadBalancer.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a Elasticloadbalancingv2LoadBalancer resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the Elasticloadbalancingv2LoadBalancer to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing Elasticloadbalancingv2LoadBalancer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_load_balancer#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the Elasticloadbalancingv2LoadBalancer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.canonicalHostedZoneId">canonicalHostedZoneId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.dnsName">dnsName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.loadBalancerArn">loadBalancerArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.loadBalancerAttributes">loadBalancerAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesList">Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.loadBalancerFullName">loadBalancerFullName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.loadBalancerName">loadBalancerName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.minimumLoadBalancerCapacity">minimumLoadBalancerCapacity</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference">Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.subnetMappings">subnetMappings</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsList">Elasticloadbalancingv2LoadBalancerSubnetMappingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsList">Elasticloadbalancingv2LoadBalancerTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.enableCapacityReservationProvisionStabilizeInput">enableCapacityReservationProvisionStabilizeInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.enablePrefixForIpv6SourceNatInput">enablePrefixForIpv6SourceNatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.enforceSecurityGroupInboundRulesOnPrivateLinkTrafficInput">enforceSecurityGroupInboundRulesOnPrivateLinkTrafficInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.ipAddressTypeInput">ipAddressTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.ipv4IpamPoolIdInput">ipv4IpamPoolIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.loadBalancerAttributesInput">loadBalancerAttributesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributes">Elasticloadbalancingv2LoadBalancerLoadBalancerAttributes</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.minimumLoadBalancerCapacityInput">minimumLoadBalancerCapacityInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacity">Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.schemeInput">schemeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.securityGroupsInput">securityGroupsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.subnetMappingsInput">subnetMappingsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappings">Elasticloadbalancingv2LoadBalancerSubnetMappings</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.subnetsInput">subnetsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTags">Elasticloadbalancingv2LoadBalancerTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.enableCapacityReservationProvisionStabilize">enableCapacityReservationProvisionStabilize</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.enablePrefixForIpv6SourceNat">enablePrefixForIpv6SourceNat</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.enforceSecurityGroupInboundRulesOnPrivateLinkTraffic">enforceSecurityGroupInboundRulesOnPrivateLinkTraffic</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.ipAddressType">ipAddressType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.ipv4IpamPoolId">ipv4IpamPoolId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.scheme">scheme</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.securityGroups">securityGroups</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.subnets">subnets</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `canonicalHostedZoneId`<sup>Required</sup> <a name="canonicalHostedZoneId" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.canonicalHostedZoneId"></a>

```java
public java.lang.String getCanonicalHostedZoneId();
```

- *Type:* java.lang.String

---

##### `dnsName`<sup>Required</sup> <a name="dnsName" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.dnsName"></a>

```java
public java.lang.String getDnsName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `loadBalancerArn`<sup>Required</sup> <a name="loadBalancerArn" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.loadBalancerArn"></a>

```java
public java.lang.String getLoadBalancerArn();
```

- *Type:* java.lang.String

---

##### `loadBalancerAttributes`<sup>Required</sup> <a name="loadBalancerAttributes" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.loadBalancerAttributes"></a>

```java
public Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesList getLoadBalancerAttributes();
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesList">Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesList</a>

---

##### `loadBalancerFullName`<sup>Required</sup> <a name="loadBalancerFullName" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.loadBalancerFullName"></a>

```java
public java.lang.String getLoadBalancerFullName();
```

- *Type:* java.lang.String

---

##### `loadBalancerName`<sup>Required</sup> <a name="loadBalancerName" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.loadBalancerName"></a>

```java
public java.lang.String getLoadBalancerName();
```

- *Type:* java.lang.String

---

##### `minimumLoadBalancerCapacity`<sup>Required</sup> <a name="minimumLoadBalancerCapacity" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.minimumLoadBalancerCapacity"></a>

```java
public Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference getMinimumLoadBalancerCapacity();
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference">Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference</a>

---

##### `subnetMappings`<sup>Required</sup> <a name="subnetMappings" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.subnetMappings"></a>

```java
public Elasticloadbalancingv2LoadBalancerSubnetMappingsList getSubnetMappings();
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsList">Elasticloadbalancingv2LoadBalancerSubnetMappingsList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.tags"></a>

```java
public Elasticloadbalancingv2LoadBalancerTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsList">Elasticloadbalancingv2LoadBalancerTagsList</a>

---

##### `enableCapacityReservationProvisionStabilizeInput`<sup>Optional</sup> <a name="enableCapacityReservationProvisionStabilizeInput" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.enableCapacityReservationProvisionStabilizeInput"></a>

```java
public java.lang.Boolean|IResolvable getEnableCapacityReservationProvisionStabilizeInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `enablePrefixForIpv6SourceNatInput`<sup>Optional</sup> <a name="enablePrefixForIpv6SourceNatInput" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.enablePrefixForIpv6SourceNatInput"></a>

```java
public java.lang.String getEnablePrefixForIpv6SourceNatInput();
```

- *Type:* java.lang.String

---

##### `enforceSecurityGroupInboundRulesOnPrivateLinkTrafficInput`<sup>Optional</sup> <a name="enforceSecurityGroupInboundRulesOnPrivateLinkTrafficInput" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.enforceSecurityGroupInboundRulesOnPrivateLinkTrafficInput"></a>

```java
public java.lang.String getEnforceSecurityGroupInboundRulesOnPrivateLinkTrafficInput();
```

- *Type:* java.lang.String

---

##### `ipAddressTypeInput`<sup>Optional</sup> <a name="ipAddressTypeInput" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.ipAddressTypeInput"></a>

```java
public java.lang.String getIpAddressTypeInput();
```

- *Type:* java.lang.String

---

##### `ipv4IpamPoolIdInput`<sup>Optional</sup> <a name="ipv4IpamPoolIdInput" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.ipv4IpamPoolIdInput"></a>

```java
public java.lang.String getIpv4IpamPoolIdInput();
```

- *Type:* java.lang.String

---

##### `loadBalancerAttributesInput`<sup>Optional</sup> <a name="loadBalancerAttributesInput" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.loadBalancerAttributesInput"></a>

```java
public IResolvable|java.util.List<Elasticloadbalancingv2LoadBalancerLoadBalancerAttributes> getLoadBalancerAttributesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributes">Elasticloadbalancingv2LoadBalancerLoadBalancerAttributes</a>>

---

##### `minimumLoadBalancerCapacityInput`<sup>Optional</sup> <a name="minimumLoadBalancerCapacityInput" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.minimumLoadBalancerCapacityInput"></a>

```java
public IResolvable|Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacity getMinimumLoadBalancerCapacityInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacity">Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacity</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `schemeInput`<sup>Optional</sup> <a name="schemeInput" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.schemeInput"></a>

```java
public java.lang.String getSchemeInput();
```

- *Type:* java.lang.String

---

##### `securityGroupsInput`<sup>Optional</sup> <a name="securityGroupsInput" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.securityGroupsInput"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnetMappingsInput`<sup>Optional</sup> <a name="subnetMappingsInput" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.subnetMappingsInput"></a>

```java
public IResolvable|java.util.List<Elasticloadbalancingv2LoadBalancerSubnetMappings> getSubnetMappingsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappings">Elasticloadbalancingv2LoadBalancerSubnetMappings</a>>

---

##### `subnetsInput`<sup>Optional</sup> <a name="subnetsInput" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.subnetsInput"></a>

```java
public java.util.List<java.lang.String> getSubnetsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.tagsInput"></a>

```java
public IResolvable|java.util.List<Elasticloadbalancingv2LoadBalancerTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTags">Elasticloadbalancingv2LoadBalancerTags</a>>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `enableCapacityReservationProvisionStabilize`<sup>Required</sup> <a name="enableCapacityReservationProvisionStabilize" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.enableCapacityReservationProvisionStabilize"></a>

```java
public java.lang.Boolean|IResolvable getEnableCapacityReservationProvisionStabilize();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `enablePrefixForIpv6SourceNat`<sup>Required</sup> <a name="enablePrefixForIpv6SourceNat" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.enablePrefixForIpv6SourceNat"></a>

```java
public java.lang.String getEnablePrefixForIpv6SourceNat();
```

- *Type:* java.lang.String

---

##### `enforceSecurityGroupInboundRulesOnPrivateLinkTraffic`<sup>Required</sup> <a name="enforceSecurityGroupInboundRulesOnPrivateLinkTraffic" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.enforceSecurityGroupInboundRulesOnPrivateLinkTraffic"></a>

```java
public java.lang.String getEnforceSecurityGroupInboundRulesOnPrivateLinkTraffic();
```

- *Type:* java.lang.String

---

##### `ipAddressType`<sup>Required</sup> <a name="ipAddressType" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.ipAddressType"></a>

```java
public java.lang.String getIpAddressType();
```

- *Type:* java.lang.String

---

##### `ipv4IpamPoolId`<sup>Required</sup> <a name="ipv4IpamPoolId" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.ipv4IpamPoolId"></a>

```java
public java.lang.String getIpv4IpamPoolId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `scheme`<sup>Required</sup> <a name="scheme" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.scheme"></a>

```java
public java.lang.String getScheme();
```

- *Type:* java.lang.String

---

##### `securityGroups`<sup>Required</sup> <a name="securityGroups" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.securityGroups"></a>

```java
public java.util.List<java.lang.String> getSecurityGroups();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.subnets"></a>

```java
public java.util.List<java.lang.String> getSubnets();
```

- *Type:* java.util.List<java.lang.String>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancer.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### Elasticloadbalancingv2LoadBalancerConfig <a name="Elasticloadbalancingv2LoadBalancerConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.elasticloadbalancingv2_load_balancer.Elasticloadbalancingv2LoadBalancerConfig;

Elasticloadbalancingv2LoadBalancerConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .enableCapacityReservationProvisionStabilize(java.lang.Boolean|IResolvable)
//  .enablePrefixForIpv6SourceNat(java.lang.String)
//  .enforceSecurityGroupInboundRulesOnPrivateLinkTraffic(java.lang.String)
//  .ipAddressType(java.lang.String)
//  .ipv4IpamPoolId(java.lang.String)
//  .loadBalancerAttributes(IResolvable|java.util.List<Elasticloadbalancingv2LoadBalancerLoadBalancerAttributes>)
//  .minimumLoadBalancerCapacity(Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacity)
//  .name(java.lang.String)
//  .scheme(java.lang.String)
//  .securityGroups(java.util.List<java.lang.String>)
//  .subnetMappings(IResolvable|java.util.List<Elasticloadbalancingv2LoadBalancerSubnetMappings>)
//  .subnets(java.util.List<java.lang.String>)
//  .tags(IResolvable|java.util.List<Elasticloadbalancingv2LoadBalancerTags>)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerConfig.property.enableCapacityReservationProvisionStabilize">enableCapacityReservationProvisionStabilize</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Indicates whether to enable stabilization when creating or updating an LCU reservation. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerConfig.property.enablePrefixForIpv6SourceNat">enablePrefixForIpv6SourceNat</a></code> | <code>java.lang.String</code> | [Network Load Balancers with UDP listeners] Indicates whether to use an IPv6 prefix from each subnet for source NAT. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerConfig.property.enforceSecurityGroupInboundRulesOnPrivateLinkTraffic">enforceSecurityGroupInboundRulesOnPrivateLinkTraffic</a></code> | <code>java.lang.String</code> | Indicates whether to evaluate inbound security group rules for traffic sent to a Network Load Balancer through privatelink. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerConfig.property.ipAddressType">ipAddressType</a></code> | <code>java.lang.String</code> | The IP address type. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerConfig.property.ipv4IpamPoolId">ipv4IpamPoolId</a></code> | <code>java.lang.String</code> | The ID of the IPv4 IPAM pool. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerConfig.property.loadBalancerAttributes">loadBalancerAttributes</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributes">Elasticloadbalancingv2LoadBalancerLoadBalancerAttributes</a>></code> | The load balancer attributes. Attributes that you do not modify retain their current values. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerConfig.property.minimumLoadBalancerCapacity">minimumLoadBalancerCapacity</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacity">Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacity</a></code> | The minimum capacity for a load balancer. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the load balancer. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerConfig.property.scheme">scheme</a></code> | <code>java.lang.String</code> | The nodes of an Internet-facing load balancer have public IP addresses. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerConfig.property.securityGroups">securityGroups</a></code> | <code>java.util.List<java.lang.String></code> | [Application Load Balancers and Network Load Balancers] The IDs of the security groups for the load balancer. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerConfig.property.subnetMappings">subnetMappings</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappings">Elasticloadbalancingv2LoadBalancerSubnetMappings</a>></code> | The IDs of the subnets. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerConfig.property.subnets">subnets</a></code> | <code>java.util.List<java.lang.String></code> | The IDs of the subnets. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTags">Elasticloadbalancingv2LoadBalancerTags</a>></code> | The tags to assign to the load balancer. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerConfig.property.type">type</a></code> | <code>java.lang.String</code> | The type of load balancer. The default is ``application``. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `enableCapacityReservationProvisionStabilize`<sup>Optional</sup> <a name="enableCapacityReservationProvisionStabilize" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerConfig.property.enableCapacityReservationProvisionStabilize"></a>

```java
public java.lang.Boolean|IResolvable getEnableCapacityReservationProvisionStabilize();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Indicates whether to enable stabilization when creating or updating an LCU reservation.

This ensures that the final stack status reflects the status of the LCU reservation. The default is `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_load_balancer#enable_capacity_reservation_provision_stabilize Elasticloadbalancingv2LoadBalancer#enable_capacity_reservation_provision_stabilize}

---

##### `enablePrefixForIpv6SourceNat`<sup>Optional</sup> <a name="enablePrefixForIpv6SourceNat" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerConfig.property.enablePrefixForIpv6SourceNat"></a>

```java
public java.lang.String getEnablePrefixForIpv6SourceNat();
```

- *Type:* java.lang.String

[Network Load Balancers with UDP listeners] Indicates whether to use an IPv6 prefix from each subnet for source NAT.

The IP address type must be `dualstack`. The default value is `off`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_load_balancer#enable_prefix_for_ipv_6_source_nat Elasticloadbalancingv2LoadBalancer#enable_prefix_for_ipv_6_source_nat}

---

##### `enforceSecurityGroupInboundRulesOnPrivateLinkTraffic`<sup>Optional</sup> <a name="enforceSecurityGroupInboundRulesOnPrivateLinkTraffic" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerConfig.property.enforceSecurityGroupInboundRulesOnPrivateLinkTraffic"></a>

```java
public java.lang.String getEnforceSecurityGroupInboundRulesOnPrivateLinkTraffic();
```

- *Type:* java.lang.String

Indicates whether to evaluate inbound security group rules for traffic sent to a Network Load Balancer through privatelink.

The default is `on`.
You can't configure this property on a Network Load Balancer unless you associated a security group with the load balancer when you created it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_load_balancer#enforce_security_group_inbound_rules_on_private_link_traffic Elasticloadbalancingv2LoadBalancer#enforce_security_group_inbound_rules_on_private_link_traffic}

---

##### `ipAddressType`<sup>Optional</sup> <a name="ipAddressType" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerConfig.property.ipAddressType"></a>

```java
public java.lang.String getIpAddressType();
```

- *Type:* java.lang.String

The IP address type.

Internal load balancers must use `ipv4`.
[Application Load Balancers] The possible values are `ipv4` (IPv4 addresses), `dualstack` (IPv4 and IPv6 addresses), and `dualstack-without-public-ipv4` (public IPv6 addresses and private IPv4 and IPv6 addresses).
Application Load Balancer authentication supports IPv4 addresses only when connecting to an Identity Provider (IdP) or Amazon Cognito endpoint. Without a public IPv4 address the load balancer can't complete the authentication process, resulting in HTTP 500 errors.
[Network Load Balancers and Gateway Load Balancers] The possible values are `ipv4` (IPv4 addresses) and `dualstack` (IPv4 and IPv6 addresses).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_load_balancer#ip_address_type Elasticloadbalancingv2LoadBalancer#ip_address_type}

---

##### `ipv4IpamPoolId`<sup>Optional</sup> <a name="ipv4IpamPoolId" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerConfig.property.ipv4IpamPoolId"></a>

```java
public java.lang.String getIpv4IpamPoolId();
```

- *Type:* java.lang.String

The ID of the IPv4 IPAM pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_load_balancer#ipv_4_ipam_pool_id Elasticloadbalancingv2LoadBalancer#ipv_4_ipam_pool_id}

---

##### `loadBalancerAttributes`<sup>Optional</sup> <a name="loadBalancerAttributes" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerConfig.property.loadBalancerAttributes"></a>

```java
public IResolvable|java.util.List<Elasticloadbalancingv2LoadBalancerLoadBalancerAttributes> getLoadBalancerAttributes();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributes">Elasticloadbalancingv2LoadBalancerLoadBalancerAttributes</a>>

The load balancer attributes. Attributes that you do not modify retain their current values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_load_balancer#load_balancer_attributes Elasticloadbalancingv2LoadBalancer#load_balancer_attributes}

---

##### `minimumLoadBalancerCapacity`<sup>Optional</sup> <a name="minimumLoadBalancerCapacity" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerConfig.property.minimumLoadBalancerCapacity"></a>

```java
public Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacity getMinimumLoadBalancerCapacity();
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacity">Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacity</a>

The minimum capacity for a load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_load_balancer#minimum_load_balancer_capacity Elasticloadbalancingv2LoadBalancer#minimum_load_balancer_capacity}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the load balancer.

This name must be unique per region per account, can have a maximum of 32 characters, must contain only alphanumeric characters or hyphens, must not begin or end with a hyphen, and must not begin with "internal-".
If you don't specify a name, AWS CloudFormation generates a unique physical ID for the load balancer. If you specify a name, you cannot perform updates that require replacement of this resource, but you can perform other updates. To replace the resource, specify a new name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_load_balancer#name Elasticloadbalancingv2LoadBalancer#name}

---

##### `scheme`<sup>Optional</sup> <a name="scheme" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerConfig.property.scheme"></a>

```java
public java.lang.String getScheme();
```

- *Type:* java.lang.String

The nodes of an Internet-facing load balancer have public IP addresses.

The DNS name of an Internet-facing load balancer is publicly resolvable to the public IP addresses of the nodes. Therefore, Internet-facing load balancers can route requests from clients over the internet.
The nodes of an internal load balancer have only private IP addresses. The DNS name of an internal load balancer is publicly resolvable to the private IP addresses of the nodes. Therefore, internal load balancers can route requests only from clients with access to the VPC for the load balancer.
The default is an Internet-facing load balancer.
You can't specify a scheme for a Gateway Load Balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_load_balancer#scheme Elasticloadbalancingv2LoadBalancer#scheme}

---

##### `securityGroups`<sup>Optional</sup> <a name="securityGroups" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerConfig.property.securityGroups"></a>

```java
public java.util.List<java.lang.String> getSecurityGroups();
```

- *Type:* java.util.List<java.lang.String>

[Application Load Balancers and Network Load Balancers] The IDs of the security groups for the load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_load_balancer#security_groups Elasticloadbalancingv2LoadBalancer#security_groups}

---

##### `subnetMappings`<sup>Optional</sup> <a name="subnetMappings" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerConfig.property.subnetMappings"></a>

```java
public IResolvable|java.util.List<Elasticloadbalancingv2LoadBalancerSubnetMappings> getSubnetMappings();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappings">Elasticloadbalancingv2LoadBalancerSubnetMappings</a>>

The IDs of the subnets.

You can specify only one subnet per Availability Zone. You must specify either subnets or subnet mappings, but not both.
[Application Load Balancers] You must specify subnets from at least two Availability Zones. You can't specify Elastic IP addresses for your subnets.
[Application Load Balancers on Outposts] You must specify one Outpost subnet.
[Application Load Balancers on Local Zones] You can specify subnets from one or more Local Zones.
[Network Load Balancers] You can specify subnets from one or more Availability Zones. You can specify one Elastic IP address per subnet if you need static IP addresses for your internet-facing load balancer. For internal load balancers, you can specify one private IP address per subnet from the IPv4 range of the subnet. For internet-facing load balancer, you can specify one IPv6 address per subnet.
[Gateway Load Balancers] You can specify subnets from one or more Availability Zones. You can't specify Elastic IP addresses for your subnets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_load_balancer#subnet_mappings Elasticloadbalancingv2LoadBalancer#subnet_mappings}

---

##### `subnets`<sup>Optional</sup> <a name="subnets" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerConfig.property.subnets"></a>

```java
public java.util.List<java.lang.String> getSubnets();
```

- *Type:* java.util.List<java.lang.String>

The IDs of the subnets.

You can specify only one subnet per Availability Zone. You must specify either subnets or subnet mappings, but not both. To specify an Elastic IP address, specify subnet mappings instead of subnets.
[Application Load Balancers] You must specify subnets from at least two Availability Zones.
[Application Load Balancers on Outposts] You must specify one Outpost subnet.
[Application Load Balancers on Local Zones] You can specify subnets from one or more Local Zones.
[Network Load Balancers and Gateway Load Balancers] You can specify subnets from one or more Availability Zones.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_load_balancer#subnets Elasticloadbalancingv2LoadBalancer#subnets}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerConfig.property.tags"></a>

```java
public IResolvable|java.util.List<Elasticloadbalancingv2LoadBalancerTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTags">Elasticloadbalancingv2LoadBalancerTags</a>>

The tags to assign to the load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_load_balancer#tags Elasticloadbalancingv2LoadBalancer#tags}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The type of load balancer. The default is ``application``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_load_balancer#type Elasticloadbalancingv2LoadBalancer#type}

---

### Elasticloadbalancingv2LoadBalancerLoadBalancerAttributes <a name="Elasticloadbalancingv2LoadBalancerLoadBalancerAttributes" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributes.Initializer"></a>

```java
import io.cdktn.providers.awscc.elasticloadbalancingv2_load_balancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributes;

Elasticloadbalancingv2LoadBalancerLoadBalancerAttributes.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributes.property.key">key</a></code> | <code>java.lang.String</code> | The name of the attribute. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributes.property.value">value</a></code> | <code>java.lang.String</code> | The value of the attribute. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributes.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_load_balancer#key Elasticloadbalancingv2LoadBalancer#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributes.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value of the attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_load_balancer#value Elasticloadbalancingv2LoadBalancer#value}

---

### Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacity <a name="Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacity" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacity.Initializer"></a>

```java
import io.cdktn.providers.awscc.elasticloadbalancingv2_load_balancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacity;

Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacity.builder()
//  .capacityUnits(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacity.property.capacityUnits">capacityUnits</a></code> | <code>java.lang.Number</code> | The number of capacity units. |

---

##### `capacityUnits`<sup>Optional</sup> <a name="capacityUnits" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacity.property.capacityUnits"></a>

```java
public java.lang.Number getCapacityUnits();
```

- *Type:* java.lang.Number

The number of capacity units.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_load_balancer#capacity_units Elasticloadbalancingv2LoadBalancer#capacity_units}

---

### Elasticloadbalancingv2LoadBalancerSubnetMappings <a name="Elasticloadbalancingv2LoadBalancerSubnetMappings" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappings.Initializer"></a>

```java
import io.cdktn.providers.awscc.elasticloadbalancingv2_load_balancer.Elasticloadbalancingv2LoadBalancerSubnetMappings;

Elasticloadbalancingv2LoadBalancerSubnetMappings.builder()
//  .allocationId(java.lang.String)
//  .iPv6Address(java.lang.String)
//  .privateIPv4Address(java.lang.String)
//  .sourceNatIpv6Prefix(java.lang.String)
//  .subnetId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappings.property.allocationId">allocationId</a></code> | <code>java.lang.String</code> | [Network Load Balancers] The allocation ID of the Elastic IP address for an internet-facing load balancer. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappings.property.iPv6Address">iPv6Address</a></code> | <code>java.lang.String</code> | [Network Load Balancers] The IPv6 address. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappings.property.privateIPv4Address">privateIPv4Address</a></code> | <code>java.lang.String</code> | [Network Load Balancers] The private IPv4 address for an internal load balancer. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappings.property.sourceNatIpv6Prefix">sourceNatIpv6Prefix</a></code> | <code>java.lang.String</code> | [Network Load Balancers with UDP listeners] The IPv6 prefix to use for source NAT. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappings.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | The ID of the subnet. |

---

##### `allocationId`<sup>Optional</sup> <a name="allocationId" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappings.property.allocationId"></a>

```java
public java.lang.String getAllocationId();
```

- *Type:* java.lang.String

[Network Load Balancers] The allocation ID of the Elastic IP address for an internet-facing load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_load_balancer#allocation_id Elasticloadbalancingv2LoadBalancer#allocation_id}

---

##### `iPv6Address`<sup>Optional</sup> <a name="iPv6Address" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappings.property.iPv6Address"></a>

```java
public java.lang.String getIPv6Address();
```

- *Type:* java.lang.String

[Network Load Balancers] The IPv6 address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_load_balancer#i_pv_6_address Elasticloadbalancingv2LoadBalancer#i_pv_6_address}

---

##### `privateIPv4Address`<sup>Optional</sup> <a name="privateIPv4Address" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappings.property.privateIPv4Address"></a>

```java
public java.lang.String getPrivateIPv4Address();
```

- *Type:* java.lang.String

[Network Load Balancers] The private IPv4 address for an internal load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_load_balancer#private_i_pv_4_address Elasticloadbalancingv2LoadBalancer#private_i_pv_4_address}

---

##### `sourceNatIpv6Prefix`<sup>Optional</sup> <a name="sourceNatIpv6Prefix" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappings.property.sourceNatIpv6Prefix"></a>

```java
public java.lang.String getSourceNatIpv6Prefix();
```

- *Type:* java.lang.String

[Network Load Balancers with UDP listeners] The IPv6 prefix to use for source NAT.

Specify an IPv6 prefix (/80 netmask) from the subnet CIDR block or `auto_assigned` to use an IPv6 prefix selected at random from the subnet CIDR block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_load_balancer#source_nat_ipv_6_prefix Elasticloadbalancingv2LoadBalancer#source_nat_ipv_6_prefix}

---

##### `subnetId`<sup>Optional</sup> <a name="subnetId" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappings.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

The ID of the subnet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_load_balancer#subnet_id Elasticloadbalancingv2LoadBalancer#subnet_id}

---

### Elasticloadbalancingv2LoadBalancerTags <a name="Elasticloadbalancingv2LoadBalancerTags" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.elasticloadbalancingv2_load_balancer.Elasticloadbalancingv2LoadBalancerTags;

Elasticloadbalancingv2LoadBalancerTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTags.property.key">key</a></code> | <code>java.lang.String</code> | The key of the tag. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTags.property.value">value</a></code> | <code>java.lang.String</code> | The value of the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_load_balancer#key Elasticloadbalancingv2LoadBalancer#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_load_balancer#value Elasticloadbalancingv2LoadBalancer#value}

---

## Classes <a name="Classes" id="Classes"></a>

### Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesList <a name="Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesList" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.elasticloadbalancingv2_load_balancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesList;

new Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesList.get"></a>

```java
public Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributes">Elasticloadbalancingv2LoadBalancerLoadBalancerAttributes</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<Elasticloadbalancingv2LoadBalancerLoadBalancerAttributes> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributes">Elasticloadbalancingv2LoadBalancerLoadBalancerAttributes</a>>

---


### Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference <a name="Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.elasticloadbalancingv2_load_balancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference;

new Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributes">Elasticloadbalancingv2LoadBalancerLoadBalancerAttributes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.property.internalValue"></a>

```java
public IResolvable|Elasticloadbalancingv2LoadBalancerLoadBalancerAttributes getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerLoadBalancerAttributes">Elasticloadbalancingv2LoadBalancerLoadBalancerAttributes</a>

---


### Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference <a name="Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.elasticloadbalancingv2_load_balancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference;

new Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.resetCapacityUnits">resetCapacityUnits</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCapacityUnits` <a name="resetCapacityUnits" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.resetCapacityUnits"></a>

```java
public void resetCapacityUnits()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.property.capacityUnitsInput">capacityUnitsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.property.capacityUnits">capacityUnits</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacity">Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `capacityUnitsInput`<sup>Optional</sup> <a name="capacityUnitsInput" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.property.capacityUnitsInput"></a>

```java
public java.lang.Number getCapacityUnitsInput();
```

- *Type:* java.lang.Number

---

##### `capacityUnits`<sup>Required</sup> <a name="capacityUnits" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.property.capacityUnits"></a>

```java
public java.lang.Number getCapacityUnits();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.property.internalValue"></a>

```java
public IResolvable|Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacity getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacity">Elasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacity</a>

---


### Elasticloadbalancingv2LoadBalancerSubnetMappingsList <a name="Elasticloadbalancingv2LoadBalancerSubnetMappingsList" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.elasticloadbalancingv2_load_balancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsList;

new Elasticloadbalancingv2LoadBalancerSubnetMappingsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsList.get"></a>

```java
public Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappings">Elasticloadbalancingv2LoadBalancerSubnetMappings</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<Elasticloadbalancingv2LoadBalancerSubnetMappings> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappings">Elasticloadbalancingv2LoadBalancerSubnetMappings</a>>

---


### Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference <a name="Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.elasticloadbalancingv2_load_balancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference;

new Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.resetAllocationId">resetAllocationId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.resetIPv6Address">resetIPv6Address</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.resetPrivateIPv4Address">resetPrivateIPv4Address</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.resetSourceNatIpv6Prefix">resetSourceNatIpv6Prefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.resetSubnetId">resetSubnetId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllocationId` <a name="resetAllocationId" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.resetAllocationId"></a>

```java
public void resetAllocationId()
```

##### `resetIPv6Address` <a name="resetIPv6Address" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.resetIPv6Address"></a>

```java
public void resetIPv6Address()
```

##### `resetPrivateIPv4Address` <a name="resetPrivateIPv4Address" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.resetPrivateIPv4Address"></a>

```java
public void resetPrivateIPv4Address()
```

##### `resetSourceNatIpv6Prefix` <a name="resetSourceNatIpv6Prefix" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.resetSourceNatIpv6Prefix"></a>

```java
public void resetSourceNatIpv6Prefix()
```

##### `resetSubnetId` <a name="resetSubnetId" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.resetSubnetId"></a>

```java
public void resetSubnetId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.property.allocationIdInput">allocationIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.property.iPv6AddressInput">iPv6AddressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.property.privateIPv4AddressInput">privateIPv4AddressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.property.sourceNatIpv6PrefixInput">sourceNatIpv6PrefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.property.subnetIdInput">subnetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.property.allocationId">allocationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.property.iPv6Address">iPv6Address</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.property.privateIPv4Address">privateIPv4Address</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.property.sourceNatIpv6Prefix">sourceNatIpv6Prefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappings">Elasticloadbalancingv2LoadBalancerSubnetMappings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allocationIdInput`<sup>Optional</sup> <a name="allocationIdInput" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.property.allocationIdInput"></a>

```java
public java.lang.String getAllocationIdInput();
```

- *Type:* java.lang.String

---

##### `iPv6AddressInput`<sup>Optional</sup> <a name="iPv6AddressInput" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.property.iPv6AddressInput"></a>

```java
public java.lang.String getIPv6AddressInput();
```

- *Type:* java.lang.String

---

##### `privateIPv4AddressInput`<sup>Optional</sup> <a name="privateIPv4AddressInput" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.property.privateIPv4AddressInput"></a>

```java
public java.lang.String getPrivateIPv4AddressInput();
```

- *Type:* java.lang.String

---

##### `sourceNatIpv6PrefixInput`<sup>Optional</sup> <a name="sourceNatIpv6PrefixInput" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.property.sourceNatIpv6PrefixInput"></a>

```java
public java.lang.String getSourceNatIpv6PrefixInput();
```

- *Type:* java.lang.String

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.property.subnetIdInput"></a>

```java
public java.lang.String getSubnetIdInput();
```

- *Type:* java.lang.String

---

##### `allocationId`<sup>Required</sup> <a name="allocationId" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.property.allocationId"></a>

```java
public java.lang.String getAllocationId();
```

- *Type:* java.lang.String

---

##### `iPv6Address`<sup>Required</sup> <a name="iPv6Address" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.property.iPv6Address"></a>

```java
public java.lang.String getIPv6Address();
```

- *Type:* java.lang.String

---

##### `privateIPv4Address`<sup>Required</sup> <a name="privateIPv4Address" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.property.privateIPv4Address"></a>

```java
public java.lang.String getPrivateIPv4Address();
```

- *Type:* java.lang.String

---

##### `sourceNatIpv6Prefix`<sup>Required</sup> <a name="sourceNatIpv6Prefix" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.property.sourceNatIpv6Prefix"></a>

```java
public java.lang.String getSourceNatIpv6Prefix();
```

- *Type:* java.lang.String

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.property.internalValue"></a>

```java
public IResolvable|Elasticloadbalancingv2LoadBalancerSubnetMappings getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerSubnetMappings">Elasticloadbalancingv2LoadBalancerSubnetMappings</a>

---


### Elasticloadbalancingv2LoadBalancerTagsList <a name="Elasticloadbalancingv2LoadBalancerTagsList" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.elasticloadbalancingv2_load_balancer.Elasticloadbalancingv2LoadBalancerTagsList;

new Elasticloadbalancingv2LoadBalancerTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsList.get"></a>

```java
public Elasticloadbalancingv2LoadBalancerTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTags">Elasticloadbalancingv2LoadBalancerTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<Elasticloadbalancingv2LoadBalancerTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTags">Elasticloadbalancingv2LoadBalancerTags</a>>

---


### Elasticloadbalancingv2LoadBalancerTagsOutputReference <a name="Elasticloadbalancingv2LoadBalancerTagsOutputReference" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.elasticloadbalancingv2_load_balancer.Elasticloadbalancingv2LoadBalancerTagsOutputReference;

new Elasticloadbalancingv2LoadBalancerTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTags">Elasticloadbalancingv2LoadBalancerTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|Elasticloadbalancingv2LoadBalancerTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2LoadBalancer.Elasticloadbalancingv2LoadBalancerTags">Elasticloadbalancingv2LoadBalancerTags</a>

---



