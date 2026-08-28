# `route53ResolverResolverEndpoint` Submodule <a name="`route53ResolverResolverEndpoint` Submodule" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Route53ResolverResolverEndpoint <a name="Route53ResolverResolverEndpoint" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53resolver_resolver_endpoint awscc_route53resolver_resolver_endpoint}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.Initializer"></a>

```java
import io.cdktn.providers.awscc.route53_resolver_resolver_endpoint.Route53ResolverResolverEndpoint;

Route53ResolverResolverEndpoint.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .direction(java.lang.String)
    .ipAddresses(IResolvable|java.util.List<Route53ResolverResolverEndpointIpAddresses>)
    .securityGroupIds(java.util.List<java.lang.String>)
//  .dns64Enabled(java.lang.Boolean|IResolvable)
//  .ipv6InternetAccessEnabled(java.lang.Boolean|IResolvable)
//  .name(java.lang.String)
//  .outpostArn(java.lang.String)
//  .preferredInstanceType(java.lang.String)
//  .protocols(java.util.List<java.lang.String>)
//  .resolverEndpointType(java.lang.String)
//  .rniEnhancedMetricsEnabled(java.lang.Boolean|IResolvable)
//  .tags(IResolvable|java.util.List<Route53ResolverResolverEndpointTags>)
//  .targetNameServerMetricsEnabled(java.lang.Boolean|IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.Initializer.parameter.direction">direction</a></code> | <code>java.lang.String</code> | Indicates whether the Resolver endpoint allows inbound or outbound DNS queries: - INBOUND: allows DNS queries to your VPC from your network  - OUTBOUND: allows DNS queries from your VPC to your network  - INBOUND_DELEGATION: allows DNS queries to your VPC from your network with authoritative answers from private hosted zones. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.Initializer.parameter.ipAddresses">ipAddresses</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddresses">Route53ResolverResolverEndpointIpAddresses</a>></code> | The subnets and IP addresses in your VPC that DNS queries originate from (for outbound endpoints) or that you forward DNS queries to (for inbound endpoints). |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.Initializer.parameter.securityGroupIds">securityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | The ID of one or more security groups that control access to this VPC. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.Initializer.parameter.dns64Enabled">dns64Enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specifies whether DNS64 is enabled for the Inbound Resolver Endpoint. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.Initializer.parameter.ipv6InternetAccessEnabled">ipv6InternetAccessEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specifies whether IPv6 Internet Gateway access is enabled through the Outbound Resolver Endpoint. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | A friendly name that lets you easily find a configuration in the Resolver dashboard in the Route 53 console. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.Initializer.parameter.outpostArn">outpostArn</a></code> | <code>java.lang.String</code> | The ARN (Amazon Resource Name) for the Outpost. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.Initializer.parameter.preferredInstanceType">preferredInstanceType</a></code> | <code>java.lang.String</code> | The Amazon EC2 instance type. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.Initializer.parameter.protocols">protocols</a></code> | <code>java.util.List<java.lang.String></code> | Protocols used for the endpoint. DoH-FIPS is applicable for inbound endpoints only. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.Initializer.parameter.resolverEndpointType">resolverEndpointType</a></code> | <code>java.lang.String</code> | The Resolver endpoint IP address type. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.Initializer.parameter.rniEnhancedMetricsEnabled">rniEnhancedMetricsEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specifies whether RNI enhanced metrics are enabled for the Resolver Endpoints. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTags">Route53ResolverResolverEndpointTags</a>></code> | An array of key-value pairs to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.Initializer.parameter.targetNameServerMetricsEnabled">targetNameServerMetricsEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specifies whether target name server metrics are enabled for the Outbound Resolver Endpoint. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.Initializer.parameter.direction"></a>

- *Type:* java.lang.String

Indicates whether the Resolver endpoint allows inbound or outbound DNS queries: - INBOUND: allows DNS queries to your VPC from your network  - OUTBOUND: allows DNS queries from your VPC to your network  - INBOUND_DELEGATION: allows DNS queries to your VPC from your network with authoritative answers from private hosted zones.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53resolver_resolver_endpoint#direction Route53ResolverResolverEndpoint#direction}

---

##### `ipAddresses`<sup>Required</sup> <a name="ipAddresses" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.Initializer.parameter.ipAddresses"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddresses">Route53ResolverResolverEndpointIpAddresses</a>>

The subnets and IP addresses in your VPC that DNS queries originate from (for outbound endpoints) or that you forward DNS queries to (for inbound endpoints).

The subnet ID uniquely identifies a VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53resolver_resolver_endpoint#ip_addresses Route53ResolverResolverEndpoint#ip_addresses}

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.Initializer.parameter.securityGroupIds"></a>

- *Type:* java.util.List<java.lang.String>

The ID of one or more security groups that control access to this VPC.

The security group must include one or more inbound rules (for inbound endpoints) or outbound rules (for outbound endpoints). Inbound and outbound rules must allow TCP and UDP access. For inbound access, open port 53. For outbound access, open the port that you're using for DNS queries on your network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53resolver_resolver_endpoint#security_group_ids Route53ResolverResolverEndpoint#security_group_ids}

---

##### `dns64Enabled`<sup>Optional</sup> <a name="dns64Enabled" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.Initializer.parameter.dns64Enabled"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Specifies whether DNS64 is enabled for the Inbound Resolver Endpoint.

When set to true, if a DNS AAAA query is made for a domain that has only an A (IPv4) record, the resolver automatically synthesizes an AAAA (IPv6) response by embedding the IPv4 address into the well-known prefix 64:ff9b::/96. Default is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53resolver_resolver_endpoint#dns_64_enabled Route53ResolverResolverEndpoint#dns_64_enabled}

---

##### `ipv6InternetAccessEnabled`<sup>Optional</sup> <a name="ipv6InternetAccessEnabled" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.Initializer.parameter.ipv6InternetAccessEnabled"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Specifies whether IPv6 Internet Gateway access is enabled through the Outbound Resolver Endpoint.

When set to true, this property allows your Endpoint ENIs to reach public IPv6 target nameservers through an internet gateway. Default is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53resolver_resolver_endpoint#ipv_6_internet_access_enabled Route53ResolverResolverEndpoint#ipv_6_internet_access_enabled}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.Initializer.parameter.name"></a>

- *Type:* java.lang.String

A friendly name that lets you easily find a configuration in the Resolver dashboard in the Route 53 console.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53resolver_resolver_endpoint#name Route53ResolverResolverEndpoint#name}

---

##### `outpostArn`<sup>Optional</sup> <a name="outpostArn" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.Initializer.parameter.outpostArn"></a>

- *Type:* java.lang.String

The ARN (Amazon Resource Name) for the Outpost.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53resolver_resolver_endpoint#outpost_arn Route53ResolverResolverEndpoint#outpost_arn}

---

##### `preferredInstanceType`<sup>Optional</sup> <a name="preferredInstanceType" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.Initializer.parameter.preferredInstanceType"></a>

- *Type:* java.lang.String

The Amazon EC2 instance type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53resolver_resolver_endpoint#preferred_instance_type Route53ResolverResolverEndpoint#preferred_instance_type}

---

##### `protocols`<sup>Optional</sup> <a name="protocols" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.Initializer.parameter.protocols"></a>

- *Type:* java.util.List<java.lang.String>

Protocols used for the endpoint. DoH-FIPS is applicable for inbound endpoints only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53resolver_resolver_endpoint#protocols Route53ResolverResolverEndpoint#protocols}

---

##### `resolverEndpointType`<sup>Optional</sup> <a name="resolverEndpointType" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.Initializer.parameter.resolverEndpointType"></a>

- *Type:* java.lang.String

The Resolver endpoint IP address type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53resolver_resolver_endpoint#resolver_endpoint_type Route53ResolverResolverEndpoint#resolver_endpoint_type}

---

##### `rniEnhancedMetricsEnabled`<sup>Optional</sup> <a name="rniEnhancedMetricsEnabled" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.Initializer.parameter.rniEnhancedMetricsEnabled"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Specifies whether RNI enhanced metrics are enabled for the Resolver Endpoints.

When set to true, one-minute granular metrics are published in CloudWatch for each RNI associated with this endpoint. When set to false, metrics are not published. Default is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53resolver_resolver_endpoint#rni_enhanced_metrics_enabled Route53ResolverResolverEndpoint#rni_enhanced_metrics_enabled}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTags">Route53ResolverResolverEndpointTags</a>>

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53resolver_resolver_endpoint#tags Route53ResolverResolverEndpoint#tags}

---

##### `targetNameServerMetricsEnabled`<sup>Optional</sup> <a name="targetNameServerMetricsEnabled" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.Initializer.parameter.targetNameServerMetricsEnabled"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Specifies whether target name server metrics are enabled for the Outbound Resolver Endpoint.

When set to true, one-minute granular metrics are published in CloudWatch for each target name server associated with this endpoint. When set to false, metrics are not published. Default is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53resolver_resolver_endpoint#target_name_server_metrics_enabled Route53ResolverResolverEndpoint#target_name_server_metrics_enabled}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.putIpAddresses">putIpAddresses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.resetDns64Enabled">resetDns64Enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.resetIpv6InternetAccessEnabled">resetIpv6InternetAccessEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.resetOutpostArn">resetOutpostArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.resetPreferredInstanceType">resetPreferredInstanceType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.resetProtocols">resetProtocols</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.resetResolverEndpointType">resetResolverEndpointType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.resetRniEnhancedMetricsEnabled">resetRniEnhancedMetricsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.resetTargetNameServerMetricsEnabled">resetTargetNameServerMetricsEnabled</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putIpAddresses` <a name="putIpAddresses" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.putIpAddresses"></a>

```java
public void putIpAddresses(IResolvable|java.util.List<Route53ResolverResolverEndpointIpAddresses> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.putIpAddresses.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddresses">Route53ResolverResolverEndpointIpAddresses</a>>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<Route53ResolverResolverEndpointTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTags">Route53ResolverResolverEndpointTags</a>>

---

##### `resetDns64Enabled` <a name="resetDns64Enabled" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.resetDns64Enabled"></a>

```java
public void resetDns64Enabled()
```

##### `resetIpv6InternetAccessEnabled` <a name="resetIpv6InternetAccessEnabled" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.resetIpv6InternetAccessEnabled"></a>

```java
public void resetIpv6InternetAccessEnabled()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.resetName"></a>

```java
public void resetName()
```

##### `resetOutpostArn` <a name="resetOutpostArn" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.resetOutpostArn"></a>

```java
public void resetOutpostArn()
```

##### `resetPreferredInstanceType` <a name="resetPreferredInstanceType" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.resetPreferredInstanceType"></a>

```java
public void resetPreferredInstanceType()
```

##### `resetProtocols` <a name="resetProtocols" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.resetProtocols"></a>

```java
public void resetProtocols()
```

##### `resetResolverEndpointType` <a name="resetResolverEndpointType" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.resetResolverEndpointType"></a>

```java
public void resetResolverEndpointType()
```

##### `resetRniEnhancedMetricsEnabled` <a name="resetRniEnhancedMetricsEnabled" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.resetRniEnhancedMetricsEnabled"></a>

```java
public void resetRniEnhancedMetricsEnabled()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.resetTags"></a>

```java
public void resetTags()
```

##### `resetTargetNameServerMetricsEnabled` <a name="resetTargetNameServerMetricsEnabled" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.resetTargetNameServerMetricsEnabled"></a>

```java
public void resetTargetNameServerMetricsEnabled()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a Route53ResolverResolverEndpoint resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.isConstruct"></a>

```java
import io.cdktn.providers.awscc.route53_resolver_resolver_endpoint.Route53ResolverResolverEndpoint;

Route53ResolverResolverEndpoint.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.route53_resolver_resolver_endpoint.Route53ResolverResolverEndpoint;

Route53ResolverResolverEndpoint.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.route53_resolver_resolver_endpoint.Route53ResolverResolverEndpoint;

Route53ResolverResolverEndpoint.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.route53_resolver_resolver_endpoint.Route53ResolverResolverEndpoint;

Route53ResolverResolverEndpoint.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),Route53ResolverResolverEndpoint.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a Route53ResolverResolverEndpoint resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the Route53ResolverResolverEndpoint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing Route53ResolverResolverEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53resolver_resolver_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the Route53ResolverResolverEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.hostVpcId">hostVpcId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.ipAddressCount">ipAddressCount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.ipAddresses">ipAddresses</a></code> | <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesList">Route53ResolverResolverEndpointIpAddressesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.resolverEndpointId">resolverEndpointId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsList">Route53ResolverResolverEndpointTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.directionInput">directionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.dns64EnabledInput">dns64EnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.ipAddressesInput">ipAddressesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddresses">Route53ResolverResolverEndpointIpAddresses</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.ipv6InternetAccessEnabledInput">ipv6InternetAccessEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.outpostArnInput">outpostArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.preferredInstanceTypeInput">preferredInstanceTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.protocolsInput">protocolsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.resolverEndpointTypeInput">resolverEndpointTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.rniEnhancedMetricsEnabledInput">rniEnhancedMetricsEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.securityGroupIdsInput">securityGroupIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTags">Route53ResolverResolverEndpointTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.targetNameServerMetricsEnabledInput">targetNameServerMetricsEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.direction">direction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.dns64Enabled">dns64Enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.ipv6InternetAccessEnabled">ipv6InternetAccessEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.outpostArn">outpostArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.preferredInstanceType">preferredInstanceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.protocols">protocols</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.resolverEndpointType">resolverEndpointType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.rniEnhancedMetricsEnabled">rniEnhancedMetricsEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.securityGroupIds">securityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.targetNameServerMetricsEnabled">targetNameServerMetricsEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `hostVpcId`<sup>Required</sup> <a name="hostVpcId" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.hostVpcId"></a>

```java
public java.lang.String getHostVpcId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `ipAddressCount`<sup>Required</sup> <a name="ipAddressCount" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.ipAddressCount"></a>

```java
public java.lang.String getIpAddressCount();
```

- *Type:* java.lang.String

---

##### `ipAddresses`<sup>Required</sup> <a name="ipAddresses" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.ipAddresses"></a>

```java
public Route53ResolverResolverEndpointIpAddressesList getIpAddresses();
```

- *Type:* <a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesList">Route53ResolverResolverEndpointIpAddressesList</a>

---

##### `resolverEndpointId`<sup>Required</sup> <a name="resolverEndpointId" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.resolverEndpointId"></a>

```java
public java.lang.String getResolverEndpointId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.tags"></a>

```java
public Route53ResolverResolverEndpointTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsList">Route53ResolverResolverEndpointTagsList</a>

---

##### `directionInput`<sup>Optional</sup> <a name="directionInput" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.directionInput"></a>

```java
public java.lang.String getDirectionInput();
```

- *Type:* java.lang.String

---

##### `dns64EnabledInput`<sup>Optional</sup> <a name="dns64EnabledInput" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.dns64EnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getDns64EnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `ipAddressesInput`<sup>Optional</sup> <a name="ipAddressesInput" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.ipAddressesInput"></a>

```java
public IResolvable|java.util.List<Route53ResolverResolverEndpointIpAddresses> getIpAddressesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddresses">Route53ResolverResolverEndpointIpAddresses</a>>

---

##### `ipv6InternetAccessEnabledInput`<sup>Optional</sup> <a name="ipv6InternetAccessEnabledInput" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.ipv6InternetAccessEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getIpv6InternetAccessEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `outpostArnInput`<sup>Optional</sup> <a name="outpostArnInput" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.outpostArnInput"></a>

```java
public java.lang.String getOutpostArnInput();
```

- *Type:* java.lang.String

---

##### `preferredInstanceTypeInput`<sup>Optional</sup> <a name="preferredInstanceTypeInput" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.preferredInstanceTypeInput"></a>

```java
public java.lang.String getPreferredInstanceTypeInput();
```

- *Type:* java.lang.String

---

##### `protocolsInput`<sup>Optional</sup> <a name="protocolsInput" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.protocolsInput"></a>

```java
public java.util.List<java.lang.String> getProtocolsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `resolverEndpointTypeInput`<sup>Optional</sup> <a name="resolverEndpointTypeInput" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.resolverEndpointTypeInput"></a>

```java
public java.lang.String getResolverEndpointTypeInput();
```

- *Type:* java.lang.String

---

##### `rniEnhancedMetricsEnabledInput`<sup>Optional</sup> <a name="rniEnhancedMetricsEnabledInput" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.rniEnhancedMetricsEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getRniEnhancedMetricsEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `securityGroupIdsInput`<sup>Optional</sup> <a name="securityGroupIdsInput" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.securityGroupIdsInput"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.tagsInput"></a>

```java
public IResolvable|java.util.List<Route53ResolverResolverEndpointTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTags">Route53ResolverResolverEndpointTags</a>>

---

##### `targetNameServerMetricsEnabledInput`<sup>Optional</sup> <a name="targetNameServerMetricsEnabledInput" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.targetNameServerMetricsEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getTargetNameServerMetricsEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.direction"></a>

```java
public java.lang.String getDirection();
```

- *Type:* java.lang.String

---

##### `dns64Enabled`<sup>Required</sup> <a name="dns64Enabled" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.dns64Enabled"></a>

```java
public java.lang.Boolean|IResolvable getDns64Enabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `ipv6InternetAccessEnabled`<sup>Required</sup> <a name="ipv6InternetAccessEnabled" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.ipv6InternetAccessEnabled"></a>

```java
public java.lang.Boolean|IResolvable getIpv6InternetAccessEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `outpostArn`<sup>Required</sup> <a name="outpostArn" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.outpostArn"></a>

```java
public java.lang.String getOutpostArn();
```

- *Type:* java.lang.String

---

##### `preferredInstanceType`<sup>Required</sup> <a name="preferredInstanceType" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.preferredInstanceType"></a>

```java
public java.lang.String getPreferredInstanceType();
```

- *Type:* java.lang.String

---

##### `protocols`<sup>Required</sup> <a name="protocols" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.protocols"></a>

```java
public java.util.List<java.lang.String> getProtocols();
```

- *Type:* java.util.List<java.lang.String>

---

##### `resolverEndpointType`<sup>Required</sup> <a name="resolverEndpointType" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.resolverEndpointType"></a>

```java
public java.lang.String getResolverEndpointType();
```

- *Type:* java.lang.String

---

##### `rniEnhancedMetricsEnabled`<sup>Required</sup> <a name="rniEnhancedMetricsEnabled" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.rniEnhancedMetricsEnabled"></a>

```java
public java.lang.Boolean|IResolvable getRniEnhancedMetricsEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.securityGroupIds"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `targetNameServerMetricsEnabled`<sup>Required</sup> <a name="targetNameServerMetricsEnabled" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.targetNameServerMetricsEnabled"></a>

```java
public java.lang.Boolean|IResolvable getTargetNameServerMetricsEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### Route53ResolverResolverEndpointConfig <a name="Route53ResolverResolverEndpointConfig" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.route53_resolver_resolver_endpoint.Route53ResolverResolverEndpointConfig;

Route53ResolverResolverEndpointConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .direction(java.lang.String)
    .ipAddresses(IResolvable|java.util.List<Route53ResolverResolverEndpointIpAddresses>)
    .securityGroupIds(java.util.List<java.lang.String>)
//  .dns64Enabled(java.lang.Boolean|IResolvable)
//  .ipv6InternetAccessEnabled(java.lang.Boolean|IResolvable)
//  .name(java.lang.String)
//  .outpostArn(java.lang.String)
//  .preferredInstanceType(java.lang.String)
//  .protocols(java.util.List<java.lang.String>)
//  .resolverEndpointType(java.lang.String)
//  .rniEnhancedMetricsEnabled(java.lang.Boolean|IResolvable)
//  .tags(IResolvable|java.util.List<Route53ResolverResolverEndpointTags>)
//  .targetNameServerMetricsEnabled(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointConfig.property.direction">direction</a></code> | <code>java.lang.String</code> | Indicates whether the Resolver endpoint allows inbound or outbound DNS queries: - INBOUND: allows DNS queries to your VPC from your network  - OUTBOUND: allows DNS queries from your VPC to your network  - INBOUND_DELEGATION: allows DNS queries to your VPC from your network with authoritative answers from private hosted zones. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointConfig.property.ipAddresses">ipAddresses</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddresses">Route53ResolverResolverEndpointIpAddresses</a>></code> | The subnets and IP addresses in your VPC that DNS queries originate from (for outbound endpoints) or that you forward DNS queries to (for inbound endpoints). |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointConfig.property.securityGroupIds">securityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | The ID of one or more security groups that control access to this VPC. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointConfig.property.dns64Enabled">dns64Enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specifies whether DNS64 is enabled for the Inbound Resolver Endpoint. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointConfig.property.ipv6InternetAccessEnabled">ipv6InternetAccessEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specifies whether IPv6 Internet Gateway access is enabled through the Outbound Resolver Endpoint. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointConfig.property.name">name</a></code> | <code>java.lang.String</code> | A friendly name that lets you easily find a configuration in the Resolver dashboard in the Route 53 console. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointConfig.property.outpostArn">outpostArn</a></code> | <code>java.lang.String</code> | The ARN (Amazon Resource Name) for the Outpost. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointConfig.property.preferredInstanceType">preferredInstanceType</a></code> | <code>java.lang.String</code> | The Amazon EC2 instance type. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointConfig.property.protocols">protocols</a></code> | <code>java.util.List<java.lang.String></code> | Protocols used for the endpoint. DoH-FIPS is applicable for inbound endpoints only. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointConfig.property.resolverEndpointType">resolverEndpointType</a></code> | <code>java.lang.String</code> | The Resolver endpoint IP address type. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointConfig.property.rniEnhancedMetricsEnabled">rniEnhancedMetricsEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specifies whether RNI enhanced metrics are enabled for the Resolver Endpoints. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTags">Route53ResolverResolverEndpointTags</a>></code> | An array of key-value pairs to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointConfig.property.targetNameServerMetricsEnabled">targetNameServerMetricsEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specifies whether target name server metrics are enabled for the Outbound Resolver Endpoint. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointConfig.property.direction"></a>

```java
public java.lang.String getDirection();
```

- *Type:* java.lang.String

Indicates whether the Resolver endpoint allows inbound or outbound DNS queries: - INBOUND: allows DNS queries to your VPC from your network  - OUTBOUND: allows DNS queries from your VPC to your network  - INBOUND_DELEGATION: allows DNS queries to your VPC from your network with authoritative answers from private hosted zones.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53resolver_resolver_endpoint#direction Route53ResolverResolverEndpoint#direction}

---

##### `ipAddresses`<sup>Required</sup> <a name="ipAddresses" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointConfig.property.ipAddresses"></a>

```java
public IResolvable|java.util.List<Route53ResolverResolverEndpointIpAddresses> getIpAddresses();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddresses">Route53ResolverResolverEndpointIpAddresses</a>>

The subnets and IP addresses in your VPC that DNS queries originate from (for outbound endpoints) or that you forward DNS queries to (for inbound endpoints).

The subnet ID uniquely identifies a VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53resolver_resolver_endpoint#ip_addresses Route53ResolverResolverEndpoint#ip_addresses}

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointConfig.property.securityGroupIds"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

The ID of one or more security groups that control access to this VPC.

The security group must include one or more inbound rules (for inbound endpoints) or outbound rules (for outbound endpoints). Inbound and outbound rules must allow TCP and UDP access. For inbound access, open port 53. For outbound access, open the port that you're using for DNS queries on your network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53resolver_resolver_endpoint#security_group_ids Route53ResolverResolverEndpoint#security_group_ids}

---

##### `dns64Enabled`<sup>Optional</sup> <a name="dns64Enabled" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointConfig.property.dns64Enabled"></a>

```java
public java.lang.Boolean|IResolvable getDns64Enabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Specifies whether DNS64 is enabled for the Inbound Resolver Endpoint.

When set to true, if a DNS AAAA query is made for a domain that has only an A (IPv4) record, the resolver automatically synthesizes an AAAA (IPv6) response by embedding the IPv4 address into the well-known prefix 64:ff9b::/96. Default is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53resolver_resolver_endpoint#dns_64_enabled Route53ResolverResolverEndpoint#dns_64_enabled}

---

##### `ipv6InternetAccessEnabled`<sup>Optional</sup> <a name="ipv6InternetAccessEnabled" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointConfig.property.ipv6InternetAccessEnabled"></a>

```java
public java.lang.Boolean|IResolvable getIpv6InternetAccessEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Specifies whether IPv6 Internet Gateway access is enabled through the Outbound Resolver Endpoint.

When set to true, this property allows your Endpoint ENIs to reach public IPv6 target nameservers through an internet gateway. Default is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53resolver_resolver_endpoint#ipv_6_internet_access_enabled Route53ResolverResolverEndpoint#ipv_6_internet_access_enabled}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

A friendly name that lets you easily find a configuration in the Resolver dashboard in the Route 53 console.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53resolver_resolver_endpoint#name Route53ResolverResolverEndpoint#name}

---

##### `outpostArn`<sup>Optional</sup> <a name="outpostArn" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointConfig.property.outpostArn"></a>

```java
public java.lang.String getOutpostArn();
```

- *Type:* java.lang.String

The ARN (Amazon Resource Name) for the Outpost.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53resolver_resolver_endpoint#outpost_arn Route53ResolverResolverEndpoint#outpost_arn}

---

##### `preferredInstanceType`<sup>Optional</sup> <a name="preferredInstanceType" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointConfig.property.preferredInstanceType"></a>

```java
public java.lang.String getPreferredInstanceType();
```

- *Type:* java.lang.String

The Amazon EC2 instance type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53resolver_resolver_endpoint#preferred_instance_type Route53ResolverResolverEndpoint#preferred_instance_type}

---

##### `protocols`<sup>Optional</sup> <a name="protocols" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointConfig.property.protocols"></a>

```java
public java.util.List<java.lang.String> getProtocols();
```

- *Type:* java.util.List<java.lang.String>

Protocols used for the endpoint. DoH-FIPS is applicable for inbound endpoints only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53resolver_resolver_endpoint#protocols Route53ResolverResolverEndpoint#protocols}

---

##### `resolverEndpointType`<sup>Optional</sup> <a name="resolverEndpointType" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointConfig.property.resolverEndpointType"></a>

```java
public java.lang.String getResolverEndpointType();
```

- *Type:* java.lang.String

The Resolver endpoint IP address type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53resolver_resolver_endpoint#resolver_endpoint_type Route53ResolverResolverEndpoint#resolver_endpoint_type}

---

##### `rniEnhancedMetricsEnabled`<sup>Optional</sup> <a name="rniEnhancedMetricsEnabled" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointConfig.property.rniEnhancedMetricsEnabled"></a>

```java
public java.lang.Boolean|IResolvable getRniEnhancedMetricsEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Specifies whether RNI enhanced metrics are enabled for the Resolver Endpoints.

When set to true, one-minute granular metrics are published in CloudWatch for each RNI associated with this endpoint. When set to false, metrics are not published. Default is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53resolver_resolver_endpoint#rni_enhanced_metrics_enabled Route53ResolverResolverEndpoint#rni_enhanced_metrics_enabled}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointConfig.property.tags"></a>

```java
public IResolvable|java.util.List<Route53ResolverResolverEndpointTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTags">Route53ResolverResolverEndpointTags</a>>

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53resolver_resolver_endpoint#tags Route53ResolverResolverEndpoint#tags}

---

##### `targetNameServerMetricsEnabled`<sup>Optional</sup> <a name="targetNameServerMetricsEnabled" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointConfig.property.targetNameServerMetricsEnabled"></a>

```java
public java.lang.Boolean|IResolvable getTargetNameServerMetricsEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Specifies whether target name server metrics are enabled for the Outbound Resolver Endpoint.

When set to true, one-minute granular metrics are published in CloudWatch for each target name server associated with this endpoint. When set to false, metrics are not published. Default is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53resolver_resolver_endpoint#target_name_server_metrics_enabled Route53ResolverResolverEndpoint#target_name_server_metrics_enabled}

---

### Route53ResolverResolverEndpointIpAddresses <a name="Route53ResolverResolverEndpointIpAddresses" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddresses"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddresses.Initializer"></a>

```java
import io.cdktn.providers.awscc.route53_resolver_resolver_endpoint.Route53ResolverResolverEndpointIpAddresses;

Route53ResolverResolverEndpointIpAddresses.builder()
    .subnetId(java.lang.String)
//  .ip(java.lang.String)
//  .ipv6(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddresses.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | The ID of the subnet that contains the IP address. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddresses.property.ip">ip</a></code> | <code>java.lang.String</code> | The IPv4 address that you want to use for DNS queries. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddresses.property.ipv6">ipv6</a></code> | <code>java.lang.String</code> | The IPv6 address that you want to use for DNS queries. |

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddresses.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

The ID of the subnet that contains the IP address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53resolver_resolver_endpoint#subnet_id Route53ResolverResolverEndpoint#subnet_id}

---

##### `ip`<sup>Optional</sup> <a name="ip" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddresses.property.ip"></a>

```java
public java.lang.String getIp();
```

- *Type:* java.lang.String

The IPv4 address that you want to use for DNS queries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53resolver_resolver_endpoint#ip Route53ResolverResolverEndpoint#ip}

---

##### `ipv6`<sup>Optional</sup> <a name="ipv6" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddresses.property.ipv6"></a>

```java
public java.lang.String getIpv6();
```

- *Type:* java.lang.String

The IPv6 address that you want to use for DNS queries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53resolver_resolver_endpoint#ipv_6 Route53ResolverResolverEndpoint#ipv_6}

---

### Route53ResolverResolverEndpointTags <a name="Route53ResolverResolverEndpointTags" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.route53_resolver_resolver_endpoint.Route53ResolverResolverEndpointTags;

Route53ResolverResolverEndpointTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTags.property.key">key</a></code> | <code>java.lang.String</code> | The name for the tag. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTags.property.value">value</a></code> | <code>java.lang.String</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The name for the tag.

For example, if you want to associate Resolver resources with the account IDs of your customers for billing purposes, the value of Key might be account-id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53resolver_resolver_endpoint#key Route53ResolverResolverEndpoint#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value for the tag.

For example, if Key is account-id, then Value might be the ID of the customer account that you're creating the resource for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53resolver_resolver_endpoint#value Route53ResolverResolverEndpoint#value}

---

## Classes <a name="Classes" id="Classes"></a>

### Route53ResolverResolverEndpointIpAddressesList <a name="Route53ResolverResolverEndpointIpAddressesList" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.route53_resolver_resolver_endpoint.Route53ResolverResolverEndpointIpAddressesList;

new Route53ResolverResolverEndpointIpAddressesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesList.get"></a>

```java
public Route53ResolverResolverEndpointIpAddressesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddresses">Route53ResolverResolverEndpointIpAddresses</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<Route53ResolverResolverEndpointIpAddresses> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddresses">Route53ResolverResolverEndpointIpAddresses</a>>

---


### Route53ResolverResolverEndpointIpAddressesOutputReference <a name="Route53ResolverResolverEndpointIpAddressesOutputReference" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.route53_resolver_resolver_endpoint.Route53ResolverResolverEndpointIpAddressesOutputReference;

new Route53ResolverResolverEndpointIpAddressesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.resetIp">resetIp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.resetIpv6">resetIpv6</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIp` <a name="resetIp" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.resetIp"></a>

```java
public void resetIp()
```

##### `resetIpv6` <a name="resetIpv6" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.resetIpv6"></a>

```java
public void resetIpv6()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.property.ipInput">ipInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.property.ipv6Input">ipv6Input</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.property.subnetIdInput">subnetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.property.ip">ip</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.property.ipv6">ipv6</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddresses">Route53ResolverResolverEndpointIpAddresses</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ipInput`<sup>Optional</sup> <a name="ipInput" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.property.ipInput"></a>

```java
public java.lang.String getIpInput();
```

- *Type:* java.lang.String

---

##### `ipv6Input`<sup>Optional</sup> <a name="ipv6Input" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.property.ipv6Input"></a>

```java
public java.lang.String getIpv6Input();
```

- *Type:* java.lang.String

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.property.subnetIdInput"></a>

```java
public java.lang.String getSubnetIdInput();
```

- *Type:* java.lang.String

---

##### `ip`<sup>Required</sup> <a name="ip" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.property.ip"></a>

```java
public java.lang.String getIp();
```

- *Type:* java.lang.String

---

##### `ipv6`<sup>Required</sup> <a name="ipv6" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.property.ipv6"></a>

```java
public java.lang.String getIpv6();
```

- *Type:* java.lang.String

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.property.internalValue"></a>

```java
public IResolvable|Route53ResolverResolverEndpointIpAddresses getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddresses">Route53ResolverResolverEndpointIpAddresses</a>

---


### Route53ResolverResolverEndpointTagsList <a name="Route53ResolverResolverEndpointTagsList" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.route53_resolver_resolver_endpoint.Route53ResolverResolverEndpointTagsList;

new Route53ResolverResolverEndpointTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsList.get"></a>

```java
public Route53ResolverResolverEndpointTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTags">Route53ResolverResolverEndpointTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<Route53ResolverResolverEndpointTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTags">Route53ResolverResolverEndpointTags</a>>

---


### Route53ResolverResolverEndpointTagsOutputReference <a name="Route53ResolverResolverEndpointTagsOutputReference" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.route53_resolver_resolver_endpoint.Route53ResolverResolverEndpointTagsOutputReference;

new Route53ResolverResolverEndpointTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTags">Route53ResolverResolverEndpointTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|Route53ResolverResolverEndpointTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTags">Route53ResolverResolverEndpointTags</a>

---



