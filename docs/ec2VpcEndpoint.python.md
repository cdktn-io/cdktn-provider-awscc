# `ec2VpcEndpoint` Submodule <a name="`ec2VpcEndpoint` Submodule" id="@cdktn/provider-awscc.ec2VpcEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2VpcEndpoint <a name="Ec2VpcEndpoint" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_vpc_endpoint awscc_ec2_vpc_endpoint}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_vpc_endpoint

ec2VpcEndpoint.Ec2VpcEndpoint(
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
  dns_options: Ec2VpcEndpointDnsOptions = None,
  ip_address_type: str = None,
  policy_document: str = None,
  private_dns_enabled: bool | IResolvable = None,
  resource_configuration_arn: str = None,
  route_table_ids: typing.List[str] = None,
  security_group_ids: typing.List[str] = None,
  service_name: str = None,
  service_network_arn: str = None,
  service_region: str = None,
  subnet_ids: typing.List[str] = None,
  tags: IResolvable | typing.List[Ec2VpcEndpointTags] = None,
  vpc_endpoint_type: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.Initializer.parameter.vpcId">vpc_id</a></code> | <code>str</code> | The ID of the VPC. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.Initializer.parameter.dnsOptions">dns_options</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptions">Ec2VpcEndpointDnsOptions</a></code> | Describes the DNS options for an endpoint. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.Initializer.parameter.ipAddressType">ip_address_type</a></code> | <code>str</code> | The supported IP address types. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.Initializer.parameter.policyDocument">policy_document</a></code> | <code>str</code> | An endpoint policy, which controls access to the service from the VPC. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.Initializer.parameter.privateDnsEnabled">private_dns_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicate whether to associate a private hosted zone with the specified VPC. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.Initializer.parameter.resourceConfigurationArn">resource_configuration_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the resource configuration. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.Initializer.parameter.routeTableIds">route_table_ids</a></code> | <code>typing.List[str]</code> | The IDs of the route tables. Routing is supported only for gateway endpoints. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.Initializer.parameter.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | The IDs of the security groups to associate with the endpoint network interfaces. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.Initializer.parameter.serviceName">service_name</a></code> | <code>str</code> | The name of the endpoint service. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.Initializer.parameter.serviceNetworkArn">service_network_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the service network. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.Initializer.parameter.serviceRegion">service_region</a></code> | <code>str</code> | Describes a Region. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.Initializer.parameter.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | The IDs of the subnets in which to create endpoint network interfaces. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTags">Ec2VpcEndpointTags</a>]</code> | The tags to associate with the endpoint. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.Initializer.parameter.vpcEndpointType">vpc_endpoint_type</a></code> | <code>str</code> | The type of endpoint.  Default: Gateway. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.Initializer.parameter.vpcId"></a>

- *Type:* str

The ID of the VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_vpc_endpoint#vpc_id Ec2VpcEndpoint#vpc_id}

---

##### `dns_options`<sup>Optional</sup> <a name="dns_options" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.Initializer.parameter.dnsOptions"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptions">Ec2VpcEndpointDnsOptions</a>

Describes the DNS options for an endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_vpc_endpoint#dns_options Ec2VpcEndpoint#dns_options}

---

##### `ip_address_type`<sup>Optional</sup> <a name="ip_address_type" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.Initializer.parameter.ipAddressType"></a>

- *Type:* str

The supported IP address types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_vpc_endpoint#ip_address_type Ec2VpcEndpoint#ip_address_type}

---

##### `policy_document`<sup>Optional</sup> <a name="policy_document" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.Initializer.parameter.policyDocument"></a>

- *Type:* str

An endpoint policy, which controls access to the service from the VPC.

The default endpoint policy allows full access to the service. Endpoint policies are supported only for gateway and interface endpoints.
For CloudFormation templates in YAML, you can provide the policy in JSON or YAML format. For example, if you have a JSON policy, you can convert it to YAML before including it in the YAML template, and CFNlong converts the policy to JSON format before calling the API actions for privatelink. Alternatively, you can include the JSON directly in the YAML, as shown in the following `Properties` section:
`Properties: VpcEndpointType: 'Interface' ServiceName: !Sub 'com.amazonaws.${AWS::Region}.logs' PolicyDocument: '{ "Version":"2012-10-17", "Statement": [{ "Effect":"Allow", "Principal":"*", "Action":["logs:Describe*","logs:Get*","logs:List*","logs:FilterLogEvents"], "Resource":"*" }] }'`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_vpc_endpoint#policy_document Ec2VpcEndpoint#policy_document}

---

##### `private_dns_enabled`<sup>Optional</sup> <a name="private_dns_enabled" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.Initializer.parameter.privateDnsEnabled"></a>

- *Type:* bool | cdktn.IResolvable

Indicate whether to associate a private hosted zone with the specified VPC.

The private hosted zone contains a record set for the default public DNS name for the service for the Region (for example, `kinesis.us-east-1.amazonaws.com`), which resolves to the private IP addresses of the endpoint network interfaces in the VPC. This enables you to make requests to the default public DNS name for the service instead of the public DNS names that are automatically generated by the VPC endpoint service.
To use a private hosted zone, you must set the following VPC attributes to `true`: `enableDnsHostnames` and `enableDnsSupport`.
This property is supported only for interface endpoints.
Default: `false`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_vpc_endpoint#private_dns_enabled Ec2VpcEndpoint#private_dns_enabled}

---

##### `resource_configuration_arn`<sup>Optional</sup> <a name="resource_configuration_arn" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.Initializer.parameter.resourceConfigurationArn"></a>

- *Type:* str

The Amazon Resource Name (ARN) of the resource configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_vpc_endpoint#resource_configuration_arn Ec2VpcEndpoint#resource_configuration_arn}

---

##### `route_table_ids`<sup>Optional</sup> <a name="route_table_ids" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.Initializer.parameter.routeTableIds"></a>

- *Type:* typing.List[str]

The IDs of the route tables. Routing is supported only for gateway endpoints.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_vpc_endpoint#route_table_ids Ec2VpcEndpoint#route_table_ids}

---

##### `security_group_ids`<sup>Optional</sup> <a name="security_group_ids" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.Initializer.parameter.securityGroupIds"></a>

- *Type:* typing.List[str]

The IDs of the security groups to associate with the endpoint network interfaces.

If this parameter is not specified, we use the default security group for the VPC. Security groups are supported only for interface endpoints.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_vpc_endpoint#security_group_ids Ec2VpcEndpoint#security_group_ids}

---

##### `service_name`<sup>Optional</sup> <a name="service_name" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.Initializer.parameter.serviceName"></a>

- *Type:* str

The name of the endpoint service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_vpc_endpoint#service_name Ec2VpcEndpoint#service_name}

---

##### `service_network_arn`<sup>Optional</sup> <a name="service_network_arn" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.Initializer.parameter.serviceNetworkArn"></a>

- *Type:* str

The Amazon Resource Name (ARN) of the service network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_vpc_endpoint#service_network_arn Ec2VpcEndpoint#service_network_arn}

---

##### `service_region`<sup>Optional</sup> <a name="service_region" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.Initializer.parameter.serviceRegion"></a>

- *Type:* str

Describes a Region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_vpc_endpoint#service_region Ec2VpcEndpoint#service_region}

---

##### `subnet_ids`<sup>Optional</sup> <a name="subnet_ids" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.Initializer.parameter.subnetIds"></a>

- *Type:* typing.List[str]

The IDs of the subnets in which to create endpoint network interfaces.

You must specify this property for an interface endpoint or a Gateway Load Balancer endpoint. You can't specify this property for a gateway endpoint. For a Gateway Load Balancer endpoint, you can specify only one subnet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_vpc_endpoint#subnet_ids Ec2VpcEndpoint#subnet_ids}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTags">Ec2VpcEndpointTags</a>]

The tags to associate with the endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_vpc_endpoint#tags Ec2VpcEndpoint#tags}

---

##### `vpc_endpoint_type`<sup>Optional</sup> <a name="vpc_endpoint_type" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.Initializer.parameter.vpcEndpointType"></a>

- *Type:* str

The type of endpoint.  Default: Gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_vpc_endpoint#vpc_endpoint_type Ec2VpcEndpoint#vpc_endpoint_type}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.putDnsOptions">put_dns_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.resetDnsOptions">reset_dns_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.resetIpAddressType">reset_ip_address_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.resetPolicyDocument">reset_policy_document</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.resetPrivateDnsEnabled">reset_private_dns_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.resetResourceConfigurationArn">reset_resource_configuration_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.resetRouteTableIds">reset_route_table_ids</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.resetSecurityGroupIds">reset_security_group_ids</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.resetServiceName">reset_service_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.resetServiceNetworkArn">reset_service_network_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.resetServiceRegion">reset_service_region</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.resetSubnetIds">reset_subnet_ids</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.resetVpcEndpointType">reset_vpc_endpoint_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_dns_options` <a name="put_dns_options" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.putDnsOptions"></a>

```python
def put_dns_options(
  dns_record_ip_type: str = None,
  private_dns_only_for_inbound_resolver_endpoint: str = None,
  private_dns_preference: str = None,
  private_dns_specified_domains: typing.List[str] = None
) -> None
```

###### `dns_record_ip_type`<sup>Optional</sup> <a name="dns_record_ip_type" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.putDnsOptions.parameter.dnsRecordIpType"></a>

- *Type:* str

The DNS records created for the endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_vpc_endpoint#dns_record_ip_type Ec2VpcEndpoint#dns_record_ip_type}

---

###### `private_dns_only_for_inbound_resolver_endpoint`<sup>Optional</sup> <a name="private_dns_only_for_inbound_resolver_endpoint" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.putDnsOptions.parameter.privateDnsOnlyForInboundResolverEndpoint"></a>

- *Type:* str

Indicates whether to enable private DNS only for inbound endpoints.

This option is available only for services that support both gateway and interface endpoints. It routes traffic that originates from the VPC to the gateway endpoint and traffic that originates from on-premises to the interface endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_vpc_endpoint#private_dns_only_for_inbound_resolver_endpoint Ec2VpcEndpoint#private_dns_only_for_inbound_resolver_endpoint}

---

###### `private_dns_preference`<sup>Optional</sup> <a name="private_dns_preference" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.putDnsOptions.parameter.privateDnsPreference"></a>

- *Type:* str

The preference for which private domains have a private hosted zone created for and associated with the specified VPC.

Only supported when private DNS is enabled and when the VPC endpoint type is ServiceNetwork or Resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_vpc_endpoint#private_dns_preference Ec2VpcEndpoint#private_dns_preference}

---

###### `private_dns_specified_domains`<sup>Optional</sup> <a name="private_dns_specified_domains" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.putDnsOptions.parameter.privateDnsSpecifiedDomains"></a>

- *Type:* typing.List[str]

Indicates which of the private domains to create private hosted zones for and associate with the specified VPC.

Only supported when private DNS is enabled and the private DNS preference is `VERIFIED_DOMAINS_AND_SPECIFIED_DOMAINS` or `SPECIFIED_DOMAINS_ONLY`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_vpc_endpoint#private_dns_specified_domains Ec2VpcEndpoint#private_dns_specified_domains}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[Ec2VpcEndpointTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTags">Ec2VpcEndpointTags</a>]

---

##### `reset_dns_options` <a name="reset_dns_options" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.resetDnsOptions"></a>

```python
def reset_dns_options() -> None
```

##### `reset_ip_address_type` <a name="reset_ip_address_type" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.resetIpAddressType"></a>

```python
def reset_ip_address_type() -> None
```

##### `reset_policy_document` <a name="reset_policy_document" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.resetPolicyDocument"></a>

```python
def reset_policy_document() -> None
```

##### `reset_private_dns_enabled` <a name="reset_private_dns_enabled" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.resetPrivateDnsEnabled"></a>

```python
def reset_private_dns_enabled() -> None
```

##### `reset_resource_configuration_arn` <a name="reset_resource_configuration_arn" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.resetResourceConfigurationArn"></a>

```python
def reset_resource_configuration_arn() -> None
```

##### `reset_route_table_ids` <a name="reset_route_table_ids" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.resetRouteTableIds"></a>

```python
def reset_route_table_ids() -> None
```

##### `reset_security_group_ids` <a name="reset_security_group_ids" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.resetSecurityGroupIds"></a>

```python
def reset_security_group_ids() -> None
```

##### `reset_service_name` <a name="reset_service_name" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.resetServiceName"></a>

```python
def reset_service_name() -> None
```

##### `reset_service_network_arn` <a name="reset_service_network_arn" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.resetServiceNetworkArn"></a>

```python
def reset_service_network_arn() -> None
```

##### `reset_service_region` <a name="reset_service_region" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.resetServiceRegion"></a>

```python
def reset_service_region() -> None
```

##### `reset_subnet_ids` <a name="reset_subnet_ids" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.resetSubnetIds"></a>

```python
def reset_subnet_ids() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_vpc_endpoint_type` <a name="reset_vpc_endpoint_type" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.resetVpcEndpointType"></a>

```python
def reset_vpc_endpoint_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a Ec2VpcEndpoint resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.isConstruct"></a>

```python
from cdktn_provider_awscc import ec2_vpc_endpoint

ec2VpcEndpoint.Ec2VpcEndpoint.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.isTerraformElement"></a>

```python
from cdktn_provider_awscc import ec2_vpc_endpoint

ec2VpcEndpoint.Ec2VpcEndpoint.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.isTerraformResource"></a>

```python
from cdktn_provider_awscc import ec2_vpc_endpoint

ec2VpcEndpoint.Ec2VpcEndpoint.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import ec2_vpc_endpoint

ec2VpcEndpoint.Ec2VpcEndpoint.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a Ec2VpcEndpoint resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Ec2VpcEndpoint to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Ec2VpcEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_vpc_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Ec2VpcEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.creationTimestamp">creation_timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.dnsEntries">dns_entries</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.dnsOptions">dns_options</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference">Ec2VpcEndpointDnsOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.networkInterfaceIds">network_interface_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsList">Ec2VpcEndpointTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.vpcEndpointId">vpc_endpoint_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.dnsOptionsInput">dns_options_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptions">Ec2VpcEndpointDnsOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.ipAddressTypeInput">ip_address_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.policyDocumentInput">policy_document_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.privateDnsEnabledInput">private_dns_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.resourceConfigurationArnInput">resource_configuration_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.routeTableIdsInput">route_table_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.securityGroupIdsInput">security_group_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.serviceNameInput">service_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.serviceNetworkArnInput">service_network_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.serviceRegionInput">service_region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.subnetIdsInput">subnet_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTags">Ec2VpcEndpointTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.vpcEndpointTypeInput">vpc_endpoint_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.vpcIdInput">vpc_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.ipAddressType">ip_address_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.policyDocument">policy_document</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.privateDnsEnabled">private_dns_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.resourceConfigurationArn">resource_configuration_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.routeTableIds">route_table_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.serviceName">service_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.serviceNetworkArn">service_network_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.serviceRegion">service_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.vpcEndpointType">vpc_endpoint_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.vpcId">vpc_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `creation_timestamp`<sup>Required</sup> <a name="creation_timestamp" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.creationTimestamp"></a>

```python
creation_timestamp: str
```

- *Type:* str

---

##### `dns_entries`<sup>Required</sup> <a name="dns_entries" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.dnsEntries"></a>

```python
dns_entries: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `dns_options`<sup>Required</sup> <a name="dns_options" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.dnsOptions"></a>

```python
dns_options: Ec2VpcEndpointDnsOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference">Ec2VpcEndpointDnsOptionsOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `network_interface_ids`<sup>Required</sup> <a name="network_interface_ids" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.networkInterfaceIds"></a>

```python
network_interface_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.tags"></a>

```python
tags: Ec2VpcEndpointTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsList">Ec2VpcEndpointTagsList</a>

---

##### `vpc_endpoint_id`<sup>Required</sup> <a name="vpc_endpoint_id" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.vpcEndpointId"></a>

```python
vpc_endpoint_id: str
```

- *Type:* str

---

##### `dns_options_input`<sup>Optional</sup> <a name="dns_options_input" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.dnsOptionsInput"></a>

```python
dns_options_input: IResolvable | Ec2VpcEndpointDnsOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptions">Ec2VpcEndpointDnsOptions</a>

---

##### `ip_address_type_input`<sup>Optional</sup> <a name="ip_address_type_input" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.ipAddressTypeInput"></a>

```python
ip_address_type_input: str
```

- *Type:* str

---

##### `policy_document_input`<sup>Optional</sup> <a name="policy_document_input" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.policyDocumentInput"></a>

```python
policy_document_input: str
```

- *Type:* str

---

##### `private_dns_enabled_input`<sup>Optional</sup> <a name="private_dns_enabled_input" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.privateDnsEnabledInput"></a>

```python
private_dns_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `resource_configuration_arn_input`<sup>Optional</sup> <a name="resource_configuration_arn_input" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.resourceConfigurationArnInput"></a>

```python
resource_configuration_arn_input: str
```

- *Type:* str

---

##### `route_table_ids_input`<sup>Optional</sup> <a name="route_table_ids_input" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.routeTableIdsInput"></a>

```python
route_table_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `security_group_ids_input`<sup>Optional</sup> <a name="security_group_ids_input" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.securityGroupIdsInput"></a>

```python
security_group_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `service_name_input`<sup>Optional</sup> <a name="service_name_input" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.serviceNameInput"></a>

```python
service_name_input: str
```

- *Type:* str

---

##### `service_network_arn_input`<sup>Optional</sup> <a name="service_network_arn_input" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.serviceNetworkArnInput"></a>

```python
service_network_arn_input: str
```

- *Type:* str

---

##### `service_region_input`<sup>Optional</sup> <a name="service_region_input" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.serviceRegionInput"></a>

```python
service_region_input: str
```

- *Type:* str

---

##### `subnet_ids_input`<sup>Optional</sup> <a name="subnet_ids_input" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.subnetIdsInput"></a>

```python
subnet_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[Ec2VpcEndpointTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTags">Ec2VpcEndpointTags</a>]

---

##### `vpc_endpoint_type_input`<sup>Optional</sup> <a name="vpc_endpoint_type_input" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.vpcEndpointTypeInput"></a>

```python
vpc_endpoint_type_input: str
```

- *Type:* str

---

##### `vpc_id_input`<sup>Optional</sup> <a name="vpc_id_input" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.vpcIdInput"></a>

```python
vpc_id_input: str
```

- *Type:* str

---

##### `ip_address_type`<sup>Required</sup> <a name="ip_address_type" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.ipAddressType"></a>

```python
ip_address_type: str
```

- *Type:* str

---

##### `policy_document`<sup>Required</sup> <a name="policy_document" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.policyDocument"></a>

```python
policy_document: str
```

- *Type:* str

---

##### `private_dns_enabled`<sup>Required</sup> <a name="private_dns_enabled" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.privateDnsEnabled"></a>

```python
private_dns_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `resource_configuration_arn`<sup>Required</sup> <a name="resource_configuration_arn" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.resourceConfigurationArn"></a>

```python
resource_configuration_arn: str
```

- *Type:* str

---

##### `route_table_ids`<sup>Required</sup> <a name="route_table_ids" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.routeTableIds"></a>

```python
route_table_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `security_group_ids`<sup>Required</sup> <a name="security_group_ids" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `service_name`<sup>Required</sup> <a name="service_name" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.serviceName"></a>

```python
service_name: str
```

- *Type:* str

---

##### `service_network_arn`<sup>Required</sup> <a name="service_network_arn" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.serviceNetworkArn"></a>

```python
service_network_arn: str
```

- *Type:* str

---

##### `service_region`<sup>Required</sup> <a name="service_region" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.serviceRegion"></a>

```python
service_region: str
```

- *Type:* str

---

##### `subnet_ids`<sup>Required</sup> <a name="subnet_ids" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.subnetIds"></a>

```python
subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `vpc_endpoint_type`<sup>Required</sup> <a name="vpc_endpoint_type" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.vpcEndpointType"></a>

```python
vpc_endpoint_type: str
```

- *Type:* str

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2VpcEndpointConfig <a name="Ec2VpcEndpointConfig" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointConfig.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_vpc_endpoint

ec2VpcEndpoint.Ec2VpcEndpointConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  vpc_id: str,
  dns_options: Ec2VpcEndpointDnsOptions = None,
  ip_address_type: str = None,
  policy_document: str = None,
  private_dns_enabled: bool | IResolvable = None,
  resource_configuration_arn: str = None,
  route_table_ids: typing.List[str] = None,
  security_group_ids: typing.List[str] = None,
  service_name: str = None,
  service_network_arn: str = None,
  service_region: str = None,
  subnet_ids: typing.List[str] = None,
  tags: IResolvable | typing.List[Ec2VpcEndpointTags] = None,
  vpc_endpoint_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointConfig.property.vpcId">vpc_id</a></code> | <code>str</code> | The ID of the VPC. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointConfig.property.dnsOptions">dns_options</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptions">Ec2VpcEndpointDnsOptions</a></code> | Describes the DNS options for an endpoint. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointConfig.property.ipAddressType">ip_address_type</a></code> | <code>str</code> | The supported IP address types. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointConfig.property.policyDocument">policy_document</a></code> | <code>str</code> | An endpoint policy, which controls access to the service from the VPC. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointConfig.property.privateDnsEnabled">private_dns_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicate whether to associate a private hosted zone with the specified VPC. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointConfig.property.resourceConfigurationArn">resource_configuration_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the resource configuration. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointConfig.property.routeTableIds">route_table_ids</a></code> | <code>typing.List[str]</code> | The IDs of the route tables. Routing is supported only for gateway endpoints. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointConfig.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | The IDs of the security groups to associate with the endpoint network interfaces. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointConfig.property.serviceName">service_name</a></code> | <code>str</code> | The name of the endpoint service. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointConfig.property.serviceNetworkArn">service_network_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the service network. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointConfig.property.serviceRegion">service_region</a></code> | <code>str</code> | Describes a Region. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointConfig.property.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | The IDs of the subnets in which to create endpoint network interfaces. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTags">Ec2VpcEndpointTags</a>]</code> | The tags to associate with the endpoint. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointConfig.property.vpcEndpointType">vpc_endpoint_type</a></code> | <code>str</code> | The type of endpoint.  Default: Gateway. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointConfig.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

The ID of the VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_vpc_endpoint#vpc_id Ec2VpcEndpoint#vpc_id}

---

##### `dns_options`<sup>Optional</sup> <a name="dns_options" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointConfig.property.dnsOptions"></a>

```python
dns_options: Ec2VpcEndpointDnsOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptions">Ec2VpcEndpointDnsOptions</a>

Describes the DNS options for an endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_vpc_endpoint#dns_options Ec2VpcEndpoint#dns_options}

---

##### `ip_address_type`<sup>Optional</sup> <a name="ip_address_type" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointConfig.property.ipAddressType"></a>

```python
ip_address_type: str
```

- *Type:* str

The supported IP address types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_vpc_endpoint#ip_address_type Ec2VpcEndpoint#ip_address_type}

---

##### `policy_document`<sup>Optional</sup> <a name="policy_document" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointConfig.property.policyDocument"></a>

```python
policy_document: str
```

- *Type:* str

An endpoint policy, which controls access to the service from the VPC.

The default endpoint policy allows full access to the service. Endpoint policies are supported only for gateway and interface endpoints.
For CloudFormation templates in YAML, you can provide the policy in JSON or YAML format. For example, if you have a JSON policy, you can convert it to YAML before including it in the YAML template, and CFNlong converts the policy to JSON format before calling the API actions for privatelink. Alternatively, you can include the JSON directly in the YAML, as shown in the following `Properties` section:
`Properties: VpcEndpointType: 'Interface' ServiceName: !Sub 'com.amazonaws.${AWS::Region}.logs' PolicyDocument: '{ "Version":"2012-10-17", "Statement": [{ "Effect":"Allow", "Principal":"*", "Action":["logs:Describe*","logs:Get*","logs:List*","logs:FilterLogEvents"], "Resource":"*" }] }'`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_vpc_endpoint#policy_document Ec2VpcEndpoint#policy_document}

---

##### `private_dns_enabled`<sup>Optional</sup> <a name="private_dns_enabled" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointConfig.property.privateDnsEnabled"></a>

```python
private_dns_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Indicate whether to associate a private hosted zone with the specified VPC.

The private hosted zone contains a record set for the default public DNS name for the service for the Region (for example, `kinesis.us-east-1.amazonaws.com`), which resolves to the private IP addresses of the endpoint network interfaces in the VPC. This enables you to make requests to the default public DNS name for the service instead of the public DNS names that are automatically generated by the VPC endpoint service.
To use a private hosted zone, you must set the following VPC attributes to `true`: `enableDnsHostnames` and `enableDnsSupport`.
This property is supported only for interface endpoints.
Default: `false`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_vpc_endpoint#private_dns_enabled Ec2VpcEndpoint#private_dns_enabled}

---

##### `resource_configuration_arn`<sup>Optional</sup> <a name="resource_configuration_arn" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointConfig.property.resourceConfigurationArn"></a>

```python
resource_configuration_arn: str
```

- *Type:* str

The Amazon Resource Name (ARN) of the resource configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_vpc_endpoint#resource_configuration_arn Ec2VpcEndpoint#resource_configuration_arn}

---

##### `route_table_ids`<sup>Optional</sup> <a name="route_table_ids" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointConfig.property.routeTableIds"></a>

```python
route_table_ids: typing.List[str]
```

- *Type:* typing.List[str]

The IDs of the route tables. Routing is supported only for gateway endpoints.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_vpc_endpoint#route_table_ids Ec2VpcEndpoint#route_table_ids}

---

##### `security_group_ids`<sup>Optional</sup> <a name="security_group_ids" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointConfig.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

The IDs of the security groups to associate with the endpoint network interfaces.

If this parameter is not specified, we use the default security group for the VPC. Security groups are supported only for interface endpoints.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_vpc_endpoint#security_group_ids Ec2VpcEndpoint#security_group_ids}

---

##### `service_name`<sup>Optional</sup> <a name="service_name" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointConfig.property.serviceName"></a>

```python
service_name: str
```

- *Type:* str

The name of the endpoint service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_vpc_endpoint#service_name Ec2VpcEndpoint#service_name}

---

##### `service_network_arn`<sup>Optional</sup> <a name="service_network_arn" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointConfig.property.serviceNetworkArn"></a>

```python
service_network_arn: str
```

- *Type:* str

The Amazon Resource Name (ARN) of the service network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_vpc_endpoint#service_network_arn Ec2VpcEndpoint#service_network_arn}

---

##### `service_region`<sup>Optional</sup> <a name="service_region" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointConfig.property.serviceRegion"></a>

```python
service_region: str
```

- *Type:* str

Describes a Region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_vpc_endpoint#service_region Ec2VpcEndpoint#service_region}

---

##### `subnet_ids`<sup>Optional</sup> <a name="subnet_ids" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointConfig.property.subnetIds"></a>

```python
subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

The IDs of the subnets in which to create endpoint network interfaces.

You must specify this property for an interface endpoint or a Gateway Load Balancer endpoint. You can't specify this property for a gateway endpoint. For a Gateway Load Balancer endpoint, you can specify only one subnet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_vpc_endpoint#subnet_ids Ec2VpcEndpoint#subnet_ids}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[Ec2VpcEndpointTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTags">Ec2VpcEndpointTags</a>]

The tags to associate with the endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_vpc_endpoint#tags Ec2VpcEndpoint#tags}

---

##### `vpc_endpoint_type`<sup>Optional</sup> <a name="vpc_endpoint_type" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointConfig.property.vpcEndpointType"></a>

```python
vpc_endpoint_type: str
```

- *Type:* str

The type of endpoint.  Default: Gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_vpc_endpoint#vpc_endpoint_type Ec2VpcEndpoint#vpc_endpoint_type}

---

### Ec2VpcEndpointDnsOptions <a name="Ec2VpcEndpointDnsOptions" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptions.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_vpc_endpoint

ec2VpcEndpoint.Ec2VpcEndpointDnsOptions(
  dns_record_ip_type: str = None,
  private_dns_only_for_inbound_resolver_endpoint: str = None,
  private_dns_preference: str = None,
  private_dns_specified_domains: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptions.property.dnsRecordIpType">dns_record_ip_type</a></code> | <code>str</code> | The DNS records created for the endpoint. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptions.property.privateDnsOnlyForInboundResolverEndpoint">private_dns_only_for_inbound_resolver_endpoint</a></code> | <code>str</code> | Indicates whether to enable private DNS only for inbound endpoints. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptions.property.privateDnsPreference">private_dns_preference</a></code> | <code>str</code> | The preference for which private domains have a private hosted zone created for and associated with the specified VPC. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptions.property.privateDnsSpecifiedDomains">private_dns_specified_domains</a></code> | <code>typing.List[str]</code> | Indicates which of the private domains to create private hosted zones for and associate with the specified VPC. |

---

##### `dns_record_ip_type`<sup>Optional</sup> <a name="dns_record_ip_type" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptions.property.dnsRecordIpType"></a>

```python
dns_record_ip_type: str
```

- *Type:* str

The DNS records created for the endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_vpc_endpoint#dns_record_ip_type Ec2VpcEndpoint#dns_record_ip_type}

---

##### `private_dns_only_for_inbound_resolver_endpoint`<sup>Optional</sup> <a name="private_dns_only_for_inbound_resolver_endpoint" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptions.property.privateDnsOnlyForInboundResolverEndpoint"></a>

```python
private_dns_only_for_inbound_resolver_endpoint: str
```

- *Type:* str

Indicates whether to enable private DNS only for inbound endpoints.

This option is available only for services that support both gateway and interface endpoints. It routes traffic that originates from the VPC to the gateway endpoint and traffic that originates from on-premises to the interface endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_vpc_endpoint#private_dns_only_for_inbound_resolver_endpoint Ec2VpcEndpoint#private_dns_only_for_inbound_resolver_endpoint}

---

##### `private_dns_preference`<sup>Optional</sup> <a name="private_dns_preference" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptions.property.privateDnsPreference"></a>

```python
private_dns_preference: str
```

- *Type:* str

The preference for which private domains have a private hosted zone created for and associated with the specified VPC.

Only supported when private DNS is enabled and when the VPC endpoint type is ServiceNetwork or Resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_vpc_endpoint#private_dns_preference Ec2VpcEndpoint#private_dns_preference}

---

##### `private_dns_specified_domains`<sup>Optional</sup> <a name="private_dns_specified_domains" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptions.property.privateDnsSpecifiedDomains"></a>

```python
private_dns_specified_domains: typing.List[str]
```

- *Type:* typing.List[str]

Indicates which of the private domains to create private hosted zones for and associate with the specified VPC.

Only supported when private DNS is enabled and the private DNS preference is `VERIFIED_DOMAINS_AND_SPECIFIED_DOMAINS` or `SPECIFIED_DOMAINS_ONLY`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_vpc_endpoint#private_dns_specified_domains Ec2VpcEndpoint#private_dns_specified_domains}

---

### Ec2VpcEndpointTags <a name="Ec2VpcEndpointTags" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTags.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_vpc_endpoint

ec2VpcEndpoint.Ec2VpcEndpointTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTags.property.key">key</a></code> | <code>str</code> | The key of the tag. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTags.property.value">value</a></code> | <code>str</code> | The value of the tag.  Constraints: Tag values are case-sensitive and accept a maximum of 256 Unicode characters. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key of the tag.

Constraints: Tag keys are case-sensitive and accept a maximum of 127 Unicode characters. May not begin with `aws:`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_vpc_endpoint#key Ec2VpcEndpoint#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value of the tag.  Constraints: Tag values are case-sensitive and accept a maximum of 256 Unicode characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_vpc_endpoint#value Ec2VpcEndpoint#value}

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2VpcEndpointDnsOptionsOutputReference <a name="Ec2VpcEndpointDnsOptionsOutputReference" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_vpc_endpoint

ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.resetDnsRecordIpType">reset_dns_record_ip_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.resetPrivateDnsOnlyForInboundResolverEndpoint">reset_private_dns_only_for_inbound_resolver_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.resetPrivateDnsPreference">reset_private_dns_preference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.resetPrivateDnsSpecifiedDomains">reset_private_dns_specified_domains</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_dns_record_ip_type` <a name="reset_dns_record_ip_type" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.resetDnsRecordIpType"></a>

```python
def reset_dns_record_ip_type() -> None
```

##### `reset_private_dns_only_for_inbound_resolver_endpoint` <a name="reset_private_dns_only_for_inbound_resolver_endpoint" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.resetPrivateDnsOnlyForInboundResolverEndpoint"></a>

```python
def reset_private_dns_only_for_inbound_resolver_endpoint() -> None
```

##### `reset_private_dns_preference` <a name="reset_private_dns_preference" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.resetPrivateDnsPreference"></a>

```python
def reset_private_dns_preference() -> None
```

##### `reset_private_dns_specified_domains` <a name="reset_private_dns_specified_domains" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.resetPrivateDnsSpecifiedDomains"></a>

```python
def reset_private_dns_specified_domains() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.property.dnsRecordIpTypeInput">dns_record_ip_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.property.privateDnsOnlyForInboundResolverEndpointInput">private_dns_only_for_inbound_resolver_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.property.privateDnsPreferenceInput">private_dns_preference_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.property.privateDnsSpecifiedDomainsInput">private_dns_specified_domains_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.property.dnsRecordIpType">dns_record_ip_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.property.privateDnsOnlyForInboundResolverEndpoint">private_dns_only_for_inbound_resolver_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.property.privateDnsPreference">private_dns_preference</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.property.privateDnsSpecifiedDomains">private_dns_specified_domains</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptions">Ec2VpcEndpointDnsOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dns_record_ip_type_input`<sup>Optional</sup> <a name="dns_record_ip_type_input" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.property.dnsRecordIpTypeInput"></a>

```python
dns_record_ip_type_input: str
```

- *Type:* str

---

##### `private_dns_only_for_inbound_resolver_endpoint_input`<sup>Optional</sup> <a name="private_dns_only_for_inbound_resolver_endpoint_input" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.property.privateDnsOnlyForInboundResolverEndpointInput"></a>

```python
private_dns_only_for_inbound_resolver_endpoint_input: str
```

- *Type:* str

---

##### `private_dns_preference_input`<sup>Optional</sup> <a name="private_dns_preference_input" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.property.privateDnsPreferenceInput"></a>

```python
private_dns_preference_input: str
```

- *Type:* str

---

##### `private_dns_specified_domains_input`<sup>Optional</sup> <a name="private_dns_specified_domains_input" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.property.privateDnsSpecifiedDomainsInput"></a>

```python
private_dns_specified_domains_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `dns_record_ip_type`<sup>Required</sup> <a name="dns_record_ip_type" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.property.dnsRecordIpType"></a>

```python
dns_record_ip_type: str
```

- *Type:* str

---

##### `private_dns_only_for_inbound_resolver_endpoint`<sup>Required</sup> <a name="private_dns_only_for_inbound_resolver_endpoint" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.property.privateDnsOnlyForInboundResolverEndpoint"></a>

```python
private_dns_only_for_inbound_resolver_endpoint: str
```

- *Type:* str

---

##### `private_dns_preference`<sup>Required</sup> <a name="private_dns_preference" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.property.privateDnsPreference"></a>

```python
private_dns_preference: str
```

- *Type:* str

---

##### `private_dns_specified_domains`<sup>Required</sup> <a name="private_dns_specified_domains" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.property.privateDnsSpecifiedDomains"></a>

```python
private_dns_specified_domains: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Ec2VpcEndpointDnsOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptions">Ec2VpcEndpointDnsOptions</a>

---


### Ec2VpcEndpointTagsList <a name="Ec2VpcEndpointTagsList" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_vpc_endpoint

ec2VpcEndpoint.Ec2VpcEndpointTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Ec2VpcEndpointTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTags">Ec2VpcEndpointTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[Ec2VpcEndpointTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTags">Ec2VpcEndpointTags</a>]

---


### Ec2VpcEndpointTagsOutputReference <a name="Ec2VpcEndpointTagsOutputReference" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_vpc_endpoint

ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTags">Ec2VpcEndpointTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Ec2VpcEndpointTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTags">Ec2VpcEndpointTags</a>

---



