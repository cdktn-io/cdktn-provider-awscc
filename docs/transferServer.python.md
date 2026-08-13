# `transferServer` Submodule <a name="`transferServer` Submodule" id="@cdktn/provider-awscc.transferServer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TransferServer <a name="TransferServer" id="@cdktn/provider-awscc.transferServer.TransferServer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/transfer_server awscc_transfer_server}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transferServer.TransferServer.Initializer"></a>

```python
from cdktn_provider_awscc import transfer_server

transferServer.TransferServer(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  certificate: str = None,
  domain: str = None,
  endpoint_details: TransferServerEndpointDetails = None,
  endpoint_type: str = None,
  identity_provider_details: TransferServerIdentityProviderDetails = None,
  identity_provider_type: str = None,
  ip_address_type: str = None,
  logging_role: str = None,
  post_authentication_login_banner: str = None,
  pre_authentication_login_banner: str = None,
  protocol_details: TransferServerProtocolDetails = None,
  protocols: typing.List[str] = None,
  s3_storage_options: TransferServerS3StorageOptions = None,
  security_policy_name: str = None,
  structured_log_destinations: typing.List[str] = None,
  tags: IResolvable | typing.List[TransferServerTags] = None,
  workflow_details: TransferServerWorkflowDetails = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.Initializer.parameter.certificate">certificate</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/transfer_server#certificate TransferServer#certificate}. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.Initializer.parameter.domain">domain</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/transfer_server#domain TransferServer#domain}. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.Initializer.parameter.endpointDetails">endpoint_details</a></code> | <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerEndpointDetails">TransferServerEndpointDetails</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/transfer_server#endpoint_details TransferServer#endpoint_details}. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.Initializer.parameter.endpointType">endpoint_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/transfer_server#endpoint_type TransferServer#endpoint_type}. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.Initializer.parameter.identityProviderDetails">identity_provider_details</a></code> | <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerIdentityProviderDetails">TransferServerIdentityProviderDetails</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/transfer_server#identity_provider_details TransferServer#identity_provider_details}. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.Initializer.parameter.identityProviderType">identity_provider_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/transfer_server#identity_provider_type TransferServer#identity_provider_type}. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.Initializer.parameter.ipAddressType">ip_address_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/transfer_server#ip_address_type TransferServer#ip_address_type}. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.Initializer.parameter.loggingRole">logging_role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/transfer_server#logging_role TransferServer#logging_role}. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.Initializer.parameter.postAuthenticationLoginBanner">post_authentication_login_banner</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/transfer_server#post_authentication_login_banner TransferServer#post_authentication_login_banner}. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.Initializer.parameter.preAuthenticationLoginBanner">pre_authentication_login_banner</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/transfer_server#pre_authentication_login_banner TransferServer#pre_authentication_login_banner}. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.Initializer.parameter.protocolDetails">protocol_details</a></code> | <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerProtocolDetails">TransferServerProtocolDetails</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/transfer_server#protocol_details TransferServer#protocol_details}. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.Initializer.parameter.protocols">protocols</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/transfer_server#protocols TransferServer#protocols}. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.Initializer.parameter.s3StorageOptions">s3_storage_options</a></code> | <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerS3StorageOptions">TransferServerS3StorageOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/transfer_server#s3_storage_options TransferServer#s3_storage_options}. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.Initializer.parameter.securityPolicyName">security_policy_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/transfer_server#security_policy_name TransferServer#security_policy_name}. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.Initializer.parameter.structuredLogDestinations">structured_log_destinations</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/transfer_server#structured_log_destinations TransferServer#structured_log_destinations}. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.transferServer.TransferServerTags">TransferServerTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/transfer_server#tags TransferServer#tags}. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.Initializer.parameter.workflowDetails">workflow_details</a></code> | <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetails">TransferServerWorkflowDetails</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/transfer_server#workflow_details TransferServer#workflow_details}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.transferServer.TransferServer.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.transferServer.TransferServer.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.transferServer.TransferServer.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.transferServer.TransferServer.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.transferServer.TransferServer.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.transferServer.TransferServer.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.transferServer.TransferServer.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.transferServer.TransferServer.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.transferServer.TransferServer.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `certificate`<sup>Optional</sup> <a name="certificate" id="@cdktn/provider-awscc.transferServer.TransferServer.Initializer.parameter.certificate"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/transfer_server#certificate TransferServer#certificate}.

---

##### `domain`<sup>Optional</sup> <a name="domain" id="@cdktn/provider-awscc.transferServer.TransferServer.Initializer.parameter.domain"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/transfer_server#domain TransferServer#domain}.

---

##### `endpoint_details`<sup>Optional</sup> <a name="endpoint_details" id="@cdktn/provider-awscc.transferServer.TransferServer.Initializer.parameter.endpointDetails"></a>

- *Type:* <a href="#@cdktn/provider-awscc.transferServer.TransferServerEndpointDetails">TransferServerEndpointDetails</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/transfer_server#endpoint_details TransferServer#endpoint_details}.

---

##### `endpoint_type`<sup>Optional</sup> <a name="endpoint_type" id="@cdktn/provider-awscc.transferServer.TransferServer.Initializer.parameter.endpointType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/transfer_server#endpoint_type TransferServer#endpoint_type}.

---

##### `identity_provider_details`<sup>Optional</sup> <a name="identity_provider_details" id="@cdktn/provider-awscc.transferServer.TransferServer.Initializer.parameter.identityProviderDetails"></a>

- *Type:* <a href="#@cdktn/provider-awscc.transferServer.TransferServerIdentityProviderDetails">TransferServerIdentityProviderDetails</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/transfer_server#identity_provider_details TransferServer#identity_provider_details}.

---

##### `identity_provider_type`<sup>Optional</sup> <a name="identity_provider_type" id="@cdktn/provider-awscc.transferServer.TransferServer.Initializer.parameter.identityProviderType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/transfer_server#identity_provider_type TransferServer#identity_provider_type}.

---

##### `ip_address_type`<sup>Optional</sup> <a name="ip_address_type" id="@cdktn/provider-awscc.transferServer.TransferServer.Initializer.parameter.ipAddressType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/transfer_server#ip_address_type TransferServer#ip_address_type}.

---

##### `logging_role`<sup>Optional</sup> <a name="logging_role" id="@cdktn/provider-awscc.transferServer.TransferServer.Initializer.parameter.loggingRole"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/transfer_server#logging_role TransferServer#logging_role}.

---

##### `post_authentication_login_banner`<sup>Optional</sup> <a name="post_authentication_login_banner" id="@cdktn/provider-awscc.transferServer.TransferServer.Initializer.parameter.postAuthenticationLoginBanner"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/transfer_server#post_authentication_login_banner TransferServer#post_authentication_login_banner}.

---

##### `pre_authentication_login_banner`<sup>Optional</sup> <a name="pre_authentication_login_banner" id="@cdktn/provider-awscc.transferServer.TransferServer.Initializer.parameter.preAuthenticationLoginBanner"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/transfer_server#pre_authentication_login_banner TransferServer#pre_authentication_login_banner}.

---

##### `protocol_details`<sup>Optional</sup> <a name="protocol_details" id="@cdktn/provider-awscc.transferServer.TransferServer.Initializer.parameter.protocolDetails"></a>

- *Type:* <a href="#@cdktn/provider-awscc.transferServer.TransferServerProtocolDetails">TransferServerProtocolDetails</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/transfer_server#protocol_details TransferServer#protocol_details}.

---

##### `protocols`<sup>Optional</sup> <a name="protocols" id="@cdktn/provider-awscc.transferServer.TransferServer.Initializer.parameter.protocols"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/transfer_server#protocols TransferServer#protocols}.

---

##### `s3_storage_options`<sup>Optional</sup> <a name="s3_storage_options" id="@cdktn/provider-awscc.transferServer.TransferServer.Initializer.parameter.s3StorageOptions"></a>

- *Type:* <a href="#@cdktn/provider-awscc.transferServer.TransferServerS3StorageOptions">TransferServerS3StorageOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/transfer_server#s3_storage_options TransferServer#s3_storage_options}.

---

##### `security_policy_name`<sup>Optional</sup> <a name="security_policy_name" id="@cdktn/provider-awscc.transferServer.TransferServer.Initializer.parameter.securityPolicyName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/transfer_server#security_policy_name TransferServer#security_policy_name}.

---

##### `structured_log_destinations`<sup>Optional</sup> <a name="structured_log_destinations" id="@cdktn/provider-awscc.transferServer.TransferServer.Initializer.parameter.structuredLogDestinations"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/transfer_server#structured_log_destinations TransferServer#structured_log_destinations}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.transferServer.TransferServer.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.transferServer.TransferServerTags">TransferServerTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/transfer_server#tags TransferServer#tags}.

---

##### `workflow_details`<sup>Optional</sup> <a name="workflow_details" id="@cdktn/provider-awscc.transferServer.TransferServer.Initializer.parameter.workflowDetails"></a>

- *Type:* <a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetails">TransferServerWorkflowDetails</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/transfer_server#workflow_details TransferServer#workflow_details}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.putEndpointDetails">put_endpoint_details</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.putIdentityProviderDetails">put_identity_provider_details</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.putProtocolDetails">put_protocol_details</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.putS3StorageOptions">put_s3_storage_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.putWorkflowDetails">put_workflow_details</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.resetCertificate">reset_certificate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.resetDomain">reset_domain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.resetEndpointDetails">reset_endpoint_details</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.resetEndpointType">reset_endpoint_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.resetIdentityProviderDetails">reset_identity_provider_details</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.resetIdentityProviderType">reset_identity_provider_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.resetIpAddressType">reset_ip_address_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.resetLoggingRole">reset_logging_role</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.resetPostAuthenticationLoginBanner">reset_post_authentication_login_banner</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.resetPreAuthenticationLoginBanner">reset_pre_authentication_login_banner</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.resetProtocolDetails">reset_protocol_details</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.resetProtocols">reset_protocols</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.resetS3StorageOptions">reset_s3_storage_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.resetSecurityPolicyName">reset_security_policy_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.resetStructuredLogDestinations">reset_structured_log_destinations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.resetWorkflowDetails">reset_workflow_details</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.transferServer.TransferServer.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.transferServer.TransferServer.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.transferServer.TransferServer.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.transferServer.TransferServer.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.transferServer.TransferServer.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.transferServer.TransferServer.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.transferServer.TransferServer.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.transferServer.TransferServer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.transferServer.TransferServer.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.transferServer.TransferServer.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.transferServer.TransferServer.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.transferServer.TransferServer.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.transferServer.TransferServer.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.transferServer.TransferServer.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.transferServer.TransferServer.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferServer.TransferServer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.transferServer.TransferServer.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferServer.TransferServer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.transferServer.TransferServer.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferServer.TransferServer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.transferServer.TransferServer.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferServer.TransferServer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.transferServer.TransferServer.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferServer.TransferServer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.transferServer.TransferServer.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferServer.TransferServer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.transferServer.TransferServer.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferServer.TransferServer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.transferServer.TransferServer.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferServer.TransferServer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.transferServer.TransferServer.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferServer.TransferServer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.transferServer.TransferServer.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.transferServer.TransferServer.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.transferServer.TransferServer.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.transferServer.TransferServer.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.transferServer.TransferServer.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferServer.TransferServer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.transferServer.TransferServer.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.transferServer.TransferServer.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.transferServer.TransferServer.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.transferServer.TransferServer.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.transferServer.TransferServer.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.transferServer.TransferServer.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.transferServer.TransferServer.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_endpoint_details` <a name="put_endpoint_details" id="@cdktn/provider-awscc.transferServer.TransferServer.putEndpointDetails"></a>

```python
def put_endpoint_details(
  address_allocation_ids: typing.List[str] = None,
  security_group_ids: typing.List[str] = None,
  subnet_ids: typing.List[str] = None,
  vpc_endpoint_id: str = None,
  vpc_id: str = None
) -> None
```

###### `address_allocation_ids`<sup>Optional</sup> <a name="address_allocation_ids" id="@cdktn/provider-awscc.transferServer.TransferServer.putEndpointDetails.parameter.addressAllocationIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/transfer_server#address_allocation_ids TransferServer#address_allocation_ids}.

---

###### `security_group_ids`<sup>Optional</sup> <a name="security_group_ids" id="@cdktn/provider-awscc.transferServer.TransferServer.putEndpointDetails.parameter.securityGroupIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/transfer_server#security_group_ids TransferServer#security_group_ids}.

---

###### `subnet_ids`<sup>Optional</sup> <a name="subnet_ids" id="@cdktn/provider-awscc.transferServer.TransferServer.putEndpointDetails.parameter.subnetIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/transfer_server#subnet_ids TransferServer#subnet_ids}.

---

###### `vpc_endpoint_id`<sup>Optional</sup> <a name="vpc_endpoint_id" id="@cdktn/provider-awscc.transferServer.TransferServer.putEndpointDetails.parameter.vpcEndpointId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/transfer_server#vpc_endpoint_id TransferServer#vpc_endpoint_id}.

---

###### `vpc_id`<sup>Optional</sup> <a name="vpc_id" id="@cdktn/provider-awscc.transferServer.TransferServer.putEndpointDetails.parameter.vpcId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/transfer_server#vpc_id TransferServer#vpc_id}.

---

##### `put_identity_provider_details` <a name="put_identity_provider_details" id="@cdktn/provider-awscc.transferServer.TransferServer.putIdentityProviderDetails"></a>

```python
def put_identity_provider_details(
  directory_id: str = None,
  function: str = None,
  invocation_role: str = None,
  sftp_authentication_methods: str = None,
  url: str = None
) -> None
```

###### `directory_id`<sup>Optional</sup> <a name="directory_id" id="@cdktn/provider-awscc.transferServer.TransferServer.putIdentityProviderDetails.parameter.directoryId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/transfer_server#directory_id TransferServer#directory_id}.

---

###### `function`<sup>Optional</sup> <a name="function" id="@cdktn/provider-awscc.transferServer.TransferServer.putIdentityProviderDetails.parameter.function"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/transfer_server#function TransferServer#function}.

---

###### `invocation_role`<sup>Optional</sup> <a name="invocation_role" id="@cdktn/provider-awscc.transferServer.TransferServer.putIdentityProviderDetails.parameter.invocationRole"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/transfer_server#invocation_role TransferServer#invocation_role}.

---

###### `sftp_authentication_methods`<sup>Optional</sup> <a name="sftp_authentication_methods" id="@cdktn/provider-awscc.transferServer.TransferServer.putIdentityProviderDetails.parameter.sftpAuthenticationMethods"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/transfer_server#sftp_authentication_methods TransferServer#sftp_authentication_methods}.

---

###### `url`<sup>Optional</sup> <a name="url" id="@cdktn/provider-awscc.transferServer.TransferServer.putIdentityProviderDetails.parameter.url"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/transfer_server#url TransferServer#url}.

---

##### `put_protocol_details` <a name="put_protocol_details" id="@cdktn/provider-awscc.transferServer.TransferServer.putProtocolDetails"></a>

```python
def put_protocol_details(
  as2_transports: typing.List[str] = None,
  passive_ip: str = None,
  set_stat_option: str = None,
  tls_session_resumption_mode: str = None
) -> None
```

###### `as2_transports`<sup>Optional</sup> <a name="as2_transports" id="@cdktn/provider-awscc.transferServer.TransferServer.putProtocolDetails.parameter.as2Transports"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/transfer_server#as_2_transports TransferServer#as_2_transports}.

---

###### `passive_ip`<sup>Optional</sup> <a name="passive_ip" id="@cdktn/provider-awscc.transferServer.TransferServer.putProtocolDetails.parameter.passiveIp"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/transfer_server#passive_ip TransferServer#passive_ip}.

---

###### `set_stat_option`<sup>Optional</sup> <a name="set_stat_option" id="@cdktn/provider-awscc.transferServer.TransferServer.putProtocolDetails.parameter.setStatOption"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/transfer_server#set_stat_option TransferServer#set_stat_option}.

---

###### `tls_session_resumption_mode`<sup>Optional</sup> <a name="tls_session_resumption_mode" id="@cdktn/provider-awscc.transferServer.TransferServer.putProtocolDetails.parameter.tlsSessionResumptionMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/transfer_server#tls_session_resumption_mode TransferServer#tls_session_resumption_mode}.

---

##### `put_s3_storage_options` <a name="put_s3_storage_options" id="@cdktn/provider-awscc.transferServer.TransferServer.putS3StorageOptions"></a>

```python
def put_s3_storage_options(
  directory_listing_optimization: str = None
) -> None
```

###### `directory_listing_optimization`<sup>Optional</sup> <a name="directory_listing_optimization" id="@cdktn/provider-awscc.transferServer.TransferServer.putS3StorageOptions.parameter.directoryListingOptimization"></a>

- *Type:* str

Indicates whether optimization to directory listing on S3 servers is used. Disabled by default for compatibility.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/transfer_server#directory_listing_optimization TransferServer#directory_listing_optimization}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.transferServer.TransferServer.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[TransferServerTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.transferServer.TransferServer.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.transferServer.TransferServerTags">TransferServerTags</a>]

---

##### `put_workflow_details` <a name="put_workflow_details" id="@cdktn/provider-awscc.transferServer.TransferServer.putWorkflowDetails"></a>

```python
def put_workflow_details(
  on_partial_upload: IResolvable | typing.List[TransferServerWorkflowDetailsOnPartialUpload] = None,
  on_upload: IResolvable | typing.List[TransferServerWorkflowDetailsOnUpload] = None
) -> None
```

###### `on_partial_upload`<sup>Optional</sup> <a name="on_partial_upload" id="@cdktn/provider-awscc.transferServer.TransferServer.putWorkflowDetails.parameter.onPartialUpload"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUpload">TransferServerWorkflowDetailsOnPartialUpload</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/transfer_server#on_partial_upload TransferServer#on_partial_upload}.

---

###### `on_upload`<sup>Optional</sup> <a name="on_upload" id="@cdktn/provider-awscc.transferServer.TransferServer.putWorkflowDetails.parameter.onUpload"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUpload">TransferServerWorkflowDetailsOnUpload</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/transfer_server#on_upload TransferServer#on_upload}.

---

##### `reset_certificate` <a name="reset_certificate" id="@cdktn/provider-awscc.transferServer.TransferServer.resetCertificate"></a>

```python
def reset_certificate() -> None
```

##### `reset_domain` <a name="reset_domain" id="@cdktn/provider-awscc.transferServer.TransferServer.resetDomain"></a>

```python
def reset_domain() -> None
```

##### `reset_endpoint_details` <a name="reset_endpoint_details" id="@cdktn/provider-awscc.transferServer.TransferServer.resetEndpointDetails"></a>

```python
def reset_endpoint_details() -> None
```

##### `reset_endpoint_type` <a name="reset_endpoint_type" id="@cdktn/provider-awscc.transferServer.TransferServer.resetEndpointType"></a>

```python
def reset_endpoint_type() -> None
```

##### `reset_identity_provider_details` <a name="reset_identity_provider_details" id="@cdktn/provider-awscc.transferServer.TransferServer.resetIdentityProviderDetails"></a>

```python
def reset_identity_provider_details() -> None
```

##### `reset_identity_provider_type` <a name="reset_identity_provider_type" id="@cdktn/provider-awscc.transferServer.TransferServer.resetIdentityProviderType"></a>

```python
def reset_identity_provider_type() -> None
```

##### `reset_ip_address_type` <a name="reset_ip_address_type" id="@cdktn/provider-awscc.transferServer.TransferServer.resetIpAddressType"></a>

```python
def reset_ip_address_type() -> None
```

##### `reset_logging_role` <a name="reset_logging_role" id="@cdktn/provider-awscc.transferServer.TransferServer.resetLoggingRole"></a>

```python
def reset_logging_role() -> None
```

##### `reset_post_authentication_login_banner` <a name="reset_post_authentication_login_banner" id="@cdktn/provider-awscc.transferServer.TransferServer.resetPostAuthenticationLoginBanner"></a>

```python
def reset_post_authentication_login_banner() -> None
```

##### `reset_pre_authentication_login_banner` <a name="reset_pre_authentication_login_banner" id="@cdktn/provider-awscc.transferServer.TransferServer.resetPreAuthenticationLoginBanner"></a>

```python
def reset_pre_authentication_login_banner() -> None
```

##### `reset_protocol_details` <a name="reset_protocol_details" id="@cdktn/provider-awscc.transferServer.TransferServer.resetProtocolDetails"></a>

```python
def reset_protocol_details() -> None
```

##### `reset_protocols` <a name="reset_protocols" id="@cdktn/provider-awscc.transferServer.TransferServer.resetProtocols"></a>

```python
def reset_protocols() -> None
```

##### `reset_s3_storage_options` <a name="reset_s3_storage_options" id="@cdktn/provider-awscc.transferServer.TransferServer.resetS3StorageOptions"></a>

```python
def reset_s3_storage_options() -> None
```

##### `reset_security_policy_name` <a name="reset_security_policy_name" id="@cdktn/provider-awscc.transferServer.TransferServer.resetSecurityPolicyName"></a>

```python
def reset_security_policy_name() -> None
```

##### `reset_structured_log_destinations` <a name="reset_structured_log_destinations" id="@cdktn/provider-awscc.transferServer.TransferServer.resetStructuredLogDestinations"></a>

```python
def reset_structured_log_destinations() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.transferServer.TransferServer.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_workflow_details` <a name="reset_workflow_details" id="@cdktn/provider-awscc.transferServer.TransferServer.resetWorkflowDetails"></a>

```python
def reset_workflow_details() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a TransferServer resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.transferServer.TransferServer.isConstruct"></a>

```python
from cdktn_provider_awscc import transfer_server

transferServer.TransferServer.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.transferServer.TransferServer.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.transferServer.TransferServer.isTerraformElement"></a>

```python
from cdktn_provider_awscc import transfer_server

transferServer.TransferServer.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.transferServer.TransferServer.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.transferServer.TransferServer.isTerraformResource"></a>

```python
from cdktn_provider_awscc import transfer_server

transferServer.TransferServer.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.transferServer.TransferServer.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.transferServer.TransferServer.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import transfer_server

transferServer.TransferServer.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a TransferServer resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.transferServer.TransferServer.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.transferServer.TransferServer.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the TransferServer to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.transferServer.TransferServer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing TransferServer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/transfer_server#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.transferServer.TransferServer.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the TransferServer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.property.as2ServiceManagedEgressIpAddresses">as2_service_managed_egress_ip_addresses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.property.endpointDetails">endpoint_details</a></code> | <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerEndpointDetailsOutputReference">TransferServerEndpointDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.property.identityProviderDetails">identity_provider_details</a></code> | <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerIdentityProviderDetailsOutputReference">TransferServerIdentityProviderDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.property.protocolDetails">protocol_details</a></code> | <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerProtocolDetailsOutputReference">TransferServerProtocolDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.property.s3StorageOptions">s3_storage_options</a></code> | <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerS3StorageOptionsOutputReference">TransferServerS3StorageOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.property.serverId">server_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerTagsList">TransferServerTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.property.workflowDetails">workflow_details</a></code> | <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOutputReference">TransferServerWorkflowDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.property.certificateInput">certificate_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.property.domainInput">domain_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.property.endpointDetailsInput">endpoint_details_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transferServer.TransferServerEndpointDetails">TransferServerEndpointDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.property.endpointTypeInput">endpoint_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.property.identityProviderDetailsInput">identity_provider_details_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transferServer.TransferServerIdentityProviderDetails">TransferServerIdentityProviderDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.property.identityProviderTypeInput">identity_provider_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.property.ipAddressTypeInput">ip_address_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.property.loggingRoleInput">logging_role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.property.postAuthenticationLoginBannerInput">post_authentication_login_banner_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.property.preAuthenticationLoginBannerInput">pre_authentication_login_banner_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.property.protocolDetailsInput">protocol_details_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transferServer.TransferServerProtocolDetails">TransferServerProtocolDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.property.protocolsInput">protocols_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.property.s3StorageOptionsInput">s3_storage_options_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transferServer.TransferServerS3StorageOptions">TransferServerS3StorageOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.property.securityPolicyNameInput">security_policy_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.property.structuredLogDestinationsInput">structured_log_destinations_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.transferServer.TransferServerTags">TransferServerTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.property.workflowDetailsInput">workflow_details_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetails">TransferServerWorkflowDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.property.certificate">certificate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.property.domain">domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.property.endpointType">endpoint_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.property.identityProviderType">identity_provider_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.property.ipAddressType">ip_address_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.property.loggingRole">logging_role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.property.postAuthenticationLoginBanner">post_authentication_login_banner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.property.preAuthenticationLoginBanner">pre_authentication_login_banner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.property.protocols">protocols</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.property.securityPolicyName">security_policy_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.property.structuredLogDestinations">structured_log_destinations</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.transferServer.TransferServer.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.transferServer.TransferServer.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.transferServer.TransferServer.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.transferServer.TransferServer.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.transferServer.TransferServer.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.transferServer.TransferServer.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.transferServer.TransferServer.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.transferServer.TransferServer.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.transferServer.TransferServer.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.transferServer.TransferServer.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.transferServer.TransferServer.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.transferServer.TransferServer.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.transferServer.TransferServer.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.transferServer.TransferServer.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.transferServer.TransferServer.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `as2_service_managed_egress_ip_addresses`<sup>Required</sup> <a name="as2_service_managed_egress_ip_addresses" id="@cdktn/provider-awscc.transferServer.TransferServer.property.as2ServiceManagedEgressIpAddresses"></a>

```python
as2_service_managed_egress_ip_addresses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `endpoint_details`<sup>Required</sup> <a name="endpoint_details" id="@cdktn/provider-awscc.transferServer.TransferServer.property.endpointDetails"></a>

```python
endpoint_details: TransferServerEndpointDetailsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.transferServer.TransferServerEndpointDetailsOutputReference">TransferServerEndpointDetailsOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.transferServer.TransferServer.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `identity_provider_details`<sup>Required</sup> <a name="identity_provider_details" id="@cdktn/provider-awscc.transferServer.TransferServer.property.identityProviderDetails"></a>

```python
identity_provider_details: TransferServerIdentityProviderDetailsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.transferServer.TransferServerIdentityProviderDetailsOutputReference">TransferServerIdentityProviderDetailsOutputReference</a>

---

##### `protocol_details`<sup>Required</sup> <a name="protocol_details" id="@cdktn/provider-awscc.transferServer.TransferServer.property.protocolDetails"></a>

```python
protocol_details: TransferServerProtocolDetailsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.transferServer.TransferServerProtocolDetailsOutputReference">TransferServerProtocolDetailsOutputReference</a>

---

##### `s3_storage_options`<sup>Required</sup> <a name="s3_storage_options" id="@cdktn/provider-awscc.transferServer.TransferServer.property.s3StorageOptions"></a>

```python
s3_storage_options: TransferServerS3StorageOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.transferServer.TransferServerS3StorageOptionsOutputReference">TransferServerS3StorageOptionsOutputReference</a>

---

##### `server_id`<sup>Required</sup> <a name="server_id" id="@cdktn/provider-awscc.transferServer.TransferServer.property.serverId"></a>

```python
server_id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.transferServer.TransferServer.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.transferServer.TransferServer.property.tags"></a>

```python
tags: TransferServerTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.transferServer.TransferServerTagsList">TransferServerTagsList</a>

---

##### `workflow_details`<sup>Required</sup> <a name="workflow_details" id="@cdktn/provider-awscc.transferServer.TransferServer.property.workflowDetails"></a>

```python
workflow_details: TransferServerWorkflowDetailsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOutputReference">TransferServerWorkflowDetailsOutputReference</a>

---

##### `certificate_input`<sup>Optional</sup> <a name="certificate_input" id="@cdktn/provider-awscc.transferServer.TransferServer.property.certificateInput"></a>

```python
certificate_input: str
```

- *Type:* str

---

##### `domain_input`<sup>Optional</sup> <a name="domain_input" id="@cdktn/provider-awscc.transferServer.TransferServer.property.domainInput"></a>

```python
domain_input: str
```

- *Type:* str

---

##### `endpoint_details_input`<sup>Optional</sup> <a name="endpoint_details_input" id="@cdktn/provider-awscc.transferServer.TransferServer.property.endpointDetailsInput"></a>

```python
endpoint_details_input: IResolvable | TransferServerEndpointDetails
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transferServer.TransferServerEndpointDetails">TransferServerEndpointDetails</a>

---

##### `endpoint_type_input`<sup>Optional</sup> <a name="endpoint_type_input" id="@cdktn/provider-awscc.transferServer.TransferServer.property.endpointTypeInput"></a>

```python
endpoint_type_input: str
```

- *Type:* str

---

##### `identity_provider_details_input`<sup>Optional</sup> <a name="identity_provider_details_input" id="@cdktn/provider-awscc.transferServer.TransferServer.property.identityProviderDetailsInput"></a>

```python
identity_provider_details_input: IResolvable | TransferServerIdentityProviderDetails
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transferServer.TransferServerIdentityProviderDetails">TransferServerIdentityProviderDetails</a>

---

##### `identity_provider_type_input`<sup>Optional</sup> <a name="identity_provider_type_input" id="@cdktn/provider-awscc.transferServer.TransferServer.property.identityProviderTypeInput"></a>

```python
identity_provider_type_input: str
```

- *Type:* str

---

##### `ip_address_type_input`<sup>Optional</sup> <a name="ip_address_type_input" id="@cdktn/provider-awscc.transferServer.TransferServer.property.ipAddressTypeInput"></a>

```python
ip_address_type_input: str
```

- *Type:* str

---

##### `logging_role_input`<sup>Optional</sup> <a name="logging_role_input" id="@cdktn/provider-awscc.transferServer.TransferServer.property.loggingRoleInput"></a>

```python
logging_role_input: str
```

- *Type:* str

---

##### `post_authentication_login_banner_input`<sup>Optional</sup> <a name="post_authentication_login_banner_input" id="@cdktn/provider-awscc.transferServer.TransferServer.property.postAuthenticationLoginBannerInput"></a>

```python
post_authentication_login_banner_input: str
```

- *Type:* str

---

##### `pre_authentication_login_banner_input`<sup>Optional</sup> <a name="pre_authentication_login_banner_input" id="@cdktn/provider-awscc.transferServer.TransferServer.property.preAuthenticationLoginBannerInput"></a>

```python
pre_authentication_login_banner_input: str
```

- *Type:* str

---

##### `protocol_details_input`<sup>Optional</sup> <a name="protocol_details_input" id="@cdktn/provider-awscc.transferServer.TransferServer.property.protocolDetailsInput"></a>

```python
protocol_details_input: IResolvable | TransferServerProtocolDetails
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transferServer.TransferServerProtocolDetails">TransferServerProtocolDetails</a>

---

##### `protocols_input`<sup>Optional</sup> <a name="protocols_input" id="@cdktn/provider-awscc.transferServer.TransferServer.property.protocolsInput"></a>

```python
protocols_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `s3_storage_options_input`<sup>Optional</sup> <a name="s3_storage_options_input" id="@cdktn/provider-awscc.transferServer.TransferServer.property.s3StorageOptionsInput"></a>

```python
s3_storage_options_input: IResolvable | TransferServerS3StorageOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transferServer.TransferServerS3StorageOptions">TransferServerS3StorageOptions</a>

---

##### `security_policy_name_input`<sup>Optional</sup> <a name="security_policy_name_input" id="@cdktn/provider-awscc.transferServer.TransferServer.property.securityPolicyNameInput"></a>

```python
security_policy_name_input: str
```

- *Type:* str

---

##### `structured_log_destinations_input`<sup>Optional</sup> <a name="structured_log_destinations_input" id="@cdktn/provider-awscc.transferServer.TransferServer.property.structuredLogDestinationsInput"></a>

```python
structured_log_destinations_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.transferServer.TransferServer.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[TransferServerTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.transferServer.TransferServerTags">TransferServerTags</a>]

---

##### `workflow_details_input`<sup>Optional</sup> <a name="workflow_details_input" id="@cdktn/provider-awscc.transferServer.TransferServer.property.workflowDetailsInput"></a>

```python
workflow_details_input: IResolvable | TransferServerWorkflowDetails
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetails">TransferServerWorkflowDetails</a>

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktn/provider-awscc.transferServer.TransferServer.property.certificate"></a>

```python
certificate: str
```

- *Type:* str

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktn/provider-awscc.transferServer.TransferServer.property.domain"></a>

```python
domain: str
```

- *Type:* str

---

##### `endpoint_type`<sup>Required</sup> <a name="endpoint_type" id="@cdktn/provider-awscc.transferServer.TransferServer.property.endpointType"></a>

```python
endpoint_type: str
```

- *Type:* str

---

##### `identity_provider_type`<sup>Required</sup> <a name="identity_provider_type" id="@cdktn/provider-awscc.transferServer.TransferServer.property.identityProviderType"></a>

```python
identity_provider_type: str
```

- *Type:* str

---

##### `ip_address_type`<sup>Required</sup> <a name="ip_address_type" id="@cdktn/provider-awscc.transferServer.TransferServer.property.ipAddressType"></a>

```python
ip_address_type: str
```

- *Type:* str

---

##### `logging_role`<sup>Required</sup> <a name="logging_role" id="@cdktn/provider-awscc.transferServer.TransferServer.property.loggingRole"></a>

```python
logging_role: str
```

- *Type:* str

---

##### `post_authentication_login_banner`<sup>Required</sup> <a name="post_authentication_login_banner" id="@cdktn/provider-awscc.transferServer.TransferServer.property.postAuthenticationLoginBanner"></a>

```python
post_authentication_login_banner: str
```

- *Type:* str

---

##### `pre_authentication_login_banner`<sup>Required</sup> <a name="pre_authentication_login_banner" id="@cdktn/provider-awscc.transferServer.TransferServer.property.preAuthenticationLoginBanner"></a>

```python
pre_authentication_login_banner: str
```

- *Type:* str

---

##### `protocols`<sup>Required</sup> <a name="protocols" id="@cdktn/provider-awscc.transferServer.TransferServer.property.protocols"></a>

```python
protocols: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `security_policy_name`<sup>Required</sup> <a name="security_policy_name" id="@cdktn/provider-awscc.transferServer.TransferServer.property.securityPolicyName"></a>

```python
security_policy_name: str
```

- *Type:* str

---

##### `structured_log_destinations`<sup>Required</sup> <a name="structured_log_destinations" id="@cdktn/provider-awscc.transferServer.TransferServer.property.structuredLogDestinations"></a>

```python
structured_log_destinations: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServer.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.transferServer.TransferServer.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### TransferServerConfig <a name="TransferServerConfig" id="@cdktn/provider-awscc.transferServer.TransferServerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transferServer.TransferServerConfig.Initializer"></a>

```python
from cdktn_provider_awscc import transfer_server

transferServer.TransferServerConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  certificate: str = None,
  domain: str = None,
  endpoint_details: TransferServerEndpointDetails = None,
  endpoint_type: str = None,
  identity_provider_details: TransferServerIdentityProviderDetails = None,
  identity_provider_type: str = None,
  ip_address_type: str = None,
  logging_role: str = None,
  post_authentication_login_banner: str = None,
  pre_authentication_login_banner: str = None,
  protocol_details: TransferServerProtocolDetails = None,
  protocols: typing.List[str] = None,
  s3_storage_options: TransferServerS3StorageOptions = None,
  security_policy_name: str = None,
  structured_log_destinations: typing.List[str] = None,
  tags: IResolvable | typing.List[TransferServerTags] = None,
  workflow_details: TransferServerWorkflowDetails = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerConfig.property.certificate">certificate</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/transfer_server#certificate TransferServer#certificate}. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerConfig.property.domain">domain</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/transfer_server#domain TransferServer#domain}. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerConfig.property.endpointDetails">endpoint_details</a></code> | <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerEndpointDetails">TransferServerEndpointDetails</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/transfer_server#endpoint_details TransferServer#endpoint_details}. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerConfig.property.endpointType">endpoint_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/transfer_server#endpoint_type TransferServer#endpoint_type}. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerConfig.property.identityProviderDetails">identity_provider_details</a></code> | <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerIdentityProviderDetails">TransferServerIdentityProviderDetails</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/transfer_server#identity_provider_details TransferServer#identity_provider_details}. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerConfig.property.identityProviderType">identity_provider_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/transfer_server#identity_provider_type TransferServer#identity_provider_type}. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerConfig.property.ipAddressType">ip_address_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/transfer_server#ip_address_type TransferServer#ip_address_type}. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerConfig.property.loggingRole">logging_role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/transfer_server#logging_role TransferServer#logging_role}. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerConfig.property.postAuthenticationLoginBanner">post_authentication_login_banner</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/transfer_server#post_authentication_login_banner TransferServer#post_authentication_login_banner}. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerConfig.property.preAuthenticationLoginBanner">pre_authentication_login_banner</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/transfer_server#pre_authentication_login_banner TransferServer#pre_authentication_login_banner}. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerConfig.property.protocolDetails">protocol_details</a></code> | <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerProtocolDetails">TransferServerProtocolDetails</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/transfer_server#protocol_details TransferServer#protocol_details}. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerConfig.property.protocols">protocols</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/transfer_server#protocols TransferServer#protocols}. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerConfig.property.s3StorageOptions">s3_storage_options</a></code> | <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerS3StorageOptions">TransferServerS3StorageOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/transfer_server#s3_storage_options TransferServer#s3_storage_options}. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerConfig.property.securityPolicyName">security_policy_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/transfer_server#security_policy_name TransferServer#security_policy_name}. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerConfig.property.structuredLogDestinations">structured_log_destinations</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/transfer_server#structured_log_destinations TransferServer#structured_log_destinations}. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.transferServer.TransferServerTags">TransferServerTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/transfer_server#tags TransferServer#tags}. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerConfig.property.workflowDetails">workflow_details</a></code> | <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetails">TransferServerWorkflowDetails</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/transfer_server#workflow_details TransferServer#workflow_details}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.transferServer.TransferServerConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.transferServer.TransferServerConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.transferServer.TransferServerConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.transferServer.TransferServerConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.transferServer.TransferServerConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.transferServer.TransferServerConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.transferServer.TransferServerConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `certificate`<sup>Optional</sup> <a name="certificate" id="@cdktn/provider-awscc.transferServer.TransferServerConfig.property.certificate"></a>

```python
certificate: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/transfer_server#certificate TransferServer#certificate}.

---

##### `domain`<sup>Optional</sup> <a name="domain" id="@cdktn/provider-awscc.transferServer.TransferServerConfig.property.domain"></a>

```python
domain: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/transfer_server#domain TransferServer#domain}.

---

##### `endpoint_details`<sup>Optional</sup> <a name="endpoint_details" id="@cdktn/provider-awscc.transferServer.TransferServerConfig.property.endpointDetails"></a>

```python
endpoint_details: TransferServerEndpointDetails
```

- *Type:* <a href="#@cdktn/provider-awscc.transferServer.TransferServerEndpointDetails">TransferServerEndpointDetails</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/transfer_server#endpoint_details TransferServer#endpoint_details}.

---

##### `endpoint_type`<sup>Optional</sup> <a name="endpoint_type" id="@cdktn/provider-awscc.transferServer.TransferServerConfig.property.endpointType"></a>

```python
endpoint_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/transfer_server#endpoint_type TransferServer#endpoint_type}.

---

##### `identity_provider_details`<sup>Optional</sup> <a name="identity_provider_details" id="@cdktn/provider-awscc.transferServer.TransferServerConfig.property.identityProviderDetails"></a>

```python
identity_provider_details: TransferServerIdentityProviderDetails
```

- *Type:* <a href="#@cdktn/provider-awscc.transferServer.TransferServerIdentityProviderDetails">TransferServerIdentityProviderDetails</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/transfer_server#identity_provider_details TransferServer#identity_provider_details}.

---

##### `identity_provider_type`<sup>Optional</sup> <a name="identity_provider_type" id="@cdktn/provider-awscc.transferServer.TransferServerConfig.property.identityProviderType"></a>

```python
identity_provider_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/transfer_server#identity_provider_type TransferServer#identity_provider_type}.

---

##### `ip_address_type`<sup>Optional</sup> <a name="ip_address_type" id="@cdktn/provider-awscc.transferServer.TransferServerConfig.property.ipAddressType"></a>

```python
ip_address_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/transfer_server#ip_address_type TransferServer#ip_address_type}.

---

##### `logging_role`<sup>Optional</sup> <a name="logging_role" id="@cdktn/provider-awscc.transferServer.TransferServerConfig.property.loggingRole"></a>

```python
logging_role: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/transfer_server#logging_role TransferServer#logging_role}.

---

##### `post_authentication_login_banner`<sup>Optional</sup> <a name="post_authentication_login_banner" id="@cdktn/provider-awscc.transferServer.TransferServerConfig.property.postAuthenticationLoginBanner"></a>

```python
post_authentication_login_banner: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/transfer_server#post_authentication_login_banner TransferServer#post_authentication_login_banner}.

---

##### `pre_authentication_login_banner`<sup>Optional</sup> <a name="pre_authentication_login_banner" id="@cdktn/provider-awscc.transferServer.TransferServerConfig.property.preAuthenticationLoginBanner"></a>

```python
pre_authentication_login_banner: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/transfer_server#pre_authentication_login_banner TransferServer#pre_authentication_login_banner}.

---

##### `protocol_details`<sup>Optional</sup> <a name="protocol_details" id="@cdktn/provider-awscc.transferServer.TransferServerConfig.property.protocolDetails"></a>

```python
protocol_details: TransferServerProtocolDetails
```

- *Type:* <a href="#@cdktn/provider-awscc.transferServer.TransferServerProtocolDetails">TransferServerProtocolDetails</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/transfer_server#protocol_details TransferServer#protocol_details}.

---

##### `protocols`<sup>Optional</sup> <a name="protocols" id="@cdktn/provider-awscc.transferServer.TransferServerConfig.property.protocols"></a>

```python
protocols: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/transfer_server#protocols TransferServer#protocols}.

---

##### `s3_storage_options`<sup>Optional</sup> <a name="s3_storage_options" id="@cdktn/provider-awscc.transferServer.TransferServerConfig.property.s3StorageOptions"></a>

```python
s3_storage_options: TransferServerS3StorageOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.transferServer.TransferServerS3StorageOptions">TransferServerS3StorageOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/transfer_server#s3_storage_options TransferServer#s3_storage_options}.

---

##### `security_policy_name`<sup>Optional</sup> <a name="security_policy_name" id="@cdktn/provider-awscc.transferServer.TransferServerConfig.property.securityPolicyName"></a>

```python
security_policy_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/transfer_server#security_policy_name TransferServer#security_policy_name}.

---

##### `structured_log_destinations`<sup>Optional</sup> <a name="structured_log_destinations" id="@cdktn/provider-awscc.transferServer.TransferServerConfig.property.structuredLogDestinations"></a>

```python
structured_log_destinations: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/transfer_server#structured_log_destinations TransferServer#structured_log_destinations}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.transferServer.TransferServerConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[TransferServerTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.transferServer.TransferServerTags">TransferServerTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/transfer_server#tags TransferServer#tags}.

---

##### `workflow_details`<sup>Optional</sup> <a name="workflow_details" id="@cdktn/provider-awscc.transferServer.TransferServerConfig.property.workflowDetails"></a>

```python
workflow_details: TransferServerWorkflowDetails
```

- *Type:* <a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetails">TransferServerWorkflowDetails</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/transfer_server#workflow_details TransferServer#workflow_details}.

---

### TransferServerEndpointDetails <a name="TransferServerEndpointDetails" id="@cdktn/provider-awscc.transferServer.TransferServerEndpointDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transferServer.TransferServerEndpointDetails.Initializer"></a>

```python
from cdktn_provider_awscc import transfer_server

transferServer.TransferServerEndpointDetails(
  address_allocation_ids: typing.List[str] = None,
  security_group_ids: typing.List[str] = None,
  subnet_ids: typing.List[str] = None,
  vpc_endpoint_id: str = None,
  vpc_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerEndpointDetails.property.addressAllocationIds">address_allocation_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/transfer_server#address_allocation_ids TransferServer#address_allocation_ids}. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerEndpointDetails.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/transfer_server#security_group_ids TransferServer#security_group_ids}. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerEndpointDetails.property.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/transfer_server#subnet_ids TransferServer#subnet_ids}. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerEndpointDetails.property.vpcEndpointId">vpc_endpoint_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/transfer_server#vpc_endpoint_id TransferServer#vpc_endpoint_id}. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerEndpointDetails.property.vpcId">vpc_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/transfer_server#vpc_id TransferServer#vpc_id}. |

---

##### `address_allocation_ids`<sup>Optional</sup> <a name="address_allocation_ids" id="@cdktn/provider-awscc.transferServer.TransferServerEndpointDetails.property.addressAllocationIds"></a>

```python
address_allocation_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/transfer_server#address_allocation_ids TransferServer#address_allocation_ids}.

---

##### `security_group_ids`<sup>Optional</sup> <a name="security_group_ids" id="@cdktn/provider-awscc.transferServer.TransferServerEndpointDetails.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/transfer_server#security_group_ids TransferServer#security_group_ids}.

---

##### `subnet_ids`<sup>Optional</sup> <a name="subnet_ids" id="@cdktn/provider-awscc.transferServer.TransferServerEndpointDetails.property.subnetIds"></a>

```python
subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/transfer_server#subnet_ids TransferServer#subnet_ids}.

---

##### `vpc_endpoint_id`<sup>Optional</sup> <a name="vpc_endpoint_id" id="@cdktn/provider-awscc.transferServer.TransferServerEndpointDetails.property.vpcEndpointId"></a>

```python
vpc_endpoint_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/transfer_server#vpc_endpoint_id TransferServer#vpc_endpoint_id}.

---

##### `vpc_id`<sup>Optional</sup> <a name="vpc_id" id="@cdktn/provider-awscc.transferServer.TransferServerEndpointDetails.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/transfer_server#vpc_id TransferServer#vpc_id}.

---

### TransferServerIdentityProviderDetails <a name="TransferServerIdentityProviderDetails" id="@cdktn/provider-awscc.transferServer.TransferServerIdentityProviderDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transferServer.TransferServerIdentityProviderDetails.Initializer"></a>

```python
from cdktn_provider_awscc import transfer_server

transferServer.TransferServerIdentityProviderDetails(
  directory_id: str = None,
  function: str = None,
  invocation_role: str = None,
  sftp_authentication_methods: str = None,
  url: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerIdentityProviderDetails.property.directoryId">directory_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/transfer_server#directory_id TransferServer#directory_id}. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerIdentityProviderDetails.property.function">function</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/transfer_server#function TransferServer#function}. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerIdentityProviderDetails.property.invocationRole">invocation_role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/transfer_server#invocation_role TransferServer#invocation_role}. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerIdentityProviderDetails.property.sftpAuthenticationMethods">sftp_authentication_methods</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/transfer_server#sftp_authentication_methods TransferServer#sftp_authentication_methods}. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerIdentityProviderDetails.property.url">url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/transfer_server#url TransferServer#url}. |

---

##### `directory_id`<sup>Optional</sup> <a name="directory_id" id="@cdktn/provider-awscc.transferServer.TransferServerIdentityProviderDetails.property.directoryId"></a>

```python
directory_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/transfer_server#directory_id TransferServer#directory_id}.

---

##### `function`<sup>Optional</sup> <a name="function" id="@cdktn/provider-awscc.transferServer.TransferServerIdentityProviderDetails.property.function"></a>

```python
function: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/transfer_server#function TransferServer#function}.

---

##### `invocation_role`<sup>Optional</sup> <a name="invocation_role" id="@cdktn/provider-awscc.transferServer.TransferServerIdentityProviderDetails.property.invocationRole"></a>

```python
invocation_role: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/transfer_server#invocation_role TransferServer#invocation_role}.

---

##### `sftp_authentication_methods`<sup>Optional</sup> <a name="sftp_authentication_methods" id="@cdktn/provider-awscc.transferServer.TransferServerIdentityProviderDetails.property.sftpAuthenticationMethods"></a>

```python
sftp_authentication_methods: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/transfer_server#sftp_authentication_methods TransferServer#sftp_authentication_methods}.

---

##### `url`<sup>Optional</sup> <a name="url" id="@cdktn/provider-awscc.transferServer.TransferServerIdentityProviderDetails.property.url"></a>

```python
url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/transfer_server#url TransferServer#url}.

---

### TransferServerProtocolDetails <a name="TransferServerProtocolDetails" id="@cdktn/provider-awscc.transferServer.TransferServerProtocolDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transferServer.TransferServerProtocolDetails.Initializer"></a>

```python
from cdktn_provider_awscc import transfer_server

transferServer.TransferServerProtocolDetails(
  as2_transports: typing.List[str] = None,
  passive_ip: str = None,
  set_stat_option: str = None,
  tls_session_resumption_mode: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerProtocolDetails.property.as2Transports">as2_transports</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/transfer_server#as_2_transports TransferServer#as_2_transports}. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerProtocolDetails.property.passiveIp">passive_ip</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/transfer_server#passive_ip TransferServer#passive_ip}. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerProtocolDetails.property.setStatOption">set_stat_option</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/transfer_server#set_stat_option TransferServer#set_stat_option}. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerProtocolDetails.property.tlsSessionResumptionMode">tls_session_resumption_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/transfer_server#tls_session_resumption_mode TransferServer#tls_session_resumption_mode}. |

---

##### `as2_transports`<sup>Optional</sup> <a name="as2_transports" id="@cdktn/provider-awscc.transferServer.TransferServerProtocolDetails.property.as2Transports"></a>

```python
as2_transports: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/transfer_server#as_2_transports TransferServer#as_2_transports}.

---

##### `passive_ip`<sup>Optional</sup> <a name="passive_ip" id="@cdktn/provider-awscc.transferServer.TransferServerProtocolDetails.property.passiveIp"></a>

```python
passive_ip: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/transfer_server#passive_ip TransferServer#passive_ip}.

---

##### `set_stat_option`<sup>Optional</sup> <a name="set_stat_option" id="@cdktn/provider-awscc.transferServer.TransferServerProtocolDetails.property.setStatOption"></a>

```python
set_stat_option: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/transfer_server#set_stat_option TransferServer#set_stat_option}.

---

##### `tls_session_resumption_mode`<sup>Optional</sup> <a name="tls_session_resumption_mode" id="@cdktn/provider-awscc.transferServer.TransferServerProtocolDetails.property.tlsSessionResumptionMode"></a>

```python
tls_session_resumption_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/transfer_server#tls_session_resumption_mode TransferServer#tls_session_resumption_mode}.

---

### TransferServerS3StorageOptions <a name="TransferServerS3StorageOptions" id="@cdktn/provider-awscc.transferServer.TransferServerS3StorageOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transferServer.TransferServerS3StorageOptions.Initializer"></a>

```python
from cdktn_provider_awscc import transfer_server

transferServer.TransferServerS3StorageOptions(
  directory_listing_optimization: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerS3StorageOptions.property.directoryListingOptimization">directory_listing_optimization</a></code> | <code>str</code> | Indicates whether optimization to directory listing on S3 servers is used. Disabled by default for compatibility. |

---

##### `directory_listing_optimization`<sup>Optional</sup> <a name="directory_listing_optimization" id="@cdktn/provider-awscc.transferServer.TransferServerS3StorageOptions.property.directoryListingOptimization"></a>

```python
directory_listing_optimization: str
```

- *Type:* str

Indicates whether optimization to directory listing on S3 servers is used. Disabled by default for compatibility.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/transfer_server#directory_listing_optimization TransferServer#directory_listing_optimization}

---

### TransferServerTags <a name="TransferServerTags" id="@cdktn/provider-awscc.transferServer.TransferServerTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transferServer.TransferServerTags.Initializer"></a>

```python
from cdktn_provider_awscc import transfer_server

transferServer.TransferServerTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/transfer_server#key TransferServer#key}. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/transfer_server#value TransferServer#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.transferServer.TransferServerTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/transfer_server#key TransferServer#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.transferServer.TransferServerTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/transfer_server#value TransferServer#value}.

---

### TransferServerWorkflowDetails <a name="TransferServerWorkflowDetails" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetails.Initializer"></a>

```python
from cdktn_provider_awscc import transfer_server

transferServer.TransferServerWorkflowDetails(
  on_partial_upload: IResolvable | typing.List[TransferServerWorkflowDetailsOnPartialUpload] = None,
  on_upload: IResolvable | typing.List[TransferServerWorkflowDetailsOnUpload] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetails.property.onPartialUpload">on_partial_upload</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUpload">TransferServerWorkflowDetailsOnPartialUpload</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/transfer_server#on_partial_upload TransferServer#on_partial_upload}. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetails.property.onUpload">on_upload</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUpload">TransferServerWorkflowDetailsOnUpload</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/transfer_server#on_upload TransferServer#on_upload}. |

---

##### `on_partial_upload`<sup>Optional</sup> <a name="on_partial_upload" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetails.property.onPartialUpload"></a>

```python
on_partial_upload: IResolvable | typing.List[TransferServerWorkflowDetailsOnPartialUpload]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUpload">TransferServerWorkflowDetailsOnPartialUpload</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/transfer_server#on_partial_upload TransferServer#on_partial_upload}.

---

##### `on_upload`<sup>Optional</sup> <a name="on_upload" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetails.property.onUpload"></a>

```python
on_upload: IResolvable | typing.List[TransferServerWorkflowDetailsOnUpload]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUpload">TransferServerWorkflowDetailsOnUpload</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/transfer_server#on_upload TransferServer#on_upload}.

---

### TransferServerWorkflowDetailsOnPartialUpload <a name="TransferServerWorkflowDetailsOnPartialUpload" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUpload"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUpload.Initializer"></a>

```python
from cdktn_provider_awscc import transfer_server

transferServer.TransferServerWorkflowDetailsOnPartialUpload(
  execution_role: str = None,
  workflow_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUpload.property.executionRole">execution_role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/transfer_server#execution_role TransferServer#execution_role}. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUpload.property.workflowId">workflow_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/transfer_server#workflow_id TransferServer#workflow_id}. |

---

##### `execution_role`<sup>Optional</sup> <a name="execution_role" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUpload.property.executionRole"></a>

```python
execution_role: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/transfer_server#execution_role TransferServer#execution_role}.

---

##### `workflow_id`<sup>Optional</sup> <a name="workflow_id" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUpload.property.workflowId"></a>

```python
workflow_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/transfer_server#workflow_id TransferServer#workflow_id}.

---

### TransferServerWorkflowDetailsOnUpload <a name="TransferServerWorkflowDetailsOnUpload" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUpload"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUpload.Initializer"></a>

```python
from cdktn_provider_awscc import transfer_server

transferServer.TransferServerWorkflowDetailsOnUpload(
  execution_role: str = None,
  workflow_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUpload.property.executionRole">execution_role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/transfer_server#execution_role TransferServer#execution_role}. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUpload.property.workflowId">workflow_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/transfer_server#workflow_id TransferServer#workflow_id}. |

---

##### `execution_role`<sup>Optional</sup> <a name="execution_role" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUpload.property.executionRole"></a>

```python
execution_role: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/transfer_server#execution_role TransferServer#execution_role}.

---

##### `workflow_id`<sup>Optional</sup> <a name="workflow_id" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUpload.property.workflowId"></a>

```python
workflow_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/transfer_server#workflow_id TransferServer#workflow_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### TransferServerEndpointDetailsOutputReference <a name="TransferServerEndpointDetailsOutputReference" id="@cdktn/provider-awscc.transferServer.TransferServerEndpointDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transferServer.TransferServerEndpointDetailsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import transfer_server

transferServer.TransferServerEndpointDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerEndpointDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerEndpointDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.transferServer.TransferServerEndpointDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferServer.TransferServerEndpointDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerEndpointDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerEndpointDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerEndpointDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerEndpointDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerEndpointDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerEndpointDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerEndpointDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerEndpointDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerEndpointDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerEndpointDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerEndpointDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerEndpointDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerEndpointDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerEndpointDetailsOutputReference.resetAddressAllocationIds">reset_address_allocation_ids</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerEndpointDetailsOutputReference.resetSecurityGroupIds">reset_security_group_ids</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerEndpointDetailsOutputReference.resetSubnetIds">reset_subnet_ids</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerEndpointDetailsOutputReference.resetVpcEndpointId">reset_vpc_endpoint_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerEndpointDetailsOutputReference.resetVpcId">reset_vpc_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.transferServer.TransferServerEndpointDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.transferServer.TransferServerEndpointDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferServer.TransferServerEndpointDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.transferServer.TransferServerEndpointDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferServer.TransferServerEndpointDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.transferServer.TransferServerEndpointDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferServer.TransferServerEndpointDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.transferServer.TransferServerEndpointDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferServer.TransferServerEndpointDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.transferServer.TransferServerEndpointDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferServer.TransferServerEndpointDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.transferServer.TransferServerEndpointDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferServer.TransferServerEndpointDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.transferServer.TransferServerEndpointDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferServer.TransferServerEndpointDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.transferServer.TransferServerEndpointDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferServer.TransferServerEndpointDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.transferServer.TransferServerEndpointDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferServer.TransferServerEndpointDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.transferServer.TransferServerEndpointDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.transferServer.TransferServerEndpointDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.transferServer.TransferServerEndpointDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transferServer.TransferServerEndpointDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.transferServer.TransferServerEndpointDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_address_allocation_ids` <a name="reset_address_allocation_ids" id="@cdktn/provider-awscc.transferServer.TransferServerEndpointDetailsOutputReference.resetAddressAllocationIds"></a>

```python
def reset_address_allocation_ids() -> None
```

##### `reset_security_group_ids` <a name="reset_security_group_ids" id="@cdktn/provider-awscc.transferServer.TransferServerEndpointDetailsOutputReference.resetSecurityGroupIds"></a>

```python
def reset_security_group_ids() -> None
```

##### `reset_subnet_ids` <a name="reset_subnet_ids" id="@cdktn/provider-awscc.transferServer.TransferServerEndpointDetailsOutputReference.resetSubnetIds"></a>

```python
def reset_subnet_ids() -> None
```

##### `reset_vpc_endpoint_id` <a name="reset_vpc_endpoint_id" id="@cdktn/provider-awscc.transferServer.TransferServerEndpointDetailsOutputReference.resetVpcEndpointId"></a>

```python
def reset_vpc_endpoint_id() -> None
```

##### `reset_vpc_id` <a name="reset_vpc_id" id="@cdktn/provider-awscc.transferServer.TransferServerEndpointDetailsOutputReference.resetVpcId"></a>

```python
def reset_vpc_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerEndpointDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerEndpointDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerEndpointDetailsOutputReference.property.addressAllocationIdsInput">address_allocation_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerEndpointDetailsOutputReference.property.securityGroupIdsInput">security_group_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerEndpointDetailsOutputReference.property.subnetIdsInput">subnet_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerEndpointDetailsOutputReference.property.vpcEndpointIdInput">vpc_endpoint_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerEndpointDetailsOutputReference.property.vpcIdInput">vpc_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerEndpointDetailsOutputReference.property.addressAllocationIds">address_allocation_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerEndpointDetailsOutputReference.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerEndpointDetailsOutputReference.property.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerEndpointDetailsOutputReference.property.vpcEndpointId">vpc_endpoint_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerEndpointDetailsOutputReference.property.vpcId">vpc_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerEndpointDetailsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transferServer.TransferServerEndpointDetails">TransferServerEndpointDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.transferServer.TransferServerEndpointDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.transferServer.TransferServerEndpointDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `address_allocation_ids_input`<sup>Optional</sup> <a name="address_allocation_ids_input" id="@cdktn/provider-awscc.transferServer.TransferServerEndpointDetailsOutputReference.property.addressAllocationIdsInput"></a>

```python
address_allocation_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `security_group_ids_input`<sup>Optional</sup> <a name="security_group_ids_input" id="@cdktn/provider-awscc.transferServer.TransferServerEndpointDetailsOutputReference.property.securityGroupIdsInput"></a>

```python
security_group_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_ids_input`<sup>Optional</sup> <a name="subnet_ids_input" id="@cdktn/provider-awscc.transferServer.TransferServerEndpointDetailsOutputReference.property.subnetIdsInput"></a>

```python
subnet_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `vpc_endpoint_id_input`<sup>Optional</sup> <a name="vpc_endpoint_id_input" id="@cdktn/provider-awscc.transferServer.TransferServerEndpointDetailsOutputReference.property.vpcEndpointIdInput"></a>

```python
vpc_endpoint_id_input: str
```

- *Type:* str

---

##### `vpc_id_input`<sup>Optional</sup> <a name="vpc_id_input" id="@cdktn/provider-awscc.transferServer.TransferServerEndpointDetailsOutputReference.property.vpcIdInput"></a>

```python
vpc_id_input: str
```

- *Type:* str

---

##### `address_allocation_ids`<sup>Required</sup> <a name="address_allocation_ids" id="@cdktn/provider-awscc.transferServer.TransferServerEndpointDetailsOutputReference.property.addressAllocationIds"></a>

```python
address_allocation_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `security_group_ids`<sup>Required</sup> <a name="security_group_ids" id="@cdktn/provider-awscc.transferServer.TransferServerEndpointDetailsOutputReference.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_ids`<sup>Required</sup> <a name="subnet_ids" id="@cdktn/provider-awscc.transferServer.TransferServerEndpointDetailsOutputReference.property.subnetIds"></a>

```python
subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `vpc_endpoint_id`<sup>Required</sup> <a name="vpc_endpoint_id" id="@cdktn/provider-awscc.transferServer.TransferServerEndpointDetailsOutputReference.property.vpcEndpointId"></a>

```python
vpc_endpoint_id: str
```

- *Type:* str

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktn/provider-awscc.transferServer.TransferServerEndpointDetailsOutputReference.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.transferServer.TransferServerEndpointDetailsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | TransferServerEndpointDetails
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transferServer.TransferServerEndpointDetails">TransferServerEndpointDetails</a>

---


### TransferServerIdentityProviderDetailsOutputReference <a name="TransferServerIdentityProviderDetailsOutputReference" id="@cdktn/provider-awscc.transferServer.TransferServerIdentityProviderDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transferServer.TransferServerIdentityProviderDetailsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import transfer_server

transferServer.TransferServerIdentityProviderDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerIdentityProviderDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerIdentityProviderDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.transferServer.TransferServerIdentityProviderDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferServer.TransferServerIdentityProviderDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerIdentityProviderDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerIdentityProviderDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerIdentityProviderDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerIdentityProviderDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerIdentityProviderDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerIdentityProviderDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerIdentityProviderDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerIdentityProviderDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerIdentityProviderDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerIdentityProviderDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerIdentityProviderDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerIdentityProviderDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerIdentityProviderDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerIdentityProviderDetailsOutputReference.resetDirectoryId">reset_directory_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerIdentityProviderDetailsOutputReference.resetFunction">reset_function</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerIdentityProviderDetailsOutputReference.resetInvocationRole">reset_invocation_role</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerIdentityProviderDetailsOutputReference.resetSftpAuthenticationMethods">reset_sftp_authentication_methods</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerIdentityProviderDetailsOutputReference.resetUrl">reset_url</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.transferServer.TransferServerIdentityProviderDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.transferServer.TransferServerIdentityProviderDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferServer.TransferServerIdentityProviderDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.transferServer.TransferServerIdentityProviderDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferServer.TransferServerIdentityProviderDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.transferServer.TransferServerIdentityProviderDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferServer.TransferServerIdentityProviderDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.transferServer.TransferServerIdentityProviderDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferServer.TransferServerIdentityProviderDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.transferServer.TransferServerIdentityProviderDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferServer.TransferServerIdentityProviderDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.transferServer.TransferServerIdentityProviderDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferServer.TransferServerIdentityProviderDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.transferServer.TransferServerIdentityProviderDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferServer.TransferServerIdentityProviderDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.transferServer.TransferServerIdentityProviderDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferServer.TransferServerIdentityProviderDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.transferServer.TransferServerIdentityProviderDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferServer.TransferServerIdentityProviderDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.transferServer.TransferServerIdentityProviderDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.transferServer.TransferServerIdentityProviderDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.transferServer.TransferServerIdentityProviderDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transferServer.TransferServerIdentityProviderDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.transferServer.TransferServerIdentityProviderDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_directory_id` <a name="reset_directory_id" id="@cdktn/provider-awscc.transferServer.TransferServerIdentityProviderDetailsOutputReference.resetDirectoryId"></a>

```python
def reset_directory_id() -> None
```

##### `reset_function` <a name="reset_function" id="@cdktn/provider-awscc.transferServer.TransferServerIdentityProviderDetailsOutputReference.resetFunction"></a>

```python
def reset_function() -> None
```

##### `reset_invocation_role` <a name="reset_invocation_role" id="@cdktn/provider-awscc.transferServer.TransferServerIdentityProviderDetailsOutputReference.resetInvocationRole"></a>

```python
def reset_invocation_role() -> None
```

##### `reset_sftp_authentication_methods` <a name="reset_sftp_authentication_methods" id="@cdktn/provider-awscc.transferServer.TransferServerIdentityProviderDetailsOutputReference.resetSftpAuthenticationMethods"></a>

```python
def reset_sftp_authentication_methods() -> None
```

##### `reset_url` <a name="reset_url" id="@cdktn/provider-awscc.transferServer.TransferServerIdentityProviderDetailsOutputReference.resetUrl"></a>

```python
def reset_url() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerIdentityProviderDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerIdentityProviderDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerIdentityProviderDetailsOutputReference.property.directoryIdInput">directory_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerIdentityProviderDetailsOutputReference.property.functionInput">function_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerIdentityProviderDetailsOutputReference.property.invocationRoleInput">invocation_role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerIdentityProviderDetailsOutputReference.property.sftpAuthenticationMethodsInput">sftp_authentication_methods_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerIdentityProviderDetailsOutputReference.property.urlInput">url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerIdentityProviderDetailsOutputReference.property.directoryId">directory_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerIdentityProviderDetailsOutputReference.property.function">function</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerIdentityProviderDetailsOutputReference.property.invocationRole">invocation_role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerIdentityProviderDetailsOutputReference.property.sftpAuthenticationMethods">sftp_authentication_methods</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerIdentityProviderDetailsOutputReference.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerIdentityProviderDetailsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transferServer.TransferServerIdentityProviderDetails">TransferServerIdentityProviderDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.transferServer.TransferServerIdentityProviderDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.transferServer.TransferServerIdentityProviderDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `directory_id_input`<sup>Optional</sup> <a name="directory_id_input" id="@cdktn/provider-awscc.transferServer.TransferServerIdentityProviderDetailsOutputReference.property.directoryIdInput"></a>

```python
directory_id_input: str
```

- *Type:* str

---

##### `function_input`<sup>Optional</sup> <a name="function_input" id="@cdktn/provider-awscc.transferServer.TransferServerIdentityProviderDetailsOutputReference.property.functionInput"></a>

```python
function_input: str
```

- *Type:* str

---

##### `invocation_role_input`<sup>Optional</sup> <a name="invocation_role_input" id="@cdktn/provider-awscc.transferServer.TransferServerIdentityProviderDetailsOutputReference.property.invocationRoleInput"></a>

```python
invocation_role_input: str
```

- *Type:* str

---

##### `sftp_authentication_methods_input`<sup>Optional</sup> <a name="sftp_authentication_methods_input" id="@cdktn/provider-awscc.transferServer.TransferServerIdentityProviderDetailsOutputReference.property.sftpAuthenticationMethodsInput"></a>

```python
sftp_authentication_methods_input: str
```

- *Type:* str

---

##### `url_input`<sup>Optional</sup> <a name="url_input" id="@cdktn/provider-awscc.transferServer.TransferServerIdentityProviderDetailsOutputReference.property.urlInput"></a>

```python
url_input: str
```

- *Type:* str

---

##### `directory_id`<sup>Required</sup> <a name="directory_id" id="@cdktn/provider-awscc.transferServer.TransferServerIdentityProviderDetailsOutputReference.property.directoryId"></a>

```python
directory_id: str
```

- *Type:* str

---

##### `function`<sup>Required</sup> <a name="function" id="@cdktn/provider-awscc.transferServer.TransferServerIdentityProviderDetailsOutputReference.property.function"></a>

```python
function: str
```

- *Type:* str

---

##### `invocation_role`<sup>Required</sup> <a name="invocation_role" id="@cdktn/provider-awscc.transferServer.TransferServerIdentityProviderDetailsOutputReference.property.invocationRole"></a>

```python
invocation_role: str
```

- *Type:* str

---

##### `sftp_authentication_methods`<sup>Required</sup> <a name="sftp_authentication_methods" id="@cdktn/provider-awscc.transferServer.TransferServerIdentityProviderDetailsOutputReference.property.sftpAuthenticationMethods"></a>

```python
sftp_authentication_methods: str
```

- *Type:* str

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-awscc.transferServer.TransferServerIdentityProviderDetailsOutputReference.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.transferServer.TransferServerIdentityProviderDetailsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | TransferServerIdentityProviderDetails
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transferServer.TransferServerIdentityProviderDetails">TransferServerIdentityProviderDetails</a>

---


### TransferServerProtocolDetailsOutputReference <a name="TransferServerProtocolDetailsOutputReference" id="@cdktn/provider-awscc.transferServer.TransferServerProtocolDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transferServer.TransferServerProtocolDetailsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import transfer_server

transferServer.TransferServerProtocolDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerProtocolDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerProtocolDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.transferServer.TransferServerProtocolDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferServer.TransferServerProtocolDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerProtocolDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerProtocolDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerProtocolDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerProtocolDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerProtocolDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerProtocolDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerProtocolDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerProtocolDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerProtocolDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerProtocolDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerProtocolDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerProtocolDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerProtocolDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerProtocolDetailsOutputReference.resetAs2Transports">reset_as2_transports</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerProtocolDetailsOutputReference.resetPassiveIp">reset_passive_ip</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerProtocolDetailsOutputReference.resetSetStatOption">reset_set_stat_option</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerProtocolDetailsOutputReference.resetTlsSessionResumptionMode">reset_tls_session_resumption_mode</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.transferServer.TransferServerProtocolDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.transferServer.TransferServerProtocolDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferServer.TransferServerProtocolDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.transferServer.TransferServerProtocolDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferServer.TransferServerProtocolDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.transferServer.TransferServerProtocolDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferServer.TransferServerProtocolDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.transferServer.TransferServerProtocolDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferServer.TransferServerProtocolDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.transferServer.TransferServerProtocolDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferServer.TransferServerProtocolDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.transferServer.TransferServerProtocolDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferServer.TransferServerProtocolDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.transferServer.TransferServerProtocolDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferServer.TransferServerProtocolDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.transferServer.TransferServerProtocolDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferServer.TransferServerProtocolDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.transferServer.TransferServerProtocolDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferServer.TransferServerProtocolDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.transferServer.TransferServerProtocolDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.transferServer.TransferServerProtocolDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.transferServer.TransferServerProtocolDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transferServer.TransferServerProtocolDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.transferServer.TransferServerProtocolDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_as2_transports` <a name="reset_as2_transports" id="@cdktn/provider-awscc.transferServer.TransferServerProtocolDetailsOutputReference.resetAs2Transports"></a>

```python
def reset_as2_transports() -> None
```

##### `reset_passive_ip` <a name="reset_passive_ip" id="@cdktn/provider-awscc.transferServer.TransferServerProtocolDetailsOutputReference.resetPassiveIp"></a>

```python
def reset_passive_ip() -> None
```

##### `reset_set_stat_option` <a name="reset_set_stat_option" id="@cdktn/provider-awscc.transferServer.TransferServerProtocolDetailsOutputReference.resetSetStatOption"></a>

```python
def reset_set_stat_option() -> None
```

##### `reset_tls_session_resumption_mode` <a name="reset_tls_session_resumption_mode" id="@cdktn/provider-awscc.transferServer.TransferServerProtocolDetailsOutputReference.resetTlsSessionResumptionMode"></a>

```python
def reset_tls_session_resumption_mode() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerProtocolDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerProtocolDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerProtocolDetailsOutputReference.property.as2TransportsInput">as2_transports_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerProtocolDetailsOutputReference.property.passiveIpInput">passive_ip_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerProtocolDetailsOutputReference.property.setStatOptionInput">set_stat_option_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerProtocolDetailsOutputReference.property.tlsSessionResumptionModeInput">tls_session_resumption_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerProtocolDetailsOutputReference.property.as2Transports">as2_transports</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerProtocolDetailsOutputReference.property.passiveIp">passive_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerProtocolDetailsOutputReference.property.setStatOption">set_stat_option</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerProtocolDetailsOutputReference.property.tlsSessionResumptionMode">tls_session_resumption_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerProtocolDetailsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transferServer.TransferServerProtocolDetails">TransferServerProtocolDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.transferServer.TransferServerProtocolDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.transferServer.TransferServerProtocolDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `as2_transports_input`<sup>Optional</sup> <a name="as2_transports_input" id="@cdktn/provider-awscc.transferServer.TransferServerProtocolDetailsOutputReference.property.as2TransportsInput"></a>

```python
as2_transports_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `passive_ip_input`<sup>Optional</sup> <a name="passive_ip_input" id="@cdktn/provider-awscc.transferServer.TransferServerProtocolDetailsOutputReference.property.passiveIpInput"></a>

```python
passive_ip_input: str
```

- *Type:* str

---

##### `set_stat_option_input`<sup>Optional</sup> <a name="set_stat_option_input" id="@cdktn/provider-awscc.transferServer.TransferServerProtocolDetailsOutputReference.property.setStatOptionInput"></a>

```python
set_stat_option_input: str
```

- *Type:* str

---

##### `tls_session_resumption_mode_input`<sup>Optional</sup> <a name="tls_session_resumption_mode_input" id="@cdktn/provider-awscc.transferServer.TransferServerProtocolDetailsOutputReference.property.tlsSessionResumptionModeInput"></a>

```python
tls_session_resumption_mode_input: str
```

- *Type:* str

---

##### `as2_transports`<sup>Required</sup> <a name="as2_transports" id="@cdktn/provider-awscc.transferServer.TransferServerProtocolDetailsOutputReference.property.as2Transports"></a>

```python
as2_transports: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `passive_ip`<sup>Required</sup> <a name="passive_ip" id="@cdktn/provider-awscc.transferServer.TransferServerProtocolDetailsOutputReference.property.passiveIp"></a>

```python
passive_ip: str
```

- *Type:* str

---

##### `set_stat_option`<sup>Required</sup> <a name="set_stat_option" id="@cdktn/provider-awscc.transferServer.TransferServerProtocolDetailsOutputReference.property.setStatOption"></a>

```python
set_stat_option: str
```

- *Type:* str

---

##### `tls_session_resumption_mode`<sup>Required</sup> <a name="tls_session_resumption_mode" id="@cdktn/provider-awscc.transferServer.TransferServerProtocolDetailsOutputReference.property.tlsSessionResumptionMode"></a>

```python
tls_session_resumption_mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.transferServer.TransferServerProtocolDetailsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | TransferServerProtocolDetails
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transferServer.TransferServerProtocolDetails">TransferServerProtocolDetails</a>

---


### TransferServerS3StorageOptionsOutputReference <a name="TransferServerS3StorageOptionsOutputReference" id="@cdktn/provider-awscc.transferServer.TransferServerS3StorageOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transferServer.TransferServerS3StorageOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import transfer_server

transferServer.TransferServerS3StorageOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerS3StorageOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerS3StorageOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.transferServer.TransferServerS3StorageOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferServer.TransferServerS3StorageOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerS3StorageOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerS3StorageOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerS3StorageOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerS3StorageOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerS3StorageOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerS3StorageOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerS3StorageOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerS3StorageOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerS3StorageOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerS3StorageOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerS3StorageOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerS3StorageOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerS3StorageOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerS3StorageOptionsOutputReference.resetDirectoryListingOptimization">reset_directory_listing_optimization</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.transferServer.TransferServerS3StorageOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.transferServer.TransferServerS3StorageOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferServer.TransferServerS3StorageOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.transferServer.TransferServerS3StorageOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferServer.TransferServerS3StorageOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.transferServer.TransferServerS3StorageOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferServer.TransferServerS3StorageOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.transferServer.TransferServerS3StorageOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferServer.TransferServerS3StorageOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.transferServer.TransferServerS3StorageOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferServer.TransferServerS3StorageOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.transferServer.TransferServerS3StorageOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferServer.TransferServerS3StorageOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.transferServer.TransferServerS3StorageOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferServer.TransferServerS3StorageOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.transferServer.TransferServerS3StorageOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferServer.TransferServerS3StorageOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.transferServer.TransferServerS3StorageOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferServer.TransferServerS3StorageOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.transferServer.TransferServerS3StorageOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.transferServer.TransferServerS3StorageOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.transferServer.TransferServerS3StorageOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transferServer.TransferServerS3StorageOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.transferServer.TransferServerS3StorageOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_directory_listing_optimization` <a name="reset_directory_listing_optimization" id="@cdktn/provider-awscc.transferServer.TransferServerS3StorageOptionsOutputReference.resetDirectoryListingOptimization"></a>

```python
def reset_directory_listing_optimization() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerS3StorageOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerS3StorageOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerS3StorageOptionsOutputReference.property.directoryListingOptimizationInput">directory_listing_optimization_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerS3StorageOptionsOutputReference.property.directoryListingOptimization">directory_listing_optimization</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerS3StorageOptionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transferServer.TransferServerS3StorageOptions">TransferServerS3StorageOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.transferServer.TransferServerS3StorageOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.transferServer.TransferServerS3StorageOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `directory_listing_optimization_input`<sup>Optional</sup> <a name="directory_listing_optimization_input" id="@cdktn/provider-awscc.transferServer.TransferServerS3StorageOptionsOutputReference.property.directoryListingOptimizationInput"></a>

```python
directory_listing_optimization_input: str
```

- *Type:* str

---

##### `directory_listing_optimization`<sup>Required</sup> <a name="directory_listing_optimization" id="@cdktn/provider-awscc.transferServer.TransferServerS3StorageOptionsOutputReference.property.directoryListingOptimization"></a>

```python
directory_listing_optimization: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.transferServer.TransferServerS3StorageOptionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | TransferServerS3StorageOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transferServer.TransferServerS3StorageOptions">TransferServerS3StorageOptions</a>

---


### TransferServerTagsList <a name="TransferServerTagsList" id="@cdktn/provider-awscc.transferServer.TransferServerTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transferServer.TransferServerTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import transfer_server

transferServer.TransferServerTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.transferServer.TransferServerTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferServer.TransferServerTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.transferServer.TransferServerTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.transferServer.TransferServerTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.transferServer.TransferServerTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.transferServer.TransferServerTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.transferServer.TransferServerTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transferServer.TransferServerTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.transferServer.TransferServerTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.transferServer.TransferServerTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> TransferServerTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.transferServer.TransferServerTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.transferServer.TransferServerTags">TransferServerTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.transferServer.TransferServerTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.transferServer.TransferServerTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.transferServer.TransferServerTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[TransferServerTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.transferServer.TransferServerTags">TransferServerTags</a>]

---


### TransferServerTagsOutputReference <a name="TransferServerTagsOutputReference" id="@cdktn/provider-awscc.transferServer.TransferServerTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transferServer.TransferServerTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import transfer_server

transferServer.TransferServerTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.transferServer.TransferServerTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferServer.TransferServerTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.transferServer.TransferServerTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.transferServer.TransferServerTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.transferServer.TransferServerTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.transferServer.TransferServerTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferServer.TransferServerTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.transferServer.TransferServerTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferServer.TransferServerTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.transferServer.TransferServerTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferServer.TransferServerTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.transferServer.TransferServerTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferServer.TransferServerTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.transferServer.TransferServerTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferServer.TransferServerTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.transferServer.TransferServerTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferServer.TransferServerTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.transferServer.TransferServerTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferServer.TransferServerTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.transferServer.TransferServerTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferServer.TransferServerTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.transferServer.TransferServerTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferServer.TransferServerTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.transferServer.TransferServerTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.transferServer.TransferServerTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.transferServer.TransferServerTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transferServer.TransferServerTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.transferServer.TransferServerTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.transferServer.TransferServerTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.transferServer.TransferServerTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transferServer.TransferServerTags">TransferServerTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.transferServer.TransferServerTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.transferServer.TransferServerTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.transferServer.TransferServerTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.transferServer.TransferServerTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.transferServer.TransferServerTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.transferServer.TransferServerTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.transferServer.TransferServerTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | TransferServerTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transferServer.TransferServerTags">TransferServerTags</a>

---


### TransferServerWorkflowDetailsOnPartialUploadList <a name="TransferServerWorkflowDetailsOnPartialUploadList" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUploadList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUploadList.Initializer"></a>

```python
from cdktn_provider_awscc import transfer_server

transferServer.TransferServerWorkflowDetailsOnPartialUploadList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUploadList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUploadList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUploadList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUploadList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUploadList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUploadList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUploadList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUploadList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUploadList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUploadList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUploadList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUploadList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUploadList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUploadList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUploadList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUploadList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUploadList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUploadList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> TransferServerWorkflowDetailsOnPartialUploadOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUploadList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUploadList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUploadList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUploadList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUpload">TransferServerWorkflowDetailsOnPartialUpload</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUploadList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUploadList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUploadList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[TransferServerWorkflowDetailsOnPartialUpload]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUpload">TransferServerWorkflowDetailsOnPartialUpload</a>]

---


### TransferServerWorkflowDetailsOnPartialUploadOutputReference <a name="TransferServerWorkflowDetailsOnPartialUploadOutputReference" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import transfer_server

transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.resetExecutionRole">reset_execution_role</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.resetWorkflowId">reset_workflow_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_execution_role` <a name="reset_execution_role" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.resetExecutionRole"></a>

```python
def reset_execution_role() -> None
```

##### `reset_workflow_id` <a name="reset_workflow_id" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.resetWorkflowId"></a>

```python
def reset_workflow_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.property.executionRoleInput">execution_role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.property.workflowIdInput">workflow_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.property.executionRole">execution_role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.property.workflowId">workflow_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUpload">TransferServerWorkflowDetailsOnPartialUpload</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `execution_role_input`<sup>Optional</sup> <a name="execution_role_input" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.property.executionRoleInput"></a>

```python
execution_role_input: str
```

- *Type:* str

---

##### `workflow_id_input`<sup>Optional</sup> <a name="workflow_id_input" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.property.workflowIdInput"></a>

```python
workflow_id_input: str
```

- *Type:* str

---

##### `execution_role`<sup>Required</sup> <a name="execution_role" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.property.executionRole"></a>

```python
execution_role: str
```

- *Type:* str

---

##### `workflow_id`<sup>Required</sup> <a name="workflow_id" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.property.workflowId"></a>

```python
workflow_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | TransferServerWorkflowDetailsOnPartialUpload
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUpload">TransferServerWorkflowDetailsOnPartialUpload</a>

---


### TransferServerWorkflowDetailsOnUploadList <a name="TransferServerWorkflowDetailsOnUploadList" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUploadList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUploadList.Initializer"></a>

```python
from cdktn_provider_awscc import transfer_server

transferServer.TransferServerWorkflowDetailsOnUploadList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUploadList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUploadList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUploadList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUploadList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUploadList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUploadList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUploadList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUploadList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUploadList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUploadList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUploadList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUploadList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUploadList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUploadList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUploadList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUploadList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUploadList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUploadList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> TransferServerWorkflowDetailsOnUploadOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUploadList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUploadList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUploadList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUploadList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUpload">TransferServerWorkflowDetailsOnUpload</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUploadList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUploadList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUploadList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[TransferServerWorkflowDetailsOnUpload]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUpload">TransferServerWorkflowDetailsOnUpload</a>]

---


### TransferServerWorkflowDetailsOnUploadOutputReference <a name="TransferServerWorkflowDetailsOnUploadOutputReference" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import transfer_server

transferServer.TransferServerWorkflowDetailsOnUploadOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.resetExecutionRole">reset_execution_role</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.resetWorkflowId">reset_workflow_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_execution_role` <a name="reset_execution_role" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.resetExecutionRole"></a>

```python
def reset_execution_role() -> None
```

##### `reset_workflow_id` <a name="reset_workflow_id" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.resetWorkflowId"></a>

```python
def reset_workflow_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.property.executionRoleInput">execution_role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.property.workflowIdInput">workflow_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.property.executionRole">execution_role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.property.workflowId">workflow_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUpload">TransferServerWorkflowDetailsOnUpload</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `execution_role_input`<sup>Optional</sup> <a name="execution_role_input" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.property.executionRoleInput"></a>

```python
execution_role_input: str
```

- *Type:* str

---

##### `workflow_id_input`<sup>Optional</sup> <a name="workflow_id_input" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.property.workflowIdInput"></a>

```python
workflow_id_input: str
```

- *Type:* str

---

##### `execution_role`<sup>Required</sup> <a name="execution_role" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.property.executionRole"></a>

```python
execution_role: str
```

- *Type:* str

---

##### `workflow_id`<sup>Required</sup> <a name="workflow_id" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.property.workflowId"></a>

```python
workflow_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | TransferServerWorkflowDetailsOnUpload
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUpload">TransferServerWorkflowDetailsOnUpload</a>

---


### TransferServerWorkflowDetailsOutputReference <a name="TransferServerWorkflowDetailsOutputReference" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import transfer_server

transferServer.TransferServerWorkflowDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOutputReference.putOnPartialUpload">put_on_partial_upload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOutputReference.putOnUpload">put_on_upload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOutputReference.resetOnPartialUpload">reset_on_partial_upload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOutputReference.resetOnUpload">reset_on_upload</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_on_partial_upload` <a name="put_on_partial_upload" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOutputReference.putOnPartialUpload"></a>

```python
def put_on_partial_upload(
  value: IResolvable | typing.List[TransferServerWorkflowDetailsOnPartialUpload]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOutputReference.putOnPartialUpload.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUpload">TransferServerWorkflowDetailsOnPartialUpload</a>]

---

##### `put_on_upload` <a name="put_on_upload" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOutputReference.putOnUpload"></a>

```python
def put_on_upload(
  value: IResolvable | typing.List[TransferServerWorkflowDetailsOnUpload]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOutputReference.putOnUpload.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUpload">TransferServerWorkflowDetailsOnUpload</a>]

---

##### `reset_on_partial_upload` <a name="reset_on_partial_upload" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOutputReference.resetOnPartialUpload"></a>

```python
def reset_on_partial_upload() -> None
```

##### `reset_on_upload` <a name="reset_on_upload" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOutputReference.resetOnUpload"></a>

```python
def reset_on_upload() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOutputReference.property.onPartialUpload">on_partial_upload</a></code> | <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUploadList">TransferServerWorkflowDetailsOnPartialUploadList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOutputReference.property.onUpload">on_upload</a></code> | <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUploadList">TransferServerWorkflowDetailsOnUploadList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOutputReference.property.onPartialUploadInput">on_partial_upload_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUpload">TransferServerWorkflowDetailsOnPartialUpload</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOutputReference.property.onUploadInput">on_upload_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUpload">TransferServerWorkflowDetailsOnUpload</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetails">TransferServerWorkflowDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `on_partial_upload`<sup>Required</sup> <a name="on_partial_upload" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOutputReference.property.onPartialUpload"></a>

```python
on_partial_upload: TransferServerWorkflowDetailsOnPartialUploadList
```

- *Type:* <a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUploadList">TransferServerWorkflowDetailsOnPartialUploadList</a>

---

##### `on_upload`<sup>Required</sup> <a name="on_upload" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOutputReference.property.onUpload"></a>

```python
on_upload: TransferServerWorkflowDetailsOnUploadList
```

- *Type:* <a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUploadList">TransferServerWorkflowDetailsOnUploadList</a>

---

##### `on_partial_upload_input`<sup>Optional</sup> <a name="on_partial_upload_input" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOutputReference.property.onPartialUploadInput"></a>

```python
on_partial_upload_input: IResolvable | typing.List[TransferServerWorkflowDetailsOnPartialUpload]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnPartialUpload">TransferServerWorkflowDetailsOnPartialUpload</a>]

---

##### `on_upload_input`<sup>Optional</sup> <a name="on_upload_input" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOutputReference.property.onUploadInput"></a>

```python
on_upload_input: IResolvable | typing.List[TransferServerWorkflowDetailsOnUpload]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOnUpload">TransferServerWorkflowDetailsOnUpload</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetailsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | TransferServerWorkflowDetails
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transferServer.TransferServerWorkflowDetails">TransferServerWorkflowDetails</a>

---



