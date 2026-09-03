# `appstreamStack` Submodule <a name="`appstreamStack` Submodule" id="@cdktn/provider-awscc.appstreamStack"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppstreamStack <a name="AppstreamStack" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_stack awscc_appstream_stack}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.Initializer"></a>

```python
from cdktn_provider_awscc import appstream_stack

appstreamStack.AppstreamStack(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  access_endpoints: IResolvable | typing.List[AppstreamStackAccessEndpoints] = None,
  agent_access_config: AppstreamStackAgentAccessConfig = None,
  application_settings: AppstreamStackApplicationSettings = None,
  attributes_to_delete: typing.List[str] = None,
  content_redirection: AppstreamStackContentRedirection = None,
  delete_storage_connectors: bool | IResolvable = None,
  description: str = None,
  display_name: str = None,
  embed_host_domains: typing.List[str] = None,
  feedback_url: str = None,
  name: str = None,
  redirect_url: str = None,
  storage_connectors: IResolvable | typing.List[AppstreamStackStorageConnectors] = None,
  streaming_experience_settings: AppstreamStackStreamingExperienceSettings = None,
  tags: IResolvable | typing.List[AppstreamStackTags] = None,
  user_settings: IResolvable | typing.List[AppstreamStackUserSettings] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.Initializer.parameter.accessEndpoints">access_endpoints</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpoints">AppstreamStackAccessEndpoints</a>]</code> | The list of virtual private cloud (VPC) interface endpoint objects. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.Initializer.parameter.agentAccessConfig">agent_access_config</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfig">AppstreamStackAgentAccessConfig</a></code> | The configuration for agent access on the stack. If specified, agent access is enabled for the stack. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.Initializer.parameter.applicationSettings">application_settings</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettings">AppstreamStackApplicationSettings</a></code> | The persistent application settings for users of the stack. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.Initializer.parameter.attributesToDelete">attributes_to_delete</a></code> | <code>typing.List[str]</code> | The stack attributes to delete. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.Initializer.parameter.contentRedirection">content_redirection</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirection">AppstreamStackContentRedirection</a></code> | The content redirection settings for the stack. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.Initializer.parameter.deleteStorageConnectors">delete_storage_connectors</a></code> | <code>bool \| cdktn.IResolvable</code> | This parameter has been deprecated. Deletes the storage connectors currently enabled for the stack. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.Initializer.parameter.description">description</a></code> | <code>str</code> | The description to display. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | The stack name to display. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.Initializer.parameter.embedHostDomains">embed_host_domains</a></code> | <code>typing.List[str]</code> | The domains where AppStream 2.0 streaming sessions can be embedded in an iframe. You must approve the domains that you want to host embedded AppStream 2.0 streaming sessions. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.Initializer.parameter.feedbackUrl">feedback_url</a></code> | <code>str</code> | The URL that users are redirected to after they click the Send Feedback link. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the stack. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.Initializer.parameter.redirectUrl">redirect_url</a></code> | <code>str</code> | The URL that users are redirected to after their streaming session ends. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.Initializer.parameter.storageConnectors">storage_connectors</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectors">AppstreamStackStorageConnectors</a>]</code> | The storage connectors to enable. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.Initializer.parameter.streamingExperienceSettings">streaming_experience_settings</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettings">AppstreamStackStreamingExperienceSettings</a></code> | The streaming protocol that you want your stack to prefer. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTags">AppstreamStackTags</a>]</code> | An array of key-value pairs. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.Initializer.parameter.userSettings">user_settings</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettings">AppstreamStackUserSettings</a>]</code> | The actions that are enabled or disabled for users during their streaming sessions. By default, these actions are enabled. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `access_endpoints`<sup>Optional</sup> <a name="access_endpoints" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.Initializer.parameter.accessEndpoints"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpoints">AppstreamStackAccessEndpoints</a>]

The list of virtual private cloud (VPC) interface endpoint objects.

Users of the stack can connect to AppStream 2.0 only through the specified endpoints.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_stack#access_endpoints AppstreamStack#access_endpoints}

---

##### `agent_access_config`<sup>Optional</sup> <a name="agent_access_config" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.Initializer.parameter.agentAccessConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfig">AppstreamStackAgentAccessConfig</a>

The configuration for agent access on the stack. If specified, agent access is enabled for the stack.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_stack#agent_access_config AppstreamStack#agent_access_config}

---

##### `application_settings`<sup>Optional</sup> <a name="application_settings" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.Initializer.parameter.applicationSettings"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettings">AppstreamStackApplicationSettings</a>

The persistent application settings for users of the stack.

When these settings are enabled, changes that users make to applications and Windows settings are automatically saved after each session and applied to the next session.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_stack#application_settings AppstreamStack#application_settings}

---

##### `attributes_to_delete`<sup>Optional</sup> <a name="attributes_to_delete" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.Initializer.parameter.attributesToDelete"></a>

- *Type:* typing.List[str]

The stack attributes to delete.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_stack#attributes_to_delete AppstreamStack#attributes_to_delete}

---

##### `content_redirection`<sup>Optional</sup> <a name="content_redirection" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.Initializer.parameter.contentRedirection"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirection">AppstreamStackContentRedirection</a>

The content redirection settings for the stack.

These settings control URL redirection between the streaming session and the local device.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_stack#content_redirection AppstreamStack#content_redirection}

---

##### `delete_storage_connectors`<sup>Optional</sup> <a name="delete_storage_connectors" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.Initializer.parameter.deleteStorageConnectors"></a>

- *Type:* bool | cdktn.IResolvable

This parameter has been deprecated. Deletes the storage connectors currently enabled for the stack.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_stack#delete_storage_connectors AppstreamStack#delete_storage_connectors}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.Initializer.parameter.description"></a>

- *Type:* str

The description to display.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_stack#description AppstreamStack#description}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.Initializer.parameter.displayName"></a>

- *Type:* str

The stack name to display.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_stack#display_name AppstreamStack#display_name}

---

##### `embed_host_domains`<sup>Optional</sup> <a name="embed_host_domains" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.Initializer.parameter.embedHostDomains"></a>

- *Type:* typing.List[str]

The domains where AppStream 2.0 streaming sessions can be embedded in an iframe. You must approve the domains that you want to host embedded AppStream 2.0 streaming sessions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_stack#embed_host_domains AppstreamStack#embed_host_domains}

---

##### `feedback_url`<sup>Optional</sup> <a name="feedback_url" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.Initializer.parameter.feedbackUrl"></a>

- *Type:* str

The URL that users are redirected to after they click the Send Feedback link.

If no URL is specified, no Send Feedback link is displayed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_stack#feedback_url AppstreamStack#feedback_url}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.Initializer.parameter.name"></a>

- *Type:* str

The name of the stack.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_stack#name AppstreamStack#name}

---

##### `redirect_url`<sup>Optional</sup> <a name="redirect_url" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.Initializer.parameter.redirectUrl"></a>

- *Type:* str

The URL that users are redirected to after their streaming session ends.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_stack#redirect_url AppstreamStack#redirect_url}

---

##### `storage_connectors`<sup>Optional</sup> <a name="storage_connectors" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.Initializer.parameter.storageConnectors"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectors">AppstreamStackStorageConnectors</a>]

The storage connectors to enable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_stack#storage_connectors AppstreamStack#storage_connectors}

---

##### `streaming_experience_settings`<sup>Optional</sup> <a name="streaming_experience_settings" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.Initializer.parameter.streamingExperienceSettings"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettings">AppstreamStackStreamingExperienceSettings</a>

The streaming protocol that you want your stack to prefer.

This can be UDP or TCP. Currently, UDP is only supported in the Windows native client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_stack#streaming_experience_settings AppstreamStack#streaming_experience_settings}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTags">AppstreamStackTags</a>]

An array of key-value pairs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_stack#tags AppstreamStack#tags}

---

##### `user_settings`<sup>Optional</sup> <a name="user_settings" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.Initializer.parameter.userSettings"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettings">AppstreamStackUserSettings</a>]

The actions that are enabled or disabled for users during their streaming sessions. By default, these actions are enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_stack#user_settings AppstreamStack#user_settings}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.putAccessEndpoints">put_access_endpoints</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.putAgentAccessConfig">put_agent_access_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.putApplicationSettings">put_application_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.putContentRedirection">put_content_redirection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.putStorageConnectors">put_storage_connectors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.putStreamingExperienceSettings">put_streaming_experience_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.putUserSettings">put_user_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.resetAccessEndpoints">reset_access_endpoints</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.resetAgentAccessConfig">reset_agent_access_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.resetApplicationSettings">reset_application_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.resetAttributesToDelete">reset_attributes_to_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.resetContentRedirection">reset_content_redirection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.resetDeleteStorageConnectors">reset_delete_storage_connectors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.resetEmbedHostDomains">reset_embed_host_domains</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.resetFeedbackUrl">reset_feedback_url</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.resetRedirectUrl">reset_redirect_url</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.resetStorageConnectors">reset_storage_connectors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.resetStreamingExperienceSettings">reset_streaming_experience_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.resetUserSettings">reset_user_settings</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_access_endpoints` <a name="put_access_endpoints" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.putAccessEndpoints"></a>

```python
def put_access_endpoints(
  value: IResolvable | typing.List[AppstreamStackAccessEndpoints]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.putAccessEndpoints.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpoints">AppstreamStackAccessEndpoints</a>]

---

##### `put_agent_access_config` <a name="put_agent_access_config" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.putAgentAccessConfig"></a>

```python
def put_agent_access_config(
  s3_bucket_arn: str = None,
  screen_image_format: str = None,
  screen_resolution: str = None,
  screenshots_upload_enabled: bool | IResolvable = None,
  settings: IResolvable | typing.List[AppstreamStackAgentAccessConfigSettings] = None,
  user_control_mode: str = None
) -> None
```

###### `s3_bucket_arn`<sup>Optional</sup> <a name="s3_bucket_arn" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.putAgentAccessConfig.parameter.s3BucketArn"></a>

- *Type:* str

The Amazon Resource Name (ARN) of the Amazon S3 bucket where agent screenshots are stored.

Required when ScreenshotsUploadEnabled is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_stack#s3_bucket_arn AppstreamStack#s3_bucket_arn}

---

###### `screen_image_format`<sup>Optional</sup> <a name="screen_image_format" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.putAgentAccessConfig.parameter.screenImageFormat"></a>

- *Type:* str

The image format for agent screen captures.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_stack#screen_image_format AppstreamStack#screen_image_format}

---

###### `screen_resolution`<sup>Optional</sup> <a name="screen_resolution" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.putAgentAccessConfig.parameter.screenResolution"></a>

- *Type:* str

The screen resolution for the agent streaming environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_stack#screen_resolution AppstreamStack#screen_resolution}

---

###### `screenshots_upload_enabled`<sup>Optional</sup> <a name="screenshots_upload_enabled" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.putAgentAccessConfig.parameter.screenshotsUploadEnabled"></a>

- *Type:* bool | cdktn.IResolvable

Indicates whether screenshot uploads to Amazon S3 are enabled for agent sessions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_stack#screenshots_upload_enabled AppstreamStack#screenshots_upload_enabled}

---

###### `settings`<sup>Optional</sup> <a name="settings" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.putAgentAccessConfig.parameter.settings"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettings">AppstreamStackAgentAccessConfigSettings</a>]

The list of agent access settings that define permissions for each agent action.

You must specify at least one setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_stack#settings AppstreamStack#settings}

---

###### `user_control_mode`<sup>Optional</sup> <a name="user_control_mode" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.putAgentAccessConfig.parameter.userControlMode"></a>

- *Type:* str

The user control mode for agent sessions.

This setting determines how users can interact with agent sessions. Valid values are VIEW_ONLY, VIEW_STOP, and DISABLED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_stack#user_control_mode AppstreamStack#user_control_mode}

---

##### `put_application_settings` <a name="put_application_settings" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.putApplicationSettings"></a>

```python
def put_application_settings(
  enabled: bool | IResolvable = None,
  settings_group: str = None
) -> None
```

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.putApplicationSettings.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

Enables or disables persistent application settings for users during their streaming sessions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_stack#enabled AppstreamStack#enabled}

---

###### `settings_group`<sup>Optional</sup> <a name="settings_group" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.putApplicationSettings.parameter.settingsGroup"></a>

- *Type:* str

The path prefix for the S3 bucket where users' persistent application settings are stored.

You can allow the same persistent application settings to be used across multiple stacks by specifying the same settings group for each stack.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_stack#settings_group AppstreamStack#settings_group}

---

##### `put_content_redirection` <a name="put_content_redirection" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.putContentRedirection"></a>

```python
def put_content_redirection(
  host_to_client: AppstreamStackContentRedirectionHostToClient = None
) -> None
```

###### `host_to_client`<sup>Optional</sup> <a name="host_to_client" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.putContentRedirection.parameter.hostToClient"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClient">AppstreamStackContentRedirectionHostToClient</a>

The URL redirection configuration from the streaming session host to the client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_stack#host_to_client AppstreamStack#host_to_client}

---

##### `put_storage_connectors` <a name="put_storage_connectors" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.putStorageConnectors"></a>

```python
def put_storage_connectors(
  value: IResolvable | typing.List[AppstreamStackStorageConnectors]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.putStorageConnectors.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectors">AppstreamStackStorageConnectors</a>]

---

##### `put_streaming_experience_settings` <a name="put_streaming_experience_settings" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.putStreamingExperienceSettings"></a>

```python
def put_streaming_experience_settings(
  preferred_protocol: str = None
) -> None
```

###### `preferred_protocol`<sup>Optional</sup> <a name="preferred_protocol" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.putStreamingExperienceSettings.parameter.preferredProtocol"></a>

- *Type:* str

The preferred protocol that you want to use while streaming your application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_stack#preferred_protocol AppstreamStack#preferred_protocol}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[AppstreamStackTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTags">AppstreamStackTags</a>]

---

##### `put_user_settings` <a name="put_user_settings" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.putUserSettings"></a>

```python
def put_user_settings(
  value: IResolvable | typing.List[AppstreamStackUserSettings]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.putUserSettings.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettings">AppstreamStackUserSettings</a>]

---

##### `reset_access_endpoints` <a name="reset_access_endpoints" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.resetAccessEndpoints"></a>

```python
def reset_access_endpoints() -> None
```

##### `reset_agent_access_config` <a name="reset_agent_access_config" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.resetAgentAccessConfig"></a>

```python
def reset_agent_access_config() -> None
```

##### `reset_application_settings` <a name="reset_application_settings" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.resetApplicationSettings"></a>

```python
def reset_application_settings() -> None
```

##### `reset_attributes_to_delete` <a name="reset_attributes_to_delete" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.resetAttributesToDelete"></a>

```python
def reset_attributes_to_delete() -> None
```

##### `reset_content_redirection` <a name="reset_content_redirection" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.resetContentRedirection"></a>

```python
def reset_content_redirection() -> None
```

##### `reset_delete_storage_connectors` <a name="reset_delete_storage_connectors" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.resetDeleteStorageConnectors"></a>

```python
def reset_delete_storage_connectors() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_embed_host_domains` <a name="reset_embed_host_domains" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.resetEmbedHostDomains"></a>

```python
def reset_embed_host_domains() -> None
```

##### `reset_feedback_url` <a name="reset_feedback_url" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.resetFeedbackUrl"></a>

```python
def reset_feedback_url() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_redirect_url` <a name="reset_redirect_url" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.resetRedirectUrl"></a>

```python
def reset_redirect_url() -> None
```

##### `reset_storage_connectors` <a name="reset_storage_connectors" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.resetStorageConnectors"></a>

```python
def reset_storage_connectors() -> None
```

##### `reset_streaming_experience_settings` <a name="reset_streaming_experience_settings" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.resetStreamingExperienceSettings"></a>

```python
def reset_streaming_experience_settings() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_user_settings` <a name="reset_user_settings" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.resetUserSettings"></a>

```python
def reset_user_settings() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a AppstreamStack resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.isConstruct"></a>

```python
from cdktn_provider_awscc import appstream_stack

appstreamStack.AppstreamStack.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.isTerraformElement"></a>

```python
from cdktn_provider_awscc import appstream_stack

appstreamStack.AppstreamStack.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.isTerraformResource"></a>

```python
from cdktn_provider_awscc import appstream_stack

appstreamStack.AppstreamStack.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import appstream_stack

appstreamStack.AppstreamStack.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a AppstreamStack resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the AppstreamStack to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing AppstreamStack that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_stack#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the AppstreamStack to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.accessEndpoints">access_endpoints</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsList">AppstreamStackAccessEndpointsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.agentAccessConfig">agent_access_config</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference">AppstreamStackAgentAccessConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.applicationSettings">application_settings</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference">AppstreamStackApplicationSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.contentRedirection">content_redirection</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference">AppstreamStackContentRedirectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.storageConnectors">storage_connectors</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsList">AppstreamStackStorageConnectorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.streamingExperienceSettings">streaming_experience_settings</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference">AppstreamStackStreamingExperienceSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsList">AppstreamStackTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.userSettings">user_settings</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsList">AppstreamStackUserSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.accessEndpointsInput">access_endpoints_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpoints">AppstreamStackAccessEndpoints</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.agentAccessConfigInput">agent_access_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfig">AppstreamStackAgentAccessConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.applicationSettingsInput">application_settings_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettings">AppstreamStackApplicationSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.attributesToDeleteInput">attributes_to_delete_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.contentRedirectionInput">content_redirection_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirection">AppstreamStackContentRedirection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.deleteStorageConnectorsInput">delete_storage_connectors_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.embedHostDomainsInput">embed_host_domains_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.feedbackUrlInput">feedback_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.redirectUrlInput">redirect_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.storageConnectorsInput">storage_connectors_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectors">AppstreamStackStorageConnectors</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.streamingExperienceSettingsInput">streaming_experience_settings_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettings">AppstreamStackStreamingExperienceSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTags">AppstreamStackTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.userSettingsInput">user_settings_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettings">AppstreamStackUserSettings</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.attributesToDelete">attributes_to_delete</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.deleteStorageConnectors">delete_storage_connectors</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.embedHostDomains">embed_host_domains</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.feedbackUrl">feedback_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.redirectUrl">redirect_url</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `access_endpoints`<sup>Required</sup> <a name="access_endpoints" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.accessEndpoints"></a>

```python
access_endpoints: AppstreamStackAccessEndpointsList
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsList">AppstreamStackAccessEndpointsList</a>

---

##### `agent_access_config`<sup>Required</sup> <a name="agent_access_config" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.agentAccessConfig"></a>

```python
agent_access_config: AppstreamStackAgentAccessConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference">AppstreamStackAgentAccessConfigOutputReference</a>

---

##### `application_settings`<sup>Required</sup> <a name="application_settings" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.applicationSettings"></a>

```python
application_settings: AppstreamStackApplicationSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference">AppstreamStackApplicationSettingsOutputReference</a>

---

##### `content_redirection`<sup>Required</sup> <a name="content_redirection" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.contentRedirection"></a>

```python
content_redirection: AppstreamStackContentRedirectionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference">AppstreamStackContentRedirectionOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `storage_connectors`<sup>Required</sup> <a name="storage_connectors" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.storageConnectors"></a>

```python
storage_connectors: AppstreamStackStorageConnectorsList
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsList">AppstreamStackStorageConnectorsList</a>

---

##### `streaming_experience_settings`<sup>Required</sup> <a name="streaming_experience_settings" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.streamingExperienceSettings"></a>

```python
streaming_experience_settings: AppstreamStackStreamingExperienceSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference">AppstreamStackStreamingExperienceSettingsOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.tags"></a>

```python
tags: AppstreamStackTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsList">AppstreamStackTagsList</a>

---

##### `user_settings`<sup>Required</sup> <a name="user_settings" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.userSettings"></a>

```python
user_settings: AppstreamStackUserSettingsList
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsList">AppstreamStackUserSettingsList</a>

---

##### `access_endpoints_input`<sup>Optional</sup> <a name="access_endpoints_input" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.accessEndpointsInput"></a>

```python
access_endpoints_input: IResolvable | typing.List[AppstreamStackAccessEndpoints]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpoints">AppstreamStackAccessEndpoints</a>]

---

##### `agent_access_config_input`<sup>Optional</sup> <a name="agent_access_config_input" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.agentAccessConfigInput"></a>

```python
agent_access_config_input: IResolvable | AppstreamStackAgentAccessConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfig">AppstreamStackAgentAccessConfig</a>

---

##### `application_settings_input`<sup>Optional</sup> <a name="application_settings_input" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.applicationSettingsInput"></a>

```python
application_settings_input: IResolvable | AppstreamStackApplicationSettings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettings">AppstreamStackApplicationSettings</a>

---

##### `attributes_to_delete_input`<sup>Optional</sup> <a name="attributes_to_delete_input" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.attributesToDeleteInput"></a>

```python
attributes_to_delete_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `content_redirection_input`<sup>Optional</sup> <a name="content_redirection_input" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.contentRedirectionInput"></a>

```python
content_redirection_input: IResolvable | AppstreamStackContentRedirection
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirection">AppstreamStackContentRedirection</a>

---

##### `delete_storage_connectors_input`<sup>Optional</sup> <a name="delete_storage_connectors_input" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.deleteStorageConnectorsInput"></a>

```python
delete_storage_connectors_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `embed_host_domains_input`<sup>Optional</sup> <a name="embed_host_domains_input" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.embedHostDomainsInput"></a>

```python
embed_host_domains_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `feedback_url_input`<sup>Optional</sup> <a name="feedback_url_input" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.feedbackUrlInput"></a>

```python
feedback_url_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `redirect_url_input`<sup>Optional</sup> <a name="redirect_url_input" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.redirectUrlInput"></a>

```python
redirect_url_input: str
```

- *Type:* str

---

##### `storage_connectors_input`<sup>Optional</sup> <a name="storage_connectors_input" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.storageConnectorsInput"></a>

```python
storage_connectors_input: IResolvable | typing.List[AppstreamStackStorageConnectors]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectors">AppstreamStackStorageConnectors</a>]

---

##### `streaming_experience_settings_input`<sup>Optional</sup> <a name="streaming_experience_settings_input" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.streamingExperienceSettingsInput"></a>

```python
streaming_experience_settings_input: IResolvable | AppstreamStackStreamingExperienceSettings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettings">AppstreamStackStreamingExperienceSettings</a>

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[AppstreamStackTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTags">AppstreamStackTags</a>]

---

##### `user_settings_input`<sup>Optional</sup> <a name="user_settings_input" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.userSettingsInput"></a>

```python
user_settings_input: IResolvable | typing.List[AppstreamStackUserSettings]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettings">AppstreamStackUserSettings</a>]

---

##### `attributes_to_delete`<sup>Required</sup> <a name="attributes_to_delete" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.attributesToDelete"></a>

```python
attributes_to_delete: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `delete_storage_connectors`<sup>Required</sup> <a name="delete_storage_connectors" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.deleteStorageConnectors"></a>

```python
delete_storage_connectors: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `embed_host_domains`<sup>Required</sup> <a name="embed_host_domains" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.embedHostDomains"></a>

```python
embed_host_domains: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `feedback_url`<sup>Required</sup> <a name="feedback_url" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.feedbackUrl"></a>

```python
feedback_url: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `redirect_url`<sup>Required</sup> <a name="redirect_url" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.redirectUrl"></a>

```python
redirect_url: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AppstreamStackAccessEndpoints <a name="AppstreamStackAccessEndpoints" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpoints.Initializer"></a>

```python
from cdktn_provider_awscc import appstream_stack

appstreamStack.AppstreamStackAccessEndpoints(
  endpoint_type: str = None,
  vpce_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpoints.property.endpointType">endpoint_type</a></code> | <code>str</code> | The type of interface endpoint. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpoints.property.vpceId">vpce_id</a></code> | <code>str</code> | The identifier (ID) of the VPC in which the interface endpoint is used. |

---

##### `endpoint_type`<sup>Optional</sup> <a name="endpoint_type" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpoints.property.endpointType"></a>

```python
endpoint_type: str
```

- *Type:* str

The type of interface endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_stack#endpoint_type AppstreamStack#endpoint_type}

---

##### `vpce_id`<sup>Optional</sup> <a name="vpce_id" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpoints.property.vpceId"></a>

```python
vpce_id: str
```

- *Type:* str

The identifier (ID) of the VPC in which the interface endpoint is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_stack#vpce_id AppstreamStack#vpce_id}

---

### AppstreamStackAgentAccessConfig <a name="AppstreamStackAgentAccessConfig" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfig.Initializer"></a>

```python
from cdktn_provider_awscc import appstream_stack

appstreamStack.AppstreamStackAgentAccessConfig(
  s3_bucket_arn: str = None,
  screen_image_format: str = None,
  screen_resolution: str = None,
  screenshots_upload_enabled: bool | IResolvable = None,
  settings: IResolvable | typing.List[AppstreamStackAgentAccessConfigSettings] = None,
  user_control_mode: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfig.property.s3BucketArn">s3_bucket_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the Amazon S3 bucket where agent screenshots are stored. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfig.property.screenImageFormat">screen_image_format</a></code> | <code>str</code> | The image format for agent screen captures. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfig.property.screenResolution">screen_resolution</a></code> | <code>str</code> | The screen resolution for the agent streaming environment. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfig.property.screenshotsUploadEnabled">screenshots_upload_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates whether screenshot uploads to Amazon S3 are enabled for agent sessions. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfig.property.settings">settings</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettings">AppstreamStackAgentAccessConfigSettings</a>]</code> | The list of agent access settings that define permissions for each agent action. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfig.property.userControlMode">user_control_mode</a></code> | <code>str</code> | The user control mode for agent sessions. |

---

##### `s3_bucket_arn`<sup>Optional</sup> <a name="s3_bucket_arn" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfig.property.s3BucketArn"></a>

```python
s3_bucket_arn: str
```

- *Type:* str

The Amazon Resource Name (ARN) of the Amazon S3 bucket where agent screenshots are stored.

Required when ScreenshotsUploadEnabled is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_stack#s3_bucket_arn AppstreamStack#s3_bucket_arn}

---

##### `screen_image_format`<sup>Optional</sup> <a name="screen_image_format" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfig.property.screenImageFormat"></a>

```python
screen_image_format: str
```

- *Type:* str

The image format for agent screen captures.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_stack#screen_image_format AppstreamStack#screen_image_format}

---

##### `screen_resolution`<sup>Optional</sup> <a name="screen_resolution" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfig.property.screenResolution"></a>

```python
screen_resolution: str
```

- *Type:* str

The screen resolution for the agent streaming environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_stack#screen_resolution AppstreamStack#screen_resolution}

---

##### `screenshots_upload_enabled`<sup>Optional</sup> <a name="screenshots_upload_enabled" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfig.property.screenshotsUploadEnabled"></a>

```python
screenshots_upload_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Indicates whether screenshot uploads to Amazon S3 are enabled for agent sessions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_stack#screenshots_upload_enabled AppstreamStack#screenshots_upload_enabled}

---

##### `settings`<sup>Optional</sup> <a name="settings" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfig.property.settings"></a>

```python
settings: IResolvable | typing.List[AppstreamStackAgentAccessConfigSettings]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettings">AppstreamStackAgentAccessConfigSettings</a>]

The list of agent access settings that define permissions for each agent action.

You must specify at least one setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_stack#settings AppstreamStack#settings}

---

##### `user_control_mode`<sup>Optional</sup> <a name="user_control_mode" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfig.property.userControlMode"></a>

```python
user_control_mode: str
```

- *Type:* str

The user control mode for agent sessions.

This setting determines how users can interact with agent sessions. Valid values are VIEW_ONLY, VIEW_STOP, and DISABLED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_stack#user_control_mode AppstreamStack#user_control_mode}

---

### AppstreamStackAgentAccessConfigSettings <a name="AppstreamStackAgentAccessConfigSettings" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettings.Initializer"></a>

```python
from cdktn_provider_awscc import appstream_stack

appstreamStack.AppstreamStackAgentAccessConfigSettings(
  agent_action: str = None,
  permission: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettings.property.agentAction">agent_action</a></code> | <code>str</code> | The agent action to configure. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettings.property.permission">permission</a></code> | <code>str</code> | Whether the agent action is enabled or disabled. |

---

##### `agent_action`<sup>Optional</sup> <a name="agent_action" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettings.property.agentAction"></a>

```python
agent_action: str
```

- *Type:* str

The agent action to configure.

Valid values are COMPUTER_VISION, COMPUTER_INPUT, and FORWARD_MCP_TOOLS. COMPUTER_VISION allows agents to take screenshots of the desktop. COMPUTER_INPUT allows agents to click, type, and scroll on the desktop and requires COMPUTER_VISION to also be enabled. FORWARD_MCP_TOOLS allows agents to interact with applications and the desktop operating system through direct MCP calls rather than using computer use tools. Forwards MCP tools configured on the WorkSpaces application session to the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_stack#agent_action AppstreamStack#agent_action}

---

##### `permission`<sup>Optional</sup> <a name="permission" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettings.property.permission"></a>

```python
permission: str
```

- *Type:* str

Whether the agent action is enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_stack#permission AppstreamStack#permission}

---

### AppstreamStackApplicationSettings <a name="AppstreamStackApplicationSettings" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettings.Initializer"></a>

```python
from cdktn_provider_awscc import appstream_stack

appstreamStack.AppstreamStackApplicationSettings(
  enabled: bool | IResolvable = None,
  settings_group: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettings.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Enables or disables persistent application settings for users during their streaming sessions. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettings.property.settingsGroup">settings_group</a></code> | <code>str</code> | The path prefix for the S3 bucket where users' persistent application settings are stored. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettings.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Enables or disables persistent application settings for users during their streaming sessions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_stack#enabled AppstreamStack#enabled}

---

##### `settings_group`<sup>Optional</sup> <a name="settings_group" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettings.property.settingsGroup"></a>

```python
settings_group: str
```

- *Type:* str

The path prefix for the S3 bucket where users' persistent application settings are stored.

You can allow the same persistent application settings to be used across multiple stacks by specifying the same settings group for each stack.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_stack#settings_group AppstreamStack#settings_group}

---

### AppstreamStackConfig <a name="AppstreamStackConfig" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackConfig.Initializer"></a>

```python
from cdktn_provider_awscc import appstream_stack

appstreamStack.AppstreamStackConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  access_endpoints: IResolvable | typing.List[AppstreamStackAccessEndpoints] = None,
  agent_access_config: AppstreamStackAgentAccessConfig = None,
  application_settings: AppstreamStackApplicationSettings = None,
  attributes_to_delete: typing.List[str] = None,
  content_redirection: AppstreamStackContentRedirection = None,
  delete_storage_connectors: bool | IResolvable = None,
  description: str = None,
  display_name: str = None,
  embed_host_domains: typing.List[str] = None,
  feedback_url: str = None,
  name: str = None,
  redirect_url: str = None,
  storage_connectors: IResolvable | typing.List[AppstreamStackStorageConnectors] = None,
  streaming_experience_settings: AppstreamStackStreamingExperienceSettings = None,
  tags: IResolvable | typing.List[AppstreamStackTags] = None,
  user_settings: IResolvable | typing.List[AppstreamStackUserSettings] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackConfig.property.accessEndpoints">access_endpoints</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpoints">AppstreamStackAccessEndpoints</a>]</code> | The list of virtual private cloud (VPC) interface endpoint objects. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackConfig.property.agentAccessConfig">agent_access_config</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfig">AppstreamStackAgentAccessConfig</a></code> | The configuration for agent access on the stack. If specified, agent access is enabled for the stack. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackConfig.property.applicationSettings">application_settings</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettings">AppstreamStackApplicationSettings</a></code> | The persistent application settings for users of the stack. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackConfig.property.attributesToDelete">attributes_to_delete</a></code> | <code>typing.List[str]</code> | The stack attributes to delete. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackConfig.property.contentRedirection">content_redirection</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirection">AppstreamStackContentRedirection</a></code> | The content redirection settings for the stack. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackConfig.property.deleteStorageConnectors">delete_storage_connectors</a></code> | <code>bool \| cdktn.IResolvable</code> | This parameter has been deprecated. Deletes the storage connectors currently enabled for the stack. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackConfig.property.description">description</a></code> | <code>str</code> | The description to display. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackConfig.property.displayName">display_name</a></code> | <code>str</code> | The stack name to display. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackConfig.property.embedHostDomains">embed_host_domains</a></code> | <code>typing.List[str]</code> | The domains where AppStream 2.0 streaming sessions can be embedded in an iframe. You must approve the domains that you want to host embedded AppStream 2.0 streaming sessions. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackConfig.property.feedbackUrl">feedback_url</a></code> | <code>str</code> | The URL that users are redirected to after they click the Send Feedback link. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackConfig.property.name">name</a></code> | <code>str</code> | The name of the stack. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackConfig.property.redirectUrl">redirect_url</a></code> | <code>str</code> | The URL that users are redirected to after their streaming session ends. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackConfig.property.storageConnectors">storage_connectors</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectors">AppstreamStackStorageConnectors</a>]</code> | The storage connectors to enable. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackConfig.property.streamingExperienceSettings">streaming_experience_settings</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettings">AppstreamStackStreamingExperienceSettings</a></code> | The streaming protocol that you want your stack to prefer. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTags">AppstreamStackTags</a>]</code> | An array of key-value pairs. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackConfig.property.userSettings">user_settings</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettings">AppstreamStackUserSettings</a>]</code> | The actions that are enabled or disabled for users during their streaming sessions. By default, these actions are enabled. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `access_endpoints`<sup>Optional</sup> <a name="access_endpoints" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackConfig.property.accessEndpoints"></a>

```python
access_endpoints: IResolvable | typing.List[AppstreamStackAccessEndpoints]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpoints">AppstreamStackAccessEndpoints</a>]

The list of virtual private cloud (VPC) interface endpoint objects.

Users of the stack can connect to AppStream 2.0 only through the specified endpoints.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_stack#access_endpoints AppstreamStack#access_endpoints}

---

##### `agent_access_config`<sup>Optional</sup> <a name="agent_access_config" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackConfig.property.agentAccessConfig"></a>

```python
agent_access_config: AppstreamStackAgentAccessConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfig">AppstreamStackAgentAccessConfig</a>

The configuration for agent access on the stack. If specified, agent access is enabled for the stack.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_stack#agent_access_config AppstreamStack#agent_access_config}

---

##### `application_settings`<sup>Optional</sup> <a name="application_settings" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackConfig.property.applicationSettings"></a>

```python
application_settings: AppstreamStackApplicationSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettings">AppstreamStackApplicationSettings</a>

The persistent application settings for users of the stack.

When these settings are enabled, changes that users make to applications and Windows settings are automatically saved after each session and applied to the next session.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_stack#application_settings AppstreamStack#application_settings}

---

##### `attributes_to_delete`<sup>Optional</sup> <a name="attributes_to_delete" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackConfig.property.attributesToDelete"></a>

```python
attributes_to_delete: typing.List[str]
```

- *Type:* typing.List[str]

The stack attributes to delete.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_stack#attributes_to_delete AppstreamStack#attributes_to_delete}

---

##### `content_redirection`<sup>Optional</sup> <a name="content_redirection" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackConfig.property.contentRedirection"></a>

```python
content_redirection: AppstreamStackContentRedirection
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirection">AppstreamStackContentRedirection</a>

The content redirection settings for the stack.

These settings control URL redirection between the streaming session and the local device.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_stack#content_redirection AppstreamStack#content_redirection}

---

##### `delete_storage_connectors`<sup>Optional</sup> <a name="delete_storage_connectors" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackConfig.property.deleteStorageConnectors"></a>

```python
delete_storage_connectors: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

This parameter has been deprecated. Deletes the storage connectors currently enabled for the stack.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_stack#delete_storage_connectors AppstreamStack#delete_storage_connectors}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackConfig.property.description"></a>

```python
description: str
```

- *Type:* str

The description to display.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_stack#description AppstreamStack#description}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

The stack name to display.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_stack#display_name AppstreamStack#display_name}

---

##### `embed_host_domains`<sup>Optional</sup> <a name="embed_host_domains" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackConfig.property.embedHostDomains"></a>

```python
embed_host_domains: typing.List[str]
```

- *Type:* typing.List[str]

The domains where AppStream 2.0 streaming sessions can be embedded in an iframe. You must approve the domains that you want to host embedded AppStream 2.0 streaming sessions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_stack#embed_host_domains AppstreamStack#embed_host_domains}

---

##### `feedback_url`<sup>Optional</sup> <a name="feedback_url" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackConfig.property.feedbackUrl"></a>

```python
feedback_url: str
```

- *Type:* str

The URL that users are redirected to after they click the Send Feedback link.

If no URL is specified, no Send Feedback link is displayed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_stack#feedback_url AppstreamStack#feedback_url}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the stack.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_stack#name AppstreamStack#name}

---

##### `redirect_url`<sup>Optional</sup> <a name="redirect_url" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackConfig.property.redirectUrl"></a>

```python
redirect_url: str
```

- *Type:* str

The URL that users are redirected to after their streaming session ends.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_stack#redirect_url AppstreamStack#redirect_url}

---

##### `storage_connectors`<sup>Optional</sup> <a name="storage_connectors" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackConfig.property.storageConnectors"></a>

```python
storage_connectors: IResolvable | typing.List[AppstreamStackStorageConnectors]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectors">AppstreamStackStorageConnectors</a>]

The storage connectors to enable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_stack#storage_connectors AppstreamStack#storage_connectors}

---

##### `streaming_experience_settings`<sup>Optional</sup> <a name="streaming_experience_settings" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackConfig.property.streamingExperienceSettings"></a>

```python
streaming_experience_settings: AppstreamStackStreamingExperienceSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettings">AppstreamStackStreamingExperienceSettings</a>

The streaming protocol that you want your stack to prefer.

This can be UDP or TCP. Currently, UDP is only supported in the Windows native client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_stack#streaming_experience_settings AppstreamStack#streaming_experience_settings}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[AppstreamStackTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTags">AppstreamStackTags</a>]

An array of key-value pairs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_stack#tags AppstreamStack#tags}

---

##### `user_settings`<sup>Optional</sup> <a name="user_settings" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackConfig.property.userSettings"></a>

```python
user_settings: IResolvable | typing.List[AppstreamStackUserSettings]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettings">AppstreamStackUserSettings</a>]

The actions that are enabled or disabled for users during their streaming sessions. By default, these actions are enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_stack#user_settings AppstreamStack#user_settings}

---

### AppstreamStackContentRedirection <a name="AppstreamStackContentRedirection" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirection"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirection.Initializer"></a>

```python
from cdktn_provider_awscc import appstream_stack

appstreamStack.AppstreamStackContentRedirection(
  host_to_client: AppstreamStackContentRedirectionHostToClient = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirection.property.hostToClient">host_to_client</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClient">AppstreamStackContentRedirectionHostToClient</a></code> | The URL redirection configuration from the streaming session host to the client. |

---

##### `host_to_client`<sup>Optional</sup> <a name="host_to_client" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirection.property.hostToClient"></a>

```python
host_to_client: AppstreamStackContentRedirectionHostToClient
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClient">AppstreamStackContentRedirectionHostToClient</a>

The URL redirection configuration from the streaming session host to the client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_stack#host_to_client AppstreamStack#host_to_client}

---

### AppstreamStackContentRedirectionHostToClient <a name="AppstreamStackContentRedirectionHostToClient" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClient"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClient.Initializer"></a>

```python
from cdktn_provider_awscc import appstream_stack

appstreamStack.AppstreamStackContentRedirectionHostToClient(
  allowed_urls: typing.List[str] = None,
  denied_urls: typing.List[str] = None,
  enabled: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClient.property.allowedUrls">allowed_urls</a></code> | <code>typing.List[str]</code> | The URLs that are allowed for redirection. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClient.property.deniedUrls">denied_urls</a></code> | <code>typing.List[str]</code> | The URLs that are denied for redirection. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClient.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether URL redirection is enabled or disabled. |

---

##### `allowed_urls`<sup>Optional</sup> <a name="allowed_urls" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClient.property.allowedUrls"></a>

```python
allowed_urls: typing.List[str]
```

- *Type:* typing.List[str]

The URLs that are allowed for redirection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_stack#allowed_urls AppstreamStack#allowed_urls}

---

##### `denied_urls`<sup>Optional</sup> <a name="denied_urls" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClient.property.deniedUrls"></a>

```python
denied_urls: typing.List[str]
```

- *Type:* typing.List[str]

The URLs that are denied for redirection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_stack#denied_urls AppstreamStack#denied_urls}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClient.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Specifies whether URL redirection is enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_stack#enabled AppstreamStack#enabled}

---

### AppstreamStackStorageConnectors <a name="AppstreamStackStorageConnectors" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectors.Initializer"></a>

```python
from cdktn_provider_awscc import appstream_stack

appstreamStack.AppstreamStackStorageConnectors(
  connector_type: str = None,
  domains: typing.List[str] = None,
  resource_identifier: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectors.property.connectorType">connector_type</a></code> | <code>str</code> | The type of storage connector. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectors.property.domains">domains</a></code> | <code>typing.List[str]</code> | The names of the domains for the account. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectors.property.resourceIdentifier">resource_identifier</a></code> | <code>str</code> | The ARN of the storage connector. |

---

##### `connector_type`<sup>Optional</sup> <a name="connector_type" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectors.property.connectorType"></a>

```python
connector_type: str
```

- *Type:* str

The type of storage connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_stack#connector_type AppstreamStack#connector_type}

---

##### `domains`<sup>Optional</sup> <a name="domains" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectors.property.domains"></a>

```python
domains: typing.List[str]
```

- *Type:* typing.List[str]

The names of the domains for the account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_stack#domains AppstreamStack#domains}

---

##### `resource_identifier`<sup>Optional</sup> <a name="resource_identifier" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectors.property.resourceIdentifier"></a>

```python
resource_identifier: str
```

- *Type:* str

The ARN of the storage connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_stack#resource_identifier AppstreamStack#resource_identifier}

---

### AppstreamStackStreamingExperienceSettings <a name="AppstreamStackStreamingExperienceSettings" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettings.Initializer"></a>

```python
from cdktn_provider_awscc import appstream_stack

appstreamStack.AppstreamStackStreamingExperienceSettings(
  preferred_protocol: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettings.property.preferredProtocol">preferred_protocol</a></code> | <code>str</code> | The preferred protocol that you want to use while streaming your application. |

---

##### `preferred_protocol`<sup>Optional</sup> <a name="preferred_protocol" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettings.property.preferredProtocol"></a>

```python
preferred_protocol: str
```

- *Type:* str

The preferred protocol that you want to use while streaming your application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_stack#preferred_protocol AppstreamStack#preferred_protocol}

---

### AppstreamStackTags <a name="AppstreamStackTags" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTags.Initializer"></a>

```python
from cdktn_provider_awscc import appstream_stack

appstreamStack.AppstreamStackTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTags.property.key">key</a></code> | <code>str</code> | The key of the tag. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTags.property.value">value</a></code> | <code>str</code> | The value of the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_stack#key AppstreamStack#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_stack#value AppstreamStack#value}

---

### AppstreamStackUserSettings <a name="AppstreamStackUserSettings" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettings.Initializer"></a>

```python
from cdktn_provider_awscc import appstream_stack

appstreamStack.AppstreamStackUserSettings(
  action: str = None,
  maximum_length: typing.Union[int, float] = None,
  permission: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettings.property.action">action</a></code> | <code>str</code> | The action that is enabled or disabled. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettings.property.maximumLength">maximum_length</a></code> | <code>typing.Union[int, float]</code> | Specifies the number of characters that can be copied by end users from the local device to the remote session, and to the local device from the remote session. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettings.property.permission">permission</a></code> | <code>str</code> | Indicates whether the action is enabled or disabled. |

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettings.property.action"></a>

```python
action: str
```

- *Type:* str

The action that is enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_stack#action AppstreamStack#action}

---

##### `maximum_length`<sup>Optional</sup> <a name="maximum_length" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettings.property.maximumLength"></a>

```python
maximum_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specifies the number of characters that can be copied by end users from the local device to the remote session, and to the local device from the remote session.

This can be specified only for the CLIPBOARD_COPY_FROM_LOCAL_DEVICE and CLIPBOARD_COPY_TO_LOCAL_DEVICE actions. This defaults to 20,971,520 (20 MB) when unspecified and the permission is ENABLED. This can't be specified when the permission is DISABLED. The value can be between 1 and 20,971,520 (20 MB).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_stack#maximum_length AppstreamStack#maximum_length}

---

##### `permission`<sup>Optional</sup> <a name="permission" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettings.property.permission"></a>

```python
permission: str
```

- *Type:* str

Indicates whether the action is enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_stack#permission AppstreamStack#permission}

---

## Classes <a name="Classes" id="Classes"></a>

### AppstreamStackAccessEndpointsList <a name="AppstreamStackAccessEndpointsList" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsList.Initializer"></a>

```python
from cdktn_provider_awscc import appstream_stack

appstreamStack.AppstreamStackAccessEndpointsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AppstreamStackAccessEndpointsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpoints">AppstreamStackAccessEndpoints</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[AppstreamStackAccessEndpoints]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpoints">AppstreamStackAccessEndpoints</a>]

---


### AppstreamStackAccessEndpointsOutputReference <a name="AppstreamStackAccessEndpointsOutputReference" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import appstream_stack

appstreamStack.AppstreamStackAccessEndpointsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.resetEndpointType">reset_endpoint_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.resetVpceId">reset_vpce_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_endpoint_type` <a name="reset_endpoint_type" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.resetEndpointType"></a>

```python
def reset_endpoint_type() -> None
```

##### `reset_vpce_id` <a name="reset_vpce_id" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.resetVpceId"></a>

```python
def reset_vpce_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.property.endpointTypeInput">endpoint_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.property.vpceIdInput">vpce_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.property.endpointType">endpoint_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.property.vpceId">vpce_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpoints">AppstreamStackAccessEndpoints</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `endpoint_type_input`<sup>Optional</sup> <a name="endpoint_type_input" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.property.endpointTypeInput"></a>

```python
endpoint_type_input: str
```

- *Type:* str

---

##### `vpce_id_input`<sup>Optional</sup> <a name="vpce_id_input" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.property.vpceIdInput"></a>

```python
vpce_id_input: str
```

- *Type:* str

---

##### `endpoint_type`<sup>Required</sup> <a name="endpoint_type" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.property.endpointType"></a>

```python
endpoint_type: str
```

- *Type:* str

---

##### `vpce_id`<sup>Required</sup> <a name="vpce_id" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.property.vpceId"></a>

```python
vpce_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AppstreamStackAccessEndpoints
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpoints">AppstreamStackAccessEndpoints</a>

---


### AppstreamStackAgentAccessConfigOutputReference <a name="AppstreamStackAgentAccessConfigOutputReference" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import appstream_stack

appstreamStack.AppstreamStackAgentAccessConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.putSettings">put_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.resetS3BucketArn">reset_s3_bucket_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.resetScreenImageFormat">reset_screen_image_format</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.resetScreenResolution">reset_screen_resolution</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.resetScreenshotsUploadEnabled">reset_screenshots_upload_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.resetSettings">reset_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.resetUserControlMode">reset_user_control_mode</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_settings` <a name="put_settings" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.putSettings"></a>

```python
def put_settings(
  value: IResolvable | typing.List[AppstreamStackAgentAccessConfigSettings]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.putSettings.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettings">AppstreamStackAgentAccessConfigSettings</a>]

---

##### `reset_s3_bucket_arn` <a name="reset_s3_bucket_arn" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.resetS3BucketArn"></a>

```python
def reset_s3_bucket_arn() -> None
```

##### `reset_screen_image_format` <a name="reset_screen_image_format" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.resetScreenImageFormat"></a>

```python
def reset_screen_image_format() -> None
```

##### `reset_screen_resolution` <a name="reset_screen_resolution" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.resetScreenResolution"></a>

```python
def reset_screen_resolution() -> None
```

##### `reset_screenshots_upload_enabled` <a name="reset_screenshots_upload_enabled" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.resetScreenshotsUploadEnabled"></a>

```python
def reset_screenshots_upload_enabled() -> None
```

##### `reset_settings` <a name="reset_settings" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.resetSettings"></a>

```python
def reset_settings() -> None
```

##### `reset_user_control_mode` <a name="reset_user_control_mode" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.resetUserControlMode"></a>

```python
def reset_user_control_mode() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.property.settings">settings</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsList">AppstreamStackAgentAccessConfigSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.property.s3BucketArnInput">s3_bucket_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.property.screenImageFormatInput">screen_image_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.property.screenResolutionInput">screen_resolution_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.property.screenshotsUploadEnabledInput">screenshots_upload_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.property.settingsInput">settings_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettings">AppstreamStackAgentAccessConfigSettings</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.property.userControlModeInput">user_control_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.property.s3BucketArn">s3_bucket_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.property.screenImageFormat">screen_image_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.property.screenResolution">screen_resolution</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.property.screenshotsUploadEnabled">screenshots_upload_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.property.userControlMode">user_control_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfig">AppstreamStackAgentAccessConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `settings`<sup>Required</sup> <a name="settings" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.property.settings"></a>

```python
settings: AppstreamStackAgentAccessConfigSettingsList
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsList">AppstreamStackAgentAccessConfigSettingsList</a>

---

##### `s3_bucket_arn_input`<sup>Optional</sup> <a name="s3_bucket_arn_input" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.property.s3BucketArnInput"></a>

```python
s3_bucket_arn_input: str
```

- *Type:* str

---

##### `screen_image_format_input`<sup>Optional</sup> <a name="screen_image_format_input" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.property.screenImageFormatInput"></a>

```python
screen_image_format_input: str
```

- *Type:* str

---

##### `screen_resolution_input`<sup>Optional</sup> <a name="screen_resolution_input" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.property.screenResolutionInput"></a>

```python
screen_resolution_input: str
```

- *Type:* str

---

##### `screenshots_upload_enabled_input`<sup>Optional</sup> <a name="screenshots_upload_enabled_input" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.property.screenshotsUploadEnabledInput"></a>

```python
screenshots_upload_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `settings_input`<sup>Optional</sup> <a name="settings_input" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.property.settingsInput"></a>

```python
settings_input: IResolvable | typing.List[AppstreamStackAgentAccessConfigSettings]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettings">AppstreamStackAgentAccessConfigSettings</a>]

---

##### `user_control_mode_input`<sup>Optional</sup> <a name="user_control_mode_input" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.property.userControlModeInput"></a>

```python
user_control_mode_input: str
```

- *Type:* str

---

##### `s3_bucket_arn`<sup>Required</sup> <a name="s3_bucket_arn" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.property.s3BucketArn"></a>

```python
s3_bucket_arn: str
```

- *Type:* str

---

##### `screen_image_format`<sup>Required</sup> <a name="screen_image_format" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.property.screenImageFormat"></a>

```python
screen_image_format: str
```

- *Type:* str

---

##### `screen_resolution`<sup>Required</sup> <a name="screen_resolution" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.property.screenResolution"></a>

```python
screen_resolution: str
```

- *Type:* str

---

##### `screenshots_upload_enabled`<sup>Required</sup> <a name="screenshots_upload_enabled" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.property.screenshotsUploadEnabled"></a>

```python
screenshots_upload_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `user_control_mode`<sup>Required</sup> <a name="user_control_mode" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.property.userControlMode"></a>

```python
user_control_mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AppstreamStackAgentAccessConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfig">AppstreamStackAgentAccessConfig</a>

---


### AppstreamStackAgentAccessConfigSettingsList <a name="AppstreamStackAgentAccessConfigSettingsList" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsList.Initializer"></a>

```python
from cdktn_provider_awscc import appstream_stack

appstreamStack.AppstreamStackAgentAccessConfigSettingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AppstreamStackAgentAccessConfigSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettings">AppstreamStackAgentAccessConfigSettings</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[AppstreamStackAgentAccessConfigSettings]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettings">AppstreamStackAgentAccessConfigSettings</a>]

---


### AppstreamStackAgentAccessConfigSettingsOutputReference <a name="AppstreamStackAgentAccessConfigSettingsOutputReference" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import appstream_stack

appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.resetAgentAction">reset_agent_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.resetPermission">reset_permission</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_agent_action` <a name="reset_agent_action" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.resetAgentAction"></a>

```python
def reset_agent_action() -> None
```

##### `reset_permission` <a name="reset_permission" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.resetPermission"></a>

```python
def reset_permission() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.property.agentActionInput">agent_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.property.permissionInput">permission_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.property.agentAction">agent_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.property.permission">permission</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettings">AppstreamStackAgentAccessConfigSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `agent_action_input`<sup>Optional</sup> <a name="agent_action_input" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.property.agentActionInput"></a>

```python
agent_action_input: str
```

- *Type:* str

---

##### `permission_input`<sup>Optional</sup> <a name="permission_input" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.property.permissionInput"></a>

```python
permission_input: str
```

- *Type:* str

---

##### `agent_action`<sup>Required</sup> <a name="agent_action" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.property.agentAction"></a>

```python
agent_action: str
```

- *Type:* str

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.property.permission"></a>

```python
permission: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AppstreamStackAgentAccessConfigSettings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettings">AppstreamStackAgentAccessConfigSettings</a>

---


### AppstreamStackApplicationSettingsOutputReference <a name="AppstreamStackApplicationSettingsOutputReference" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import appstream_stack

appstreamStack.AppstreamStackApplicationSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.resetSettingsGroup">reset_settings_group</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enabled` <a name="reset_enabled" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_settings_group` <a name="reset_settings_group" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.resetSettingsGroup"></a>

```python
def reset_settings_group() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.property.settingsGroupInput">settings_group_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.property.settingsGroup">settings_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettings">AppstreamStackApplicationSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `settings_group_input`<sup>Optional</sup> <a name="settings_group_input" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.property.settingsGroupInput"></a>

```python
settings_group_input: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `settings_group`<sup>Required</sup> <a name="settings_group" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.property.settingsGroup"></a>

```python
settings_group: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AppstreamStackApplicationSettings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettings">AppstreamStackApplicationSettings</a>

---


### AppstreamStackContentRedirectionHostToClientOutputReference <a name="AppstreamStackContentRedirectionHostToClientOutputReference" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import appstream_stack

appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.resetAllowedUrls">reset_allowed_urls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.resetDeniedUrls">reset_denied_urls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_allowed_urls` <a name="reset_allowed_urls" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.resetAllowedUrls"></a>

```python
def reset_allowed_urls() -> None
```

##### `reset_denied_urls` <a name="reset_denied_urls" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.resetDeniedUrls"></a>

```python
def reset_denied_urls() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.property.allowedUrlsInput">allowed_urls_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.property.deniedUrlsInput">denied_urls_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.property.allowedUrls">allowed_urls</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.property.deniedUrls">denied_urls</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClient">AppstreamStackContentRedirectionHostToClient</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allowed_urls_input`<sup>Optional</sup> <a name="allowed_urls_input" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.property.allowedUrlsInput"></a>

```python
allowed_urls_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `denied_urls_input`<sup>Optional</sup> <a name="denied_urls_input" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.property.deniedUrlsInput"></a>

```python
denied_urls_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `allowed_urls`<sup>Required</sup> <a name="allowed_urls" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.property.allowedUrls"></a>

```python
allowed_urls: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `denied_urls`<sup>Required</sup> <a name="denied_urls" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.property.deniedUrls"></a>

```python
denied_urls: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AppstreamStackContentRedirectionHostToClient
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClient">AppstreamStackContentRedirectionHostToClient</a>

---


### AppstreamStackContentRedirectionOutputReference <a name="AppstreamStackContentRedirectionOutputReference" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import appstream_stack

appstreamStack.AppstreamStackContentRedirectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.putHostToClient">put_host_to_client</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.resetHostToClient">reset_host_to_client</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_host_to_client` <a name="put_host_to_client" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.putHostToClient"></a>

```python
def put_host_to_client(
  allowed_urls: typing.List[str] = None,
  denied_urls: typing.List[str] = None,
  enabled: bool | IResolvable = None
) -> None
```

###### `allowed_urls`<sup>Optional</sup> <a name="allowed_urls" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.putHostToClient.parameter.allowedUrls"></a>

- *Type:* typing.List[str]

The URLs that are allowed for redirection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_stack#allowed_urls AppstreamStack#allowed_urls}

---

###### `denied_urls`<sup>Optional</sup> <a name="denied_urls" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.putHostToClient.parameter.deniedUrls"></a>

- *Type:* typing.List[str]

The URLs that are denied for redirection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_stack#denied_urls AppstreamStack#denied_urls}

---

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.putHostToClient.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

Specifies whether URL redirection is enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_stack#enabled AppstreamStack#enabled}

---

##### `reset_host_to_client` <a name="reset_host_to_client" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.resetHostToClient"></a>

```python
def reset_host_to_client() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.property.hostToClient">host_to_client</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference">AppstreamStackContentRedirectionHostToClientOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.property.hostToClientInput">host_to_client_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClient">AppstreamStackContentRedirectionHostToClient</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirection">AppstreamStackContentRedirection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `host_to_client`<sup>Required</sup> <a name="host_to_client" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.property.hostToClient"></a>

```python
host_to_client: AppstreamStackContentRedirectionHostToClientOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference">AppstreamStackContentRedirectionHostToClientOutputReference</a>

---

##### `host_to_client_input`<sup>Optional</sup> <a name="host_to_client_input" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.property.hostToClientInput"></a>

```python
host_to_client_input: IResolvable | AppstreamStackContentRedirectionHostToClient
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClient">AppstreamStackContentRedirectionHostToClient</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AppstreamStackContentRedirection
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirection">AppstreamStackContentRedirection</a>

---


### AppstreamStackStorageConnectorsList <a name="AppstreamStackStorageConnectorsList" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsList.Initializer"></a>

```python
from cdktn_provider_awscc import appstream_stack

appstreamStack.AppstreamStackStorageConnectorsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AppstreamStackStorageConnectorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectors">AppstreamStackStorageConnectors</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[AppstreamStackStorageConnectors]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectors">AppstreamStackStorageConnectors</a>]

---


### AppstreamStackStorageConnectorsOutputReference <a name="AppstreamStackStorageConnectorsOutputReference" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import appstream_stack

appstreamStack.AppstreamStackStorageConnectorsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.resetConnectorType">reset_connector_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.resetDomains">reset_domains</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.resetResourceIdentifier">reset_resource_identifier</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_connector_type` <a name="reset_connector_type" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.resetConnectorType"></a>

```python
def reset_connector_type() -> None
```

##### `reset_domains` <a name="reset_domains" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.resetDomains"></a>

```python
def reset_domains() -> None
```

##### `reset_resource_identifier` <a name="reset_resource_identifier" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.resetResourceIdentifier"></a>

```python
def reset_resource_identifier() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.property.connectorTypeInput">connector_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.property.domainsInput">domains_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.property.resourceIdentifierInput">resource_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.property.connectorType">connector_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.property.domains">domains</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.property.resourceIdentifier">resource_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectors">AppstreamStackStorageConnectors</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `connector_type_input`<sup>Optional</sup> <a name="connector_type_input" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.property.connectorTypeInput"></a>

```python
connector_type_input: str
```

- *Type:* str

---

##### `domains_input`<sup>Optional</sup> <a name="domains_input" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.property.domainsInput"></a>

```python
domains_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `resource_identifier_input`<sup>Optional</sup> <a name="resource_identifier_input" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.property.resourceIdentifierInput"></a>

```python
resource_identifier_input: str
```

- *Type:* str

---

##### `connector_type`<sup>Required</sup> <a name="connector_type" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.property.connectorType"></a>

```python
connector_type: str
```

- *Type:* str

---

##### `domains`<sup>Required</sup> <a name="domains" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.property.domains"></a>

```python
domains: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `resource_identifier`<sup>Required</sup> <a name="resource_identifier" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.property.resourceIdentifier"></a>

```python
resource_identifier: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AppstreamStackStorageConnectors
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectors">AppstreamStackStorageConnectors</a>

---


### AppstreamStackStreamingExperienceSettingsOutputReference <a name="AppstreamStackStreamingExperienceSettingsOutputReference" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import appstream_stack

appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.resetPreferredProtocol">reset_preferred_protocol</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_preferred_protocol` <a name="reset_preferred_protocol" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.resetPreferredProtocol"></a>

```python
def reset_preferred_protocol() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.property.preferredProtocolInput">preferred_protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.property.preferredProtocol">preferred_protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettings">AppstreamStackStreamingExperienceSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `preferred_protocol_input`<sup>Optional</sup> <a name="preferred_protocol_input" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.property.preferredProtocolInput"></a>

```python
preferred_protocol_input: str
```

- *Type:* str

---

##### `preferred_protocol`<sup>Required</sup> <a name="preferred_protocol" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.property.preferredProtocol"></a>

```python
preferred_protocol: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AppstreamStackStreamingExperienceSettings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettings">AppstreamStackStreamingExperienceSettings</a>

---


### AppstreamStackTagsList <a name="AppstreamStackTagsList" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import appstream_stack

appstreamStack.AppstreamStackTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AppstreamStackTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTags">AppstreamStackTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[AppstreamStackTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTags">AppstreamStackTags</a>]

---


### AppstreamStackTagsOutputReference <a name="AppstreamStackTagsOutputReference" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import appstream_stack

appstreamStack.AppstreamStackTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTags">AppstreamStackTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AppstreamStackTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTags">AppstreamStackTags</a>

---


### AppstreamStackUserSettingsList <a name="AppstreamStackUserSettingsList" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsList.Initializer"></a>

```python
from cdktn_provider_awscc import appstream_stack

appstreamStack.AppstreamStackUserSettingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AppstreamStackUserSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettings">AppstreamStackUserSettings</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[AppstreamStackUserSettings]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettings">AppstreamStackUserSettings</a>]

---


### AppstreamStackUserSettingsOutputReference <a name="AppstreamStackUserSettingsOutputReference" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import appstream_stack

appstreamStack.AppstreamStackUserSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.resetAction">reset_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.resetMaximumLength">reset_maximum_length</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.resetPermission">reset_permission</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_action` <a name="reset_action" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.resetAction"></a>

```python
def reset_action() -> None
```

##### `reset_maximum_length` <a name="reset_maximum_length" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.resetMaximumLength"></a>

```python
def reset_maximum_length() -> None
```

##### `reset_permission` <a name="reset_permission" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.resetPermission"></a>

```python
def reset_permission() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.property.actionInput">action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.property.maximumLengthInput">maximum_length_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.property.permissionInput">permission_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.property.maximumLength">maximum_length</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.property.permission">permission</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettings">AppstreamStackUserSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action_input`<sup>Optional</sup> <a name="action_input" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.property.actionInput"></a>

```python
action_input: str
```

- *Type:* str

---

##### `maximum_length_input`<sup>Optional</sup> <a name="maximum_length_input" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.property.maximumLengthInput"></a>

```python
maximum_length_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `permission_input`<sup>Optional</sup> <a name="permission_input" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.property.permissionInput"></a>

```python
permission_input: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `maximum_length`<sup>Required</sup> <a name="maximum_length" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.property.maximumLength"></a>

```python
maximum_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.property.permission"></a>

```python
permission: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AppstreamStackUserSettings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettings">AppstreamStackUserSettings</a>

---



