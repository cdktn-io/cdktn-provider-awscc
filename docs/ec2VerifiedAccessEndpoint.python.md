# `ec2VerifiedAccessEndpoint` Submodule <a name="`ec2VerifiedAccessEndpoint` Submodule" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2VerifiedAccessEndpoint <a name="Ec2VerifiedAccessEndpoint" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_endpoint awscc_ec2_verified_access_endpoint}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_verified_access_endpoint

ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  attachment_type: str,
  endpoint_type: str,
  verified_access_group_id: str,
  application_domain: str = None,
  cidr_options: Ec2VerifiedAccessEndpointCidrOptions = None,
  description: str = None,
  domain_certificate_arn: str = None,
  endpoint_domain_prefix: str = None,
  load_balancer_options: Ec2VerifiedAccessEndpointLoadBalancerOptions = None,
  network_interface_options: Ec2VerifiedAccessEndpointNetworkInterfaceOptions = None,
  policy_document: str = None,
  policy_enabled: bool | IResolvable = None,
  rds_options: Ec2VerifiedAccessEndpointRdsOptions = None,
  security_group_ids: typing.List[str] = None,
  sse_specification: Ec2VerifiedAccessEndpointSseSpecification = None,
  tags: IResolvable | typing.List[Ec2VerifiedAccessEndpointTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.Initializer.parameter.attachmentType">attachment_type</a></code> | <code>str</code> | The type of attachment used to provide connectivity between the AWS Verified Access endpoint and the application. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.Initializer.parameter.endpointType">endpoint_type</a></code> | <code>str</code> | The type of AWS Verified Access endpoint. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.Initializer.parameter.verifiedAccessGroupId">verified_access_group_id</a></code> | <code>str</code> | The ID of the AWS Verified Access group. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.Initializer.parameter.applicationDomain">application_domain</a></code> | <code>str</code> | The DNS name for users to reach your application. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.Initializer.parameter.cidrOptions">cidr_options</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptions">Ec2VerifiedAccessEndpointCidrOptions</a></code> | The options for cidr type endpoint. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.Initializer.parameter.description">description</a></code> | <code>str</code> | A description for the AWS Verified Access endpoint. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.Initializer.parameter.domainCertificateArn">domain_certificate_arn</a></code> | <code>str</code> | The ARN of a public TLS/SSL certificate imported into or created with ACM. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.Initializer.parameter.endpointDomainPrefix">endpoint_domain_prefix</a></code> | <code>str</code> | A custom identifier that gets prepended to a DNS name that is generated for the endpoint. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.Initializer.parameter.loadBalancerOptions">load_balancer_options</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptions">Ec2VerifiedAccessEndpointLoadBalancerOptions</a></code> | The load balancer details if creating the AWS Verified Access endpoint as load-balancer type. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.Initializer.parameter.networkInterfaceOptions">network_interface_options</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptions">Ec2VerifiedAccessEndpointNetworkInterfaceOptions</a></code> | The options for network-interface type endpoint. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.Initializer.parameter.policyDocument">policy_document</a></code> | <code>str</code> | The AWS Verified Access policy document. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.Initializer.parameter.policyEnabled">policy_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | The status of the Verified Access policy. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.Initializer.parameter.rdsOptions">rds_options</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptions">Ec2VerifiedAccessEndpointRdsOptions</a></code> | The options for rds type endpoint. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.Initializer.parameter.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | The IDs of the security groups for the endpoint. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.Initializer.parameter.sseSpecification">sse_specification</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecification">Ec2VerifiedAccessEndpointSseSpecification</a></code> | The configuration options for customer provided KMS encryption. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTags">Ec2VerifiedAccessEndpointTags</a>]</code> | An array of key-value pairs to apply to this resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `attachment_type`<sup>Required</sup> <a name="attachment_type" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.Initializer.parameter.attachmentType"></a>

- *Type:* str

The type of attachment used to provide connectivity between the AWS Verified Access endpoint and the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_endpoint#attachment_type Ec2VerifiedAccessEndpoint#attachment_type}

---

##### `endpoint_type`<sup>Required</sup> <a name="endpoint_type" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.Initializer.parameter.endpointType"></a>

- *Type:* str

The type of AWS Verified Access endpoint.

Incoming application requests will be sent to an IP address, load balancer or a network interface depending on the endpoint type specified.The type of AWS Verified Access endpoint. Incoming application requests will be sent to an IP address, load balancer or a network interface depending on the endpoint type specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_endpoint#endpoint_type Ec2VerifiedAccessEndpoint#endpoint_type}

---

##### `verified_access_group_id`<sup>Required</sup> <a name="verified_access_group_id" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.Initializer.parameter.verifiedAccessGroupId"></a>

- *Type:* str

The ID of the AWS Verified Access group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_endpoint#verified_access_group_id Ec2VerifiedAccessEndpoint#verified_access_group_id}

---

##### `application_domain`<sup>Optional</sup> <a name="application_domain" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.Initializer.parameter.applicationDomain"></a>

- *Type:* str

The DNS name for users to reach your application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_endpoint#application_domain Ec2VerifiedAccessEndpoint#application_domain}

---

##### `cidr_options`<sup>Optional</sup> <a name="cidr_options" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.Initializer.parameter.cidrOptions"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptions">Ec2VerifiedAccessEndpointCidrOptions</a>

The options for cidr type endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_endpoint#cidr_options Ec2VerifiedAccessEndpoint#cidr_options}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.Initializer.parameter.description"></a>

- *Type:* str

A description for the AWS Verified Access endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_endpoint#description Ec2VerifiedAccessEndpoint#description}

---

##### `domain_certificate_arn`<sup>Optional</sup> <a name="domain_certificate_arn" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.Initializer.parameter.domainCertificateArn"></a>

- *Type:* str

The ARN of a public TLS/SSL certificate imported into or created with ACM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_endpoint#domain_certificate_arn Ec2VerifiedAccessEndpoint#domain_certificate_arn}

---

##### `endpoint_domain_prefix`<sup>Optional</sup> <a name="endpoint_domain_prefix" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.Initializer.parameter.endpointDomainPrefix"></a>

- *Type:* str

A custom identifier that gets prepended to a DNS name that is generated for the endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_endpoint#endpoint_domain_prefix Ec2VerifiedAccessEndpoint#endpoint_domain_prefix}

---

##### `load_balancer_options`<sup>Optional</sup> <a name="load_balancer_options" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.Initializer.parameter.loadBalancerOptions"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptions">Ec2VerifiedAccessEndpointLoadBalancerOptions</a>

The load balancer details if creating the AWS Verified Access endpoint as load-balancer type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_endpoint#load_balancer_options Ec2VerifiedAccessEndpoint#load_balancer_options}

---

##### `network_interface_options`<sup>Optional</sup> <a name="network_interface_options" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.Initializer.parameter.networkInterfaceOptions"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptions">Ec2VerifiedAccessEndpointNetworkInterfaceOptions</a>

The options for network-interface type endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_endpoint#network_interface_options Ec2VerifiedAccessEndpoint#network_interface_options}

---

##### `policy_document`<sup>Optional</sup> <a name="policy_document" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.Initializer.parameter.policyDocument"></a>

- *Type:* str

The AWS Verified Access policy document.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_endpoint#policy_document Ec2VerifiedAccessEndpoint#policy_document}

---

##### `policy_enabled`<sup>Optional</sup> <a name="policy_enabled" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.Initializer.parameter.policyEnabled"></a>

- *Type:* bool | cdktn.IResolvable

The status of the Verified Access policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_endpoint#policy_enabled Ec2VerifiedAccessEndpoint#policy_enabled}

---

##### `rds_options`<sup>Optional</sup> <a name="rds_options" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.Initializer.parameter.rdsOptions"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptions">Ec2VerifiedAccessEndpointRdsOptions</a>

The options for rds type endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_endpoint#rds_options Ec2VerifiedAccessEndpoint#rds_options}

---

##### `security_group_ids`<sup>Optional</sup> <a name="security_group_ids" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.Initializer.parameter.securityGroupIds"></a>

- *Type:* typing.List[str]

The IDs of the security groups for the endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_endpoint#security_group_ids Ec2VerifiedAccessEndpoint#security_group_ids}

---

##### `sse_specification`<sup>Optional</sup> <a name="sse_specification" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.Initializer.parameter.sseSpecification"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecification">Ec2VerifiedAccessEndpointSseSpecification</a>

The configuration options for customer provided KMS encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_endpoint#sse_specification Ec2VerifiedAccessEndpoint#sse_specification}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTags">Ec2VerifiedAccessEndpointTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_endpoint#tags Ec2VerifiedAccessEndpoint#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.putCidrOptions">put_cidr_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.putLoadBalancerOptions">put_load_balancer_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.putNetworkInterfaceOptions">put_network_interface_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.putRdsOptions">put_rds_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.putSseSpecification">put_sse_specification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.resetApplicationDomain">reset_application_domain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.resetCidrOptions">reset_cidr_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.resetDomainCertificateArn">reset_domain_certificate_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.resetEndpointDomainPrefix">reset_endpoint_domain_prefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.resetLoadBalancerOptions">reset_load_balancer_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.resetNetworkInterfaceOptions">reset_network_interface_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.resetPolicyDocument">reset_policy_document</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.resetPolicyEnabled">reset_policy_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.resetRdsOptions">reset_rds_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.resetSecurityGroupIds">reset_security_group_ids</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.resetSseSpecification">reset_sse_specification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_cidr_options` <a name="put_cidr_options" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.putCidrOptions"></a>

```python
def put_cidr_options(
  cidr: str = None,
  port_ranges: IResolvable | typing.List[Ec2VerifiedAccessEndpointCidrOptionsPortRanges] = None,
  protocol: str = None,
  subnet_ids: typing.List[str] = None
) -> None
```

###### `cidr`<sup>Optional</sup> <a name="cidr" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.putCidrOptions.parameter.cidr"></a>

- *Type:* str

The IP address range, in CIDR notation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_endpoint#cidr Ec2VerifiedAccessEndpoint#cidr}

---

###### `port_ranges`<sup>Optional</sup> <a name="port_ranges" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.putCidrOptions.parameter.portRanges"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRanges">Ec2VerifiedAccessEndpointCidrOptionsPortRanges</a>]

The list of port range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_endpoint#port_ranges Ec2VerifiedAccessEndpoint#port_ranges}

---

###### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.putCidrOptions.parameter.protocol"></a>

- *Type:* str

The IP protocol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_endpoint#protocol Ec2VerifiedAccessEndpoint#protocol}

---

###### `subnet_ids`<sup>Optional</sup> <a name="subnet_ids" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.putCidrOptions.parameter.subnetIds"></a>

- *Type:* typing.List[str]

The IDs of the subnets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_endpoint#subnet_ids Ec2VerifiedAccessEndpoint#subnet_ids}

---

##### `put_load_balancer_options` <a name="put_load_balancer_options" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.putLoadBalancerOptions"></a>

```python
def put_load_balancer_options(
  load_balancer_arn: str = None,
  port: typing.Union[int, float] = None,
  port_ranges: IResolvable | typing.List[Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRanges] = None,
  protocol: str = None,
  subnet_ids: typing.List[str] = None
) -> None
```

###### `load_balancer_arn`<sup>Optional</sup> <a name="load_balancer_arn" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.putLoadBalancerOptions.parameter.loadBalancerArn"></a>

- *Type:* str

The ARN of the load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_endpoint#load_balancer_arn Ec2VerifiedAccessEndpoint#load_balancer_arn}

---

###### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.putLoadBalancerOptions.parameter.port"></a>

- *Type:* typing.Union[int, float]

The IP port number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_endpoint#port Ec2VerifiedAccessEndpoint#port}

---

###### `port_ranges`<sup>Optional</sup> <a name="port_ranges" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.putLoadBalancerOptions.parameter.portRanges"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRanges">Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRanges</a>]

The list of port range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_endpoint#port_ranges Ec2VerifiedAccessEndpoint#port_ranges}

---

###### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.putLoadBalancerOptions.parameter.protocol"></a>

- *Type:* str

The IP protocol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_endpoint#protocol Ec2VerifiedAccessEndpoint#protocol}

---

###### `subnet_ids`<sup>Optional</sup> <a name="subnet_ids" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.putLoadBalancerOptions.parameter.subnetIds"></a>

- *Type:* typing.List[str]

The IDs of the subnets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_endpoint#subnet_ids Ec2VerifiedAccessEndpoint#subnet_ids}

---

##### `put_network_interface_options` <a name="put_network_interface_options" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.putNetworkInterfaceOptions"></a>

```python
def put_network_interface_options(
  network_interface_id: str = None,
  port: typing.Union[int, float] = None,
  port_ranges: IResolvable | typing.List[Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRanges] = None,
  protocol: str = None
) -> None
```

###### `network_interface_id`<sup>Optional</sup> <a name="network_interface_id" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.putNetworkInterfaceOptions.parameter.networkInterfaceId"></a>

- *Type:* str

The ID of the network interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_endpoint#network_interface_id Ec2VerifiedAccessEndpoint#network_interface_id}

---

###### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.putNetworkInterfaceOptions.parameter.port"></a>

- *Type:* typing.Union[int, float]

The IP port number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_endpoint#port Ec2VerifiedAccessEndpoint#port}

---

###### `port_ranges`<sup>Optional</sup> <a name="port_ranges" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.putNetworkInterfaceOptions.parameter.portRanges"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRanges">Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRanges</a>]

The list of port ranges.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_endpoint#port_ranges Ec2VerifiedAccessEndpoint#port_ranges}

---

###### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.putNetworkInterfaceOptions.parameter.protocol"></a>

- *Type:* str

The IP protocol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_endpoint#protocol Ec2VerifiedAccessEndpoint#protocol}

---

##### `put_rds_options` <a name="put_rds_options" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.putRdsOptions"></a>

```python
def put_rds_options(
  port: typing.Union[int, float] = None,
  protocol: str = None,
  rds_db_cluster_arn: str = None,
  rds_db_instance_arn: str = None,
  rds_db_proxy_arn: str = None,
  rds_endpoint: str = None,
  subnet_ids: typing.List[str] = None
) -> None
```

###### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.putRdsOptions.parameter.port"></a>

- *Type:* typing.Union[int, float]

The IP port number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_endpoint#port Ec2VerifiedAccessEndpoint#port}

---

###### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.putRdsOptions.parameter.protocol"></a>

- *Type:* str

The IP protocol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_endpoint#protocol Ec2VerifiedAccessEndpoint#protocol}

---

###### `rds_db_cluster_arn`<sup>Optional</sup> <a name="rds_db_cluster_arn" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.putRdsOptions.parameter.rdsDbClusterArn"></a>

- *Type:* str

The ARN of the RDS DB cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_endpoint#rds_db_cluster_arn Ec2VerifiedAccessEndpoint#rds_db_cluster_arn}

---

###### `rds_db_instance_arn`<sup>Optional</sup> <a name="rds_db_instance_arn" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.putRdsOptions.parameter.rdsDbInstanceArn"></a>

- *Type:* str

The ARN of the RDS DB instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_endpoint#rds_db_instance_arn Ec2VerifiedAccessEndpoint#rds_db_instance_arn}

---

###### `rds_db_proxy_arn`<sup>Optional</sup> <a name="rds_db_proxy_arn" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.putRdsOptions.parameter.rdsDbProxyArn"></a>

- *Type:* str

The ARN of the RDS DB proxy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_endpoint#rds_db_proxy_arn Ec2VerifiedAccessEndpoint#rds_db_proxy_arn}

---

###### `rds_endpoint`<sup>Optional</sup> <a name="rds_endpoint" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.putRdsOptions.parameter.rdsEndpoint"></a>

- *Type:* str

The RDS endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_endpoint#rds_endpoint Ec2VerifiedAccessEndpoint#rds_endpoint}

---

###### `subnet_ids`<sup>Optional</sup> <a name="subnet_ids" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.putRdsOptions.parameter.subnetIds"></a>

- *Type:* typing.List[str]

The IDs of the subnets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_endpoint#subnet_ids Ec2VerifiedAccessEndpoint#subnet_ids}

---

##### `put_sse_specification` <a name="put_sse_specification" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.putSseSpecification"></a>

```python
def put_sse_specification(
  customer_managed_key_enabled: bool | IResolvable = None,
  kms_key_arn: str = None
) -> None
```

###### `customer_managed_key_enabled`<sup>Optional</sup> <a name="customer_managed_key_enabled" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.putSseSpecification.parameter.customerManagedKeyEnabled"></a>

- *Type:* bool | cdktn.IResolvable

Whether to encrypt the policy with the provided key or disable encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_endpoint#customer_managed_key_enabled Ec2VerifiedAccessEndpoint#customer_managed_key_enabled}

---

###### `kms_key_arn`<sup>Optional</sup> <a name="kms_key_arn" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.putSseSpecification.parameter.kmsKeyArn"></a>

- *Type:* str

KMS Key Arn used to encrypt the group policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_endpoint#kms_key_arn Ec2VerifiedAccessEndpoint#kms_key_arn}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[Ec2VerifiedAccessEndpointTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTags">Ec2VerifiedAccessEndpointTags</a>]

---

##### `reset_application_domain` <a name="reset_application_domain" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.resetApplicationDomain"></a>

```python
def reset_application_domain() -> None
```

##### `reset_cidr_options` <a name="reset_cidr_options" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.resetCidrOptions"></a>

```python
def reset_cidr_options() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_domain_certificate_arn` <a name="reset_domain_certificate_arn" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.resetDomainCertificateArn"></a>

```python
def reset_domain_certificate_arn() -> None
```

##### `reset_endpoint_domain_prefix` <a name="reset_endpoint_domain_prefix" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.resetEndpointDomainPrefix"></a>

```python
def reset_endpoint_domain_prefix() -> None
```

##### `reset_load_balancer_options` <a name="reset_load_balancer_options" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.resetLoadBalancerOptions"></a>

```python
def reset_load_balancer_options() -> None
```

##### `reset_network_interface_options` <a name="reset_network_interface_options" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.resetNetworkInterfaceOptions"></a>

```python
def reset_network_interface_options() -> None
```

##### `reset_policy_document` <a name="reset_policy_document" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.resetPolicyDocument"></a>

```python
def reset_policy_document() -> None
```

##### `reset_policy_enabled` <a name="reset_policy_enabled" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.resetPolicyEnabled"></a>

```python
def reset_policy_enabled() -> None
```

##### `reset_rds_options` <a name="reset_rds_options" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.resetRdsOptions"></a>

```python
def reset_rds_options() -> None
```

##### `reset_security_group_ids` <a name="reset_security_group_ids" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.resetSecurityGroupIds"></a>

```python
def reset_security_group_ids() -> None
```

##### `reset_sse_specification` <a name="reset_sse_specification" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.resetSseSpecification"></a>

```python
def reset_sse_specification() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a Ec2VerifiedAccessEndpoint resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.isConstruct"></a>

```python
from cdktn_provider_awscc import ec2_verified_access_endpoint

ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.isTerraformElement"></a>

```python
from cdktn_provider_awscc import ec2_verified_access_endpoint

ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.isTerraformResource"></a>

```python
from cdktn_provider_awscc import ec2_verified_access_endpoint

ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import ec2_verified_access_endpoint

ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a Ec2VerifiedAccessEndpoint resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Ec2VerifiedAccessEndpoint to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Ec2VerifiedAccessEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Ec2VerifiedAccessEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.cidrOptions">cidr_options</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference">Ec2VerifiedAccessEndpointCidrOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.creationTime">creation_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.deviceValidationDomain">device_validation_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.endpointDomain">endpoint_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.lastUpdatedTime">last_updated_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.loadBalancerOptions">load_balancer_options</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference">Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.networkInterfaceOptions">network_interface_options</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference">Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.rdsOptions">rds_options</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference">Ec2VerifiedAccessEndpointRdsOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.sseSpecification">sse_specification</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference">Ec2VerifiedAccessEndpointSseSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsList">Ec2VerifiedAccessEndpointTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.verifiedAccessEndpointId">verified_access_endpoint_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.verifiedAccessInstanceId">verified_access_instance_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.applicationDomainInput">application_domain_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.attachmentTypeInput">attachment_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.cidrOptionsInput">cidr_options_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptions">Ec2VerifiedAccessEndpointCidrOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.domainCertificateArnInput">domain_certificate_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.endpointDomainPrefixInput">endpoint_domain_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.endpointTypeInput">endpoint_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.loadBalancerOptionsInput">load_balancer_options_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptions">Ec2VerifiedAccessEndpointLoadBalancerOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.networkInterfaceOptionsInput">network_interface_options_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptions">Ec2VerifiedAccessEndpointNetworkInterfaceOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.policyDocumentInput">policy_document_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.policyEnabledInput">policy_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.rdsOptionsInput">rds_options_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptions">Ec2VerifiedAccessEndpointRdsOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.securityGroupIdsInput">security_group_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.sseSpecificationInput">sse_specification_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecification">Ec2VerifiedAccessEndpointSseSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTags">Ec2VerifiedAccessEndpointTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.verifiedAccessGroupIdInput">verified_access_group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.applicationDomain">application_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.attachmentType">attachment_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.domainCertificateArn">domain_certificate_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.endpointDomainPrefix">endpoint_domain_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.endpointType">endpoint_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.policyDocument">policy_document</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.policyEnabled">policy_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.verifiedAccessGroupId">verified_access_group_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `cidr_options`<sup>Required</sup> <a name="cidr_options" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.cidrOptions"></a>

```python
cidr_options: Ec2VerifiedAccessEndpointCidrOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference">Ec2VerifiedAccessEndpointCidrOptionsOutputReference</a>

---

##### `creation_time`<sup>Required</sup> <a name="creation_time" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.creationTime"></a>

```python
creation_time: str
```

- *Type:* str

---

##### `device_validation_domain`<sup>Required</sup> <a name="device_validation_domain" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.deviceValidationDomain"></a>

```python
device_validation_domain: str
```

- *Type:* str

---

##### `endpoint_domain`<sup>Required</sup> <a name="endpoint_domain" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.endpointDomain"></a>

```python
endpoint_domain: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `last_updated_time`<sup>Required</sup> <a name="last_updated_time" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.lastUpdatedTime"></a>

```python
last_updated_time: str
```

- *Type:* str

---

##### `load_balancer_options`<sup>Required</sup> <a name="load_balancer_options" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.loadBalancerOptions"></a>

```python
load_balancer_options: Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference">Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference</a>

---

##### `network_interface_options`<sup>Required</sup> <a name="network_interface_options" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.networkInterfaceOptions"></a>

```python
network_interface_options: Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference">Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference</a>

---

##### `rds_options`<sup>Required</sup> <a name="rds_options" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.rdsOptions"></a>

```python
rds_options: Ec2VerifiedAccessEndpointRdsOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference">Ec2VerifiedAccessEndpointRdsOptionsOutputReference</a>

---

##### `sse_specification`<sup>Required</sup> <a name="sse_specification" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.sseSpecification"></a>

```python
sse_specification: Ec2VerifiedAccessEndpointSseSpecificationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference">Ec2VerifiedAccessEndpointSseSpecificationOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.tags"></a>

```python
tags: Ec2VerifiedAccessEndpointTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsList">Ec2VerifiedAccessEndpointTagsList</a>

---

##### `verified_access_endpoint_id`<sup>Required</sup> <a name="verified_access_endpoint_id" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.verifiedAccessEndpointId"></a>

```python
verified_access_endpoint_id: str
```

- *Type:* str

---

##### `verified_access_instance_id`<sup>Required</sup> <a name="verified_access_instance_id" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.verifiedAccessInstanceId"></a>

```python
verified_access_instance_id: str
```

- *Type:* str

---

##### `application_domain_input`<sup>Optional</sup> <a name="application_domain_input" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.applicationDomainInput"></a>

```python
application_domain_input: str
```

- *Type:* str

---

##### `attachment_type_input`<sup>Optional</sup> <a name="attachment_type_input" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.attachmentTypeInput"></a>

```python
attachment_type_input: str
```

- *Type:* str

---

##### `cidr_options_input`<sup>Optional</sup> <a name="cidr_options_input" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.cidrOptionsInput"></a>

```python
cidr_options_input: IResolvable | Ec2VerifiedAccessEndpointCidrOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptions">Ec2VerifiedAccessEndpointCidrOptions</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `domain_certificate_arn_input`<sup>Optional</sup> <a name="domain_certificate_arn_input" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.domainCertificateArnInput"></a>

```python
domain_certificate_arn_input: str
```

- *Type:* str

---

##### `endpoint_domain_prefix_input`<sup>Optional</sup> <a name="endpoint_domain_prefix_input" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.endpointDomainPrefixInput"></a>

```python
endpoint_domain_prefix_input: str
```

- *Type:* str

---

##### `endpoint_type_input`<sup>Optional</sup> <a name="endpoint_type_input" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.endpointTypeInput"></a>

```python
endpoint_type_input: str
```

- *Type:* str

---

##### `load_balancer_options_input`<sup>Optional</sup> <a name="load_balancer_options_input" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.loadBalancerOptionsInput"></a>

```python
load_balancer_options_input: IResolvable | Ec2VerifiedAccessEndpointLoadBalancerOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptions">Ec2VerifiedAccessEndpointLoadBalancerOptions</a>

---

##### `network_interface_options_input`<sup>Optional</sup> <a name="network_interface_options_input" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.networkInterfaceOptionsInput"></a>

```python
network_interface_options_input: IResolvable | Ec2VerifiedAccessEndpointNetworkInterfaceOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptions">Ec2VerifiedAccessEndpointNetworkInterfaceOptions</a>

---

##### `policy_document_input`<sup>Optional</sup> <a name="policy_document_input" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.policyDocumentInput"></a>

```python
policy_document_input: str
```

- *Type:* str

---

##### `policy_enabled_input`<sup>Optional</sup> <a name="policy_enabled_input" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.policyEnabledInput"></a>

```python
policy_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `rds_options_input`<sup>Optional</sup> <a name="rds_options_input" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.rdsOptionsInput"></a>

```python
rds_options_input: IResolvable | Ec2VerifiedAccessEndpointRdsOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptions">Ec2VerifiedAccessEndpointRdsOptions</a>

---

##### `security_group_ids_input`<sup>Optional</sup> <a name="security_group_ids_input" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.securityGroupIdsInput"></a>

```python
security_group_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `sse_specification_input`<sup>Optional</sup> <a name="sse_specification_input" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.sseSpecificationInput"></a>

```python
sse_specification_input: IResolvable | Ec2VerifiedAccessEndpointSseSpecification
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecification">Ec2VerifiedAccessEndpointSseSpecification</a>

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[Ec2VerifiedAccessEndpointTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTags">Ec2VerifiedAccessEndpointTags</a>]

---

##### `verified_access_group_id_input`<sup>Optional</sup> <a name="verified_access_group_id_input" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.verifiedAccessGroupIdInput"></a>

```python
verified_access_group_id_input: str
```

- *Type:* str

---

##### `application_domain`<sup>Required</sup> <a name="application_domain" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.applicationDomain"></a>

```python
application_domain: str
```

- *Type:* str

---

##### `attachment_type`<sup>Required</sup> <a name="attachment_type" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.attachmentType"></a>

```python
attachment_type: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `domain_certificate_arn`<sup>Required</sup> <a name="domain_certificate_arn" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.domainCertificateArn"></a>

```python
domain_certificate_arn: str
```

- *Type:* str

---

##### `endpoint_domain_prefix`<sup>Required</sup> <a name="endpoint_domain_prefix" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.endpointDomainPrefix"></a>

```python
endpoint_domain_prefix: str
```

- *Type:* str

---

##### `endpoint_type`<sup>Required</sup> <a name="endpoint_type" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.endpointType"></a>

```python
endpoint_type: str
```

- *Type:* str

---

##### `policy_document`<sup>Required</sup> <a name="policy_document" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.policyDocument"></a>

```python
policy_document: str
```

- *Type:* str

---

##### `policy_enabled`<sup>Required</sup> <a name="policy_enabled" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.policyEnabled"></a>

```python
policy_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `security_group_ids`<sup>Required</sup> <a name="security_group_ids" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `verified_access_group_id`<sup>Required</sup> <a name="verified_access_group_id" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.verifiedAccessGroupId"></a>

```python
verified_access_group_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2VerifiedAccessEndpointCidrOptions <a name="Ec2VerifiedAccessEndpointCidrOptions" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptions.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_verified_access_endpoint

ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptions(
  cidr: str = None,
  port_ranges: IResolvable | typing.List[Ec2VerifiedAccessEndpointCidrOptionsPortRanges] = None,
  protocol: str = None,
  subnet_ids: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptions.property.cidr">cidr</a></code> | <code>str</code> | The IP address range, in CIDR notation. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptions.property.portRanges">port_ranges</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRanges">Ec2VerifiedAccessEndpointCidrOptionsPortRanges</a>]</code> | The list of port range. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptions.property.protocol">protocol</a></code> | <code>str</code> | The IP protocol. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptions.property.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | The IDs of the subnets. |

---

##### `cidr`<sup>Optional</sup> <a name="cidr" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptions.property.cidr"></a>

```python
cidr: str
```

- *Type:* str

The IP address range, in CIDR notation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_endpoint#cidr Ec2VerifiedAccessEndpoint#cidr}

---

##### `port_ranges`<sup>Optional</sup> <a name="port_ranges" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptions.property.portRanges"></a>

```python
port_ranges: IResolvable | typing.List[Ec2VerifiedAccessEndpointCidrOptionsPortRanges]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRanges">Ec2VerifiedAccessEndpointCidrOptionsPortRanges</a>]

The list of port range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_endpoint#port_ranges Ec2VerifiedAccessEndpoint#port_ranges}

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptions.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

The IP protocol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_endpoint#protocol Ec2VerifiedAccessEndpoint#protocol}

---

##### `subnet_ids`<sup>Optional</sup> <a name="subnet_ids" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptions.property.subnetIds"></a>

```python
subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

The IDs of the subnets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_endpoint#subnet_ids Ec2VerifiedAccessEndpoint#subnet_ids}

---

### Ec2VerifiedAccessEndpointCidrOptionsPortRanges <a name="Ec2VerifiedAccessEndpointCidrOptionsPortRanges" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRanges"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRanges.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_verified_access_endpoint

ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRanges(
  from_port: typing.Union[int, float] = None,
  to_port: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRanges.property.fromPort">from_port</a></code> | <code>typing.Union[int, float]</code> | The first port in the range. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRanges.property.toPort">to_port</a></code> | <code>typing.Union[int, float]</code> | The last port in the range. |

---

##### `from_port`<sup>Optional</sup> <a name="from_port" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRanges.property.fromPort"></a>

```python
from_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The first port in the range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_endpoint#from_port Ec2VerifiedAccessEndpoint#from_port}

---

##### `to_port`<sup>Optional</sup> <a name="to_port" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRanges.property.toPort"></a>

```python
to_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The last port in the range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_endpoint#to_port Ec2VerifiedAccessEndpoint#to_port}

---

### Ec2VerifiedAccessEndpointConfig <a name="Ec2VerifiedAccessEndpointConfig" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointConfig.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_verified_access_endpoint

ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  attachment_type: str,
  endpoint_type: str,
  verified_access_group_id: str,
  application_domain: str = None,
  cidr_options: Ec2VerifiedAccessEndpointCidrOptions = None,
  description: str = None,
  domain_certificate_arn: str = None,
  endpoint_domain_prefix: str = None,
  load_balancer_options: Ec2VerifiedAccessEndpointLoadBalancerOptions = None,
  network_interface_options: Ec2VerifiedAccessEndpointNetworkInterfaceOptions = None,
  policy_document: str = None,
  policy_enabled: bool | IResolvable = None,
  rds_options: Ec2VerifiedAccessEndpointRdsOptions = None,
  security_group_ids: typing.List[str] = None,
  sse_specification: Ec2VerifiedAccessEndpointSseSpecification = None,
  tags: IResolvable | typing.List[Ec2VerifiedAccessEndpointTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointConfig.property.attachmentType">attachment_type</a></code> | <code>str</code> | The type of attachment used to provide connectivity between the AWS Verified Access endpoint and the application. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointConfig.property.endpointType">endpoint_type</a></code> | <code>str</code> | The type of AWS Verified Access endpoint. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointConfig.property.verifiedAccessGroupId">verified_access_group_id</a></code> | <code>str</code> | The ID of the AWS Verified Access group. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointConfig.property.applicationDomain">application_domain</a></code> | <code>str</code> | The DNS name for users to reach your application. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointConfig.property.cidrOptions">cidr_options</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptions">Ec2VerifiedAccessEndpointCidrOptions</a></code> | The options for cidr type endpoint. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointConfig.property.description">description</a></code> | <code>str</code> | A description for the AWS Verified Access endpoint. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointConfig.property.domainCertificateArn">domain_certificate_arn</a></code> | <code>str</code> | The ARN of a public TLS/SSL certificate imported into or created with ACM. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointConfig.property.endpointDomainPrefix">endpoint_domain_prefix</a></code> | <code>str</code> | A custom identifier that gets prepended to a DNS name that is generated for the endpoint. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointConfig.property.loadBalancerOptions">load_balancer_options</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptions">Ec2VerifiedAccessEndpointLoadBalancerOptions</a></code> | The load balancer details if creating the AWS Verified Access endpoint as load-balancer type. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointConfig.property.networkInterfaceOptions">network_interface_options</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptions">Ec2VerifiedAccessEndpointNetworkInterfaceOptions</a></code> | The options for network-interface type endpoint. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointConfig.property.policyDocument">policy_document</a></code> | <code>str</code> | The AWS Verified Access policy document. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointConfig.property.policyEnabled">policy_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | The status of the Verified Access policy. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointConfig.property.rdsOptions">rds_options</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptions">Ec2VerifiedAccessEndpointRdsOptions</a></code> | The options for rds type endpoint. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointConfig.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | The IDs of the security groups for the endpoint. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointConfig.property.sseSpecification">sse_specification</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecification">Ec2VerifiedAccessEndpointSseSpecification</a></code> | The configuration options for customer provided KMS encryption. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTags">Ec2VerifiedAccessEndpointTags</a>]</code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `attachment_type`<sup>Required</sup> <a name="attachment_type" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointConfig.property.attachmentType"></a>

```python
attachment_type: str
```

- *Type:* str

The type of attachment used to provide connectivity between the AWS Verified Access endpoint and the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_endpoint#attachment_type Ec2VerifiedAccessEndpoint#attachment_type}

---

##### `endpoint_type`<sup>Required</sup> <a name="endpoint_type" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointConfig.property.endpointType"></a>

```python
endpoint_type: str
```

- *Type:* str

The type of AWS Verified Access endpoint.

Incoming application requests will be sent to an IP address, load balancer or a network interface depending on the endpoint type specified.The type of AWS Verified Access endpoint. Incoming application requests will be sent to an IP address, load balancer or a network interface depending on the endpoint type specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_endpoint#endpoint_type Ec2VerifiedAccessEndpoint#endpoint_type}

---

##### `verified_access_group_id`<sup>Required</sup> <a name="verified_access_group_id" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointConfig.property.verifiedAccessGroupId"></a>

```python
verified_access_group_id: str
```

- *Type:* str

The ID of the AWS Verified Access group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_endpoint#verified_access_group_id Ec2VerifiedAccessEndpoint#verified_access_group_id}

---

##### `application_domain`<sup>Optional</sup> <a name="application_domain" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointConfig.property.applicationDomain"></a>

```python
application_domain: str
```

- *Type:* str

The DNS name for users to reach your application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_endpoint#application_domain Ec2VerifiedAccessEndpoint#application_domain}

---

##### `cidr_options`<sup>Optional</sup> <a name="cidr_options" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointConfig.property.cidrOptions"></a>

```python
cidr_options: Ec2VerifiedAccessEndpointCidrOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptions">Ec2VerifiedAccessEndpointCidrOptions</a>

The options for cidr type endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_endpoint#cidr_options Ec2VerifiedAccessEndpoint#cidr_options}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointConfig.property.description"></a>

```python
description: str
```

- *Type:* str

A description for the AWS Verified Access endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_endpoint#description Ec2VerifiedAccessEndpoint#description}

---

##### `domain_certificate_arn`<sup>Optional</sup> <a name="domain_certificate_arn" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointConfig.property.domainCertificateArn"></a>

```python
domain_certificate_arn: str
```

- *Type:* str

The ARN of a public TLS/SSL certificate imported into or created with ACM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_endpoint#domain_certificate_arn Ec2VerifiedAccessEndpoint#domain_certificate_arn}

---

##### `endpoint_domain_prefix`<sup>Optional</sup> <a name="endpoint_domain_prefix" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointConfig.property.endpointDomainPrefix"></a>

```python
endpoint_domain_prefix: str
```

- *Type:* str

A custom identifier that gets prepended to a DNS name that is generated for the endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_endpoint#endpoint_domain_prefix Ec2VerifiedAccessEndpoint#endpoint_domain_prefix}

---

##### `load_balancer_options`<sup>Optional</sup> <a name="load_balancer_options" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointConfig.property.loadBalancerOptions"></a>

```python
load_balancer_options: Ec2VerifiedAccessEndpointLoadBalancerOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptions">Ec2VerifiedAccessEndpointLoadBalancerOptions</a>

The load balancer details if creating the AWS Verified Access endpoint as load-balancer type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_endpoint#load_balancer_options Ec2VerifiedAccessEndpoint#load_balancer_options}

---

##### `network_interface_options`<sup>Optional</sup> <a name="network_interface_options" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointConfig.property.networkInterfaceOptions"></a>

```python
network_interface_options: Ec2VerifiedAccessEndpointNetworkInterfaceOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptions">Ec2VerifiedAccessEndpointNetworkInterfaceOptions</a>

The options for network-interface type endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_endpoint#network_interface_options Ec2VerifiedAccessEndpoint#network_interface_options}

---

##### `policy_document`<sup>Optional</sup> <a name="policy_document" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointConfig.property.policyDocument"></a>

```python
policy_document: str
```

- *Type:* str

The AWS Verified Access policy document.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_endpoint#policy_document Ec2VerifiedAccessEndpoint#policy_document}

---

##### `policy_enabled`<sup>Optional</sup> <a name="policy_enabled" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointConfig.property.policyEnabled"></a>

```python
policy_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

The status of the Verified Access policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_endpoint#policy_enabled Ec2VerifiedAccessEndpoint#policy_enabled}

---

##### `rds_options`<sup>Optional</sup> <a name="rds_options" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointConfig.property.rdsOptions"></a>

```python
rds_options: Ec2VerifiedAccessEndpointRdsOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptions">Ec2VerifiedAccessEndpointRdsOptions</a>

The options for rds type endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_endpoint#rds_options Ec2VerifiedAccessEndpoint#rds_options}

---

##### `security_group_ids`<sup>Optional</sup> <a name="security_group_ids" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointConfig.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

The IDs of the security groups for the endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_endpoint#security_group_ids Ec2VerifiedAccessEndpoint#security_group_ids}

---

##### `sse_specification`<sup>Optional</sup> <a name="sse_specification" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointConfig.property.sseSpecification"></a>

```python
sse_specification: Ec2VerifiedAccessEndpointSseSpecification
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecification">Ec2VerifiedAccessEndpointSseSpecification</a>

The configuration options for customer provided KMS encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_endpoint#sse_specification Ec2VerifiedAccessEndpoint#sse_specification}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[Ec2VerifiedAccessEndpointTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTags">Ec2VerifiedAccessEndpointTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_endpoint#tags Ec2VerifiedAccessEndpoint#tags}

---

### Ec2VerifiedAccessEndpointLoadBalancerOptions <a name="Ec2VerifiedAccessEndpointLoadBalancerOptions" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptions.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_verified_access_endpoint

ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptions(
  load_balancer_arn: str = None,
  port: typing.Union[int, float] = None,
  port_ranges: IResolvable | typing.List[Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRanges] = None,
  protocol: str = None,
  subnet_ids: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptions.property.loadBalancerArn">load_balancer_arn</a></code> | <code>str</code> | The ARN of the load balancer. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptions.property.port">port</a></code> | <code>typing.Union[int, float]</code> | The IP port number. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptions.property.portRanges">port_ranges</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRanges">Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRanges</a>]</code> | The list of port range. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptions.property.protocol">protocol</a></code> | <code>str</code> | The IP protocol. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptions.property.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | The IDs of the subnets. |

---

##### `load_balancer_arn`<sup>Optional</sup> <a name="load_balancer_arn" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptions.property.loadBalancerArn"></a>

```python
load_balancer_arn: str
```

- *Type:* str

The ARN of the load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_endpoint#load_balancer_arn Ec2VerifiedAccessEndpoint#load_balancer_arn}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptions.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The IP port number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_endpoint#port Ec2VerifiedAccessEndpoint#port}

---

##### `port_ranges`<sup>Optional</sup> <a name="port_ranges" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptions.property.portRanges"></a>

```python
port_ranges: IResolvable | typing.List[Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRanges]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRanges">Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRanges</a>]

The list of port range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_endpoint#port_ranges Ec2VerifiedAccessEndpoint#port_ranges}

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptions.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

The IP protocol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_endpoint#protocol Ec2VerifiedAccessEndpoint#protocol}

---

##### `subnet_ids`<sup>Optional</sup> <a name="subnet_ids" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptions.property.subnetIds"></a>

```python
subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

The IDs of the subnets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_endpoint#subnet_ids Ec2VerifiedAccessEndpoint#subnet_ids}

---

### Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRanges <a name="Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRanges" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRanges"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRanges.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_verified_access_endpoint

ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRanges(
  from_port: typing.Union[int, float] = None,
  to_port: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRanges.property.fromPort">from_port</a></code> | <code>typing.Union[int, float]</code> | The first port in the range. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRanges.property.toPort">to_port</a></code> | <code>typing.Union[int, float]</code> | The last port in the range. |

---

##### `from_port`<sup>Optional</sup> <a name="from_port" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRanges.property.fromPort"></a>

```python
from_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The first port in the range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_endpoint#from_port Ec2VerifiedAccessEndpoint#from_port}

---

##### `to_port`<sup>Optional</sup> <a name="to_port" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRanges.property.toPort"></a>

```python
to_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The last port in the range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_endpoint#to_port Ec2VerifiedAccessEndpoint#to_port}

---

### Ec2VerifiedAccessEndpointNetworkInterfaceOptions <a name="Ec2VerifiedAccessEndpointNetworkInterfaceOptions" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptions.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_verified_access_endpoint

ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptions(
  network_interface_id: str = None,
  port: typing.Union[int, float] = None,
  port_ranges: IResolvable | typing.List[Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRanges] = None,
  protocol: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptions.property.networkInterfaceId">network_interface_id</a></code> | <code>str</code> | The ID of the network interface. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptions.property.port">port</a></code> | <code>typing.Union[int, float]</code> | The IP port number. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptions.property.portRanges">port_ranges</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRanges">Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRanges</a>]</code> | The list of port ranges. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptions.property.protocol">protocol</a></code> | <code>str</code> | The IP protocol. |

---

##### `network_interface_id`<sup>Optional</sup> <a name="network_interface_id" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptions.property.networkInterfaceId"></a>

```python
network_interface_id: str
```

- *Type:* str

The ID of the network interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_endpoint#network_interface_id Ec2VerifiedAccessEndpoint#network_interface_id}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptions.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The IP port number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_endpoint#port Ec2VerifiedAccessEndpoint#port}

---

##### `port_ranges`<sup>Optional</sup> <a name="port_ranges" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptions.property.portRanges"></a>

```python
port_ranges: IResolvable | typing.List[Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRanges]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRanges">Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRanges</a>]

The list of port ranges.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_endpoint#port_ranges Ec2VerifiedAccessEndpoint#port_ranges}

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptions.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

The IP protocol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_endpoint#protocol Ec2VerifiedAccessEndpoint#protocol}

---

### Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRanges <a name="Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRanges" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRanges"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRanges.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_verified_access_endpoint

ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRanges(
  from_port: typing.Union[int, float] = None,
  to_port: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRanges.property.fromPort">from_port</a></code> | <code>typing.Union[int, float]</code> | The first port in the range. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRanges.property.toPort">to_port</a></code> | <code>typing.Union[int, float]</code> | The last port in the range. |

---

##### `from_port`<sup>Optional</sup> <a name="from_port" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRanges.property.fromPort"></a>

```python
from_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The first port in the range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_endpoint#from_port Ec2VerifiedAccessEndpoint#from_port}

---

##### `to_port`<sup>Optional</sup> <a name="to_port" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRanges.property.toPort"></a>

```python
to_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The last port in the range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_endpoint#to_port Ec2VerifiedAccessEndpoint#to_port}

---

### Ec2VerifiedAccessEndpointRdsOptions <a name="Ec2VerifiedAccessEndpointRdsOptions" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptions.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_verified_access_endpoint

ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptions(
  port: typing.Union[int, float] = None,
  protocol: str = None,
  rds_db_cluster_arn: str = None,
  rds_db_instance_arn: str = None,
  rds_db_proxy_arn: str = None,
  rds_endpoint: str = None,
  subnet_ids: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptions.property.port">port</a></code> | <code>typing.Union[int, float]</code> | The IP port number. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptions.property.protocol">protocol</a></code> | <code>str</code> | The IP protocol. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptions.property.rdsDbClusterArn">rds_db_cluster_arn</a></code> | <code>str</code> | The ARN of the RDS DB cluster. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptions.property.rdsDbInstanceArn">rds_db_instance_arn</a></code> | <code>str</code> | The ARN of the RDS DB instance. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptions.property.rdsDbProxyArn">rds_db_proxy_arn</a></code> | <code>str</code> | The ARN of the RDS DB proxy. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptions.property.rdsEndpoint">rds_endpoint</a></code> | <code>str</code> | The RDS endpoint. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptions.property.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | The IDs of the subnets. |

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptions.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The IP port number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_endpoint#port Ec2VerifiedAccessEndpoint#port}

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptions.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

The IP protocol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_endpoint#protocol Ec2VerifiedAccessEndpoint#protocol}

---

##### `rds_db_cluster_arn`<sup>Optional</sup> <a name="rds_db_cluster_arn" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptions.property.rdsDbClusterArn"></a>

```python
rds_db_cluster_arn: str
```

- *Type:* str

The ARN of the RDS DB cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_endpoint#rds_db_cluster_arn Ec2VerifiedAccessEndpoint#rds_db_cluster_arn}

---

##### `rds_db_instance_arn`<sup>Optional</sup> <a name="rds_db_instance_arn" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptions.property.rdsDbInstanceArn"></a>

```python
rds_db_instance_arn: str
```

- *Type:* str

The ARN of the RDS DB instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_endpoint#rds_db_instance_arn Ec2VerifiedAccessEndpoint#rds_db_instance_arn}

---

##### `rds_db_proxy_arn`<sup>Optional</sup> <a name="rds_db_proxy_arn" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptions.property.rdsDbProxyArn"></a>

```python
rds_db_proxy_arn: str
```

- *Type:* str

The ARN of the RDS DB proxy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_endpoint#rds_db_proxy_arn Ec2VerifiedAccessEndpoint#rds_db_proxy_arn}

---

##### `rds_endpoint`<sup>Optional</sup> <a name="rds_endpoint" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptions.property.rdsEndpoint"></a>

```python
rds_endpoint: str
```

- *Type:* str

The RDS endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_endpoint#rds_endpoint Ec2VerifiedAccessEndpoint#rds_endpoint}

---

##### `subnet_ids`<sup>Optional</sup> <a name="subnet_ids" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptions.property.subnetIds"></a>

```python
subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

The IDs of the subnets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_endpoint#subnet_ids Ec2VerifiedAccessEndpoint#subnet_ids}

---

### Ec2VerifiedAccessEndpointSseSpecification <a name="Ec2VerifiedAccessEndpointSseSpecification" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecification.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_verified_access_endpoint

ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecification(
  customer_managed_key_enabled: bool | IResolvable = None,
  kms_key_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecification.property.customerManagedKeyEnabled">customer_managed_key_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether to encrypt the policy with the provided key or disable encryption. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecification.property.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | KMS Key Arn used to encrypt the group policy. |

---

##### `customer_managed_key_enabled`<sup>Optional</sup> <a name="customer_managed_key_enabled" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecification.property.customerManagedKeyEnabled"></a>

```python
customer_managed_key_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether to encrypt the policy with the provided key or disable encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_endpoint#customer_managed_key_enabled Ec2VerifiedAccessEndpoint#customer_managed_key_enabled}

---

##### `kms_key_arn`<sup>Optional</sup> <a name="kms_key_arn" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecification.property.kmsKeyArn"></a>

```python
kms_key_arn: str
```

- *Type:* str

KMS Key Arn used to encrypt the group policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_endpoint#kms_key_arn Ec2VerifiedAccessEndpoint#kms_key_arn}

---

### Ec2VerifiedAccessEndpointTags <a name="Ec2VerifiedAccessEndpointTags" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTags.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_verified_access_endpoint

ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTags.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTags.property.value">value</a></code> | <code>str</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_endpoint#key Ec2VerifiedAccessEndpoint#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_endpoint#value Ec2VerifiedAccessEndpoint#value}

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2VerifiedAccessEndpointCidrOptionsOutputReference <a name="Ec2VerifiedAccessEndpointCidrOptionsOutputReference" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_verified_access_endpoint

ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.putPortRanges">put_port_ranges</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.resetCidr">reset_cidr</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.resetPortRanges">reset_port_ranges</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.resetProtocol">reset_protocol</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.resetSubnetIds">reset_subnet_ids</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_port_ranges` <a name="put_port_ranges" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.putPortRanges"></a>

```python
def put_port_ranges(
  value: IResolvable | typing.List[Ec2VerifiedAccessEndpointCidrOptionsPortRanges]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.putPortRanges.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRanges">Ec2VerifiedAccessEndpointCidrOptionsPortRanges</a>]

---

##### `reset_cidr` <a name="reset_cidr" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.resetCidr"></a>

```python
def reset_cidr() -> None
```

##### `reset_port_ranges` <a name="reset_port_ranges" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.resetPortRanges"></a>

```python
def reset_port_ranges() -> None
```

##### `reset_protocol` <a name="reset_protocol" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.resetProtocol"></a>

```python
def reset_protocol() -> None
```

##### `reset_subnet_ids` <a name="reset_subnet_ids" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.resetSubnetIds"></a>

```python
def reset_subnet_ids() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.property.portRanges">port_ranges</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesList">Ec2VerifiedAccessEndpointCidrOptionsPortRangesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.property.cidrInput">cidr_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.property.portRangesInput">port_ranges_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRanges">Ec2VerifiedAccessEndpointCidrOptionsPortRanges</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.property.protocolInput">protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.property.subnetIdsInput">subnet_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.property.cidr">cidr</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.property.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptions">Ec2VerifiedAccessEndpointCidrOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `port_ranges`<sup>Required</sup> <a name="port_ranges" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.property.portRanges"></a>

```python
port_ranges: Ec2VerifiedAccessEndpointCidrOptionsPortRangesList
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesList">Ec2VerifiedAccessEndpointCidrOptionsPortRangesList</a>

---

##### `cidr_input`<sup>Optional</sup> <a name="cidr_input" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.property.cidrInput"></a>

```python
cidr_input: str
```

- *Type:* str

---

##### `port_ranges_input`<sup>Optional</sup> <a name="port_ranges_input" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.property.portRangesInput"></a>

```python
port_ranges_input: IResolvable | typing.List[Ec2VerifiedAccessEndpointCidrOptionsPortRanges]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRanges">Ec2VerifiedAccessEndpointCidrOptionsPortRanges</a>]

---

##### `protocol_input`<sup>Optional</sup> <a name="protocol_input" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.property.protocolInput"></a>

```python
protocol_input: str
```

- *Type:* str

---

##### `subnet_ids_input`<sup>Optional</sup> <a name="subnet_ids_input" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.property.subnetIdsInput"></a>

```python
subnet_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `cidr`<sup>Required</sup> <a name="cidr" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.property.cidr"></a>

```python
cidr: str
```

- *Type:* str

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `subnet_ids`<sup>Required</sup> <a name="subnet_ids" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.property.subnetIds"></a>

```python
subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Ec2VerifiedAccessEndpointCidrOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptions">Ec2VerifiedAccessEndpointCidrOptions</a>

---


### Ec2VerifiedAccessEndpointCidrOptionsPortRangesList <a name="Ec2VerifiedAccessEndpointCidrOptionsPortRangesList" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesList.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_verified_access_endpoint

ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRanges">Ec2VerifiedAccessEndpointCidrOptionsPortRanges</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[Ec2VerifiedAccessEndpointCidrOptionsPortRanges]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRanges">Ec2VerifiedAccessEndpointCidrOptionsPortRanges</a>]

---


### Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference <a name="Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_verified_access_endpoint

ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.resetFromPort">reset_from_port</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.resetToPort">reset_to_port</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_from_port` <a name="reset_from_port" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.resetFromPort"></a>

```python
def reset_from_port() -> None
```

##### `reset_to_port` <a name="reset_to_port" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.resetToPort"></a>

```python
def reset_to_port() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.property.fromPortInput">from_port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.property.toPortInput">to_port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.property.fromPort">from_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.property.toPort">to_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRanges">Ec2VerifiedAccessEndpointCidrOptionsPortRanges</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `from_port_input`<sup>Optional</sup> <a name="from_port_input" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.property.fromPortInput"></a>

```python
from_port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `to_port_input`<sup>Optional</sup> <a name="to_port_input" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.property.toPortInput"></a>

```python
to_port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `from_port`<sup>Required</sup> <a name="from_port" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.property.fromPort"></a>

```python
from_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `to_port`<sup>Required</sup> <a name="to_port" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.property.toPort"></a>

```python
to_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Ec2VerifiedAccessEndpointCidrOptionsPortRanges
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRanges">Ec2VerifiedAccessEndpointCidrOptionsPortRanges</a>

---


### Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference <a name="Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_verified_access_endpoint

ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.putPortRanges">put_port_ranges</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.resetLoadBalancerArn">reset_load_balancer_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.resetPort">reset_port</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.resetPortRanges">reset_port_ranges</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.resetProtocol">reset_protocol</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.resetSubnetIds">reset_subnet_ids</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_port_ranges` <a name="put_port_ranges" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.putPortRanges"></a>

```python
def put_port_ranges(
  value: IResolvable | typing.List[Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRanges]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.putPortRanges.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRanges">Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRanges</a>]

---

##### `reset_load_balancer_arn` <a name="reset_load_balancer_arn" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.resetLoadBalancerArn"></a>

```python
def reset_load_balancer_arn() -> None
```

##### `reset_port` <a name="reset_port" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.resetPort"></a>

```python
def reset_port() -> None
```

##### `reset_port_ranges` <a name="reset_port_ranges" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.resetPortRanges"></a>

```python
def reset_port_ranges() -> None
```

##### `reset_protocol` <a name="reset_protocol" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.resetProtocol"></a>

```python
def reset_protocol() -> None
```

##### `reset_subnet_ids` <a name="reset_subnet_ids" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.resetSubnetIds"></a>

```python
def reset_subnet_ids() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.property.portRanges">port_ranges</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList">Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.property.loadBalancerArnInput">load_balancer_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.property.portRangesInput">port_ranges_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRanges">Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRanges</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.property.protocolInput">protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.property.subnetIdsInput">subnet_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.property.loadBalancerArn">load_balancer_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.property.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptions">Ec2VerifiedAccessEndpointLoadBalancerOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `port_ranges`<sup>Required</sup> <a name="port_ranges" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.property.portRanges"></a>

```python
port_ranges: Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList">Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList</a>

---

##### `load_balancer_arn_input`<sup>Optional</sup> <a name="load_balancer_arn_input" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.property.loadBalancerArnInput"></a>

```python
load_balancer_arn_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `port_ranges_input`<sup>Optional</sup> <a name="port_ranges_input" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.property.portRangesInput"></a>

```python
port_ranges_input: IResolvable | typing.List[Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRanges]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRanges">Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRanges</a>]

---

##### `protocol_input`<sup>Optional</sup> <a name="protocol_input" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.property.protocolInput"></a>

```python
protocol_input: str
```

- *Type:* str

---

##### `subnet_ids_input`<sup>Optional</sup> <a name="subnet_ids_input" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.property.subnetIdsInput"></a>

```python
subnet_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `load_balancer_arn`<sup>Required</sup> <a name="load_balancer_arn" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.property.loadBalancerArn"></a>

```python
load_balancer_arn: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `subnet_ids`<sup>Required</sup> <a name="subnet_ids" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.property.subnetIds"></a>

```python
subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Ec2VerifiedAccessEndpointLoadBalancerOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptions">Ec2VerifiedAccessEndpointLoadBalancerOptions</a>

---


### Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList <a name="Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_verified_access_endpoint

ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRanges">Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRanges</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRanges]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRanges">Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRanges</a>]

---


### Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference <a name="Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_verified_access_endpoint

ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.resetFromPort">reset_from_port</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.resetToPort">reset_to_port</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_from_port` <a name="reset_from_port" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.resetFromPort"></a>

```python
def reset_from_port() -> None
```

##### `reset_to_port` <a name="reset_to_port" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.resetToPort"></a>

```python
def reset_to_port() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.property.fromPortInput">from_port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.property.toPortInput">to_port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.property.fromPort">from_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.property.toPort">to_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRanges">Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRanges</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `from_port_input`<sup>Optional</sup> <a name="from_port_input" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.property.fromPortInput"></a>

```python
from_port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `to_port_input`<sup>Optional</sup> <a name="to_port_input" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.property.toPortInput"></a>

```python
to_port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `from_port`<sup>Required</sup> <a name="from_port" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.property.fromPort"></a>

```python
from_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `to_port`<sup>Required</sup> <a name="to_port" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.property.toPort"></a>

```python
to_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRanges
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRanges">Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRanges</a>

---


### Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference <a name="Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_verified_access_endpoint

ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.putPortRanges">put_port_ranges</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.resetNetworkInterfaceId">reset_network_interface_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.resetPort">reset_port</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.resetPortRanges">reset_port_ranges</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.resetProtocol">reset_protocol</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_port_ranges` <a name="put_port_ranges" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.putPortRanges"></a>

```python
def put_port_ranges(
  value: IResolvable | typing.List[Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRanges]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.putPortRanges.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRanges">Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRanges</a>]

---

##### `reset_network_interface_id` <a name="reset_network_interface_id" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.resetNetworkInterfaceId"></a>

```python
def reset_network_interface_id() -> None
```

##### `reset_port` <a name="reset_port" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.resetPort"></a>

```python
def reset_port() -> None
```

##### `reset_port_ranges` <a name="reset_port_ranges" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.resetPortRanges"></a>

```python
def reset_port_ranges() -> None
```

##### `reset_protocol` <a name="reset_protocol" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.resetProtocol"></a>

```python
def reset_protocol() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.property.portRanges">port_ranges</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList">Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.property.networkInterfaceIdInput">network_interface_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.property.portRangesInput">port_ranges_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRanges">Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRanges</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.property.protocolInput">protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.property.networkInterfaceId">network_interface_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptions">Ec2VerifiedAccessEndpointNetworkInterfaceOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `port_ranges`<sup>Required</sup> <a name="port_ranges" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.property.portRanges"></a>

```python
port_ranges: Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList">Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList</a>

---

##### `network_interface_id_input`<sup>Optional</sup> <a name="network_interface_id_input" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.property.networkInterfaceIdInput"></a>

```python
network_interface_id_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `port_ranges_input`<sup>Optional</sup> <a name="port_ranges_input" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.property.portRangesInput"></a>

```python
port_ranges_input: IResolvable | typing.List[Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRanges]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRanges">Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRanges</a>]

---

##### `protocol_input`<sup>Optional</sup> <a name="protocol_input" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.property.protocolInput"></a>

```python
protocol_input: str
```

- *Type:* str

---

##### `network_interface_id`<sup>Required</sup> <a name="network_interface_id" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.property.networkInterfaceId"></a>

```python
network_interface_id: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Ec2VerifiedAccessEndpointNetworkInterfaceOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptions">Ec2VerifiedAccessEndpointNetworkInterfaceOptions</a>

---


### Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList <a name="Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_verified_access_endpoint

ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRanges">Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRanges</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRanges]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRanges">Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRanges</a>]

---


### Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference <a name="Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_verified_access_endpoint

ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.resetFromPort">reset_from_port</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.resetToPort">reset_to_port</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_from_port` <a name="reset_from_port" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.resetFromPort"></a>

```python
def reset_from_port() -> None
```

##### `reset_to_port` <a name="reset_to_port" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.resetToPort"></a>

```python
def reset_to_port() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.property.fromPortInput">from_port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.property.toPortInput">to_port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.property.fromPort">from_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.property.toPort">to_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRanges">Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRanges</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `from_port_input`<sup>Optional</sup> <a name="from_port_input" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.property.fromPortInput"></a>

```python
from_port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `to_port_input`<sup>Optional</sup> <a name="to_port_input" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.property.toPortInput"></a>

```python
to_port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `from_port`<sup>Required</sup> <a name="from_port" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.property.fromPort"></a>

```python
from_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `to_port`<sup>Required</sup> <a name="to_port" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.property.toPort"></a>

```python
to_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRanges
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRanges">Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRanges</a>

---


### Ec2VerifiedAccessEndpointRdsOptionsOutputReference <a name="Ec2VerifiedAccessEndpointRdsOptionsOutputReference" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_verified_access_endpoint

ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.resetPort">reset_port</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.resetProtocol">reset_protocol</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.resetRdsDbClusterArn">reset_rds_db_cluster_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.resetRdsDbInstanceArn">reset_rds_db_instance_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.resetRdsDbProxyArn">reset_rds_db_proxy_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.resetRdsEndpoint">reset_rds_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.resetSubnetIds">reset_subnet_ids</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_port` <a name="reset_port" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.resetPort"></a>

```python
def reset_port() -> None
```

##### `reset_protocol` <a name="reset_protocol" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.resetProtocol"></a>

```python
def reset_protocol() -> None
```

##### `reset_rds_db_cluster_arn` <a name="reset_rds_db_cluster_arn" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.resetRdsDbClusterArn"></a>

```python
def reset_rds_db_cluster_arn() -> None
```

##### `reset_rds_db_instance_arn` <a name="reset_rds_db_instance_arn" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.resetRdsDbInstanceArn"></a>

```python
def reset_rds_db_instance_arn() -> None
```

##### `reset_rds_db_proxy_arn` <a name="reset_rds_db_proxy_arn" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.resetRdsDbProxyArn"></a>

```python
def reset_rds_db_proxy_arn() -> None
```

##### `reset_rds_endpoint` <a name="reset_rds_endpoint" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.resetRdsEndpoint"></a>

```python
def reset_rds_endpoint() -> None
```

##### `reset_subnet_ids` <a name="reset_subnet_ids" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.resetSubnetIds"></a>

```python
def reset_subnet_ids() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.property.protocolInput">protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.property.rdsDbClusterArnInput">rds_db_cluster_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.property.rdsDbInstanceArnInput">rds_db_instance_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.property.rdsDbProxyArnInput">rds_db_proxy_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.property.rdsEndpointInput">rds_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.property.subnetIdsInput">subnet_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.property.rdsDbClusterArn">rds_db_cluster_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.property.rdsDbInstanceArn">rds_db_instance_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.property.rdsDbProxyArn">rds_db_proxy_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.property.rdsEndpoint">rds_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.property.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptions">Ec2VerifiedAccessEndpointRdsOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `protocol_input`<sup>Optional</sup> <a name="protocol_input" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.property.protocolInput"></a>

```python
protocol_input: str
```

- *Type:* str

---

##### `rds_db_cluster_arn_input`<sup>Optional</sup> <a name="rds_db_cluster_arn_input" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.property.rdsDbClusterArnInput"></a>

```python
rds_db_cluster_arn_input: str
```

- *Type:* str

---

##### `rds_db_instance_arn_input`<sup>Optional</sup> <a name="rds_db_instance_arn_input" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.property.rdsDbInstanceArnInput"></a>

```python
rds_db_instance_arn_input: str
```

- *Type:* str

---

##### `rds_db_proxy_arn_input`<sup>Optional</sup> <a name="rds_db_proxy_arn_input" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.property.rdsDbProxyArnInput"></a>

```python
rds_db_proxy_arn_input: str
```

- *Type:* str

---

##### `rds_endpoint_input`<sup>Optional</sup> <a name="rds_endpoint_input" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.property.rdsEndpointInput"></a>

```python
rds_endpoint_input: str
```

- *Type:* str

---

##### `subnet_ids_input`<sup>Optional</sup> <a name="subnet_ids_input" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.property.subnetIdsInput"></a>

```python
subnet_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `rds_db_cluster_arn`<sup>Required</sup> <a name="rds_db_cluster_arn" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.property.rdsDbClusterArn"></a>

```python
rds_db_cluster_arn: str
```

- *Type:* str

---

##### `rds_db_instance_arn`<sup>Required</sup> <a name="rds_db_instance_arn" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.property.rdsDbInstanceArn"></a>

```python
rds_db_instance_arn: str
```

- *Type:* str

---

##### `rds_db_proxy_arn`<sup>Required</sup> <a name="rds_db_proxy_arn" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.property.rdsDbProxyArn"></a>

```python
rds_db_proxy_arn: str
```

- *Type:* str

---

##### `rds_endpoint`<sup>Required</sup> <a name="rds_endpoint" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.property.rdsEndpoint"></a>

```python
rds_endpoint: str
```

- *Type:* str

---

##### `subnet_ids`<sup>Required</sup> <a name="subnet_ids" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.property.subnetIds"></a>

```python
subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Ec2VerifiedAccessEndpointRdsOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptions">Ec2VerifiedAccessEndpointRdsOptions</a>

---


### Ec2VerifiedAccessEndpointSseSpecificationOutputReference <a name="Ec2VerifiedAccessEndpointSseSpecificationOutputReference" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_verified_access_endpoint

ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.resetCustomerManagedKeyEnabled">reset_customer_managed_key_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.resetKmsKeyArn">reset_kms_key_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_customer_managed_key_enabled` <a name="reset_customer_managed_key_enabled" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.resetCustomerManagedKeyEnabled"></a>

```python
def reset_customer_managed_key_enabled() -> None
```

##### `reset_kms_key_arn` <a name="reset_kms_key_arn" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.resetKmsKeyArn"></a>

```python
def reset_kms_key_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.property.customerManagedKeyEnabledInput">customer_managed_key_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.property.kmsKeyArnInput">kms_key_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.property.customerManagedKeyEnabled">customer_managed_key_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.property.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecification">Ec2VerifiedAccessEndpointSseSpecification</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `customer_managed_key_enabled_input`<sup>Optional</sup> <a name="customer_managed_key_enabled_input" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.property.customerManagedKeyEnabledInput"></a>

```python
customer_managed_key_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `kms_key_arn_input`<sup>Optional</sup> <a name="kms_key_arn_input" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.property.kmsKeyArnInput"></a>

```python
kms_key_arn_input: str
```

- *Type:* str

---

##### `customer_managed_key_enabled`<sup>Required</sup> <a name="customer_managed_key_enabled" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.property.customerManagedKeyEnabled"></a>

```python
customer_managed_key_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `kms_key_arn`<sup>Required</sup> <a name="kms_key_arn" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.property.kmsKeyArn"></a>

```python
kms_key_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Ec2VerifiedAccessEndpointSseSpecification
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecification">Ec2VerifiedAccessEndpointSseSpecification</a>

---


### Ec2VerifiedAccessEndpointTagsList <a name="Ec2VerifiedAccessEndpointTagsList" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_verified_access_endpoint

ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Ec2VerifiedAccessEndpointTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTags">Ec2VerifiedAccessEndpointTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[Ec2VerifiedAccessEndpointTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTags">Ec2VerifiedAccessEndpointTags</a>]

---


### Ec2VerifiedAccessEndpointTagsOutputReference <a name="Ec2VerifiedAccessEndpointTagsOutputReference" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_verified_access_endpoint

ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTags">Ec2VerifiedAccessEndpointTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Ec2VerifiedAccessEndpointTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTags">Ec2VerifiedAccessEndpointTags</a>

---



