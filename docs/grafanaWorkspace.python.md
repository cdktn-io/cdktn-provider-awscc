# `grafanaWorkspace` Submodule <a name="`grafanaWorkspace` Submodule" id="@cdktn/provider-awscc.grafanaWorkspace"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GrafanaWorkspace <a name="GrafanaWorkspace" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/grafana_workspace awscc_grafana_workspace}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.Initializer"></a>

```python
from cdktn_provider_awscc import grafana_workspace

grafanaWorkspace.GrafanaWorkspace(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  account_access_type: str,
  authentication_providers: typing.List[str],
  permission_type: str,
  client_token: str = None,
  data_sources: typing.List[str] = None,
  description: str = None,
  grafana_version: str = None,
  name: str = None,
  network_access_control: GrafanaWorkspaceNetworkAccessControl = None,
  notification_destinations: typing.List[str] = None,
  organizational_units: typing.List[str] = None,
  organization_role_name: str = None,
  plugin_admin_enabled: bool | IResolvable = None,
  role_arn: str = None,
  saml_configuration: GrafanaWorkspaceSamlConfiguration = None,
  stack_set_name: str = None,
  tags: IResolvable | typing.List[GrafanaWorkspaceTags] = None,
  vpc_configuration: GrafanaWorkspaceVpcConfiguration = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.Initializer.parameter.accountAccessType">account_access_type</a></code> | <code>str</code> | These enums represent valid account access types. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.Initializer.parameter.authenticationProviders">authentication_providers</a></code> | <code>typing.List[str]</code> | List of authentication providers to enable. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.Initializer.parameter.permissionType">permission_type</a></code> | <code>str</code> | These enums represent valid permission types to use when creating or configuring a Grafana workspace. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.Initializer.parameter.clientToken">client_token</a></code> | <code>str</code> | A unique, case-sensitive, user-provided identifier to ensure the idempotency of the request. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.Initializer.parameter.dataSources">data_sources</a></code> | <code>typing.List[str]</code> | List of data sources on the service managed IAM role. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.Initializer.parameter.description">description</a></code> | <code>str</code> | Description of a workspace. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.Initializer.parameter.grafanaVersion">grafana_version</a></code> | <code>str</code> | The version of Grafana to support in your workspace. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.Initializer.parameter.name">name</a></code> | <code>str</code> | The user friendly name of a workspace. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.Initializer.parameter.networkAccessControl">network_access_control</a></code> | <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControl">GrafanaWorkspaceNetworkAccessControl</a></code> | The configuration settings for Network Access Control. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.Initializer.parameter.notificationDestinations">notification_destinations</a></code> | <code>typing.List[str]</code> | List of notification destinations on the customers service managed IAM role that the Grafana workspace can query. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.Initializer.parameter.organizationalUnits">organizational_units</a></code> | <code>typing.List[str]</code> | List of Organizational Units containing AWS accounts the Grafana workspace can pull data from. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.Initializer.parameter.organizationRoleName">organization_role_name</a></code> | <code>str</code> | The name of an IAM role that already exists to use with AWS Organizations to access AWS data sources and notification channels in other accounts in an organization. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.Initializer.parameter.pluginAdminEnabled">plugin_admin_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Allow workspace admins to install plugins. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.Initializer.parameter.roleArn">role_arn</a></code> | <code>str</code> | IAM Role that will be used to grant the Grafana workspace access to a customers AWS resources. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.Initializer.parameter.samlConfiguration">saml_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfiguration">GrafanaWorkspaceSamlConfiguration</a></code> | SAML configuration data associated with an AMG workspace. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.Initializer.parameter.stackSetName">stack_set_name</a></code> | <code>str</code> | The name of the AWS CloudFormation stack set to use to generate IAM roles to be used for this workspace. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTags">GrafanaWorkspaceTags</a>]</code> | The list of tags associated with the workspace. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.Initializer.parameter.vpcConfiguration">vpc_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfiguration">GrafanaWorkspaceVpcConfiguration</a></code> | The configuration settings for an Amazon VPC that contains data sources for your Grafana workspace to connect to. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `account_access_type`<sup>Required</sup> <a name="account_access_type" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.Initializer.parameter.accountAccessType"></a>

- *Type:* str

These enums represent valid account access types.

Specifically these enums determine whether the workspace can access AWS resources in the AWS account only, or whether it can also access resources in other accounts in the same organization. If the value CURRENT_ACCOUNT is used, a workspace role ARN must be provided. If the value is ORGANIZATION, a list of organizational units must be provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/grafana_workspace#account_access_type GrafanaWorkspace#account_access_type}

---

##### `authentication_providers`<sup>Required</sup> <a name="authentication_providers" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.Initializer.parameter.authenticationProviders"></a>

- *Type:* typing.List[str]

List of authentication providers to enable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/grafana_workspace#authentication_providers GrafanaWorkspace#authentication_providers}

---

##### `permission_type`<sup>Required</sup> <a name="permission_type" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.Initializer.parameter.permissionType"></a>

- *Type:* str

These enums represent valid permission types to use when creating or configuring a Grafana workspace.

The SERVICE_MANAGED permission type means the Managed Grafana service will create a workspace IAM role on your behalf. The CUSTOMER_MANAGED permission type means that the customer is expected to provide an IAM role that the Grafana workspace can use to query data sources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/grafana_workspace#permission_type GrafanaWorkspace#permission_type}

---

##### `client_token`<sup>Optional</sup> <a name="client_token" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.Initializer.parameter.clientToken"></a>

- *Type:* str

A unique, case-sensitive, user-provided identifier to ensure the idempotency of the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/grafana_workspace#client_token GrafanaWorkspace#client_token}

---

##### `data_sources`<sup>Optional</sup> <a name="data_sources" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.Initializer.parameter.dataSources"></a>

- *Type:* typing.List[str]

List of data sources on the service managed IAM role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/grafana_workspace#data_sources GrafanaWorkspace#data_sources}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.Initializer.parameter.description"></a>

- *Type:* str

Description of a workspace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/grafana_workspace#description GrafanaWorkspace#description}

---

##### `grafana_version`<sup>Optional</sup> <a name="grafana_version" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.Initializer.parameter.grafanaVersion"></a>

- *Type:* str

The version of Grafana to support in your workspace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/grafana_workspace#grafana_version GrafanaWorkspace#grafana_version}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.Initializer.parameter.name"></a>

- *Type:* str

The user friendly name of a workspace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/grafana_workspace#name GrafanaWorkspace#name}

---

##### `network_access_control`<sup>Optional</sup> <a name="network_access_control" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.Initializer.parameter.networkAccessControl"></a>

- *Type:* <a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControl">GrafanaWorkspaceNetworkAccessControl</a>

The configuration settings for Network Access Control.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/grafana_workspace#network_access_control GrafanaWorkspace#network_access_control}

---

##### `notification_destinations`<sup>Optional</sup> <a name="notification_destinations" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.Initializer.parameter.notificationDestinations"></a>

- *Type:* typing.List[str]

List of notification destinations on the customers service managed IAM role that the Grafana workspace can query.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/grafana_workspace#notification_destinations GrafanaWorkspace#notification_destinations}

---

##### `organizational_units`<sup>Optional</sup> <a name="organizational_units" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.Initializer.parameter.organizationalUnits"></a>

- *Type:* typing.List[str]

List of Organizational Units containing AWS accounts the Grafana workspace can pull data from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/grafana_workspace#organizational_units GrafanaWorkspace#organizational_units}

---

##### `organization_role_name`<sup>Optional</sup> <a name="organization_role_name" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.Initializer.parameter.organizationRoleName"></a>

- *Type:* str

The name of an IAM role that already exists to use with AWS Organizations to access AWS data sources and notification channels in other accounts in an organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/grafana_workspace#organization_role_name GrafanaWorkspace#organization_role_name}

---

##### `plugin_admin_enabled`<sup>Optional</sup> <a name="plugin_admin_enabled" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.Initializer.parameter.pluginAdminEnabled"></a>

- *Type:* bool | cdktn.IResolvable

Allow workspace admins to install plugins.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/grafana_workspace#plugin_admin_enabled GrafanaWorkspace#plugin_admin_enabled}

---

##### `role_arn`<sup>Optional</sup> <a name="role_arn" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.Initializer.parameter.roleArn"></a>

- *Type:* str

IAM Role that will be used to grant the Grafana workspace access to a customers AWS resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/grafana_workspace#role_arn GrafanaWorkspace#role_arn}

---

##### `saml_configuration`<sup>Optional</sup> <a name="saml_configuration" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.Initializer.parameter.samlConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfiguration">GrafanaWorkspaceSamlConfiguration</a>

SAML configuration data associated with an AMG workspace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/grafana_workspace#saml_configuration GrafanaWorkspace#saml_configuration}

---

##### `stack_set_name`<sup>Optional</sup> <a name="stack_set_name" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.Initializer.parameter.stackSetName"></a>

- *Type:* str

The name of the AWS CloudFormation stack set to use to generate IAM roles to be used for this workspace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/grafana_workspace#stack_set_name GrafanaWorkspace#stack_set_name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTags">GrafanaWorkspaceTags</a>]

The list of tags associated with the workspace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/grafana_workspace#tags GrafanaWorkspace#tags}

---

##### `vpc_configuration`<sup>Optional</sup> <a name="vpc_configuration" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.Initializer.parameter.vpcConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfiguration">GrafanaWorkspaceVpcConfiguration</a>

The configuration settings for an Amazon VPC that contains data sources for your Grafana workspace to connect to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/grafana_workspace#vpc_configuration GrafanaWorkspace#vpc_configuration}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.putNetworkAccessControl">put_network_access_control</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.putSamlConfiguration">put_saml_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.putVpcConfiguration">put_vpc_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.resetClientToken">reset_client_token</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.resetDataSources">reset_data_sources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.resetGrafanaVersion">reset_grafana_version</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.resetNetworkAccessControl">reset_network_access_control</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.resetNotificationDestinations">reset_notification_destinations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.resetOrganizationalUnits">reset_organizational_units</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.resetOrganizationRoleName">reset_organization_role_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.resetPluginAdminEnabled">reset_plugin_admin_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.resetRoleArn">reset_role_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.resetSamlConfiguration">reset_saml_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.resetStackSetName">reset_stack_set_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.resetVpcConfiguration">reset_vpc_configuration</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_network_access_control` <a name="put_network_access_control" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.putNetworkAccessControl"></a>

```python
def put_network_access_control(
  prefix_list_ids: typing.List[str] = None,
  vpce_ids: typing.List[str] = None
) -> None
```

###### `prefix_list_ids`<sup>Optional</sup> <a name="prefix_list_ids" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.putNetworkAccessControl.parameter.prefixListIds"></a>

- *Type:* typing.List[str]

The list of prefix list IDs.

A prefix list is a list of CIDR ranges of IP addresses. The IP addresses specified are allowed to access your workspace. If the list is not included in the configuration then no IP addresses will be allowed to access the workspace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/grafana_workspace#prefix_list_ids GrafanaWorkspace#prefix_list_ids}

---

###### `vpce_ids`<sup>Optional</sup> <a name="vpce_ids" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.putNetworkAccessControl.parameter.vpceIds"></a>

- *Type:* typing.List[str]

The list of Amazon VPC endpoint IDs for the workspace.

If a NetworkAccessConfiguration is specified then only VPC endpoints specified here will be allowed to access the workspace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/grafana_workspace#vpce_ids GrafanaWorkspace#vpce_ids}

---

##### `put_saml_configuration` <a name="put_saml_configuration" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.putSamlConfiguration"></a>

```python
def put_saml_configuration(
  allowed_organizations: typing.List[str] = None,
  assertion_attributes: GrafanaWorkspaceSamlConfigurationAssertionAttributes = None,
  idp_metadata: GrafanaWorkspaceSamlConfigurationIdpMetadata = None,
  login_validity_duration: typing.Union[int, float] = None,
  role_values: GrafanaWorkspaceSamlConfigurationRoleValues = None
) -> None
```

###### `allowed_organizations`<sup>Optional</sup> <a name="allowed_organizations" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.putSamlConfiguration.parameter.allowedOrganizations"></a>

- *Type:* typing.List[str]

List of SAML organizations allowed to access Grafana.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/grafana_workspace#allowed_organizations GrafanaWorkspace#allowed_organizations}

---

###### `assertion_attributes`<sup>Optional</sup> <a name="assertion_attributes" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.putSamlConfiguration.parameter.assertionAttributes"></a>

- *Type:* <a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributes">GrafanaWorkspaceSamlConfigurationAssertionAttributes</a>

Maps Grafana friendly names to the IdPs SAML attributes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/grafana_workspace#assertion_attributes GrafanaWorkspace#assertion_attributes}

---

###### `idp_metadata`<sup>Optional</sup> <a name="idp_metadata" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.putSamlConfiguration.parameter.idpMetadata"></a>

- *Type:* <a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadata">GrafanaWorkspaceSamlConfigurationIdpMetadata</a>

IdP Metadata used to configure SAML authentication in Grafana.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/grafana_workspace#idp_metadata GrafanaWorkspace#idp_metadata}

---

###### `login_validity_duration`<sup>Optional</sup> <a name="login_validity_duration" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.putSamlConfiguration.parameter.loginValidityDuration"></a>

- *Type:* typing.Union[int, float]

The maximum lifetime an authenticated user can be logged in (in minutes) before being required to re-authenticate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/grafana_workspace#login_validity_duration GrafanaWorkspace#login_validity_duration}

---

###### `role_values`<sup>Optional</sup> <a name="role_values" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.putSamlConfiguration.parameter.roleValues"></a>

- *Type:* <a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValues">GrafanaWorkspaceSamlConfigurationRoleValues</a>

Maps SAML roles to the Grafana Editor and Admin roles.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/grafana_workspace#role_values GrafanaWorkspace#role_values}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[GrafanaWorkspaceTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTags">GrafanaWorkspaceTags</a>]

---

##### `put_vpc_configuration` <a name="put_vpc_configuration" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.putVpcConfiguration"></a>

```python
def put_vpc_configuration(
  security_group_ids: typing.List[str] = None,
  subnet_ids: typing.List[str] = None
) -> None
```

###### `security_group_ids`<sup>Optional</sup> <a name="security_group_ids" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.putVpcConfiguration.parameter.securityGroupIds"></a>

- *Type:* typing.List[str]

The list of Amazon EC2 security group IDs attached to the Amazon VPC for your Grafana workspace to connect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/grafana_workspace#security_group_ids GrafanaWorkspace#security_group_ids}

---

###### `subnet_ids`<sup>Optional</sup> <a name="subnet_ids" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.putVpcConfiguration.parameter.subnetIds"></a>

- *Type:* typing.List[str]

The list of Amazon EC2 subnet IDs created in the Amazon VPC for your Grafana workspace to connect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/grafana_workspace#subnet_ids GrafanaWorkspace#subnet_ids}

---

##### `reset_client_token` <a name="reset_client_token" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.resetClientToken"></a>

```python
def reset_client_token() -> None
```

##### `reset_data_sources` <a name="reset_data_sources" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.resetDataSources"></a>

```python
def reset_data_sources() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_grafana_version` <a name="reset_grafana_version" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.resetGrafanaVersion"></a>

```python
def reset_grafana_version() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_network_access_control` <a name="reset_network_access_control" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.resetNetworkAccessControl"></a>

```python
def reset_network_access_control() -> None
```

##### `reset_notification_destinations` <a name="reset_notification_destinations" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.resetNotificationDestinations"></a>

```python
def reset_notification_destinations() -> None
```

##### `reset_organizational_units` <a name="reset_organizational_units" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.resetOrganizationalUnits"></a>

```python
def reset_organizational_units() -> None
```

##### `reset_organization_role_name` <a name="reset_organization_role_name" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.resetOrganizationRoleName"></a>

```python
def reset_organization_role_name() -> None
```

##### `reset_plugin_admin_enabled` <a name="reset_plugin_admin_enabled" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.resetPluginAdminEnabled"></a>

```python
def reset_plugin_admin_enabled() -> None
```

##### `reset_role_arn` <a name="reset_role_arn" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.resetRoleArn"></a>

```python
def reset_role_arn() -> None
```

##### `reset_saml_configuration` <a name="reset_saml_configuration" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.resetSamlConfiguration"></a>

```python
def reset_saml_configuration() -> None
```

##### `reset_stack_set_name` <a name="reset_stack_set_name" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.resetStackSetName"></a>

```python
def reset_stack_set_name() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_vpc_configuration` <a name="reset_vpc_configuration" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.resetVpcConfiguration"></a>

```python
def reset_vpc_configuration() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a GrafanaWorkspace resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.isConstruct"></a>

```python
from cdktn_provider_awscc import grafana_workspace

grafanaWorkspace.GrafanaWorkspace.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.isTerraformElement"></a>

```python
from cdktn_provider_awscc import grafana_workspace

grafanaWorkspace.GrafanaWorkspace.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.isTerraformResource"></a>

```python
from cdktn_provider_awscc import grafana_workspace

grafanaWorkspace.GrafanaWorkspace.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import grafana_workspace

grafanaWorkspace.GrafanaWorkspace.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a GrafanaWorkspace resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GrafanaWorkspace to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GrafanaWorkspace that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/grafana_workspace#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GrafanaWorkspace to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.creationTimestamp">creation_timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.endpoint">endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.modificationTimestamp">modification_timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.networkAccessControl">network_access_control</a></code> | <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference">GrafanaWorkspaceNetworkAccessControlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.samlConfiguration">saml_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference">GrafanaWorkspaceSamlConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.samlConfigurationStatus">saml_configuration_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.ssoClientId">sso_client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsList">GrafanaWorkspaceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.vpcConfiguration">vpc_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference">GrafanaWorkspaceVpcConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.workspaceId">workspace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.accountAccessTypeInput">account_access_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.authenticationProvidersInput">authentication_providers_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.clientTokenInput">client_token_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.dataSourcesInput">data_sources_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.grafanaVersionInput">grafana_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.networkAccessControlInput">network_access_control_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControl">GrafanaWorkspaceNetworkAccessControl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.notificationDestinationsInput">notification_destinations_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.organizationalUnitsInput">organizational_units_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.organizationRoleNameInput">organization_role_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.permissionTypeInput">permission_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.pluginAdminEnabledInput">plugin_admin_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.samlConfigurationInput">saml_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfiguration">GrafanaWorkspaceSamlConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.stackSetNameInput">stack_set_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTags">GrafanaWorkspaceTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.vpcConfigurationInput">vpc_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfiguration">GrafanaWorkspaceVpcConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.accountAccessType">account_access_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.authenticationProviders">authentication_providers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.clientToken">client_token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.dataSources">data_sources</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.grafanaVersion">grafana_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.notificationDestinations">notification_destinations</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.organizationalUnits">organizational_units</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.organizationRoleName">organization_role_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.permissionType">permission_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.pluginAdminEnabled">plugin_admin_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.stackSetName">stack_set_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `creation_timestamp`<sup>Required</sup> <a name="creation_timestamp" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.creationTimestamp"></a>

```python
creation_timestamp: str
```

- *Type:* str

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.endpoint"></a>

```python
endpoint: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `modification_timestamp`<sup>Required</sup> <a name="modification_timestamp" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.modificationTimestamp"></a>

```python
modification_timestamp: str
```

- *Type:* str

---

##### `network_access_control`<sup>Required</sup> <a name="network_access_control" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.networkAccessControl"></a>

```python
network_access_control: GrafanaWorkspaceNetworkAccessControlOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference">GrafanaWorkspaceNetworkAccessControlOutputReference</a>

---

##### `saml_configuration`<sup>Required</sup> <a name="saml_configuration" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.samlConfiguration"></a>

```python
saml_configuration: GrafanaWorkspaceSamlConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference">GrafanaWorkspaceSamlConfigurationOutputReference</a>

---

##### `saml_configuration_status`<sup>Required</sup> <a name="saml_configuration_status" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.samlConfigurationStatus"></a>

```python
saml_configuration_status: str
```

- *Type:* str

---

##### `sso_client_id`<sup>Required</sup> <a name="sso_client_id" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.ssoClientId"></a>

```python
sso_client_id: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.tags"></a>

```python
tags: GrafanaWorkspaceTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsList">GrafanaWorkspaceTagsList</a>

---

##### `vpc_configuration`<sup>Required</sup> <a name="vpc_configuration" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.vpcConfiguration"></a>

```python
vpc_configuration: GrafanaWorkspaceVpcConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference">GrafanaWorkspaceVpcConfigurationOutputReference</a>

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

---

##### `account_access_type_input`<sup>Optional</sup> <a name="account_access_type_input" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.accountAccessTypeInput"></a>

```python
account_access_type_input: str
```

- *Type:* str

---

##### `authentication_providers_input`<sup>Optional</sup> <a name="authentication_providers_input" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.authenticationProvidersInput"></a>

```python
authentication_providers_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `client_token_input`<sup>Optional</sup> <a name="client_token_input" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.clientTokenInput"></a>

```python
client_token_input: str
```

- *Type:* str

---

##### `data_sources_input`<sup>Optional</sup> <a name="data_sources_input" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.dataSourcesInput"></a>

```python
data_sources_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `grafana_version_input`<sup>Optional</sup> <a name="grafana_version_input" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.grafanaVersionInput"></a>

```python
grafana_version_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `network_access_control_input`<sup>Optional</sup> <a name="network_access_control_input" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.networkAccessControlInput"></a>

```python
network_access_control_input: IResolvable | GrafanaWorkspaceNetworkAccessControl
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControl">GrafanaWorkspaceNetworkAccessControl</a>

---

##### `notification_destinations_input`<sup>Optional</sup> <a name="notification_destinations_input" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.notificationDestinationsInput"></a>

```python
notification_destinations_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `organizational_units_input`<sup>Optional</sup> <a name="organizational_units_input" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.organizationalUnitsInput"></a>

```python
organizational_units_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `organization_role_name_input`<sup>Optional</sup> <a name="organization_role_name_input" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.organizationRoleNameInput"></a>

```python
organization_role_name_input: str
```

- *Type:* str

---

##### `permission_type_input`<sup>Optional</sup> <a name="permission_type_input" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.permissionTypeInput"></a>

```python
permission_type_input: str
```

- *Type:* str

---

##### `plugin_admin_enabled_input`<sup>Optional</sup> <a name="plugin_admin_enabled_input" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.pluginAdminEnabledInput"></a>

```python
plugin_admin_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `saml_configuration_input`<sup>Optional</sup> <a name="saml_configuration_input" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.samlConfigurationInput"></a>

```python
saml_configuration_input: IResolvable | GrafanaWorkspaceSamlConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfiguration">GrafanaWorkspaceSamlConfiguration</a>

---

##### `stack_set_name_input`<sup>Optional</sup> <a name="stack_set_name_input" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.stackSetNameInput"></a>

```python
stack_set_name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[GrafanaWorkspaceTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTags">GrafanaWorkspaceTags</a>]

---

##### `vpc_configuration_input`<sup>Optional</sup> <a name="vpc_configuration_input" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.vpcConfigurationInput"></a>

```python
vpc_configuration_input: IResolvable | GrafanaWorkspaceVpcConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfiguration">GrafanaWorkspaceVpcConfiguration</a>

---

##### `account_access_type`<sup>Required</sup> <a name="account_access_type" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.accountAccessType"></a>

```python
account_access_type: str
```

- *Type:* str

---

##### `authentication_providers`<sup>Required</sup> <a name="authentication_providers" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.authenticationProviders"></a>

```python
authentication_providers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `client_token`<sup>Required</sup> <a name="client_token" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.clientToken"></a>

```python
client_token: str
```

- *Type:* str

---

##### `data_sources`<sup>Required</sup> <a name="data_sources" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.dataSources"></a>

```python
data_sources: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `grafana_version`<sup>Required</sup> <a name="grafana_version" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.grafanaVersion"></a>

```python
grafana_version: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `notification_destinations`<sup>Required</sup> <a name="notification_destinations" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.notificationDestinations"></a>

```python
notification_destinations: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `organizational_units`<sup>Required</sup> <a name="organizational_units" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.organizationalUnits"></a>

```python
organizational_units: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `organization_role_name`<sup>Required</sup> <a name="organization_role_name" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.organizationRoleName"></a>

```python
organization_role_name: str
```

- *Type:* str

---

##### `permission_type`<sup>Required</sup> <a name="permission_type" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.permissionType"></a>

```python
permission_type: str
```

- *Type:* str

---

##### `plugin_admin_enabled`<sup>Required</sup> <a name="plugin_admin_enabled" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.pluginAdminEnabled"></a>

```python
plugin_admin_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `stack_set_name`<sup>Required</sup> <a name="stack_set_name" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.stackSetName"></a>

```python
stack_set_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GrafanaWorkspaceConfig <a name="GrafanaWorkspaceConfig" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceConfig.Initializer"></a>

```python
from cdktn_provider_awscc import grafana_workspace

grafanaWorkspace.GrafanaWorkspaceConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  account_access_type: str,
  authentication_providers: typing.List[str],
  permission_type: str,
  client_token: str = None,
  data_sources: typing.List[str] = None,
  description: str = None,
  grafana_version: str = None,
  name: str = None,
  network_access_control: GrafanaWorkspaceNetworkAccessControl = None,
  notification_destinations: typing.List[str] = None,
  organizational_units: typing.List[str] = None,
  organization_role_name: str = None,
  plugin_admin_enabled: bool | IResolvable = None,
  role_arn: str = None,
  saml_configuration: GrafanaWorkspaceSamlConfiguration = None,
  stack_set_name: str = None,
  tags: IResolvable | typing.List[GrafanaWorkspaceTags] = None,
  vpc_configuration: GrafanaWorkspaceVpcConfiguration = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceConfig.property.accountAccessType">account_access_type</a></code> | <code>str</code> | These enums represent valid account access types. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceConfig.property.authenticationProviders">authentication_providers</a></code> | <code>typing.List[str]</code> | List of authentication providers to enable. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceConfig.property.permissionType">permission_type</a></code> | <code>str</code> | These enums represent valid permission types to use when creating or configuring a Grafana workspace. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceConfig.property.clientToken">client_token</a></code> | <code>str</code> | A unique, case-sensitive, user-provided identifier to ensure the idempotency of the request. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceConfig.property.dataSources">data_sources</a></code> | <code>typing.List[str]</code> | List of data sources on the service managed IAM role. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceConfig.property.description">description</a></code> | <code>str</code> | Description of a workspace. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceConfig.property.grafanaVersion">grafana_version</a></code> | <code>str</code> | The version of Grafana to support in your workspace. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceConfig.property.name">name</a></code> | <code>str</code> | The user friendly name of a workspace. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceConfig.property.networkAccessControl">network_access_control</a></code> | <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControl">GrafanaWorkspaceNetworkAccessControl</a></code> | The configuration settings for Network Access Control. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceConfig.property.notificationDestinations">notification_destinations</a></code> | <code>typing.List[str]</code> | List of notification destinations on the customers service managed IAM role that the Grafana workspace can query. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceConfig.property.organizationalUnits">organizational_units</a></code> | <code>typing.List[str]</code> | List of Organizational Units containing AWS accounts the Grafana workspace can pull data from. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceConfig.property.organizationRoleName">organization_role_name</a></code> | <code>str</code> | The name of an IAM role that already exists to use with AWS Organizations to access AWS data sources and notification channels in other accounts in an organization. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceConfig.property.pluginAdminEnabled">plugin_admin_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Allow workspace admins to install plugins. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceConfig.property.roleArn">role_arn</a></code> | <code>str</code> | IAM Role that will be used to grant the Grafana workspace access to a customers AWS resources. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceConfig.property.samlConfiguration">saml_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfiguration">GrafanaWorkspaceSamlConfiguration</a></code> | SAML configuration data associated with an AMG workspace. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceConfig.property.stackSetName">stack_set_name</a></code> | <code>str</code> | The name of the AWS CloudFormation stack set to use to generate IAM roles to be used for this workspace. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTags">GrafanaWorkspaceTags</a>]</code> | The list of tags associated with the workspace. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceConfig.property.vpcConfiguration">vpc_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfiguration">GrafanaWorkspaceVpcConfiguration</a></code> | The configuration settings for an Amazon VPC that contains data sources for your Grafana workspace to connect to. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `account_access_type`<sup>Required</sup> <a name="account_access_type" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceConfig.property.accountAccessType"></a>

```python
account_access_type: str
```

- *Type:* str

These enums represent valid account access types.

Specifically these enums determine whether the workspace can access AWS resources in the AWS account only, or whether it can also access resources in other accounts in the same organization. If the value CURRENT_ACCOUNT is used, a workspace role ARN must be provided. If the value is ORGANIZATION, a list of organizational units must be provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/grafana_workspace#account_access_type GrafanaWorkspace#account_access_type}

---

##### `authentication_providers`<sup>Required</sup> <a name="authentication_providers" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceConfig.property.authenticationProviders"></a>

```python
authentication_providers: typing.List[str]
```

- *Type:* typing.List[str]

List of authentication providers to enable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/grafana_workspace#authentication_providers GrafanaWorkspace#authentication_providers}

---

##### `permission_type`<sup>Required</sup> <a name="permission_type" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceConfig.property.permissionType"></a>

```python
permission_type: str
```

- *Type:* str

These enums represent valid permission types to use when creating or configuring a Grafana workspace.

The SERVICE_MANAGED permission type means the Managed Grafana service will create a workspace IAM role on your behalf. The CUSTOMER_MANAGED permission type means that the customer is expected to provide an IAM role that the Grafana workspace can use to query data sources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/grafana_workspace#permission_type GrafanaWorkspace#permission_type}

---

##### `client_token`<sup>Optional</sup> <a name="client_token" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceConfig.property.clientToken"></a>

```python
client_token: str
```

- *Type:* str

A unique, case-sensitive, user-provided identifier to ensure the idempotency of the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/grafana_workspace#client_token GrafanaWorkspace#client_token}

---

##### `data_sources`<sup>Optional</sup> <a name="data_sources" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceConfig.property.dataSources"></a>

```python
data_sources: typing.List[str]
```

- *Type:* typing.List[str]

List of data sources on the service managed IAM role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/grafana_workspace#data_sources GrafanaWorkspace#data_sources}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Description of a workspace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/grafana_workspace#description GrafanaWorkspace#description}

---

##### `grafana_version`<sup>Optional</sup> <a name="grafana_version" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceConfig.property.grafanaVersion"></a>

```python
grafana_version: str
```

- *Type:* str

The version of Grafana to support in your workspace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/grafana_workspace#grafana_version GrafanaWorkspace#grafana_version}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The user friendly name of a workspace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/grafana_workspace#name GrafanaWorkspace#name}

---

##### `network_access_control`<sup>Optional</sup> <a name="network_access_control" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceConfig.property.networkAccessControl"></a>

```python
network_access_control: GrafanaWorkspaceNetworkAccessControl
```

- *Type:* <a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControl">GrafanaWorkspaceNetworkAccessControl</a>

The configuration settings for Network Access Control.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/grafana_workspace#network_access_control GrafanaWorkspace#network_access_control}

---

##### `notification_destinations`<sup>Optional</sup> <a name="notification_destinations" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceConfig.property.notificationDestinations"></a>

```python
notification_destinations: typing.List[str]
```

- *Type:* typing.List[str]

List of notification destinations on the customers service managed IAM role that the Grafana workspace can query.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/grafana_workspace#notification_destinations GrafanaWorkspace#notification_destinations}

---

##### `organizational_units`<sup>Optional</sup> <a name="organizational_units" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceConfig.property.organizationalUnits"></a>

```python
organizational_units: typing.List[str]
```

- *Type:* typing.List[str]

List of Organizational Units containing AWS accounts the Grafana workspace can pull data from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/grafana_workspace#organizational_units GrafanaWorkspace#organizational_units}

---

##### `organization_role_name`<sup>Optional</sup> <a name="organization_role_name" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceConfig.property.organizationRoleName"></a>

```python
organization_role_name: str
```

- *Type:* str

The name of an IAM role that already exists to use with AWS Organizations to access AWS data sources and notification channels in other accounts in an organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/grafana_workspace#organization_role_name GrafanaWorkspace#organization_role_name}

---

##### `plugin_admin_enabled`<sup>Optional</sup> <a name="plugin_admin_enabled" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceConfig.property.pluginAdminEnabled"></a>

```python
plugin_admin_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Allow workspace admins to install plugins.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/grafana_workspace#plugin_admin_enabled GrafanaWorkspace#plugin_admin_enabled}

---

##### `role_arn`<sup>Optional</sup> <a name="role_arn" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceConfig.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

IAM Role that will be used to grant the Grafana workspace access to a customers AWS resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/grafana_workspace#role_arn GrafanaWorkspace#role_arn}

---

##### `saml_configuration`<sup>Optional</sup> <a name="saml_configuration" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceConfig.property.samlConfiguration"></a>

```python
saml_configuration: GrafanaWorkspaceSamlConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfiguration">GrafanaWorkspaceSamlConfiguration</a>

SAML configuration data associated with an AMG workspace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/grafana_workspace#saml_configuration GrafanaWorkspace#saml_configuration}

---

##### `stack_set_name`<sup>Optional</sup> <a name="stack_set_name" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceConfig.property.stackSetName"></a>

```python
stack_set_name: str
```

- *Type:* str

The name of the AWS CloudFormation stack set to use to generate IAM roles to be used for this workspace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/grafana_workspace#stack_set_name GrafanaWorkspace#stack_set_name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[GrafanaWorkspaceTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTags">GrafanaWorkspaceTags</a>]

The list of tags associated with the workspace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/grafana_workspace#tags GrafanaWorkspace#tags}

---

##### `vpc_configuration`<sup>Optional</sup> <a name="vpc_configuration" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceConfig.property.vpcConfiguration"></a>

```python
vpc_configuration: GrafanaWorkspaceVpcConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfiguration">GrafanaWorkspaceVpcConfiguration</a>

The configuration settings for an Amazon VPC that contains data sources for your Grafana workspace to connect to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/grafana_workspace#vpc_configuration GrafanaWorkspace#vpc_configuration}

---

### GrafanaWorkspaceNetworkAccessControl <a name="GrafanaWorkspaceNetworkAccessControl" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControl"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControl.Initializer"></a>

```python
from cdktn_provider_awscc import grafana_workspace

grafanaWorkspace.GrafanaWorkspaceNetworkAccessControl(
  prefix_list_ids: typing.List[str] = None,
  vpce_ids: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControl.property.prefixListIds">prefix_list_ids</a></code> | <code>typing.List[str]</code> | The list of prefix list IDs. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControl.property.vpceIds">vpce_ids</a></code> | <code>typing.List[str]</code> | The list of Amazon VPC endpoint IDs for the workspace. |

---

##### `prefix_list_ids`<sup>Optional</sup> <a name="prefix_list_ids" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControl.property.prefixListIds"></a>

```python
prefix_list_ids: typing.List[str]
```

- *Type:* typing.List[str]

The list of prefix list IDs.

A prefix list is a list of CIDR ranges of IP addresses. The IP addresses specified are allowed to access your workspace. If the list is not included in the configuration then no IP addresses will be allowed to access the workspace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/grafana_workspace#prefix_list_ids GrafanaWorkspace#prefix_list_ids}

---

##### `vpce_ids`<sup>Optional</sup> <a name="vpce_ids" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControl.property.vpceIds"></a>

```python
vpce_ids: typing.List[str]
```

- *Type:* typing.List[str]

The list of Amazon VPC endpoint IDs for the workspace.

If a NetworkAccessConfiguration is specified then only VPC endpoints specified here will be allowed to access the workspace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/grafana_workspace#vpce_ids GrafanaWorkspace#vpce_ids}

---

### GrafanaWorkspaceSamlConfiguration <a name="GrafanaWorkspaceSamlConfiguration" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import grafana_workspace

grafanaWorkspace.GrafanaWorkspaceSamlConfiguration(
  allowed_organizations: typing.List[str] = None,
  assertion_attributes: GrafanaWorkspaceSamlConfigurationAssertionAttributes = None,
  idp_metadata: GrafanaWorkspaceSamlConfigurationIdpMetadata = None,
  login_validity_duration: typing.Union[int, float] = None,
  role_values: GrafanaWorkspaceSamlConfigurationRoleValues = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfiguration.property.allowedOrganizations">allowed_organizations</a></code> | <code>typing.List[str]</code> | List of SAML organizations allowed to access Grafana. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfiguration.property.assertionAttributes">assertion_attributes</a></code> | <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributes">GrafanaWorkspaceSamlConfigurationAssertionAttributes</a></code> | Maps Grafana friendly names to the IdPs SAML attributes. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfiguration.property.idpMetadata">idp_metadata</a></code> | <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadata">GrafanaWorkspaceSamlConfigurationIdpMetadata</a></code> | IdP Metadata used to configure SAML authentication in Grafana. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfiguration.property.loginValidityDuration">login_validity_duration</a></code> | <code>typing.Union[int, float]</code> | The maximum lifetime an authenticated user can be logged in (in minutes) before being required to re-authenticate. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfiguration.property.roleValues">role_values</a></code> | <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValues">GrafanaWorkspaceSamlConfigurationRoleValues</a></code> | Maps SAML roles to the Grafana Editor and Admin roles. |

---

##### `allowed_organizations`<sup>Optional</sup> <a name="allowed_organizations" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfiguration.property.allowedOrganizations"></a>

```python
allowed_organizations: typing.List[str]
```

- *Type:* typing.List[str]

List of SAML organizations allowed to access Grafana.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/grafana_workspace#allowed_organizations GrafanaWorkspace#allowed_organizations}

---

##### `assertion_attributes`<sup>Optional</sup> <a name="assertion_attributes" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfiguration.property.assertionAttributes"></a>

```python
assertion_attributes: GrafanaWorkspaceSamlConfigurationAssertionAttributes
```

- *Type:* <a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributes">GrafanaWorkspaceSamlConfigurationAssertionAttributes</a>

Maps Grafana friendly names to the IdPs SAML attributes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/grafana_workspace#assertion_attributes GrafanaWorkspace#assertion_attributes}

---

##### `idp_metadata`<sup>Optional</sup> <a name="idp_metadata" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfiguration.property.idpMetadata"></a>

```python
idp_metadata: GrafanaWorkspaceSamlConfigurationIdpMetadata
```

- *Type:* <a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadata">GrafanaWorkspaceSamlConfigurationIdpMetadata</a>

IdP Metadata used to configure SAML authentication in Grafana.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/grafana_workspace#idp_metadata GrafanaWorkspace#idp_metadata}

---

##### `login_validity_duration`<sup>Optional</sup> <a name="login_validity_duration" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfiguration.property.loginValidityDuration"></a>

```python
login_validity_duration: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum lifetime an authenticated user can be logged in (in minutes) before being required to re-authenticate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/grafana_workspace#login_validity_duration GrafanaWorkspace#login_validity_duration}

---

##### `role_values`<sup>Optional</sup> <a name="role_values" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfiguration.property.roleValues"></a>

```python
role_values: GrafanaWorkspaceSamlConfigurationRoleValues
```

- *Type:* <a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValues">GrafanaWorkspaceSamlConfigurationRoleValues</a>

Maps SAML roles to the Grafana Editor and Admin roles.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/grafana_workspace#role_values GrafanaWorkspace#role_values}

---

### GrafanaWorkspaceSamlConfigurationAssertionAttributes <a name="GrafanaWorkspaceSamlConfigurationAssertionAttributes" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributes.Initializer"></a>

```python
from cdktn_provider_awscc import grafana_workspace

grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributes(
  email: str = None,
  groups: str = None,
  login: str = None,
  name: str = None,
  org: str = None,
  role: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributes.property.email">email</a></code> | <code>str</code> | Name of the attribute within the SAML assert to use as the users email in Grafana. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributes.property.groups">groups</a></code> | <code>str</code> | Name of the attribute within the SAML assert to use as the users groups in Grafana. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributes.property.login">login</a></code> | <code>str</code> | Name of the attribute within the SAML assert to use as the users login handle in Grafana. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributes.property.name">name</a></code> | <code>str</code> | Name of the attribute within the SAML assert to use as the users name in Grafana. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributes.property.org">org</a></code> | <code>str</code> | Name of the attribute within the SAML assert to use as the users organizations in Grafana. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributes.property.role">role</a></code> | <code>str</code> | Name of the attribute within the SAML assert to use as the users roles in Grafana. |

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributes.property.email"></a>

```python
email: str
```

- *Type:* str

Name of the attribute within the SAML assert to use as the users email in Grafana.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/grafana_workspace#email GrafanaWorkspace#email}

---

##### `groups`<sup>Optional</sup> <a name="groups" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributes.property.groups"></a>

```python
groups: str
```

- *Type:* str

Name of the attribute within the SAML assert to use as the users groups in Grafana.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/grafana_workspace#groups GrafanaWorkspace#groups}

---

##### `login`<sup>Optional</sup> <a name="login" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributes.property.login"></a>

```python
login: str
```

- *Type:* str

Name of the attribute within the SAML assert to use as the users login handle in Grafana.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/grafana_workspace#login GrafanaWorkspace#login}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributes.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the attribute within the SAML assert to use as the users name in Grafana.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/grafana_workspace#name GrafanaWorkspace#name}

---

##### `org`<sup>Optional</sup> <a name="org" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributes.property.org"></a>

```python
org: str
```

- *Type:* str

Name of the attribute within the SAML assert to use as the users organizations in Grafana.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/grafana_workspace#org GrafanaWorkspace#org}

---

##### `role`<sup>Optional</sup> <a name="role" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributes.property.role"></a>

```python
role: str
```

- *Type:* str

Name of the attribute within the SAML assert to use as the users roles in Grafana.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/grafana_workspace#role GrafanaWorkspace#role}

---

### GrafanaWorkspaceSamlConfigurationIdpMetadata <a name="GrafanaWorkspaceSamlConfigurationIdpMetadata" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadata.Initializer"></a>

```python
from cdktn_provider_awscc import grafana_workspace

grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadata(
  url: str = None,
  xml: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadata.property.url">url</a></code> | <code>str</code> | URL that vends the IdPs metadata. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadata.property.xml">xml</a></code> | <code>str</code> | XML blob of the IdPs metadata. |

---

##### `url`<sup>Optional</sup> <a name="url" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadata.property.url"></a>

```python
url: str
```

- *Type:* str

URL that vends the IdPs metadata.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/grafana_workspace#url GrafanaWorkspace#url}

---

##### `xml`<sup>Optional</sup> <a name="xml" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadata.property.xml"></a>

```python
xml: str
```

- *Type:* str

XML blob of the IdPs metadata.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/grafana_workspace#xml GrafanaWorkspace#xml}

---

### GrafanaWorkspaceSamlConfigurationRoleValues <a name="GrafanaWorkspaceSamlConfigurationRoleValues" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValues"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValues.Initializer"></a>

```python
from cdktn_provider_awscc import grafana_workspace

grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValues(
  admin: typing.List[str] = None,
  editor: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValues.property.admin">admin</a></code> | <code>typing.List[str]</code> | List of SAML roles which will be mapped into the Grafana Admin role. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValues.property.editor">editor</a></code> | <code>typing.List[str]</code> | List of SAML roles which will be mapped into the Grafana Editor role. |

---

##### `admin`<sup>Optional</sup> <a name="admin" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValues.property.admin"></a>

```python
admin: typing.List[str]
```

- *Type:* typing.List[str]

List of SAML roles which will be mapped into the Grafana Admin role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/grafana_workspace#admin GrafanaWorkspace#admin}

---

##### `editor`<sup>Optional</sup> <a name="editor" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValues.property.editor"></a>

```python
editor: typing.List[str]
```

- *Type:* typing.List[str]

List of SAML roles which will be mapped into the Grafana Editor role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/grafana_workspace#editor GrafanaWorkspace#editor}

---

### GrafanaWorkspaceTags <a name="GrafanaWorkspaceTags" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTags.Initializer"></a>

```python
from cdktn_provider_awscc import grafana_workspace

grafanaWorkspace.GrafanaWorkspaceTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/grafana_workspace#key GrafanaWorkspace#key}. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/grafana_workspace#value GrafanaWorkspace#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/grafana_workspace#key GrafanaWorkspace#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/grafana_workspace#value GrafanaWorkspace#value}.

---

### GrafanaWorkspaceVpcConfiguration <a name="GrafanaWorkspaceVpcConfiguration" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import grafana_workspace

grafanaWorkspace.GrafanaWorkspaceVpcConfiguration(
  security_group_ids: typing.List[str] = None,
  subnet_ids: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfiguration.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | The list of Amazon EC2 security group IDs attached to the Amazon VPC for your Grafana workspace to connect. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfiguration.property.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | The list of Amazon EC2 subnet IDs created in the Amazon VPC for your Grafana workspace to connect. |

---

##### `security_group_ids`<sup>Optional</sup> <a name="security_group_ids" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfiguration.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

The list of Amazon EC2 security group IDs attached to the Amazon VPC for your Grafana workspace to connect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/grafana_workspace#security_group_ids GrafanaWorkspace#security_group_ids}

---

##### `subnet_ids`<sup>Optional</sup> <a name="subnet_ids" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfiguration.property.subnetIds"></a>

```python
subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

The list of Amazon EC2 subnet IDs created in the Amazon VPC for your Grafana workspace to connect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/grafana_workspace#subnet_ids GrafanaWorkspace#subnet_ids}

---

## Classes <a name="Classes" id="Classes"></a>

### GrafanaWorkspaceNetworkAccessControlOutputReference <a name="GrafanaWorkspaceNetworkAccessControlOutputReference" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import grafana_workspace

grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.resetPrefixListIds">reset_prefix_list_ids</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.resetVpceIds">reset_vpce_ids</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_prefix_list_ids` <a name="reset_prefix_list_ids" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.resetPrefixListIds"></a>

```python
def reset_prefix_list_ids() -> None
```

##### `reset_vpce_ids` <a name="reset_vpce_ids" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.resetVpceIds"></a>

```python
def reset_vpce_ids() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.property.prefixListIdsInput">prefix_list_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.property.vpceIdsInput">vpce_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.property.prefixListIds">prefix_list_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.property.vpceIds">vpce_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControl">GrafanaWorkspaceNetworkAccessControl</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `prefix_list_ids_input`<sup>Optional</sup> <a name="prefix_list_ids_input" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.property.prefixListIdsInput"></a>

```python
prefix_list_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `vpce_ids_input`<sup>Optional</sup> <a name="vpce_ids_input" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.property.vpceIdsInput"></a>

```python
vpce_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `prefix_list_ids`<sup>Required</sup> <a name="prefix_list_ids" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.property.prefixListIds"></a>

```python
prefix_list_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `vpce_ids`<sup>Required</sup> <a name="vpce_ids" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.property.vpceIds"></a>

```python
vpce_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GrafanaWorkspaceNetworkAccessControl
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControl">GrafanaWorkspaceNetworkAccessControl</a>

---


### GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference <a name="GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import grafana_workspace

grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.resetEmail">reset_email</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.resetGroups">reset_groups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.resetLogin">reset_login</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.resetOrg">reset_org</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.resetRole">reset_role</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_email` <a name="reset_email" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.resetEmail"></a>

```python
def reset_email() -> None
```

##### `reset_groups` <a name="reset_groups" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.resetGroups"></a>

```python
def reset_groups() -> None
```

##### `reset_login` <a name="reset_login" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.resetLogin"></a>

```python
def reset_login() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_org` <a name="reset_org" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.resetOrg"></a>

```python
def reset_org() -> None
```

##### `reset_role` <a name="reset_role" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.resetRole"></a>

```python
def reset_role() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.property.emailInput">email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.property.groupsInput">groups_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.property.loginInput">login_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.property.orgInput">org_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.property.roleInput">role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.property.email">email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.property.groups">groups</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.property.login">login</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.property.org">org</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.property.role">role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributes">GrafanaWorkspaceSamlConfigurationAssertionAttributes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `email_input`<sup>Optional</sup> <a name="email_input" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.property.emailInput"></a>

```python
email_input: str
```

- *Type:* str

---

##### `groups_input`<sup>Optional</sup> <a name="groups_input" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.property.groupsInput"></a>

```python
groups_input: str
```

- *Type:* str

---

##### `login_input`<sup>Optional</sup> <a name="login_input" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.property.loginInput"></a>

```python
login_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `org_input`<sup>Optional</sup> <a name="org_input" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.property.orgInput"></a>

```python
org_input: str
```

- *Type:* str

---

##### `role_input`<sup>Optional</sup> <a name="role_input" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.property.roleInput"></a>

```python
role_input: str
```

- *Type:* str

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.property.email"></a>

```python
email: str
```

- *Type:* str

---

##### `groups`<sup>Required</sup> <a name="groups" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.property.groups"></a>

```python
groups: str
```

- *Type:* str

---

##### `login`<sup>Required</sup> <a name="login" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.property.login"></a>

```python
login: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `org`<sup>Required</sup> <a name="org" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.property.org"></a>

```python
org: str
```

- *Type:* str

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.property.role"></a>

```python
role: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GrafanaWorkspaceSamlConfigurationAssertionAttributes
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributes">GrafanaWorkspaceSamlConfigurationAssertionAttributes</a>

---


### GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference <a name="GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import grafana_workspace

grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.resetUrl">reset_url</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.resetXml">reset_xml</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_url` <a name="reset_url" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.resetUrl"></a>

```python
def reset_url() -> None
```

##### `reset_xml` <a name="reset_xml" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.resetXml"></a>

```python
def reset_xml() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.property.urlInput">url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.property.xmlInput">xml_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.property.xml">xml</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadata">GrafanaWorkspaceSamlConfigurationIdpMetadata</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `url_input`<sup>Optional</sup> <a name="url_input" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.property.urlInput"></a>

```python
url_input: str
```

- *Type:* str

---

##### `xml_input`<sup>Optional</sup> <a name="xml_input" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.property.xmlInput"></a>

```python
xml_input: str
```

- *Type:* str

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `xml`<sup>Required</sup> <a name="xml" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.property.xml"></a>

```python
xml: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GrafanaWorkspaceSamlConfigurationIdpMetadata
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadata">GrafanaWorkspaceSamlConfigurationIdpMetadata</a>

---


### GrafanaWorkspaceSamlConfigurationOutputReference <a name="GrafanaWorkspaceSamlConfigurationOutputReference" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import grafana_workspace

grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.putAssertionAttributes">put_assertion_attributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.putIdpMetadata">put_idp_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.putRoleValues">put_role_values</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.resetAllowedOrganizations">reset_allowed_organizations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.resetAssertionAttributes">reset_assertion_attributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.resetIdpMetadata">reset_idp_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.resetLoginValidityDuration">reset_login_validity_duration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.resetRoleValues">reset_role_values</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_assertion_attributes` <a name="put_assertion_attributes" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.putAssertionAttributes"></a>

```python
def put_assertion_attributes(
  email: str = None,
  groups: str = None,
  login: str = None,
  name: str = None,
  org: str = None,
  role: str = None
) -> None
```

###### `email`<sup>Optional</sup> <a name="email" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.putAssertionAttributes.parameter.email"></a>

- *Type:* str

Name of the attribute within the SAML assert to use as the users email in Grafana.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/grafana_workspace#email GrafanaWorkspace#email}

---

###### `groups`<sup>Optional</sup> <a name="groups" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.putAssertionAttributes.parameter.groups"></a>

- *Type:* str

Name of the attribute within the SAML assert to use as the users groups in Grafana.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/grafana_workspace#groups GrafanaWorkspace#groups}

---

###### `login`<sup>Optional</sup> <a name="login" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.putAssertionAttributes.parameter.login"></a>

- *Type:* str

Name of the attribute within the SAML assert to use as the users login handle in Grafana.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/grafana_workspace#login GrafanaWorkspace#login}

---

###### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.putAssertionAttributes.parameter.name"></a>

- *Type:* str

Name of the attribute within the SAML assert to use as the users name in Grafana.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/grafana_workspace#name GrafanaWorkspace#name}

---

###### `org`<sup>Optional</sup> <a name="org" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.putAssertionAttributes.parameter.org"></a>

- *Type:* str

Name of the attribute within the SAML assert to use as the users organizations in Grafana.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/grafana_workspace#org GrafanaWorkspace#org}

---

###### `role`<sup>Optional</sup> <a name="role" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.putAssertionAttributes.parameter.role"></a>

- *Type:* str

Name of the attribute within the SAML assert to use as the users roles in Grafana.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/grafana_workspace#role GrafanaWorkspace#role}

---

##### `put_idp_metadata` <a name="put_idp_metadata" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.putIdpMetadata"></a>

```python
def put_idp_metadata(
  url: str = None,
  xml: str = None
) -> None
```

###### `url`<sup>Optional</sup> <a name="url" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.putIdpMetadata.parameter.url"></a>

- *Type:* str

URL that vends the IdPs metadata.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/grafana_workspace#url GrafanaWorkspace#url}

---

###### `xml`<sup>Optional</sup> <a name="xml" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.putIdpMetadata.parameter.xml"></a>

- *Type:* str

XML blob of the IdPs metadata.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/grafana_workspace#xml GrafanaWorkspace#xml}

---

##### `put_role_values` <a name="put_role_values" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.putRoleValues"></a>

```python
def put_role_values(
  admin: typing.List[str] = None,
  editor: typing.List[str] = None
) -> None
```

###### `admin`<sup>Optional</sup> <a name="admin" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.putRoleValues.parameter.admin"></a>

- *Type:* typing.List[str]

List of SAML roles which will be mapped into the Grafana Admin role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/grafana_workspace#admin GrafanaWorkspace#admin}

---

###### `editor`<sup>Optional</sup> <a name="editor" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.putRoleValues.parameter.editor"></a>

- *Type:* typing.List[str]

List of SAML roles which will be mapped into the Grafana Editor role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/grafana_workspace#editor GrafanaWorkspace#editor}

---

##### `reset_allowed_organizations` <a name="reset_allowed_organizations" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.resetAllowedOrganizations"></a>

```python
def reset_allowed_organizations() -> None
```

##### `reset_assertion_attributes` <a name="reset_assertion_attributes" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.resetAssertionAttributes"></a>

```python
def reset_assertion_attributes() -> None
```

##### `reset_idp_metadata` <a name="reset_idp_metadata" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.resetIdpMetadata"></a>

```python
def reset_idp_metadata() -> None
```

##### `reset_login_validity_duration` <a name="reset_login_validity_duration" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.resetLoginValidityDuration"></a>

```python
def reset_login_validity_duration() -> None
```

##### `reset_role_values` <a name="reset_role_values" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.resetRoleValues"></a>

```python
def reset_role_values() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.property.assertionAttributes">assertion_attributes</a></code> | <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference">GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.property.idpMetadata">idp_metadata</a></code> | <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference">GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.property.roleValues">role_values</a></code> | <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference">GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.property.allowedOrganizationsInput">allowed_organizations_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.property.assertionAttributesInput">assertion_attributes_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributes">GrafanaWorkspaceSamlConfigurationAssertionAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.property.idpMetadataInput">idp_metadata_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadata">GrafanaWorkspaceSamlConfigurationIdpMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.property.loginValidityDurationInput">login_validity_duration_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.property.roleValuesInput">role_values_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValues">GrafanaWorkspaceSamlConfigurationRoleValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.property.allowedOrganizations">allowed_organizations</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.property.loginValidityDuration">login_validity_duration</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfiguration">GrafanaWorkspaceSamlConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `assertion_attributes`<sup>Required</sup> <a name="assertion_attributes" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.property.assertionAttributes"></a>

```python
assertion_attributes: GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference">GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference</a>

---

##### `idp_metadata`<sup>Required</sup> <a name="idp_metadata" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.property.idpMetadata"></a>

```python
idp_metadata: GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference">GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference</a>

---

##### `role_values`<sup>Required</sup> <a name="role_values" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.property.roleValues"></a>

```python
role_values: GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference">GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference</a>

---

##### `allowed_organizations_input`<sup>Optional</sup> <a name="allowed_organizations_input" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.property.allowedOrganizationsInput"></a>

```python
allowed_organizations_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `assertion_attributes_input`<sup>Optional</sup> <a name="assertion_attributes_input" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.property.assertionAttributesInput"></a>

```python
assertion_attributes_input: IResolvable | GrafanaWorkspaceSamlConfigurationAssertionAttributes
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributes">GrafanaWorkspaceSamlConfigurationAssertionAttributes</a>

---

##### `idp_metadata_input`<sup>Optional</sup> <a name="idp_metadata_input" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.property.idpMetadataInput"></a>

```python
idp_metadata_input: IResolvable | GrafanaWorkspaceSamlConfigurationIdpMetadata
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadata">GrafanaWorkspaceSamlConfigurationIdpMetadata</a>

---

##### `login_validity_duration_input`<sup>Optional</sup> <a name="login_validity_duration_input" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.property.loginValidityDurationInput"></a>

```python
login_validity_duration_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `role_values_input`<sup>Optional</sup> <a name="role_values_input" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.property.roleValuesInput"></a>

```python
role_values_input: IResolvable | GrafanaWorkspaceSamlConfigurationRoleValues
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValues">GrafanaWorkspaceSamlConfigurationRoleValues</a>

---

##### `allowed_organizations`<sup>Required</sup> <a name="allowed_organizations" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.property.allowedOrganizations"></a>

```python
allowed_organizations: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `login_validity_duration`<sup>Required</sup> <a name="login_validity_duration" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.property.loginValidityDuration"></a>

```python
login_validity_duration: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GrafanaWorkspaceSamlConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfiguration">GrafanaWorkspaceSamlConfiguration</a>

---


### GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference <a name="GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import grafana_workspace

grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.resetAdmin">reset_admin</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.resetEditor">reset_editor</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_admin` <a name="reset_admin" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.resetAdmin"></a>

```python
def reset_admin() -> None
```

##### `reset_editor` <a name="reset_editor" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.resetEditor"></a>

```python
def reset_editor() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.property.adminInput">admin_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.property.editorInput">editor_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.property.admin">admin</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.property.editor">editor</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValues">GrafanaWorkspaceSamlConfigurationRoleValues</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `admin_input`<sup>Optional</sup> <a name="admin_input" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.property.adminInput"></a>

```python
admin_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `editor_input`<sup>Optional</sup> <a name="editor_input" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.property.editorInput"></a>

```python
editor_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `admin`<sup>Required</sup> <a name="admin" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.property.admin"></a>

```python
admin: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `editor`<sup>Required</sup> <a name="editor" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.property.editor"></a>

```python
editor: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GrafanaWorkspaceSamlConfigurationRoleValues
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValues">GrafanaWorkspaceSamlConfigurationRoleValues</a>

---


### GrafanaWorkspaceTagsList <a name="GrafanaWorkspaceTagsList" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import grafana_workspace

grafanaWorkspace.GrafanaWorkspaceTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GrafanaWorkspaceTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTags">GrafanaWorkspaceTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GrafanaWorkspaceTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTags">GrafanaWorkspaceTags</a>]

---


### GrafanaWorkspaceTagsOutputReference <a name="GrafanaWorkspaceTagsOutputReference" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import grafana_workspace

grafanaWorkspace.GrafanaWorkspaceTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTags">GrafanaWorkspaceTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GrafanaWorkspaceTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTags">GrafanaWorkspaceTags</a>

---


### GrafanaWorkspaceVpcConfigurationOutputReference <a name="GrafanaWorkspaceVpcConfigurationOutputReference" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import grafana_workspace

grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.resetSecurityGroupIds">reset_security_group_ids</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.resetSubnetIds">reset_subnet_ids</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_security_group_ids` <a name="reset_security_group_ids" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.resetSecurityGroupIds"></a>

```python
def reset_security_group_ids() -> None
```

##### `reset_subnet_ids` <a name="reset_subnet_ids" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.resetSubnetIds"></a>

```python
def reset_subnet_ids() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.property.securityGroupIdsInput">security_group_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.property.subnetIdsInput">subnet_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.property.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfiguration">GrafanaWorkspaceVpcConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `security_group_ids_input`<sup>Optional</sup> <a name="security_group_ids_input" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.property.securityGroupIdsInput"></a>

```python
security_group_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_ids_input`<sup>Optional</sup> <a name="subnet_ids_input" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.property.subnetIdsInput"></a>

```python
subnet_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `security_group_ids`<sup>Required</sup> <a name="security_group_ids" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_ids`<sup>Required</sup> <a name="subnet_ids" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.property.subnetIds"></a>

```python
subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GrafanaWorkspaceVpcConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfiguration">GrafanaWorkspaceVpcConfiguration</a>

---



