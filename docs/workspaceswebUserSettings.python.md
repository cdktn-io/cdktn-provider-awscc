# `workspaceswebUserSettings` Submodule <a name="`workspaceswebUserSettings` Submodule" id="@cdktn/provider-awscc.workspaceswebUserSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WorkspaceswebUserSettings <a name="WorkspaceswebUserSettings" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings awscc_workspacesweb_user_settings}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.Initializer"></a>

```python
from cdktn_provider_awscc import workspacesweb_user_settings

workspaceswebUserSettings.WorkspaceswebUserSettings(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  copy_allowed: str,
  download_allowed: str,
  paste_allowed: str,
  print_allowed: str,
  upload_allowed: str,
  additional_encryption_context: typing.Mapping[str] = None,
  branding_configuration: WorkspaceswebUserSettingsBrandingConfiguration = None,
  cookie_synchronization_configuration: WorkspaceswebUserSettingsCookieSynchronizationConfiguration = None,
  customer_managed_key: str = None,
  deep_link_allowed: str = None,
  disconnect_timeout_in_minutes: typing.Union[int, float] = None,
  idle_disconnect_timeout_in_minutes: typing.Union[int, float] = None,
  tags: IResolvable | typing.List[WorkspaceswebUserSettingsTags] = None,
  toolbar_configuration: WorkspaceswebUserSettingsToolbarConfiguration = None,
  web_authn_allowed: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.Initializer.parameter.copyAllowed">copy_allowed</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#copy_allowed WorkspaceswebUserSettings#copy_allowed}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.Initializer.parameter.downloadAllowed">download_allowed</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#download_allowed WorkspaceswebUserSettings#download_allowed}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.Initializer.parameter.pasteAllowed">paste_allowed</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#paste_allowed WorkspaceswebUserSettings#paste_allowed}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.Initializer.parameter.printAllowed">print_allowed</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#print_allowed WorkspaceswebUserSettings#print_allowed}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.Initializer.parameter.uploadAllowed">upload_allowed</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#upload_allowed WorkspaceswebUserSettings#upload_allowed}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.Initializer.parameter.additionalEncryptionContext">additional_encryption_context</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#additional_encryption_context WorkspaceswebUserSettings#additional_encryption_context}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.Initializer.parameter.brandingConfiguration">branding_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfiguration">WorkspaceswebUserSettingsBrandingConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#branding_configuration WorkspaceswebUserSettings#branding_configuration}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.Initializer.parameter.cookieSynchronizationConfiguration">cookie_synchronization_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfiguration">WorkspaceswebUserSettingsCookieSynchronizationConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#cookie_synchronization_configuration WorkspaceswebUserSettings#cookie_synchronization_configuration}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.Initializer.parameter.customerManagedKey">customer_managed_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#customer_managed_key WorkspaceswebUserSettings#customer_managed_key}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.Initializer.parameter.deepLinkAllowed">deep_link_allowed</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#deep_link_allowed WorkspaceswebUserSettings#deep_link_allowed}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.Initializer.parameter.disconnectTimeoutInMinutes">disconnect_timeout_in_minutes</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#disconnect_timeout_in_minutes WorkspaceswebUserSettings#disconnect_timeout_in_minutes}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.Initializer.parameter.idleDisconnectTimeoutInMinutes">idle_disconnect_timeout_in_minutes</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#idle_disconnect_timeout_in_minutes WorkspaceswebUserSettings#idle_disconnect_timeout_in_minutes}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTags">WorkspaceswebUserSettingsTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#tags WorkspaceswebUserSettings#tags}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.Initializer.parameter.toolbarConfiguration">toolbar_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfiguration">WorkspaceswebUserSettingsToolbarConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#toolbar_configuration WorkspaceswebUserSettings#toolbar_configuration}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.Initializer.parameter.webAuthnAllowed">web_authn_allowed</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#web_authn_allowed WorkspaceswebUserSettings#web_authn_allowed}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `copy_allowed`<sup>Required</sup> <a name="copy_allowed" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.Initializer.parameter.copyAllowed"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#copy_allowed WorkspaceswebUserSettings#copy_allowed}.

---

##### `download_allowed`<sup>Required</sup> <a name="download_allowed" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.Initializer.parameter.downloadAllowed"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#download_allowed WorkspaceswebUserSettings#download_allowed}.

---

##### `paste_allowed`<sup>Required</sup> <a name="paste_allowed" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.Initializer.parameter.pasteAllowed"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#paste_allowed WorkspaceswebUserSettings#paste_allowed}.

---

##### `print_allowed`<sup>Required</sup> <a name="print_allowed" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.Initializer.parameter.printAllowed"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#print_allowed WorkspaceswebUserSettings#print_allowed}.

---

##### `upload_allowed`<sup>Required</sup> <a name="upload_allowed" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.Initializer.parameter.uploadAllowed"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#upload_allowed WorkspaceswebUserSettings#upload_allowed}.

---

##### `additional_encryption_context`<sup>Optional</sup> <a name="additional_encryption_context" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.Initializer.parameter.additionalEncryptionContext"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#additional_encryption_context WorkspaceswebUserSettings#additional_encryption_context}.

---

##### `branding_configuration`<sup>Optional</sup> <a name="branding_configuration" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.Initializer.parameter.brandingConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfiguration">WorkspaceswebUserSettingsBrandingConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#branding_configuration WorkspaceswebUserSettings#branding_configuration}.

---

##### `cookie_synchronization_configuration`<sup>Optional</sup> <a name="cookie_synchronization_configuration" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.Initializer.parameter.cookieSynchronizationConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfiguration">WorkspaceswebUserSettingsCookieSynchronizationConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#cookie_synchronization_configuration WorkspaceswebUserSettings#cookie_synchronization_configuration}.

---

##### `customer_managed_key`<sup>Optional</sup> <a name="customer_managed_key" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.Initializer.parameter.customerManagedKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#customer_managed_key WorkspaceswebUserSettings#customer_managed_key}.

---

##### `deep_link_allowed`<sup>Optional</sup> <a name="deep_link_allowed" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.Initializer.parameter.deepLinkAllowed"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#deep_link_allowed WorkspaceswebUserSettings#deep_link_allowed}.

---

##### `disconnect_timeout_in_minutes`<sup>Optional</sup> <a name="disconnect_timeout_in_minutes" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.Initializer.parameter.disconnectTimeoutInMinutes"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#disconnect_timeout_in_minutes WorkspaceswebUserSettings#disconnect_timeout_in_minutes}.

---

##### `idle_disconnect_timeout_in_minutes`<sup>Optional</sup> <a name="idle_disconnect_timeout_in_minutes" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.Initializer.parameter.idleDisconnectTimeoutInMinutes"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#idle_disconnect_timeout_in_minutes WorkspaceswebUserSettings#idle_disconnect_timeout_in_minutes}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTags">WorkspaceswebUserSettingsTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#tags WorkspaceswebUserSettings#tags}.

---

##### `toolbar_configuration`<sup>Optional</sup> <a name="toolbar_configuration" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.Initializer.parameter.toolbarConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfiguration">WorkspaceswebUserSettingsToolbarConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#toolbar_configuration WorkspaceswebUserSettings#toolbar_configuration}.

---

##### `web_authn_allowed`<sup>Optional</sup> <a name="web_authn_allowed" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.Initializer.parameter.webAuthnAllowed"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#web_authn_allowed WorkspaceswebUserSettings#web_authn_allowed}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.putBrandingConfiguration">put_branding_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.putCookieSynchronizationConfiguration">put_cookie_synchronization_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.putToolbarConfiguration">put_toolbar_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.resetAdditionalEncryptionContext">reset_additional_encryption_context</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.resetBrandingConfiguration">reset_branding_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.resetCookieSynchronizationConfiguration">reset_cookie_synchronization_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.resetCustomerManagedKey">reset_customer_managed_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.resetDeepLinkAllowed">reset_deep_link_allowed</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.resetDisconnectTimeoutInMinutes">reset_disconnect_timeout_in_minutes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.resetIdleDisconnectTimeoutInMinutes">reset_idle_disconnect_timeout_in_minutes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.resetToolbarConfiguration">reset_toolbar_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.resetWebAuthnAllowed">reset_web_authn_allowed</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_branding_configuration` <a name="put_branding_configuration" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.putBrandingConfiguration"></a>

```python
def put_branding_configuration(
  color_theme: str = None,
  favicon: str = None,
  localized_strings: IResolvable | typing.Mapping[WorkspaceswebUserSettingsBrandingConfigurationLocalizedStrings] = None,
  logo: str = None,
  terms_of_service: str = None,
  wallpaper: str = None
) -> None
```

###### `color_theme`<sup>Optional</sup> <a name="color_theme" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.putBrandingConfiguration.parameter.colorTheme"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#color_theme WorkspaceswebUserSettings#color_theme}.

---

###### `favicon`<sup>Optional</sup> <a name="favicon" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.putBrandingConfiguration.parameter.favicon"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#favicon WorkspaceswebUserSettings#favicon}.

---

###### `localized_strings`<sup>Optional</sup> <a name="localized_strings" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.putBrandingConfiguration.parameter.localizedStrings"></a>

- *Type:* cdktn.IResolvable | typing.Mapping[<a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStrings">WorkspaceswebUserSettingsBrandingConfigurationLocalizedStrings</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#localized_strings WorkspaceswebUserSettings#localized_strings}.

---

###### `logo`<sup>Optional</sup> <a name="logo" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.putBrandingConfiguration.parameter.logo"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#logo WorkspaceswebUserSettings#logo}.

---

###### `terms_of_service`<sup>Optional</sup> <a name="terms_of_service" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.putBrandingConfiguration.parameter.termsOfService"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#terms_of_service WorkspaceswebUserSettings#terms_of_service}.

---

###### `wallpaper`<sup>Optional</sup> <a name="wallpaper" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.putBrandingConfiguration.parameter.wallpaper"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#wallpaper WorkspaceswebUserSettings#wallpaper}.

---

##### `put_cookie_synchronization_configuration` <a name="put_cookie_synchronization_configuration" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.putCookieSynchronizationConfiguration"></a>

```python
def put_cookie_synchronization_configuration(
  allowlist: IResolvable | typing.List[WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStruct] = None,
  blocklist: IResolvable | typing.List[WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStruct] = None
) -> None
```

###### `allowlist`<sup>Optional</sup> <a name="allowlist" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.putCookieSynchronizationConfiguration.parameter.allowlist"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStruct">WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStruct</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#allowlist WorkspaceswebUserSettings#allowlist}.

---

###### `blocklist`<sup>Optional</sup> <a name="blocklist" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.putCookieSynchronizationConfiguration.parameter.blocklist"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStruct">WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStruct</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#blocklist WorkspaceswebUserSettings#blocklist}.

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[WorkspaceswebUserSettingsTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTags">WorkspaceswebUserSettingsTags</a>]

---

##### `put_toolbar_configuration` <a name="put_toolbar_configuration" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.putToolbarConfiguration"></a>

```python
def put_toolbar_configuration(
  hidden_toolbar_items: typing.List[str] = None,
  max_display_resolution: str = None,
  toolbar_type: str = None,
  visual_mode: str = None
) -> None
```

###### `hidden_toolbar_items`<sup>Optional</sup> <a name="hidden_toolbar_items" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.putToolbarConfiguration.parameter.hiddenToolbarItems"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#hidden_toolbar_items WorkspaceswebUserSettings#hidden_toolbar_items}.

---

###### `max_display_resolution`<sup>Optional</sup> <a name="max_display_resolution" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.putToolbarConfiguration.parameter.maxDisplayResolution"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#max_display_resolution WorkspaceswebUserSettings#max_display_resolution}.

---

###### `toolbar_type`<sup>Optional</sup> <a name="toolbar_type" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.putToolbarConfiguration.parameter.toolbarType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#toolbar_type WorkspaceswebUserSettings#toolbar_type}.

---

###### `visual_mode`<sup>Optional</sup> <a name="visual_mode" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.putToolbarConfiguration.parameter.visualMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#visual_mode WorkspaceswebUserSettings#visual_mode}.

---

##### `reset_additional_encryption_context` <a name="reset_additional_encryption_context" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.resetAdditionalEncryptionContext"></a>

```python
def reset_additional_encryption_context() -> None
```

##### `reset_branding_configuration` <a name="reset_branding_configuration" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.resetBrandingConfiguration"></a>

```python
def reset_branding_configuration() -> None
```

##### `reset_cookie_synchronization_configuration` <a name="reset_cookie_synchronization_configuration" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.resetCookieSynchronizationConfiguration"></a>

```python
def reset_cookie_synchronization_configuration() -> None
```

##### `reset_customer_managed_key` <a name="reset_customer_managed_key" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.resetCustomerManagedKey"></a>

```python
def reset_customer_managed_key() -> None
```

##### `reset_deep_link_allowed` <a name="reset_deep_link_allowed" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.resetDeepLinkAllowed"></a>

```python
def reset_deep_link_allowed() -> None
```

##### `reset_disconnect_timeout_in_minutes` <a name="reset_disconnect_timeout_in_minutes" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.resetDisconnectTimeoutInMinutes"></a>

```python
def reset_disconnect_timeout_in_minutes() -> None
```

##### `reset_idle_disconnect_timeout_in_minutes` <a name="reset_idle_disconnect_timeout_in_minutes" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.resetIdleDisconnectTimeoutInMinutes"></a>

```python
def reset_idle_disconnect_timeout_in_minutes() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_toolbar_configuration` <a name="reset_toolbar_configuration" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.resetToolbarConfiguration"></a>

```python
def reset_toolbar_configuration() -> None
```

##### `reset_web_authn_allowed` <a name="reset_web_authn_allowed" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.resetWebAuthnAllowed"></a>

```python
def reset_web_authn_allowed() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a WorkspaceswebUserSettings resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.isConstruct"></a>

```python
from cdktn_provider_awscc import workspacesweb_user_settings

workspaceswebUserSettings.WorkspaceswebUserSettings.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.isTerraformElement"></a>

```python
from cdktn_provider_awscc import workspacesweb_user_settings

workspaceswebUserSettings.WorkspaceswebUserSettings.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.isTerraformResource"></a>

```python
from cdktn_provider_awscc import workspacesweb_user_settings

workspaceswebUserSettings.WorkspaceswebUserSettings.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import workspacesweb_user_settings

workspaceswebUserSettings.WorkspaceswebUserSettings.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a WorkspaceswebUserSettings resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the WorkspaceswebUserSettings to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing WorkspaceswebUserSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the WorkspaceswebUserSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.associatedPortalArns">associated_portal_arns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.brandingConfiguration">branding_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference">WorkspaceswebUserSettingsBrandingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.cookieSynchronizationConfiguration">cookie_synchronization_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference">WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsList">WorkspaceswebUserSettingsTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.toolbarConfiguration">toolbar_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference">WorkspaceswebUserSettingsToolbarConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.userSettingsArn">user_settings_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.additionalEncryptionContextInput">additional_encryption_context_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.brandingConfigurationInput">branding_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfiguration">WorkspaceswebUserSettingsBrandingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.cookieSynchronizationConfigurationInput">cookie_synchronization_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfiguration">WorkspaceswebUserSettingsCookieSynchronizationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.copyAllowedInput">copy_allowed_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.customerManagedKeyInput">customer_managed_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.deepLinkAllowedInput">deep_link_allowed_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.disconnectTimeoutInMinutesInput">disconnect_timeout_in_minutes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.downloadAllowedInput">download_allowed_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.idleDisconnectTimeoutInMinutesInput">idle_disconnect_timeout_in_minutes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.pasteAllowedInput">paste_allowed_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.printAllowedInput">print_allowed_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTags">WorkspaceswebUserSettingsTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.toolbarConfigurationInput">toolbar_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfiguration">WorkspaceswebUserSettingsToolbarConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.uploadAllowedInput">upload_allowed_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.webAuthnAllowedInput">web_authn_allowed_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.additionalEncryptionContext">additional_encryption_context</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.copyAllowed">copy_allowed</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.customerManagedKey">customer_managed_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.deepLinkAllowed">deep_link_allowed</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.disconnectTimeoutInMinutes">disconnect_timeout_in_minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.downloadAllowed">download_allowed</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.idleDisconnectTimeoutInMinutes">idle_disconnect_timeout_in_minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.pasteAllowed">paste_allowed</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.printAllowed">print_allowed</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.uploadAllowed">upload_allowed</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.webAuthnAllowed">web_authn_allowed</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `associated_portal_arns`<sup>Required</sup> <a name="associated_portal_arns" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.associatedPortalArns"></a>

```python
associated_portal_arns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `branding_configuration`<sup>Required</sup> <a name="branding_configuration" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.brandingConfiguration"></a>

```python
branding_configuration: WorkspaceswebUserSettingsBrandingConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference">WorkspaceswebUserSettingsBrandingConfigurationOutputReference</a>

---

##### `cookie_synchronization_configuration`<sup>Required</sup> <a name="cookie_synchronization_configuration" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.cookieSynchronizationConfiguration"></a>

```python
cookie_synchronization_configuration: WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference">WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.tags"></a>

```python
tags: WorkspaceswebUserSettingsTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsList">WorkspaceswebUserSettingsTagsList</a>

---

##### `toolbar_configuration`<sup>Required</sup> <a name="toolbar_configuration" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.toolbarConfiguration"></a>

```python
toolbar_configuration: WorkspaceswebUserSettingsToolbarConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference">WorkspaceswebUserSettingsToolbarConfigurationOutputReference</a>

---

##### `user_settings_arn`<sup>Required</sup> <a name="user_settings_arn" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.userSettingsArn"></a>

```python
user_settings_arn: str
```

- *Type:* str

---

##### `additional_encryption_context_input`<sup>Optional</sup> <a name="additional_encryption_context_input" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.additionalEncryptionContextInput"></a>

```python
additional_encryption_context_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `branding_configuration_input`<sup>Optional</sup> <a name="branding_configuration_input" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.brandingConfigurationInput"></a>

```python
branding_configuration_input: IResolvable | WorkspaceswebUserSettingsBrandingConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfiguration">WorkspaceswebUserSettingsBrandingConfiguration</a>

---

##### `cookie_synchronization_configuration_input`<sup>Optional</sup> <a name="cookie_synchronization_configuration_input" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.cookieSynchronizationConfigurationInput"></a>

```python
cookie_synchronization_configuration_input: IResolvable | WorkspaceswebUserSettingsCookieSynchronizationConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfiguration">WorkspaceswebUserSettingsCookieSynchronizationConfiguration</a>

---

##### `copy_allowed_input`<sup>Optional</sup> <a name="copy_allowed_input" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.copyAllowedInput"></a>

```python
copy_allowed_input: str
```

- *Type:* str

---

##### `customer_managed_key_input`<sup>Optional</sup> <a name="customer_managed_key_input" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.customerManagedKeyInput"></a>

```python
customer_managed_key_input: str
```

- *Type:* str

---

##### `deep_link_allowed_input`<sup>Optional</sup> <a name="deep_link_allowed_input" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.deepLinkAllowedInput"></a>

```python
deep_link_allowed_input: str
```

- *Type:* str

---

##### `disconnect_timeout_in_minutes_input`<sup>Optional</sup> <a name="disconnect_timeout_in_minutes_input" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.disconnectTimeoutInMinutesInput"></a>

```python
disconnect_timeout_in_minutes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `download_allowed_input`<sup>Optional</sup> <a name="download_allowed_input" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.downloadAllowedInput"></a>

```python
download_allowed_input: str
```

- *Type:* str

---

##### `idle_disconnect_timeout_in_minutes_input`<sup>Optional</sup> <a name="idle_disconnect_timeout_in_minutes_input" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.idleDisconnectTimeoutInMinutesInput"></a>

```python
idle_disconnect_timeout_in_minutes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `paste_allowed_input`<sup>Optional</sup> <a name="paste_allowed_input" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.pasteAllowedInput"></a>

```python
paste_allowed_input: str
```

- *Type:* str

---

##### `print_allowed_input`<sup>Optional</sup> <a name="print_allowed_input" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.printAllowedInput"></a>

```python
print_allowed_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[WorkspaceswebUserSettingsTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTags">WorkspaceswebUserSettingsTags</a>]

---

##### `toolbar_configuration_input`<sup>Optional</sup> <a name="toolbar_configuration_input" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.toolbarConfigurationInput"></a>

```python
toolbar_configuration_input: IResolvable | WorkspaceswebUserSettingsToolbarConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfiguration">WorkspaceswebUserSettingsToolbarConfiguration</a>

---

##### `upload_allowed_input`<sup>Optional</sup> <a name="upload_allowed_input" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.uploadAllowedInput"></a>

```python
upload_allowed_input: str
```

- *Type:* str

---

##### `web_authn_allowed_input`<sup>Optional</sup> <a name="web_authn_allowed_input" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.webAuthnAllowedInput"></a>

```python
web_authn_allowed_input: str
```

- *Type:* str

---

##### `additional_encryption_context`<sup>Required</sup> <a name="additional_encryption_context" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.additionalEncryptionContext"></a>

```python
additional_encryption_context: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `copy_allowed`<sup>Required</sup> <a name="copy_allowed" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.copyAllowed"></a>

```python
copy_allowed: str
```

- *Type:* str

---

##### `customer_managed_key`<sup>Required</sup> <a name="customer_managed_key" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.customerManagedKey"></a>

```python
customer_managed_key: str
```

- *Type:* str

---

##### `deep_link_allowed`<sup>Required</sup> <a name="deep_link_allowed" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.deepLinkAllowed"></a>

```python
deep_link_allowed: str
```

- *Type:* str

---

##### `disconnect_timeout_in_minutes`<sup>Required</sup> <a name="disconnect_timeout_in_minutes" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.disconnectTimeoutInMinutes"></a>

```python
disconnect_timeout_in_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `download_allowed`<sup>Required</sup> <a name="download_allowed" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.downloadAllowed"></a>

```python
download_allowed: str
```

- *Type:* str

---

##### `idle_disconnect_timeout_in_minutes`<sup>Required</sup> <a name="idle_disconnect_timeout_in_minutes" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.idleDisconnectTimeoutInMinutes"></a>

```python
idle_disconnect_timeout_in_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `paste_allowed`<sup>Required</sup> <a name="paste_allowed" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.pasteAllowed"></a>

```python
paste_allowed: str
```

- *Type:* str

---

##### `print_allowed`<sup>Required</sup> <a name="print_allowed" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.printAllowed"></a>

```python
print_allowed: str
```

- *Type:* str

---

##### `upload_allowed`<sup>Required</sup> <a name="upload_allowed" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.uploadAllowed"></a>

```python
upload_allowed: str
```

- *Type:* str

---

##### `web_authn_allowed`<sup>Required</sup> <a name="web_authn_allowed" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.webAuthnAllowed"></a>

```python
web_authn_allowed: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### WorkspaceswebUserSettingsBrandingConfiguration <a name="WorkspaceswebUserSettingsBrandingConfiguration" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import workspacesweb_user_settings

workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfiguration(
  color_theme: str = None,
  favicon: str = None,
  localized_strings: IResolvable | typing.Mapping[WorkspaceswebUserSettingsBrandingConfigurationLocalizedStrings] = None,
  logo: str = None,
  terms_of_service: str = None,
  wallpaper: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfiguration.property.colorTheme">color_theme</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#color_theme WorkspaceswebUserSettings#color_theme}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfiguration.property.favicon">favicon</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#favicon WorkspaceswebUserSettings#favicon}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfiguration.property.localizedStrings">localized_strings</a></code> | <code>cdktn.IResolvable \| typing.Mapping[<a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStrings">WorkspaceswebUserSettingsBrandingConfigurationLocalizedStrings</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#localized_strings WorkspaceswebUserSettings#localized_strings}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfiguration.property.logo">logo</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#logo WorkspaceswebUserSettings#logo}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfiguration.property.termsOfService">terms_of_service</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#terms_of_service WorkspaceswebUserSettings#terms_of_service}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfiguration.property.wallpaper">wallpaper</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#wallpaper WorkspaceswebUserSettings#wallpaper}. |

---

##### `color_theme`<sup>Optional</sup> <a name="color_theme" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfiguration.property.colorTheme"></a>

```python
color_theme: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#color_theme WorkspaceswebUserSettings#color_theme}.

---

##### `favicon`<sup>Optional</sup> <a name="favicon" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfiguration.property.favicon"></a>

```python
favicon: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#favicon WorkspaceswebUserSettings#favicon}.

---

##### `localized_strings`<sup>Optional</sup> <a name="localized_strings" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfiguration.property.localizedStrings"></a>

```python
localized_strings: IResolvable | typing.Mapping[WorkspaceswebUserSettingsBrandingConfigurationLocalizedStrings]
```

- *Type:* cdktn.IResolvable | typing.Mapping[<a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStrings">WorkspaceswebUserSettingsBrandingConfigurationLocalizedStrings</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#localized_strings WorkspaceswebUserSettings#localized_strings}.

---

##### `logo`<sup>Optional</sup> <a name="logo" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfiguration.property.logo"></a>

```python
logo: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#logo WorkspaceswebUserSettings#logo}.

---

##### `terms_of_service`<sup>Optional</sup> <a name="terms_of_service" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfiguration.property.termsOfService"></a>

```python
terms_of_service: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#terms_of_service WorkspaceswebUserSettings#terms_of_service}.

---

##### `wallpaper`<sup>Optional</sup> <a name="wallpaper" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfiguration.property.wallpaper"></a>

```python
wallpaper: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#wallpaper WorkspaceswebUserSettings#wallpaper}.

---

### WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadata <a name="WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadata" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadata.Initializer"></a>

```python
from cdktn_provider_awscc import workspacesweb_user_settings

workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadata()
```


### WorkspaceswebUserSettingsBrandingConfigurationLocalizedStrings <a name="WorkspaceswebUserSettingsBrandingConfigurationLocalizedStrings" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStrings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStrings.Initializer"></a>

```python
from cdktn_provider_awscc import workspacesweb_user_settings

workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStrings(
  browser_tab_title: str = None,
  contact_button_text: str = None,
  contact_link: str = None,
  loading_text: str = None,
  login_button_text: str = None,
  login_description: str = None,
  login_title: str = None,
  welcome_text: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStrings.property.browserTabTitle">browser_tab_title</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#browser_tab_title WorkspaceswebUserSettings#browser_tab_title}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStrings.property.contactButtonText">contact_button_text</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#contact_button_text WorkspaceswebUserSettings#contact_button_text}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStrings.property.contactLink">contact_link</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#contact_link WorkspaceswebUserSettings#contact_link}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStrings.property.loadingText">loading_text</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#loading_text WorkspaceswebUserSettings#loading_text}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStrings.property.loginButtonText">login_button_text</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#login_button_text WorkspaceswebUserSettings#login_button_text}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStrings.property.loginDescription">login_description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#login_description WorkspaceswebUserSettings#login_description}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStrings.property.loginTitle">login_title</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#login_title WorkspaceswebUserSettings#login_title}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStrings.property.welcomeText">welcome_text</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#welcome_text WorkspaceswebUserSettings#welcome_text}. |

---

##### `browser_tab_title`<sup>Optional</sup> <a name="browser_tab_title" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStrings.property.browserTabTitle"></a>

```python
browser_tab_title: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#browser_tab_title WorkspaceswebUserSettings#browser_tab_title}.

---

##### `contact_button_text`<sup>Optional</sup> <a name="contact_button_text" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStrings.property.contactButtonText"></a>

```python
contact_button_text: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#contact_button_text WorkspaceswebUserSettings#contact_button_text}.

---

##### `contact_link`<sup>Optional</sup> <a name="contact_link" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStrings.property.contactLink"></a>

```python
contact_link: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#contact_link WorkspaceswebUserSettings#contact_link}.

---

##### `loading_text`<sup>Optional</sup> <a name="loading_text" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStrings.property.loadingText"></a>

```python
loading_text: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#loading_text WorkspaceswebUserSettings#loading_text}.

---

##### `login_button_text`<sup>Optional</sup> <a name="login_button_text" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStrings.property.loginButtonText"></a>

```python
login_button_text: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#login_button_text WorkspaceswebUserSettings#login_button_text}.

---

##### `login_description`<sup>Optional</sup> <a name="login_description" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStrings.property.loginDescription"></a>

```python
login_description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#login_description WorkspaceswebUserSettings#login_description}.

---

##### `login_title`<sup>Optional</sup> <a name="login_title" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStrings.property.loginTitle"></a>

```python
login_title: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#login_title WorkspaceswebUserSettings#login_title}.

---

##### `welcome_text`<sup>Optional</sup> <a name="welcome_text" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStrings.property.welcomeText"></a>

```python
welcome_text: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#welcome_text WorkspaceswebUserSettings#welcome_text}.

---

### WorkspaceswebUserSettingsBrandingConfigurationLogoMetadata <a name="WorkspaceswebUserSettingsBrandingConfigurationLogoMetadata" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLogoMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLogoMetadata.Initializer"></a>

```python
from cdktn_provider_awscc import workspacesweb_user_settings

workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLogoMetadata()
```


### WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadata <a name="WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadata" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadata.Initializer"></a>

```python
from cdktn_provider_awscc import workspacesweb_user_settings

workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadata()
```


### WorkspaceswebUserSettingsConfig <a name="WorkspaceswebUserSettingsConfig" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsConfig.Initializer"></a>

```python
from cdktn_provider_awscc import workspacesweb_user_settings

workspaceswebUserSettings.WorkspaceswebUserSettingsConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  copy_allowed: str,
  download_allowed: str,
  paste_allowed: str,
  print_allowed: str,
  upload_allowed: str,
  additional_encryption_context: typing.Mapping[str] = None,
  branding_configuration: WorkspaceswebUserSettingsBrandingConfiguration = None,
  cookie_synchronization_configuration: WorkspaceswebUserSettingsCookieSynchronizationConfiguration = None,
  customer_managed_key: str = None,
  deep_link_allowed: str = None,
  disconnect_timeout_in_minutes: typing.Union[int, float] = None,
  idle_disconnect_timeout_in_minutes: typing.Union[int, float] = None,
  tags: IResolvable | typing.List[WorkspaceswebUserSettingsTags] = None,
  toolbar_configuration: WorkspaceswebUserSettingsToolbarConfiguration = None,
  web_authn_allowed: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsConfig.property.copyAllowed">copy_allowed</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#copy_allowed WorkspaceswebUserSettings#copy_allowed}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsConfig.property.downloadAllowed">download_allowed</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#download_allowed WorkspaceswebUserSettings#download_allowed}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsConfig.property.pasteAllowed">paste_allowed</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#paste_allowed WorkspaceswebUserSettings#paste_allowed}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsConfig.property.printAllowed">print_allowed</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#print_allowed WorkspaceswebUserSettings#print_allowed}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsConfig.property.uploadAllowed">upload_allowed</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#upload_allowed WorkspaceswebUserSettings#upload_allowed}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsConfig.property.additionalEncryptionContext">additional_encryption_context</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#additional_encryption_context WorkspaceswebUserSettings#additional_encryption_context}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsConfig.property.brandingConfiguration">branding_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfiguration">WorkspaceswebUserSettingsBrandingConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#branding_configuration WorkspaceswebUserSettings#branding_configuration}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsConfig.property.cookieSynchronizationConfiguration">cookie_synchronization_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfiguration">WorkspaceswebUserSettingsCookieSynchronizationConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#cookie_synchronization_configuration WorkspaceswebUserSettings#cookie_synchronization_configuration}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsConfig.property.customerManagedKey">customer_managed_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#customer_managed_key WorkspaceswebUserSettings#customer_managed_key}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsConfig.property.deepLinkAllowed">deep_link_allowed</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#deep_link_allowed WorkspaceswebUserSettings#deep_link_allowed}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsConfig.property.disconnectTimeoutInMinutes">disconnect_timeout_in_minutes</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#disconnect_timeout_in_minutes WorkspaceswebUserSettings#disconnect_timeout_in_minutes}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsConfig.property.idleDisconnectTimeoutInMinutes">idle_disconnect_timeout_in_minutes</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#idle_disconnect_timeout_in_minutes WorkspaceswebUserSettings#idle_disconnect_timeout_in_minutes}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTags">WorkspaceswebUserSettingsTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#tags WorkspaceswebUserSettings#tags}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsConfig.property.toolbarConfiguration">toolbar_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfiguration">WorkspaceswebUserSettingsToolbarConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#toolbar_configuration WorkspaceswebUserSettings#toolbar_configuration}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsConfig.property.webAuthnAllowed">web_authn_allowed</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#web_authn_allowed WorkspaceswebUserSettings#web_authn_allowed}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `copy_allowed`<sup>Required</sup> <a name="copy_allowed" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsConfig.property.copyAllowed"></a>

```python
copy_allowed: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#copy_allowed WorkspaceswebUserSettings#copy_allowed}.

---

##### `download_allowed`<sup>Required</sup> <a name="download_allowed" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsConfig.property.downloadAllowed"></a>

```python
download_allowed: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#download_allowed WorkspaceswebUserSettings#download_allowed}.

---

##### `paste_allowed`<sup>Required</sup> <a name="paste_allowed" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsConfig.property.pasteAllowed"></a>

```python
paste_allowed: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#paste_allowed WorkspaceswebUserSettings#paste_allowed}.

---

##### `print_allowed`<sup>Required</sup> <a name="print_allowed" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsConfig.property.printAllowed"></a>

```python
print_allowed: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#print_allowed WorkspaceswebUserSettings#print_allowed}.

---

##### `upload_allowed`<sup>Required</sup> <a name="upload_allowed" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsConfig.property.uploadAllowed"></a>

```python
upload_allowed: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#upload_allowed WorkspaceswebUserSettings#upload_allowed}.

---

##### `additional_encryption_context`<sup>Optional</sup> <a name="additional_encryption_context" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsConfig.property.additionalEncryptionContext"></a>

```python
additional_encryption_context: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#additional_encryption_context WorkspaceswebUserSettings#additional_encryption_context}.

---

##### `branding_configuration`<sup>Optional</sup> <a name="branding_configuration" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsConfig.property.brandingConfiguration"></a>

```python
branding_configuration: WorkspaceswebUserSettingsBrandingConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfiguration">WorkspaceswebUserSettingsBrandingConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#branding_configuration WorkspaceswebUserSettings#branding_configuration}.

---

##### `cookie_synchronization_configuration`<sup>Optional</sup> <a name="cookie_synchronization_configuration" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsConfig.property.cookieSynchronizationConfiguration"></a>

```python
cookie_synchronization_configuration: WorkspaceswebUserSettingsCookieSynchronizationConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfiguration">WorkspaceswebUserSettingsCookieSynchronizationConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#cookie_synchronization_configuration WorkspaceswebUserSettings#cookie_synchronization_configuration}.

---

##### `customer_managed_key`<sup>Optional</sup> <a name="customer_managed_key" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsConfig.property.customerManagedKey"></a>

```python
customer_managed_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#customer_managed_key WorkspaceswebUserSettings#customer_managed_key}.

---

##### `deep_link_allowed`<sup>Optional</sup> <a name="deep_link_allowed" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsConfig.property.deepLinkAllowed"></a>

```python
deep_link_allowed: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#deep_link_allowed WorkspaceswebUserSettings#deep_link_allowed}.

---

##### `disconnect_timeout_in_minutes`<sup>Optional</sup> <a name="disconnect_timeout_in_minutes" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsConfig.property.disconnectTimeoutInMinutes"></a>

```python
disconnect_timeout_in_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#disconnect_timeout_in_minutes WorkspaceswebUserSettings#disconnect_timeout_in_minutes}.

---

##### `idle_disconnect_timeout_in_minutes`<sup>Optional</sup> <a name="idle_disconnect_timeout_in_minutes" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsConfig.property.idleDisconnectTimeoutInMinutes"></a>

```python
idle_disconnect_timeout_in_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#idle_disconnect_timeout_in_minutes WorkspaceswebUserSettings#idle_disconnect_timeout_in_minutes}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[WorkspaceswebUserSettingsTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTags">WorkspaceswebUserSettingsTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#tags WorkspaceswebUserSettings#tags}.

---

##### `toolbar_configuration`<sup>Optional</sup> <a name="toolbar_configuration" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsConfig.property.toolbarConfiguration"></a>

```python
toolbar_configuration: WorkspaceswebUserSettingsToolbarConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfiguration">WorkspaceswebUserSettingsToolbarConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#toolbar_configuration WorkspaceswebUserSettings#toolbar_configuration}.

---

##### `web_authn_allowed`<sup>Optional</sup> <a name="web_authn_allowed" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsConfig.property.webAuthnAllowed"></a>

```python
web_authn_allowed: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#web_authn_allowed WorkspaceswebUserSettings#web_authn_allowed}.

---

### WorkspaceswebUserSettingsCookieSynchronizationConfiguration <a name="WorkspaceswebUserSettingsCookieSynchronizationConfiguration" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import workspacesweb_user_settings

workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfiguration(
  allowlist: IResolvable | typing.List[WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStruct] = None,
  blocklist: IResolvable | typing.List[WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStruct] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfiguration.property.allowlist">allowlist</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStruct">WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStruct</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#allowlist WorkspaceswebUserSettings#allowlist}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfiguration.property.blocklist">blocklist</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStruct">WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStruct</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#blocklist WorkspaceswebUserSettings#blocklist}. |

---

##### `allowlist`<sup>Optional</sup> <a name="allowlist" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfiguration.property.allowlist"></a>

```python
allowlist: IResolvable | typing.List[WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStruct]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStruct">WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStruct</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#allowlist WorkspaceswebUserSettings#allowlist}.

---

##### `blocklist`<sup>Optional</sup> <a name="blocklist" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfiguration.property.blocklist"></a>

```python
blocklist: IResolvable | typing.List[WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStruct]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStruct">WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStruct</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#blocklist WorkspaceswebUserSettings#blocklist}.

---

### WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStruct <a name="WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStruct" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStruct.Initializer"></a>

```python
from cdktn_provider_awscc import workspacesweb_user_settings

workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStruct(
  domain: str = None,
  name: str = None,
  path: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStruct.property.domain">domain</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#domain WorkspaceswebUserSettings#domain}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStruct.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#name WorkspaceswebUserSettings#name}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStruct.property.path">path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#path WorkspaceswebUserSettings#path}. |

---

##### `domain`<sup>Optional</sup> <a name="domain" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStruct.property.domain"></a>

```python
domain: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#domain WorkspaceswebUserSettings#domain}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStruct.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#name WorkspaceswebUserSettings#name}.

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStruct.property.path"></a>

```python
path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#path WorkspaceswebUserSettings#path}.

---

### WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStruct <a name="WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStruct" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStruct.Initializer"></a>

```python
from cdktn_provider_awscc import workspacesweb_user_settings

workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStruct(
  domain: str = None,
  name: str = None,
  path: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStruct.property.domain">domain</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#domain WorkspaceswebUserSettings#domain}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStruct.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#name WorkspaceswebUserSettings#name}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStruct.property.path">path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#path WorkspaceswebUserSettings#path}. |

---

##### `domain`<sup>Optional</sup> <a name="domain" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStruct.property.domain"></a>

```python
domain: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#domain WorkspaceswebUserSettings#domain}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStruct.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#name WorkspaceswebUserSettings#name}.

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStruct.property.path"></a>

```python
path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#path WorkspaceswebUserSettings#path}.

---

### WorkspaceswebUserSettingsTags <a name="WorkspaceswebUserSettingsTags" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTags.Initializer"></a>

```python
from cdktn_provider_awscc import workspacesweb_user_settings

workspaceswebUserSettings.WorkspaceswebUserSettingsTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#key WorkspaceswebUserSettings#key}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#value WorkspaceswebUserSettings#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#key WorkspaceswebUserSettings#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#value WorkspaceswebUserSettings#value}.

---

### WorkspaceswebUserSettingsToolbarConfiguration <a name="WorkspaceswebUserSettingsToolbarConfiguration" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import workspacesweb_user_settings

workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfiguration(
  hidden_toolbar_items: typing.List[str] = None,
  max_display_resolution: str = None,
  toolbar_type: str = None,
  visual_mode: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfiguration.property.hiddenToolbarItems">hidden_toolbar_items</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#hidden_toolbar_items WorkspaceswebUserSettings#hidden_toolbar_items}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfiguration.property.maxDisplayResolution">max_display_resolution</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#max_display_resolution WorkspaceswebUserSettings#max_display_resolution}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfiguration.property.toolbarType">toolbar_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#toolbar_type WorkspaceswebUserSettings#toolbar_type}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfiguration.property.visualMode">visual_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#visual_mode WorkspaceswebUserSettings#visual_mode}. |

---

##### `hidden_toolbar_items`<sup>Optional</sup> <a name="hidden_toolbar_items" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfiguration.property.hiddenToolbarItems"></a>

```python
hidden_toolbar_items: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#hidden_toolbar_items WorkspaceswebUserSettings#hidden_toolbar_items}.

---

##### `max_display_resolution`<sup>Optional</sup> <a name="max_display_resolution" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfiguration.property.maxDisplayResolution"></a>

```python
max_display_resolution: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#max_display_resolution WorkspaceswebUserSettings#max_display_resolution}.

---

##### `toolbar_type`<sup>Optional</sup> <a name="toolbar_type" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfiguration.property.toolbarType"></a>

```python
toolbar_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#toolbar_type WorkspaceswebUserSettings#toolbar_type}.

---

##### `visual_mode`<sup>Optional</sup> <a name="visual_mode" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfiguration.property.visualMode"></a>

```python
visual_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#visual_mode WorkspaceswebUserSettings#visual_mode}.

---

## Classes <a name="Classes" id="Classes"></a>

### WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference <a name="WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import workspacesweb_user_settings

workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.property.fileExtension">file_extension</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.property.lastUploadTimestamp">last_upload_timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.property.mimeType">mime_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadata">WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadata</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `file_extension`<sup>Required</sup> <a name="file_extension" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.property.fileExtension"></a>

```python
file_extension: str
```

- *Type:* str

---

##### `last_upload_timestamp`<sup>Required</sup> <a name="last_upload_timestamp" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.property.lastUploadTimestamp"></a>

```python
last_upload_timestamp: str
```

- *Type:* str

---

##### `mime_type`<sup>Required</sup> <a name="mime_type" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.property.mimeType"></a>

```python
mime_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.property.internalValue"></a>

```python
internal_value: WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadata
```

- *Type:* <a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadata">WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadata</a>

---


### WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsMap <a name="WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsMap" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsMap.Initializer"></a>

```python
from cdktn_provider_awscc import workspacesweb_user_settings

workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsMap(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsMap.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsMap.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsMap.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsMap.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsMap.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsMap.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsMap.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsMap.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsMap.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsMap.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsMap.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsMap.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsMap.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsMap.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsMap.get"></a>

```python
def get(
  key: str
) -> WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsMap.get.parameter.key"></a>

- *Type:* str

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsMap.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsMap.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsMap.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.Mapping[<a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStrings">WorkspaceswebUserSettingsBrandingConfigurationLocalizedStrings</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsMap.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsMap.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsMap.property.internalValue"></a>

```python
internal_value: IResolvable | typing.Mapping[WorkspaceswebUserSettingsBrandingConfigurationLocalizedStrings]
```

- *Type:* cdktn.IResolvable | typing.Mapping[<a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStrings">WorkspaceswebUserSettingsBrandingConfigurationLocalizedStrings</a>]

---


### WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference <a name="WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import workspacesweb_user_settings

workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_key: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.Initializer.parameter.complexObjectKey">complex_object_key</a></code> | <code>str</code> | the key of this item in the map. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_key`<sup>Required</sup> <a name="complex_object_key" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* str

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.resetBrowserTabTitle">reset_browser_tab_title</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.resetContactButtonText">reset_contact_button_text</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.resetContactLink">reset_contact_link</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.resetLoadingText">reset_loading_text</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.resetLoginButtonText">reset_login_button_text</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.resetLoginDescription">reset_login_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.resetLoginTitle">reset_login_title</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.resetWelcomeText">reset_welcome_text</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_browser_tab_title` <a name="reset_browser_tab_title" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.resetBrowserTabTitle"></a>

```python
def reset_browser_tab_title() -> None
```

##### `reset_contact_button_text` <a name="reset_contact_button_text" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.resetContactButtonText"></a>

```python
def reset_contact_button_text() -> None
```

##### `reset_contact_link` <a name="reset_contact_link" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.resetContactLink"></a>

```python
def reset_contact_link() -> None
```

##### `reset_loading_text` <a name="reset_loading_text" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.resetLoadingText"></a>

```python
def reset_loading_text() -> None
```

##### `reset_login_button_text` <a name="reset_login_button_text" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.resetLoginButtonText"></a>

```python
def reset_login_button_text() -> None
```

##### `reset_login_description` <a name="reset_login_description" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.resetLoginDescription"></a>

```python
def reset_login_description() -> None
```

##### `reset_login_title` <a name="reset_login_title" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.resetLoginTitle"></a>

```python
def reset_login_title() -> None
```

##### `reset_welcome_text` <a name="reset_welcome_text" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.resetWelcomeText"></a>

```python
def reset_welcome_text() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.property.browserTabTitleInput">browser_tab_title_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.property.contactButtonTextInput">contact_button_text_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.property.contactLinkInput">contact_link_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.property.loadingTextInput">loading_text_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.property.loginButtonTextInput">login_button_text_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.property.loginDescriptionInput">login_description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.property.loginTitleInput">login_title_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.property.welcomeTextInput">welcome_text_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.property.browserTabTitle">browser_tab_title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.property.contactButtonText">contact_button_text</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.property.contactLink">contact_link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.property.loadingText">loading_text</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.property.loginButtonText">login_button_text</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.property.loginDescription">login_description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.property.loginTitle">login_title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.property.welcomeText">welcome_text</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStrings">WorkspaceswebUserSettingsBrandingConfigurationLocalizedStrings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `browser_tab_title_input`<sup>Optional</sup> <a name="browser_tab_title_input" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.property.browserTabTitleInput"></a>

```python
browser_tab_title_input: str
```

- *Type:* str

---

##### `contact_button_text_input`<sup>Optional</sup> <a name="contact_button_text_input" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.property.contactButtonTextInput"></a>

```python
contact_button_text_input: str
```

- *Type:* str

---

##### `contact_link_input`<sup>Optional</sup> <a name="contact_link_input" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.property.contactLinkInput"></a>

```python
contact_link_input: str
```

- *Type:* str

---

##### `loading_text_input`<sup>Optional</sup> <a name="loading_text_input" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.property.loadingTextInput"></a>

```python
loading_text_input: str
```

- *Type:* str

---

##### `login_button_text_input`<sup>Optional</sup> <a name="login_button_text_input" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.property.loginButtonTextInput"></a>

```python
login_button_text_input: str
```

- *Type:* str

---

##### `login_description_input`<sup>Optional</sup> <a name="login_description_input" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.property.loginDescriptionInput"></a>

```python
login_description_input: str
```

- *Type:* str

---

##### `login_title_input`<sup>Optional</sup> <a name="login_title_input" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.property.loginTitleInput"></a>

```python
login_title_input: str
```

- *Type:* str

---

##### `welcome_text_input`<sup>Optional</sup> <a name="welcome_text_input" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.property.welcomeTextInput"></a>

```python
welcome_text_input: str
```

- *Type:* str

---

##### `browser_tab_title`<sup>Required</sup> <a name="browser_tab_title" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.property.browserTabTitle"></a>

```python
browser_tab_title: str
```

- *Type:* str

---

##### `contact_button_text`<sup>Required</sup> <a name="contact_button_text" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.property.contactButtonText"></a>

```python
contact_button_text: str
```

- *Type:* str

---

##### `contact_link`<sup>Required</sup> <a name="contact_link" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.property.contactLink"></a>

```python
contact_link: str
```

- *Type:* str

---

##### `loading_text`<sup>Required</sup> <a name="loading_text" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.property.loadingText"></a>

```python
loading_text: str
```

- *Type:* str

---

##### `login_button_text`<sup>Required</sup> <a name="login_button_text" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.property.loginButtonText"></a>

```python
login_button_text: str
```

- *Type:* str

---

##### `login_description`<sup>Required</sup> <a name="login_description" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.property.loginDescription"></a>

```python
login_description: str
```

- *Type:* str

---

##### `login_title`<sup>Required</sup> <a name="login_title" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.property.loginTitle"></a>

```python
login_title: str
```

- *Type:* str

---

##### `welcome_text`<sup>Required</sup> <a name="welcome_text" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.property.welcomeText"></a>

```python
welcome_text: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | WorkspaceswebUserSettingsBrandingConfigurationLocalizedStrings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStrings">WorkspaceswebUserSettingsBrandingConfigurationLocalizedStrings</a>

---


### WorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference <a name="WorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import workspacesweb_user_settings

workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.property.fileExtension">file_extension</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.property.lastUploadTimestamp">last_upload_timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.property.mimeType">mime_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLogoMetadata">WorkspaceswebUserSettingsBrandingConfigurationLogoMetadata</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `file_extension`<sup>Required</sup> <a name="file_extension" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.property.fileExtension"></a>

```python
file_extension: str
```

- *Type:* str

---

##### `last_upload_timestamp`<sup>Required</sup> <a name="last_upload_timestamp" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.property.lastUploadTimestamp"></a>

```python
last_upload_timestamp: str
```

- *Type:* str

---

##### `mime_type`<sup>Required</sup> <a name="mime_type" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.property.mimeType"></a>

```python
mime_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.property.internalValue"></a>

```python
internal_value: WorkspaceswebUserSettingsBrandingConfigurationLogoMetadata
```

- *Type:* <a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLogoMetadata">WorkspaceswebUserSettingsBrandingConfigurationLogoMetadata</a>

---


### WorkspaceswebUserSettingsBrandingConfigurationOutputReference <a name="WorkspaceswebUserSettingsBrandingConfigurationOutputReference" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import workspacesweb_user_settings

workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.putLocalizedStrings">put_localized_strings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.resetColorTheme">reset_color_theme</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.resetFavicon">reset_favicon</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.resetLocalizedStrings">reset_localized_strings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.resetLogo">reset_logo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.resetTermsOfService">reset_terms_of_service</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.resetWallpaper">reset_wallpaper</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_localized_strings` <a name="put_localized_strings" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.putLocalizedStrings"></a>

```python
def put_localized_strings(
  value: IResolvable | typing.Mapping[WorkspaceswebUserSettingsBrandingConfigurationLocalizedStrings]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.putLocalizedStrings.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.Mapping[<a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStrings">WorkspaceswebUserSettingsBrandingConfigurationLocalizedStrings</a>]

---

##### `reset_color_theme` <a name="reset_color_theme" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.resetColorTheme"></a>

```python
def reset_color_theme() -> None
```

##### `reset_favicon` <a name="reset_favicon" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.resetFavicon"></a>

```python
def reset_favicon() -> None
```

##### `reset_localized_strings` <a name="reset_localized_strings" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.resetLocalizedStrings"></a>

```python
def reset_localized_strings() -> None
```

##### `reset_logo` <a name="reset_logo" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.resetLogo"></a>

```python
def reset_logo() -> None
```

##### `reset_terms_of_service` <a name="reset_terms_of_service" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.resetTermsOfService"></a>

```python
def reset_terms_of_service() -> None
```

##### `reset_wallpaper` <a name="reset_wallpaper" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.resetWallpaper"></a>

```python
def reset_wallpaper() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.property.faviconMetadata">favicon_metadata</a></code> | <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference">WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.property.localizedStrings">localized_strings</a></code> | <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsMap">WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.property.logoMetadata">logo_metadata</a></code> | <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference">WorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.property.wallpaperMetadata">wallpaper_metadata</a></code> | <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference">WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.property.colorThemeInput">color_theme_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.property.faviconInput">favicon_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.property.localizedStringsInput">localized_strings_input</a></code> | <code>cdktn.IResolvable \| typing.Mapping[<a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStrings">WorkspaceswebUserSettingsBrandingConfigurationLocalizedStrings</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.property.logoInput">logo_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.property.termsOfServiceInput">terms_of_service_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.property.wallpaperInput">wallpaper_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.property.colorTheme">color_theme</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.property.favicon">favicon</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.property.logo">logo</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.property.termsOfService">terms_of_service</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.property.wallpaper">wallpaper</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfiguration">WorkspaceswebUserSettingsBrandingConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `favicon_metadata`<sup>Required</sup> <a name="favicon_metadata" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.property.faviconMetadata"></a>

```python
favicon_metadata: WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference">WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference</a>

---

##### `localized_strings`<sup>Required</sup> <a name="localized_strings" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.property.localizedStrings"></a>

```python
localized_strings: WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsMap
```

- *Type:* <a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsMap">WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsMap</a>

---

##### `logo_metadata`<sup>Required</sup> <a name="logo_metadata" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.property.logoMetadata"></a>

```python
logo_metadata: WorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference">WorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference</a>

---

##### `wallpaper_metadata`<sup>Required</sup> <a name="wallpaper_metadata" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.property.wallpaperMetadata"></a>

```python
wallpaper_metadata: WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference">WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference</a>

---

##### `color_theme_input`<sup>Optional</sup> <a name="color_theme_input" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.property.colorThemeInput"></a>

```python
color_theme_input: str
```

- *Type:* str

---

##### `favicon_input`<sup>Optional</sup> <a name="favicon_input" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.property.faviconInput"></a>

```python
favicon_input: str
```

- *Type:* str

---

##### `localized_strings_input`<sup>Optional</sup> <a name="localized_strings_input" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.property.localizedStringsInput"></a>

```python
localized_strings_input: IResolvable | typing.Mapping[WorkspaceswebUserSettingsBrandingConfigurationLocalizedStrings]
```

- *Type:* cdktn.IResolvable | typing.Mapping[<a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStrings">WorkspaceswebUserSettingsBrandingConfigurationLocalizedStrings</a>]

---

##### `logo_input`<sup>Optional</sup> <a name="logo_input" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.property.logoInput"></a>

```python
logo_input: str
```

- *Type:* str

---

##### `terms_of_service_input`<sup>Optional</sup> <a name="terms_of_service_input" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.property.termsOfServiceInput"></a>

```python
terms_of_service_input: str
```

- *Type:* str

---

##### `wallpaper_input`<sup>Optional</sup> <a name="wallpaper_input" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.property.wallpaperInput"></a>

```python
wallpaper_input: str
```

- *Type:* str

---

##### `color_theme`<sup>Required</sup> <a name="color_theme" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.property.colorTheme"></a>

```python
color_theme: str
```

- *Type:* str

---

##### `favicon`<sup>Required</sup> <a name="favicon" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.property.favicon"></a>

```python
favicon: str
```

- *Type:* str

---

##### `logo`<sup>Required</sup> <a name="logo" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.property.logo"></a>

```python
logo: str
```

- *Type:* str

---

##### `terms_of_service`<sup>Required</sup> <a name="terms_of_service" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.property.termsOfService"></a>

```python
terms_of_service: str
```

- *Type:* str

---

##### `wallpaper`<sup>Required</sup> <a name="wallpaper" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.property.wallpaper"></a>

```python
wallpaper: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | WorkspaceswebUserSettingsBrandingConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfiguration">WorkspaceswebUserSettingsBrandingConfiguration</a>

---


### WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference <a name="WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import workspacesweb_user_settings

workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.property.fileExtension">file_extension</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.property.lastUploadTimestamp">last_upload_timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.property.mimeType">mime_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadata">WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadata</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `file_extension`<sup>Required</sup> <a name="file_extension" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.property.fileExtension"></a>

```python
file_extension: str
```

- *Type:* str

---

##### `last_upload_timestamp`<sup>Required</sup> <a name="last_upload_timestamp" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.property.lastUploadTimestamp"></a>

```python
last_upload_timestamp: str
```

- *Type:* str

---

##### `mime_type`<sup>Required</sup> <a name="mime_type" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.property.mimeType"></a>

```python
mime_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.property.internalValue"></a>

```python
internal_value: WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadata
```

- *Type:* <a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadata">WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadata</a>

---


### WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList <a name="WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList.Initializer"></a>

```python
from cdktn_provider_awscc import workspacesweb_user_settings

workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStruct">WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStruct</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStruct]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStruct">WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStruct</a>]

---


### WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference <a name="WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import workspacesweb_user_settings

workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.resetDomain">reset_domain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.resetPath">reset_path</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_domain` <a name="reset_domain" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.resetDomain"></a>

```python
def reset_domain() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_path` <a name="reset_path" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.resetPath"></a>

```python
def reset_path() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.property.domainInput">domain_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.property.domain">domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStruct">WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStruct</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `domain_input`<sup>Optional</sup> <a name="domain_input" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.property.domainInput"></a>

```python
domain_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.property.domain"></a>

```python
domain: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStruct
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStruct">WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStruct</a>

---


### WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList <a name="WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList.Initializer"></a>

```python
from cdktn_provider_awscc import workspacesweb_user_settings

workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStruct">WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStruct</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStruct]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStruct">WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStruct</a>]

---


### WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference <a name="WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import workspacesweb_user_settings

workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.resetDomain">reset_domain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.resetPath">reset_path</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_domain` <a name="reset_domain" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.resetDomain"></a>

```python
def reset_domain() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_path` <a name="reset_path" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.resetPath"></a>

```python
def reset_path() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.property.domainInput">domain_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.property.domain">domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStruct">WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStruct</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `domain_input`<sup>Optional</sup> <a name="domain_input" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.property.domainInput"></a>

```python
domain_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.property.domain"></a>

```python
domain: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStruct
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStruct">WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStruct</a>

---


### WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference <a name="WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import workspacesweb_user_settings

workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.putAllowlist">put_allowlist</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.putBlocklist">put_blocklist</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.resetAllowlist">reset_allowlist</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.resetBlocklist">reset_blocklist</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_allowlist` <a name="put_allowlist" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.putAllowlist"></a>

```python
def put_allowlist(
  value: IResolvable | typing.List[WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStruct]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.putAllowlist.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStruct">WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStruct</a>]

---

##### `put_blocklist` <a name="put_blocklist" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.putBlocklist"></a>

```python
def put_blocklist(
  value: IResolvable | typing.List[WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStruct]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.putBlocklist.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStruct">WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStruct</a>]

---

##### `reset_allowlist` <a name="reset_allowlist" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.resetAllowlist"></a>

```python
def reset_allowlist() -> None
```

##### `reset_blocklist` <a name="reset_blocklist" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.resetBlocklist"></a>

```python
def reset_blocklist() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.property.allowlist">allowlist</a></code> | <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList">WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.property.blocklist">blocklist</a></code> | <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList">WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.property.allowlistInput">allowlist_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStruct">WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStruct</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.property.blocklistInput">blocklist_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStruct">WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStruct</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfiguration">WorkspaceswebUserSettingsCookieSynchronizationConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allowlist`<sup>Required</sup> <a name="allowlist" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.property.allowlist"></a>

```python
allowlist: WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList
```

- *Type:* <a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList">WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList</a>

---

##### `blocklist`<sup>Required</sup> <a name="blocklist" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.property.blocklist"></a>

```python
blocklist: WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList
```

- *Type:* <a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList">WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList</a>

---

##### `allowlist_input`<sup>Optional</sup> <a name="allowlist_input" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.property.allowlistInput"></a>

```python
allowlist_input: IResolvable | typing.List[WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStruct]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStruct">WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStruct</a>]

---

##### `blocklist_input`<sup>Optional</sup> <a name="blocklist_input" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.property.blocklistInput"></a>

```python
blocklist_input: IResolvable | typing.List[WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStruct]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStruct">WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStruct</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | WorkspaceswebUserSettingsCookieSynchronizationConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfiguration">WorkspaceswebUserSettingsCookieSynchronizationConfiguration</a>

---


### WorkspaceswebUserSettingsTagsList <a name="WorkspaceswebUserSettingsTagsList" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import workspacesweb_user_settings

workspaceswebUserSettings.WorkspaceswebUserSettingsTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> WorkspaceswebUserSettingsTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTags">WorkspaceswebUserSettingsTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[WorkspaceswebUserSettingsTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTags">WorkspaceswebUserSettingsTags</a>]

---


### WorkspaceswebUserSettingsTagsOutputReference <a name="WorkspaceswebUserSettingsTagsOutputReference" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import workspacesweb_user_settings

workspaceswebUserSettings.WorkspaceswebUserSettingsTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTags">WorkspaceswebUserSettingsTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | WorkspaceswebUserSettingsTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTags">WorkspaceswebUserSettingsTags</a>

---


### WorkspaceswebUserSettingsToolbarConfigurationOutputReference <a name="WorkspaceswebUserSettingsToolbarConfigurationOutputReference" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import workspacesweb_user_settings

workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.resetHiddenToolbarItems">reset_hidden_toolbar_items</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.resetMaxDisplayResolution">reset_max_display_resolution</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.resetToolbarType">reset_toolbar_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.resetVisualMode">reset_visual_mode</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_hidden_toolbar_items` <a name="reset_hidden_toolbar_items" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.resetHiddenToolbarItems"></a>

```python
def reset_hidden_toolbar_items() -> None
```

##### `reset_max_display_resolution` <a name="reset_max_display_resolution" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.resetMaxDisplayResolution"></a>

```python
def reset_max_display_resolution() -> None
```

##### `reset_toolbar_type` <a name="reset_toolbar_type" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.resetToolbarType"></a>

```python
def reset_toolbar_type() -> None
```

##### `reset_visual_mode` <a name="reset_visual_mode" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.resetVisualMode"></a>

```python
def reset_visual_mode() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.property.hiddenToolbarItemsInput">hidden_toolbar_items_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.property.maxDisplayResolutionInput">max_display_resolution_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.property.toolbarTypeInput">toolbar_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.property.visualModeInput">visual_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.property.hiddenToolbarItems">hidden_toolbar_items</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.property.maxDisplayResolution">max_display_resolution</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.property.toolbarType">toolbar_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.property.visualMode">visual_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfiguration">WorkspaceswebUserSettingsToolbarConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `hidden_toolbar_items_input`<sup>Optional</sup> <a name="hidden_toolbar_items_input" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.property.hiddenToolbarItemsInput"></a>

```python
hidden_toolbar_items_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `max_display_resolution_input`<sup>Optional</sup> <a name="max_display_resolution_input" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.property.maxDisplayResolutionInput"></a>

```python
max_display_resolution_input: str
```

- *Type:* str

---

##### `toolbar_type_input`<sup>Optional</sup> <a name="toolbar_type_input" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.property.toolbarTypeInput"></a>

```python
toolbar_type_input: str
```

- *Type:* str

---

##### `visual_mode_input`<sup>Optional</sup> <a name="visual_mode_input" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.property.visualModeInput"></a>

```python
visual_mode_input: str
```

- *Type:* str

---

##### `hidden_toolbar_items`<sup>Required</sup> <a name="hidden_toolbar_items" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.property.hiddenToolbarItems"></a>

```python
hidden_toolbar_items: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `max_display_resolution`<sup>Required</sup> <a name="max_display_resolution" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.property.maxDisplayResolution"></a>

```python
max_display_resolution: str
```

- *Type:* str

---

##### `toolbar_type`<sup>Required</sup> <a name="toolbar_type" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.property.toolbarType"></a>

```python
toolbar_type: str
```

- *Type:* str

---

##### `visual_mode`<sup>Required</sup> <a name="visual_mode" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.property.visualMode"></a>

```python
visual_mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | WorkspaceswebUserSettingsToolbarConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfiguration">WorkspaceswebUserSettingsToolbarConfiguration</a>

---



