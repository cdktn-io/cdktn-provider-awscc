# `ec2VpcEndpoint` Submodule <a name="`ec2VpcEndpoint` Submodule" id="@cdktn/provider-awscc.ec2VpcEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2VpcEndpoint <a name="Ec2VpcEndpoint" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_vpc_endpoint awscc_ec2_vpc_endpoint}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_vpc_endpoint.Ec2VpcEndpoint;

Ec2VpcEndpoint.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .vpcId(java.lang.String)
//  .dnsOptions(Ec2VpcEndpointDnsOptions)
//  .ipAddressType(java.lang.String)
//  .policyDocument(java.lang.String)
//  .privateDnsEnabled(java.lang.Boolean|IResolvable)
//  .resourceConfigurationArn(java.lang.String)
//  .routeTableIds(java.util.List<java.lang.String>)
//  .securityGroupIds(java.util.List<java.lang.String>)
//  .serviceName(java.lang.String)
//  .serviceNetworkArn(java.lang.String)
//  .serviceRegion(java.lang.String)
//  .subnetIds(java.util.List<java.lang.String>)
//  .tags(IResolvable|java.util.List<Ec2VpcEndpointTags>)
//  .vpcEndpointType(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.Initializer.parameter.vpcId">vpcId</a></code> | <code>java.lang.String</code> | The ID of the VPC. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.Initializer.parameter.dnsOptions">dnsOptions</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptions">Ec2VpcEndpointDnsOptions</a></code> | Describes the DNS options for an endpoint. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.Initializer.parameter.ipAddressType">ipAddressType</a></code> | <code>java.lang.String</code> | The supported IP address types. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.Initializer.parameter.policyDocument">policyDocument</a></code> | <code>java.lang.String</code> | An endpoint policy, which controls access to the service from the VPC. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.Initializer.parameter.privateDnsEnabled">privateDnsEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Indicate whether to associate a private hosted zone with the specified VPC. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.Initializer.parameter.resourceConfigurationArn">resourceConfigurationArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the resource configuration. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.Initializer.parameter.routeTableIds">routeTableIds</a></code> | <code>java.util.List<java.lang.String></code> | The IDs of the route tables. Routing is supported only for gateway endpoints. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.Initializer.parameter.securityGroupIds">securityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | The IDs of the security groups to associate with the endpoint network interfaces. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.Initializer.parameter.serviceName">serviceName</a></code> | <code>java.lang.String</code> | The name of the endpoint service. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.Initializer.parameter.serviceNetworkArn">serviceNetworkArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the service network. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.Initializer.parameter.serviceRegion">serviceRegion</a></code> | <code>java.lang.String</code> | Describes a Region. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.Initializer.parameter.subnetIds">subnetIds</a></code> | <code>java.util.List<java.lang.String></code> | The IDs of the subnets in which to create endpoint network interfaces. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTags">Ec2VpcEndpointTags</a>></code> | The tags to associate with the endpoint. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.Initializer.parameter.vpcEndpointType">vpcEndpointType</a></code> | <code>java.lang.String</code> | The type of endpoint.  Default: Gateway. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.Initializer.parameter.vpcId"></a>

- *Type:* java.lang.String

The ID of the VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_vpc_endpoint#vpc_id Ec2VpcEndpoint#vpc_id}

---

##### `dnsOptions`<sup>Optional</sup> <a name="dnsOptions" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.Initializer.parameter.dnsOptions"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptions">Ec2VpcEndpointDnsOptions</a>

Describes the DNS options for an endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_vpc_endpoint#dns_options Ec2VpcEndpoint#dns_options}

---

##### `ipAddressType`<sup>Optional</sup> <a name="ipAddressType" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.Initializer.parameter.ipAddressType"></a>

- *Type:* java.lang.String

The supported IP address types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_vpc_endpoint#ip_address_type Ec2VpcEndpoint#ip_address_type}

---

##### `policyDocument`<sup>Optional</sup> <a name="policyDocument" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.Initializer.parameter.policyDocument"></a>

- *Type:* java.lang.String

An endpoint policy, which controls access to the service from the VPC.

The default endpoint policy allows full access to the service. Endpoint policies are supported only for gateway and interface endpoints.
For CloudFormation templates in YAML, you can provide the policy in JSON or YAML format. For example, if you have a JSON policy, you can convert it to YAML before including it in the YAML template, and CFNlong converts the policy to JSON format before calling the API actions for privatelink. Alternatively, you can include the JSON directly in the YAML, as shown in the following `Properties` section:
`Properties: VpcEndpointType: 'Interface' ServiceName: !Sub 'com.amazonaws.${AWS::Region}.logs' PolicyDocument: '{ "Version":"2012-10-17", "Statement": [{ "Effect":"Allow", "Principal":"*", "Action":["logs:Describe*","logs:Get*","logs:List*","logs:FilterLogEvents"], "Resource":"*" }] }'`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_vpc_endpoint#policy_document Ec2VpcEndpoint#policy_document}

---

##### `privateDnsEnabled`<sup>Optional</sup> <a name="privateDnsEnabled" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.Initializer.parameter.privateDnsEnabled"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Indicate whether to associate a private hosted zone with the specified VPC.

The private hosted zone contains a record set for the default public DNS name for the service for the Region (for example, `kinesis.us-east-1.amazonaws.com`), which resolves to the private IP addresses of the endpoint network interfaces in the VPC. This enables you to make requests to the default public DNS name for the service instead of the public DNS names that are automatically generated by the VPC endpoint service.
To use a private hosted zone, you must set the following VPC attributes to `true`: `enableDnsHostnames` and `enableDnsSupport`.
This property is supported only for interface endpoints.
Default: `false`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_vpc_endpoint#private_dns_enabled Ec2VpcEndpoint#private_dns_enabled}

---

##### `resourceConfigurationArn`<sup>Optional</sup> <a name="resourceConfigurationArn" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.Initializer.parameter.resourceConfigurationArn"></a>

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the resource configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_vpc_endpoint#resource_configuration_arn Ec2VpcEndpoint#resource_configuration_arn}

---

##### `routeTableIds`<sup>Optional</sup> <a name="routeTableIds" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.Initializer.parameter.routeTableIds"></a>

- *Type:* java.util.List<java.lang.String>

The IDs of the route tables. Routing is supported only for gateway endpoints.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_vpc_endpoint#route_table_ids Ec2VpcEndpoint#route_table_ids}

---

##### `securityGroupIds`<sup>Optional</sup> <a name="securityGroupIds" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.Initializer.parameter.securityGroupIds"></a>

- *Type:* java.util.List<java.lang.String>

The IDs of the security groups to associate with the endpoint network interfaces.

If this parameter is not specified, we use the default security group for the VPC. Security groups are supported only for interface endpoints.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_vpc_endpoint#security_group_ids Ec2VpcEndpoint#security_group_ids}

---

##### `serviceName`<sup>Optional</sup> <a name="serviceName" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.Initializer.parameter.serviceName"></a>

- *Type:* java.lang.String

The name of the endpoint service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_vpc_endpoint#service_name Ec2VpcEndpoint#service_name}

---

##### `serviceNetworkArn`<sup>Optional</sup> <a name="serviceNetworkArn" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.Initializer.parameter.serviceNetworkArn"></a>

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the service network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_vpc_endpoint#service_network_arn Ec2VpcEndpoint#service_network_arn}

---

##### `serviceRegion`<sup>Optional</sup> <a name="serviceRegion" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.Initializer.parameter.serviceRegion"></a>

- *Type:* java.lang.String

Describes a Region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_vpc_endpoint#service_region Ec2VpcEndpoint#service_region}

---

##### `subnetIds`<sup>Optional</sup> <a name="subnetIds" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.Initializer.parameter.subnetIds"></a>

- *Type:* java.util.List<java.lang.String>

The IDs of the subnets in which to create endpoint network interfaces.

You must specify this property for an interface endpoint or a Gateway Load Balancer endpoint. You can't specify this property for a gateway endpoint. For a Gateway Load Balancer endpoint, you can specify only one subnet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_vpc_endpoint#subnet_ids Ec2VpcEndpoint#subnet_ids}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTags">Ec2VpcEndpointTags</a>>

The tags to associate with the endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_vpc_endpoint#tags Ec2VpcEndpoint#tags}

---

##### `vpcEndpointType`<sup>Optional</sup> <a name="vpcEndpointType" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.Initializer.parameter.vpcEndpointType"></a>

- *Type:* java.lang.String

The type of endpoint.  Default: Gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_vpc_endpoint#vpc_endpoint_type Ec2VpcEndpoint#vpc_endpoint_type}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.putDnsOptions">putDnsOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.resetDnsOptions">resetDnsOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.resetIpAddressType">resetIpAddressType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.resetPolicyDocument">resetPolicyDocument</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.resetPrivateDnsEnabled">resetPrivateDnsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.resetResourceConfigurationArn">resetResourceConfigurationArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.resetRouteTableIds">resetRouteTableIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.resetSecurityGroupIds">resetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.resetServiceName">resetServiceName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.resetServiceNetworkArn">resetServiceNetworkArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.resetServiceRegion">resetServiceRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.resetSubnetIds">resetSubnetIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.resetVpcEndpointType">resetVpcEndpointType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDnsOptions` <a name="putDnsOptions" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.putDnsOptions"></a>

```java
public void putDnsOptions(Ec2VpcEndpointDnsOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.putDnsOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptions">Ec2VpcEndpointDnsOptions</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<Ec2VpcEndpointTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTags">Ec2VpcEndpointTags</a>>

---

##### `resetDnsOptions` <a name="resetDnsOptions" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.resetDnsOptions"></a>

```java
public void resetDnsOptions()
```

##### `resetIpAddressType` <a name="resetIpAddressType" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.resetIpAddressType"></a>

```java
public void resetIpAddressType()
```

##### `resetPolicyDocument` <a name="resetPolicyDocument" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.resetPolicyDocument"></a>

```java
public void resetPolicyDocument()
```

##### `resetPrivateDnsEnabled` <a name="resetPrivateDnsEnabled" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.resetPrivateDnsEnabled"></a>

```java
public void resetPrivateDnsEnabled()
```

##### `resetResourceConfigurationArn` <a name="resetResourceConfigurationArn" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.resetResourceConfigurationArn"></a>

```java
public void resetResourceConfigurationArn()
```

##### `resetRouteTableIds` <a name="resetRouteTableIds" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.resetRouteTableIds"></a>

```java
public void resetRouteTableIds()
```

##### `resetSecurityGroupIds` <a name="resetSecurityGroupIds" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.resetSecurityGroupIds"></a>

```java
public void resetSecurityGroupIds()
```

##### `resetServiceName` <a name="resetServiceName" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.resetServiceName"></a>

```java
public void resetServiceName()
```

##### `resetServiceNetworkArn` <a name="resetServiceNetworkArn" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.resetServiceNetworkArn"></a>

```java
public void resetServiceNetworkArn()
```

##### `resetServiceRegion` <a name="resetServiceRegion" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.resetServiceRegion"></a>

```java
public void resetServiceRegion()
```

##### `resetSubnetIds` <a name="resetSubnetIds" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.resetSubnetIds"></a>

```java
public void resetSubnetIds()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.resetTags"></a>

```java
public void resetTags()
```

##### `resetVpcEndpointType` <a name="resetVpcEndpointType" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.resetVpcEndpointType"></a>

```java
public void resetVpcEndpointType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a Ec2VpcEndpoint resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.isConstruct"></a>

```java
import io.cdktn.providers.awscc.ec2_vpc_endpoint.Ec2VpcEndpoint;

Ec2VpcEndpoint.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.ec2_vpc_endpoint.Ec2VpcEndpoint;

Ec2VpcEndpoint.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.ec2_vpc_endpoint.Ec2VpcEndpoint;

Ec2VpcEndpoint.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.ec2_vpc_endpoint.Ec2VpcEndpoint;

Ec2VpcEndpoint.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),Ec2VpcEndpoint.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a Ec2VpcEndpoint resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the Ec2VpcEndpoint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing Ec2VpcEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_vpc_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the Ec2VpcEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.creationTimestamp">creationTimestamp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.dnsEntries">dnsEntries</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.dnsOptions">dnsOptions</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference">Ec2VpcEndpointDnsOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.networkInterfaceIds">networkInterfaceIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsList">Ec2VpcEndpointTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.vpcEndpointId">vpcEndpointId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.dnsOptionsInput">dnsOptionsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptions">Ec2VpcEndpointDnsOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.ipAddressTypeInput">ipAddressTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.policyDocumentInput">policyDocumentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.privateDnsEnabledInput">privateDnsEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.resourceConfigurationArnInput">resourceConfigurationArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.routeTableIdsInput">routeTableIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.securityGroupIdsInput">securityGroupIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.serviceNameInput">serviceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.serviceNetworkArnInput">serviceNetworkArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.serviceRegionInput">serviceRegionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.subnetIdsInput">subnetIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTags">Ec2VpcEndpointTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.vpcEndpointTypeInput">vpcEndpointTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.vpcIdInput">vpcIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.ipAddressType">ipAddressType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.policyDocument">policyDocument</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.privateDnsEnabled">privateDnsEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.resourceConfigurationArn">resourceConfigurationArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.routeTableIds">routeTableIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.securityGroupIds">securityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.serviceName">serviceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.serviceNetworkArn">serviceNetworkArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.serviceRegion">serviceRegion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.subnetIds">subnetIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.vpcEndpointType">vpcEndpointType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.vpcId">vpcId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `creationTimestamp`<sup>Required</sup> <a name="creationTimestamp" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.creationTimestamp"></a>

```java
public java.lang.String getCreationTimestamp();
```

- *Type:* java.lang.String

---

##### `dnsEntries`<sup>Required</sup> <a name="dnsEntries" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.dnsEntries"></a>

```java
public java.util.List<java.lang.String> getDnsEntries();
```

- *Type:* java.util.List<java.lang.String>

---

##### `dnsOptions`<sup>Required</sup> <a name="dnsOptions" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.dnsOptions"></a>

```java
public Ec2VpcEndpointDnsOptionsOutputReference getDnsOptions();
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference">Ec2VpcEndpointDnsOptionsOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `networkInterfaceIds`<sup>Required</sup> <a name="networkInterfaceIds" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.networkInterfaceIds"></a>

```java
public java.util.List<java.lang.String> getNetworkInterfaceIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.tags"></a>

```java
public Ec2VpcEndpointTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsList">Ec2VpcEndpointTagsList</a>

---

##### `vpcEndpointId`<sup>Required</sup> <a name="vpcEndpointId" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.vpcEndpointId"></a>

```java
public java.lang.String getVpcEndpointId();
```

- *Type:* java.lang.String

---

##### `dnsOptionsInput`<sup>Optional</sup> <a name="dnsOptionsInput" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.dnsOptionsInput"></a>

```java
public IResolvable|Ec2VpcEndpointDnsOptions getDnsOptionsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptions">Ec2VpcEndpointDnsOptions</a>

---

##### `ipAddressTypeInput`<sup>Optional</sup> <a name="ipAddressTypeInput" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.ipAddressTypeInput"></a>

```java
public java.lang.String getIpAddressTypeInput();
```

- *Type:* java.lang.String

---

##### `policyDocumentInput`<sup>Optional</sup> <a name="policyDocumentInput" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.policyDocumentInput"></a>

```java
public java.lang.String getPolicyDocumentInput();
```

- *Type:* java.lang.String

---

##### `privateDnsEnabledInput`<sup>Optional</sup> <a name="privateDnsEnabledInput" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.privateDnsEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getPrivateDnsEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `resourceConfigurationArnInput`<sup>Optional</sup> <a name="resourceConfigurationArnInput" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.resourceConfigurationArnInput"></a>

```java
public java.lang.String getResourceConfigurationArnInput();
```

- *Type:* java.lang.String

---

##### `routeTableIdsInput`<sup>Optional</sup> <a name="routeTableIdsInput" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.routeTableIdsInput"></a>

```java
public java.util.List<java.lang.String> getRouteTableIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `securityGroupIdsInput`<sup>Optional</sup> <a name="securityGroupIdsInput" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.securityGroupIdsInput"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `serviceNameInput`<sup>Optional</sup> <a name="serviceNameInput" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.serviceNameInput"></a>

```java
public java.lang.String getServiceNameInput();
```

- *Type:* java.lang.String

---

##### `serviceNetworkArnInput`<sup>Optional</sup> <a name="serviceNetworkArnInput" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.serviceNetworkArnInput"></a>

```java
public java.lang.String getServiceNetworkArnInput();
```

- *Type:* java.lang.String

---

##### `serviceRegionInput`<sup>Optional</sup> <a name="serviceRegionInput" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.serviceRegionInput"></a>

```java
public java.lang.String getServiceRegionInput();
```

- *Type:* java.lang.String

---

##### `subnetIdsInput`<sup>Optional</sup> <a name="subnetIdsInput" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.subnetIdsInput"></a>

```java
public java.util.List<java.lang.String> getSubnetIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.tagsInput"></a>

```java
public IResolvable|java.util.List<Ec2VpcEndpointTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTags">Ec2VpcEndpointTags</a>>

---

##### `vpcEndpointTypeInput`<sup>Optional</sup> <a name="vpcEndpointTypeInput" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.vpcEndpointTypeInput"></a>

```java
public java.lang.String getVpcEndpointTypeInput();
```

- *Type:* java.lang.String

---

##### `vpcIdInput`<sup>Optional</sup> <a name="vpcIdInput" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.vpcIdInput"></a>

```java
public java.lang.String getVpcIdInput();
```

- *Type:* java.lang.String

---

##### `ipAddressType`<sup>Required</sup> <a name="ipAddressType" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.ipAddressType"></a>

```java
public java.lang.String getIpAddressType();
```

- *Type:* java.lang.String

---

##### `policyDocument`<sup>Required</sup> <a name="policyDocument" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.policyDocument"></a>

```java
public java.lang.String getPolicyDocument();
```

- *Type:* java.lang.String

---

##### `privateDnsEnabled`<sup>Required</sup> <a name="privateDnsEnabled" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.privateDnsEnabled"></a>

```java
public java.lang.Boolean|IResolvable getPrivateDnsEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `resourceConfigurationArn`<sup>Required</sup> <a name="resourceConfigurationArn" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.resourceConfigurationArn"></a>

```java
public java.lang.String getResourceConfigurationArn();
```

- *Type:* java.lang.String

---

##### `routeTableIds`<sup>Required</sup> <a name="routeTableIds" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.routeTableIds"></a>

```java
public java.util.List<java.lang.String> getRouteTableIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.securityGroupIds"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.serviceName"></a>

```java
public java.lang.String getServiceName();
```

- *Type:* java.lang.String

---

##### `serviceNetworkArn`<sup>Required</sup> <a name="serviceNetworkArn" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.serviceNetworkArn"></a>

```java
public java.lang.String getServiceNetworkArn();
```

- *Type:* java.lang.String

---

##### `serviceRegion`<sup>Required</sup> <a name="serviceRegion" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.serviceRegion"></a>

```java
public java.lang.String getServiceRegion();
```

- *Type:* java.lang.String

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.subnetIds"></a>

```java
public java.util.List<java.lang.String> getSubnetIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `vpcEndpointType`<sup>Required</sup> <a name="vpcEndpointType" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.vpcEndpointType"></a>

```java
public java.lang.String getVpcEndpointType();
```

- *Type:* java.lang.String

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.vpcId"></a>

```java
public java.lang.String getVpcId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2VpcEndpointConfig <a name="Ec2VpcEndpointConfig" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_vpc_endpoint.Ec2VpcEndpointConfig;

Ec2VpcEndpointConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .vpcId(java.lang.String)
//  .dnsOptions(Ec2VpcEndpointDnsOptions)
//  .ipAddressType(java.lang.String)
//  .policyDocument(java.lang.String)
//  .privateDnsEnabled(java.lang.Boolean|IResolvable)
//  .resourceConfigurationArn(java.lang.String)
//  .routeTableIds(java.util.List<java.lang.String>)
//  .securityGroupIds(java.util.List<java.lang.String>)
//  .serviceName(java.lang.String)
//  .serviceNetworkArn(java.lang.String)
//  .serviceRegion(java.lang.String)
//  .subnetIds(java.util.List<java.lang.String>)
//  .tags(IResolvable|java.util.List<Ec2VpcEndpointTags>)
//  .vpcEndpointType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointConfig.property.vpcId">vpcId</a></code> | <code>java.lang.String</code> | The ID of the VPC. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointConfig.property.dnsOptions">dnsOptions</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptions">Ec2VpcEndpointDnsOptions</a></code> | Describes the DNS options for an endpoint. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointConfig.property.ipAddressType">ipAddressType</a></code> | <code>java.lang.String</code> | The supported IP address types. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointConfig.property.policyDocument">policyDocument</a></code> | <code>java.lang.String</code> | An endpoint policy, which controls access to the service from the VPC. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointConfig.property.privateDnsEnabled">privateDnsEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Indicate whether to associate a private hosted zone with the specified VPC. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointConfig.property.resourceConfigurationArn">resourceConfigurationArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the resource configuration. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointConfig.property.routeTableIds">routeTableIds</a></code> | <code>java.util.List<java.lang.String></code> | The IDs of the route tables. Routing is supported only for gateway endpoints. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointConfig.property.securityGroupIds">securityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | The IDs of the security groups to associate with the endpoint network interfaces. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointConfig.property.serviceName">serviceName</a></code> | <code>java.lang.String</code> | The name of the endpoint service. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointConfig.property.serviceNetworkArn">serviceNetworkArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the service network. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointConfig.property.serviceRegion">serviceRegion</a></code> | <code>java.lang.String</code> | Describes a Region. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointConfig.property.subnetIds">subnetIds</a></code> | <code>java.util.List<java.lang.String></code> | The IDs of the subnets in which to create endpoint network interfaces. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTags">Ec2VpcEndpointTags</a>></code> | The tags to associate with the endpoint. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointConfig.property.vpcEndpointType">vpcEndpointType</a></code> | <code>java.lang.String</code> | The type of endpoint.  Default: Gateway. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointConfig.property.vpcId"></a>

```java
public java.lang.String getVpcId();
```

- *Type:* java.lang.String

The ID of the VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_vpc_endpoint#vpc_id Ec2VpcEndpoint#vpc_id}

---

##### `dnsOptions`<sup>Optional</sup> <a name="dnsOptions" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointConfig.property.dnsOptions"></a>

```java
public Ec2VpcEndpointDnsOptions getDnsOptions();
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptions">Ec2VpcEndpointDnsOptions</a>

Describes the DNS options for an endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_vpc_endpoint#dns_options Ec2VpcEndpoint#dns_options}

---

##### `ipAddressType`<sup>Optional</sup> <a name="ipAddressType" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointConfig.property.ipAddressType"></a>

```java
public java.lang.String getIpAddressType();
```

- *Type:* java.lang.String

The supported IP address types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_vpc_endpoint#ip_address_type Ec2VpcEndpoint#ip_address_type}

---

##### `policyDocument`<sup>Optional</sup> <a name="policyDocument" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointConfig.property.policyDocument"></a>

```java
public java.lang.String getPolicyDocument();
```

- *Type:* java.lang.String

An endpoint policy, which controls access to the service from the VPC.

The default endpoint policy allows full access to the service. Endpoint policies are supported only for gateway and interface endpoints.
For CloudFormation templates in YAML, you can provide the policy in JSON or YAML format. For example, if you have a JSON policy, you can convert it to YAML before including it in the YAML template, and CFNlong converts the policy to JSON format before calling the API actions for privatelink. Alternatively, you can include the JSON directly in the YAML, as shown in the following `Properties` section:
`Properties: VpcEndpointType: 'Interface' ServiceName: !Sub 'com.amazonaws.${AWS::Region}.logs' PolicyDocument: '{ "Version":"2012-10-17", "Statement": [{ "Effect":"Allow", "Principal":"*", "Action":["logs:Describe*","logs:Get*","logs:List*","logs:FilterLogEvents"], "Resource":"*" }] }'`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_vpc_endpoint#policy_document Ec2VpcEndpoint#policy_document}

---

##### `privateDnsEnabled`<sup>Optional</sup> <a name="privateDnsEnabled" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointConfig.property.privateDnsEnabled"></a>

```java
public java.lang.Boolean|IResolvable getPrivateDnsEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Indicate whether to associate a private hosted zone with the specified VPC.

The private hosted zone contains a record set for the default public DNS name for the service for the Region (for example, `kinesis.us-east-1.amazonaws.com`), which resolves to the private IP addresses of the endpoint network interfaces in the VPC. This enables you to make requests to the default public DNS name for the service instead of the public DNS names that are automatically generated by the VPC endpoint service.
To use a private hosted zone, you must set the following VPC attributes to `true`: `enableDnsHostnames` and `enableDnsSupport`.
This property is supported only for interface endpoints.
Default: `false`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_vpc_endpoint#private_dns_enabled Ec2VpcEndpoint#private_dns_enabled}

---

##### `resourceConfigurationArn`<sup>Optional</sup> <a name="resourceConfigurationArn" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointConfig.property.resourceConfigurationArn"></a>

```java
public java.lang.String getResourceConfigurationArn();
```

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the resource configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_vpc_endpoint#resource_configuration_arn Ec2VpcEndpoint#resource_configuration_arn}

---

##### `routeTableIds`<sup>Optional</sup> <a name="routeTableIds" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointConfig.property.routeTableIds"></a>

```java
public java.util.List<java.lang.String> getRouteTableIds();
```

- *Type:* java.util.List<java.lang.String>

The IDs of the route tables. Routing is supported only for gateway endpoints.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_vpc_endpoint#route_table_ids Ec2VpcEndpoint#route_table_ids}

---

##### `securityGroupIds`<sup>Optional</sup> <a name="securityGroupIds" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointConfig.property.securityGroupIds"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

The IDs of the security groups to associate with the endpoint network interfaces.

If this parameter is not specified, we use the default security group for the VPC. Security groups are supported only for interface endpoints.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_vpc_endpoint#security_group_ids Ec2VpcEndpoint#security_group_ids}

---

##### `serviceName`<sup>Optional</sup> <a name="serviceName" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointConfig.property.serviceName"></a>

```java
public java.lang.String getServiceName();
```

- *Type:* java.lang.String

The name of the endpoint service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_vpc_endpoint#service_name Ec2VpcEndpoint#service_name}

---

##### `serviceNetworkArn`<sup>Optional</sup> <a name="serviceNetworkArn" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointConfig.property.serviceNetworkArn"></a>

```java
public java.lang.String getServiceNetworkArn();
```

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the service network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_vpc_endpoint#service_network_arn Ec2VpcEndpoint#service_network_arn}

---

##### `serviceRegion`<sup>Optional</sup> <a name="serviceRegion" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointConfig.property.serviceRegion"></a>

```java
public java.lang.String getServiceRegion();
```

- *Type:* java.lang.String

Describes a Region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_vpc_endpoint#service_region Ec2VpcEndpoint#service_region}

---

##### `subnetIds`<sup>Optional</sup> <a name="subnetIds" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointConfig.property.subnetIds"></a>

```java
public java.util.List<java.lang.String> getSubnetIds();
```

- *Type:* java.util.List<java.lang.String>

The IDs of the subnets in which to create endpoint network interfaces.

You must specify this property for an interface endpoint or a Gateway Load Balancer endpoint. You can't specify this property for a gateway endpoint. For a Gateway Load Balancer endpoint, you can specify only one subnet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_vpc_endpoint#subnet_ids Ec2VpcEndpoint#subnet_ids}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointConfig.property.tags"></a>

```java
public IResolvable|java.util.List<Ec2VpcEndpointTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTags">Ec2VpcEndpointTags</a>>

The tags to associate with the endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_vpc_endpoint#tags Ec2VpcEndpoint#tags}

---

##### `vpcEndpointType`<sup>Optional</sup> <a name="vpcEndpointType" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointConfig.property.vpcEndpointType"></a>

```java
public java.lang.String getVpcEndpointType();
```

- *Type:* java.lang.String

The type of endpoint.  Default: Gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_vpc_endpoint#vpc_endpoint_type Ec2VpcEndpoint#vpc_endpoint_type}

---

### Ec2VpcEndpointDnsOptions <a name="Ec2VpcEndpointDnsOptions" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptions.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_vpc_endpoint.Ec2VpcEndpointDnsOptions;

Ec2VpcEndpointDnsOptions.builder()
//  .dnsRecordIpType(java.lang.String)
//  .privateDnsOnlyForInboundResolverEndpoint(java.lang.String)
//  .privateDnsPreference(java.lang.String)
//  .privateDnsSpecifiedDomains(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptions.property.dnsRecordIpType">dnsRecordIpType</a></code> | <code>java.lang.String</code> | The DNS records created for the endpoint. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptions.property.privateDnsOnlyForInboundResolverEndpoint">privateDnsOnlyForInboundResolverEndpoint</a></code> | <code>java.lang.String</code> | Indicates whether to enable private DNS only for inbound endpoints. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptions.property.privateDnsPreference">privateDnsPreference</a></code> | <code>java.lang.String</code> | The preference for which private domains have a private hosted zone created for and associated with the specified VPC. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptions.property.privateDnsSpecifiedDomains">privateDnsSpecifiedDomains</a></code> | <code>java.util.List<java.lang.String></code> | Indicates which of the private domains to create private hosted zones for and associate with the specified VPC. |

---

##### `dnsRecordIpType`<sup>Optional</sup> <a name="dnsRecordIpType" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptions.property.dnsRecordIpType"></a>

```java
public java.lang.String getDnsRecordIpType();
```

- *Type:* java.lang.String

The DNS records created for the endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_vpc_endpoint#dns_record_ip_type Ec2VpcEndpoint#dns_record_ip_type}

---

##### `privateDnsOnlyForInboundResolverEndpoint`<sup>Optional</sup> <a name="privateDnsOnlyForInboundResolverEndpoint" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptions.property.privateDnsOnlyForInboundResolverEndpoint"></a>

```java
public java.lang.String getPrivateDnsOnlyForInboundResolverEndpoint();
```

- *Type:* java.lang.String

Indicates whether to enable private DNS only for inbound endpoints.

This option is available only for services that support both gateway and interface endpoints. It routes traffic that originates from the VPC to the gateway endpoint and traffic that originates from on-premises to the interface endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_vpc_endpoint#private_dns_only_for_inbound_resolver_endpoint Ec2VpcEndpoint#private_dns_only_for_inbound_resolver_endpoint}

---

##### `privateDnsPreference`<sup>Optional</sup> <a name="privateDnsPreference" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptions.property.privateDnsPreference"></a>

```java
public java.lang.String getPrivateDnsPreference();
```

- *Type:* java.lang.String

The preference for which private domains have a private hosted zone created for and associated with the specified VPC.

Only supported when private DNS is enabled and when the VPC endpoint type is ServiceNetwork or Resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_vpc_endpoint#private_dns_preference Ec2VpcEndpoint#private_dns_preference}

---

##### `privateDnsSpecifiedDomains`<sup>Optional</sup> <a name="privateDnsSpecifiedDomains" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptions.property.privateDnsSpecifiedDomains"></a>

```java
public java.util.List<java.lang.String> getPrivateDnsSpecifiedDomains();
```

- *Type:* java.util.List<java.lang.String>

Indicates which of the private domains to create private hosted zones for and associate with the specified VPC.

Only supported when private DNS is enabled and the private DNS preference is `VERIFIED_DOMAINS_AND_SPECIFIED_DOMAINS` or `SPECIFIED_DOMAINS_ONLY`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_vpc_endpoint#private_dns_specified_domains Ec2VpcEndpoint#private_dns_specified_domains}

---

### Ec2VpcEndpointTags <a name="Ec2VpcEndpointTags" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_vpc_endpoint.Ec2VpcEndpointTags;

Ec2VpcEndpointTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTags.property.key">key</a></code> | <code>java.lang.String</code> | The key of the tag. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTags.property.value">value</a></code> | <code>java.lang.String</code> | The value of the tag.  Constraints: Tag values are case-sensitive and accept a maximum of 256 Unicode characters. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key of the tag.

Constraints: Tag keys are case-sensitive and accept a maximum of 127 Unicode characters. May not begin with `aws:`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_vpc_endpoint#key Ec2VpcEndpoint#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value of the tag.  Constraints: Tag values are case-sensitive and accept a maximum of 256 Unicode characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_vpc_endpoint#value Ec2VpcEndpoint#value}

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2VpcEndpointDnsOptionsOutputReference <a name="Ec2VpcEndpointDnsOptionsOutputReference" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_vpc_endpoint.Ec2VpcEndpointDnsOptionsOutputReference;

new Ec2VpcEndpointDnsOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.resetDnsRecordIpType">resetDnsRecordIpType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.resetPrivateDnsOnlyForInboundResolverEndpoint">resetPrivateDnsOnlyForInboundResolverEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.resetPrivateDnsPreference">resetPrivateDnsPreference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.resetPrivateDnsSpecifiedDomains">resetPrivateDnsSpecifiedDomains</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDnsRecordIpType` <a name="resetDnsRecordIpType" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.resetDnsRecordIpType"></a>

```java
public void resetDnsRecordIpType()
```

##### `resetPrivateDnsOnlyForInboundResolverEndpoint` <a name="resetPrivateDnsOnlyForInboundResolverEndpoint" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.resetPrivateDnsOnlyForInboundResolverEndpoint"></a>

```java
public void resetPrivateDnsOnlyForInboundResolverEndpoint()
```

##### `resetPrivateDnsPreference` <a name="resetPrivateDnsPreference" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.resetPrivateDnsPreference"></a>

```java
public void resetPrivateDnsPreference()
```

##### `resetPrivateDnsSpecifiedDomains` <a name="resetPrivateDnsSpecifiedDomains" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.resetPrivateDnsSpecifiedDomains"></a>

```java
public void resetPrivateDnsSpecifiedDomains()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.property.dnsRecordIpTypeInput">dnsRecordIpTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.property.privateDnsOnlyForInboundResolverEndpointInput">privateDnsOnlyForInboundResolverEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.property.privateDnsPreferenceInput">privateDnsPreferenceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.property.privateDnsSpecifiedDomainsInput">privateDnsSpecifiedDomainsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.property.dnsRecordIpType">dnsRecordIpType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.property.privateDnsOnlyForInboundResolverEndpoint">privateDnsOnlyForInboundResolverEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.property.privateDnsPreference">privateDnsPreference</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.property.privateDnsSpecifiedDomains">privateDnsSpecifiedDomains</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptions">Ec2VpcEndpointDnsOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dnsRecordIpTypeInput`<sup>Optional</sup> <a name="dnsRecordIpTypeInput" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.property.dnsRecordIpTypeInput"></a>

```java
public java.lang.String getDnsRecordIpTypeInput();
```

- *Type:* java.lang.String

---

##### `privateDnsOnlyForInboundResolverEndpointInput`<sup>Optional</sup> <a name="privateDnsOnlyForInboundResolverEndpointInput" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.property.privateDnsOnlyForInboundResolverEndpointInput"></a>

```java
public java.lang.String getPrivateDnsOnlyForInboundResolverEndpointInput();
```

- *Type:* java.lang.String

---

##### `privateDnsPreferenceInput`<sup>Optional</sup> <a name="privateDnsPreferenceInput" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.property.privateDnsPreferenceInput"></a>

```java
public java.lang.String getPrivateDnsPreferenceInput();
```

- *Type:* java.lang.String

---

##### `privateDnsSpecifiedDomainsInput`<sup>Optional</sup> <a name="privateDnsSpecifiedDomainsInput" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.property.privateDnsSpecifiedDomainsInput"></a>

```java
public java.util.List<java.lang.String> getPrivateDnsSpecifiedDomainsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `dnsRecordIpType`<sup>Required</sup> <a name="dnsRecordIpType" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.property.dnsRecordIpType"></a>

```java
public java.lang.String getDnsRecordIpType();
```

- *Type:* java.lang.String

---

##### `privateDnsOnlyForInboundResolverEndpoint`<sup>Required</sup> <a name="privateDnsOnlyForInboundResolverEndpoint" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.property.privateDnsOnlyForInboundResolverEndpoint"></a>

```java
public java.lang.String getPrivateDnsOnlyForInboundResolverEndpoint();
```

- *Type:* java.lang.String

---

##### `privateDnsPreference`<sup>Required</sup> <a name="privateDnsPreference" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.property.privateDnsPreference"></a>

```java
public java.lang.String getPrivateDnsPreference();
```

- *Type:* java.lang.String

---

##### `privateDnsSpecifiedDomains`<sup>Required</sup> <a name="privateDnsSpecifiedDomains" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.property.privateDnsSpecifiedDomains"></a>

```java
public java.util.List<java.lang.String> getPrivateDnsSpecifiedDomains();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.property.internalValue"></a>

```java
public IResolvable|Ec2VpcEndpointDnsOptions getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptions">Ec2VpcEndpointDnsOptions</a>

---


### Ec2VpcEndpointTagsList <a name="Ec2VpcEndpointTagsList" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_vpc_endpoint.Ec2VpcEndpointTagsList;

new Ec2VpcEndpointTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsList.get"></a>

```java
public Ec2VpcEndpointTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTags">Ec2VpcEndpointTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<Ec2VpcEndpointTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTags">Ec2VpcEndpointTags</a>>

---


### Ec2VpcEndpointTagsOutputReference <a name="Ec2VpcEndpointTagsOutputReference" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_vpc_endpoint.Ec2VpcEndpointTagsOutputReference;

new Ec2VpcEndpointTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTags">Ec2VpcEndpointTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|Ec2VpcEndpointTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTags">Ec2VpcEndpointTags</a>

---



