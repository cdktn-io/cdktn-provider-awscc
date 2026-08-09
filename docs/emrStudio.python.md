# `emrStudio` Submodule <a name="`emrStudio` Submodule" id="@cdktn/provider-awscc.emrStudio"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EmrStudio <a name="EmrStudio" id="@cdktn/provider-awscc.emrStudio.EmrStudio"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/emr_studio awscc_emr_studio}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.emrStudio.EmrStudio.Initializer"></a>

```python
from cdktn_provider_awscc import emr_studio

emrStudio.EmrStudio(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  auth_mode: str,
  default_s3_location: str,
  engine_security_group_id: str,
  name: str,
  service_role: str,
  subnet_ids: typing.List[str],
  vpc_id: str,
  workspace_security_group_id: str,
  description: str = None,
  encryption_key_arn: str = None,
  idc_instance_arn: str = None,
  idc_user_assignment: str = None,
  idp_auth_url: str = None,
  idp_relay_state_parameter_name: str = None,
  tags: IResolvable | typing.List[EmrStudioTags] = None,
  trusted_identity_propagation_enabled: bool | IResolvable = None,
  user_role: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.Initializer.parameter.authMode">auth_mode</a></code> | <code>str</code> | Specifies whether the Studio authenticates users using single sign-on (SSO) or IAM. |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.Initializer.parameter.defaultS3Location">default_s3_location</a></code> | <code>str</code> | The default Amazon S3 location to back up EMR Studio Workspaces and notebook files. |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.Initializer.parameter.engineSecurityGroupId">engine_security_group_id</a></code> | <code>str</code> | The ID of the Amazon EMR Studio Engine security group. |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.Initializer.parameter.name">name</a></code> | <code>str</code> | A descriptive name for the Amazon EMR Studio. |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.Initializer.parameter.serviceRole">service_role</a></code> | <code>str</code> | The IAM role that will be assumed by the Amazon EMR Studio. |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.Initializer.parameter.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | A list of up to 5 subnet IDs to associate with the Studio. |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.Initializer.parameter.vpcId">vpc_id</a></code> | <code>str</code> | The ID of the Amazon Virtual Private Cloud (Amazon VPC) to associate with the Studio. |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.Initializer.parameter.workspaceSecurityGroupId">workspace_security_group_id</a></code> | <code>str</code> | The ID of the Amazon EMR Studio Workspace security group. |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.Initializer.parameter.description">description</a></code> | <code>str</code> | A detailed description of the Studio. |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.Initializer.parameter.encryptionKeyArn">encryption_key_arn</a></code> | <code>str</code> | The AWS KMS key identifier (ARN) used to encrypt AWS EMR Studio workspace and notebook files when backed up to AWS S3. |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.Initializer.parameter.idcInstanceArn">idc_instance_arn</a></code> | <code>str</code> | The ARN of the IAM Identity Center instance to create the Studio application. |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.Initializer.parameter.idcUserAssignment">idc_user_assignment</a></code> | <code>str</code> | Specifies whether IAM Identity Center user assignment is REQUIRED or OPTIONAL. |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.Initializer.parameter.idpAuthUrl">idp_auth_url</a></code> | <code>str</code> | Your identity provider's authentication endpoint. |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.Initializer.parameter.idpRelayStateParameterName">idp_relay_state_parameter_name</a></code> | <code>str</code> | The name of relay state parameter for external Identity Provider. |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTags">EmrStudioTags</a>]</code> | A list of tags to associate with the Studio. |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.Initializer.parameter.trustedIdentityPropagationEnabled">trusted_identity_propagation_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | A Boolean indicating whether to enable Trusted identity propagation for the Studio. The default value is false. |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.Initializer.parameter.userRole">user_role</a></code> | <code>str</code> | The IAM user role that will be assumed by users and groups logged in to a Studio. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.emrStudio.EmrStudio.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.emrStudio.EmrStudio.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.emrStudio.EmrStudio.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.emrStudio.EmrStudio.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.emrStudio.EmrStudio.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.emrStudio.EmrStudio.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.emrStudio.EmrStudio.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.emrStudio.EmrStudio.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.emrStudio.EmrStudio.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `auth_mode`<sup>Required</sup> <a name="auth_mode" id="@cdktn/provider-awscc.emrStudio.EmrStudio.Initializer.parameter.authMode"></a>

- *Type:* str

Specifies whether the Studio authenticates users using single sign-on (SSO) or IAM.

Amazon EMR Studio currently only supports SSO authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/emr_studio#auth_mode EmrStudio#auth_mode}

---

##### `default_s3_location`<sup>Required</sup> <a name="default_s3_location" id="@cdktn/provider-awscc.emrStudio.EmrStudio.Initializer.parameter.defaultS3Location"></a>

- *Type:* str

The default Amazon S3 location to back up EMR Studio Workspaces and notebook files.

A Studio user can select an alternative Amazon S3 location when creating a Workspace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/emr_studio#default_s3_location EmrStudio#default_s3_location}

---

##### `engine_security_group_id`<sup>Required</sup> <a name="engine_security_group_id" id="@cdktn/provider-awscc.emrStudio.EmrStudio.Initializer.parameter.engineSecurityGroupId"></a>

- *Type:* str

The ID of the Amazon EMR Studio Engine security group.

The Engine security group allows inbound network traffic from the Workspace security group, and it must be in the same VPC specified by VpcId.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/emr_studio#engine_security_group_id EmrStudio#engine_security_group_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.emrStudio.EmrStudio.Initializer.parameter.name"></a>

- *Type:* str

A descriptive name for the Amazon EMR Studio.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/emr_studio#name EmrStudio#name}

---

##### `service_role`<sup>Required</sup> <a name="service_role" id="@cdktn/provider-awscc.emrStudio.EmrStudio.Initializer.parameter.serviceRole"></a>

- *Type:* str

The IAM role that will be assumed by the Amazon EMR Studio.

The service role provides a way for Amazon EMR Studio to interoperate with other AWS services.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/emr_studio#service_role EmrStudio#service_role}

---

##### `subnet_ids`<sup>Required</sup> <a name="subnet_ids" id="@cdktn/provider-awscc.emrStudio.EmrStudio.Initializer.parameter.subnetIds"></a>

- *Type:* typing.List[str]

A list of up to 5 subnet IDs to associate with the Studio.

The subnets must belong to the VPC specified by VpcId. Studio users can create a Workspace in any of the specified subnets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/emr_studio#subnet_ids EmrStudio#subnet_ids}

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktn/provider-awscc.emrStudio.EmrStudio.Initializer.parameter.vpcId"></a>

- *Type:* str

The ID of the Amazon Virtual Private Cloud (Amazon VPC) to associate with the Studio.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/emr_studio#vpc_id EmrStudio#vpc_id}

---

##### `workspace_security_group_id`<sup>Required</sup> <a name="workspace_security_group_id" id="@cdktn/provider-awscc.emrStudio.EmrStudio.Initializer.parameter.workspaceSecurityGroupId"></a>

- *Type:* str

The ID of the Amazon EMR Studio Workspace security group.

The Workspace security group allows outbound network traffic to resources in the Engine security group, and it must be in the same VPC specified by VpcId.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/emr_studio#workspace_security_group_id EmrStudio#workspace_security_group_id}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.emrStudio.EmrStudio.Initializer.parameter.description"></a>

- *Type:* str

A detailed description of the Studio.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/emr_studio#description EmrStudio#description}

---

##### `encryption_key_arn`<sup>Optional</sup> <a name="encryption_key_arn" id="@cdktn/provider-awscc.emrStudio.EmrStudio.Initializer.parameter.encryptionKeyArn"></a>

- *Type:* str

The AWS KMS key identifier (ARN) used to encrypt AWS EMR Studio workspace and notebook files when backed up to AWS S3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/emr_studio#encryption_key_arn EmrStudio#encryption_key_arn}

---

##### `idc_instance_arn`<sup>Optional</sup> <a name="idc_instance_arn" id="@cdktn/provider-awscc.emrStudio.EmrStudio.Initializer.parameter.idcInstanceArn"></a>

- *Type:* str

The ARN of the IAM Identity Center instance to create the Studio application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/emr_studio#idc_instance_arn EmrStudio#idc_instance_arn}

---

##### `idc_user_assignment`<sup>Optional</sup> <a name="idc_user_assignment" id="@cdktn/provider-awscc.emrStudio.EmrStudio.Initializer.parameter.idcUserAssignment"></a>

- *Type:* str

Specifies whether IAM Identity Center user assignment is REQUIRED or OPTIONAL.

If the value is set to REQUIRED, users must be explicitly assigned to the Studio application to access the Studio.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/emr_studio#idc_user_assignment EmrStudio#idc_user_assignment}

---

##### `idp_auth_url`<sup>Optional</sup> <a name="idp_auth_url" id="@cdktn/provider-awscc.emrStudio.EmrStudio.Initializer.parameter.idpAuthUrl"></a>

- *Type:* str

Your identity provider's authentication endpoint.

Amazon EMR Studio redirects federated users to this endpoint for authentication when logging in to a Studio with the Studio URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/emr_studio#idp_auth_url EmrStudio#idp_auth_url}

---

##### `idp_relay_state_parameter_name`<sup>Optional</sup> <a name="idp_relay_state_parameter_name" id="@cdktn/provider-awscc.emrStudio.EmrStudio.Initializer.parameter.idpRelayStateParameterName"></a>

- *Type:* str

The name of relay state parameter for external Identity Provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/emr_studio#idp_relay_state_parameter_name EmrStudio#idp_relay_state_parameter_name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.emrStudio.EmrStudio.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTags">EmrStudioTags</a>]

A list of tags to associate with the Studio.

Tags are user-defined key-value pairs that consist of a required key string with a maximum of 128 characters, and an optional value string with a maximum of 256 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/emr_studio#tags EmrStudio#tags}

---

##### `trusted_identity_propagation_enabled`<sup>Optional</sup> <a name="trusted_identity_propagation_enabled" id="@cdktn/provider-awscc.emrStudio.EmrStudio.Initializer.parameter.trustedIdentityPropagationEnabled"></a>

- *Type:* bool | cdktn.IResolvable

A Boolean indicating whether to enable Trusted identity propagation for the Studio. The default value is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/emr_studio#trusted_identity_propagation_enabled EmrStudio#trusted_identity_propagation_enabled}

---

##### `user_role`<sup>Optional</sup> <a name="user_role" id="@cdktn/provider-awscc.emrStudio.EmrStudio.Initializer.parameter.userRole"></a>

- *Type:* str

The IAM user role that will be assumed by users and groups logged in to a Studio.

The permissions attached to this IAM role can be scoped down for each user or group using session policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/emr_studio#user_role EmrStudio#user_role}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.resetEncryptionKeyArn">reset_encryption_key_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.resetIdcInstanceArn">reset_idc_instance_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.resetIdcUserAssignment">reset_idc_user_assignment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.resetIdpAuthUrl">reset_idp_auth_url</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.resetIdpRelayStateParameterName">reset_idp_relay_state_parameter_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.resetTrustedIdentityPropagationEnabled">reset_trusted_identity_propagation_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.resetUserRole">reset_user_role</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.emrStudio.EmrStudio.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.emrStudio.EmrStudio.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.emrStudio.EmrStudio.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.emrStudio.EmrStudio.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.emrStudio.EmrStudio.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.emrStudio.EmrStudio.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.emrStudio.EmrStudio.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.emrStudio.EmrStudio.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.emrStudio.EmrStudio.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.emrStudio.EmrStudio.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.emrStudio.EmrStudio.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.emrStudio.EmrStudio.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.emrStudio.EmrStudio.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.emrStudio.EmrStudio.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.emrStudio.EmrStudio.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.emrStudio.EmrStudio.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.emrStudio.EmrStudio.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.emrStudio.EmrStudio.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.emrStudio.EmrStudio.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.emrStudio.EmrStudio.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.emrStudio.EmrStudio.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.emrStudio.EmrStudio.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.emrStudio.EmrStudio.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.emrStudio.EmrStudio.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.emrStudio.EmrStudio.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.emrStudio.EmrStudio.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.emrStudio.EmrStudio.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.emrStudio.EmrStudio.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.emrStudio.EmrStudio.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.emrStudio.EmrStudio.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.emrStudio.EmrStudio.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.emrStudio.EmrStudio.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.emrStudio.EmrStudio.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.emrStudio.EmrStudio.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.emrStudio.EmrStudio.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.emrStudio.EmrStudio.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.emrStudio.EmrStudio.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.emrStudio.EmrStudio.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.emrStudio.EmrStudio.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.emrStudio.EmrStudio.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.emrStudio.EmrStudio.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.emrStudio.EmrStudio.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.emrStudio.EmrStudio.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.emrStudio.EmrStudio.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.emrStudio.EmrStudio.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.emrStudio.EmrStudio.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[EmrStudioTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.emrStudio.EmrStudio.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTags">EmrStudioTags</a>]

---

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.emrStudio.EmrStudio.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_encryption_key_arn` <a name="reset_encryption_key_arn" id="@cdktn/provider-awscc.emrStudio.EmrStudio.resetEncryptionKeyArn"></a>

```python
def reset_encryption_key_arn() -> None
```

##### `reset_idc_instance_arn` <a name="reset_idc_instance_arn" id="@cdktn/provider-awscc.emrStudio.EmrStudio.resetIdcInstanceArn"></a>

```python
def reset_idc_instance_arn() -> None
```

##### `reset_idc_user_assignment` <a name="reset_idc_user_assignment" id="@cdktn/provider-awscc.emrStudio.EmrStudio.resetIdcUserAssignment"></a>

```python
def reset_idc_user_assignment() -> None
```

##### `reset_idp_auth_url` <a name="reset_idp_auth_url" id="@cdktn/provider-awscc.emrStudio.EmrStudio.resetIdpAuthUrl"></a>

```python
def reset_idp_auth_url() -> None
```

##### `reset_idp_relay_state_parameter_name` <a name="reset_idp_relay_state_parameter_name" id="@cdktn/provider-awscc.emrStudio.EmrStudio.resetIdpRelayStateParameterName"></a>

```python
def reset_idp_relay_state_parameter_name() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.emrStudio.EmrStudio.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_trusted_identity_propagation_enabled` <a name="reset_trusted_identity_propagation_enabled" id="@cdktn/provider-awscc.emrStudio.EmrStudio.resetTrustedIdentityPropagationEnabled"></a>

```python
def reset_trusted_identity_propagation_enabled() -> None
```

##### `reset_user_role` <a name="reset_user_role" id="@cdktn/provider-awscc.emrStudio.EmrStudio.resetUserRole"></a>

```python
def reset_user_role() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a EmrStudio resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.emrStudio.EmrStudio.isConstruct"></a>

```python
from cdktn_provider_awscc import emr_studio

emrStudio.EmrStudio.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.emrStudio.EmrStudio.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.emrStudio.EmrStudio.isTerraformElement"></a>

```python
from cdktn_provider_awscc import emr_studio

emrStudio.EmrStudio.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.emrStudio.EmrStudio.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.emrStudio.EmrStudio.isTerraformResource"></a>

```python
from cdktn_provider_awscc import emr_studio

emrStudio.EmrStudio.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.emrStudio.EmrStudio.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.emrStudio.EmrStudio.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import emr_studio

emrStudio.EmrStudio.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a EmrStudio resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.emrStudio.EmrStudio.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.emrStudio.EmrStudio.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the EmrStudio to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.emrStudio.EmrStudio.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing EmrStudio that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/emr_studio#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.emrStudio.EmrStudio.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the EmrStudio to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.studioId">studio_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTagsList">EmrStudioTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.authModeInput">auth_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.defaultS3LocationInput">default_s3_location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.encryptionKeyArnInput">encryption_key_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.engineSecurityGroupIdInput">engine_security_group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.idcInstanceArnInput">idc_instance_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.idcUserAssignmentInput">idc_user_assignment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.idpAuthUrlInput">idp_auth_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.idpRelayStateParameterNameInput">idp_relay_state_parameter_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.serviceRoleInput">service_role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.subnetIdsInput">subnet_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTags">EmrStudioTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.trustedIdentityPropagationEnabledInput">trusted_identity_propagation_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.userRoleInput">user_role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.vpcIdInput">vpc_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.workspaceSecurityGroupIdInput">workspace_security_group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.authMode">auth_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.defaultS3Location">default_s3_location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.encryptionKeyArn">encryption_key_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.engineSecurityGroupId">engine_security_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.idcInstanceArn">idc_instance_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.idcUserAssignment">idc_user_assignment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.idpAuthUrl">idp_auth_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.idpRelayStateParameterName">idp_relay_state_parameter_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.serviceRole">service_role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.trustedIdentityPropagationEnabled">trusted_identity_propagation_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.userRole">user_role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.vpcId">vpc_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.workspaceSecurityGroupId">workspace_security_group_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `studio_id`<sup>Required</sup> <a name="studio_id" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.studioId"></a>

```python
studio_id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.tags"></a>

```python
tags: EmrStudioTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTagsList">EmrStudioTagsList</a>

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `auth_mode_input`<sup>Optional</sup> <a name="auth_mode_input" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.authModeInput"></a>

```python
auth_mode_input: str
```

- *Type:* str

---

##### `default_s3_location_input`<sup>Optional</sup> <a name="default_s3_location_input" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.defaultS3LocationInput"></a>

```python
default_s3_location_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `encryption_key_arn_input`<sup>Optional</sup> <a name="encryption_key_arn_input" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.encryptionKeyArnInput"></a>

```python
encryption_key_arn_input: str
```

- *Type:* str

---

##### `engine_security_group_id_input`<sup>Optional</sup> <a name="engine_security_group_id_input" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.engineSecurityGroupIdInput"></a>

```python
engine_security_group_id_input: str
```

- *Type:* str

---

##### `idc_instance_arn_input`<sup>Optional</sup> <a name="idc_instance_arn_input" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.idcInstanceArnInput"></a>

```python
idc_instance_arn_input: str
```

- *Type:* str

---

##### `idc_user_assignment_input`<sup>Optional</sup> <a name="idc_user_assignment_input" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.idcUserAssignmentInput"></a>

```python
idc_user_assignment_input: str
```

- *Type:* str

---

##### `idp_auth_url_input`<sup>Optional</sup> <a name="idp_auth_url_input" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.idpAuthUrlInput"></a>

```python
idp_auth_url_input: str
```

- *Type:* str

---

##### `idp_relay_state_parameter_name_input`<sup>Optional</sup> <a name="idp_relay_state_parameter_name_input" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.idpRelayStateParameterNameInput"></a>

```python
idp_relay_state_parameter_name_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `service_role_input`<sup>Optional</sup> <a name="service_role_input" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.serviceRoleInput"></a>

```python
service_role_input: str
```

- *Type:* str

---

##### `subnet_ids_input`<sup>Optional</sup> <a name="subnet_ids_input" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.subnetIdsInput"></a>

```python
subnet_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[EmrStudioTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTags">EmrStudioTags</a>]

---

##### `trusted_identity_propagation_enabled_input`<sup>Optional</sup> <a name="trusted_identity_propagation_enabled_input" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.trustedIdentityPropagationEnabledInput"></a>

```python
trusted_identity_propagation_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `user_role_input`<sup>Optional</sup> <a name="user_role_input" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.userRoleInput"></a>

```python
user_role_input: str
```

- *Type:* str

---

##### `vpc_id_input`<sup>Optional</sup> <a name="vpc_id_input" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.vpcIdInput"></a>

```python
vpc_id_input: str
```

- *Type:* str

---

##### `workspace_security_group_id_input`<sup>Optional</sup> <a name="workspace_security_group_id_input" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.workspaceSecurityGroupIdInput"></a>

```python
workspace_security_group_id_input: str
```

- *Type:* str

---

##### `auth_mode`<sup>Required</sup> <a name="auth_mode" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.authMode"></a>

```python
auth_mode: str
```

- *Type:* str

---

##### `default_s3_location`<sup>Required</sup> <a name="default_s3_location" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.defaultS3Location"></a>

```python
default_s3_location: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `encryption_key_arn`<sup>Required</sup> <a name="encryption_key_arn" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.encryptionKeyArn"></a>

```python
encryption_key_arn: str
```

- *Type:* str

---

##### `engine_security_group_id`<sup>Required</sup> <a name="engine_security_group_id" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.engineSecurityGroupId"></a>

```python
engine_security_group_id: str
```

- *Type:* str

---

##### `idc_instance_arn`<sup>Required</sup> <a name="idc_instance_arn" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.idcInstanceArn"></a>

```python
idc_instance_arn: str
```

- *Type:* str

---

##### `idc_user_assignment`<sup>Required</sup> <a name="idc_user_assignment" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.idcUserAssignment"></a>

```python
idc_user_assignment: str
```

- *Type:* str

---

##### `idp_auth_url`<sup>Required</sup> <a name="idp_auth_url" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.idpAuthUrl"></a>

```python
idp_auth_url: str
```

- *Type:* str

---

##### `idp_relay_state_parameter_name`<sup>Required</sup> <a name="idp_relay_state_parameter_name" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.idpRelayStateParameterName"></a>

```python
idp_relay_state_parameter_name: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `service_role`<sup>Required</sup> <a name="service_role" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.serviceRole"></a>

```python
service_role: str
```

- *Type:* str

---

##### `subnet_ids`<sup>Required</sup> <a name="subnet_ids" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.subnetIds"></a>

```python
subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `trusted_identity_propagation_enabled`<sup>Required</sup> <a name="trusted_identity_propagation_enabled" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.trustedIdentityPropagationEnabled"></a>

```python
trusted_identity_propagation_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `user_role`<sup>Required</sup> <a name="user_role" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.userRole"></a>

```python
user_role: str
```

- *Type:* str

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

---

##### `workspace_security_group_id`<sup>Required</sup> <a name="workspace_security_group_id" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.workspaceSecurityGroupId"></a>

```python
workspace_security_group_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### EmrStudioConfig <a name="EmrStudioConfig" id="@cdktn/provider-awscc.emrStudio.EmrStudioConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.emrStudio.EmrStudioConfig.Initializer"></a>

```python
from cdktn_provider_awscc import emr_studio

emrStudio.EmrStudioConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  auth_mode: str,
  default_s3_location: str,
  engine_security_group_id: str,
  name: str,
  service_role: str,
  subnet_ids: typing.List[str],
  vpc_id: str,
  workspace_security_group_id: str,
  description: str = None,
  encryption_key_arn: str = None,
  idc_instance_arn: str = None,
  idc_user_assignment: str = None,
  idp_auth_url: str = None,
  idp_relay_state_parameter_name: str = None,
  tags: IResolvable | typing.List[EmrStudioTags] = None,
  trusted_identity_propagation_enabled: bool | IResolvable = None,
  user_role: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioConfig.property.authMode">auth_mode</a></code> | <code>str</code> | Specifies whether the Studio authenticates users using single sign-on (SSO) or IAM. |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioConfig.property.defaultS3Location">default_s3_location</a></code> | <code>str</code> | The default Amazon S3 location to back up EMR Studio Workspaces and notebook files. |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioConfig.property.engineSecurityGroupId">engine_security_group_id</a></code> | <code>str</code> | The ID of the Amazon EMR Studio Engine security group. |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioConfig.property.name">name</a></code> | <code>str</code> | A descriptive name for the Amazon EMR Studio. |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioConfig.property.serviceRole">service_role</a></code> | <code>str</code> | The IAM role that will be assumed by the Amazon EMR Studio. |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioConfig.property.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | A list of up to 5 subnet IDs to associate with the Studio. |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioConfig.property.vpcId">vpc_id</a></code> | <code>str</code> | The ID of the Amazon Virtual Private Cloud (Amazon VPC) to associate with the Studio. |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioConfig.property.workspaceSecurityGroupId">workspace_security_group_id</a></code> | <code>str</code> | The ID of the Amazon EMR Studio Workspace security group. |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioConfig.property.description">description</a></code> | <code>str</code> | A detailed description of the Studio. |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioConfig.property.encryptionKeyArn">encryption_key_arn</a></code> | <code>str</code> | The AWS KMS key identifier (ARN) used to encrypt AWS EMR Studio workspace and notebook files when backed up to AWS S3. |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioConfig.property.idcInstanceArn">idc_instance_arn</a></code> | <code>str</code> | The ARN of the IAM Identity Center instance to create the Studio application. |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioConfig.property.idcUserAssignment">idc_user_assignment</a></code> | <code>str</code> | Specifies whether IAM Identity Center user assignment is REQUIRED or OPTIONAL. |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioConfig.property.idpAuthUrl">idp_auth_url</a></code> | <code>str</code> | Your identity provider's authentication endpoint. |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioConfig.property.idpRelayStateParameterName">idp_relay_state_parameter_name</a></code> | <code>str</code> | The name of relay state parameter for external Identity Provider. |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTags">EmrStudioTags</a>]</code> | A list of tags to associate with the Studio. |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioConfig.property.trustedIdentityPropagationEnabled">trusted_identity_propagation_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | A Boolean indicating whether to enable Trusted identity propagation for the Studio. The default value is false. |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioConfig.property.userRole">user_role</a></code> | <code>str</code> | The IAM user role that will be assumed by users and groups logged in to a Studio. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.emrStudio.EmrStudioConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.emrStudio.EmrStudioConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.emrStudio.EmrStudioConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.emrStudio.EmrStudioConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.emrStudio.EmrStudioConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.emrStudio.EmrStudioConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.emrStudio.EmrStudioConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `auth_mode`<sup>Required</sup> <a name="auth_mode" id="@cdktn/provider-awscc.emrStudio.EmrStudioConfig.property.authMode"></a>

```python
auth_mode: str
```

- *Type:* str

Specifies whether the Studio authenticates users using single sign-on (SSO) or IAM.

Amazon EMR Studio currently only supports SSO authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/emr_studio#auth_mode EmrStudio#auth_mode}

---

##### `default_s3_location`<sup>Required</sup> <a name="default_s3_location" id="@cdktn/provider-awscc.emrStudio.EmrStudioConfig.property.defaultS3Location"></a>

```python
default_s3_location: str
```

- *Type:* str

The default Amazon S3 location to back up EMR Studio Workspaces and notebook files.

A Studio user can select an alternative Amazon S3 location when creating a Workspace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/emr_studio#default_s3_location EmrStudio#default_s3_location}

---

##### `engine_security_group_id`<sup>Required</sup> <a name="engine_security_group_id" id="@cdktn/provider-awscc.emrStudio.EmrStudioConfig.property.engineSecurityGroupId"></a>

```python
engine_security_group_id: str
```

- *Type:* str

The ID of the Amazon EMR Studio Engine security group.

The Engine security group allows inbound network traffic from the Workspace security group, and it must be in the same VPC specified by VpcId.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/emr_studio#engine_security_group_id EmrStudio#engine_security_group_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.emrStudio.EmrStudioConfig.property.name"></a>

```python
name: str
```

- *Type:* str

A descriptive name for the Amazon EMR Studio.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/emr_studio#name EmrStudio#name}

---

##### `service_role`<sup>Required</sup> <a name="service_role" id="@cdktn/provider-awscc.emrStudio.EmrStudioConfig.property.serviceRole"></a>

```python
service_role: str
```

- *Type:* str

The IAM role that will be assumed by the Amazon EMR Studio.

The service role provides a way for Amazon EMR Studio to interoperate with other AWS services.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/emr_studio#service_role EmrStudio#service_role}

---

##### `subnet_ids`<sup>Required</sup> <a name="subnet_ids" id="@cdktn/provider-awscc.emrStudio.EmrStudioConfig.property.subnetIds"></a>

```python
subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

A list of up to 5 subnet IDs to associate with the Studio.

The subnets must belong to the VPC specified by VpcId. Studio users can create a Workspace in any of the specified subnets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/emr_studio#subnet_ids EmrStudio#subnet_ids}

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktn/provider-awscc.emrStudio.EmrStudioConfig.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

The ID of the Amazon Virtual Private Cloud (Amazon VPC) to associate with the Studio.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/emr_studio#vpc_id EmrStudio#vpc_id}

---

##### `workspace_security_group_id`<sup>Required</sup> <a name="workspace_security_group_id" id="@cdktn/provider-awscc.emrStudio.EmrStudioConfig.property.workspaceSecurityGroupId"></a>

```python
workspace_security_group_id: str
```

- *Type:* str

The ID of the Amazon EMR Studio Workspace security group.

The Workspace security group allows outbound network traffic to resources in the Engine security group, and it must be in the same VPC specified by VpcId.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/emr_studio#workspace_security_group_id EmrStudio#workspace_security_group_id}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.emrStudio.EmrStudioConfig.property.description"></a>

```python
description: str
```

- *Type:* str

A detailed description of the Studio.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/emr_studio#description EmrStudio#description}

---

##### `encryption_key_arn`<sup>Optional</sup> <a name="encryption_key_arn" id="@cdktn/provider-awscc.emrStudio.EmrStudioConfig.property.encryptionKeyArn"></a>

```python
encryption_key_arn: str
```

- *Type:* str

The AWS KMS key identifier (ARN) used to encrypt AWS EMR Studio workspace and notebook files when backed up to AWS S3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/emr_studio#encryption_key_arn EmrStudio#encryption_key_arn}

---

##### `idc_instance_arn`<sup>Optional</sup> <a name="idc_instance_arn" id="@cdktn/provider-awscc.emrStudio.EmrStudioConfig.property.idcInstanceArn"></a>

```python
idc_instance_arn: str
```

- *Type:* str

The ARN of the IAM Identity Center instance to create the Studio application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/emr_studio#idc_instance_arn EmrStudio#idc_instance_arn}

---

##### `idc_user_assignment`<sup>Optional</sup> <a name="idc_user_assignment" id="@cdktn/provider-awscc.emrStudio.EmrStudioConfig.property.idcUserAssignment"></a>

```python
idc_user_assignment: str
```

- *Type:* str

Specifies whether IAM Identity Center user assignment is REQUIRED or OPTIONAL.

If the value is set to REQUIRED, users must be explicitly assigned to the Studio application to access the Studio.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/emr_studio#idc_user_assignment EmrStudio#idc_user_assignment}

---

##### `idp_auth_url`<sup>Optional</sup> <a name="idp_auth_url" id="@cdktn/provider-awscc.emrStudio.EmrStudioConfig.property.idpAuthUrl"></a>

```python
idp_auth_url: str
```

- *Type:* str

Your identity provider's authentication endpoint.

Amazon EMR Studio redirects federated users to this endpoint for authentication when logging in to a Studio with the Studio URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/emr_studio#idp_auth_url EmrStudio#idp_auth_url}

---

##### `idp_relay_state_parameter_name`<sup>Optional</sup> <a name="idp_relay_state_parameter_name" id="@cdktn/provider-awscc.emrStudio.EmrStudioConfig.property.idpRelayStateParameterName"></a>

```python
idp_relay_state_parameter_name: str
```

- *Type:* str

The name of relay state parameter for external Identity Provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/emr_studio#idp_relay_state_parameter_name EmrStudio#idp_relay_state_parameter_name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.emrStudio.EmrStudioConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[EmrStudioTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTags">EmrStudioTags</a>]

A list of tags to associate with the Studio.

Tags are user-defined key-value pairs that consist of a required key string with a maximum of 128 characters, and an optional value string with a maximum of 256 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/emr_studio#tags EmrStudio#tags}

---

##### `trusted_identity_propagation_enabled`<sup>Optional</sup> <a name="trusted_identity_propagation_enabled" id="@cdktn/provider-awscc.emrStudio.EmrStudioConfig.property.trustedIdentityPropagationEnabled"></a>

```python
trusted_identity_propagation_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

A Boolean indicating whether to enable Trusted identity propagation for the Studio. The default value is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/emr_studio#trusted_identity_propagation_enabled EmrStudio#trusted_identity_propagation_enabled}

---

##### `user_role`<sup>Optional</sup> <a name="user_role" id="@cdktn/provider-awscc.emrStudio.EmrStudioConfig.property.userRole"></a>

```python
user_role: str
```

- *Type:* str

The IAM user role that will be assumed by users and groups logged in to a Studio.

The permissions attached to this IAM role can be scoped down for each user or group using session policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/emr_studio#user_role EmrStudio#user_role}

---

### EmrStudioTags <a name="EmrStudioTags" id="@cdktn/provider-awscc.emrStudio.EmrStudioTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.emrStudio.EmrStudioTags.Initializer"></a>

```python
from cdktn_provider_awscc import emr_studio

emrStudio.EmrStudioTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTags.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTags.property.value">value</a></code> | <code>str</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.emrStudio.EmrStudioTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/emr_studio#key EmrStudio#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.emrStudio.EmrStudioTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag.

You can specify a value that is 0 to 255 Unicode characters in length. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/emr_studio#value EmrStudio#value}

---

## Classes <a name="Classes" id="Classes"></a>

### EmrStudioTagsList <a name="EmrStudioTagsList" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import emr_studio

emrStudio.EmrStudioTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> EmrStudioTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTags">EmrStudioTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[EmrStudioTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTags">EmrStudioTags</a>]

---


### EmrStudioTagsOutputReference <a name="EmrStudioTagsOutputReference" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import emr_studio

emrStudio.EmrStudioTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTags">EmrStudioTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EmrStudioTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTags">EmrStudioTags</a>

---



