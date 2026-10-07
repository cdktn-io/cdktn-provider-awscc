# `workspacesDirectory` Submodule <a name="`workspacesDirectory` Submodule" id="@cdktn/provider-awscc.workspacesDirectory"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WorkspacesDirectory <a name="WorkspacesDirectory" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory awscc_workspaces_directory}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.Initializer"></a>

```python
from cdktn_provider_awscc import workspaces_directory

workspacesDirectory.WorkspacesDirectory(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  active_directory_config: WorkspacesDirectoryActiveDirectoryConfig = None,
  certificate_based_auth_properties: WorkspacesDirectoryCertificateBasedAuthProperties = None,
  enable_self_service: bool | IResolvable = None,
  endpoint_encryption_mode: str = None,
  idc_instance_arn: str = None,
  ip_group_ids: typing.List[str] = None,
  microsoft_entra_config: WorkspacesDirectoryMicrosoftEntraConfig = None,
  saml_properties: WorkspacesDirectorySamlProperties = None,
  selfservice_permissions: WorkspacesDirectorySelfservicePermissions = None,
  streaming_properties: WorkspacesDirectoryStreamingProperties = None,
  subnet_ids: typing.List[str] = None,
  tags: IResolvable | typing.List[WorkspacesDirectoryTags] = None,
  tenancy: str = None,
  user_identity_type: str = None,
  workspace_access_properties: WorkspacesDirectoryWorkspaceAccessProperties = None,
  workspace_creation_properties: WorkspacesDirectoryWorkspaceCreationProperties = None,
  workspace_directory_description: str = None,
  workspace_directory_name: str = None,
  workspace_type: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.Initializer.parameter.activeDirectoryConfig">active_directory_config</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfig">WorkspacesDirectoryActiveDirectoryConfig</a></code> | Information about the Active Directory config. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.Initializer.parameter.certificateBasedAuthProperties">certificate_based_auth_properties</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthProperties">WorkspacesDirectoryCertificateBasedAuthProperties</a></code> | Describes the properties of the certificate-based authentication you want to use with your WorkSpaces. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.Initializer.parameter.enableSelfService">enable_self_service</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates whether self-service capabilities are enabled or disabled. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.Initializer.parameter.endpointEncryptionMode">endpoint_encryption_mode</a></code> | <code>str</code> | Endpoint encryption mode that allows you to configure the specified directory between Standard TLS and FIPS 140-2 validated mode. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.Initializer.parameter.idcInstanceArn">idc_instance_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the identity center instance. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.Initializer.parameter.ipGroupIds">ip_group_ids</a></code> | <code>typing.List[str]</code> | The identifiers of the IP access control groups associated with the directory. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.Initializer.parameter.microsoftEntraConfig">microsoft_entra_config</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfig">WorkspacesDirectoryMicrosoftEntraConfig</a></code> | Specifies the configurations of the Microsoft Entra. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.Initializer.parameter.samlProperties">saml_properties</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlProperties">WorkspacesDirectorySamlProperties</a></code> | Describes the enablement status, user access URL, and relay state parameter name that are used for configuring federation with an SAML 2.0 identity provider. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.Initializer.parameter.selfservicePermissions">selfservice_permissions</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissions">WorkspacesDirectorySelfservicePermissions</a></code> | Describes the self-service permissions for a directory. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.Initializer.parameter.streamingProperties">streaming_properties</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingProperties">WorkspacesDirectoryStreamingProperties</a></code> | Describes the streaming properties. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.Initializer.parameter.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | The identifiers of the subnets for your virtual private cloud (VPC). |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTags">WorkspacesDirectoryTags</a>]</code> | The tags associated with the directory. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.Initializer.parameter.tenancy">tenancy</a></code> | <code>str</code> | Indicates whether your WorkSpace directory is dedicated or shared. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.Initializer.parameter.userIdentityType">user_identity_type</a></code> | <code>str</code> | The type of identity management the user is using. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.Initializer.parameter.workspaceAccessProperties">workspace_access_properties</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties">WorkspacesDirectoryWorkspaceAccessProperties</a></code> | The device types and operating systems that can be used to access a WorkSpace. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.Initializer.parameter.workspaceCreationProperties">workspace_creation_properties</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties">WorkspacesDirectoryWorkspaceCreationProperties</a></code> | The default values that are used to create WorkSpaces. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.Initializer.parameter.workspaceDirectoryDescription">workspace_directory_description</a></code> | <code>str</code> | Description of the directory to register. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.Initializer.parameter.workspaceDirectoryName">workspace_directory_name</a></code> | <code>str</code> | The name of the directory to register. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.Initializer.parameter.workspaceType">workspace_type</a></code> | <code>str</code> | Indicates whether the directory's WorkSpace type is personal or pools. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `active_directory_config`<sup>Optional</sup> <a name="active_directory_config" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.Initializer.parameter.activeDirectoryConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfig">WorkspacesDirectoryActiveDirectoryConfig</a>

Information about the Active Directory config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#active_directory_config WorkspacesDirectory#active_directory_config}

---

##### `certificate_based_auth_properties`<sup>Optional</sup> <a name="certificate_based_auth_properties" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.Initializer.parameter.certificateBasedAuthProperties"></a>

- *Type:* <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthProperties">WorkspacesDirectoryCertificateBasedAuthProperties</a>

Describes the properties of the certificate-based authentication you want to use with your WorkSpaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#certificate_based_auth_properties WorkspacesDirectory#certificate_based_auth_properties}

---

##### `enable_self_service`<sup>Optional</sup> <a name="enable_self_service" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.Initializer.parameter.enableSelfService"></a>

- *Type:* bool | cdktn.IResolvable

Indicates whether self-service capabilities are enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#enable_self_service WorkspacesDirectory#enable_self_service}

---

##### `endpoint_encryption_mode`<sup>Optional</sup> <a name="endpoint_encryption_mode" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.Initializer.parameter.endpointEncryptionMode"></a>

- *Type:* str

Endpoint encryption mode that allows you to configure the specified directory between Standard TLS and FIPS 140-2 validated mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#endpoint_encryption_mode WorkspacesDirectory#endpoint_encryption_mode}

---

##### `idc_instance_arn`<sup>Optional</sup> <a name="idc_instance_arn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.Initializer.parameter.idcInstanceArn"></a>

- *Type:* str

The Amazon Resource Name (ARN) of the identity center instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#idc_instance_arn WorkspacesDirectory#idc_instance_arn}

---

##### `ip_group_ids`<sup>Optional</sup> <a name="ip_group_ids" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.Initializer.parameter.ipGroupIds"></a>

- *Type:* typing.List[str]

The identifiers of the IP access control groups associated with the directory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#ip_group_ids WorkspacesDirectory#ip_group_ids}

---

##### `microsoft_entra_config`<sup>Optional</sup> <a name="microsoft_entra_config" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.Initializer.parameter.microsoftEntraConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfig">WorkspacesDirectoryMicrosoftEntraConfig</a>

Specifies the configurations of the Microsoft Entra.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#microsoft_entra_config WorkspacesDirectory#microsoft_entra_config}

---

##### `saml_properties`<sup>Optional</sup> <a name="saml_properties" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.Initializer.parameter.samlProperties"></a>

- *Type:* <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlProperties">WorkspacesDirectorySamlProperties</a>

Describes the enablement status, user access URL, and relay state parameter name that are used for configuring federation with an SAML 2.0 identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#saml_properties WorkspacesDirectory#saml_properties}

---

##### `selfservice_permissions`<sup>Optional</sup> <a name="selfservice_permissions" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.Initializer.parameter.selfservicePermissions"></a>

- *Type:* <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissions">WorkspacesDirectorySelfservicePermissions</a>

Describes the self-service permissions for a directory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#selfservice_permissions WorkspacesDirectory#selfservice_permissions}

---

##### `streaming_properties`<sup>Optional</sup> <a name="streaming_properties" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.Initializer.parameter.streamingProperties"></a>

- *Type:* <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingProperties">WorkspacesDirectoryStreamingProperties</a>

Describes the streaming properties.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#streaming_properties WorkspacesDirectory#streaming_properties}

---

##### `subnet_ids`<sup>Optional</sup> <a name="subnet_ids" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.Initializer.parameter.subnetIds"></a>

- *Type:* typing.List[str]

The identifiers of the subnets for your virtual private cloud (VPC).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#subnet_ids WorkspacesDirectory#subnet_ids}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTags">WorkspacesDirectoryTags</a>]

The tags associated with the directory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#tags WorkspacesDirectory#tags}

---

##### `tenancy`<sup>Optional</sup> <a name="tenancy" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.Initializer.parameter.tenancy"></a>

- *Type:* str

Indicates whether your WorkSpace directory is dedicated or shared.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#tenancy WorkspacesDirectory#tenancy}

---

##### `user_identity_type`<sup>Optional</sup> <a name="user_identity_type" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.Initializer.parameter.userIdentityType"></a>

- *Type:* str

The type of identity management the user is using.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#user_identity_type WorkspacesDirectory#user_identity_type}

---

##### `workspace_access_properties`<sup>Optional</sup> <a name="workspace_access_properties" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.Initializer.parameter.workspaceAccessProperties"></a>

- *Type:* <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties">WorkspacesDirectoryWorkspaceAccessProperties</a>

The device types and operating systems that can be used to access a WorkSpace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#workspace_access_properties WorkspacesDirectory#workspace_access_properties}

---

##### `workspace_creation_properties`<sup>Optional</sup> <a name="workspace_creation_properties" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.Initializer.parameter.workspaceCreationProperties"></a>

- *Type:* <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties">WorkspacesDirectoryWorkspaceCreationProperties</a>

The default values that are used to create WorkSpaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#workspace_creation_properties WorkspacesDirectory#workspace_creation_properties}

---

##### `workspace_directory_description`<sup>Optional</sup> <a name="workspace_directory_description" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.Initializer.parameter.workspaceDirectoryDescription"></a>

- *Type:* str

Description of the directory to register.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#workspace_directory_description WorkspacesDirectory#workspace_directory_description}

---

##### `workspace_directory_name`<sup>Optional</sup> <a name="workspace_directory_name" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.Initializer.parameter.workspaceDirectoryName"></a>

- *Type:* str

The name of the directory to register.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#workspace_directory_name WorkspacesDirectory#workspace_directory_name}

---

##### `workspace_type`<sup>Optional</sup> <a name="workspace_type" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.Initializer.parameter.workspaceType"></a>

- *Type:* str

Indicates whether the directory's WorkSpace type is personal or pools.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#workspace_type WorkspacesDirectory#workspace_type}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.putActiveDirectoryConfig">put_active_directory_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.putCertificateBasedAuthProperties">put_certificate_based_auth_properties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.putMicrosoftEntraConfig">put_microsoft_entra_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.putSamlProperties">put_saml_properties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.putSelfservicePermissions">put_selfservice_permissions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.putStreamingProperties">put_streaming_properties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.putWorkspaceAccessProperties">put_workspace_access_properties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.putWorkspaceCreationProperties">put_workspace_creation_properties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.resetActiveDirectoryConfig">reset_active_directory_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.resetCertificateBasedAuthProperties">reset_certificate_based_auth_properties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.resetEnableSelfService">reset_enable_self_service</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.resetEndpointEncryptionMode">reset_endpoint_encryption_mode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.resetIdcInstanceArn">reset_idc_instance_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.resetIpGroupIds">reset_ip_group_ids</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.resetMicrosoftEntraConfig">reset_microsoft_entra_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.resetSamlProperties">reset_saml_properties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.resetSelfservicePermissions">reset_selfservice_permissions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.resetStreamingProperties">reset_streaming_properties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.resetSubnetIds">reset_subnet_ids</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.resetTenancy">reset_tenancy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.resetUserIdentityType">reset_user_identity_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.resetWorkspaceAccessProperties">reset_workspace_access_properties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.resetWorkspaceCreationProperties">reset_workspace_creation_properties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.resetWorkspaceDirectoryDescription">reset_workspace_directory_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.resetWorkspaceDirectoryName">reset_workspace_directory_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.resetWorkspaceType">reset_workspace_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_active_directory_config` <a name="put_active_directory_config" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.putActiveDirectoryConfig"></a>

```python
def put_active_directory_config(
  domain_name: str = None,
  service_account_secret_arn: str = None
) -> None
```

###### `domain_name`<sup>Optional</sup> <a name="domain_name" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.putActiveDirectoryConfig.parameter.domainName"></a>

- *Type:* str

The name of the domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#domain_name WorkspacesDirectory#domain_name}

---

###### `service_account_secret_arn`<sup>Optional</sup> <a name="service_account_secret_arn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.putActiveDirectoryConfig.parameter.serviceAccountSecretArn"></a>

- *Type:* str

Indicates the secret ARN on the service account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#service_account_secret_arn WorkspacesDirectory#service_account_secret_arn}

---

##### `put_certificate_based_auth_properties` <a name="put_certificate_based_auth_properties" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.putCertificateBasedAuthProperties"></a>

```python
def put_certificate_based_auth_properties(
  certificate_authority_arn: str = None,
  status: str = None
) -> None
```

###### `certificate_authority_arn`<sup>Optional</sup> <a name="certificate_authority_arn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.putCertificateBasedAuthProperties.parameter.certificateAuthorityArn"></a>

- *Type:* str

The Amazon Resource Name (ARN) of the Amazon Web Services Certificate Manager Private CA resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#certificate_authority_arn WorkspacesDirectory#certificate_authority_arn}

---

###### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.putCertificateBasedAuthProperties.parameter.status"></a>

- *Type:* str

The status of the certificate-based authentication properties.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#status WorkspacesDirectory#status}

---

##### `put_microsoft_entra_config` <a name="put_microsoft_entra_config" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.putMicrosoftEntraConfig"></a>

```python
def put_microsoft_entra_config(
  application_config_secret_arn: str = None,
  tenant_id: str = None
) -> None
```

###### `application_config_secret_arn`<sup>Optional</sup> <a name="application_config_secret_arn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.putMicrosoftEntraConfig.parameter.applicationConfigSecretArn"></a>

- *Type:* str

The Amazon Resource Name (ARN) of the application config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#application_config_secret_arn WorkspacesDirectory#application_config_secret_arn}

---

###### `tenant_id`<sup>Optional</sup> <a name="tenant_id" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.putMicrosoftEntraConfig.parameter.tenantId"></a>

- *Type:* str

The identifier of the tenant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#tenant_id WorkspacesDirectory#tenant_id}

---

##### `put_saml_properties` <a name="put_saml_properties" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.putSamlProperties"></a>

```python
def put_saml_properties(
  relay_state_parameter_name: str = None,
  status: str = None,
  user_access_url: str = None
) -> None
```

###### `relay_state_parameter_name`<sup>Optional</sup> <a name="relay_state_parameter_name" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.putSamlProperties.parameter.relayStateParameterName"></a>

- *Type:* str

The relay state parameter name supported by the SAML 2.0 identity provider (IdP).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#relay_state_parameter_name WorkspacesDirectory#relay_state_parameter_name}

---

###### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.putSamlProperties.parameter.status"></a>

- *Type:* str

Indicates the status of SAML 2.0 authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#status WorkspacesDirectory#status}

---

###### `user_access_url`<sup>Optional</sup> <a name="user_access_url" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.putSamlProperties.parameter.userAccessUrl"></a>

- *Type:* str

The SAML 2.0 identity provider (IdP) user access URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#user_access_url WorkspacesDirectory#user_access_url}

---

##### `put_selfservice_permissions` <a name="put_selfservice_permissions" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.putSelfservicePermissions"></a>

```python
def put_selfservice_permissions(
  change_compute_type: str = None,
  increase_volume_size: str = None,
  rebuild_workspace: str = None,
  restart_workspace: str = None,
  switch_running_mode: str = None
) -> None
```

###### `change_compute_type`<sup>Optional</sup> <a name="change_compute_type" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.putSelfservicePermissions.parameter.changeComputeType"></a>

- *Type:* str

Specifies whether users can change the compute type (bundle) for their WorkSpace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#change_compute_type WorkspacesDirectory#change_compute_type}

---

###### `increase_volume_size`<sup>Optional</sup> <a name="increase_volume_size" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.putSelfservicePermissions.parameter.increaseVolumeSize"></a>

- *Type:* str

Specifies whether users can increase the volume size of the drives on their WorkSpace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#increase_volume_size WorkspacesDirectory#increase_volume_size}

---

###### `rebuild_workspace`<sup>Optional</sup> <a name="rebuild_workspace" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.putSelfservicePermissions.parameter.rebuildWorkspace"></a>

- *Type:* str

Specifies whether users can rebuild the operating system of a WorkSpace to its original state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#rebuild_workspace WorkspacesDirectory#rebuild_workspace}

---

###### `restart_workspace`<sup>Optional</sup> <a name="restart_workspace" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.putSelfservicePermissions.parameter.restartWorkspace"></a>

- *Type:* str

Specifies whether users can restart their WorkSpace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#restart_workspace WorkspacesDirectory#restart_workspace}

---

###### `switch_running_mode`<sup>Optional</sup> <a name="switch_running_mode" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.putSelfservicePermissions.parameter.switchRunningMode"></a>

- *Type:* str

Specifies whether users can switch the running mode of their WorkSpace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#switch_running_mode WorkspacesDirectory#switch_running_mode}

---

##### `put_streaming_properties` <a name="put_streaming_properties" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.putStreamingProperties"></a>

```python
def put_streaming_properties(
  global_accelerator: WorkspacesDirectoryStreamingPropertiesGlobalAccelerator = None,
  storage_connectors: IResolvable | typing.List[WorkspacesDirectoryStreamingPropertiesStorageConnectors] = None,
  streaming_experience_preferred_protocol: str = None,
  user_settings: IResolvable | typing.List[WorkspacesDirectoryStreamingPropertiesUserSettings] = None
) -> None
```

###### `global_accelerator`<sup>Optional</sup> <a name="global_accelerator" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.putStreamingProperties.parameter.globalAccelerator"></a>

- *Type:* <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAccelerator">WorkspacesDirectoryStreamingPropertiesGlobalAccelerator</a>

Describes the Global Accelerator for directory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#global_accelerator WorkspacesDirectory#global_accelerator}

---

###### `storage_connectors`<sup>Optional</sup> <a name="storage_connectors" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.putStreamingProperties.parameter.storageConnectors"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectors">WorkspacesDirectoryStreamingPropertiesStorageConnectors</a>]

Indicates the storage connector used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#storage_connectors WorkspacesDirectory#storage_connectors}

---

###### `streaming_experience_preferred_protocol`<sup>Optional</sup> <a name="streaming_experience_preferred_protocol" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.putStreamingProperties.parameter.streamingExperiencePreferredProtocol"></a>

- *Type:* str

Indicates the type of preferred protocol for the streaming experience.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#streaming_experience_preferred_protocol WorkspacesDirectory#streaming_experience_preferred_protocol}

---

###### `user_settings`<sup>Optional</sup> <a name="user_settings" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.putStreamingProperties.parameter.userSettings"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettings">WorkspacesDirectoryStreamingPropertiesUserSettings</a>]

Indicates the permission settings associated with the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#user_settings WorkspacesDirectory#user_settings}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[WorkspacesDirectoryTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTags">WorkspacesDirectoryTags</a>]

---

##### `put_workspace_access_properties` <a name="put_workspace_access_properties" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.putWorkspaceAccessProperties"></a>

```python
def put_workspace_access_properties(
  access_endpoint_config: WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfig = None,
  device_type_android: str = None,
  device_type_chrome_os: str = None,
  device_type_ios: str = None,
  device_type_linux: str = None,
  device_type_osx: str = None,
  device_type_web: str = None,
  device_type_windows: str = None,
  device_type_work_spaces_thin_client: str = None,
  device_type_zero_client: str = None
) -> None
```

###### `access_endpoint_config`<sup>Optional</sup> <a name="access_endpoint_config" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.putWorkspaceAccessProperties.parameter.accessEndpointConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfig">WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfig</a>

Describes the access endpoint configuration for a WorkSpace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#access_endpoint_config WorkspacesDirectory#access_endpoint_config}

---

###### `device_type_android`<sup>Optional</sup> <a name="device_type_android" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.putWorkspaceAccessProperties.parameter.deviceTypeAndroid"></a>

- *Type:* str

Indicates whether users can use Android and Android-compatible Chrome OS devices to access their WorkSpaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#device_type_android WorkspacesDirectory#device_type_android}

---

###### `device_type_chrome_os`<sup>Optional</sup> <a name="device_type_chrome_os" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.putWorkspaceAccessProperties.parameter.deviceTypeChromeOs"></a>

- *Type:* str

Indicates whether users can use Chromebooks to access their WorkSpaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#device_type_chrome_os WorkspacesDirectory#device_type_chrome_os}

---

###### `device_type_ios`<sup>Optional</sup> <a name="device_type_ios" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.putWorkspaceAccessProperties.parameter.deviceTypeIos"></a>

- *Type:* str

Indicates whether users can use iOS devices to access their WorkSpaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#device_type_ios WorkspacesDirectory#device_type_ios}

---

###### `device_type_linux`<sup>Optional</sup> <a name="device_type_linux" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.putWorkspaceAccessProperties.parameter.deviceTypeLinux"></a>

- *Type:* str

Indicates whether users can use Linux clients to access their WorkSpaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#device_type_linux WorkspacesDirectory#device_type_linux}

---

###### `device_type_osx`<sup>Optional</sup> <a name="device_type_osx" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.putWorkspaceAccessProperties.parameter.deviceTypeOsx"></a>

- *Type:* str

Indicates whether users can use macOS clients to access their WorkSpaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#device_type_osx WorkspacesDirectory#device_type_osx}

---

###### `device_type_web`<sup>Optional</sup> <a name="device_type_web" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.putWorkspaceAccessProperties.parameter.deviceTypeWeb"></a>

- *Type:* str

Indicates whether users can access their WorkSpaces through a web browser.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#device_type_web WorkspacesDirectory#device_type_web}

---

###### `device_type_windows`<sup>Optional</sup> <a name="device_type_windows" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.putWorkspaceAccessProperties.parameter.deviceTypeWindows"></a>

- *Type:* str

Indicates whether users can use Windows clients to access their WorkSpaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#device_type_windows WorkspacesDirectory#device_type_windows}

---

###### `device_type_work_spaces_thin_client`<sup>Optional</sup> <a name="device_type_work_spaces_thin_client" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.putWorkspaceAccessProperties.parameter.deviceTypeWorkSpacesThinClient"></a>

- *Type:* str

Indicates whether users can access their WorkSpaces through a WorkSpaces Thin Client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#device_type_work_spaces_thin_client WorkspacesDirectory#device_type_work_spaces_thin_client}

---

###### `device_type_zero_client`<sup>Optional</sup> <a name="device_type_zero_client" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.putWorkspaceAccessProperties.parameter.deviceTypeZeroClient"></a>

- *Type:* str

Indicates whether users can use zero client devices to access their WorkSpaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#device_type_zero_client WorkspacesDirectory#device_type_zero_client}

---

##### `put_workspace_creation_properties` <a name="put_workspace_creation_properties" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.putWorkspaceCreationProperties"></a>

```python
def put_workspace_creation_properties(
  custom_security_group_id: str = None,
  default_ou: str = None,
  enable_internet_access: bool | IResolvable = None,
  enable_maintenance_mode: bool | IResolvable = None,
  instance_iam_role_arn: str = None,
  user_enabled_as_local_administrator: bool | IResolvable = None
) -> None
```

###### `custom_security_group_id`<sup>Optional</sup> <a name="custom_security_group_id" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.putWorkspaceCreationProperties.parameter.customSecurityGroupId"></a>

- *Type:* str

The identifier of the default security group to apply to WorkSpaces when they are created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#custom_security_group_id WorkspacesDirectory#custom_security_group_id}

---

###### `default_ou`<sup>Optional</sup> <a name="default_ou" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.putWorkspaceCreationProperties.parameter.defaultOu"></a>

- *Type:* str

The organizational unit (OU) in the directory for the WorkSpace machine accounts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#default_ou WorkspacesDirectory#default_ou}

---

###### `enable_internet_access`<sup>Optional</sup> <a name="enable_internet_access" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.putWorkspaceCreationProperties.parameter.enableInternetAccess"></a>

- *Type:* bool | cdktn.IResolvable

Specifies whether to automatically assign an Elastic public IP address to WorkSpaces in this directory by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#enable_internet_access WorkspacesDirectory#enable_internet_access}

---

###### `enable_maintenance_mode`<sup>Optional</sup> <a name="enable_maintenance_mode" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.putWorkspaceCreationProperties.parameter.enableMaintenanceMode"></a>

- *Type:* bool | cdktn.IResolvable

Specifies whether maintenance mode is enabled for WorkSpaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#enable_maintenance_mode WorkspacesDirectory#enable_maintenance_mode}

---

###### `instance_iam_role_arn`<sup>Optional</sup> <a name="instance_iam_role_arn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.putWorkspaceCreationProperties.parameter.instanceIamRoleArn"></a>

- *Type:* str

Indicates the IAM role ARN of the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#instance_iam_role_arn WorkspacesDirectory#instance_iam_role_arn}

---

###### `user_enabled_as_local_administrator`<sup>Optional</sup> <a name="user_enabled_as_local_administrator" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.putWorkspaceCreationProperties.parameter.userEnabledAsLocalAdministrator"></a>

- *Type:* bool | cdktn.IResolvable

Specifies whether WorkSpace users are local administrators on their WorkSpaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#user_enabled_as_local_administrator WorkspacesDirectory#user_enabled_as_local_administrator}

---

##### `reset_active_directory_config` <a name="reset_active_directory_config" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.resetActiveDirectoryConfig"></a>

```python
def reset_active_directory_config() -> None
```

##### `reset_certificate_based_auth_properties` <a name="reset_certificate_based_auth_properties" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.resetCertificateBasedAuthProperties"></a>

```python
def reset_certificate_based_auth_properties() -> None
```

##### `reset_enable_self_service` <a name="reset_enable_self_service" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.resetEnableSelfService"></a>

```python
def reset_enable_self_service() -> None
```

##### `reset_endpoint_encryption_mode` <a name="reset_endpoint_encryption_mode" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.resetEndpointEncryptionMode"></a>

```python
def reset_endpoint_encryption_mode() -> None
```

##### `reset_idc_instance_arn` <a name="reset_idc_instance_arn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.resetIdcInstanceArn"></a>

```python
def reset_idc_instance_arn() -> None
```

##### `reset_ip_group_ids` <a name="reset_ip_group_ids" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.resetIpGroupIds"></a>

```python
def reset_ip_group_ids() -> None
```

##### `reset_microsoft_entra_config` <a name="reset_microsoft_entra_config" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.resetMicrosoftEntraConfig"></a>

```python
def reset_microsoft_entra_config() -> None
```

##### `reset_saml_properties` <a name="reset_saml_properties" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.resetSamlProperties"></a>

```python
def reset_saml_properties() -> None
```

##### `reset_selfservice_permissions` <a name="reset_selfservice_permissions" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.resetSelfservicePermissions"></a>

```python
def reset_selfservice_permissions() -> None
```

##### `reset_streaming_properties` <a name="reset_streaming_properties" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.resetStreamingProperties"></a>

```python
def reset_streaming_properties() -> None
```

##### `reset_subnet_ids` <a name="reset_subnet_ids" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.resetSubnetIds"></a>

```python
def reset_subnet_ids() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tenancy` <a name="reset_tenancy" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.resetTenancy"></a>

```python
def reset_tenancy() -> None
```

##### `reset_user_identity_type` <a name="reset_user_identity_type" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.resetUserIdentityType"></a>

```python
def reset_user_identity_type() -> None
```

##### `reset_workspace_access_properties` <a name="reset_workspace_access_properties" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.resetWorkspaceAccessProperties"></a>

```python
def reset_workspace_access_properties() -> None
```

##### `reset_workspace_creation_properties` <a name="reset_workspace_creation_properties" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.resetWorkspaceCreationProperties"></a>

```python
def reset_workspace_creation_properties() -> None
```

##### `reset_workspace_directory_description` <a name="reset_workspace_directory_description" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.resetWorkspaceDirectoryDescription"></a>

```python
def reset_workspace_directory_description() -> None
```

##### `reset_workspace_directory_name` <a name="reset_workspace_directory_name" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.resetWorkspaceDirectoryName"></a>

```python
def reset_workspace_directory_name() -> None
```

##### `reset_workspace_type` <a name="reset_workspace_type" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.resetWorkspaceType"></a>

```python
def reset_workspace_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a WorkspacesDirectory resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.isConstruct"></a>

```python
from cdktn_provider_awscc import workspaces_directory

workspacesDirectory.WorkspacesDirectory.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.isTerraformElement"></a>

```python
from cdktn_provider_awscc import workspaces_directory

workspacesDirectory.WorkspacesDirectory.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.isTerraformResource"></a>

```python
from cdktn_provider_awscc import workspaces_directory

workspacesDirectory.WorkspacesDirectory.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import workspaces_directory

workspacesDirectory.WorkspacesDirectory.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a WorkspacesDirectory resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the WorkspacesDirectory to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing WorkspacesDirectory that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the WorkspacesDirectory to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.activeDirectoryConfig">active_directory_config</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference">WorkspacesDirectoryActiveDirectoryConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.alias">alias</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.certificateBasedAuthProperties">certificate_based_auth_properties</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference">WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.customerUserName">customer_user_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.directoryId">directory_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.directoryName">directory_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.directoryType">directory_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.dnsIpAddresses">dns_ip_addresses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.dnsIpv6Addresses">dns_ipv6_addresses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.iamRoleId">iam_role_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.idcConfig">idc_config</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference">WorkspacesDirectoryIdcConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.microsoftEntraConfig">microsoft_entra_config</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference">WorkspacesDirectoryMicrosoftEntraConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.registrationCode">registration_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.samlProperties">saml_properties</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference">WorkspacesDirectorySamlPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.selfservicePermissions">selfservice_permissions</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference">WorkspacesDirectorySelfservicePermissionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.streamingProperties">streaming_properties</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference">WorkspacesDirectoryStreamingPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsList">WorkspacesDirectoryTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.workspaceAccessProperties">workspace_access_properties</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference">WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.workspaceCreationProperties">workspace_creation_properties</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference">WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.workspaceSecurityGroupId">workspace_security_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.activeDirectoryConfigInput">active_directory_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfig">WorkspacesDirectoryActiveDirectoryConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.certificateBasedAuthPropertiesInput">certificate_based_auth_properties_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthProperties">WorkspacesDirectoryCertificateBasedAuthProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.enableSelfServiceInput">enable_self_service_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.endpointEncryptionModeInput">endpoint_encryption_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.idcInstanceArnInput">idc_instance_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.ipGroupIdsInput">ip_group_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.microsoftEntraConfigInput">microsoft_entra_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfig">WorkspacesDirectoryMicrosoftEntraConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.samlPropertiesInput">saml_properties_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlProperties">WorkspacesDirectorySamlProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.selfservicePermissionsInput">selfservice_permissions_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissions">WorkspacesDirectorySelfservicePermissions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.streamingPropertiesInput">streaming_properties_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingProperties">WorkspacesDirectoryStreamingProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.subnetIdsInput">subnet_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTags">WorkspacesDirectoryTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.tenancyInput">tenancy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.userIdentityTypeInput">user_identity_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.workspaceAccessPropertiesInput">workspace_access_properties_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties">WorkspacesDirectoryWorkspaceAccessProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.workspaceCreationPropertiesInput">workspace_creation_properties_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties">WorkspacesDirectoryWorkspaceCreationProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.workspaceDirectoryDescriptionInput">workspace_directory_description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.workspaceDirectoryNameInput">workspace_directory_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.workspaceTypeInput">workspace_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.enableSelfService">enable_self_service</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.endpointEncryptionMode">endpoint_encryption_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.idcInstanceArn">idc_instance_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.ipGroupIds">ip_group_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.tenancy">tenancy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.userIdentityType">user_identity_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.workspaceDirectoryDescription">workspace_directory_description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.workspaceDirectoryName">workspace_directory_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.workspaceType">workspace_type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `active_directory_config`<sup>Required</sup> <a name="active_directory_config" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.activeDirectoryConfig"></a>

```python
active_directory_config: WorkspacesDirectoryActiveDirectoryConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference">WorkspacesDirectoryActiveDirectoryConfigOutputReference</a>

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.alias"></a>

```python
alias: str
```

- *Type:* str

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `certificate_based_auth_properties`<sup>Required</sup> <a name="certificate_based_auth_properties" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.certificateBasedAuthProperties"></a>

```python
certificate_based_auth_properties: WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference">WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference</a>

---

##### `customer_user_name`<sup>Required</sup> <a name="customer_user_name" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.customerUserName"></a>

```python
customer_user_name: str
```

- *Type:* str

---

##### `directory_id`<sup>Required</sup> <a name="directory_id" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.directoryId"></a>

```python
directory_id: str
```

- *Type:* str

---

##### `directory_name`<sup>Required</sup> <a name="directory_name" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.directoryName"></a>

```python
directory_name: str
```

- *Type:* str

---

##### `directory_type`<sup>Required</sup> <a name="directory_type" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.directoryType"></a>

```python
directory_type: str
```

- *Type:* str

---

##### `dns_ip_addresses`<sup>Required</sup> <a name="dns_ip_addresses" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.dnsIpAddresses"></a>

```python
dns_ip_addresses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `dns_ipv6_addresses`<sup>Required</sup> <a name="dns_ipv6_addresses" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.dnsIpv6Addresses"></a>

```python
dns_ipv6_addresses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `iam_role_id`<sup>Required</sup> <a name="iam_role_id" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.iamRoleId"></a>

```python
iam_role_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `idc_config`<sup>Required</sup> <a name="idc_config" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.idcConfig"></a>

```python
idc_config: WorkspacesDirectoryIdcConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference">WorkspacesDirectoryIdcConfigOutputReference</a>

---

##### `microsoft_entra_config`<sup>Required</sup> <a name="microsoft_entra_config" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.microsoftEntraConfig"></a>

```python
microsoft_entra_config: WorkspacesDirectoryMicrosoftEntraConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference">WorkspacesDirectoryMicrosoftEntraConfigOutputReference</a>

---

##### `registration_code`<sup>Required</sup> <a name="registration_code" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.registrationCode"></a>

```python
registration_code: str
```

- *Type:* str

---

##### `saml_properties`<sup>Required</sup> <a name="saml_properties" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.samlProperties"></a>

```python
saml_properties: WorkspacesDirectorySamlPropertiesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference">WorkspacesDirectorySamlPropertiesOutputReference</a>

---

##### `selfservice_permissions`<sup>Required</sup> <a name="selfservice_permissions" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.selfservicePermissions"></a>

```python
selfservice_permissions: WorkspacesDirectorySelfservicePermissionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference">WorkspacesDirectorySelfservicePermissionsOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `streaming_properties`<sup>Required</sup> <a name="streaming_properties" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.streamingProperties"></a>

```python
streaming_properties: WorkspacesDirectoryStreamingPropertiesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference">WorkspacesDirectoryStreamingPropertiesOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.tags"></a>

```python
tags: WorkspacesDirectoryTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsList">WorkspacesDirectoryTagsList</a>

---

##### `workspace_access_properties`<sup>Required</sup> <a name="workspace_access_properties" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.workspaceAccessProperties"></a>

```python
workspace_access_properties: WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference">WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference</a>

---

##### `workspace_creation_properties`<sup>Required</sup> <a name="workspace_creation_properties" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.workspaceCreationProperties"></a>

```python
workspace_creation_properties: WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference">WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference</a>

---

##### `workspace_security_group_id`<sup>Required</sup> <a name="workspace_security_group_id" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.workspaceSecurityGroupId"></a>

```python
workspace_security_group_id: str
```

- *Type:* str

---

##### `active_directory_config_input`<sup>Optional</sup> <a name="active_directory_config_input" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.activeDirectoryConfigInput"></a>

```python
active_directory_config_input: IResolvable | WorkspacesDirectoryActiveDirectoryConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfig">WorkspacesDirectoryActiveDirectoryConfig</a>

---

##### `certificate_based_auth_properties_input`<sup>Optional</sup> <a name="certificate_based_auth_properties_input" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.certificateBasedAuthPropertiesInput"></a>

```python
certificate_based_auth_properties_input: IResolvable | WorkspacesDirectoryCertificateBasedAuthProperties
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthProperties">WorkspacesDirectoryCertificateBasedAuthProperties</a>

---

##### `enable_self_service_input`<sup>Optional</sup> <a name="enable_self_service_input" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.enableSelfServiceInput"></a>

```python
enable_self_service_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `endpoint_encryption_mode_input`<sup>Optional</sup> <a name="endpoint_encryption_mode_input" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.endpointEncryptionModeInput"></a>

```python
endpoint_encryption_mode_input: str
```

- *Type:* str

---

##### `idc_instance_arn_input`<sup>Optional</sup> <a name="idc_instance_arn_input" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.idcInstanceArnInput"></a>

```python
idc_instance_arn_input: str
```

- *Type:* str

---

##### `ip_group_ids_input`<sup>Optional</sup> <a name="ip_group_ids_input" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.ipGroupIdsInput"></a>

```python
ip_group_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `microsoft_entra_config_input`<sup>Optional</sup> <a name="microsoft_entra_config_input" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.microsoftEntraConfigInput"></a>

```python
microsoft_entra_config_input: IResolvable | WorkspacesDirectoryMicrosoftEntraConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfig">WorkspacesDirectoryMicrosoftEntraConfig</a>

---

##### `saml_properties_input`<sup>Optional</sup> <a name="saml_properties_input" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.samlPropertiesInput"></a>

```python
saml_properties_input: IResolvable | WorkspacesDirectorySamlProperties
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlProperties">WorkspacesDirectorySamlProperties</a>

---

##### `selfservice_permissions_input`<sup>Optional</sup> <a name="selfservice_permissions_input" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.selfservicePermissionsInput"></a>

```python
selfservice_permissions_input: IResolvable | WorkspacesDirectorySelfservicePermissions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissions">WorkspacesDirectorySelfservicePermissions</a>

---

##### `streaming_properties_input`<sup>Optional</sup> <a name="streaming_properties_input" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.streamingPropertiesInput"></a>

```python
streaming_properties_input: IResolvable | WorkspacesDirectoryStreamingProperties
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingProperties">WorkspacesDirectoryStreamingProperties</a>

---

##### `subnet_ids_input`<sup>Optional</sup> <a name="subnet_ids_input" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.subnetIdsInput"></a>

```python
subnet_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[WorkspacesDirectoryTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTags">WorkspacesDirectoryTags</a>]

---

##### `tenancy_input`<sup>Optional</sup> <a name="tenancy_input" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.tenancyInput"></a>

```python
tenancy_input: str
```

- *Type:* str

---

##### `user_identity_type_input`<sup>Optional</sup> <a name="user_identity_type_input" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.userIdentityTypeInput"></a>

```python
user_identity_type_input: str
```

- *Type:* str

---

##### `workspace_access_properties_input`<sup>Optional</sup> <a name="workspace_access_properties_input" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.workspaceAccessPropertiesInput"></a>

```python
workspace_access_properties_input: IResolvable | WorkspacesDirectoryWorkspaceAccessProperties
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties">WorkspacesDirectoryWorkspaceAccessProperties</a>

---

##### `workspace_creation_properties_input`<sup>Optional</sup> <a name="workspace_creation_properties_input" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.workspaceCreationPropertiesInput"></a>

```python
workspace_creation_properties_input: IResolvable | WorkspacesDirectoryWorkspaceCreationProperties
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties">WorkspacesDirectoryWorkspaceCreationProperties</a>

---

##### `workspace_directory_description_input`<sup>Optional</sup> <a name="workspace_directory_description_input" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.workspaceDirectoryDescriptionInput"></a>

```python
workspace_directory_description_input: str
```

- *Type:* str

---

##### `workspace_directory_name_input`<sup>Optional</sup> <a name="workspace_directory_name_input" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.workspaceDirectoryNameInput"></a>

```python
workspace_directory_name_input: str
```

- *Type:* str

---

##### `workspace_type_input`<sup>Optional</sup> <a name="workspace_type_input" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.workspaceTypeInput"></a>

```python
workspace_type_input: str
```

- *Type:* str

---

##### `enable_self_service`<sup>Required</sup> <a name="enable_self_service" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.enableSelfService"></a>

```python
enable_self_service: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `endpoint_encryption_mode`<sup>Required</sup> <a name="endpoint_encryption_mode" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.endpointEncryptionMode"></a>

```python
endpoint_encryption_mode: str
```

- *Type:* str

---

##### `idc_instance_arn`<sup>Required</sup> <a name="idc_instance_arn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.idcInstanceArn"></a>

```python
idc_instance_arn: str
```

- *Type:* str

---

##### `ip_group_ids`<sup>Required</sup> <a name="ip_group_ids" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.ipGroupIds"></a>

```python
ip_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_ids`<sup>Required</sup> <a name="subnet_ids" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.subnetIds"></a>

```python
subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tenancy`<sup>Required</sup> <a name="tenancy" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.tenancy"></a>

```python
tenancy: str
```

- *Type:* str

---

##### `user_identity_type`<sup>Required</sup> <a name="user_identity_type" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.userIdentityType"></a>

```python
user_identity_type: str
```

- *Type:* str

---

##### `workspace_directory_description`<sup>Required</sup> <a name="workspace_directory_description" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.workspaceDirectoryDescription"></a>

```python
workspace_directory_description: str
```

- *Type:* str

---

##### `workspace_directory_name`<sup>Required</sup> <a name="workspace_directory_name" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.workspaceDirectoryName"></a>

```python
workspace_directory_name: str
```

- *Type:* str

---

##### `workspace_type`<sup>Required</sup> <a name="workspace_type" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.workspaceType"></a>

```python
workspace_type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### WorkspacesDirectoryActiveDirectoryConfig <a name="WorkspacesDirectoryActiveDirectoryConfig" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfig.Initializer"></a>

```python
from cdktn_provider_awscc import workspaces_directory

workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfig(
  domain_name: str = None,
  service_account_secret_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfig.property.domainName">domain_name</a></code> | <code>str</code> | The name of the domain. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfig.property.serviceAccountSecretArn">service_account_secret_arn</a></code> | <code>str</code> | Indicates the secret ARN on the service account. |

---

##### `domain_name`<sup>Optional</sup> <a name="domain_name" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfig.property.domainName"></a>

```python
domain_name: str
```

- *Type:* str

The name of the domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#domain_name WorkspacesDirectory#domain_name}

---

##### `service_account_secret_arn`<sup>Optional</sup> <a name="service_account_secret_arn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfig.property.serviceAccountSecretArn"></a>

```python
service_account_secret_arn: str
```

- *Type:* str

Indicates the secret ARN on the service account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#service_account_secret_arn WorkspacesDirectory#service_account_secret_arn}

---

### WorkspacesDirectoryCertificateBasedAuthProperties <a name="WorkspacesDirectoryCertificateBasedAuthProperties" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthProperties.Initializer"></a>

```python
from cdktn_provider_awscc import workspaces_directory

workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthProperties(
  certificate_authority_arn: str = None,
  status: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthProperties.property.certificateAuthorityArn">certificate_authority_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the Amazon Web Services Certificate Manager Private CA resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthProperties.property.status">status</a></code> | <code>str</code> | The status of the certificate-based authentication properties. |

---

##### `certificate_authority_arn`<sup>Optional</sup> <a name="certificate_authority_arn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthProperties.property.certificateAuthorityArn"></a>

```python
certificate_authority_arn: str
```

- *Type:* str

The Amazon Resource Name (ARN) of the Amazon Web Services Certificate Manager Private CA resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#certificate_authority_arn WorkspacesDirectory#certificate_authority_arn}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthProperties.property.status"></a>

```python
status: str
```

- *Type:* str

The status of the certificate-based authentication properties.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#status WorkspacesDirectory#status}

---

### WorkspacesDirectoryConfig <a name="WorkspacesDirectoryConfig" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.Initializer"></a>

```python
from cdktn_provider_awscc import workspaces_directory

workspacesDirectory.WorkspacesDirectoryConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  active_directory_config: WorkspacesDirectoryActiveDirectoryConfig = None,
  certificate_based_auth_properties: WorkspacesDirectoryCertificateBasedAuthProperties = None,
  enable_self_service: bool | IResolvable = None,
  endpoint_encryption_mode: str = None,
  idc_instance_arn: str = None,
  ip_group_ids: typing.List[str] = None,
  microsoft_entra_config: WorkspacesDirectoryMicrosoftEntraConfig = None,
  saml_properties: WorkspacesDirectorySamlProperties = None,
  selfservice_permissions: WorkspacesDirectorySelfservicePermissions = None,
  streaming_properties: WorkspacesDirectoryStreamingProperties = None,
  subnet_ids: typing.List[str] = None,
  tags: IResolvable | typing.List[WorkspacesDirectoryTags] = None,
  tenancy: str = None,
  user_identity_type: str = None,
  workspace_access_properties: WorkspacesDirectoryWorkspaceAccessProperties = None,
  workspace_creation_properties: WorkspacesDirectoryWorkspaceCreationProperties = None,
  workspace_directory_description: str = None,
  workspace_directory_name: str = None,
  workspace_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.activeDirectoryConfig">active_directory_config</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfig">WorkspacesDirectoryActiveDirectoryConfig</a></code> | Information about the Active Directory config. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.certificateBasedAuthProperties">certificate_based_auth_properties</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthProperties">WorkspacesDirectoryCertificateBasedAuthProperties</a></code> | Describes the properties of the certificate-based authentication you want to use with your WorkSpaces. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.enableSelfService">enable_self_service</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates whether self-service capabilities are enabled or disabled. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.endpointEncryptionMode">endpoint_encryption_mode</a></code> | <code>str</code> | Endpoint encryption mode that allows you to configure the specified directory between Standard TLS and FIPS 140-2 validated mode. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.idcInstanceArn">idc_instance_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the identity center instance. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.ipGroupIds">ip_group_ids</a></code> | <code>typing.List[str]</code> | The identifiers of the IP access control groups associated with the directory. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.microsoftEntraConfig">microsoft_entra_config</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfig">WorkspacesDirectoryMicrosoftEntraConfig</a></code> | Specifies the configurations of the Microsoft Entra. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.samlProperties">saml_properties</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlProperties">WorkspacesDirectorySamlProperties</a></code> | Describes the enablement status, user access URL, and relay state parameter name that are used for configuring federation with an SAML 2.0 identity provider. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.selfservicePermissions">selfservice_permissions</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissions">WorkspacesDirectorySelfservicePermissions</a></code> | Describes the self-service permissions for a directory. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.streamingProperties">streaming_properties</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingProperties">WorkspacesDirectoryStreamingProperties</a></code> | Describes the streaming properties. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | The identifiers of the subnets for your virtual private cloud (VPC). |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTags">WorkspacesDirectoryTags</a>]</code> | The tags associated with the directory. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.tenancy">tenancy</a></code> | <code>str</code> | Indicates whether your WorkSpace directory is dedicated or shared. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.userIdentityType">user_identity_type</a></code> | <code>str</code> | The type of identity management the user is using. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.workspaceAccessProperties">workspace_access_properties</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties">WorkspacesDirectoryWorkspaceAccessProperties</a></code> | The device types and operating systems that can be used to access a WorkSpace. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.workspaceCreationProperties">workspace_creation_properties</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties">WorkspacesDirectoryWorkspaceCreationProperties</a></code> | The default values that are used to create WorkSpaces. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.workspaceDirectoryDescription">workspace_directory_description</a></code> | <code>str</code> | Description of the directory to register. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.workspaceDirectoryName">workspace_directory_name</a></code> | <code>str</code> | The name of the directory to register. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.workspaceType">workspace_type</a></code> | <code>str</code> | Indicates whether the directory's WorkSpace type is personal or pools. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `active_directory_config`<sup>Optional</sup> <a name="active_directory_config" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.activeDirectoryConfig"></a>

```python
active_directory_config: WorkspacesDirectoryActiveDirectoryConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfig">WorkspacesDirectoryActiveDirectoryConfig</a>

Information about the Active Directory config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#active_directory_config WorkspacesDirectory#active_directory_config}

---

##### `certificate_based_auth_properties`<sup>Optional</sup> <a name="certificate_based_auth_properties" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.certificateBasedAuthProperties"></a>

```python
certificate_based_auth_properties: WorkspacesDirectoryCertificateBasedAuthProperties
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthProperties">WorkspacesDirectoryCertificateBasedAuthProperties</a>

Describes the properties of the certificate-based authentication you want to use with your WorkSpaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#certificate_based_auth_properties WorkspacesDirectory#certificate_based_auth_properties}

---

##### `enable_self_service`<sup>Optional</sup> <a name="enable_self_service" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.enableSelfService"></a>

```python
enable_self_service: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Indicates whether self-service capabilities are enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#enable_self_service WorkspacesDirectory#enable_self_service}

---

##### `endpoint_encryption_mode`<sup>Optional</sup> <a name="endpoint_encryption_mode" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.endpointEncryptionMode"></a>

```python
endpoint_encryption_mode: str
```

- *Type:* str

Endpoint encryption mode that allows you to configure the specified directory between Standard TLS and FIPS 140-2 validated mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#endpoint_encryption_mode WorkspacesDirectory#endpoint_encryption_mode}

---

##### `idc_instance_arn`<sup>Optional</sup> <a name="idc_instance_arn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.idcInstanceArn"></a>

```python
idc_instance_arn: str
```

- *Type:* str

The Amazon Resource Name (ARN) of the identity center instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#idc_instance_arn WorkspacesDirectory#idc_instance_arn}

---

##### `ip_group_ids`<sup>Optional</sup> <a name="ip_group_ids" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.ipGroupIds"></a>

```python
ip_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

The identifiers of the IP access control groups associated with the directory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#ip_group_ids WorkspacesDirectory#ip_group_ids}

---

##### `microsoft_entra_config`<sup>Optional</sup> <a name="microsoft_entra_config" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.microsoftEntraConfig"></a>

```python
microsoft_entra_config: WorkspacesDirectoryMicrosoftEntraConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfig">WorkspacesDirectoryMicrosoftEntraConfig</a>

Specifies the configurations of the Microsoft Entra.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#microsoft_entra_config WorkspacesDirectory#microsoft_entra_config}

---

##### `saml_properties`<sup>Optional</sup> <a name="saml_properties" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.samlProperties"></a>

```python
saml_properties: WorkspacesDirectorySamlProperties
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlProperties">WorkspacesDirectorySamlProperties</a>

Describes the enablement status, user access URL, and relay state parameter name that are used for configuring federation with an SAML 2.0 identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#saml_properties WorkspacesDirectory#saml_properties}

---

##### `selfservice_permissions`<sup>Optional</sup> <a name="selfservice_permissions" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.selfservicePermissions"></a>

```python
selfservice_permissions: WorkspacesDirectorySelfservicePermissions
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissions">WorkspacesDirectorySelfservicePermissions</a>

Describes the self-service permissions for a directory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#selfservice_permissions WorkspacesDirectory#selfservice_permissions}

---

##### `streaming_properties`<sup>Optional</sup> <a name="streaming_properties" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.streamingProperties"></a>

```python
streaming_properties: WorkspacesDirectoryStreamingProperties
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingProperties">WorkspacesDirectoryStreamingProperties</a>

Describes the streaming properties.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#streaming_properties WorkspacesDirectory#streaming_properties}

---

##### `subnet_ids`<sup>Optional</sup> <a name="subnet_ids" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.subnetIds"></a>

```python
subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

The identifiers of the subnets for your virtual private cloud (VPC).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#subnet_ids WorkspacesDirectory#subnet_ids}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[WorkspacesDirectoryTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTags">WorkspacesDirectoryTags</a>]

The tags associated with the directory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#tags WorkspacesDirectory#tags}

---

##### `tenancy`<sup>Optional</sup> <a name="tenancy" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.tenancy"></a>

```python
tenancy: str
```

- *Type:* str

Indicates whether your WorkSpace directory is dedicated or shared.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#tenancy WorkspacesDirectory#tenancy}

---

##### `user_identity_type`<sup>Optional</sup> <a name="user_identity_type" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.userIdentityType"></a>

```python
user_identity_type: str
```

- *Type:* str

The type of identity management the user is using.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#user_identity_type WorkspacesDirectory#user_identity_type}

---

##### `workspace_access_properties`<sup>Optional</sup> <a name="workspace_access_properties" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.workspaceAccessProperties"></a>

```python
workspace_access_properties: WorkspacesDirectoryWorkspaceAccessProperties
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties">WorkspacesDirectoryWorkspaceAccessProperties</a>

The device types and operating systems that can be used to access a WorkSpace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#workspace_access_properties WorkspacesDirectory#workspace_access_properties}

---

##### `workspace_creation_properties`<sup>Optional</sup> <a name="workspace_creation_properties" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.workspaceCreationProperties"></a>

```python
workspace_creation_properties: WorkspacesDirectoryWorkspaceCreationProperties
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties">WorkspacesDirectoryWorkspaceCreationProperties</a>

The default values that are used to create WorkSpaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#workspace_creation_properties WorkspacesDirectory#workspace_creation_properties}

---

##### `workspace_directory_description`<sup>Optional</sup> <a name="workspace_directory_description" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.workspaceDirectoryDescription"></a>

```python
workspace_directory_description: str
```

- *Type:* str

Description of the directory to register.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#workspace_directory_description WorkspacesDirectory#workspace_directory_description}

---

##### `workspace_directory_name`<sup>Optional</sup> <a name="workspace_directory_name" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.workspaceDirectoryName"></a>

```python
workspace_directory_name: str
```

- *Type:* str

The name of the directory to register.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#workspace_directory_name WorkspacesDirectory#workspace_directory_name}

---

##### `workspace_type`<sup>Optional</sup> <a name="workspace_type" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.workspaceType"></a>

```python
workspace_type: str
```

- *Type:* str

Indicates whether the directory's WorkSpace type is personal or pools.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#workspace_type WorkspacesDirectory#workspace_type}

---

### WorkspacesDirectoryIdcConfig <a name="WorkspacesDirectoryIdcConfig" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfig.Initializer"></a>

```python
from cdktn_provider_awscc import workspaces_directory

workspacesDirectory.WorkspacesDirectoryIdcConfig()
```


### WorkspacesDirectoryMicrosoftEntraConfig <a name="WorkspacesDirectoryMicrosoftEntraConfig" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfig.Initializer"></a>

```python
from cdktn_provider_awscc import workspaces_directory

workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfig(
  application_config_secret_arn: str = None,
  tenant_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfig.property.applicationConfigSecretArn">application_config_secret_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the application config. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfig.property.tenantId">tenant_id</a></code> | <code>str</code> | The identifier of the tenant. |

---

##### `application_config_secret_arn`<sup>Optional</sup> <a name="application_config_secret_arn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfig.property.applicationConfigSecretArn"></a>

```python
application_config_secret_arn: str
```

- *Type:* str

The Amazon Resource Name (ARN) of the application config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#application_config_secret_arn WorkspacesDirectory#application_config_secret_arn}

---

##### `tenant_id`<sup>Optional</sup> <a name="tenant_id" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfig.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

The identifier of the tenant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#tenant_id WorkspacesDirectory#tenant_id}

---

### WorkspacesDirectorySamlProperties <a name="WorkspacesDirectorySamlProperties" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlProperties.Initializer"></a>

```python
from cdktn_provider_awscc import workspaces_directory

workspacesDirectory.WorkspacesDirectorySamlProperties(
  relay_state_parameter_name: str = None,
  status: str = None,
  user_access_url: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlProperties.property.relayStateParameterName">relay_state_parameter_name</a></code> | <code>str</code> | The relay state parameter name supported by the SAML 2.0 identity provider (IdP). |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlProperties.property.status">status</a></code> | <code>str</code> | Indicates the status of SAML 2.0 authentication. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlProperties.property.userAccessUrl">user_access_url</a></code> | <code>str</code> | The SAML 2.0 identity provider (IdP) user access URL. |

---

##### `relay_state_parameter_name`<sup>Optional</sup> <a name="relay_state_parameter_name" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlProperties.property.relayStateParameterName"></a>

```python
relay_state_parameter_name: str
```

- *Type:* str

The relay state parameter name supported by the SAML 2.0 identity provider (IdP).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#relay_state_parameter_name WorkspacesDirectory#relay_state_parameter_name}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlProperties.property.status"></a>

```python
status: str
```

- *Type:* str

Indicates the status of SAML 2.0 authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#status WorkspacesDirectory#status}

---

##### `user_access_url`<sup>Optional</sup> <a name="user_access_url" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlProperties.property.userAccessUrl"></a>

```python
user_access_url: str
```

- *Type:* str

The SAML 2.0 identity provider (IdP) user access URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#user_access_url WorkspacesDirectory#user_access_url}

---

### WorkspacesDirectorySelfservicePermissions <a name="WorkspacesDirectorySelfservicePermissions" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissions.Initializer"></a>

```python
from cdktn_provider_awscc import workspaces_directory

workspacesDirectory.WorkspacesDirectorySelfservicePermissions(
  change_compute_type: str = None,
  increase_volume_size: str = None,
  rebuild_workspace: str = None,
  restart_workspace: str = None,
  switch_running_mode: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissions.property.changeComputeType">change_compute_type</a></code> | <code>str</code> | Specifies whether users can change the compute type (bundle) for their WorkSpace. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissions.property.increaseVolumeSize">increase_volume_size</a></code> | <code>str</code> | Specifies whether users can increase the volume size of the drives on their WorkSpace. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissions.property.rebuildWorkspace">rebuild_workspace</a></code> | <code>str</code> | Specifies whether users can rebuild the operating system of a WorkSpace to its original state. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissions.property.restartWorkspace">restart_workspace</a></code> | <code>str</code> | Specifies whether users can restart their WorkSpace. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissions.property.switchRunningMode">switch_running_mode</a></code> | <code>str</code> | Specifies whether users can switch the running mode of their WorkSpace. |

---

##### `change_compute_type`<sup>Optional</sup> <a name="change_compute_type" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissions.property.changeComputeType"></a>

```python
change_compute_type: str
```

- *Type:* str

Specifies whether users can change the compute type (bundle) for their WorkSpace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#change_compute_type WorkspacesDirectory#change_compute_type}

---

##### `increase_volume_size`<sup>Optional</sup> <a name="increase_volume_size" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissions.property.increaseVolumeSize"></a>

```python
increase_volume_size: str
```

- *Type:* str

Specifies whether users can increase the volume size of the drives on their WorkSpace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#increase_volume_size WorkspacesDirectory#increase_volume_size}

---

##### `rebuild_workspace`<sup>Optional</sup> <a name="rebuild_workspace" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissions.property.rebuildWorkspace"></a>

```python
rebuild_workspace: str
```

- *Type:* str

Specifies whether users can rebuild the operating system of a WorkSpace to its original state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#rebuild_workspace WorkspacesDirectory#rebuild_workspace}

---

##### `restart_workspace`<sup>Optional</sup> <a name="restart_workspace" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissions.property.restartWorkspace"></a>

```python
restart_workspace: str
```

- *Type:* str

Specifies whether users can restart their WorkSpace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#restart_workspace WorkspacesDirectory#restart_workspace}

---

##### `switch_running_mode`<sup>Optional</sup> <a name="switch_running_mode" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissions.property.switchRunningMode"></a>

```python
switch_running_mode: str
```

- *Type:* str

Specifies whether users can switch the running mode of their WorkSpace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#switch_running_mode WorkspacesDirectory#switch_running_mode}

---

### WorkspacesDirectoryStreamingProperties <a name="WorkspacesDirectoryStreamingProperties" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingProperties.Initializer"></a>

```python
from cdktn_provider_awscc import workspaces_directory

workspacesDirectory.WorkspacesDirectoryStreamingProperties(
  global_accelerator: WorkspacesDirectoryStreamingPropertiesGlobalAccelerator = None,
  storage_connectors: IResolvable | typing.List[WorkspacesDirectoryStreamingPropertiesStorageConnectors] = None,
  streaming_experience_preferred_protocol: str = None,
  user_settings: IResolvable | typing.List[WorkspacesDirectoryStreamingPropertiesUserSettings] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingProperties.property.globalAccelerator">global_accelerator</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAccelerator">WorkspacesDirectoryStreamingPropertiesGlobalAccelerator</a></code> | Describes the Global Accelerator for directory. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingProperties.property.storageConnectors">storage_connectors</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectors">WorkspacesDirectoryStreamingPropertiesStorageConnectors</a>]</code> | Indicates the storage connector used. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingProperties.property.streamingExperiencePreferredProtocol">streaming_experience_preferred_protocol</a></code> | <code>str</code> | Indicates the type of preferred protocol for the streaming experience. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingProperties.property.userSettings">user_settings</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettings">WorkspacesDirectoryStreamingPropertiesUserSettings</a>]</code> | Indicates the permission settings associated with the user. |

---

##### `global_accelerator`<sup>Optional</sup> <a name="global_accelerator" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingProperties.property.globalAccelerator"></a>

```python
global_accelerator: WorkspacesDirectoryStreamingPropertiesGlobalAccelerator
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAccelerator">WorkspacesDirectoryStreamingPropertiesGlobalAccelerator</a>

Describes the Global Accelerator for directory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#global_accelerator WorkspacesDirectory#global_accelerator}

---

##### `storage_connectors`<sup>Optional</sup> <a name="storage_connectors" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingProperties.property.storageConnectors"></a>

```python
storage_connectors: IResolvable | typing.List[WorkspacesDirectoryStreamingPropertiesStorageConnectors]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectors">WorkspacesDirectoryStreamingPropertiesStorageConnectors</a>]

Indicates the storage connector used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#storage_connectors WorkspacesDirectory#storage_connectors}

---

##### `streaming_experience_preferred_protocol`<sup>Optional</sup> <a name="streaming_experience_preferred_protocol" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingProperties.property.streamingExperiencePreferredProtocol"></a>

```python
streaming_experience_preferred_protocol: str
```

- *Type:* str

Indicates the type of preferred protocol for the streaming experience.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#streaming_experience_preferred_protocol WorkspacesDirectory#streaming_experience_preferred_protocol}

---

##### `user_settings`<sup>Optional</sup> <a name="user_settings" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingProperties.property.userSettings"></a>

```python
user_settings: IResolvable | typing.List[WorkspacesDirectoryStreamingPropertiesUserSettings]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettings">WorkspacesDirectoryStreamingPropertiesUserSettings</a>]

Indicates the permission settings associated with the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#user_settings WorkspacesDirectory#user_settings}

---

### WorkspacesDirectoryStreamingPropertiesGlobalAccelerator <a name="WorkspacesDirectoryStreamingPropertiesGlobalAccelerator" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAccelerator"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAccelerator.Initializer"></a>

```python
from cdktn_provider_awscc import workspaces_directory

workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAccelerator(
  mode: str = None,
  preferred_protocol: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAccelerator.property.mode">mode</a></code> | <code>str</code> | Indicates if Global Accelerator for directory is enabled or disabled. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAccelerator.property.preferredProtocol">preferred_protocol</a></code> | <code>str</code> | Indicates the preferred protocol for Global Accelerator. |

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAccelerator.property.mode"></a>

```python
mode: str
```

- *Type:* str

Indicates if Global Accelerator for directory is enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#mode WorkspacesDirectory#mode}

---

##### `preferred_protocol`<sup>Optional</sup> <a name="preferred_protocol" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAccelerator.property.preferredProtocol"></a>

```python
preferred_protocol: str
```

- *Type:* str

Indicates the preferred protocol for Global Accelerator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#preferred_protocol WorkspacesDirectory#preferred_protocol}

---

### WorkspacesDirectoryStreamingPropertiesStorageConnectors <a name="WorkspacesDirectoryStreamingPropertiesStorageConnectors" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectors.Initializer"></a>

```python
from cdktn_provider_awscc import workspaces_directory

workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectors(
  connector_type: str = None,
  status: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectors.property.connectorType">connector_type</a></code> | <code>str</code> | The type of connector used to save user files. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectors.property.status">status</a></code> | <code>str</code> | Indicates if the storage connector is enabled or disabled. |

---

##### `connector_type`<sup>Optional</sup> <a name="connector_type" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectors.property.connectorType"></a>

```python
connector_type: str
```

- *Type:* str

The type of connector used to save user files.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#connector_type WorkspacesDirectory#connector_type}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectors.property.status"></a>

```python
status: str
```

- *Type:* str

Indicates if the storage connector is enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#status WorkspacesDirectory#status}

---

### WorkspacesDirectoryStreamingPropertiesUserSettings <a name="WorkspacesDirectoryStreamingPropertiesUserSettings" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettings.Initializer"></a>

```python
from cdktn_provider_awscc import workspaces_directory

workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettings(
  action: str = None,
  maximum_length: typing.Union[int, float] = None,
  permission: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettings.property.action">action</a></code> | <code>str</code> | Indicates the type of action. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettings.property.maximumLength">maximum_length</a></code> | <code>typing.Union[int, float]</code> | Indicates the maximum character length for the specified user setting. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettings.property.permission">permission</a></code> | <code>str</code> | Indicates if the setting is enabled or disabled. |

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettings.property.action"></a>

```python
action: str
```

- *Type:* str

Indicates the type of action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#action WorkspacesDirectory#action}

---

##### `maximum_length`<sup>Optional</sup> <a name="maximum_length" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettings.property.maximumLength"></a>

```python
maximum_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Indicates the maximum character length for the specified user setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#maximum_length WorkspacesDirectory#maximum_length}

---

##### `permission`<sup>Optional</sup> <a name="permission" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettings.property.permission"></a>

```python
permission: str
```

- *Type:* str

Indicates if the setting is enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#permission WorkspacesDirectory#permission}

---

### WorkspacesDirectoryTags <a name="WorkspacesDirectoryTags" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTags.Initializer"></a>

```python
from cdktn_provider_awscc import workspaces_directory

workspacesDirectory.WorkspacesDirectoryTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTags.property.key">key</a></code> | <code>str</code> | The key of the tag. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTags.property.value">value</a></code> | <code>str</code> | The value of the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#key WorkspacesDirectory#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#value WorkspacesDirectory#value}

---

### WorkspacesDirectoryWorkspaceAccessProperties <a name="WorkspacesDirectoryWorkspaceAccessProperties" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties.Initializer"></a>

```python
from cdktn_provider_awscc import workspaces_directory

workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties(
  access_endpoint_config: WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfig = None,
  device_type_android: str = None,
  device_type_chrome_os: str = None,
  device_type_ios: str = None,
  device_type_linux: str = None,
  device_type_osx: str = None,
  device_type_web: str = None,
  device_type_windows: str = None,
  device_type_work_spaces_thin_client: str = None,
  device_type_zero_client: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties.property.accessEndpointConfig">access_endpoint_config</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfig">WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfig</a></code> | Describes the access endpoint configuration for a WorkSpace. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties.property.deviceTypeAndroid">device_type_android</a></code> | <code>str</code> | Indicates whether users can use Android and Android-compatible Chrome OS devices to access their WorkSpaces. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties.property.deviceTypeChromeOs">device_type_chrome_os</a></code> | <code>str</code> | Indicates whether users can use Chromebooks to access their WorkSpaces. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties.property.deviceTypeIos">device_type_ios</a></code> | <code>str</code> | Indicates whether users can use iOS devices to access their WorkSpaces. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties.property.deviceTypeLinux">device_type_linux</a></code> | <code>str</code> | Indicates whether users can use Linux clients to access their WorkSpaces. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties.property.deviceTypeOsx">device_type_osx</a></code> | <code>str</code> | Indicates whether users can use macOS clients to access their WorkSpaces. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties.property.deviceTypeWeb">device_type_web</a></code> | <code>str</code> | Indicates whether users can access their WorkSpaces through a web browser. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties.property.deviceTypeWindows">device_type_windows</a></code> | <code>str</code> | Indicates whether users can use Windows clients to access their WorkSpaces. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties.property.deviceTypeWorkSpacesThinClient">device_type_work_spaces_thin_client</a></code> | <code>str</code> | Indicates whether users can access their WorkSpaces through a WorkSpaces Thin Client. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties.property.deviceTypeZeroClient">device_type_zero_client</a></code> | <code>str</code> | Indicates whether users can use zero client devices to access their WorkSpaces. |

---

##### `access_endpoint_config`<sup>Optional</sup> <a name="access_endpoint_config" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties.property.accessEndpointConfig"></a>

```python
access_endpoint_config: WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfig">WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfig</a>

Describes the access endpoint configuration for a WorkSpace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#access_endpoint_config WorkspacesDirectory#access_endpoint_config}

---

##### `device_type_android`<sup>Optional</sup> <a name="device_type_android" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties.property.deviceTypeAndroid"></a>

```python
device_type_android: str
```

- *Type:* str

Indicates whether users can use Android and Android-compatible Chrome OS devices to access their WorkSpaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#device_type_android WorkspacesDirectory#device_type_android}

---

##### `device_type_chrome_os`<sup>Optional</sup> <a name="device_type_chrome_os" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties.property.deviceTypeChromeOs"></a>

```python
device_type_chrome_os: str
```

- *Type:* str

Indicates whether users can use Chromebooks to access their WorkSpaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#device_type_chrome_os WorkspacesDirectory#device_type_chrome_os}

---

##### `device_type_ios`<sup>Optional</sup> <a name="device_type_ios" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties.property.deviceTypeIos"></a>

```python
device_type_ios: str
```

- *Type:* str

Indicates whether users can use iOS devices to access their WorkSpaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#device_type_ios WorkspacesDirectory#device_type_ios}

---

##### `device_type_linux`<sup>Optional</sup> <a name="device_type_linux" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties.property.deviceTypeLinux"></a>

```python
device_type_linux: str
```

- *Type:* str

Indicates whether users can use Linux clients to access their WorkSpaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#device_type_linux WorkspacesDirectory#device_type_linux}

---

##### `device_type_osx`<sup>Optional</sup> <a name="device_type_osx" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties.property.deviceTypeOsx"></a>

```python
device_type_osx: str
```

- *Type:* str

Indicates whether users can use macOS clients to access their WorkSpaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#device_type_osx WorkspacesDirectory#device_type_osx}

---

##### `device_type_web`<sup>Optional</sup> <a name="device_type_web" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties.property.deviceTypeWeb"></a>

```python
device_type_web: str
```

- *Type:* str

Indicates whether users can access their WorkSpaces through a web browser.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#device_type_web WorkspacesDirectory#device_type_web}

---

##### `device_type_windows`<sup>Optional</sup> <a name="device_type_windows" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties.property.deviceTypeWindows"></a>

```python
device_type_windows: str
```

- *Type:* str

Indicates whether users can use Windows clients to access their WorkSpaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#device_type_windows WorkspacesDirectory#device_type_windows}

---

##### `device_type_work_spaces_thin_client`<sup>Optional</sup> <a name="device_type_work_spaces_thin_client" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties.property.deviceTypeWorkSpacesThinClient"></a>

```python
device_type_work_spaces_thin_client: str
```

- *Type:* str

Indicates whether users can access their WorkSpaces through a WorkSpaces Thin Client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#device_type_work_spaces_thin_client WorkspacesDirectory#device_type_work_spaces_thin_client}

---

##### `device_type_zero_client`<sup>Optional</sup> <a name="device_type_zero_client" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties.property.deviceTypeZeroClient"></a>

```python
device_type_zero_client: str
```

- *Type:* str

Indicates whether users can use zero client devices to access their WorkSpaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#device_type_zero_client WorkspacesDirectory#device_type_zero_client}

---

### WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfig <a name="WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfig" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfig.Initializer"></a>

```python
from cdktn_provider_awscc import workspaces_directory

workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfig(
  access_endpoints: IResolvable | typing.List[WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpoints] = None,
  internet_fallback_protocols: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfig.property.accessEndpoints">access_endpoints</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpoints">WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpoints</a>]</code> | Indicates a list of access endpoints associated with this directory. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfig.property.internetFallbackProtocols">internet_fallback_protocols</a></code> | <code>typing.List[str]</code> | Indicates a list of protocols that fallback to using the public Internet when streaming over a VPC endpoint is not available. |

---

##### `access_endpoints`<sup>Optional</sup> <a name="access_endpoints" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfig.property.accessEndpoints"></a>

```python
access_endpoints: IResolvable | typing.List[WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpoints]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpoints">WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpoints</a>]

Indicates a list of access endpoints associated with this directory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#access_endpoints WorkspacesDirectory#access_endpoints}

---

##### `internet_fallback_protocols`<sup>Optional</sup> <a name="internet_fallback_protocols" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfig.property.internetFallbackProtocols"></a>

```python
internet_fallback_protocols: typing.List[str]
```

- *Type:* typing.List[str]

Indicates a list of protocols that fallback to using the public Internet when streaming over a VPC endpoint is not available.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#internet_fallback_protocols WorkspacesDirectory#internet_fallback_protocols}

---

### WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpoints <a name="WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpoints" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpoints.Initializer"></a>

```python
from cdktn_provider_awscc import workspaces_directory

workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpoints(
  access_endpoint_type: str = None,
  vpc_endpoint_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpoints.property.accessEndpointType">access_endpoint_type</a></code> | <code>str</code> | Indicates the type of access endpoint. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpoints.property.vpcEndpointId">vpc_endpoint_id</a></code> | <code>str</code> | Indicates the VPC endpoint to use for access. |

---

##### `access_endpoint_type`<sup>Optional</sup> <a name="access_endpoint_type" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpoints.property.accessEndpointType"></a>

```python
access_endpoint_type: str
```

- *Type:* str

Indicates the type of access endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#access_endpoint_type WorkspacesDirectory#access_endpoint_type}

---

##### `vpc_endpoint_id`<sup>Optional</sup> <a name="vpc_endpoint_id" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpoints.property.vpcEndpointId"></a>

```python
vpc_endpoint_id: str
```

- *Type:* str

Indicates the VPC endpoint to use for access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#vpc_endpoint_id WorkspacesDirectory#vpc_endpoint_id}

---

### WorkspacesDirectoryWorkspaceCreationProperties <a name="WorkspacesDirectoryWorkspaceCreationProperties" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties.Initializer"></a>

```python
from cdktn_provider_awscc import workspaces_directory

workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties(
  custom_security_group_id: str = None,
  default_ou: str = None,
  enable_internet_access: bool | IResolvable = None,
  enable_maintenance_mode: bool | IResolvable = None,
  instance_iam_role_arn: str = None,
  user_enabled_as_local_administrator: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties.property.customSecurityGroupId">custom_security_group_id</a></code> | <code>str</code> | The identifier of the default security group to apply to WorkSpaces when they are created. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties.property.defaultOu">default_ou</a></code> | <code>str</code> | The organizational unit (OU) in the directory for the WorkSpace machine accounts. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties.property.enableInternetAccess">enable_internet_access</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether to automatically assign an Elastic public IP address to WorkSpaces in this directory by default. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties.property.enableMaintenanceMode">enable_maintenance_mode</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether maintenance mode is enabled for WorkSpaces. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties.property.instanceIamRoleArn">instance_iam_role_arn</a></code> | <code>str</code> | Indicates the IAM role ARN of the instance. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties.property.userEnabledAsLocalAdministrator">user_enabled_as_local_administrator</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether WorkSpace users are local administrators on their WorkSpaces. |

---

##### `custom_security_group_id`<sup>Optional</sup> <a name="custom_security_group_id" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties.property.customSecurityGroupId"></a>

```python
custom_security_group_id: str
```

- *Type:* str

The identifier of the default security group to apply to WorkSpaces when they are created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#custom_security_group_id WorkspacesDirectory#custom_security_group_id}

---

##### `default_ou`<sup>Optional</sup> <a name="default_ou" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties.property.defaultOu"></a>

```python
default_ou: str
```

- *Type:* str

The organizational unit (OU) in the directory for the WorkSpace machine accounts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#default_ou WorkspacesDirectory#default_ou}

---

##### `enable_internet_access`<sup>Optional</sup> <a name="enable_internet_access" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties.property.enableInternetAccess"></a>

```python
enable_internet_access: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Specifies whether to automatically assign an Elastic public IP address to WorkSpaces in this directory by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#enable_internet_access WorkspacesDirectory#enable_internet_access}

---

##### `enable_maintenance_mode`<sup>Optional</sup> <a name="enable_maintenance_mode" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties.property.enableMaintenanceMode"></a>

```python
enable_maintenance_mode: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Specifies whether maintenance mode is enabled for WorkSpaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#enable_maintenance_mode WorkspacesDirectory#enable_maintenance_mode}

---

##### `instance_iam_role_arn`<sup>Optional</sup> <a name="instance_iam_role_arn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties.property.instanceIamRoleArn"></a>

```python
instance_iam_role_arn: str
```

- *Type:* str

Indicates the IAM role ARN of the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#instance_iam_role_arn WorkspacesDirectory#instance_iam_role_arn}

---

##### `user_enabled_as_local_administrator`<sup>Optional</sup> <a name="user_enabled_as_local_administrator" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties.property.userEnabledAsLocalAdministrator"></a>

```python
user_enabled_as_local_administrator: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Specifies whether WorkSpace users are local administrators on their WorkSpaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#user_enabled_as_local_administrator WorkspacesDirectory#user_enabled_as_local_administrator}

---

## Classes <a name="Classes" id="Classes"></a>

### WorkspacesDirectoryActiveDirectoryConfigOutputReference <a name="WorkspacesDirectoryActiveDirectoryConfigOutputReference" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import workspaces_directory

workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.resetDomainName">reset_domain_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.resetServiceAccountSecretArn">reset_service_account_secret_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_domain_name` <a name="reset_domain_name" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.resetDomainName"></a>

```python
def reset_domain_name() -> None
```

##### `reset_service_account_secret_arn` <a name="reset_service_account_secret_arn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.resetServiceAccountSecretArn"></a>

```python
def reset_service_account_secret_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.property.domainNameInput">domain_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.property.serviceAccountSecretArnInput">service_account_secret_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.property.domainName">domain_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.property.serviceAccountSecretArn">service_account_secret_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfig">WorkspacesDirectoryActiveDirectoryConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `domain_name_input`<sup>Optional</sup> <a name="domain_name_input" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.property.domainNameInput"></a>

```python
domain_name_input: str
```

- *Type:* str

---

##### `service_account_secret_arn_input`<sup>Optional</sup> <a name="service_account_secret_arn_input" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.property.serviceAccountSecretArnInput"></a>

```python
service_account_secret_arn_input: str
```

- *Type:* str

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.property.domainName"></a>

```python
domain_name: str
```

- *Type:* str

---

##### `service_account_secret_arn`<sup>Required</sup> <a name="service_account_secret_arn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.property.serviceAccountSecretArn"></a>

```python
service_account_secret_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | WorkspacesDirectoryActiveDirectoryConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfig">WorkspacesDirectoryActiveDirectoryConfig</a>

---


### WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference <a name="WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import workspaces_directory

workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.resetCertificateAuthorityArn">reset_certificate_authority_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.resetStatus">reset_status</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_certificate_authority_arn` <a name="reset_certificate_authority_arn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.resetCertificateAuthorityArn"></a>

```python
def reset_certificate_authority_arn() -> None
```

##### `reset_status` <a name="reset_status" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.resetStatus"></a>

```python
def reset_status() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.property.certificateAuthorityArnInput">certificate_authority_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.property.certificateAuthorityArn">certificate_authority_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthProperties">WorkspacesDirectoryCertificateBasedAuthProperties</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `certificate_authority_arn_input`<sup>Optional</sup> <a name="certificate_authority_arn_input" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.property.certificateAuthorityArnInput"></a>

```python
certificate_authority_arn_input: str
```

- *Type:* str

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `certificate_authority_arn`<sup>Required</sup> <a name="certificate_authority_arn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.property.certificateAuthorityArn"></a>

```python
certificate_authority_arn: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | WorkspacesDirectoryCertificateBasedAuthProperties
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthProperties">WorkspacesDirectoryCertificateBasedAuthProperties</a>

---


### WorkspacesDirectoryIdcConfigOutputReference <a name="WorkspacesDirectoryIdcConfigOutputReference" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import workspaces_directory

workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.property.applicationArn">application_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.property.instanceArn">instance_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfig">WorkspacesDirectoryIdcConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `application_arn`<sup>Required</sup> <a name="application_arn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.property.applicationArn"></a>

```python
application_arn: str
```

- *Type:* str

---

##### `instance_arn`<sup>Required</sup> <a name="instance_arn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.property.instanceArn"></a>

```python
instance_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.property.internalValue"></a>

```python
internal_value: WorkspacesDirectoryIdcConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfig">WorkspacesDirectoryIdcConfig</a>

---


### WorkspacesDirectoryMicrosoftEntraConfigOutputReference <a name="WorkspacesDirectoryMicrosoftEntraConfigOutputReference" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import workspaces_directory

workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.resetApplicationConfigSecretArn">reset_application_config_secret_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.resetTenantId">reset_tenant_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_application_config_secret_arn` <a name="reset_application_config_secret_arn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.resetApplicationConfigSecretArn"></a>

```python
def reset_application_config_secret_arn() -> None
```

##### `reset_tenant_id` <a name="reset_tenant_id" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.resetTenantId"></a>

```python
def reset_tenant_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.property.applicationConfigSecretArnInput">application_config_secret_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.property.tenantIdInput">tenant_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.property.applicationConfigSecretArn">application_config_secret_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.property.tenantId">tenant_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfig">WorkspacesDirectoryMicrosoftEntraConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `application_config_secret_arn_input`<sup>Optional</sup> <a name="application_config_secret_arn_input" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.property.applicationConfigSecretArnInput"></a>

```python
application_config_secret_arn_input: str
```

- *Type:* str

---

##### `tenant_id_input`<sup>Optional</sup> <a name="tenant_id_input" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.property.tenantIdInput"></a>

```python
tenant_id_input: str
```

- *Type:* str

---

##### `application_config_secret_arn`<sup>Required</sup> <a name="application_config_secret_arn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.property.applicationConfigSecretArn"></a>

```python
application_config_secret_arn: str
```

- *Type:* str

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | WorkspacesDirectoryMicrosoftEntraConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfig">WorkspacesDirectoryMicrosoftEntraConfig</a>

---


### WorkspacesDirectorySamlPropertiesOutputReference <a name="WorkspacesDirectorySamlPropertiesOutputReference" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import workspaces_directory

workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.resetRelayStateParameterName">reset_relay_state_parameter_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.resetStatus">reset_status</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.resetUserAccessUrl">reset_user_access_url</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_relay_state_parameter_name` <a name="reset_relay_state_parameter_name" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.resetRelayStateParameterName"></a>

```python
def reset_relay_state_parameter_name() -> None
```

##### `reset_status` <a name="reset_status" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.resetStatus"></a>

```python
def reset_status() -> None
```

##### `reset_user_access_url` <a name="reset_user_access_url" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.resetUserAccessUrl"></a>

```python
def reset_user_access_url() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.property.relayStateParameterNameInput">relay_state_parameter_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.property.userAccessUrlInput">user_access_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.property.relayStateParameterName">relay_state_parameter_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.property.userAccessUrl">user_access_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlProperties">WorkspacesDirectorySamlProperties</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `relay_state_parameter_name_input`<sup>Optional</sup> <a name="relay_state_parameter_name_input" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.property.relayStateParameterNameInput"></a>

```python
relay_state_parameter_name_input: str
```

- *Type:* str

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `user_access_url_input`<sup>Optional</sup> <a name="user_access_url_input" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.property.userAccessUrlInput"></a>

```python
user_access_url_input: str
```

- *Type:* str

---

##### `relay_state_parameter_name`<sup>Required</sup> <a name="relay_state_parameter_name" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.property.relayStateParameterName"></a>

```python
relay_state_parameter_name: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `user_access_url`<sup>Required</sup> <a name="user_access_url" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.property.userAccessUrl"></a>

```python
user_access_url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | WorkspacesDirectorySamlProperties
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlProperties">WorkspacesDirectorySamlProperties</a>

---


### WorkspacesDirectorySelfservicePermissionsOutputReference <a name="WorkspacesDirectorySelfservicePermissionsOutputReference" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import workspaces_directory

workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.resetChangeComputeType">reset_change_compute_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.resetIncreaseVolumeSize">reset_increase_volume_size</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.resetRebuildWorkspace">reset_rebuild_workspace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.resetRestartWorkspace">reset_restart_workspace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.resetSwitchRunningMode">reset_switch_running_mode</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_change_compute_type` <a name="reset_change_compute_type" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.resetChangeComputeType"></a>

```python
def reset_change_compute_type() -> None
```

##### `reset_increase_volume_size` <a name="reset_increase_volume_size" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.resetIncreaseVolumeSize"></a>

```python
def reset_increase_volume_size() -> None
```

##### `reset_rebuild_workspace` <a name="reset_rebuild_workspace" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.resetRebuildWorkspace"></a>

```python
def reset_rebuild_workspace() -> None
```

##### `reset_restart_workspace` <a name="reset_restart_workspace" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.resetRestartWorkspace"></a>

```python
def reset_restart_workspace() -> None
```

##### `reset_switch_running_mode` <a name="reset_switch_running_mode" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.resetSwitchRunningMode"></a>

```python
def reset_switch_running_mode() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.property.changeComputeTypeInput">change_compute_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.property.increaseVolumeSizeInput">increase_volume_size_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.property.rebuildWorkspaceInput">rebuild_workspace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.property.restartWorkspaceInput">restart_workspace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.property.switchRunningModeInput">switch_running_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.property.changeComputeType">change_compute_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.property.increaseVolumeSize">increase_volume_size</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.property.rebuildWorkspace">rebuild_workspace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.property.restartWorkspace">restart_workspace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.property.switchRunningMode">switch_running_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissions">WorkspacesDirectorySelfservicePermissions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `change_compute_type_input`<sup>Optional</sup> <a name="change_compute_type_input" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.property.changeComputeTypeInput"></a>

```python
change_compute_type_input: str
```

- *Type:* str

---

##### `increase_volume_size_input`<sup>Optional</sup> <a name="increase_volume_size_input" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.property.increaseVolumeSizeInput"></a>

```python
increase_volume_size_input: str
```

- *Type:* str

---

##### `rebuild_workspace_input`<sup>Optional</sup> <a name="rebuild_workspace_input" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.property.rebuildWorkspaceInput"></a>

```python
rebuild_workspace_input: str
```

- *Type:* str

---

##### `restart_workspace_input`<sup>Optional</sup> <a name="restart_workspace_input" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.property.restartWorkspaceInput"></a>

```python
restart_workspace_input: str
```

- *Type:* str

---

##### `switch_running_mode_input`<sup>Optional</sup> <a name="switch_running_mode_input" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.property.switchRunningModeInput"></a>

```python
switch_running_mode_input: str
```

- *Type:* str

---

##### `change_compute_type`<sup>Required</sup> <a name="change_compute_type" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.property.changeComputeType"></a>

```python
change_compute_type: str
```

- *Type:* str

---

##### `increase_volume_size`<sup>Required</sup> <a name="increase_volume_size" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.property.increaseVolumeSize"></a>

```python
increase_volume_size: str
```

- *Type:* str

---

##### `rebuild_workspace`<sup>Required</sup> <a name="rebuild_workspace" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.property.rebuildWorkspace"></a>

```python
rebuild_workspace: str
```

- *Type:* str

---

##### `restart_workspace`<sup>Required</sup> <a name="restart_workspace" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.property.restartWorkspace"></a>

```python
restart_workspace: str
```

- *Type:* str

---

##### `switch_running_mode`<sup>Required</sup> <a name="switch_running_mode" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.property.switchRunningMode"></a>

```python
switch_running_mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | WorkspacesDirectorySelfservicePermissions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissions">WorkspacesDirectorySelfservicePermissions</a>

---


### WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference <a name="WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import workspaces_directory

workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.resetMode">reset_mode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.resetPreferredProtocol">reset_preferred_protocol</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_mode` <a name="reset_mode" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.resetMode"></a>

```python
def reset_mode() -> None
```

##### `reset_preferred_protocol` <a name="reset_preferred_protocol" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.resetPreferredProtocol"></a>

```python
def reset_preferred_protocol() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.property.modeInput">mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.property.preferredProtocolInput">preferred_protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.property.mode">mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.property.preferredProtocol">preferred_protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAccelerator">WorkspacesDirectoryStreamingPropertiesGlobalAccelerator</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `mode_input`<sup>Optional</sup> <a name="mode_input" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.property.modeInput"></a>

```python
mode_input: str
```

- *Type:* str

---

##### `preferred_protocol_input`<sup>Optional</sup> <a name="preferred_protocol_input" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.property.preferredProtocolInput"></a>

```python
preferred_protocol_input: str
```

- *Type:* str

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.property.mode"></a>

```python
mode: str
```

- *Type:* str

---

##### `preferred_protocol`<sup>Required</sup> <a name="preferred_protocol" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.property.preferredProtocol"></a>

```python
preferred_protocol: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | WorkspacesDirectoryStreamingPropertiesGlobalAccelerator
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAccelerator">WorkspacesDirectoryStreamingPropertiesGlobalAccelerator</a>

---


### WorkspacesDirectoryStreamingPropertiesOutputReference <a name="WorkspacesDirectoryStreamingPropertiesOutputReference" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import workspaces_directory

workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.putGlobalAccelerator">put_global_accelerator</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.putStorageConnectors">put_storage_connectors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.putUserSettings">put_user_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.resetGlobalAccelerator">reset_global_accelerator</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.resetStorageConnectors">reset_storage_connectors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.resetStreamingExperiencePreferredProtocol">reset_streaming_experience_preferred_protocol</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.resetUserSettings">reset_user_settings</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_global_accelerator` <a name="put_global_accelerator" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.putGlobalAccelerator"></a>

```python
def put_global_accelerator(
  mode: str = None,
  preferred_protocol: str = None
) -> None
```

###### `mode`<sup>Optional</sup> <a name="mode" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.putGlobalAccelerator.parameter.mode"></a>

- *Type:* str

Indicates if Global Accelerator for directory is enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#mode WorkspacesDirectory#mode}

---

###### `preferred_protocol`<sup>Optional</sup> <a name="preferred_protocol" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.putGlobalAccelerator.parameter.preferredProtocol"></a>

- *Type:* str

Indicates the preferred protocol for Global Accelerator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#preferred_protocol WorkspacesDirectory#preferred_protocol}

---

##### `put_storage_connectors` <a name="put_storage_connectors" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.putStorageConnectors"></a>

```python
def put_storage_connectors(
  value: IResolvable | typing.List[WorkspacesDirectoryStreamingPropertiesStorageConnectors]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.putStorageConnectors.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectors">WorkspacesDirectoryStreamingPropertiesStorageConnectors</a>]

---

##### `put_user_settings` <a name="put_user_settings" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.putUserSettings"></a>

```python
def put_user_settings(
  value: IResolvable | typing.List[WorkspacesDirectoryStreamingPropertiesUserSettings]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.putUserSettings.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettings">WorkspacesDirectoryStreamingPropertiesUserSettings</a>]

---

##### `reset_global_accelerator` <a name="reset_global_accelerator" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.resetGlobalAccelerator"></a>

```python
def reset_global_accelerator() -> None
```

##### `reset_storage_connectors` <a name="reset_storage_connectors" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.resetStorageConnectors"></a>

```python
def reset_storage_connectors() -> None
```

##### `reset_streaming_experience_preferred_protocol` <a name="reset_streaming_experience_preferred_protocol" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.resetStreamingExperiencePreferredProtocol"></a>

```python
def reset_streaming_experience_preferred_protocol() -> None
```

##### `reset_user_settings` <a name="reset_user_settings" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.resetUserSettings"></a>

```python
def reset_user_settings() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.property.globalAccelerator">global_accelerator</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference">WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.property.storageConnectors">storage_connectors</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsList">WorkspacesDirectoryStreamingPropertiesStorageConnectorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.property.userSettings">user_settings</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsList">WorkspacesDirectoryStreamingPropertiesUserSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.property.globalAcceleratorInput">global_accelerator_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAccelerator">WorkspacesDirectoryStreamingPropertiesGlobalAccelerator</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.property.storageConnectorsInput">storage_connectors_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectors">WorkspacesDirectoryStreamingPropertiesStorageConnectors</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.property.streamingExperiencePreferredProtocolInput">streaming_experience_preferred_protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.property.userSettingsInput">user_settings_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettings">WorkspacesDirectoryStreamingPropertiesUserSettings</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.property.streamingExperiencePreferredProtocol">streaming_experience_preferred_protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingProperties">WorkspacesDirectoryStreamingProperties</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `global_accelerator`<sup>Required</sup> <a name="global_accelerator" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.property.globalAccelerator"></a>

```python
global_accelerator: WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference">WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference</a>

---

##### `storage_connectors`<sup>Required</sup> <a name="storage_connectors" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.property.storageConnectors"></a>

```python
storage_connectors: WorkspacesDirectoryStreamingPropertiesStorageConnectorsList
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsList">WorkspacesDirectoryStreamingPropertiesStorageConnectorsList</a>

---

##### `user_settings`<sup>Required</sup> <a name="user_settings" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.property.userSettings"></a>

```python
user_settings: WorkspacesDirectoryStreamingPropertiesUserSettingsList
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsList">WorkspacesDirectoryStreamingPropertiesUserSettingsList</a>

---

##### `global_accelerator_input`<sup>Optional</sup> <a name="global_accelerator_input" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.property.globalAcceleratorInput"></a>

```python
global_accelerator_input: IResolvable | WorkspacesDirectoryStreamingPropertiesGlobalAccelerator
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAccelerator">WorkspacesDirectoryStreamingPropertiesGlobalAccelerator</a>

---

##### `storage_connectors_input`<sup>Optional</sup> <a name="storage_connectors_input" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.property.storageConnectorsInput"></a>

```python
storage_connectors_input: IResolvable | typing.List[WorkspacesDirectoryStreamingPropertiesStorageConnectors]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectors">WorkspacesDirectoryStreamingPropertiesStorageConnectors</a>]

---

##### `streaming_experience_preferred_protocol_input`<sup>Optional</sup> <a name="streaming_experience_preferred_protocol_input" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.property.streamingExperiencePreferredProtocolInput"></a>

```python
streaming_experience_preferred_protocol_input: str
```

- *Type:* str

---

##### `user_settings_input`<sup>Optional</sup> <a name="user_settings_input" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.property.userSettingsInput"></a>

```python
user_settings_input: IResolvable | typing.List[WorkspacesDirectoryStreamingPropertiesUserSettings]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettings">WorkspacesDirectoryStreamingPropertiesUserSettings</a>]

---

##### `streaming_experience_preferred_protocol`<sup>Required</sup> <a name="streaming_experience_preferred_protocol" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.property.streamingExperiencePreferredProtocol"></a>

```python
streaming_experience_preferred_protocol: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | WorkspacesDirectoryStreamingProperties
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingProperties">WorkspacesDirectoryStreamingProperties</a>

---


### WorkspacesDirectoryStreamingPropertiesStorageConnectorsList <a name="WorkspacesDirectoryStreamingPropertiesStorageConnectorsList" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsList.Initializer"></a>

```python
from cdktn_provider_awscc import workspaces_directory

workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectors">WorkspacesDirectoryStreamingPropertiesStorageConnectors</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[WorkspacesDirectoryStreamingPropertiesStorageConnectors]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectors">WorkspacesDirectoryStreamingPropertiesStorageConnectors</a>]

---


### WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference <a name="WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import workspaces_directory

workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.resetConnectorType">reset_connector_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.resetStatus">reset_status</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_connector_type` <a name="reset_connector_type" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.resetConnectorType"></a>

```python
def reset_connector_type() -> None
```

##### `reset_status` <a name="reset_status" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.resetStatus"></a>

```python
def reset_status() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.property.connectorTypeInput">connector_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.property.connectorType">connector_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectors">WorkspacesDirectoryStreamingPropertiesStorageConnectors</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `connector_type_input`<sup>Optional</sup> <a name="connector_type_input" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.property.connectorTypeInput"></a>

```python
connector_type_input: str
```

- *Type:* str

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `connector_type`<sup>Required</sup> <a name="connector_type" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.property.connectorType"></a>

```python
connector_type: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | WorkspacesDirectoryStreamingPropertiesStorageConnectors
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectors">WorkspacesDirectoryStreamingPropertiesStorageConnectors</a>

---


### WorkspacesDirectoryStreamingPropertiesUserSettingsList <a name="WorkspacesDirectoryStreamingPropertiesUserSettingsList" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsList.Initializer"></a>

```python
from cdktn_provider_awscc import workspaces_directory

workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettings">WorkspacesDirectoryStreamingPropertiesUserSettings</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[WorkspacesDirectoryStreamingPropertiesUserSettings]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettings">WorkspacesDirectoryStreamingPropertiesUserSettings</a>]

---


### WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference <a name="WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import workspaces_directory

workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.resetAction">reset_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.resetMaximumLength">reset_maximum_length</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.resetPermission">reset_permission</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_action` <a name="reset_action" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.resetAction"></a>

```python
def reset_action() -> None
```

##### `reset_maximum_length` <a name="reset_maximum_length" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.resetMaximumLength"></a>

```python
def reset_maximum_length() -> None
```

##### `reset_permission` <a name="reset_permission" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.resetPermission"></a>

```python
def reset_permission() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.property.actionInput">action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.property.maximumLengthInput">maximum_length_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.property.permissionInput">permission_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.property.maximumLength">maximum_length</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.property.permission">permission</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettings">WorkspacesDirectoryStreamingPropertiesUserSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action_input`<sup>Optional</sup> <a name="action_input" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.property.actionInput"></a>

```python
action_input: str
```

- *Type:* str

---

##### `maximum_length_input`<sup>Optional</sup> <a name="maximum_length_input" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.property.maximumLengthInput"></a>

```python
maximum_length_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `permission_input`<sup>Optional</sup> <a name="permission_input" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.property.permissionInput"></a>

```python
permission_input: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `maximum_length`<sup>Required</sup> <a name="maximum_length" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.property.maximumLength"></a>

```python
maximum_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.property.permission"></a>

```python
permission: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | WorkspacesDirectoryStreamingPropertiesUserSettings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettings">WorkspacesDirectoryStreamingPropertiesUserSettings</a>

---


### WorkspacesDirectoryTagsList <a name="WorkspacesDirectoryTagsList" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import workspaces_directory

workspacesDirectory.WorkspacesDirectoryTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> WorkspacesDirectoryTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTags">WorkspacesDirectoryTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[WorkspacesDirectoryTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTags">WorkspacesDirectoryTags</a>]

---


### WorkspacesDirectoryTagsOutputReference <a name="WorkspacesDirectoryTagsOutputReference" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import workspaces_directory

workspacesDirectory.WorkspacesDirectoryTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTags">WorkspacesDirectoryTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | WorkspacesDirectoryTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTags">WorkspacesDirectoryTags</a>

---


### WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList <a name="WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList.Initializer"></a>

```python
from cdktn_provider_awscc import workspaces_directory

workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpoints">WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpoints</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpoints]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpoints">WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpoints</a>]

---


### WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference <a name="WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import workspaces_directory

workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.resetAccessEndpointType">reset_access_endpoint_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.resetVpcEndpointId">reset_vpc_endpoint_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_access_endpoint_type` <a name="reset_access_endpoint_type" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.resetAccessEndpointType"></a>

```python
def reset_access_endpoint_type() -> None
```

##### `reset_vpc_endpoint_id` <a name="reset_vpc_endpoint_id" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.resetVpcEndpointId"></a>

```python
def reset_vpc_endpoint_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.property.accessEndpointTypeInput">access_endpoint_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.property.vpcEndpointIdInput">vpc_endpoint_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.property.accessEndpointType">access_endpoint_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.property.vpcEndpointId">vpc_endpoint_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpoints">WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpoints</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `access_endpoint_type_input`<sup>Optional</sup> <a name="access_endpoint_type_input" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.property.accessEndpointTypeInput"></a>

```python
access_endpoint_type_input: str
```

- *Type:* str

---

##### `vpc_endpoint_id_input`<sup>Optional</sup> <a name="vpc_endpoint_id_input" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.property.vpcEndpointIdInput"></a>

```python
vpc_endpoint_id_input: str
```

- *Type:* str

---

##### `access_endpoint_type`<sup>Required</sup> <a name="access_endpoint_type" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.property.accessEndpointType"></a>

```python
access_endpoint_type: str
```

- *Type:* str

---

##### `vpc_endpoint_id`<sup>Required</sup> <a name="vpc_endpoint_id" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.property.vpcEndpointId"></a>

```python
vpc_endpoint_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpoints
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpoints">WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpoints</a>

---


### WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference <a name="WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import workspaces_directory

workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.putAccessEndpoints">put_access_endpoints</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.resetAccessEndpoints">reset_access_endpoints</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.resetInternetFallbackProtocols">reset_internet_fallback_protocols</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_access_endpoints` <a name="put_access_endpoints" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.putAccessEndpoints"></a>

```python
def put_access_endpoints(
  value: IResolvable | typing.List[WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpoints]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.putAccessEndpoints.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpoints">WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpoints</a>]

---

##### `reset_access_endpoints` <a name="reset_access_endpoints" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.resetAccessEndpoints"></a>

```python
def reset_access_endpoints() -> None
```

##### `reset_internet_fallback_protocols` <a name="reset_internet_fallback_protocols" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.resetInternetFallbackProtocols"></a>

```python
def reset_internet_fallback_protocols() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.property.accessEndpoints">access_endpoints</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList">WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.property.accessEndpointsInput">access_endpoints_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpoints">WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpoints</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.property.internetFallbackProtocolsInput">internet_fallback_protocols_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.property.internetFallbackProtocols">internet_fallback_protocols</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfig">WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `access_endpoints`<sup>Required</sup> <a name="access_endpoints" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.property.accessEndpoints"></a>

```python
access_endpoints: WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList">WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList</a>

---

##### `access_endpoints_input`<sup>Optional</sup> <a name="access_endpoints_input" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.property.accessEndpointsInput"></a>

```python
access_endpoints_input: IResolvable | typing.List[WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpoints]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpoints">WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpoints</a>]

---

##### `internet_fallback_protocols_input`<sup>Optional</sup> <a name="internet_fallback_protocols_input" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.property.internetFallbackProtocolsInput"></a>

```python
internet_fallback_protocols_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internet_fallback_protocols`<sup>Required</sup> <a name="internet_fallback_protocols" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.property.internetFallbackProtocols"></a>

```python
internet_fallback_protocols: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfig">WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfig</a>

---


### WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference <a name="WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import workspaces_directory

workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.putAccessEndpointConfig">put_access_endpoint_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resetAccessEndpointConfig">reset_access_endpoint_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resetDeviceTypeAndroid">reset_device_type_android</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resetDeviceTypeChromeOs">reset_device_type_chrome_os</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resetDeviceTypeIos">reset_device_type_ios</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resetDeviceTypeLinux">reset_device_type_linux</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resetDeviceTypeOsx">reset_device_type_osx</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resetDeviceTypeWeb">reset_device_type_web</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resetDeviceTypeWindows">reset_device_type_windows</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resetDeviceTypeWorkSpacesThinClient">reset_device_type_work_spaces_thin_client</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resetDeviceTypeZeroClient">reset_device_type_zero_client</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_access_endpoint_config` <a name="put_access_endpoint_config" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.putAccessEndpointConfig"></a>

```python
def put_access_endpoint_config(
  access_endpoints: IResolvable | typing.List[WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpoints] = None,
  internet_fallback_protocols: typing.List[str] = None
) -> None
```

###### `access_endpoints`<sup>Optional</sup> <a name="access_endpoints" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.putAccessEndpointConfig.parameter.accessEndpoints"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpoints">WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpoints</a>]

Indicates a list of access endpoints associated with this directory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#access_endpoints WorkspacesDirectory#access_endpoints}

---

###### `internet_fallback_protocols`<sup>Optional</sup> <a name="internet_fallback_protocols" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.putAccessEndpointConfig.parameter.internetFallbackProtocols"></a>

- *Type:* typing.List[str]

Indicates a list of protocols that fallback to using the public Internet when streaming over a VPC endpoint is not available.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#internet_fallback_protocols WorkspacesDirectory#internet_fallback_protocols}

---

##### `reset_access_endpoint_config` <a name="reset_access_endpoint_config" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resetAccessEndpointConfig"></a>

```python
def reset_access_endpoint_config() -> None
```

##### `reset_device_type_android` <a name="reset_device_type_android" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resetDeviceTypeAndroid"></a>

```python
def reset_device_type_android() -> None
```

##### `reset_device_type_chrome_os` <a name="reset_device_type_chrome_os" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resetDeviceTypeChromeOs"></a>

```python
def reset_device_type_chrome_os() -> None
```

##### `reset_device_type_ios` <a name="reset_device_type_ios" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resetDeviceTypeIos"></a>

```python
def reset_device_type_ios() -> None
```

##### `reset_device_type_linux` <a name="reset_device_type_linux" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resetDeviceTypeLinux"></a>

```python
def reset_device_type_linux() -> None
```

##### `reset_device_type_osx` <a name="reset_device_type_osx" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resetDeviceTypeOsx"></a>

```python
def reset_device_type_osx() -> None
```

##### `reset_device_type_web` <a name="reset_device_type_web" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resetDeviceTypeWeb"></a>

```python
def reset_device_type_web() -> None
```

##### `reset_device_type_windows` <a name="reset_device_type_windows" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resetDeviceTypeWindows"></a>

```python
def reset_device_type_windows() -> None
```

##### `reset_device_type_work_spaces_thin_client` <a name="reset_device_type_work_spaces_thin_client" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resetDeviceTypeWorkSpacesThinClient"></a>

```python
def reset_device_type_work_spaces_thin_client() -> None
```

##### `reset_device_type_zero_client` <a name="reset_device_type_zero_client" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resetDeviceTypeZeroClient"></a>

```python
def reset_device_type_zero_client() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.accessEndpointConfig">access_endpoint_config</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference">WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.accessEndpointConfigInput">access_endpoint_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfig">WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeAndroidInput">device_type_android_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeChromeOsInput">device_type_chrome_os_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeIosInput">device_type_ios_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeLinuxInput">device_type_linux_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeOsxInput">device_type_osx_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeWebInput">device_type_web_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeWindowsInput">device_type_windows_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeWorkSpacesThinClientInput">device_type_work_spaces_thin_client_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeZeroClientInput">device_type_zero_client_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeAndroid">device_type_android</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeChromeOs">device_type_chrome_os</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeIos">device_type_ios</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeLinux">device_type_linux</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeOsx">device_type_osx</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeWeb">device_type_web</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeWindows">device_type_windows</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeWorkSpacesThinClient">device_type_work_spaces_thin_client</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeZeroClient">device_type_zero_client</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties">WorkspacesDirectoryWorkspaceAccessProperties</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `access_endpoint_config`<sup>Required</sup> <a name="access_endpoint_config" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.accessEndpointConfig"></a>

```python
access_endpoint_config: WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference">WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference</a>

---

##### `access_endpoint_config_input`<sup>Optional</sup> <a name="access_endpoint_config_input" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.accessEndpointConfigInput"></a>

```python
access_endpoint_config_input: IResolvable | WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfig">WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfig</a>

---

##### `device_type_android_input`<sup>Optional</sup> <a name="device_type_android_input" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeAndroidInput"></a>

```python
device_type_android_input: str
```

- *Type:* str

---

##### `device_type_chrome_os_input`<sup>Optional</sup> <a name="device_type_chrome_os_input" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeChromeOsInput"></a>

```python
device_type_chrome_os_input: str
```

- *Type:* str

---

##### `device_type_ios_input`<sup>Optional</sup> <a name="device_type_ios_input" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeIosInput"></a>

```python
device_type_ios_input: str
```

- *Type:* str

---

##### `device_type_linux_input`<sup>Optional</sup> <a name="device_type_linux_input" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeLinuxInput"></a>

```python
device_type_linux_input: str
```

- *Type:* str

---

##### `device_type_osx_input`<sup>Optional</sup> <a name="device_type_osx_input" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeOsxInput"></a>

```python
device_type_osx_input: str
```

- *Type:* str

---

##### `device_type_web_input`<sup>Optional</sup> <a name="device_type_web_input" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeWebInput"></a>

```python
device_type_web_input: str
```

- *Type:* str

---

##### `device_type_windows_input`<sup>Optional</sup> <a name="device_type_windows_input" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeWindowsInput"></a>

```python
device_type_windows_input: str
```

- *Type:* str

---

##### `device_type_work_spaces_thin_client_input`<sup>Optional</sup> <a name="device_type_work_spaces_thin_client_input" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeWorkSpacesThinClientInput"></a>

```python
device_type_work_spaces_thin_client_input: str
```

- *Type:* str

---

##### `device_type_zero_client_input`<sup>Optional</sup> <a name="device_type_zero_client_input" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeZeroClientInput"></a>

```python
device_type_zero_client_input: str
```

- *Type:* str

---

##### `device_type_android`<sup>Required</sup> <a name="device_type_android" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeAndroid"></a>

```python
device_type_android: str
```

- *Type:* str

---

##### `device_type_chrome_os`<sup>Required</sup> <a name="device_type_chrome_os" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeChromeOs"></a>

```python
device_type_chrome_os: str
```

- *Type:* str

---

##### `device_type_ios`<sup>Required</sup> <a name="device_type_ios" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeIos"></a>

```python
device_type_ios: str
```

- *Type:* str

---

##### `device_type_linux`<sup>Required</sup> <a name="device_type_linux" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeLinux"></a>

```python
device_type_linux: str
```

- *Type:* str

---

##### `device_type_osx`<sup>Required</sup> <a name="device_type_osx" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeOsx"></a>

```python
device_type_osx: str
```

- *Type:* str

---

##### `device_type_web`<sup>Required</sup> <a name="device_type_web" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeWeb"></a>

```python
device_type_web: str
```

- *Type:* str

---

##### `device_type_windows`<sup>Required</sup> <a name="device_type_windows" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeWindows"></a>

```python
device_type_windows: str
```

- *Type:* str

---

##### `device_type_work_spaces_thin_client`<sup>Required</sup> <a name="device_type_work_spaces_thin_client" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeWorkSpacesThinClient"></a>

```python
device_type_work_spaces_thin_client: str
```

- *Type:* str

---

##### `device_type_zero_client`<sup>Required</sup> <a name="device_type_zero_client" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeZeroClient"></a>

```python
device_type_zero_client: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | WorkspacesDirectoryWorkspaceAccessProperties
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties">WorkspacesDirectoryWorkspaceAccessProperties</a>

---


### WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference <a name="WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import workspaces_directory

workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.resetCustomSecurityGroupId">reset_custom_security_group_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.resetDefaultOu">reset_default_ou</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.resetEnableInternetAccess">reset_enable_internet_access</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.resetEnableMaintenanceMode">reset_enable_maintenance_mode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.resetInstanceIamRoleArn">reset_instance_iam_role_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.resetUserEnabledAsLocalAdministrator">reset_user_enabled_as_local_administrator</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_custom_security_group_id` <a name="reset_custom_security_group_id" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.resetCustomSecurityGroupId"></a>

```python
def reset_custom_security_group_id() -> None
```

##### `reset_default_ou` <a name="reset_default_ou" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.resetDefaultOu"></a>

```python
def reset_default_ou() -> None
```

##### `reset_enable_internet_access` <a name="reset_enable_internet_access" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.resetEnableInternetAccess"></a>

```python
def reset_enable_internet_access() -> None
```

##### `reset_enable_maintenance_mode` <a name="reset_enable_maintenance_mode" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.resetEnableMaintenanceMode"></a>

```python
def reset_enable_maintenance_mode() -> None
```

##### `reset_instance_iam_role_arn` <a name="reset_instance_iam_role_arn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.resetInstanceIamRoleArn"></a>

```python
def reset_instance_iam_role_arn() -> None
```

##### `reset_user_enabled_as_local_administrator` <a name="reset_user_enabled_as_local_administrator" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.resetUserEnabledAsLocalAdministrator"></a>

```python
def reset_user_enabled_as_local_administrator() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.customSecurityGroupIdInput">custom_security_group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.defaultOuInput">default_ou_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.enableInternetAccessInput">enable_internet_access_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.enableMaintenanceModeInput">enable_maintenance_mode_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.instanceIamRoleArnInput">instance_iam_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.userEnabledAsLocalAdministratorInput">user_enabled_as_local_administrator_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.customSecurityGroupId">custom_security_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.defaultOu">default_ou</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.enableInternetAccess">enable_internet_access</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.enableMaintenanceMode">enable_maintenance_mode</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.instanceIamRoleArn">instance_iam_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.userEnabledAsLocalAdministrator">user_enabled_as_local_administrator</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties">WorkspacesDirectoryWorkspaceCreationProperties</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `custom_security_group_id_input`<sup>Optional</sup> <a name="custom_security_group_id_input" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.customSecurityGroupIdInput"></a>

```python
custom_security_group_id_input: str
```

- *Type:* str

---

##### `default_ou_input`<sup>Optional</sup> <a name="default_ou_input" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.defaultOuInput"></a>

```python
default_ou_input: str
```

- *Type:* str

---

##### `enable_internet_access_input`<sup>Optional</sup> <a name="enable_internet_access_input" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.enableInternetAccessInput"></a>

```python
enable_internet_access_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enable_maintenance_mode_input`<sup>Optional</sup> <a name="enable_maintenance_mode_input" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.enableMaintenanceModeInput"></a>

```python
enable_maintenance_mode_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `instance_iam_role_arn_input`<sup>Optional</sup> <a name="instance_iam_role_arn_input" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.instanceIamRoleArnInput"></a>

```python
instance_iam_role_arn_input: str
```

- *Type:* str

---

##### `user_enabled_as_local_administrator_input`<sup>Optional</sup> <a name="user_enabled_as_local_administrator_input" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.userEnabledAsLocalAdministratorInput"></a>

```python
user_enabled_as_local_administrator_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `custom_security_group_id`<sup>Required</sup> <a name="custom_security_group_id" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.customSecurityGroupId"></a>

```python
custom_security_group_id: str
```

- *Type:* str

---

##### `default_ou`<sup>Required</sup> <a name="default_ou" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.defaultOu"></a>

```python
default_ou: str
```

- *Type:* str

---

##### `enable_internet_access`<sup>Required</sup> <a name="enable_internet_access" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.enableInternetAccess"></a>

```python
enable_internet_access: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enable_maintenance_mode`<sup>Required</sup> <a name="enable_maintenance_mode" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.enableMaintenanceMode"></a>

```python
enable_maintenance_mode: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `instance_iam_role_arn`<sup>Required</sup> <a name="instance_iam_role_arn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.instanceIamRoleArn"></a>

```python
instance_iam_role_arn: str
```

- *Type:* str

---

##### `user_enabled_as_local_administrator`<sup>Required</sup> <a name="user_enabled_as_local_administrator" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.userEnabledAsLocalAdministrator"></a>

```python
user_enabled_as_local_administrator: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | WorkspacesDirectoryWorkspaceCreationProperties
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties">WorkspacesDirectoryWorkspaceCreationProperties</a>

---



