# `route53ResolverResolverEndpoint` Submodule <a name="`route53ResolverResolverEndpoint` Submodule" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Route53ResolverResolverEndpoint <a name="Route53ResolverResolverEndpoint" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53resolver_resolver_endpoint awscc_route53resolver_resolver_endpoint}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.Initializer"></a>

```python
from cdktn_provider_awscc import route53_resolver_resolver_endpoint

route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  direction: str,
  ip_addresses: IResolvable | typing.List[Route53ResolverResolverEndpointIpAddresses],
  security_group_ids: typing.List[str],
  dns64_enabled: bool | IResolvable = None,
  ipv6_internet_access_enabled: bool | IResolvable = None,
  name: str = None,
  outpost_arn: str = None,
  preferred_instance_type: str = None,
  protocols: typing.List[str] = None,
  resolver_endpoint_type: str = None,
  rni_enhanced_metrics_enabled: bool | IResolvable = None,
  tags: IResolvable | typing.List[Route53ResolverResolverEndpointTags] = None,
  target_name_server_metrics_enabled: bool | IResolvable = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.Initializer.parameter.direction">direction</a></code> | <code>str</code> | Indicates whether the Resolver endpoint allows inbound or outbound DNS queries: - INBOUND: allows DNS queries to your VPC from your network  - OUTBOUND: allows DNS queries from your VPC to your network  - INBOUND_DELEGATION: allows DNS queries to your VPC from your network with authoritative answers from private hosted zones. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.Initializer.parameter.ipAddresses">ip_addresses</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddresses">Route53ResolverResolverEndpointIpAddresses</a>]</code> | The subnets and IP addresses in your VPC that DNS queries originate from (for outbound endpoints) or that you forward DNS queries to (for inbound endpoints). |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.Initializer.parameter.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | The ID of one or more security groups that control access to this VPC. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.Initializer.parameter.dns64Enabled">dns64_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether DNS64 is enabled for the Inbound Resolver Endpoint. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.Initializer.parameter.ipv6InternetAccessEnabled">ipv6_internet_access_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether IPv6 Internet Gateway access is enabled through the Outbound Resolver Endpoint. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.Initializer.parameter.name">name</a></code> | <code>str</code> | A friendly name that lets you easily find a configuration in the Resolver dashboard in the Route 53 console. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.Initializer.parameter.outpostArn">outpost_arn</a></code> | <code>str</code> | The ARN (Amazon Resource Name) for the Outpost. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.Initializer.parameter.preferredInstanceType">preferred_instance_type</a></code> | <code>str</code> | The Amazon EC2 instance type. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.Initializer.parameter.protocols">protocols</a></code> | <code>typing.List[str]</code> | Protocols used for the endpoint. DoH-FIPS is applicable for inbound endpoints only. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.Initializer.parameter.resolverEndpointType">resolver_endpoint_type</a></code> | <code>str</code> | The Resolver endpoint IP address type. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.Initializer.parameter.rniEnhancedMetricsEnabled">rni_enhanced_metrics_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether RNI enhanced metrics are enabled for the Resolver Endpoints. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTags">Route53ResolverResolverEndpointTags</a>]</code> | An array of key-value pairs to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.Initializer.parameter.targetNameServerMetricsEnabled">target_name_server_metrics_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether target name server metrics are enabled for the Outbound Resolver Endpoint. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.Initializer.parameter.direction"></a>

- *Type:* str

Indicates whether the Resolver endpoint allows inbound or outbound DNS queries: - INBOUND: allows DNS queries to your VPC from your network  - OUTBOUND: allows DNS queries from your VPC to your network  - INBOUND_DELEGATION: allows DNS queries to your VPC from your network with authoritative answers from private hosted zones.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53resolver_resolver_endpoint#direction Route53ResolverResolverEndpoint#direction}

---

##### `ip_addresses`<sup>Required</sup> <a name="ip_addresses" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.Initializer.parameter.ipAddresses"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddresses">Route53ResolverResolverEndpointIpAddresses</a>]

The subnets and IP addresses in your VPC that DNS queries originate from (for outbound endpoints) or that you forward DNS queries to (for inbound endpoints).

The subnet ID uniquely identifies a VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53resolver_resolver_endpoint#ip_addresses Route53ResolverResolverEndpoint#ip_addresses}

---

##### `security_group_ids`<sup>Required</sup> <a name="security_group_ids" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.Initializer.parameter.securityGroupIds"></a>

- *Type:* typing.List[str]

The ID of one or more security groups that control access to this VPC.

The security group must include one or more inbound rules (for inbound endpoints) or outbound rules (for outbound endpoints). Inbound and outbound rules must allow TCP and UDP access. For inbound access, open port 53. For outbound access, open the port that you're using for DNS queries on your network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53resolver_resolver_endpoint#security_group_ids Route53ResolverResolverEndpoint#security_group_ids}

---

##### `dns64_enabled`<sup>Optional</sup> <a name="dns64_enabled" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.Initializer.parameter.dns64Enabled"></a>

- *Type:* bool | cdktn.IResolvable

Specifies whether DNS64 is enabled for the Inbound Resolver Endpoint.

When set to true, if a DNS AAAA query is made for a domain that has only an A (IPv4) record, the resolver automatically synthesizes an AAAA (IPv6) response by embedding the IPv4 address into the well-known prefix 64:ff9b::/96. Default is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53resolver_resolver_endpoint#dns_64_enabled Route53ResolverResolverEndpoint#dns_64_enabled}

---

##### `ipv6_internet_access_enabled`<sup>Optional</sup> <a name="ipv6_internet_access_enabled" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.Initializer.parameter.ipv6InternetAccessEnabled"></a>

- *Type:* bool | cdktn.IResolvable

Specifies whether IPv6 Internet Gateway access is enabled through the Outbound Resolver Endpoint.

When set to true, this property allows your Endpoint ENIs to reach public IPv6 target nameservers through an internet gateway. Default is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53resolver_resolver_endpoint#ipv_6_internet_access_enabled Route53ResolverResolverEndpoint#ipv_6_internet_access_enabled}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.Initializer.parameter.name"></a>

- *Type:* str

A friendly name that lets you easily find a configuration in the Resolver dashboard in the Route 53 console.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53resolver_resolver_endpoint#name Route53ResolverResolverEndpoint#name}

---

##### `outpost_arn`<sup>Optional</sup> <a name="outpost_arn" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.Initializer.parameter.outpostArn"></a>

- *Type:* str

The ARN (Amazon Resource Name) for the Outpost.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53resolver_resolver_endpoint#outpost_arn Route53ResolverResolverEndpoint#outpost_arn}

---

##### `preferred_instance_type`<sup>Optional</sup> <a name="preferred_instance_type" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.Initializer.parameter.preferredInstanceType"></a>

- *Type:* str

The Amazon EC2 instance type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53resolver_resolver_endpoint#preferred_instance_type Route53ResolverResolverEndpoint#preferred_instance_type}

---

##### `protocols`<sup>Optional</sup> <a name="protocols" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.Initializer.parameter.protocols"></a>

- *Type:* typing.List[str]

Protocols used for the endpoint. DoH-FIPS is applicable for inbound endpoints only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53resolver_resolver_endpoint#protocols Route53ResolverResolverEndpoint#protocols}

---

##### `resolver_endpoint_type`<sup>Optional</sup> <a name="resolver_endpoint_type" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.Initializer.parameter.resolverEndpointType"></a>

- *Type:* str

The Resolver endpoint IP address type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53resolver_resolver_endpoint#resolver_endpoint_type Route53ResolverResolverEndpoint#resolver_endpoint_type}

---

##### `rni_enhanced_metrics_enabled`<sup>Optional</sup> <a name="rni_enhanced_metrics_enabled" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.Initializer.parameter.rniEnhancedMetricsEnabled"></a>

- *Type:* bool | cdktn.IResolvable

Specifies whether RNI enhanced metrics are enabled for the Resolver Endpoints.

When set to true, one-minute granular metrics are published in CloudWatch for each RNI associated with this endpoint. When set to false, metrics are not published. Default is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53resolver_resolver_endpoint#rni_enhanced_metrics_enabled Route53ResolverResolverEndpoint#rni_enhanced_metrics_enabled}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTags">Route53ResolverResolverEndpointTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53resolver_resolver_endpoint#tags Route53ResolverResolverEndpoint#tags}

---

##### `target_name_server_metrics_enabled`<sup>Optional</sup> <a name="target_name_server_metrics_enabled" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.Initializer.parameter.targetNameServerMetricsEnabled"></a>

- *Type:* bool | cdktn.IResolvable

Specifies whether target name server metrics are enabled for the Outbound Resolver Endpoint.

When set to true, one-minute granular metrics are published in CloudWatch for each target name server associated with this endpoint. When set to false, metrics are not published. Default is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53resolver_resolver_endpoint#target_name_server_metrics_enabled Route53ResolverResolverEndpoint#target_name_server_metrics_enabled}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.putIpAddresses">put_ip_addresses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.resetDns64Enabled">reset_dns64_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.resetIpv6InternetAccessEnabled">reset_ipv6_internet_access_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.resetOutpostArn">reset_outpost_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.resetPreferredInstanceType">reset_preferred_instance_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.resetProtocols">reset_protocols</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.resetResolverEndpointType">reset_resolver_endpoint_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.resetRniEnhancedMetricsEnabled">reset_rni_enhanced_metrics_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.resetTargetNameServerMetricsEnabled">reset_target_name_server_metrics_enabled</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_ip_addresses` <a name="put_ip_addresses" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.putIpAddresses"></a>

```python
def put_ip_addresses(
  value: IResolvable | typing.List[Route53ResolverResolverEndpointIpAddresses]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.putIpAddresses.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddresses">Route53ResolverResolverEndpointIpAddresses</a>]

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[Route53ResolverResolverEndpointTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTags">Route53ResolverResolverEndpointTags</a>]

---

##### `reset_dns64_enabled` <a name="reset_dns64_enabled" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.resetDns64Enabled"></a>

```python
def reset_dns64_enabled() -> None
```

##### `reset_ipv6_internet_access_enabled` <a name="reset_ipv6_internet_access_enabled" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.resetIpv6InternetAccessEnabled"></a>

```python
def reset_ipv6_internet_access_enabled() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_outpost_arn` <a name="reset_outpost_arn" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.resetOutpostArn"></a>

```python
def reset_outpost_arn() -> None
```

##### `reset_preferred_instance_type` <a name="reset_preferred_instance_type" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.resetPreferredInstanceType"></a>

```python
def reset_preferred_instance_type() -> None
```

##### `reset_protocols` <a name="reset_protocols" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.resetProtocols"></a>

```python
def reset_protocols() -> None
```

##### `reset_resolver_endpoint_type` <a name="reset_resolver_endpoint_type" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.resetResolverEndpointType"></a>

```python
def reset_resolver_endpoint_type() -> None
```

##### `reset_rni_enhanced_metrics_enabled` <a name="reset_rni_enhanced_metrics_enabled" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.resetRniEnhancedMetricsEnabled"></a>

```python
def reset_rni_enhanced_metrics_enabled() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_target_name_server_metrics_enabled` <a name="reset_target_name_server_metrics_enabled" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.resetTargetNameServerMetricsEnabled"></a>

```python
def reset_target_name_server_metrics_enabled() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a Route53ResolverResolverEndpoint resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.isConstruct"></a>

```python
from cdktn_provider_awscc import route53_resolver_resolver_endpoint

route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.isTerraformElement"></a>

```python
from cdktn_provider_awscc import route53_resolver_resolver_endpoint

route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.isTerraformResource"></a>

```python
from cdktn_provider_awscc import route53_resolver_resolver_endpoint

route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import route53_resolver_resolver_endpoint

route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a Route53ResolverResolverEndpoint resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Route53ResolverResolverEndpoint to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Route53ResolverResolverEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53resolver_resolver_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Route53ResolverResolverEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.hostVpcId">host_vpc_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.ipAddressCount">ip_address_count</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.ipAddresses">ip_addresses</a></code> | <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesList">Route53ResolverResolverEndpointIpAddressesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.resolverEndpointId">resolver_endpoint_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsList">Route53ResolverResolverEndpointTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.directionInput">direction_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.dns64EnabledInput">dns64_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.ipAddressesInput">ip_addresses_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddresses">Route53ResolverResolverEndpointIpAddresses</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.ipv6InternetAccessEnabledInput">ipv6_internet_access_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.outpostArnInput">outpost_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.preferredInstanceTypeInput">preferred_instance_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.protocolsInput">protocols_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.resolverEndpointTypeInput">resolver_endpoint_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.rniEnhancedMetricsEnabledInput">rni_enhanced_metrics_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.securityGroupIdsInput">security_group_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTags">Route53ResolverResolverEndpointTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.targetNameServerMetricsEnabledInput">target_name_server_metrics_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.direction">direction</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.dns64Enabled">dns64_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.ipv6InternetAccessEnabled">ipv6_internet_access_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.outpostArn">outpost_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.preferredInstanceType">preferred_instance_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.protocols">protocols</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.resolverEndpointType">resolver_endpoint_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.rniEnhancedMetricsEnabled">rni_enhanced_metrics_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.targetNameServerMetricsEnabled">target_name_server_metrics_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `host_vpc_id`<sup>Required</sup> <a name="host_vpc_id" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.hostVpcId"></a>

```python
host_vpc_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ip_address_count`<sup>Required</sup> <a name="ip_address_count" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.ipAddressCount"></a>

```python
ip_address_count: str
```

- *Type:* str

---

##### `ip_addresses`<sup>Required</sup> <a name="ip_addresses" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.ipAddresses"></a>

```python
ip_addresses: Route53ResolverResolverEndpointIpAddressesList
```

- *Type:* <a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesList">Route53ResolverResolverEndpointIpAddressesList</a>

---

##### `resolver_endpoint_id`<sup>Required</sup> <a name="resolver_endpoint_id" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.resolverEndpointId"></a>

```python
resolver_endpoint_id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.tags"></a>

```python
tags: Route53ResolverResolverEndpointTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsList">Route53ResolverResolverEndpointTagsList</a>

---

##### `direction_input`<sup>Optional</sup> <a name="direction_input" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.directionInput"></a>

```python
direction_input: str
```

- *Type:* str

---

##### `dns64_enabled_input`<sup>Optional</sup> <a name="dns64_enabled_input" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.dns64EnabledInput"></a>

```python
dns64_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `ip_addresses_input`<sup>Optional</sup> <a name="ip_addresses_input" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.ipAddressesInput"></a>

```python
ip_addresses_input: IResolvable | typing.List[Route53ResolverResolverEndpointIpAddresses]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddresses">Route53ResolverResolverEndpointIpAddresses</a>]

---

##### `ipv6_internet_access_enabled_input`<sup>Optional</sup> <a name="ipv6_internet_access_enabled_input" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.ipv6InternetAccessEnabledInput"></a>

```python
ipv6_internet_access_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `outpost_arn_input`<sup>Optional</sup> <a name="outpost_arn_input" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.outpostArnInput"></a>

```python
outpost_arn_input: str
```

- *Type:* str

---

##### `preferred_instance_type_input`<sup>Optional</sup> <a name="preferred_instance_type_input" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.preferredInstanceTypeInput"></a>

```python
preferred_instance_type_input: str
```

- *Type:* str

---

##### `protocols_input`<sup>Optional</sup> <a name="protocols_input" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.protocolsInput"></a>

```python
protocols_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `resolver_endpoint_type_input`<sup>Optional</sup> <a name="resolver_endpoint_type_input" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.resolverEndpointTypeInput"></a>

```python
resolver_endpoint_type_input: str
```

- *Type:* str

---

##### `rni_enhanced_metrics_enabled_input`<sup>Optional</sup> <a name="rni_enhanced_metrics_enabled_input" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.rniEnhancedMetricsEnabledInput"></a>

```python
rni_enhanced_metrics_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `security_group_ids_input`<sup>Optional</sup> <a name="security_group_ids_input" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.securityGroupIdsInput"></a>

```python
security_group_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[Route53ResolverResolverEndpointTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTags">Route53ResolverResolverEndpointTags</a>]

---

##### `target_name_server_metrics_enabled_input`<sup>Optional</sup> <a name="target_name_server_metrics_enabled_input" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.targetNameServerMetricsEnabledInput"></a>

```python
target_name_server_metrics_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.direction"></a>

```python
direction: str
```

- *Type:* str

---

##### `dns64_enabled`<sup>Required</sup> <a name="dns64_enabled" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.dns64Enabled"></a>

```python
dns64_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `ipv6_internet_access_enabled`<sup>Required</sup> <a name="ipv6_internet_access_enabled" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.ipv6InternetAccessEnabled"></a>

```python
ipv6_internet_access_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `outpost_arn`<sup>Required</sup> <a name="outpost_arn" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.outpostArn"></a>

```python
outpost_arn: str
```

- *Type:* str

---

##### `preferred_instance_type`<sup>Required</sup> <a name="preferred_instance_type" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.preferredInstanceType"></a>

```python
preferred_instance_type: str
```

- *Type:* str

---

##### `protocols`<sup>Required</sup> <a name="protocols" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.protocols"></a>

```python
protocols: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `resolver_endpoint_type`<sup>Required</sup> <a name="resolver_endpoint_type" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.resolverEndpointType"></a>

```python
resolver_endpoint_type: str
```

- *Type:* str

---

##### `rni_enhanced_metrics_enabled`<sup>Required</sup> <a name="rni_enhanced_metrics_enabled" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.rniEnhancedMetricsEnabled"></a>

```python
rni_enhanced_metrics_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `security_group_ids`<sup>Required</sup> <a name="security_group_ids" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `target_name_server_metrics_enabled`<sup>Required</sup> <a name="target_name_server_metrics_enabled" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.targetNameServerMetricsEnabled"></a>

```python
target_name_server_metrics_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### Route53ResolverResolverEndpointConfig <a name="Route53ResolverResolverEndpointConfig" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointConfig.Initializer"></a>

```python
from cdktn_provider_awscc import route53_resolver_resolver_endpoint

route53ResolverResolverEndpoint.Route53ResolverResolverEndpointConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  direction: str,
  ip_addresses: IResolvable | typing.List[Route53ResolverResolverEndpointIpAddresses],
  security_group_ids: typing.List[str],
  dns64_enabled: bool | IResolvable = None,
  ipv6_internet_access_enabled: bool | IResolvable = None,
  name: str = None,
  outpost_arn: str = None,
  preferred_instance_type: str = None,
  protocols: typing.List[str] = None,
  resolver_endpoint_type: str = None,
  rni_enhanced_metrics_enabled: bool | IResolvable = None,
  tags: IResolvable | typing.List[Route53ResolverResolverEndpointTags] = None,
  target_name_server_metrics_enabled: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointConfig.property.direction">direction</a></code> | <code>str</code> | Indicates whether the Resolver endpoint allows inbound or outbound DNS queries: - INBOUND: allows DNS queries to your VPC from your network  - OUTBOUND: allows DNS queries from your VPC to your network  - INBOUND_DELEGATION: allows DNS queries to your VPC from your network with authoritative answers from private hosted zones. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointConfig.property.ipAddresses">ip_addresses</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddresses">Route53ResolverResolverEndpointIpAddresses</a>]</code> | The subnets and IP addresses in your VPC that DNS queries originate from (for outbound endpoints) or that you forward DNS queries to (for inbound endpoints). |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointConfig.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | The ID of one or more security groups that control access to this VPC. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointConfig.property.dns64Enabled">dns64_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether DNS64 is enabled for the Inbound Resolver Endpoint. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointConfig.property.ipv6InternetAccessEnabled">ipv6_internet_access_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether IPv6 Internet Gateway access is enabled through the Outbound Resolver Endpoint. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointConfig.property.name">name</a></code> | <code>str</code> | A friendly name that lets you easily find a configuration in the Resolver dashboard in the Route 53 console. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointConfig.property.outpostArn">outpost_arn</a></code> | <code>str</code> | The ARN (Amazon Resource Name) for the Outpost. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointConfig.property.preferredInstanceType">preferred_instance_type</a></code> | <code>str</code> | The Amazon EC2 instance type. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointConfig.property.protocols">protocols</a></code> | <code>typing.List[str]</code> | Protocols used for the endpoint. DoH-FIPS is applicable for inbound endpoints only. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointConfig.property.resolverEndpointType">resolver_endpoint_type</a></code> | <code>str</code> | The Resolver endpoint IP address type. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointConfig.property.rniEnhancedMetricsEnabled">rni_enhanced_metrics_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether RNI enhanced metrics are enabled for the Resolver Endpoints. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTags">Route53ResolverResolverEndpointTags</a>]</code> | An array of key-value pairs to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointConfig.property.targetNameServerMetricsEnabled">target_name_server_metrics_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether target name server metrics are enabled for the Outbound Resolver Endpoint. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointConfig.property.direction"></a>

```python
direction: str
```

- *Type:* str

Indicates whether the Resolver endpoint allows inbound or outbound DNS queries: - INBOUND: allows DNS queries to your VPC from your network  - OUTBOUND: allows DNS queries from your VPC to your network  - INBOUND_DELEGATION: allows DNS queries to your VPC from your network with authoritative answers from private hosted zones.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53resolver_resolver_endpoint#direction Route53ResolverResolverEndpoint#direction}

---

##### `ip_addresses`<sup>Required</sup> <a name="ip_addresses" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointConfig.property.ipAddresses"></a>

```python
ip_addresses: IResolvable | typing.List[Route53ResolverResolverEndpointIpAddresses]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddresses">Route53ResolverResolverEndpointIpAddresses</a>]

The subnets and IP addresses in your VPC that DNS queries originate from (for outbound endpoints) or that you forward DNS queries to (for inbound endpoints).

The subnet ID uniquely identifies a VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53resolver_resolver_endpoint#ip_addresses Route53ResolverResolverEndpoint#ip_addresses}

---

##### `security_group_ids`<sup>Required</sup> <a name="security_group_ids" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointConfig.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

The ID of one or more security groups that control access to this VPC.

The security group must include one or more inbound rules (for inbound endpoints) or outbound rules (for outbound endpoints). Inbound and outbound rules must allow TCP and UDP access. For inbound access, open port 53. For outbound access, open the port that you're using for DNS queries on your network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53resolver_resolver_endpoint#security_group_ids Route53ResolverResolverEndpoint#security_group_ids}

---

##### `dns64_enabled`<sup>Optional</sup> <a name="dns64_enabled" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointConfig.property.dns64Enabled"></a>

```python
dns64_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Specifies whether DNS64 is enabled for the Inbound Resolver Endpoint.

When set to true, if a DNS AAAA query is made for a domain that has only an A (IPv4) record, the resolver automatically synthesizes an AAAA (IPv6) response by embedding the IPv4 address into the well-known prefix 64:ff9b::/96. Default is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53resolver_resolver_endpoint#dns_64_enabled Route53ResolverResolverEndpoint#dns_64_enabled}

---

##### `ipv6_internet_access_enabled`<sup>Optional</sup> <a name="ipv6_internet_access_enabled" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointConfig.property.ipv6InternetAccessEnabled"></a>

```python
ipv6_internet_access_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Specifies whether IPv6 Internet Gateway access is enabled through the Outbound Resolver Endpoint.

When set to true, this property allows your Endpoint ENIs to reach public IPv6 target nameservers through an internet gateway. Default is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53resolver_resolver_endpoint#ipv_6_internet_access_enabled Route53ResolverResolverEndpoint#ipv_6_internet_access_enabled}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointConfig.property.name"></a>

```python
name: str
```

- *Type:* str

A friendly name that lets you easily find a configuration in the Resolver dashboard in the Route 53 console.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53resolver_resolver_endpoint#name Route53ResolverResolverEndpoint#name}

---

##### `outpost_arn`<sup>Optional</sup> <a name="outpost_arn" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointConfig.property.outpostArn"></a>

```python
outpost_arn: str
```

- *Type:* str

The ARN (Amazon Resource Name) for the Outpost.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53resolver_resolver_endpoint#outpost_arn Route53ResolverResolverEndpoint#outpost_arn}

---

##### `preferred_instance_type`<sup>Optional</sup> <a name="preferred_instance_type" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointConfig.property.preferredInstanceType"></a>

```python
preferred_instance_type: str
```

- *Type:* str

The Amazon EC2 instance type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53resolver_resolver_endpoint#preferred_instance_type Route53ResolverResolverEndpoint#preferred_instance_type}

---

##### `protocols`<sup>Optional</sup> <a name="protocols" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointConfig.property.protocols"></a>

```python
protocols: typing.List[str]
```

- *Type:* typing.List[str]

Protocols used for the endpoint. DoH-FIPS is applicable for inbound endpoints only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53resolver_resolver_endpoint#protocols Route53ResolverResolverEndpoint#protocols}

---

##### `resolver_endpoint_type`<sup>Optional</sup> <a name="resolver_endpoint_type" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointConfig.property.resolverEndpointType"></a>

```python
resolver_endpoint_type: str
```

- *Type:* str

The Resolver endpoint IP address type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53resolver_resolver_endpoint#resolver_endpoint_type Route53ResolverResolverEndpoint#resolver_endpoint_type}

---

##### `rni_enhanced_metrics_enabled`<sup>Optional</sup> <a name="rni_enhanced_metrics_enabled" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointConfig.property.rniEnhancedMetricsEnabled"></a>

```python
rni_enhanced_metrics_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Specifies whether RNI enhanced metrics are enabled for the Resolver Endpoints.

When set to true, one-minute granular metrics are published in CloudWatch for each RNI associated with this endpoint. When set to false, metrics are not published. Default is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53resolver_resolver_endpoint#rni_enhanced_metrics_enabled Route53ResolverResolverEndpoint#rni_enhanced_metrics_enabled}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[Route53ResolverResolverEndpointTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTags">Route53ResolverResolverEndpointTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53resolver_resolver_endpoint#tags Route53ResolverResolverEndpoint#tags}

---

##### `target_name_server_metrics_enabled`<sup>Optional</sup> <a name="target_name_server_metrics_enabled" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointConfig.property.targetNameServerMetricsEnabled"></a>

```python
target_name_server_metrics_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Specifies whether target name server metrics are enabled for the Outbound Resolver Endpoint.

When set to true, one-minute granular metrics are published in CloudWatch for each target name server associated with this endpoint. When set to false, metrics are not published. Default is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53resolver_resolver_endpoint#target_name_server_metrics_enabled Route53ResolverResolverEndpoint#target_name_server_metrics_enabled}

---

### Route53ResolverResolverEndpointIpAddresses <a name="Route53ResolverResolverEndpointIpAddresses" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddresses"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddresses.Initializer"></a>

```python
from cdktn_provider_awscc import route53_resolver_resolver_endpoint

route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddresses(
  subnet_id: str,
  ip: str = None,
  ipv6: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddresses.property.subnetId">subnet_id</a></code> | <code>str</code> | The ID of the subnet that contains the IP address. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddresses.property.ip">ip</a></code> | <code>str</code> | The IPv4 address that you want to use for DNS queries. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddresses.property.ipv6">ipv6</a></code> | <code>str</code> | The IPv6 address that you want to use for DNS queries. |

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddresses.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

The ID of the subnet that contains the IP address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53resolver_resolver_endpoint#subnet_id Route53ResolverResolverEndpoint#subnet_id}

---

##### `ip`<sup>Optional</sup> <a name="ip" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddresses.property.ip"></a>

```python
ip: str
```

- *Type:* str

The IPv4 address that you want to use for DNS queries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53resolver_resolver_endpoint#ip Route53ResolverResolverEndpoint#ip}

---

##### `ipv6`<sup>Optional</sup> <a name="ipv6" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddresses.property.ipv6"></a>

```python
ipv6: str
```

- *Type:* str

The IPv6 address that you want to use for DNS queries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53resolver_resolver_endpoint#ipv_6 Route53ResolverResolverEndpoint#ipv_6}

---

### Route53ResolverResolverEndpointTags <a name="Route53ResolverResolverEndpointTags" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTags.Initializer"></a>

```python
from cdktn_provider_awscc import route53_resolver_resolver_endpoint

route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTags.property.key">key</a></code> | <code>str</code> | The name for the tag. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTags.property.value">value</a></code> | <code>str</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTags.property.key"></a>

```python
key: str
```

- *Type:* str

The name for the tag.

For example, if you want to associate Resolver resources with the account IDs of your customers for billing purposes, the value of Key might be account-id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53resolver_resolver_endpoint#key Route53ResolverResolverEndpoint#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag.

For example, if Key is account-id, then Value might be the ID of the customer account that you're creating the resource for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53resolver_resolver_endpoint#value Route53ResolverResolverEndpoint#value}

---

## Classes <a name="Classes" id="Classes"></a>

### Route53ResolverResolverEndpointIpAddressesList <a name="Route53ResolverResolverEndpointIpAddressesList" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesList.Initializer"></a>

```python
from cdktn_provider_awscc import route53_resolver_resolver_endpoint

route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Route53ResolverResolverEndpointIpAddressesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddresses">Route53ResolverResolverEndpointIpAddresses</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[Route53ResolverResolverEndpointIpAddresses]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddresses">Route53ResolverResolverEndpointIpAddresses</a>]

---


### Route53ResolverResolverEndpointIpAddressesOutputReference <a name="Route53ResolverResolverEndpointIpAddressesOutputReference" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import route53_resolver_resolver_endpoint

route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.resetIp">reset_ip</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.resetIpv6">reset_ipv6</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_ip` <a name="reset_ip" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.resetIp"></a>

```python
def reset_ip() -> None
```

##### `reset_ipv6` <a name="reset_ipv6" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.resetIpv6"></a>

```python
def reset_ipv6() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.property.ipInput">ip_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.property.ipv6Input">ipv6_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.property.subnetIdInput">subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.property.ip">ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.property.ipv6">ipv6</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddresses">Route53ResolverResolverEndpointIpAddresses</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ip_input`<sup>Optional</sup> <a name="ip_input" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.property.ipInput"></a>

```python
ip_input: str
```

- *Type:* str

---

##### `ipv6_input`<sup>Optional</sup> <a name="ipv6_input" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.property.ipv6Input"></a>

```python
ipv6_input: str
```

- *Type:* str

---

##### `subnet_id_input`<sup>Optional</sup> <a name="subnet_id_input" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.property.subnetIdInput"></a>

```python
subnet_id_input: str
```

- *Type:* str

---

##### `ip`<sup>Required</sup> <a name="ip" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.property.ip"></a>

```python
ip: str
```

- *Type:* str

---

##### `ipv6`<sup>Required</sup> <a name="ipv6" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.property.ipv6"></a>

```python
ipv6: str
```

- *Type:* str

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Route53ResolverResolverEndpointIpAddresses
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddresses">Route53ResolverResolverEndpointIpAddresses</a>

---


### Route53ResolverResolverEndpointTagsList <a name="Route53ResolverResolverEndpointTagsList" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import route53_resolver_resolver_endpoint

route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Route53ResolverResolverEndpointTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTags">Route53ResolverResolverEndpointTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[Route53ResolverResolverEndpointTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTags">Route53ResolverResolverEndpointTags</a>]

---


### Route53ResolverResolverEndpointTagsOutputReference <a name="Route53ResolverResolverEndpointTagsOutputReference" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import route53_resolver_resolver_endpoint

route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTags">Route53ResolverResolverEndpointTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Route53ResolverResolverEndpointTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTags">Route53ResolverResolverEndpointTags</a>

---



