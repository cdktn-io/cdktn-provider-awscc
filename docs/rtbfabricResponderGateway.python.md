# `rtbfabricResponderGateway` Submodule <a name="`rtbfabricResponderGateway` Submodule" id="@cdktn/provider-awscc.rtbfabricResponderGateway"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RtbfabricResponderGateway <a name="RtbfabricResponderGateway" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway awscc_rtbfabric_responder_gateway}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.Initializer"></a>

```python
from cdktn_provider_awscc import rtbfabric_responder_gateway

rtbfabricResponderGateway.RtbfabricResponderGateway(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  port: typing.Union[int, float],
  protocol: str,
  security_group_ids: typing.List[str],
  subnet_ids: typing.List[str],
  vpc_id: str,
  acm_certificate_arn: str = None,
  description: str = None,
  domain_name: str = None,
  gateway_type: str = None,
  listener_config: RtbfabricResponderGatewayListenerConfig = None,
  managed_endpoint_configuration: RtbfabricResponderGatewayManagedEndpointConfiguration = None,
  tags: IResolvable | typing.List[RtbfabricResponderGatewayTags] = None,
  trust_store_configuration: RtbfabricResponderGatewayTrustStoreConfiguration = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.Initializer.parameter.port">port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#port RtbfabricResponderGateway#port}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.Initializer.parameter.protocol">protocol</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#protocol RtbfabricResponderGateway#protocol}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.Initializer.parameter.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | The ID of one or more security groups in order to create a gateway. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.Initializer.parameter.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | The ID of one or more subnets in order to create a gateway. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.Initializer.parameter.vpcId">vpc_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#vpc_id RtbfabricResponderGateway#vpc_id}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.Initializer.parameter.acmCertificateArn">acm_certificate_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#acm_certificate_arn RtbfabricResponderGateway#acm_certificate_arn}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#description RtbfabricResponderGateway#description}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.Initializer.parameter.domainName">domain_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#domain_name RtbfabricResponderGateway#domain_name}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.Initializer.parameter.gatewayType">gateway_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#gateway_type RtbfabricResponderGateway#gateway_type}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.Initializer.parameter.listenerConfig">listener_config</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfig">RtbfabricResponderGatewayListenerConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#listener_config RtbfabricResponderGateway#listener_config}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.Initializer.parameter.managedEndpointConfiguration">managed_endpoint_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfiguration">RtbfabricResponderGatewayManagedEndpointConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#managed_endpoint_configuration RtbfabricResponderGateway#managed_endpoint_configuration}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTags">RtbfabricResponderGatewayTags</a>]</code> | Tags to assign to the Responder Gateway. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.Initializer.parameter.trustStoreConfiguration">trust_store_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfiguration">RtbfabricResponderGatewayTrustStoreConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#trust_store_configuration RtbfabricResponderGateway#trust_store_configuration}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.Initializer.parameter.port"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#port RtbfabricResponderGateway#port}.

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.Initializer.parameter.protocol"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#protocol RtbfabricResponderGateway#protocol}.

---

##### `security_group_ids`<sup>Required</sup> <a name="security_group_ids" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.Initializer.parameter.securityGroupIds"></a>

- *Type:* typing.List[str]

The ID of one or more security groups in order to create a gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#security_group_ids RtbfabricResponderGateway#security_group_ids}

---

##### `subnet_ids`<sup>Required</sup> <a name="subnet_ids" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.Initializer.parameter.subnetIds"></a>

- *Type:* typing.List[str]

The ID of one or more subnets in order to create a gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#subnet_ids RtbfabricResponderGateway#subnet_ids}

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.Initializer.parameter.vpcId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#vpc_id RtbfabricResponderGateway#vpc_id}.

---

##### `acm_certificate_arn`<sup>Optional</sup> <a name="acm_certificate_arn" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.Initializer.parameter.acmCertificateArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#acm_certificate_arn RtbfabricResponderGateway#acm_certificate_arn}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#description RtbfabricResponderGateway#description}.

---

##### `domain_name`<sup>Optional</sup> <a name="domain_name" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.Initializer.parameter.domainName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#domain_name RtbfabricResponderGateway#domain_name}.

---

##### `gateway_type`<sup>Optional</sup> <a name="gateway_type" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.Initializer.parameter.gatewayType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#gateway_type RtbfabricResponderGateway#gateway_type}.

---

##### `listener_config`<sup>Optional</sup> <a name="listener_config" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.Initializer.parameter.listenerConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfig">RtbfabricResponderGatewayListenerConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#listener_config RtbfabricResponderGateway#listener_config}.

---

##### `managed_endpoint_configuration`<sup>Optional</sup> <a name="managed_endpoint_configuration" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.Initializer.parameter.managedEndpointConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfiguration">RtbfabricResponderGatewayManagedEndpointConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#managed_endpoint_configuration RtbfabricResponderGateway#managed_endpoint_configuration}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTags">RtbfabricResponderGatewayTags</a>]

Tags to assign to the Responder Gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#tags RtbfabricResponderGateway#tags}

---

##### `trust_store_configuration`<sup>Optional</sup> <a name="trust_store_configuration" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.Initializer.parameter.trustStoreConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfiguration">RtbfabricResponderGatewayTrustStoreConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#trust_store_configuration RtbfabricResponderGateway#trust_store_configuration}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.putListenerConfig">put_listener_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.putManagedEndpointConfiguration">put_managed_endpoint_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.putTrustStoreConfiguration">put_trust_store_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.resetAcmCertificateArn">reset_acm_certificate_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.resetDomainName">reset_domain_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.resetGatewayType">reset_gateway_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.resetListenerConfig">reset_listener_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.resetManagedEndpointConfiguration">reset_managed_endpoint_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.resetTrustStoreConfiguration">reset_trust_store_configuration</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_listener_config` <a name="put_listener_config" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.putListenerConfig"></a>

```python
def put_listener_config(
  protocols: typing.List[str] = None
) -> None
```

###### `protocols`<sup>Optional</sup> <a name="protocols" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.putListenerConfig.parameter.protocols"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#protocols RtbfabricResponderGateway#protocols}.

---

##### `put_managed_endpoint_configuration` <a name="put_managed_endpoint_configuration" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.putManagedEndpointConfiguration"></a>

```python
def put_managed_endpoint_configuration(
  auto_scaling_groups_configuration: RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfiguration = None,
  eks_endpoints_configuration: RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration = None
) -> None
```

###### `auto_scaling_groups_configuration`<sup>Optional</sup> <a name="auto_scaling_groups_configuration" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.putManagedEndpointConfiguration.parameter.autoScalingGroupsConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfiguration">RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#auto_scaling_groups_configuration RtbfabricResponderGateway#auto_scaling_groups_configuration}.

---

###### `eks_endpoints_configuration`<sup>Optional</sup> <a name="eks_endpoints_configuration" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.putManagedEndpointConfiguration.parameter.eksEndpointsConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration">RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#eks_endpoints_configuration RtbfabricResponderGateway#eks_endpoints_configuration}.

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[RtbfabricResponderGatewayTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTags">RtbfabricResponderGatewayTags</a>]

---

##### `put_trust_store_configuration` <a name="put_trust_store_configuration" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.putTrustStoreConfiguration"></a>

```python
def put_trust_store_configuration(
  certificate_authority_certificates: typing.List[str] = None
) -> None
```

###### `certificate_authority_certificates`<sup>Optional</sup> <a name="certificate_authority_certificates" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.putTrustStoreConfiguration.parameter.certificateAuthorityCertificates"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#certificate_authority_certificates RtbfabricResponderGateway#certificate_authority_certificates}.

---

##### `reset_acm_certificate_arn` <a name="reset_acm_certificate_arn" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.resetAcmCertificateArn"></a>

```python
def reset_acm_certificate_arn() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_domain_name` <a name="reset_domain_name" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.resetDomainName"></a>

```python
def reset_domain_name() -> None
```

##### `reset_gateway_type` <a name="reset_gateway_type" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.resetGatewayType"></a>

```python
def reset_gateway_type() -> None
```

##### `reset_listener_config` <a name="reset_listener_config" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.resetListenerConfig"></a>

```python
def reset_listener_config() -> None
```

##### `reset_managed_endpoint_configuration` <a name="reset_managed_endpoint_configuration" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.resetManagedEndpointConfiguration"></a>

```python
def reset_managed_endpoint_configuration() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_trust_store_configuration` <a name="reset_trust_store_configuration" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.resetTrustStoreConfiguration"></a>

```python
def reset_trust_store_configuration() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a RtbfabricResponderGateway resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.isConstruct"></a>

```python
from cdktn_provider_awscc import rtbfabric_responder_gateway

rtbfabricResponderGateway.RtbfabricResponderGateway.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.isTerraformElement"></a>

```python
from cdktn_provider_awscc import rtbfabric_responder_gateway

rtbfabricResponderGateway.RtbfabricResponderGateway.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.isTerraformResource"></a>

```python
from cdktn_provider_awscc import rtbfabric_responder_gateway

rtbfabricResponderGateway.RtbfabricResponderGateway.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import rtbfabric_responder_gateway

rtbfabricResponderGateway.RtbfabricResponderGateway.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a RtbfabricResponderGateway resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the RtbfabricResponderGateway to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing RtbfabricResponderGateway that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the RtbfabricResponderGateway to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.certificateAssociationStatus">certificate_association_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.createdTimestamp">created_timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.externalInboundEndpoint">external_inbound_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.gatewayId">gateway_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.listenerConfig">listener_config</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference">RtbfabricResponderGatewayListenerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.managedEndpointConfiguration">managed_endpoint_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference">RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.responderGatewayStatus">responder_gateway_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsList">RtbfabricResponderGatewayTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.trustStoreConfiguration">trust_store_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference">RtbfabricResponderGatewayTrustStoreConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.updatedTimestamp">updated_timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.acmCertificateArnInput">acm_certificate_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.domainNameInput">domain_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.gatewayTypeInput">gateway_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.listenerConfigInput">listener_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfig">RtbfabricResponderGatewayListenerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.managedEndpointConfigurationInput">managed_endpoint_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfiguration">RtbfabricResponderGatewayManagedEndpointConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.protocolInput">protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.securityGroupIdsInput">security_group_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.subnetIdsInput">subnet_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTags">RtbfabricResponderGatewayTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.trustStoreConfigurationInput">trust_store_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfiguration">RtbfabricResponderGatewayTrustStoreConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.vpcIdInput">vpc_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.acmCertificateArn">acm_certificate_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.domainName">domain_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.gatewayType">gateway_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.vpcId">vpc_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `certificate_association_status`<sup>Required</sup> <a name="certificate_association_status" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.certificateAssociationStatus"></a>

```python
certificate_association_status: str
```

- *Type:* str

---

##### `created_timestamp`<sup>Required</sup> <a name="created_timestamp" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.createdTimestamp"></a>

```python
created_timestamp: str
```

- *Type:* str

---

##### `external_inbound_endpoint`<sup>Required</sup> <a name="external_inbound_endpoint" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.externalInboundEndpoint"></a>

```python
external_inbound_endpoint: str
```

- *Type:* str

---

##### `gateway_id`<sup>Required</sup> <a name="gateway_id" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.gatewayId"></a>

```python
gateway_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `listener_config`<sup>Required</sup> <a name="listener_config" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.listenerConfig"></a>

```python
listener_config: RtbfabricResponderGatewayListenerConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference">RtbfabricResponderGatewayListenerConfigOutputReference</a>

---

##### `managed_endpoint_configuration`<sup>Required</sup> <a name="managed_endpoint_configuration" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.managedEndpointConfiguration"></a>

```python
managed_endpoint_configuration: RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference">RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference</a>

---

##### `responder_gateway_status`<sup>Required</sup> <a name="responder_gateway_status" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.responderGatewayStatus"></a>

```python
responder_gateway_status: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.tags"></a>

```python
tags: RtbfabricResponderGatewayTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsList">RtbfabricResponderGatewayTagsList</a>

---

##### `trust_store_configuration`<sup>Required</sup> <a name="trust_store_configuration" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.trustStoreConfiguration"></a>

```python
trust_store_configuration: RtbfabricResponderGatewayTrustStoreConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference">RtbfabricResponderGatewayTrustStoreConfigurationOutputReference</a>

---

##### `updated_timestamp`<sup>Required</sup> <a name="updated_timestamp" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.updatedTimestamp"></a>

```python
updated_timestamp: str
```

- *Type:* str

---

##### `acm_certificate_arn_input`<sup>Optional</sup> <a name="acm_certificate_arn_input" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.acmCertificateArnInput"></a>

```python
acm_certificate_arn_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `domain_name_input`<sup>Optional</sup> <a name="domain_name_input" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.domainNameInput"></a>

```python
domain_name_input: str
```

- *Type:* str

---

##### `gateway_type_input`<sup>Optional</sup> <a name="gateway_type_input" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.gatewayTypeInput"></a>

```python
gateway_type_input: str
```

- *Type:* str

---

##### `listener_config_input`<sup>Optional</sup> <a name="listener_config_input" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.listenerConfigInput"></a>

```python
listener_config_input: IResolvable | RtbfabricResponderGatewayListenerConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfig">RtbfabricResponderGatewayListenerConfig</a>

---

##### `managed_endpoint_configuration_input`<sup>Optional</sup> <a name="managed_endpoint_configuration_input" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.managedEndpointConfigurationInput"></a>

```python
managed_endpoint_configuration_input: IResolvable | RtbfabricResponderGatewayManagedEndpointConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfiguration">RtbfabricResponderGatewayManagedEndpointConfiguration</a>

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `protocol_input`<sup>Optional</sup> <a name="protocol_input" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.protocolInput"></a>

```python
protocol_input: str
```

- *Type:* str

---

##### `security_group_ids_input`<sup>Optional</sup> <a name="security_group_ids_input" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.securityGroupIdsInput"></a>

```python
security_group_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_ids_input`<sup>Optional</sup> <a name="subnet_ids_input" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.subnetIdsInput"></a>

```python
subnet_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[RtbfabricResponderGatewayTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTags">RtbfabricResponderGatewayTags</a>]

---

##### `trust_store_configuration_input`<sup>Optional</sup> <a name="trust_store_configuration_input" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.trustStoreConfigurationInput"></a>

```python
trust_store_configuration_input: IResolvable | RtbfabricResponderGatewayTrustStoreConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfiguration">RtbfabricResponderGatewayTrustStoreConfiguration</a>

---

##### `vpc_id_input`<sup>Optional</sup> <a name="vpc_id_input" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.vpcIdInput"></a>

```python
vpc_id_input: str
```

- *Type:* str

---

##### `acm_certificate_arn`<sup>Required</sup> <a name="acm_certificate_arn" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.acmCertificateArn"></a>

```python
acm_certificate_arn: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.domainName"></a>

```python
domain_name: str
```

- *Type:* str

---

##### `gateway_type`<sup>Required</sup> <a name="gateway_type" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.gatewayType"></a>

```python
gateway_type: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `security_group_ids`<sup>Required</sup> <a name="security_group_ids" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_ids`<sup>Required</sup> <a name="subnet_ids" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.subnetIds"></a>

```python
subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### RtbfabricResponderGatewayConfig <a name="RtbfabricResponderGatewayConfig" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.Initializer"></a>

```python
from cdktn_provider_awscc import rtbfabric_responder_gateway

rtbfabricResponderGateway.RtbfabricResponderGatewayConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  port: typing.Union[int, float],
  protocol: str,
  security_group_ids: typing.List[str],
  subnet_ids: typing.List[str],
  vpc_id: str,
  acm_certificate_arn: str = None,
  description: str = None,
  domain_name: str = None,
  gateway_type: str = None,
  listener_config: RtbfabricResponderGatewayListenerConfig = None,
  managed_endpoint_configuration: RtbfabricResponderGatewayManagedEndpointConfiguration = None,
  tags: IResolvable | typing.List[RtbfabricResponderGatewayTags] = None,
  trust_store_configuration: RtbfabricResponderGatewayTrustStoreConfiguration = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.property.port">port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#port RtbfabricResponderGateway#port}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.property.protocol">protocol</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#protocol RtbfabricResponderGateway#protocol}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | The ID of one or more security groups in order to create a gateway. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.property.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | The ID of one or more subnets in order to create a gateway. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.property.vpcId">vpc_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#vpc_id RtbfabricResponderGateway#vpc_id}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.property.acmCertificateArn">acm_certificate_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#acm_certificate_arn RtbfabricResponderGateway#acm_certificate_arn}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#description RtbfabricResponderGateway#description}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.property.domainName">domain_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#domain_name RtbfabricResponderGateway#domain_name}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.property.gatewayType">gateway_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#gateway_type RtbfabricResponderGateway#gateway_type}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.property.listenerConfig">listener_config</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfig">RtbfabricResponderGatewayListenerConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#listener_config RtbfabricResponderGateway#listener_config}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.property.managedEndpointConfiguration">managed_endpoint_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfiguration">RtbfabricResponderGatewayManagedEndpointConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#managed_endpoint_configuration RtbfabricResponderGateway#managed_endpoint_configuration}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTags">RtbfabricResponderGatewayTags</a>]</code> | Tags to assign to the Responder Gateway. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.property.trustStoreConfiguration">trust_store_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfiguration">RtbfabricResponderGatewayTrustStoreConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#trust_store_configuration RtbfabricResponderGateway#trust_store_configuration}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#port RtbfabricResponderGateway#port}.

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#protocol RtbfabricResponderGateway#protocol}.

---

##### `security_group_ids`<sup>Required</sup> <a name="security_group_ids" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

The ID of one or more security groups in order to create a gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#security_group_ids RtbfabricResponderGateway#security_group_ids}

---

##### `subnet_ids`<sup>Required</sup> <a name="subnet_ids" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.property.subnetIds"></a>

```python
subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

The ID of one or more subnets in order to create a gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#subnet_ids RtbfabricResponderGateway#subnet_ids}

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#vpc_id RtbfabricResponderGateway#vpc_id}.

---

##### `acm_certificate_arn`<sup>Optional</sup> <a name="acm_certificate_arn" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.property.acmCertificateArn"></a>

```python
acm_certificate_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#acm_certificate_arn RtbfabricResponderGateway#acm_certificate_arn}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#description RtbfabricResponderGateway#description}.

---

##### `domain_name`<sup>Optional</sup> <a name="domain_name" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.property.domainName"></a>

```python
domain_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#domain_name RtbfabricResponderGateway#domain_name}.

---

##### `gateway_type`<sup>Optional</sup> <a name="gateway_type" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.property.gatewayType"></a>

```python
gateway_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#gateway_type RtbfabricResponderGateway#gateway_type}.

---

##### `listener_config`<sup>Optional</sup> <a name="listener_config" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.property.listenerConfig"></a>

```python
listener_config: RtbfabricResponderGatewayListenerConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfig">RtbfabricResponderGatewayListenerConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#listener_config RtbfabricResponderGateway#listener_config}.

---

##### `managed_endpoint_configuration`<sup>Optional</sup> <a name="managed_endpoint_configuration" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.property.managedEndpointConfiguration"></a>

```python
managed_endpoint_configuration: RtbfabricResponderGatewayManagedEndpointConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfiguration">RtbfabricResponderGatewayManagedEndpointConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#managed_endpoint_configuration RtbfabricResponderGateway#managed_endpoint_configuration}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[RtbfabricResponderGatewayTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTags">RtbfabricResponderGatewayTags</a>]

Tags to assign to the Responder Gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#tags RtbfabricResponderGateway#tags}

---

##### `trust_store_configuration`<sup>Optional</sup> <a name="trust_store_configuration" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.property.trustStoreConfiguration"></a>

```python
trust_store_configuration: RtbfabricResponderGatewayTrustStoreConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfiguration">RtbfabricResponderGatewayTrustStoreConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#trust_store_configuration RtbfabricResponderGateway#trust_store_configuration}.

---

### RtbfabricResponderGatewayListenerConfig <a name="RtbfabricResponderGatewayListenerConfig" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfig.Initializer"></a>

```python
from cdktn_provider_awscc import rtbfabric_responder_gateway

rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfig(
  protocols: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfig.property.protocols">protocols</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#protocols RtbfabricResponderGateway#protocols}. |

---

##### `protocols`<sup>Optional</sup> <a name="protocols" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfig.property.protocols"></a>

```python
protocols: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#protocols RtbfabricResponderGateway#protocols}.

---

### RtbfabricResponderGatewayManagedEndpointConfiguration <a name="RtbfabricResponderGatewayManagedEndpointConfiguration" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import rtbfabric_responder_gateway

rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfiguration(
  auto_scaling_groups_configuration: RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfiguration = None,
  eks_endpoints_configuration: RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfiguration.property.autoScalingGroupsConfiguration">auto_scaling_groups_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfiguration">RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#auto_scaling_groups_configuration RtbfabricResponderGateway#auto_scaling_groups_configuration}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfiguration.property.eksEndpointsConfiguration">eks_endpoints_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration">RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#eks_endpoints_configuration RtbfabricResponderGateway#eks_endpoints_configuration}. |

---

##### `auto_scaling_groups_configuration`<sup>Optional</sup> <a name="auto_scaling_groups_configuration" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfiguration.property.autoScalingGroupsConfiguration"></a>

```python
auto_scaling_groups_configuration: RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfiguration">RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#auto_scaling_groups_configuration RtbfabricResponderGateway#auto_scaling_groups_configuration}.

---

##### `eks_endpoints_configuration`<sup>Optional</sup> <a name="eks_endpoints_configuration" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfiguration.property.eksEndpointsConfiguration"></a>

```python
eks_endpoints_configuration: RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration">RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#eks_endpoints_configuration RtbfabricResponderGateway#eks_endpoints_configuration}.

---

### RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfiguration <a name="RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfiguration" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import rtbfabric_responder_gateway

rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfiguration(
  auto_scaling_group_name_list: typing.List[str] = None,
  health_check_config: RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig = None,
  role_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfiguration.property.autoScalingGroupNameList">auto_scaling_group_name_list</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#auto_scaling_group_name_list RtbfabricResponderGateway#auto_scaling_group_name_list}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfiguration.property.healthCheckConfig">health_check_config</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig">RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#health_check_config RtbfabricResponderGateway#health_check_config}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfiguration.property.roleArn">role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#role_arn RtbfabricResponderGateway#role_arn}. |

---

##### `auto_scaling_group_name_list`<sup>Optional</sup> <a name="auto_scaling_group_name_list" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfiguration.property.autoScalingGroupNameList"></a>

```python
auto_scaling_group_name_list: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#auto_scaling_group_name_list RtbfabricResponderGateway#auto_scaling_group_name_list}.

---

##### `health_check_config`<sup>Optional</sup> <a name="health_check_config" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfiguration.property.healthCheckConfig"></a>

```python
health_check_config: RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig">RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#health_check_config RtbfabricResponderGateway#health_check_config}.

---

##### `role_arn`<sup>Optional</sup> <a name="role_arn" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfiguration.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#role_arn RtbfabricResponderGateway#role_arn}.

---

### RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig <a name="RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig.Initializer"></a>

```python
from cdktn_provider_awscc import rtbfabric_responder_gateway

rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig(
  healthy_threshold_count: typing.Union[int, float] = None,
  interval_seconds: typing.Union[int, float] = None,
  path: str = None,
  port: typing.Union[int, float] = None,
  protocol: str = None,
  status_code_matcher: str = None,
  timeout_ms: typing.Union[int, float] = None,
  unhealthy_threshold_count: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig.property.healthyThresholdCount">healthy_threshold_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#healthy_threshold_count RtbfabricResponderGateway#healthy_threshold_count}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig.property.intervalSeconds">interval_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#interval_seconds RtbfabricResponderGateway#interval_seconds}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig.property.path">path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#path RtbfabricResponderGateway#path}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig.property.port">port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#port RtbfabricResponderGateway#port}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig.property.protocol">protocol</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#protocol RtbfabricResponderGateway#protocol}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig.property.statusCodeMatcher">status_code_matcher</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#status_code_matcher RtbfabricResponderGateway#status_code_matcher}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig.property.timeoutMs">timeout_ms</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#timeout_ms RtbfabricResponderGateway#timeout_ms}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig.property.unhealthyThresholdCount">unhealthy_threshold_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#unhealthy_threshold_count RtbfabricResponderGateway#unhealthy_threshold_count}. |

---

##### `healthy_threshold_count`<sup>Optional</sup> <a name="healthy_threshold_count" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig.property.healthyThresholdCount"></a>

```python
healthy_threshold_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#healthy_threshold_count RtbfabricResponderGateway#healthy_threshold_count}.

---

##### `interval_seconds`<sup>Optional</sup> <a name="interval_seconds" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig.property.intervalSeconds"></a>

```python
interval_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#interval_seconds RtbfabricResponderGateway#interval_seconds}.

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig.property.path"></a>

```python
path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#path RtbfabricResponderGateway#path}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#port RtbfabricResponderGateway#port}.

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#protocol RtbfabricResponderGateway#protocol}.

---

##### `status_code_matcher`<sup>Optional</sup> <a name="status_code_matcher" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig.property.statusCodeMatcher"></a>

```python
status_code_matcher: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#status_code_matcher RtbfabricResponderGateway#status_code_matcher}.

---

##### `timeout_ms`<sup>Optional</sup> <a name="timeout_ms" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig.property.timeoutMs"></a>

```python
timeout_ms: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#timeout_ms RtbfabricResponderGateway#timeout_ms}.

---

##### `unhealthy_threshold_count`<sup>Optional</sup> <a name="unhealthy_threshold_count" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig.property.unhealthyThresholdCount"></a>

```python
unhealthy_threshold_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#unhealthy_threshold_count RtbfabricResponderGateway#unhealthy_threshold_count}.

---

### RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration <a name="RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import rtbfabric_responder_gateway

rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration(
  cluster_api_server_ca_certificate_chain: str = None,
  cluster_api_server_endpoint_uri: str = None,
  cluster_name: str = None,
  endpoints_resource_name: str = None,
  endpoints_resource_namespace: str = None,
  role_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration.property.clusterApiServerCaCertificateChain">cluster_api_server_ca_certificate_chain</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#cluster_api_server_ca_certificate_chain RtbfabricResponderGateway#cluster_api_server_ca_certificate_chain}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration.property.clusterApiServerEndpointUri">cluster_api_server_endpoint_uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#cluster_api_server_endpoint_uri RtbfabricResponderGateway#cluster_api_server_endpoint_uri}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration.property.clusterName">cluster_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#cluster_name RtbfabricResponderGateway#cluster_name}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration.property.endpointsResourceName">endpoints_resource_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#endpoints_resource_name RtbfabricResponderGateway#endpoints_resource_name}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration.property.endpointsResourceNamespace">endpoints_resource_namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#endpoints_resource_namespace RtbfabricResponderGateway#endpoints_resource_namespace}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration.property.roleArn">role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#role_arn RtbfabricResponderGateway#role_arn}. |

---

##### `cluster_api_server_ca_certificate_chain`<sup>Optional</sup> <a name="cluster_api_server_ca_certificate_chain" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration.property.clusterApiServerCaCertificateChain"></a>

```python
cluster_api_server_ca_certificate_chain: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#cluster_api_server_ca_certificate_chain RtbfabricResponderGateway#cluster_api_server_ca_certificate_chain}.

---

##### `cluster_api_server_endpoint_uri`<sup>Optional</sup> <a name="cluster_api_server_endpoint_uri" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration.property.clusterApiServerEndpointUri"></a>

```python
cluster_api_server_endpoint_uri: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#cluster_api_server_endpoint_uri RtbfabricResponderGateway#cluster_api_server_endpoint_uri}.

---

##### `cluster_name`<sup>Optional</sup> <a name="cluster_name" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration.property.clusterName"></a>

```python
cluster_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#cluster_name RtbfabricResponderGateway#cluster_name}.

---

##### `endpoints_resource_name`<sup>Optional</sup> <a name="endpoints_resource_name" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration.property.endpointsResourceName"></a>

```python
endpoints_resource_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#endpoints_resource_name RtbfabricResponderGateway#endpoints_resource_name}.

---

##### `endpoints_resource_namespace`<sup>Optional</sup> <a name="endpoints_resource_namespace" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration.property.endpointsResourceNamespace"></a>

```python
endpoints_resource_namespace: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#endpoints_resource_namespace RtbfabricResponderGateway#endpoints_resource_namespace}.

---

##### `role_arn`<sup>Optional</sup> <a name="role_arn" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#role_arn RtbfabricResponderGateway#role_arn}.

---

### RtbfabricResponderGatewayTags <a name="RtbfabricResponderGatewayTags" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTags.Initializer"></a>

```python
from cdktn_provider_awscc import rtbfabric_responder_gateway

rtbfabricResponderGateway.RtbfabricResponderGatewayTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTags.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTags.property.value">value</a></code> | <code>str</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#key RtbfabricResponderGateway#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#value RtbfabricResponderGateway#value}

---

### RtbfabricResponderGatewayTrustStoreConfiguration <a name="RtbfabricResponderGatewayTrustStoreConfiguration" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import rtbfabric_responder_gateway

rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfiguration(
  certificate_authority_certificates: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfiguration.property.certificateAuthorityCertificates">certificate_authority_certificates</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#certificate_authority_certificates RtbfabricResponderGateway#certificate_authority_certificates}. |

---

##### `certificate_authority_certificates`<sup>Optional</sup> <a name="certificate_authority_certificates" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfiguration.property.certificateAuthorityCertificates"></a>

```python
certificate_authority_certificates: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#certificate_authority_certificates RtbfabricResponderGateway#certificate_authority_certificates}.

---

## Classes <a name="Classes" id="Classes"></a>

### RtbfabricResponderGatewayListenerConfigOutputReference <a name="RtbfabricResponderGatewayListenerConfigOutputReference" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import rtbfabric_responder_gateway

rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.resetProtocols">reset_protocols</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_protocols` <a name="reset_protocols" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.resetProtocols"></a>

```python
def reset_protocols() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.property.protocolsInput">protocols_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.property.protocols">protocols</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfig">RtbfabricResponderGatewayListenerConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `protocols_input`<sup>Optional</sup> <a name="protocols_input" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.property.protocolsInput"></a>

```python
protocols_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `protocols`<sup>Required</sup> <a name="protocols" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.property.protocols"></a>

```python
protocols: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | RtbfabricResponderGatewayListenerConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfig">RtbfabricResponderGatewayListenerConfig</a>

---


### RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference <a name="RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import rtbfabric_responder_gateway

rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.resetHealthyThresholdCount">reset_healthy_threshold_count</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.resetIntervalSeconds">reset_interval_seconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.resetPath">reset_path</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.resetPort">reset_port</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.resetProtocol">reset_protocol</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.resetStatusCodeMatcher">reset_status_code_matcher</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.resetTimeoutMs">reset_timeout_ms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.resetUnhealthyThresholdCount">reset_unhealthy_threshold_count</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_healthy_threshold_count` <a name="reset_healthy_threshold_count" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.resetHealthyThresholdCount"></a>

```python
def reset_healthy_threshold_count() -> None
```

##### `reset_interval_seconds` <a name="reset_interval_seconds" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.resetIntervalSeconds"></a>

```python
def reset_interval_seconds() -> None
```

##### `reset_path` <a name="reset_path" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.resetPath"></a>

```python
def reset_path() -> None
```

##### `reset_port` <a name="reset_port" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.resetPort"></a>

```python
def reset_port() -> None
```

##### `reset_protocol` <a name="reset_protocol" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.resetProtocol"></a>

```python
def reset_protocol() -> None
```

##### `reset_status_code_matcher` <a name="reset_status_code_matcher" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.resetStatusCodeMatcher"></a>

```python
def reset_status_code_matcher() -> None
```

##### `reset_timeout_ms` <a name="reset_timeout_ms" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.resetTimeoutMs"></a>

```python
def reset_timeout_ms() -> None
```

##### `reset_unhealthy_threshold_count` <a name="reset_unhealthy_threshold_count" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.resetUnhealthyThresholdCount"></a>

```python
def reset_unhealthy_threshold_count() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.healthyThresholdCountInput">healthy_threshold_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.intervalSecondsInput">interval_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.protocolInput">protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.statusCodeMatcherInput">status_code_matcher_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.timeoutMsInput">timeout_ms_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.unhealthyThresholdCountInput">unhealthy_threshold_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.healthyThresholdCount">healthy_threshold_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.intervalSeconds">interval_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.statusCodeMatcher">status_code_matcher</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.timeoutMs">timeout_ms</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.unhealthyThresholdCount">unhealthy_threshold_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig">RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `healthy_threshold_count_input`<sup>Optional</sup> <a name="healthy_threshold_count_input" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.healthyThresholdCountInput"></a>

```python
healthy_threshold_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `interval_seconds_input`<sup>Optional</sup> <a name="interval_seconds_input" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.intervalSecondsInput"></a>

```python
interval_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `protocol_input`<sup>Optional</sup> <a name="protocol_input" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.protocolInput"></a>

```python
protocol_input: str
```

- *Type:* str

---

##### `status_code_matcher_input`<sup>Optional</sup> <a name="status_code_matcher_input" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.statusCodeMatcherInput"></a>

```python
status_code_matcher_input: str
```

- *Type:* str

---

##### `timeout_ms_input`<sup>Optional</sup> <a name="timeout_ms_input" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.timeoutMsInput"></a>

```python
timeout_ms_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `unhealthy_threshold_count_input`<sup>Optional</sup> <a name="unhealthy_threshold_count_input" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.unhealthyThresholdCountInput"></a>

```python
unhealthy_threshold_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `healthy_threshold_count`<sup>Required</sup> <a name="healthy_threshold_count" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.healthyThresholdCount"></a>

```python
healthy_threshold_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `interval_seconds`<sup>Required</sup> <a name="interval_seconds" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.intervalSeconds"></a>

```python
interval_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `status_code_matcher`<sup>Required</sup> <a name="status_code_matcher" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.statusCodeMatcher"></a>

```python
status_code_matcher: str
```

- *Type:* str

---

##### `timeout_ms`<sup>Required</sup> <a name="timeout_ms" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.timeoutMs"></a>

```python
timeout_ms: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `unhealthy_threshold_count`<sup>Required</sup> <a name="unhealthy_threshold_count" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.unhealthyThresholdCount"></a>

```python
unhealthy_threshold_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig">RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig</a>

---


### RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference <a name="RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import rtbfabric_responder_gateway

rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.putHealthCheckConfig">put_health_check_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.resetAutoScalingGroupNameList">reset_auto_scaling_group_name_list</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.resetHealthCheckConfig">reset_health_check_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.resetRoleArn">reset_role_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_health_check_config` <a name="put_health_check_config" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.putHealthCheckConfig"></a>

```python
def put_health_check_config(
  healthy_threshold_count: typing.Union[int, float] = None,
  interval_seconds: typing.Union[int, float] = None,
  path: str = None,
  port: typing.Union[int, float] = None,
  protocol: str = None,
  status_code_matcher: str = None,
  timeout_ms: typing.Union[int, float] = None,
  unhealthy_threshold_count: typing.Union[int, float] = None
) -> None
```

###### `healthy_threshold_count`<sup>Optional</sup> <a name="healthy_threshold_count" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.putHealthCheckConfig.parameter.healthyThresholdCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#healthy_threshold_count RtbfabricResponderGateway#healthy_threshold_count}.

---

###### `interval_seconds`<sup>Optional</sup> <a name="interval_seconds" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.putHealthCheckConfig.parameter.intervalSeconds"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#interval_seconds RtbfabricResponderGateway#interval_seconds}.

---

###### `path`<sup>Optional</sup> <a name="path" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.putHealthCheckConfig.parameter.path"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#path RtbfabricResponderGateway#path}.

---

###### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.putHealthCheckConfig.parameter.port"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#port RtbfabricResponderGateway#port}.

---

###### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.putHealthCheckConfig.parameter.protocol"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#protocol RtbfabricResponderGateway#protocol}.

---

###### `status_code_matcher`<sup>Optional</sup> <a name="status_code_matcher" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.putHealthCheckConfig.parameter.statusCodeMatcher"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#status_code_matcher RtbfabricResponderGateway#status_code_matcher}.

---

###### `timeout_ms`<sup>Optional</sup> <a name="timeout_ms" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.putHealthCheckConfig.parameter.timeoutMs"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#timeout_ms RtbfabricResponderGateway#timeout_ms}.

---

###### `unhealthy_threshold_count`<sup>Optional</sup> <a name="unhealthy_threshold_count" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.putHealthCheckConfig.parameter.unhealthyThresholdCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#unhealthy_threshold_count RtbfabricResponderGateway#unhealthy_threshold_count}.

---

##### `reset_auto_scaling_group_name_list` <a name="reset_auto_scaling_group_name_list" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.resetAutoScalingGroupNameList"></a>

```python
def reset_auto_scaling_group_name_list() -> None
```

##### `reset_health_check_config` <a name="reset_health_check_config" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.resetHealthCheckConfig"></a>

```python
def reset_health_check_config() -> None
```

##### `reset_role_arn` <a name="reset_role_arn" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.resetRoleArn"></a>

```python
def reset_role_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.property.healthCheckConfig">health_check_config</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference">RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.property.autoScalingGroupNameListInput">auto_scaling_group_name_list_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.property.healthCheckConfigInput">health_check_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig">RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.property.autoScalingGroupNameList">auto_scaling_group_name_list</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfiguration">RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `health_check_config`<sup>Required</sup> <a name="health_check_config" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.property.healthCheckConfig"></a>

```python
health_check_config: RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference">RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference</a>

---

##### `auto_scaling_group_name_list_input`<sup>Optional</sup> <a name="auto_scaling_group_name_list_input" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.property.autoScalingGroupNameListInput"></a>

```python
auto_scaling_group_name_list_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `health_check_config_input`<sup>Optional</sup> <a name="health_check_config_input" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.property.healthCheckConfigInput"></a>

```python
health_check_config_input: IResolvable | RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig">RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig</a>

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `auto_scaling_group_name_list`<sup>Required</sup> <a name="auto_scaling_group_name_list" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.property.autoScalingGroupNameList"></a>

```python
auto_scaling_group_name_list: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfiguration">RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfiguration</a>

---


### RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference <a name="RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import rtbfabric_responder_gateway

rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.resetClusterApiServerCaCertificateChain">reset_cluster_api_server_ca_certificate_chain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.resetClusterApiServerEndpointUri">reset_cluster_api_server_endpoint_uri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.resetClusterName">reset_cluster_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.resetEndpointsResourceName">reset_endpoints_resource_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.resetEndpointsResourceNamespace">reset_endpoints_resource_namespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.resetRoleArn">reset_role_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_cluster_api_server_ca_certificate_chain` <a name="reset_cluster_api_server_ca_certificate_chain" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.resetClusterApiServerCaCertificateChain"></a>

```python
def reset_cluster_api_server_ca_certificate_chain() -> None
```

##### `reset_cluster_api_server_endpoint_uri` <a name="reset_cluster_api_server_endpoint_uri" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.resetClusterApiServerEndpointUri"></a>

```python
def reset_cluster_api_server_endpoint_uri() -> None
```

##### `reset_cluster_name` <a name="reset_cluster_name" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.resetClusterName"></a>

```python
def reset_cluster_name() -> None
```

##### `reset_endpoints_resource_name` <a name="reset_endpoints_resource_name" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.resetEndpointsResourceName"></a>

```python
def reset_endpoints_resource_name() -> None
```

##### `reset_endpoints_resource_namespace` <a name="reset_endpoints_resource_namespace" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.resetEndpointsResourceNamespace"></a>

```python
def reset_endpoints_resource_namespace() -> None
```

##### `reset_role_arn` <a name="reset_role_arn" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.resetRoleArn"></a>

```python
def reset_role_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.clusterApiServerCaCertificateChainInput">cluster_api_server_ca_certificate_chain_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.clusterApiServerEndpointUriInput">cluster_api_server_endpoint_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.clusterNameInput">cluster_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.endpointsResourceNameInput">endpoints_resource_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.endpointsResourceNamespaceInput">endpoints_resource_namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.clusterApiServerCaCertificateChain">cluster_api_server_ca_certificate_chain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.clusterApiServerEndpointUri">cluster_api_server_endpoint_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.clusterName">cluster_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.endpointsResourceName">endpoints_resource_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.endpointsResourceNamespace">endpoints_resource_namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration">RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cluster_api_server_ca_certificate_chain_input`<sup>Optional</sup> <a name="cluster_api_server_ca_certificate_chain_input" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.clusterApiServerCaCertificateChainInput"></a>

```python
cluster_api_server_ca_certificate_chain_input: str
```

- *Type:* str

---

##### `cluster_api_server_endpoint_uri_input`<sup>Optional</sup> <a name="cluster_api_server_endpoint_uri_input" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.clusterApiServerEndpointUriInput"></a>

```python
cluster_api_server_endpoint_uri_input: str
```

- *Type:* str

---

##### `cluster_name_input`<sup>Optional</sup> <a name="cluster_name_input" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.clusterNameInput"></a>

```python
cluster_name_input: str
```

- *Type:* str

---

##### `endpoints_resource_name_input`<sup>Optional</sup> <a name="endpoints_resource_name_input" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.endpointsResourceNameInput"></a>

```python
endpoints_resource_name_input: str
```

- *Type:* str

---

##### `endpoints_resource_namespace_input`<sup>Optional</sup> <a name="endpoints_resource_namespace_input" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.endpointsResourceNamespaceInput"></a>

```python
endpoints_resource_namespace_input: str
```

- *Type:* str

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `cluster_api_server_ca_certificate_chain`<sup>Required</sup> <a name="cluster_api_server_ca_certificate_chain" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.clusterApiServerCaCertificateChain"></a>

```python
cluster_api_server_ca_certificate_chain: str
```

- *Type:* str

---

##### `cluster_api_server_endpoint_uri`<sup>Required</sup> <a name="cluster_api_server_endpoint_uri" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.clusterApiServerEndpointUri"></a>

```python
cluster_api_server_endpoint_uri: str
```

- *Type:* str

---

##### `cluster_name`<sup>Required</sup> <a name="cluster_name" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.clusterName"></a>

```python
cluster_name: str
```

- *Type:* str

---

##### `endpoints_resource_name`<sup>Required</sup> <a name="endpoints_resource_name" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.endpointsResourceName"></a>

```python
endpoints_resource_name: str
```

- *Type:* str

---

##### `endpoints_resource_namespace`<sup>Required</sup> <a name="endpoints_resource_namespace" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.endpointsResourceNamespace"></a>

```python
endpoints_resource_namespace: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration">RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration</a>

---


### RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference <a name="RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import rtbfabric_responder_gateway

rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.putAutoScalingGroupsConfiguration">put_auto_scaling_groups_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.putEksEndpointsConfiguration">put_eks_endpoints_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.resetAutoScalingGroupsConfiguration">reset_auto_scaling_groups_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.resetEksEndpointsConfiguration">reset_eks_endpoints_configuration</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_auto_scaling_groups_configuration` <a name="put_auto_scaling_groups_configuration" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.putAutoScalingGroupsConfiguration"></a>

```python
def put_auto_scaling_groups_configuration(
  auto_scaling_group_name_list: typing.List[str] = None,
  health_check_config: RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig = None,
  role_arn: str = None
) -> None
```

###### `auto_scaling_group_name_list`<sup>Optional</sup> <a name="auto_scaling_group_name_list" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.putAutoScalingGroupsConfiguration.parameter.autoScalingGroupNameList"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#auto_scaling_group_name_list RtbfabricResponderGateway#auto_scaling_group_name_list}.

---

###### `health_check_config`<sup>Optional</sup> <a name="health_check_config" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.putAutoScalingGroupsConfiguration.parameter.healthCheckConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig">RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#health_check_config RtbfabricResponderGateway#health_check_config}.

---

###### `role_arn`<sup>Optional</sup> <a name="role_arn" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.putAutoScalingGroupsConfiguration.parameter.roleArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#role_arn RtbfabricResponderGateway#role_arn}.

---

##### `put_eks_endpoints_configuration` <a name="put_eks_endpoints_configuration" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.putEksEndpointsConfiguration"></a>

```python
def put_eks_endpoints_configuration(
  cluster_api_server_ca_certificate_chain: str = None,
  cluster_api_server_endpoint_uri: str = None,
  cluster_name: str = None,
  endpoints_resource_name: str = None,
  endpoints_resource_namespace: str = None,
  role_arn: str = None
) -> None
```

###### `cluster_api_server_ca_certificate_chain`<sup>Optional</sup> <a name="cluster_api_server_ca_certificate_chain" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.putEksEndpointsConfiguration.parameter.clusterApiServerCaCertificateChain"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#cluster_api_server_ca_certificate_chain RtbfabricResponderGateway#cluster_api_server_ca_certificate_chain}.

---

###### `cluster_api_server_endpoint_uri`<sup>Optional</sup> <a name="cluster_api_server_endpoint_uri" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.putEksEndpointsConfiguration.parameter.clusterApiServerEndpointUri"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#cluster_api_server_endpoint_uri RtbfabricResponderGateway#cluster_api_server_endpoint_uri}.

---

###### `cluster_name`<sup>Optional</sup> <a name="cluster_name" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.putEksEndpointsConfiguration.parameter.clusterName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#cluster_name RtbfabricResponderGateway#cluster_name}.

---

###### `endpoints_resource_name`<sup>Optional</sup> <a name="endpoints_resource_name" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.putEksEndpointsConfiguration.parameter.endpointsResourceName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#endpoints_resource_name RtbfabricResponderGateway#endpoints_resource_name}.

---

###### `endpoints_resource_namespace`<sup>Optional</sup> <a name="endpoints_resource_namespace" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.putEksEndpointsConfiguration.parameter.endpointsResourceNamespace"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#endpoints_resource_namespace RtbfabricResponderGateway#endpoints_resource_namespace}.

---

###### `role_arn`<sup>Optional</sup> <a name="role_arn" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.putEksEndpointsConfiguration.parameter.roleArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#role_arn RtbfabricResponderGateway#role_arn}.

---

##### `reset_auto_scaling_groups_configuration` <a name="reset_auto_scaling_groups_configuration" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.resetAutoScalingGroupsConfiguration"></a>

```python
def reset_auto_scaling_groups_configuration() -> None
```

##### `reset_eks_endpoints_configuration` <a name="reset_eks_endpoints_configuration" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.resetEksEndpointsConfiguration"></a>

```python
def reset_eks_endpoints_configuration() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.property.autoScalingGroupsConfiguration">auto_scaling_groups_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference">RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.property.eksEndpointsConfiguration">eks_endpoints_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference">RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.property.autoScalingGroupsConfigurationInput">auto_scaling_groups_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfiguration">RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.property.eksEndpointsConfigurationInput">eks_endpoints_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration">RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfiguration">RtbfabricResponderGatewayManagedEndpointConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auto_scaling_groups_configuration`<sup>Required</sup> <a name="auto_scaling_groups_configuration" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.property.autoScalingGroupsConfiguration"></a>

```python
auto_scaling_groups_configuration: RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference">RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference</a>

---

##### `eks_endpoints_configuration`<sup>Required</sup> <a name="eks_endpoints_configuration" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.property.eksEndpointsConfiguration"></a>

```python
eks_endpoints_configuration: RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference">RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference</a>

---

##### `auto_scaling_groups_configuration_input`<sup>Optional</sup> <a name="auto_scaling_groups_configuration_input" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.property.autoScalingGroupsConfigurationInput"></a>

```python
auto_scaling_groups_configuration_input: IResolvable | RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfiguration">RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfiguration</a>

---

##### `eks_endpoints_configuration_input`<sup>Optional</sup> <a name="eks_endpoints_configuration_input" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.property.eksEndpointsConfigurationInput"></a>

```python
eks_endpoints_configuration_input: IResolvable | RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration">RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | RtbfabricResponderGatewayManagedEndpointConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfiguration">RtbfabricResponderGatewayManagedEndpointConfiguration</a>

---


### RtbfabricResponderGatewayTagsList <a name="RtbfabricResponderGatewayTagsList" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import rtbfabric_responder_gateway

rtbfabricResponderGateway.RtbfabricResponderGatewayTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> RtbfabricResponderGatewayTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTags">RtbfabricResponderGatewayTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[RtbfabricResponderGatewayTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTags">RtbfabricResponderGatewayTags</a>]

---


### RtbfabricResponderGatewayTagsOutputReference <a name="RtbfabricResponderGatewayTagsOutputReference" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import rtbfabric_responder_gateway

rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTags">RtbfabricResponderGatewayTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | RtbfabricResponderGatewayTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTags">RtbfabricResponderGatewayTags</a>

---


### RtbfabricResponderGatewayTrustStoreConfigurationOutputReference <a name="RtbfabricResponderGatewayTrustStoreConfigurationOutputReference" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import rtbfabric_responder_gateway

rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.resetCertificateAuthorityCertificates">reset_certificate_authority_certificates</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_certificate_authority_certificates` <a name="reset_certificate_authority_certificates" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.resetCertificateAuthorityCertificates"></a>

```python
def reset_certificate_authority_certificates() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.property.certificateAuthorityCertificatesInput">certificate_authority_certificates_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.property.certificateAuthorityCertificates">certificate_authority_certificates</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfiguration">RtbfabricResponderGatewayTrustStoreConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `certificate_authority_certificates_input`<sup>Optional</sup> <a name="certificate_authority_certificates_input" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.property.certificateAuthorityCertificatesInput"></a>

```python
certificate_authority_certificates_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `certificate_authority_certificates`<sup>Required</sup> <a name="certificate_authority_certificates" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.property.certificateAuthorityCertificates"></a>

```python
certificate_authority_certificates: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | RtbfabricResponderGatewayTrustStoreConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfiguration">RtbfabricResponderGatewayTrustStoreConfiguration</a>

---



